// // // // import api from './api';

// // // // export const therapistService = {
// // // //   getAllTherapists: async () => {
// // // //     const response = await api.get('/therapist-list/');
// // // //     return response.data;
// // // //   },

// // // //   getOnlineTherapists: async () => {
// // // //     const response = await api.get('/online-therapists/');
// // // //     return response.data;
// // // //   },

// // // //   getOfflineTherapists: async () => {
// // // //     const response = await api.get('/offline-therapists/');
// // // //     return response.data;
// // // //   },

// // // //   getTherapistDetail: async (therapistId) => {
// // // //     const response = await api.get(`/therapist-detail/${therapistId}/`);
// // // //     return response.data;
// // // //   },

// // // //   bookAppointment: async (appointmentData) => {
// // // //     const response = await api.post('/book-appointment/', appointmentData);
// // // //     return response.data;
// // // //   },

// // // //   confirmAppointment: async (appointmentId) => {
// // // //     const response = await api.post(`/confirm-appointment/${appointmentId}/`);
// // // //     return response.data;
// // // //   },

// // // //   completeAppointment: async (appointmentId) => {
// // // //     const response = await api.post(`/complete-appointment/${appointmentId}/`);
// // // //     return response.data;
// // // //   },

// // // //   getUserSessionHistory: async () => {
// // // //     const response = await api.get('/user-session-history/');
// // // //     return response.data;
// // // //   },

// // // //   getUserProfile: async () => {
// // // //     const response = await api.get('/user-profile/');
// // // //     return response.data;
// // // //   },

// // // //   getChatMessages: async (sessionId) => {
// // // //     const response = await api.get(`/get-chat-messages/${sessionId}/`);
// // // //     return response.data;
// // // //   },

// // // //   sendChatMessage: async (messageData) => {
// // // //     const response = await api.post('/send-chat-message/', messageData);
// // // //     return response.data;
// // // //   },
// // // // };
// // // import api from './api';

// // // export const therapistService = {
// // //   // Get all therapists
// // //   getAllTherapists: async () => {
// // //     try {
// // //       console.log('🔍 Fetching all therapists...');
// // //       const response = await api.get('/therapist-list/');
// // //       console.log('✅ Successfully fetched therapists:', response.data);
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error('❌ Error fetching all therapists:', error);
// // //       if (error.response) {
// // //         console.error('Response status:', error.response.status);
// // //         console.error('Response data:', error.response.data);
// // //       }
// // //       throw error;
// // //     }
// // //   },

// // //   // Get online therapists
// // //   getOnlineTherapists: async () => {
// // //     try {
// // //       console.log('🔍 Fetching online therapists...');
// // //       const response = await api.get('/online-therapists/');
// // //       console.log('✅ Successfully fetched online therapists:', response.data);
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error('❌ Error fetching online therapists:', error);
// // //       throw error;
// // //     }
// // //   },

// // //   // Get offline therapists
// // //   getOfflineTherapists: async () => {
// // //     try {
// // //       console.log('🔍 Fetching offline therapists...');
// // //       const response = await api.get('/offline-therapists/');
// // //       console.log('✅ Successfully fetched offline therapists:', response.data);
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error('❌ Error fetching offline therapists:', error);
// // //       throw error;
// // //     }
// // //   },

// // //   // // Get therapist details
// // //   // getTherapistDetail: async (therapistId) => {
// // //   //   try {
// // //   //     if (!therapistId) {
// // //   //       throw new Error('Therapist ID is required');
// // //   //     }
      
// // //   //     console.log(`🔍 Fetching therapist detail for ID: ${therapistId}`);
// // //   //     const response = await api.get(`/therapist-detail/${therapistId}/`);
// // //   //     console.log('✅ Successfully fetched therapist detail:', response.data);
// // //   //     return response.data;
// // //   //   } catch (error) {
// // //   //     console.error('❌ Error fetching therapist detail:', error);
// // //   //     throw error;
// // //   //   }
// // //   // },

  
// // //   getTherapistDetail: async (therapistId) => {
// // //     try {
// // //       const token = localStorage.getItem('access_token');
// // //       const response = await api.get(`/therapist-detail/${therapistId}/`, {
// // //         headers: {
// // //           'Authorization': `Bearer ${token}`,
// // //           'Content-Type': 'application/json'
// // //         }
// // //       });
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error('Error fetching therapist detail:', error);
// // //       if (error.response?.status === 401) {
// // //         // Handle unauthorized access
// // //         localStorage.removeItem('access_token');
// // //         window.location.href = '/login';
// // //       }
// // //       throw error;
// // //     }
// // //   },



