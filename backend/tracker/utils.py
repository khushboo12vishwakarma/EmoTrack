# # utils.py
# import requests
# import re
# import logging
# from datetime import datetime, date, timedelta
# from django.conf import settings
# from .models import RecoveryTracker

# # Always point to /api/chat for DeepSeek-style conversation
# OLLAMA_API_URL = getattr(settings, 'OLLAMA_API_URL', 'http://127.0.0.1:11434/api/chat')
# OLLAMA_MODEL = getattr(settings, 'OLLAMA_MODEL', 'deepseek-r1:7b')


# from .models import RecoveryTracker, ProgressLog
# from django.utils import timezone  # make sure this is imported
# from .daily_content import DAILY_CONTENT

# def get_dynamic_daily_content():
#     index = date.today().toordinal() % len(DAILY_CONTENT)
#     return DAILY_CONTENT[index]



# def start_recovery_if_needed(user, emotion, stress_level):
#     serious_emotion_detected = stress_level.lower() == "high"
#     existing_tracker = RecoveryTracker.objects.filter(user=user, is_active=True).first()

#     if serious_emotion_detected:
#         if existing_tracker:
#             if existing_tracker.has_ended():
#                 return "⚠️ Your previous recovery tracker has ended, but serious emotions are still present. Consider speaking to a therapist."
#             else:
#                 return "🕊️ You’re currently on a 10-day recovery tracker. Stay strong and continue your journey."
#         else:
#             tracker = RecoveryTracker.objects.create(
#                 user=user,
#                 start_date=date.today(),
#                 end_date=date.today() + timedelta(days=10),
#                 emotion=emotion,
#                 stress_level=stress_level,
#                 is_active=True
#             )

#             # 🔽 Create 10 progress logs (one for each day)
#             for i in range(10):
#                 daily = DAILY_CONTENT[(date.today().toordinal() + i) % len(DAILY_CONTENT)]
#                 ProgressLog.objects.create(
#                 tracker=tracker,
#                 date=date.today() + timedelta(days=i),
#                 completed=False,
#                 mood_rating=None,
#                 tip_of_the_day=daily["tip"],
#                 quote=daily["quote"],
#                 journaling_prompt=daily["prompt"],
#                 music_link=daily["music"],
#                 meditation_video=daily["video"]
#         )

#             return "📅 A 10-day emotional recovery tracker has been started to support your well-being."

#     elif existing_tracker and existing_tracker.has_ended():
#         existing_tracker.is_active = False
#         existing_tracker.save()
#         return "✅ Your 10-day emotional recovery tracker has ended. Great job!"

#     return None



# def chat_with_therapist(user_input, user, previous_messages=None):
#     system_prompt = """
# You are a kind, intelligent mental health assistant. Once the user shares their emotional thoughts, reply with the following fields clearly and explicitly — one per line:

# - Emotion Detected: (e.g., Sadness, Nervous, Angry, etc.)
# - Stress Level: (Low, Medium, High)
# - Emotion Severity: (Serious, Moderate, Mild)
# - Time of Analysis: (HH:MM AM/PM)
# - Date: (DD-MM-YYYY)
# - ✅ Do's: (bulleted list)
# - ❌ Don'ts: (bulleted list)
# - 💡 Tip of the Day: (1 sentence wellness tip)
# - 📝 Journaling Prompt: (1 short reflection or writing idea)
# - 💬 Motivational Quote: (short quote)
# - 🎧 Music for Relaxation:
# - 📝 Journaling Prompt:
# - 🌬 Breathing Exercise:
# - 🧘 Meditation Video:

# Make sure each line starts with the exact label shown above.
# After all fields, you can optionally provide an empathetic closing message.
# """



#     if not previous_messages:
#         previous_messages = [
#             {"role": "system", "content": system_prompt},
#             {"role": "assistant", "content": "Hi, how are you feeling today?"}
#         ]

#     previous_messages.append({"role": "user", "content": user_input})

#     try:
#         response = requests.post(
#             OLLAMA_API_URL,
#             json={
#                 "model": OLLAMA_MODEL,
#                 "messages": previous_messages,
#                 "stream": False
#             }
#         )

