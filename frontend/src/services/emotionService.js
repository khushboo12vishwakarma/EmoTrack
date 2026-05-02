

// // // // emotionService.js
// // // import api from './api';

// // // const markProgressLogCompleted = async (logId) => {
// // //   try {
// // //     const token = localStorage.getItem('access_token');
// // //     const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    
// // //     const response = await fetch(`${apiUrl}/api/mark-progress-completed/${logId}/`, {
// // //       method: 'POST',
// // //       headers: {
// // //         'Authorization': `Bearer ${token}`,
// // //         'Content-Type': 'application/json',
// // //       },
// // //     });
    
// // //     if (!response.ok) {
// // //       const errorData = await response.json().catch(() => ({}));
// // //       throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
// // //     }
    
// // //     return await response.json();
// // //   } catch (error) {
// // //     console.error('Error marking progress as completed:', error);
// // //     throw error;
// // //   }
// // // };

// // // export const emotionService = {
// // //   submitThought: async (data) => {
// // //     const formData = new FormData();
    
// // //     if (data.text_input) {
// // //       formData.append('text_input', data.text_input);
// // //     }
// // //     if (data.audio_file) {
// // //       formData.append('audio_file', data.audio_file);
// // //     }
// // //     if (data.video_file) {
// // //       formData.append('video_file', data.video_file);
// // //     }
    
// // //     const response = await api.post('/submit-thought/', formData, {
// // //       headers: {
// // //         'Content-Type': 'multipart/form-data',
// // //       },
// // //     });
    
// // //     return response.data;
// // //   },

// // //   getRecoveryDashboard: async () => {
// // //     const response = await api.get('/recovery-dashboard/');
// // //     return response.data;
// // //   },

// // //   markDailyCheckin: async (mood_rating) => {
// // //     const response = await api.post('/mark-daily-checkin/', { mood_rating });
// // //     return response.data;
// // //   },

// // //   getUserProgressLogs: async () => {
// // //     const response = await api.get('/user-progress-logs/');
// // //     return response.data;
// // //   },

// // //   markProgressLogCompleted,
// // // };
// // import api from './api';

// // export const emotionService = {
// //   getActiveRecoveryTracker: async () => {
// //     try {
// //       const response = await api.get('/api/recovery-tracker/');
// //       return response.data;
// //     } catch (error) {
// //       console.error('Error getting recovery tracker:', error);
// //       throw error;
// //     }
// //   },

// //   submitThought: async (data) => {
// //     const formData = new FormData();
    
// //     if (data.text_input) {
// //       formData.append('text_input', data.text_input);
// //     }
// //     if (data.audio_file) {
// //       formData.append('audio_file', data.audio_file);
// //     }
// //     if (data.video_file) {
// //       formData.append('video_file', data.video_file);
// //     }
    
// //     const response = await api.post('/api/submit-thought/', formData, {
// //       headers: {
// //         'Content-Type': 'multipart/form-data',
// //       },
// //     });
    
// //     return response.data;
// //   },

// //   getRecoveryDashboard: async () => {
// //     const response = await api.get('/recovery-dashboard/');
// //     return response.data;
// //   },

// //   markDailyCheckin: async (mood_rating) => {
// //     const response = await api.post('/api/mark-daily-checkin/', { mood_rating });
// //     return response.data;
// //   },

// //   getUserProgressLogs: async () => {
// //     const response = await api.get('/user-progress-logs/');
// //     return response.data;
// //   },

// //   markProgressLogCompleted: async (logId) => {
// //     try {
// //       const token = localStorage.getItem('access_token');
// //       const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';
      
// //       const response = await fetch(`${apiUrl}/api/mark-progress-completed/${logId}/`, {
// //         method: 'POST',
// //         headers: {
// //           'Authorization': `Bearer ${token}`,
// //           'Content-Type': 'application/json',
// //         },
// //       });
      
// //       if (!response.ok) {
// //         const errorData = await response.json().catch(() => ({}));
// //         throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
// //       }
      
// //       return await response.json();
// //     } catch (error) {
// //       console.error('Error marking progress as completed:', error);
// //       throw error;
// //     }
// //   },
// // };
// // emotionService.js - Updated version
import api from './api';

export const emotionService = {
  getActiveRecoveryTracker: async () => {
    try {
      const response = await api.get('/api/recovery-tracker/');
      return response.data;
    } catch (error) {
      console.error('Error getting recovery tracker:', error);
      throw error;
    }
  },

  // Enhanced submitThought to return complete analysis data
  submitThought: async (data) => {
    try {
      const formData = new FormData();
      
      if (data.text_input) {
        formData.append('text_input', data.text_input);
      }
      if (data.audio_file) {
        formData.append('audio_file', data.audio_file);
      }
      if (data.video_file) {
        formData.append('video_file', data.video_file);
      }
      
      const response = await api.post('/api/submit-thought/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      // Return the complete analysis data including emotion, stress_level, etc.
      return response.data;
    } catch (error) {
      console.error('Error submitting thought:', error);
      throw error;
    }
  },

  getRecoveryDashboard: async () => {
    const response = await api.get('/recovery-dashboard/');
    return response.data;
  },

  markDailyCheckin: async (mood_rating) => {
    const response = await api.post('/api/mark-daily-checkin/', { mood_rating });
    return response.data;
  },

  getUserProgressLogs: async () => {
    const response = await api.get('/user-progress-logs/');
    return response.data;
  },

  markProgressLogCompleted: async (logId) => {
    try {
      const token = localStorage.getItem('access_token');
      const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';
      
      const response = await fetch(`${apiUrl}/api/mark-progress-completed/${logId}/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error marking progress as completed:', error);
      throw error;
    }
  },
};


















