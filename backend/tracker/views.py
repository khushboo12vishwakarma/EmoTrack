# views.py
from django.utils.http import urlsafe_base64_decode
from django.utils.encoding import force_str
import io
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
import re
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import TextEmotionSerializer
from .models import SessionLog, ProgressLog, RecoveryTracker
from .utils import chat_with_therapist, get_dynamic_daily_content
from rest_framework.permissions import AllowAny
from django.utils import timezone

from rest_framework.views import APIView
from .serializers import ProgressLogSerializer

from .models import Therapist, Appointment, TherapistReview, SessionHistory, ChatMessage
from .serializers import (TherapistSerializer, AppointmentSerializer, 
                         TherapistReviewSerializer, SessionHistorySerializer, 
                         UserProfileSerializer, ChatMessageSerializer, JournalEntrySerializer,  JournalEntry )

from .serializers import TherapistDetailSerializer
from django.db.models import Prefetch


# Audio/Video processing imports
import os
import tempfile
from datetime import datetime
import pytz
from pydub import AudioSegment
import speech_recognition as sr
import time
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
import json
from .models import ProgressLog, RecoveryTracker  
from .models import RecoveryTracker


class UserProgressLogs(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            tracker = RecoveryTracker.objects.get(user=request.user, is_active=True)
            logs = ProgressLog.objects.filter(tracker=tracker).order_by('date')
            serializer = ProgressLogSerializer(logs, many=True)
            return Response(serializer.data)
        except RecoveryTracker.DoesNotExist:
            return Response({'message': 'No active tracker found.'}, status=404)

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


# Add this import at the top of tracker/views.py
from django.contrib.auth import authenticate

# Add this login view to your tracker/views.py
@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    print(f"Login attempt with data: {request.data}")  # Debug log
    
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')
    
    print(f"Extracted - username: {username}, email: {email}")  # Debug log

    # Allow login with either username or email
    if email and not username:
        try:
            from django.contrib.auth.models import User
            user_obj = User.objects.get(email=email)
            username = user_obj.username
        except User.DoesNotExist:
            return Response({'error': 'Invalid credentials.'}, status=400)

    if not username or not password:
        return Response({'error': 'Username/Email and password are required.'}, status=400)

    user = authenticate(username=username, password=password)
    if user:
        tokens = get_tokens_for_user(user)
        return Response({
            'message': 'Login successful.',
            'tokens': tokens,
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
            }
        }, status=200)
    else:
        return Response({'error': 'Invalid credentials.'}, status=400)




@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')

    if not username or not password:
        return Response({'error': 'Username and password are required.'}, status=400)

    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists.'}, status=400)

    user = User.objects.create_user(username=username, password=password, email=email)
    tokens = get_tokens_for_user(user)

    return Response({
        'message': 'User created successfully.',
        'tokens': tokens
    }, status=201)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protected_view(request):
    return Response({'message': f'Hello {request.user.username}, you are authenticated!'})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def submit_thought(request):
    """
    PURE: Uses ONLY DeepSeek-R1:7b + daily_content.py (NO hardcoded content)
    """
    user = request.user
    
    text_input = request.data.get('text_input', '')
    audio_file = request.FILES.get('audio_file', None)
    video_file = request.FILES.get('video_file', None)


    
    text = ''
    
    try:
        if text_input:
            text = text_input.strip()
        elif audio_file:
            text = process_audio_to_text(audio_file)
        elif video_file:
            text = process_video_to_text(video_file)
        else:
            return Response({
                'error': 'Please provide input in text, audio, or video format.'
            }, status=400)

        if not text or not text.strip():
            return Response({
                'error': 'No valid text could be extracted from your input.'
            }, status=400)

        print(f"🤖 Processing with DeepSeek-R1:7b: {text[:50]}...")
        
        # Use your existing DeepSeek-R1:7b integration from utils.py
        ai_data, _ = chat_with_therapist(text, user)
        
        # Get comprehensive analysis - ONLY DeepSeek + daily_content.py
        comprehensive_analysis = get_pure_ai_analysis(ai_data, text)
        
        # Create session log
        log = SessionLog.objects.create(
            user=request.user,
            text_input=text,
            voice_input=audio_file,  
            video_input=video_file,  # Add this line to store the video file
            llm_emotion=comprehensive_analysis["emotion"],
            stress_level=comprehensive_analysis["stress_level"],
            time_of_analysis=comprehensive_analysis["time_of_analysis"],
            date=comprehensive_analysis["date"],
            suggestion=comprehensive_analysis["suggestion"]
        )



        # Auto-create ProgressLog using comprehensive analysis + daily content
        today = timezone.now().date()
        tracker = RecoveryTracker.objects.filter(user=user, is_active=True).first()

        if tracker and not ProgressLog.objects.filter(tracker=tracker, date=today).exists():
            daily = get_dynamic_daily_content()  # Your existing function from utils.py
            ProgressLog.objects.create(
                tracker=tracker,
                mood_rating=3,
                completed=False,
                tip_of_the_day=comprehensive_analysis["tip_of_the_day"] or daily["tip"],
                quote=comprehensive_analysis["motivational_quote"] or daily["quote"],
                journaling_prompt=comprehensive_analysis["journaling_prompt"] or daily["prompt"],
                music_link=comprehensive_analysis["music_for_relaxation"] or daily["music"],
                meditation_video=comprehensive_analysis["meditation_video"] or daily["video"]
            )

        return Response({
            'success': True,
            'input_type': get_input_type(text_input, audio_file, video_file),
            'processed_text': text,
            
            # ALL FIELDS FROM DEEPSEEK-R1:7b OR DAILY_CONTENT.PY ONLY
            'emotion': comprehensive_analysis["emotion"],
            'stress_level': comprehensive_analysis["stress_level"],
            'emotion_severity': comprehensive_analysis["emotion_severity"],
            'time_of_analysis': comprehensive_analysis["time_of_analysis"],
            'date': comprehensive_analysis["date"],
            'dos': comprehensive_analysis["dos"],
            'donts': comprehensive_analysis["donts"],
            'suggestion': comprehensive_analysis["suggestion"],
            'tip_of_the_day': comprehensive_analysis["tip_of_the_day"],
            'journaling_prompt': comprehensive_analysis["journaling_prompt"],
            'motivational_quote': comprehensive_analysis["motivational_quote"],
            'music_for_relaxation': comprehensive_analysis["music_for_relaxation"],
            'breathing_exercise': comprehensive_analysis["breathing_exercise"],
            'meditation_video': comprehensive_analysis["meditation_video"],
            'session_id': log.id,
            'user_id': user.id
        })

    except Exception as e:
        return Response({
            'error': f'Error processing input: {str(e)}'
        }, status=500)


