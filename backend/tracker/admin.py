from django.contrib import admin
from .models import SessionLog,RecoveryTracker,ProgressLog,Therapist,Appointment,TherapistReview,SessionHistory,ChatMessage
from .models import Therapist

admin.site.register(Therapist)
admin.site.register(SessionLog)
admin.site.register(RecoveryTracker)
admin.site.register(ProgressLog)
admin.site.register(Appointment)
admin.site.register(TherapistReview)
admin.site.register(SessionHistory)
admin.site.register(ChatMessage)