// // //   // Book appointment
// // //   bookAppointment: async (appointmentData) => {
// // //     try {
// // //       if (!appointmentData) {
// // //         throw new Error('Appointment data is required');
// // //       }
      
// // //       console.log('📅 Booking appointment with data:', appointmentData);
// // //       const response = await api.post('/book-appointment/', appointmentData);
// // //       console.log('✅ Successfully booked appointment:', response.data);
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error('❌ Error booking appointment:', error);
// // //       if (error.response) {
// // //         console.error('Response status:', error.response.status);
// // //         console.error('Response data:', error.response.data);
// // //       }
// // //       throw error;
// // //     }
// // //   },

// // //   // Confirm appointment
// // //   confirmAppointment: async (appointmentId) => {
// // //     try {
// // //       if (!appointmentId) {
// // //         throw new Error('Appointment ID is required');
// // //       }
      
// // //       console.log(`✅ Confirming appointment ID: ${appointmentId}`);
// // //       const response = await api.post(`/confirm-appointment/${appointmentId}/`);
// // //       console.log('✅ Successfully confirmed appointment:', response.data);
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error('❌ Error confirming appointment:', error);
// // //       throw error;
// // //     }
// // //   },

// // //   // Complete appointment
// // //   completeAppointment: async (appointmentId) => {
// // //     try {
// // //       if (!appointmentId) {
// // //         throw new Error('Appointment ID is required');
// // //       }
      
// // //       console.log(`🏁 Completing appointment ID: ${appointmentId}`);
// // //       const response = await api.post(`/complete-appointment/${appointmentId}/`);
// // //       console.log('✅ Successfully completed appointment:', response.data);
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error('❌ Error completing appointment:', error);
// // //       throw error;
// // //     }
// // //   },
  

// // //   // Get user session history
// // //   getUserSessionHistory: async () => {
// // //     try {
// // //       console.log('📚 Fetching user session history...');
// // //       const response = await api.get('/user-session-history/');
// // //       console.log('✅ Successfully fetched session history:', response.data);
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error('❌ Error fetching user session history:', error);
// // //       throw error;
// // //     }
// // //   },

// // //   // Get user profile
// // //   getUserProfile: async () => {
// // //     try {
// // //       console.log('👤 Fetching user profile...');
// // //       const response = await api.get('/user-profile/');
// // //       console.log('✅ Successfully fetched user profile:', response.data);
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error('❌ Error fetching user profile:', error);
// // //       throw error;
// // //     }
// // //   },

// // //   // Get chat messages
// // //   getChatMessages: async (sessionId) => {
// // //     try {
// // //       if (!sessionId) {
// // //         throw new Error('Session ID is required');
// // //       }
      
// // //       console.log(`💬 Fetching chat messages for session: ${sessionId}`);
// // //       const response = await api.get(`/get-chat-messages/${sessionId}/`);
// // //       console.log('✅ Successfully fetched chat messages:', response.data);
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error('❌ Error fetching chat messages:', error);
// // //       throw error;
// // //     }
// // //   },

// // //   // Send chat message
// // //   sendChatMessage: async (messageData) => {
// // //     try {
// // //       if (!messageData) {
// // //         throw new Error('Message data is required');
// // //       }
      
// // //       console.log('📤 Sending chat message:', messageData);
// // //       const response = await api.post('/send-chat-message/', messageData);
// // //       console.log('✅ Successfully sent chat message:', response.data);
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error('❌ Error sending chat message:', error);
// // //       if (error.response) {
// // //         console.error('Response status:', error.response.status);
// // //         console.error('Response data:', error.response.data);
// // //       }
// // //       throw error;
// // //     }
// // //   },
// // // };

// // // // For backward compatibility, also export as default
// // // export default therapistService;


import api from './api';

