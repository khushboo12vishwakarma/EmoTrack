# serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import SessionLog
from .models import ProgressLog
from .models import Therapist 
from .models import Appointment
from .models import  TherapistReview
from .models import  SessionHistory, ChatMessage
from .models import Therapist, TherapistReview, TherapistSpecialization,   JournalEntry  # Add TherapistSpecialization



class TextEmotionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SessionLog
        fields = ['id', 'voice_input', 'video_input', 'text_input', 'llm_emotion', 'stress_level','suggestion',  'time_of_analysis','date']
        read_only_fields = ['id', 'date']




class ProgressLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgressLog
        fields = [
            'id', 'tracker', 'date', 'mood_rating', 'completed',
            'tip_of_the_day', 'quote', 'journaling_prompt',
            'music_link', 'meditation_video', 'breathing_minutes'
        ]




# class TherapistSerializer(serializers.ModelSerializer):
#     reviews = serializers.IntegerField(source='reviews_count', read_only=True)
#     photoUrl = serializers.SerializerMethodField()
    
#     class Meta:
#         model = Therapist
#         fields = [
#             'id', 'name', 'specializations', 'availability_mode', 'location', 
#             'availability_hours', 'languages', 'experience', 'education',
#             'rating', 'reviews', 'fee', 'photoUrl', 'profile_description',
#             'schedule' ,'expertise_areas' # This will handle the detailed availability
#         ]
    
#     def get_photoUrl(self, obj):
#         request = self.context.get('request')
#         if obj.profile_img and hasattr(obj.profile_img, 'url'):
#             return request.build_absolute_uri(obj.profile_img.url)
#         return None


from rest_framework import serializers
from .models import Therapist, TherapistReview, ExpertiseArea

class ExpertiseAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpertiseArea
        fields = ['id', 'name', 'description', 'category']

class TherapistReviewSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    
    class Meta:
        model = TherapistReview
        fields = ['id', 'user', 'rating', 'reviewtext', 'dateposted']




class TherapistSpecializationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TherapistSpecialization
        fields = ['id', 'name', 'description']

class TherapistDetailSerializer(serializers.ModelSerializer):
    reviews = serializers.SerializerMethodField()
    reviewscount = serializers.SerializerMethodField()
    photoUrl = serializers.SerializerMethodField()
    expertise_areas_list = serializers.SerializerMethodField()
    specializations_list = serializers.SerializerMethodField()
    
    class Meta:
        model = Therapist
        fields = [
            'id', 'name', 'specialization', 'availabilitymode', 'location',
            'availabilityhours', 'languages', 'experience', 'education', 
            'rating', 'reviewscount', 'fee', 'photoUrl', 'profiledescription',
            'schedule', 'qualifications', 'reviews', 'expertise_areas_list',
            'specializations_list'
        ]
    
    def get_reviews(self, obj):
        reviews = TherapistReview.objects.filter(therapist=obj).order_by('-dateposted')
        return TherapistReviewSerializer(reviews, many=True).data
    
    def get_reviewscount(self, obj):
        return TherapistReview.objects.filter(therapist=obj).count()
    
    def get_photoUrl(self, obj):
        request = self.context.get('request')
        if hasattr(obj, 'profileimg') and obj.profileimg:
            if hasattr(obj.profileimg, 'url'):
                return request.build_absolute_uri(obj.profileimg.url) if request else obj.profileimg.url
        return None
    
    def get_expertise_areas_list(self, obj):
        # Get therapist-specific expertise areas
        assigned_areas = obj.assigned_expertise_areas.filter(is_active=True)
        return ExpertiseAreaSerializer(assigned_areas, many=True).data
    
    def get_specializations_list(self, obj):
        # Get therapist-specific specializations
        specializations = obj.therapist_specializations.all()
        return TherapistSpecializationSerializer(specializations, many=True).data


class TherapistSerializer(serializers.ModelSerializer):
    photoUrl = serializers.SerializerMethodField()
    reviewscount = serializers.SerializerMethodField()
    
    class Meta:
        model = Therapist
        fields = [
            'id', 'name', 'specialization', 'availabilitymode',  # Changed from availability_mode
            'location', 'availabilityhours', 'languages', 'experience', 
            'education', 'rating', 'reviewscount', 'fee', 'photoUrl', 
            'profiledescription', 'schedule', 'qualifications', 
            'expertiseareas', 'specializations'
        ]
    
    def get_photoUrl(self, obj):
        request = self.context.get('request')
        if hasattr(obj, 'profileimg') and obj.profileimg:
            if hasattr(obj.profileimg, 'url'):
                return request.build_absolute_uri(obj.profileimg.url) if request else obj.profileimg.url
        return None
    
    def get_reviewscount(self, obj):
        return obj.reviews.count() if hasattr(obj, 'reviews') else 0







class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'        

class SessionHistorySerializer(serializers.ModelSerializer):
    therapist_name = serializers.CharField(source='therapist.name', read_only=True)

    class Meta:
        model = SessionHistory
        fields = '__all__'



class UserProfileSerializer(serializers.ModelSerializer):
    joined = serializers.SerializerMethodField()
    mood_history_count = serializers.SerializerMethodField()
    journal_entries_count = serializers.SerializerMethodField()
    therapy_sessions_count = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'id', 'username', 'email', 'joined', 'mood_history_count',
            'journal_entries_count', 'therapy_sessions_count'
        ]

    def get_joined(self, obj):
        return obj.date_joined.strftime('%B %Y')  # e.g., "May 2025"

    def get_mood_history_count(self, obj):
        return SessionLog.objects.filter(user=obj).count()

    def get_journal_entries_count(self, obj):
        return ProgressLog.objects.filter(tracker__user=obj).count()

    def get_therapy_sessions_count(self, obj):
        return Appointment.objects.filter(user=obj).count()

    def update(self, instance, validated_data):
        """
        Update User instance with validated data
        """
        # Update username if provided
        instance.username = validated_data.get('username', instance.username)
        
        # Update email if provided
        instance.email = validated_data.get('email', instance.email)
        
        # Save the updated instance
        instance.save()
        
        return instance




# serializers.py
class ChatMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatMessage
        fields = '__all__'





# Add to serializers.py
# serializers.py - FIXED JournalEntrySerializer

class JournalEntrySerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)  # Show username
    progress_log_date = serializers.SerializerMethodField()
    
    class Meta:
        model = JournalEntry
        fields = [
            'id', 'user', 'prompt', 'response', 
            'created_at', 'updated_at', 'progress_log_date'
        ]
        read_only_fields = ['id', 'user', 'created_at', 'updated_at']
    
    def get_progress_log_date(self, obj):
        return obj.progress_log.date.strftime('%Y-%m-%d') if obj.progress_log else None