#         raw_reply = response.json()["message"]["content"]
#         clean_reply = re.sub(r"<think>.*?</think>", "", raw_reply, flags=re.DOTALL).strip()
#         previous_messages.append({"role": "assistant", "content": clean_reply})

#         def clean_markdown(text):
#             return re.sub(r"\*\*|__|[*_]", "", text or "").strip()

#         def extract(pattern, text, default="Unknown"):
#             match = re.search(pattern + r"\s*:?\s*(.+)", text, re.IGNORECASE)
#             return clean_markdown(match.group(1)).strip() if match else default

#         now = datetime.now()
#         current_time = now.strftime("%I:%M %p")
#         current_date = now.strftime("%d-%m-%Y")

#         llm_emotion = extract(r"Emotion Detected", clean_reply)
#         stress_level = extract(r"Stress Level", clean_reply)
#         emotion_severity = extract(r"Emotion Severity", clean_reply)
#         tip_of_the_day = extract(r"💡 Tip of the Day", clean_reply)
#         quote = extract(r"💬 Motivational Quote", clean_reply)
#         journaling_prompt = extract(r"📝 Journaling Prompt", clean_reply)

#         tracker_msg = start_recovery_if_needed(user, llm_emotion, stress_level)

#         result = {
#             "llm_emotion": llm_emotion,
#             "stress_level": stress_level,
#             "emotion_severity": emotion_severity,
#             "time_of_analysis": current_time,
#             "date": extract(r"Date", clean_reply, default=current_date),
#             "suggestion": (clean_reply[clean_reply.find("✅"):].strip() if "✅" in clean_reply else "No suggestions found.")
#                          + ("\n\n" + tracker_msg if tracker_msg else ""),
#             "tip_of_the_day": tip_of_the_day,
#             "quote": quote,
#             "journaling_prompt": journaling_prompt,             
#             "reply_text": clean_reply
#         }

#         return result, previous_messages

#     except Exception as e:
#         logging.exception("DeepSeek API connection error")
#         return {
#             "llm_emotion": "Error",
#             "stress_level": "N/A",
#             "emotion_severity": "N/A",
#             "time_of_analysis": datetime.now().strftime("%I:%M %p"),
#             "date": datetime.now().strftime("%d-%m-%Y"),
#             "suggestion": "⚠️ Error: Could not connect to DeepSeek API.",
#             "reply_text": "Connection error."
#         }, previous_messages

        
# utils.py
import requests
import re
import logging
from datetime import datetime, date, timedelta
from django.conf import settings
from .models import RecoveryTracker

# Always point to /api/chat for DeepSeek-style conversation
OLLAMA_API_URL = getattr(settings, 'OLLAMA_API_URL', 'http://127.0.0.1:11434/api/chat')
OLLAMA_MODEL = getattr(settings, 'OLLAMA_MODEL', 'deepseek-r1:7b')

from .models import RecoveryTracker, ProgressLog
from django.utils import timezone
from .daily_content import DAILY_CONTENT

def get_dynamic_daily_content():
    index = date.today().toordinal() % len(DAILY_CONTENT)
    return DAILY_CONTENT[index]

def start_recovery_if_needed(user, emotion, stress_level):
    # Safe handling
    stress = (stress_level or "low").lower()

    # Correct logic
    serious_emotion_detected = stress in ["high", "medium"]

    existing_tracker = RecoveryTracker.objects.filter(user=user, is_active=True).first()

    if serious_emotion_detected:
        if existing_tracker:
            if existing_tracker.has_ended():
                return "⚠️ Your previous recovery tracker has ended, but serious emotions are still present. Consider speaking to a therapist."
            else:
                return "🕊️ You're currently on a 10-day recovery tracker. Stay strong and continue your journey."
        else:
            tracker = RecoveryTracker.objects.create(
                user=user,
                start_date=date.today(),
                end_date=date.today() + timedelta(days=10),
                emotion=emotion or "Unknown",
                stress_level=stress.capitalize(),
                is_active=True
            )

            for i in range(10):
                daily = DAILY_CONTENT[(date.today().toordinal() + i) % len(DAILY_CONTENT)]
                ProgressLog.objects.create(
                    tracker=tracker,
                    date=date.today() + timedelta(days=i),
                    completed=False,
                    mood_rating=None,
                    tip_of_the_day=daily["tip"],
                    quote=daily["quote"],
                    journaling_prompt=daily["prompt"],
                    music_link=daily["music"],
                    meditation_video=daily["video"]
                )

            return "📅 A 10-day emotional recovery tracker has been started to support your well-being."

    elif existing_tracker and existing_tracker.has_ended():
        existing_tracker.is_active = False
        existing_tracker.save()
        return "✅ Your 10-day emotional recovery tracker has ended. Great job!"

    return None