def get_pure_ai_analysis(ai_data, original_text):
    """
    PURE: Only DeepSeek-R1:7b + daily_content.py (NO hardcoded emotion-specific content)
    """
    print(f"🎯 Pure AI analysis from DeepSeek-R1:7b + daily_content.py fallbacks")
    
    # Get current IST time and date
    ist = pytz.timezone('Asia/Kolkata')
    now = datetime.now(ist)
    current_time = now.strftime('%I:%M %p')
    current_date = now.strftime('%d-%m-%Y')
    
    # Extract data from DeepSeek response
    reply_text = ai_data.get("reply_text", "")
    
    # Basic fields from your utils.py extraction
    emotion = clean_field(ai_data.get("llm_emotion", "Mixed"))
    stress_level = clean_field(ai_data.get("stress_level", "Medium"))
    emotion_severity = clean_field(ai_data.get("emotion_severity", "Moderate"))
    
    # Extract additional fields from the DeepSeek reply_text
    dos = extract_list_from_reply(reply_text, "✅ Do's:", "❌")
    donts = extract_list_from_reply(reply_text, "❌ Don'ts:", "💡")
    
    # Extract individual fields from reply_text
    tip_of_day = extract_field_from_reply(reply_text, "💡 Tip of the Day:") or ai_data.get("tip_of_the_day")
    journaling_prompt = extract_field_from_reply(reply_text, "📝 Journaling Prompt:") or ai_data.get("journaling_prompt")
    motivational_quote = extract_field_from_reply(reply_text, "💬 Motivational Quote:") or ai_data.get("quote")
    music_link = extract_field_from_reply(reply_text, "🎧 Music for Relaxation:")
    breathing_exercise = extract_field_from_reply(reply_text, "🌬 Breathing Exercise:")
    meditation_video = extract_field_from_reply(reply_text, "🧘 Meditation Video:")
    
    # ONLY FALLBACK TO daily_content.py (NO hardcoded emotion-specific content)
    daily_fallback = get_dynamic_daily_content()
    
    return {
        "emotion": emotion,
        "stress_level": stress_level,
        "emotion_severity": emotion_severity,
        "time_of_analysis": current_time,
        "date": current_date,
        "dos": dos or daily_fallback.get("dos", []),
        "donts": donts or daily_fallback.get("donts", []),
        "suggestion": ai_data.get("suggestion", "Take time for self-care and consider reaching out for support."),
        "tip_of_the_day": tip_of_day or daily_fallback["tip"],
        "journaling_prompt": journaling_prompt or daily_fallback["prompt"],
        "motivational_quote": motivational_quote or daily_fallback["quote"],
        "music_for_relaxation": music_link or daily_fallback["music"],
        "breathing_exercise": breathing_exercise or daily_fallback.get("breathing", "Take slow, deep breaths"),
        "meditation_video": meditation_video or daily_fallback["video"]
    }


def clean_field(field_value):
    """Clean field values from DeepSeek response"""
    if not field_value or field_value in ["Unknown", "N/A", "Error"]:
        return "Mixed"
    
    cleaned = str(field_value).strip()
    cleaned = re.sub(r'^[:\-\s]+', '', cleaned)
    cleaned = re.sub(r'[*_]+', '', cleaned)
    
    return cleaned if cleaned else "Mixed"


def extract_list_from_reply(reply_text, start_marker, end_marker):
    """Extract bulleted list from DeepSeek reply"""
    try:
        start_idx = reply_text.find(start_marker)
        if start_idx == -1:
            return []
        
        end_idx = reply_text.find(end_marker, start_idx)
        if end_idx == -1:
            section = reply_text[start_idx + len(start_marker):]
        else:
            section = reply_text[start_idx + len(start_marker):end_idx]
        
        lines = section.strip().split('\n')
        items = []
        
        for line in lines:
            line = line.strip()
            if line and (line.startswith('-') or line.startswith('•') or line.startswith('*')):
                item = re.sub(r'^[\-\*\•\s]+', '', line).strip()
                if item and len(item) > 3:
                    items.append(item)
        
        return items[:4] if items else []
        
    except Exception as e:
        print(f"Error extracting list: {str(e)}")
        return []


def extract_field_from_reply(reply_text, marker):
    """Extract single field from DeepSeek reply"""
    try:
        start_idx = reply_text.find(marker)
        if start_idx == -1:
            return ""
        
        start_idx += len(marker)
        end_idx = reply_text.find('\n', start_idx)
        
        if end_idx == -1:
            field_text = reply_text[start_idx:].strip()
        else:
            field_text = reply_text[start_idx:end_idx].strip()
        
        # Clean the field
        field_text = re.sub(r'^[:\-\s]+', '', field_text)
        field_text = re.sub(r'[*_]+', '', field_text)
        
        return field_text if field_text and len(field_text) > 3 else ""
        
    except Exception as e:
        print(f"Error extracting field: {str(e)}")
        return ""


