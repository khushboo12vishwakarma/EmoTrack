from django.db import models
from django.contrib.auth.models import User
from datetime import timedelta, date
from django.contrib.postgres.fields import ArrayField
from django.utils import timezone


class SessionLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text_input = models.TextField(blank=True, null=True)
    voice_input = models.FileField(upload_to='session_audios/', blank=True, null=True)
    video_input = models.FileField(upload_to='session_videos/', blank=True, null=True)  # Added this line
    llm_emotion = models.CharField(max_length=100, blank=True, null=True)
    stress_level = models.CharField(max_length=50, blank=True, null=True)
    time_of_analysis = models.CharField(max_length=50, blank=True, null=True)
    date = models.DateField(auto_now_add=True)
    suggestion = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.user.username} - {self.date}"

    class Meta:
        ordering = ['-date']





class RecoveryTracker(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    emotion = models.CharField(max_length=100)
    stress_level = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)

    def has_ended(self):
        return date.today() > self.end_date
    
class ProgressLog(models.Model):
    tracker = models.ForeignKey(RecoveryTracker, on_delete=models.CASCADE, related_name='progress_logs')
    date = models.DateField(auto_now_add=True)  
    mood_rating = models.IntegerField(choices=[(i, str(i)) for i in range(1, 6)])
    completed = models.BooleanField(default=False)
    tip_of_the_day = models.CharField(max_length=255, blank=True)
    quote = models.CharField(max_length=255, blank=True)
    journaling_prompt = models.TextField(blank=True)
    music_link = models.URLField(blank=True)
    meditation_video = models.URLField(blank=True)
    breathing_minutes = models.IntegerField(default=5)

    class Meta:
        ordering = ['-date']  
        unique_together = ['tracker', 'date']  
    def __str__(self):
        return f"Progress Log {self.date} - Mood: {self.mood_rating}/5"
    




from django.db import models
from django.contrib.auth.models import User




class ExpertiseArea(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['name']

class Therapist(models.Model):
    AVAILABILITY_CHOICES = [
        ('online', 'Online'),
        ('offline', 'Offline'),
        ('both', 'Both'),
    ]
    name = models.CharField(max_length=255)
    specialization = models.CharField(max_length=255, blank=True, null=True)
    availabilitymode = models.CharField(max_length=50, default='both')
    location = models.CharField(max_length=255, blank=True, null=True)
    availabilityhours = models.CharField(max_length=100, blank=True, null=True)
    languages = models.CharField(max_length=255, blank=True, null=True)
    experience = models.CharField(max_length=100, blank=True, null=True)
    education = models.TextField(blank=True, null=True)
    rating = models.DecimalField(max_digits=3, decimal_places=1, default=0.0)
    fee = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    profileimg = models.ImageField(upload_to='therapist_photos/', blank=True, null=True)
    profiledescription = models.TextField(blank=True, null=True)
    schedule = models.JSONField(blank=True, null=True)
    qualifications = models.TextField(blank=True, null=True)
    expertiseareas = models.JSONField(blank=True, null=True)
    specializations = models.JSONField(blank=True, null=True)
    assigned_expertise_areas = models.ManyToManyField(ExpertiseArea, blank=True, 
                                                      related_name='therapist_assignments')

    @property
    def reviews_count(self):
        return self.reviews.count()
    
    def __str__(self):
        return f"{self.name} - {self.specialization}"
    

    
class TherapistSpecialization(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    therapist = models.ForeignKey(Therapist, on_delete=models.CASCADE, 
                                  related_name='therapist_specializations')
    
    def __str__(self):
        return f"{self.therapist.name} - {self.name}"
    
    class Meta:
        unique_together = ['therapist', 'name']


class TherapistReview(models.Model):
    therapist = models.ForeignKey(Therapist, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])
    reviewtext = models.TextField()
    dateposted = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.user.username} - {self.therapist.name} ({self.rating} stars)"
    
    class Meta:
        unique_together = ['therapist', 'user']






class Appointment(models.Model):
    MODE_CHOICES = [
        ("online", "Online"),
        ("offline", "Offline"),
    ]
    ONLINE_TYPE_CHOICES = [
        ("Video Call", "Video Call"),
        ("Voice Call", "Voice Call"),
        ("Live Chat", "Live Chat"),
    ]
    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("Confirmed", "Confirmed"),
        ("Completed", "Completed"),
        ("Cancelled", "Cancelled"),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    therapist = models.ForeignKey(Therapist, on_delete=models.CASCADE)
    date = models.DateField()
    time_slot = models.TimeField()
    mode = models.CharField(max_length=10, choices=MODE_CHOICES)
    online_type = models.CharField(max_length=20, choices=ONLINE_TYPE_CHOICES, blank=True, null=True)
    notes = models.TextField(blank=True)
    is_confirmed = models.BooleanField(default=True)

    # ✅ New field for better session tracking
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="Pending")

    def __str__(self):
        return f"{self.user.username} - {self.therapist.name} on {self.date} at {self.time_slot}"



    

class SessionHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    therapist = models.ForeignKey(Therapist, on_delete=models.CASCADE)
    date = models.DateField()
    time_start = models.TimeField()
    # time_end = models.TimeField()
    time_end = models.TimeField(null=True, blank=True)
    mode = models.CharField(max_length=20, choices=[("Video Call", "Video Call"), ("Voice Call", "Voice Call"), ("Chat", "Chat")])
    summary = models.TextField()
    notes = models.TextField(blank=True)
    rating = models.FloatField(null=True, blank=True)
    transcript = models.TextField(blank=True)

    def __str__(self):
        return f"{self.user.username} - {self.therapist.name} on {self.date}"


class ChatMessage(models.Model):
    session = models.ForeignKey(Appointment, on_delete=models.CASCADE)
    sender = models.CharField(max_length=100)  # 'user' or 'therapist'
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender}: {self.message[:30]}"






class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_visibility = models.CharField(max_length=20, default='private')
    data_sharing_consent = models.BooleanField(default=False)
    analytics_enabled = models.BooleanField(default=True)
    marketing_emails = models.BooleanField(default=False)
    login_notifications = models.BooleanField(default=True)
    session_timeout = models.CharField(max_length=10, default='30')
    email_notifications = models.BooleanField(default=True)
    sms_notifications = models.BooleanField(default=False)
    push_notifications = models.BooleanField(default=True)
    therapist_communication = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class UserDevice(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    device_name = models.CharField(max_length=100)
    device_type = models.CharField(max_length=20)
    browser = models.CharField(max_length=50)
    ip_address = models.GenericIPAddressField()
    location = models.CharField(max_length=100, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    last_active = models.DateTimeField(default=timezone.now)
    created_at = models.DateTimeField(auto_now_add=True)

class ActivityLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    action = models.CharField(max_length=255)
    ip_address = models.GenericIPAddressField()
    user_agent = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    
    class Meta:
        ordering = ['-created_at']



# Add to models.py

# models.py - UPDATED JournalEntry model

class JournalEntry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    progress_log = models.ForeignKey('ProgressLog', on_delete=models.CASCADE, related_name='journal_entries')
    prompt = models.TextField(blank=True, null=True)  # Allow empty prompts
    response = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
        unique_together = ['user', 'progress_log']  # One journal entry per user per progress log
    
    def __str__(self):
        return f"{self.user.username} - {self.created_at.strftime('%Y-%m-%d')}"