export const therapistService = {
  // Get all therapists
  getAllTherapists: async () => {
    try {
      console.log('🔍 Fetching all therapists...');
      const response = await api.get('/therapist-list/');
      console.log('✅ Successfully fetched therapists:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching all therapists:', error);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      }
      throw error;
    }
  },

  // Get online therapists
  getOnlineTherapists: async () => {
    try {
      console.log('🔍 Fetching online therapists...');
      const response = await api.get('/online-therapists/');
      console.log('✅ Successfully fetched online therapists:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching online therapists:', error);
      throw error;
    }
  },

  // Get offline therapists
  getOfflineTherapists: async () => {
    try {
      console.log('🔍 Fetching offline therapists...');
      const response = await api.get('/offline-therapists/');
      console.log('✅ Successfully fetched offline therapists:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching offline therapists:', error);
      throw error;
    }
  },



  getTherapistDetail: async (therapistId) => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await api.get(`/therapist-detail/${therapistId}/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching therapist detail:', error);
      if (error.response?.status === 401) {
        // Handle unauthorized access
        localStorage.removeItem('access_token');
        window.location.href = '/login';
      }
      throw error;
    }
  },

  // Book appointment
  bookAppointment: async (appointmentData) => {
    try {
      if (!appointmentData) {
        throw new Error('Appointment data is required');
      }
      
      console.log('📅 Booking appointment with data:', appointmentData);
      const response = await api.post('/book-appointment/', appointmentData);
      console.log('✅ Successfully booked appointment:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error booking appointment:', error);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      }
      throw error;
    }
  },

  // Confirm appointment
  confirmAppointment: async (appointmentId) => {
    try {
      if (!appointmentId) {
        throw new Error('Appointment ID is required');
      }
      
      console.log(`✅ Confirming appointment ID: ${appointmentId}`);
      const response = await api.post(`/confirm-appointment/${appointmentId}/`);
      console.log('✅ Successfully confirmed appointment:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error confirming appointment:', error);
      throw error;
    }
  },

  // Complete appointment
  completeAppointment: async (appointmentId) => {
    try {
      if (!appointmentId) {
        throw new Error('Appointment ID is required');
      }
      
      console.log(`🏁 Completing appointment ID: ${appointmentId}`);
      const response = await api.post(`/complete-appointment/${appointmentId}/`);
      console.log('✅ Successfully completed appointment:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error completing appointment:', error);
      throw error;
    }
  },

  // Get user session history
  getUserSessionHistory: async () => {
    try {
      console.log('📚 Fetching user session history...');
      const response = await api.get('/user-session-history/');
      console.log('✅ Successfully fetched session history:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching user session history:', error);
      throw error;
    }
  },

  // Get user profile
  getUserProfile: async () => {
    try {
      console.log('👤 Fetching user profile...');
      const response = await api.get('/user-profile/');
      console.log('✅ Successfully fetched user profile:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching user profile:', error);
      throw error;
    }
  },




  // In your therapistService.js
updateUserProfile: async (profileData) => {
  try {
    if (!profileData) {
      throw new Error('Profile data is required');
    }

    console.log('🔄 Updating user profile:', profileData);
    const token = localStorage.getItem('access_token');
    
    const response = await api.patch('/user-profile/', profileData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (!response.data) {
      throw new Error('No response data received from server');
    }
    
    console.log('✅ Profile updated successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Error updating profile:', error);
    if (error.response?.status === 405) {
      throw new Error('Profile update method not supported. Please contact support.');
    }
    therapistService.handleAuthError(error);
    throw error;
  }
},


  // Get chat messages
  getChatMessages: async (sessionId) => {
    try {
      if (!sessionId) {
        throw new Error('Session ID is required');
      }
      
      console.log(`💬 Fetching chat messages for session: ${sessionId}`);
      const response = await api.get(`/get-chat-messages/${sessionId}/`);
      console.log('✅ Successfully fetched chat messages:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching chat messages:', error);
      throw error;
    }
  },

  // Send chat message
  sendChatMessage: async (messageData) => {
    try {
      if (!messageData) {
        throw new Error('Message data is required');
      }
      
      console.log('📤 Sending chat message:', messageData);
      const response = await api.post('/send-chat-message/', messageData);
      console.log('✅ Successfully sent chat message:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error sending chat message:', error);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      }
      throw error;
    }
  },

  getAuthToken: () => {
    return localStorage.getItem('access_token');
  },

  handleAuthError: (error) => {
    if (error.response?.status === 401) {
      console.warn('🔒 Authentication failed, redirecting to login...');
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      window.location.href = '/login';
    }
  },


// User Profile Methods
  getUserProfile: async () => {
    try {
      console.log('👤 Fetching user profile...');
      const token = localStorage.getItem('access_token');
      const response = await api.get('/user-profile/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('✅ Successfully fetched user profile:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching user profile:', error);
      therapistService.handleAuthError(error);
      throw error;
    }
  },

  updateUserProfile: async (profileData) => {
    try {
      console.log('🔄 Updating user profile:', profileData);
      const token = localStorage.getItem('access_token');
      
      const response = await api.patch('/user-profile/', profileData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      
      console.log('✅ Profile updated successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error updating profile:', error);
      therapistService.handleAuthError(error);
      throw error;
    }
  },

  // FIXED: Delete user account
  deleteUserAccount: async () => {
    try {
      console.log('🗑️ Deleting user account...');
      const token = localStorage.getItem('access_token');
      
      const response = await api.delete('/delete-account/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log('✅ User account deleted successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error deleting user account:', error);
      throw new Error(error.response?.data?.error || 'Failed to delete account');
    }
  },

  // Privacy & Security Methods - DYNAMIC
  getPrivacySettings: async () => {
    try {
      console.log('🔍 Fetching privacy settings...');
      const token = localStorage.getItem('access_token');
      const response = await api.get('/privacy-settings/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('✅ Privacy settings fetched:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching privacy settings:', error);
      therapistService.handleAuthError(error);
      throw error;
    }
  },

  updatePrivacySettings: async (settings) => {
    try {
      console.log('💾 Updating privacy settings:', settings);
      const token = localStorage.getItem('access_token');
      const response = await api.put('/privacy-settings/', settings, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('✅ Privacy settings updated:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error updating privacy settings:', error);
      therapistService.handleAuthError(error);
      throw error;
    }
  },

  getActiveDevices: async () => {
    try {
      console.log('📱 Fetching active devices...');
      const token = localStorage.getItem('access_token');
      const response = await api.get('/active-devices/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('✅ Active devices fetched:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching active devices:', error);
      therapistService.handleAuthError(error);
      throw error;
    }
  },

  getRecentActivity: async () => {
    try {
      console.log('📊 Fetching recent activity...');
      const token = localStorage.getItem('access_token');
      const response = await api.get('/recent-activity/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('✅ Recent activity fetched:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching recent activity:', error);
      therapistService.handleAuthError(error);
      throw error;
    }
  },

  revokeDeviceAccess: async (deviceId) => {
    try {
      console.log(`🚫 Revoking device access for ID: ${deviceId}`);
      const token = localStorage.getItem('access_token');
      const response = await api.delete(`/revoke-device/${deviceId}/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('✅ Device access revoked successfully');
      return response.data;
    } catch (error) {
      console.error('❌ Error revoking device access:', error);
      therapistService.handleAuthError(error);
      throw error;
    }
  },

  changePassword: async (passwordData) => {
    try {
      console.log('🔑 Changing password...');
      const token = localStorage.getItem('access_token');
      const response = await api.post('/change-password/', passwordData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('✅ Password changed successfully');
      return response.data;
    } catch (error) {
      console.error('❌ Error changing password:', error);
      therapistService.handleAuthError(error);
      throw error;
    }
  },

  enable2FA: async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await api.post('/enable-2fa/', {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      therapistService.handleAuthError(error);
      throw error;
    }
  },

  disable2FA: async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await api.post('/disable-2fa/', {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      therapistService.handleAuthError(error);
      throw error;
    }
  },

  requestDataExport: async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await api.post('/request-data-export/', {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      therapistService.handleAuthError(error);
      throw error;
    }
  },

  deleteAllUserData: async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await api.delete('/delete-all-data/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      therapistService.handleAuthError(error);
      throw error;
    }
  },

  clearActivityHistory: async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await api.delete('/clear-activity/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      therapistService.handleAuthError(error);
      throw error;
    }
  },

  // Your existing methods (getAllTherapists, bookAppointment, etc.)
  getAllTherapists: async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await api.get('/therapist-list/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      therapistService.handleAuthError(error);
      throw error;
    }
  },


  // In therapistService.js