def chat_with_therapist(user_input, user, previous_messages=None):
    system_prompt = """
You are an expert emotional AI therapist with advanced psychological training. Analyze the user's input and provide a comprehensive emotional assessment.

CRITICAL: You must respond in EXACTLY this format with precise analysis:

- Emotion Detected: [Use your advanced AI emotional intelligence to detect emotions accurately. Choose ONE PRIMARY emotion e.g., Sadness, Nervous, joy, Angry, etc.]
- Stress Level: [Analyze and choose ONE: Low, Medium, High]
- Emotion Severity: [Assess and choose ONE: Mild, Moderate, Serious]
- Time of Analysis: [HH:MM AM/PM]
- Date: [DD-MM-YYYY]
- ✅ Do's:
  - [AI-generated actionable recommendation 1]
  - [AI-generated actionable recommendation 2]
  - [AI-generated actionable recommendation 3]
  - [AI-generated actionable recommendation 4]
- ❌ Don'ts:
  - [AI-generated thing to avoid 1]
  - [AI-generated thing to avoid 2]
  - [AI-generated thing to avoid 3]
  - [AI-generated thing to avoid 4]
- 💡 Tip of the Day: [AI-generated supportive sentence]
- 📝 Journaling Prompt: [AI-generated reflection question]
- 💬 Motivational Quote: [AI-generated or recalled inspiring quote]
- 🎧 Music for Relaxation: [AI-suggested music type or artist]
- 🌬 Breathing Exercise: [AI-generated breathing technique]
- 🧘 Meditation Video: [AI-suggested meditation style]
After all fields, you  provide an empathetic closing message.

IMPORTANT RULES:
1. Use your advanced AI emotional intelligence to detect emotions accurately
2. Generate ALL content dynamically based on the user's specific emotional state
3. Provide contextually appropriate recommendations, tips, and quotes
4. Be precise with emotion, stress level, and severity detection
5. Make all suggestions specific to the detected emotional state
6. Do NOT use generic responses - tailor everything to the user's input
After all fields, you  provide an empathetic closing message.
"""

    if not previous_messages:
        previous_messages = [
            {"role": "system", "content": system_prompt},
            {"role": "assistant", "content": "I'm an expert emotional AI ready to analyze your feelings with advanced psychological insight. Please share what you're experiencing."}
        ]

    previous_messages.append({"role": "user", "content": user_input})

    try:
        response = requests.post(
            OLLAMA_API_URL,
            json={
                "model": OLLAMA_MODEL,
                "messages": previous_messages,
                "stream": False
            },
            timeout=45
        )

        if response.status_code != 200:
            raise Exception(f"DeepSeek API returned status code: {response.status_code}")

        raw_reply = response.json()["message"]["content"]
        clean_reply = re.sub(r"<think>.*?</think>", "", raw_reply, flags=re.DOTALL).strip()
        previous_messages.append({"role": "assistant", "content": clean_reply})

        def clean_markdown(text):
            return re.sub(r"\*\*|__|[*_]", "", text or "").strip()

        def extract_ai_field(pattern, text):
            """Extract field with minimal processing - trust AI completely"""
            patterns = [
                pattern + r"\s*:?\s*([^\n\r]+)",
                pattern + r"\s*[-:]?\s*([^\n\r]+)",
            ]
            
            for p in patterns:
                match = re.search(p, text, re.IGNORECASE | re.MULTILINE)
                if match:
                    result = clean_markdown(match.group(1)).strip()
                    if result and len(result.strip()) > 0:
                        return result.strip()
            
            return None  # Return None if AI didn't provide this field

        def extract_ai_list(pattern, text, end_pattern):
            """Extract list from AI response with minimal processing"""
            start_idx = text.find(pattern)
            if start_idx == -1:
                return None
            
            end_idx = text.find(end_pattern, start_idx + len(pattern)) if end_pattern else -1
            if end_idx == -1:
                section = text[start_idx + len(pattern):]
            else:
                section = text[start_idx + len(pattern):end_idx]
            
            lines = section.strip().split('\n')
            items = []
            
            for line in lines:
                line = line.strip()
                if line and (line.startswith('-') or line.startswith('•') or line.startswith('*')):
                    item = re.sub(r'^[\-\*\•\s]+', '', line).strip()
                    if item and len(item) > 3:
                        items.append(item)
            
            return items[:4] if items else None

        now = datetime.now()
        current_time = now.strftime("%I:%M %p")
        current_date = now.strftime("%d-%m-%Y")

        # Extract fields with complete trust in AI analysis
        llm_emotion = extract_ai_field(r"Emotion Detected", clean_reply)
        stress_level = extract_ai_field(r"Stress Level", clean_reply)
        emotion_severity = extract_ai_field(r"Emotion Severity", clean_reply)
        
        # Extract other fields
        dos = extract_ai_list("✅ Do's:", clean_reply, "❌")
        donts = extract_ai_list("❌ Don'ts:", clean_reply, "💡")
        
        tip_of_the_day = extract_ai_field(r"💡 Tip of the Day", clean_reply)
        quote = extract_ai_field(r"💬 Motivational Quote", clean_reply)
        journaling_prompt = extract_ai_field(r"📝 Journaling Prompt", clean_reply)

        tracker_msg = start_recovery_if_needed(user, llm_emotion, stress_level)

        # ONLY use daily_content.py as fallback (no hardcoded values)
        daily = get_dynamic_daily_content()
        
        result = {
            "llm_emotion": llm_emotion,  # Only this minimal fallback
            "stress_level": stress_level,  # Only this minimal fallback
            "emotion_severity": emotion_severity,   # Only this minimal fallback
            "time_of_analysis": current_time,
            "date": current_date,
             "suggestion": (clean_reply[clean_reply.find("✅"):].strip() if "✅" in clean_reply else "No suggestions found.")
             + ("\n\n" + tracker_msg if tracker_msg else ""),
            # "suggestion": (clean_reply[clean_reply.find("✅"):].strip() if "✅" in clean_reply else daily.get("tip", "Focus on self-care and reach out for support when needed."))
            #              + ("\n\n" + start_recovery_if_needed(user, llm_emotion or  stress_level or "Medium" or "High") if start_recovery_if_needed(user, llm_emotion or stress_level or "Medium" or "High") else ""),
            "tip_of_the_day": tip_of_the_day or daily.get("tip"),
            "quote": quote or daily.get("quote"),
            "journaling_prompt": journaling_prompt or daily.get("prompt"),             
            "reply_text": clean_reply
        }

        return result, previous_messages

    except Exception as e:
        logging.exception("DeepSeek API connection error")
        # Use daily content for error fallback - no hardcoded values
        daily = get_dynamic_daily_content()
        return {
            "llm_emotion": "Error",
            "stress_level": "Medium",
            "emotion_severity": "Moderate",
            "time_of_analysis": datetime.now().strftime("%I:%M %p"),
            "date": datetime.now().strftime("%d-%m-%Y"),
            "suggestion": "⚠️ Error: Could not connect to DeepSeek API. Please try again later.",
            "tip_of_the_day": daily.get("tip"),
            "quote": daily.get("quote"),
            "journaling_prompt": daily.get("prompt"),
            "reply_text": "AI analysis temporarily unavailable."
        }, previous_messages