def get_input_type(text_input, audio_file, video_file):
    """Helper function to determine input type"""
    if text_input and text_input.strip():
        return "text"
    elif audio_file:
        return "audio"
    elif video_file:
        return "video"
    return "unknown"


# Audio/Video processing functions
def process_audio_to_text(audio_file):
    """Process audio file to text using speech recognition"""
    recognizer = sr.Recognizer()
    temp_files = []
    
    try:
        file_extension = os.path.splitext(audio_file.name)[1].lower()
        temp_original = tempfile.NamedTemporaryFile(delete=False, suffix=file_extension)
        temp_files.append(temp_original.name)
        
        for chunk in audio_file.chunks():
            temp_original.write(chunk)
        temp_original.close()
        
        if file_extension == '.m4a':
            audio = AudioSegment.from_file(temp_original.name, format="m4a")
        elif file_extension == '.mp4':
            audio = AudioSegment.from_file(temp_original.name, format="mp4")
        else:
            audio = AudioSegment.from_file(temp_original.name)
        
        audio = audio.set_frame_rate(16000).set_channels(1)
        wav_path = temp_original.name.replace(file_extension, '_converted.wav')
        temp_files.append(wav_path)
        audio.export(wav_path, format="wav")
        
        time.sleep(0.2)
        
        with sr.AudioFile(wav_path) as source:
            recognizer.adjust_for_ambient_noise(source, duration=1)
            audio_data = recognizer.record(source)
            
        text = recognizer.recognize_google(audio_data, language='en-US')
        return text
        
    except Exception as e:
        raise Exception(f"Audio processing error: {str(e)}")
    finally:
        cleanup_temp_files(temp_files)


def process_video_to_text(video_file):
    """Process video file to extract text from audio"""
    recognizer = sr.Recognizer()
    temp_files = []
    
    try:
        file_extension = os.path.splitext(video_file.name)[1].lower()
        temp_video = tempfile.NamedTemporaryFile(delete=False, suffix=file_extension)
        temp_files.append(temp_video.name)
        
        for chunk in video_file.chunks():
            temp_video.write(chunk)
        temp_video.close()
        
        if file_extension == '.mp4':
            video = AudioSegment.from_file(temp_video.name, format="mp4")
        else:
            video = AudioSegment.from_file(temp_video.name)
        
        audio = video.set_frame_rate(16000).set_channels(1)
        wav_path = temp_video.name.replace(file_extension, '_audio.wav')
        temp_files.append(wav_path)
        audio.export(wav_path, format="wav")
        
        time.sleep(0.2)
        
        with sr.AudioFile(wav_path) as source:
            recognizer.adjust_for_ambient_noise(source, duration=1)
            audio_data = recognizer.record(source)
            
        text = recognizer.recognize_google(audio_data, language='en-US')
        return text
        
    except Exception as e:
        raise Exception(f"Video processing error: {str(e)}")
    finally:
        cleanup_temp_files(temp_files)


def cleanup_temp_files(file_paths, max_retries=3):
    """Clean up temporary files with retry mechanism"""
    for file_path in file_paths:
        if os.path.exists(file_path):
            for attempt in range(max_retries):
                try:
                    os.unlink(file_path)
                    break
                except (OSError, PermissionError):
                    if attempt < max_retries - 1:
                        time.sleep(0.1 * (attempt + 1))


# Keep all your existing API endpoints below (they're already perfect!)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def mark_daily_checkin(request):
    user = request.user

    tracker = RecoveryTracker.objects.filter(user=user, is_active=True).first()
    if not tracker:
        return Response({'error': 'No active recovery tracker found.'}, status=404)

    today = timezone.now().date()
    if ProgressLog.objects.filter(tracker=tracker, date=today).exists():
        return Response({'message': 'Already submitted today.'})

    mood = request.data.get("mood_rating")
    if not mood:
        return Response({'error': 'Mood rating required.'})

    daily = get_dynamic_daily_content()
    log = ProgressLog.objects.create(
        tracker=tracker,
        mood_rating=int(mood),
        completed=True,
        tip_of_the_day=daily["tip"],
        quote=daily["quote"],
        journaling_prompt=daily["prompt"],
        music_link=daily["music"],
        meditation_video=daily["video"]
    )

    return Response({'message': 'Daily check-in saved.'})







# tracker/views.py - UPDATE mark_daily_checkin method

