#This ensures that a SessionHistory entry is created automatically when an appointment is confirmed, and updated when the session ends.
# tracker/signals.py
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone
from .models import Appointment, SessionHistory

@receiver(post_save, sender=Appointment)
def handle_session_history(sender, instance, created, **kwargs):
    """
    Create SessionHistory when appointment is confirmed (either via status or is_confirmed).
    Update SessionHistory when appointment is completed (either via status == 'Completed' or explicit complete action).
    """

    # Helper: find existing history
    history_qs = SessionHistory.objects.filter(
        user=instance.user,
        therapist=instance.therapist,
        date=instance.date
    )

    # Condition A: treat appointment as confirmed
    is_confirmed_flag = getattr(instance, "is_confirmed", False)
    status_attr = getattr(instance, "status", None)

    confirmed = False
    if status_attr and str(status_attr).lower() == "confirmed":
        confirmed = True
    elif is_confirmed_flag:
        confirmed = True

    if confirmed:
        # create if not exists, else ensure basic fields exist
        if not history_qs.exists():
            SessionHistory.objects.create(
                user=instance.user,
                therapist=instance.therapist,
                date=instance.date,
                time_start=getattr(instance, "time_slot", None) or timezone.now().time(),
                time_end=None,
                mode=getattr(instance, "online_type", None) or getattr(instance, "mode", "Chat"),
                summary="Scheduled session (auto-created).",
            )
        else:
            # keep existing entry but ensure status/summary exist
            hist = history_qs.first()
            if not hist.summary:
                hist.summary = hist.summary or "Scheduled session (auto-created)."
                hist.save()

    # Condition B: treat appointment as completed
    completed = False
    if status_attr and str(status_attr).lower() == "completed":
        completed = True
    # you may add other logic to set completed = True from other flags

    if completed:
        hist = history_qs.first()
        if hist:
            hist.time_end = timezone.now().time()
            hist.summary = hist.summary or "Session completed."
            hist.save()