getTherapistDetail: async (therapistId) => {
    try {
        console.log('Fetching therapist detail for ID:', therapistId);
        const token = localStorage.getItem('access_token');
        const response = await api.get(`therapist-detail/${therapistId}/`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        console.log('Successfully fetched therapist detail:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching therapist detail:', error);
        if (error.response?.status === 401) {
            // Handle unauthorized access
            localStorage.removeItem('access_token');
            window.location.href = '/login';
        }
        throw error;
    }
},


submitTherapistReview: async (therapistId, reviewData) => {
        try {
            console.log('🔍 Starting review submission...');
            console.log('Therapist ID:', therapistId);
            console.log('Review data:', reviewData);
            
            const token = localStorage.getItem('access_token');
            console.log('Token exists:', !!token);
            
            if (!token) {
                throw new Error('No authentication token found');
            }
            
            const url = `submit-therapist-review/${therapistId}/`;
            console.log('Making API call to:', url);
            
            const response = await api.post(url, reviewData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            
            console.log('✅ Review submitted successfully:', response.data);
            return response.data;
            
        } catch (error) {
            console.error('❌ Error submitting review:');
            console.error('Error object:', error);
            console.error('Error message:', error.message);
            console.error('Error response:', error.response);
            console.error('Error response data:', error.response?.data);
            console.error('Error response status:', error.response?.status);
            console.error('Request URL:', error.config?.url);
            
            throw error;
        }
    }



};

export default therapistService;