# Add these new views to your existing views.py
@csrf_exempt
@api_view(['POST'])
def mark_progress_completed(request, log_id):
    """
    Mark a progress log as completed
    """
    try:
        # For development/testing (remove user filter temporarily)
        progress_log = get_object_or_404(ProgressLog, id=log_id)
        
        # For production with authentication, use this instead:
        # progress_log = get_object_or_404(ProgressLog, id=log_id, tracker__user=request.user)
        
        # Mark as completed
        progress_log.completed = True
        progress_log.save()
        
        return Response({
            'success': True,
            'message': 'Progress log marked as completed successfully',
            'log_id': log_id,
            'completed': True
        }, status=status.HTTP_200_OK)
        
    except ProgressLog.DoesNotExist:
        return Response({
            'error': 'Progress log not found'
        }, status=status.HTTP_404_NOT_FOUND)
        
    except Exception as e:
        return Response({
            'error': f'An error occurred: {str(e)}'
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_today_progress_log(request):
    """Get today's progress log for the current user"""
    try:
        user = request.user
        tracker = RecoveryTracker.objects.get(user=user, is_active=True)
        today = timezone.now().date()
        
        progress_log = ProgressLog.objects.get(
            tracker=tracker, 
            date=today
        )
        
        serializer = ProgressLogSerializer(progress_log)
        return Response(serializer.data, status=200)
        
    except RecoveryTracker.DoesNotExist:
        return Response({
            'error': 'No active recovery tracker found.'
        }, status=404)
        
    except ProgressLog.DoesNotExist:
        return Response({
            'error': 'No progress log found for today.'
        }, status=404)
        
    except Exception as e:
        return Response({
            'error': f'Error getting progress log: {str(e)}'
        }, status=500)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def recovery_dashboard(request):
    user = request.user

    tracker = RecoveryTracker.objects.filter(user=user, is_active=True).first()
    if not tracker:
        return Response({'error': 'No active recovery plan.'})

    today = timezone.now().date()
    progress = ProgressLog.objects.filter(tracker=tracker, date=today).first()

    daily = get_dynamic_daily_content()

    return Response({
        "detected_emotion": tracker.emotion,
        "stress_level": tracker.stress_level,
        "tip_of_the_day": progress.tip_of_the_day if progress else daily["tip"],
        "quote": progress.quote if progress else daily["quote"],
        "journaling_prompt": progress.journaling_prompt if progress else daily["prompt"],
        "music_link": progress.music_link if progress else daily["music"],
        "meditation_video": progress.meditation_video if progress else daily["video"],
        "completed_today": bool(progress and progress.completed),
        "current_day": (today - tracker.start_date).days + 1
    })

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_active_recovery_tracker(request):
    """Get active recovery tracker with start/end dates"""
    try:
        user = request.user
        tracker = RecoveryTracker.objects.filter(user=user, is_active=True).first()
        
        if not tracker:
            return Response({
                'has_tracker': False,
                'message': 'No active recovery tracker found.'
            }, status=200)
        
        today = timezone.now().date()
        days_elapsed = (today - tracker.start_date).days
        days_remaining = (tracker.end_date - today).days
        total_days = (tracker.end_date - tracker.start_date).days
        
        return Response({
            'has_tracker': True,
            'tracker': {
                'id': tracker.id,
                'start_date': tracker.start_date,
                'end_date': tracker.end_date,
                'emotion': tracker.emotion,
                'stress_level': tracker.stress_level,
                'is_active': tracker.is_active,
                'days_elapsed': max(0, days_elapsed),
                'days_remaining': max(0, days_remaining),
                'total_days': total_days,
                'completion_percentage': min(100, (days_elapsed / total_days) * 100) if total_days > 0 else 0,
                'has_ended': tracker.has_ended()
            }
        }, status=200)
        
    except Exception as e:
        return Response({
            'error': f'Error getting recovery tracker: {str(e)}'
        }, status=500)
    

# views.py - Updated with proper filtering for 'both' availability
@api_view(['GET'])
def therapist_list(request):
    therapists = Therapist.objects.all()
    serializer = TherapistSerializer(therapists, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def online_therapists(request):
    # Include therapists with 'online' OR 'both' availability
    therapists = Therapist.objects.filter(availability_mode__in=['online', 'both'])
    serializer = TherapistSerializer(therapists, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def offline_therapists(request):
    # Include therapists with 'offline' OR 'both' availability
    therapists = Therapist.objects.filter(availability_mode__in=['offline', 'both'])
    serializer = TherapistSerializer(therapists, many=True, context={'request': request})
    return Response(serializer.data)



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def book_appointment(request):
    data = request.data.copy()
    data['user'] = request.user.id

    serializer = AppointmentSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Appointment booked successfully", "data": serializer.data})
    return Response(serializer.errors, status=400)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_session_history(request):
    user = request.user
    sessions = SessionHistory.objects.filter(user=user).order_by('-date')
    serializer = SessionHistorySerializer(sessions, many=True)
    return Response(serializer.data)



@api_view(['GET', 'PUT', 'PATCH'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    """
    Get user profile or update user profile
    """
    user = request.user
    
    if request.method == 'GET':
        # Handle GET request - fetch user profile
        serializer = UserProfileSerializer(user)
        return Response(serializer.data)
    
    elif request.method in ['PUT', 'PATCH']:
        # Handle PUT/PATCH request - update user profile
        partial = request.method == 'PATCH'  # PATCH allows partial updates
        serializer = UserProfileSerializer(user, data=request.data, partial=partial)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_chat_messages(request, session_id):
    messages = ChatMessage.objects.filter(session_id=session_id).order_by('timestamp')
    serializer = ChatMessageSerializer(messages, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def send_chat_message(request):
    serializer = ChatMessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def confirm_appointment(request, appointment_id):
    appt = Appointment.objects.filter(pk=appointment_id, user=request.user).first()
    if not appt:
        return Response({'error':'Appointment not found'}, status=404)
    
    if hasattr(appt, 'status'):
        appt.status = "Confirmed"
    else:
        appt.is_confirmed = True
    appt.save()
    return Response({'message':'Appointment confirmed'})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def complete_appointment(request, appointment_id):
    appt = Appointment.objects.filter(pk=appointment_id, user=request.user).first()
    if not appt:
        return Response({'error':'Appointment not found'}, status=404)

    if hasattr(appt, 'status'):
        appt.status = "Completed"
        appt.save()
    else:
        hist = SessionHistory.objects.filter(user=appt.user, therapist=appt.therapist, date=appt.date).first()
        if hist:
            hist.time_end = timezone.now().time()
            hist.summary = "Session completed."
            hist.save()
    return Response({'message':'Appointment marked completed'})



from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Therapist, TherapistReview
from .serializers import TherapistDetailSerializer

@api_view(['GET'])
def therapist_detail(request, pk):
    """
    Retrieve a specific therapist with their reviews
    """
    try:
        print(f"Fetching therapist with ID: {pk}")
        
        # Get the therapist by primary key
        therapist = get_object_or_404(Therapist, pk=pk)
        print(f"Found therapist: {therapist.name}")
        
        # Serialize therapist data with reviews
        serializer = TherapistDetailSerializer(therapist, context={'request': request})
        
        print(f"Serialized data: {serializer.data}")
        
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    except Therapist.DoesNotExist:
        print(f"Therapist with ID {pk} not found")
        return Response({
            'error': 'Therapist not found'
        }, status=status.HTTP_404_NOT_FOUND)
        
    except Exception as e:
        print(f"Error in therapist_detail view: {str(e)}")
        import traceback
        traceback.print_exc()
        return Response({
            'error': 'An error occurred while fetching therapist details',
            'details': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.utils import timezone
from django.http import JsonResponse
import json
from .models import SessionLog, ProgressLog, Appointment, UserDevice, ActivityLog, UserProfile
from .serializers import UserProfileSerializer

def get_client_ip(request):
    """Helper function to get client IP address"""
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip or '127.0.0.1'

# FIXED: User profile view
@api_view(['GET', 'PUT', 'PATCH'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    user = request.user
    
    if request.method == 'GET':
        serializer = UserProfileSerializer(user)
        return Response(serializer.data)
    
    elif request.method in ['PUT', 'PATCH']:
        serializer = UserProfileSerializer(user, data=request.data, partial=(request.method == 'PATCH'))
        if serializer.is_valid():
            serializer.save()
            
            # Log the activity
            try:
                ActivityLog.objects.create(
                    user=user,
                    action='Profile updated',
                    ip_address=get_client_ip(request),
                    user_agent=request.META.get('HTTP_USER_AGENT', '')[:255]
                )
            except:
                pass  # Don't fail if logging fails
            
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# FIXED: Privacy settings with proper error handling
@api_view(['GET', 'PUT', 'PATCH'])
@permission_classes([IsAuthenticated])
def privacy_settings(request):
    try:
        user = request.user
        print(f"Privacy settings request from user: {user.username}")
        
        if request.method == 'GET':
            # Get or create user profile
            try:
                profile = UserProfile.objects.get(user=user)
            except UserProfile.DoesNotExist:
                # Create default profile if it doesn't exist
                profile = UserProfile.objects.create(
                    user=user,
                    profile_visibility='private',
                    data_sharing_consent=False,
                    analytics_enabled=True,
                    marketing_emails=False,
                    login_notifications=True,
                    session_timeout='30',
                    email_notifications=True,
                    sms_notifications=False,
                    push_notifications=True,
                    therapist_communication=True
                )
                print(f"Created new profile for user {user.username}")
            
            settings = {
                'profileVisibility': profile.profile_visibility,
                'dataSharing': profile.data_sharing_consent,
                'analyticsTracking': profile.analytics_enabled,
                'marketingEmails': profile.marketing_emails,
                'twoFactorAuth': user.is_staff,
                'loginNotifications': profile.login_notifications,
                'sessionTimeout': profile.session_timeout,
                'passwordLastChanged': user.date_joined.strftime('%Y-%m-%d'),
                'emailNotifications': profile.email_notifications,
                'smsNotifications': profile.sms_notifications,
                'pushNotifications': profile.push_notifications,
                'therapistCommunication': profile.therapist_communication,
            }
            
            print(f"Returning privacy settings: {settings}")
            return Response(settings)
        
        elif request.method in ['PUT', 'PATCH']:
            # Get or create user profile
            profile, created = UserProfile.objects.get_or_create(
                user=user,
                defaults={
                    'profile_visibility': 'private',
                    'data_sharing_consent': False,
                    'analytics_enabled': True,
                    'marketing_emails': False,
                    'login_notifications': True,
                    'session_timeout': '30',
                    'email_notifications': True,
                    'sms_notifications': False,
                    'push_notifications': True,
                    'therapist_communication': True
                }
            )
            
            # Update fields from request data
            if 'profileVisibility' in request.data:
                profile.profile_visibility = request.data['profileVisibility']
            if 'dataSharing' in request.data:
                profile.data_sharing_consent = request.data['dataSharing']
            if 'analyticsTracking' in request.data:
                profile.analytics_enabled = request.data['analyticsTracking']
            if 'marketingEmails' in request.data:
                profile.marketing_emails = request.data['marketingEmails']
            if 'loginNotifications' in request.data:
                profile.login_notifications = request.data['loginNotifications']
            if 'sessionTimeout' in request.data:
                profile.session_timeout = request.data['sessionTimeout']
            if 'emailNotifications' in request.data:
                profile.email_notifications = request.data['emailNotifications']
            if 'smsNotifications' in request.data:
                profile.sms_notifications = request.data['smsNotifications']
            if 'pushNotifications' in request.data:
                profile.push_notifications = request.data['pushNotifications']
            if 'therapistCommunication' in request.data:
                profile.therapist_communication = request.data['therapistCommunication']
            
            profile.save()
            
            # Log the activity
            try:
                ActivityLog.objects.create(
                    user=user,
                    action='Privacy settings updated',
                    ip_address=get_client_ip(request),
                    user_agent=request.META.get('HTTP_USER_AGENT', '')[:255]
                )
            except:
                pass
            
            return Response({'message': 'Privacy settings updated successfully'})
    
    except Exception as e:
        print(f"Error in privacy_settings view: {str(e)}")
        return Response(
            {'error': f'Server error: {str(e)}'}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

# FIXED: Active devices
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def active_devices(request):
    try:
        user = request.user
        print(f"Fetching active devices for user: {user.username}")
        
        # Create or update current device
        user_agent = request.META.get('HTTP_USER_AGENT', 'Unknown Browser')
        ip_address = get_client_ip(request)
        
        # Parse user agent for device info
        device_name = 'Desktop'
        browser = 'Unknown Browser'
        
        if 'iPhone' in user_agent:
            device_name = 'iPhone'
            browser = 'Safari' if 'Safari' in user_agent else 'Mobile Browser'
        elif 'Android' in user_agent:
            device_name = 'Android Device'
            browser = 'Chrome' if 'Chrome' in user_agent else 'Mobile Browser'
        elif 'Windows' in user_agent:
            device_name = 'Windows PC'
            browser = 'Chrome' if 'Chrome' in user_agent else 'Firefox' if 'Firefox' in user_agent else 'Browser'
        elif 'Mac' in user_agent:
            device_name = 'Mac'
            browser = 'Safari' if 'Safari' in user_agent else 'Chrome' if 'Chrome' in user_agent else 'Browser'
        
        # Get or create current device
        device, created = UserDevice.objects.get_or_create(
            user=user,
            ip_address=ip_address,
            defaults={
                'device_name': device_name,
                'device_type': 'Mobile' if 'Mobile' in user_agent else 'Desktop',
                'browser': browser,
                'location': 'Current Location',
                'is_active': True,
                'user_agent': user_agent[:255]
            }
        )
        
        if not created:
            device.last_active = timezone.now()
            device.save()
        
        # Get all active devices
        devices = UserDevice.objects.filter(user=user, is_active=True)
        
        device_list = []
        for dev in devices:
            device_list.append({
                'id': dev.id,
                'device': f"{dev.device_name} ({dev.device_type})",
                'location': dev.location or 'Unknown Location',
                'lastActive': dev.last_active.strftime('%Y-%m-%d'),
                'browser': dev.browser,
                'ip': dev.ip_address
            })
        
        print(f"Returning {len(device_list)} devices")
        return Response(device_list)
    
    except Exception as e:
        print(f"Error in active_devices view: {str(e)}")
        return Response([], status=status.HTTP_200_OK)  # Return empty list instead of error

# FIXED: Recent activity
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def recent_activity(request):
    try:
        user = request.user
        print(f"Fetching recent activity for user: {user.username}")
        
        # Get recent activity from database
        activities = ActivityLog.objects.filter(user=user).order_by('-created_at')[:20]
        
        activity_list = []
        for activity in activities:
            activity_list.append({
                'id': activity.id,
                'action': activity.action,
                'timestamp': activity.created_at.strftime('%Y-%m-%d %H:%M'),
                'ip': activity.ip_address,
                'status': 'success'
            })
        
        # If no activities, create some sample ones based on user data
        if not activity_list:
            print("No activities found, creating sample data")
            
            # Create some sample activities
            sample_activities = []
            
            # Check if user has appointments
            appointment_count = Appointment.objects.filter(user=user).count()
            if appointment_count > 0:
                sample_activities.append({
                    'id': 'sample_1',
                    'action': f'{appointment_count} appointments scheduled',
                    'timestamp': timezone.now().strftime('%Y-%m-%d %H:%M'),
                    'ip': get_client_ip(request),
                    'status': 'success'
                })
            
            # Check if user has mood logs
            mood_count = SessionLog.objects.filter(user=user).count()
            if mood_count > 0:
                sample_activities.append({
                    'id': 'sample_2',
                    'action': f'{mood_count} mood entries recorded',
                    'timestamp': timezone.now().strftime('%Y-%m-%d %H:%M'),
                    'ip': get_client_ip(request),
                    'status': 'success'
                })
            
            # Add account creation activity
            sample_activities.append({
                'id': 'sample_3',
                'action': 'Account created',
                'timestamp': user.date_joined.strftime('%Y-%m-%d %H:%M'),
                'ip': get_client_ip(request),
                'status': 'success'
            })
            
            activity_list = sample_activities
        
        print(f"Returning {len(activity_list)} activities")
        return Response(activity_list)
    
    except Exception as e:
        print(f"Error in recent_activity view: {str(e)}")
        return Response([], status=status.HTTP_200_OK)  # Return empty list instead of error

# FIXED: Delete account
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_account(request):
    try:
        user = request.user
        user_id = user.id
        username = user.username
        
        print(f"Attempting to delete user {user_id}: {username}")
        
        # Log the deletion attempt
        try:
            ActivityLog.objects.create(
                user=user,
                action='Account deletion requested',
                ip_address=get_client_ip(request),
                user_agent=request.META.get('HTTP_USER_AGENT', '')[:255]
            )
        except:
            pass
        
        # Soft delete (recommended)
        user.is_active = False
        user.save()
        
        print(f"User {user_id} deactivated successfully")
        
        return Response(
            {'message': 'Account deleted successfully'}, 
            status=status.HTTP_200_OK
        )
        
    except Exception as e:
        print(f"Error deleting account: {str(e)}")
        return Response(
            {'error': f'Failed to delete account: {str(e)}'}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

# Other helper views
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def revoke_device(request, device_id):
    try:
        user = request.user
        device = UserDevice.objects.get(id=device_id, user=user)
        device.is_active = False
        device.save()
        
        return Response({'message': 'Device access revoked successfully'})
    except UserDevice.DoesNotExist:
        return Response({'error': 'Device not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password(request):
    try:
        current_password = request.data.get('currentPassword')
        new_password = request.data.get('newPassword')
        
        user = request.user
        
        if not user.check_password(current_password):
            return Response(
                {'error': 'Current password is incorrect'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        user.set_password(new_password)
        user.save()
        
        return Response({'message': 'Password changed successfully'})
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def enable_2fa(request):
    try:
        user = request.user
        user.is_staff = True
        user.save()
        
        return Response({'message': '2FA enabled successfully'})
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def disable_2fa(request):
    try:
        user = request.user
        user.is_staff = False
        user.save()
        
        return Response({'message': '2FA disabled successfully'})
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def request_data_export(request):
    try:
        # Log the request
        ActivityLog.objects.create(
            user=request.user,
            action='Data export requested',
            ip_address=get_client_ip(request),
            user_agent=request.META.get('HTTP_USER_AGENT', '')[:255]
        )
        
        return Response({
            'message': 'Data export requested. You will receive an email with download link within 24 hours.'
        })
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_all_data(request):
    try:
        user = request.user
        
        # Delete all related data
        SessionLog.objects.filter(user=user).delete()
        ProgressLog.objects.filter(tracker__user=user).delete()
        Appointment.objects.filter(user=user).delete()
        UserDevice.objects.filter(user=user).delete()
        ActivityLog.objects.filter(user=user).delete()
        
        # Delete user account
        user.delete()
        
        return Response({'message': 'All data deleted successfully'})
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def clear_activity(request):
    try:
        user = request.user
        count = ActivityLog.objects.filter(user=user).count()
        ActivityLog.objects.filter(user=user).delete()
        
        return Response({'message': f'Activity history cleared ({count} entries)'})
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)





@api_view(['POST'])
@permission_classes([IsAuthenticated])
def submit_therapist_review(request, therapist_id):
    try:
        print(f"🔍 Review submission - Therapist: {therapist_id}, User: {request.user}")
        
        therapist = get_object_or_404(Therapist, pk=therapist_id)
        
        # Check existing review
        if TherapistReview.objects.filter(therapist=therapist, user=request.user).exists():
            return Response({'error': 'You have already reviewed this therapist.'}, 
                          status=status.HTTP_400_BAD_REQUEST)
        
        # Create review
        review = TherapistReview.objects.create(
            therapist=therapist,
            user=request.user,
            rating=int(request.data['rating']),
            reviewtext=request.data['reviewtext']
        )
        
        # Update average rating
        reviews = TherapistReview.objects.filter(therapist=therapist)
        avg_rating = sum(r.rating for r in reviews) / len(reviews)
        therapist.rating = round(avg_rating, 1)
        therapist.save()
        
        return Response({
            'message': 'Review submitted successfully!',
            'review': TherapistReviewSerializer(review).data,
            'new_average_rating': float(therapist.rating)
        }, status=status.HTTP_201_CREATED)
        
    except Exception as e:
        print(f"💥 Error: {e}")
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




# tracker/views.py - UPDATED TO MATCH YOUR MODEL

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_latest_emotion_analysis(request):
    """Get the latest emotion analysis for the authenticated user"""
    try:
        # Get the most recent emotion analysis for this user
        latest_analysis = SessionLog.objects.filter(
            user=request.user
        ).order_by('-date').first()
        
        if not latest_analysis:
            return Response({
                'message': 'No emotion analysis found for this user'
            }, status=404)
        
        # Format the response data to match your actual model fields
        analysis_data = {
            'id': latest_analysis.id,
            'emotion': latest_analysis.llm_emotion or 'Unknown',  # Using llm_emotion field
            'emotion_severity': 'Moderate',  # Default since not in your model
            'stress_level': latest_analysis.stress_level or 'Unknown',
            'date': latest_analysis.date.strftime('%d-%m-%Y'),
            'time_of_analysis': latest_analysis.time_of_analysis or 'Not recorded',
            'suggestion': latest_analysis.suggestion or "No specific suggestions available at this time.",
            'input_text': latest_analysis.text_input or '',
            'created_at': latest_analysis.date.isoformat()
        }
        
        return Response(analysis_data, status=200)
        
    except Exception as e:
        print(f"Error in get_latest_emotion_analysis: {str(e)}")  # Debug log
        return Response({
            'error': f'Error fetching latest emotion analysis: {str(e)}'
        }, status=500)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_emotion_analyses(request):
    """Get all emotion analyses for the authenticated user"""
    try:
        analyses = SessionLog.objects.filter(
            user=request.user
        ).order_by('-date')
        
        analysis_list = []
        for analysis in analyses:
            analysis_data = {
                'id': analysis.id,
                'emotion': analysis.llm_emotion or 'Unknown',
                'emotion_severity': 'Moderate',  # Default since not in your model
                'stress_level': analysis.stress_level or 'Unknown',
                'date': analysis.date.strftime('%d-%m-%Y'),
                'time_of_analysis': analysis.time_of_analysis or 'Not recorded',
                'suggestion': analysis.suggestion or "No specific suggestions available.",
                'created_at': analysis.date.isoformat()
            }
            analysis_list.append(analysis_data)
        
        return Response({
            'count': len(analysis_list),
            'results': analysis_list
        }, status=200)
        
    except Exception as e:
        print(f"Error in get_all_emotion_analyses: {str(e)}")  # Debug log
        return Response({
            'error': f'Error fetching emotion analyses: {str(e)}'
        }, status=500)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_ai_suggestion(request, analysis_id):
    """Get AI suggestion for a specific emotion analysis"""
    try:
        analysis = SessionLog.objects.get(
            id=analysis_id,
            user=request.user
        )
        
        return Response({
            'analysis_id': analysis.id,
            'suggestion': analysis.suggestion or "No specific suggestions available.",
            'emotion': analysis.llm_emotion or 'Unknown',
            'stress_level': analysis.stress_level or 'Unknown',
            'created_at': analysis.date.isoformat()
        }, status=200)
        
    except SessionLog.DoesNotExist:
        return Response({
            'error': 'Emotion analysis not found'
        }, status=404)
    except Exception as e:
        print(f"Error in get_ai_suggestion: {str(e)}")  # Debug log
        return Response({
            'error': f'Error fetching AI suggestion: {str(e)}'
        }, status=500)






# tracker/views.py - UPDATE FOR 7 & 10 DAYS
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_emotion_history(request):
    """Get user's emotion history for charts - 7 or 10 days only"""
    try:
        time_range = request.GET.get('range', '7days')
        days = 7 if time_range == '7days' else 10  # UPDATED: Only 7 or 10 days
        
        # Get emotion history from last N days
        from datetime import datetime, timedelta
        start_date = datetime.now() - timedelta(days=days)
        
        analyses = SessionLog.objects.filter(
            user=request.user,
            date__gte=start_date.date()
        ).order_by('date')
        
        history_data = []
        for analysis in analyses:
            history_data.append({
                'date': analysis.date.strftime('%Y-%m-%d'),
                'emotion': analysis.llm_emotion or 'Unknown',
                'stressLevel': analysis.stress_level or 'Low',
                'count': 1  # You can aggregate multiple entries per day
            })
        
        return Response(history_data, status=200)
        
    except Exception as e:
        return Response({
            'error': f'Error fetching emotion history: {str(e)}'
        }, status=500)

# views.py - Complete working forgot password view
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.conf import settings
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
import json

@api_view(['POST'])
@permission_classes([AllowAny])
def forgot_password(request):
    try:
        data = json.loads(request.body)
        email = data.get('email')
        
        print(f"Forgot password request for: {email}")  # Debug log
        
        if not email:
            return Response({'error': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = User.objects.get(email=email)
            print(f"User found: {user.username}")  # Debug log
            
            # Generate password reset token
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            
            # Create reset URL
            reset_url = f"http://localhost:3000/reset-password/{uid}/{token}/"
            print(f"Reset URL generated: {reset_url}")  # Debug log
            
            # Email content
            subject = "EmoTrack - Password Reset Instructions"
            message = f"""
Hi {user.username},

You requested to reset your password for your EmoTrack account.

Click the link below to reset your password:
{reset_url}

This link will expire in 24 hours for security reasons.

If you didn't request this, please ignore this email.

Best regards,
The EmoTrack Team
            """
            
            # Send email
            print("Attempting to send email...")  # Debug log
            result = send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [email],
                fail_silently=False,
            )
            print(f"Email sending result: {result}")  # Debug log
            
            if result == 1:
                return Response({
                    'message': 'Password reset instructions sent successfully'
                }, status=status.HTTP_200_OK)
            else:
                return Response({
                    'error': 'Failed to send email'
                }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
        except User.DoesNotExist:
            print(f"User not found for email: {email}")  # Debug log
            return Response({'error': 'No account found with this email address'}, status=status.HTTP_404_NOT_FOUND)
            
    except Exception as e:
        print(f"Error in forgot_password: {e}")  # Debug log
        return Response({'error': f'Something went wrong: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



# Add these imports at the top if not already there
from django.utils.http import urlsafe_base64_decode
from django.utils.encoding import force_str

# Add these two new views
@api_view(['POST'])
@permission_classes([AllowAny])
def validate_reset_token(request):
    try:
        data = json.loads(request.body)
        uid = data.get('uid')
        token = data.get('token')
        
        print(f"Validating token - UID: {uid}, Token: {token}")  # Debug
        
        if not uid or not token:
            return Response({'error': 'Missing parameters'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user_id = force_str(urlsafe_base64_decode(uid))
            user = User.objects.get(pk=user_id)
            
            if default_token_generator.check_token(user, token):
                print(f"Token valid for user: {user.username}")  # Debug
                return Response({'message': 'Token is valid'}, status=status.HTTP_200_OK)
            else:
                print("Token invalid")  # Debug
                return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)
                
        except (User.DoesNotExist, ValueError, TypeError) as e:
            print(f"Token validation error: {e}")  # Debug
            return Response({'error': 'Invalid parameters'}, status=status.HTTP_400_BAD_REQUEST)
            
    except Exception as e:
        print(f"Validation exception: {e}")  # Debug
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([AllowAny])
def reset_password(request):
    try:
        data = json.loads(request.body)
        uid = data.get('uid')
        token = data.get('token')
        password = data.get('password')
        
        print(f"Resetting password - UID: {uid}")  # Debug
        
        if not uid or not token or not password:
            return Response({'error': 'Missing parameters'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user_id = force_str(urlsafe_base64_decode(uid))
            user = User.objects.get(pk=user_id)
            
            if default_token_generator.check_token(user, token):
                user.set_password(password)
                user.save()
                print(f"Password reset successfully for user: {user.username}")  # Debug
                return Response({'message': 'Password reset successfully'}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid or expired token'}, status=status.HTTP_400_BAD_REQUEST)
                
        except (User.DoesNotExist, ValueError, TypeError) as e:
            print(f"Password reset error: {e}")  # Debug
            return Response({'error': 'Invalid parameters'}, status=status.HTTP_400_BAD_REQUEST)
            
    except Exception as e:
        print(f"Reset exception: {e}")  # Debug
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
