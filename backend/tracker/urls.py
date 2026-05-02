
from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import (
    signup,
    protected_view,
    submit_thought,
    mark_daily_checkin,
    recovery_dashboard,
    UserProgressLogs,
    therapist_list,
    online_therapists, 
    offline_therapists,
    book_appointment,
    therapist_detail,
    user_session_history,
    user_profile,
    send_chat_message,
    get_chat_messages,
    complete_appointment,
    confirm_appointment,
    login_view,
    get_today_progress_log,
    mark_progress_completed,
    get_active_recovery_tracker,
    therapist_detail,
    submit_therapist_review,

    
   
)
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    # Authentication - FIXED to match React A path('api/', api_root, name='api_root'),
    path('signup/', signup, name='signup'),
    path('login/', login_view, name='login'),  # Your custom login
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # JWT login alternative
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('protected/', protected_view, name='protected'),
    # path('user-profile/', user_profile, name='user_profile'),  # FIXED: React expects 'user-profile'
    path('user-profile/', user_profile, name='user_profile'),  # ✅ This is correct

    # Emotion & Recovery - FIXED to match React API calls
    path('api/recovery-tracker/', get_active_recovery_tracker, name='get_active_recovery_tracker'),
    path('api/submit-thought/', submit_thought, name='submit_thought'),
    path('api/mark-daily-checkin/', mark_daily_checkin, name="mark_daily_checkin"),



    path('therapist-detail/<int:pk>/', therapist_detail, name='therapist_detail'),

    path('api/mark-progress-completed/<int:log_id>/', mark_progress_completed, name='mark_progress_completed'),
    path('api/get-today-progress/', get_today_progress_log, name='get_today_progress_log'),
    path('recovery-dashboard/', recovery_dashboard, name="recovery_dashboard"), 
    path('user-progress-logs/', UserProgressLogs.as_view(), name="user_progress_logs"),  # FIXED: React expects this path
    
    # Therapists - FIXED to match React API calls
    path('therapist-list/', therapist_list, name='therapist_list'),  # FIXED: React expects 'therapist-list'
    path('online-therapists/', online_therapists, name='online_therapists'),  # FIXED
    path('offline-therapists/', offline_therapists, name='offline_therapists'),  # FIXED



    path('therapist-detail/<int:pk>/', views.therapist_detail, name='therapist_detail'),


    # path('api/therapist-detail/<int:pk>/',therapist_detail, name='therapist_detail'),

    # path('therapist-detail/<int:therapist_id>/', therapist_detail, name='therapist_detail'),  # FIXED
    path('book-appointment/', book_appointment, name='book_appointment'),  # FIXED
    path('confirm-appointment/<int:appointment_id>/', confirm_appointment, name='confirm_appointment'),  # FIXED
    path('complete-appointment/<int:appointment_id>/', complete_appointment, name='complete_appointment'),  # FIXED
    path('user-session-history/', user_session_history, name='user_session_history'),  # FIXED
    
    # Chat - FIXED to match React API calls
    path('get-chat-messages/<int:session_id>/', get_chat_messages, name='get_chat_messages'),  # FIXED
    path('send-chat-message/', send_chat_message, name='send_chat_message'),  # FIXED





    # User Profile
    path('user-profile/', views.user_profile, name='user_profile'),
    
    # Account Management
    path('delete-account/', views.delete_account, name='delete_account'),
    
    # Privacy & Security
    path('privacy-settings/', views.privacy_settings, name='privacy_settings'),
    path('active-devices/', views.active_devices, name='active_devices'),
    path('recent-activity/', views.recent_activity, name='recent_activity'),
    path('revoke-device/<int:device_id>/', views.revoke_device, name='revoke_device'),
    path('change-password/', views.change_password, name='change_password'),
    path('enable-2fa/', views.enable_2fa, name='enable_2fa'),
    path('disable-2fa/', views.disable_2fa, name='disable_2fa'),
    path('request-data-export/', views.request_data_export, name='request_data_export'),
    path('delete-all-data/', views.delete_all_data, name='delete_all_data'),
    path('clear-activity/', views.clear_activity, name='clear_activity'),
    path('submit-therapist-review/<int:therapist_id>/', views.submit_therapist_review, name='submit_therapist_review'),
  

    



    path('api/emotion-analysis/latest/', views.get_latest_emotion_analysis, name='get_latest_emotion_analysis'),
    path('api/emotion-analysis/', views.get_all_emotion_analyses, name='get_all_emotion_analyses'), 
    path('api/ai-suggestion/<int:analysis_id>/', views.get_ai_suggestion, name='get_ai_suggestion'),


    # tracker/urls.py
path('api/emotion-history/', views.get_emotion_history, name='get_emotion_history'),
path('api/auth/forgot-password/', views.forgot_password, name='forgot_password'),
path('api/auth/validate-reset-token/', views.validate_reset_token, name='validate_reset_token'),  # NEW
path('api/auth/reset-password/', views.reset_password, name='reset_password'),  # NEW
    

    
]
