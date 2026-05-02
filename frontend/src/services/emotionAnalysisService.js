// src/services/emotionAnalysisService.js
import api from './api';

export const emotionAnalysisService = {
  // Get latest emotion analysis for the user
  getLatestEmotionAnalysis: async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await api.get('/api/emotion-analysis/latest/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching latest emotion analysis:', error);
      return null;
    }
  },

  // Get all emotion analyses for the user
  getAllEmotionAnalyses: async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await api.get('/api/emotion-analysis/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching emotion analyses:', error);
      return [];
    }
  },

  // Get AI suggestion based on emotion analysis
  getAISuggestion: async (emotionAnalysisId) => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await api.get(`/api/ai-suggestion/${emotionAnalysisId}/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching AI suggestion:', error);
      return null;
    }
  },

  // Submit new emotion input and get analysis
  submitEmotionInput: async (inputData) => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await api.post('/api/emotion-analysis/', inputData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': inputData.type === 'audio' ? 'multipart/form-data' : 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error submitting emotion input:', error);
      throw error;
    }
  }
};
