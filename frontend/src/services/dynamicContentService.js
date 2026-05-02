// src/services/dynamicContentService.js
import api from './api';

export const dynamicContentService = {
  // Get wellness tips from your Django backend
  getWellnessTips: async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await api.get('/api/wellness-tips/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching wellness tips:', error);
      // Fallback tips
      return [
        {
          id: 1,
          category: "Mental Clarity",
          tip: "Take 5 deep breaths whenever you feel overwhelmed.",
          icon: 'Brain',
          color: "from-blue-500 to-indigo-600",
          actionText: "Try Deep Breathing",
          action: 'breathing_exercise'
        }
      ];
    }
  },

  // Get AI recommendations from your Django backend
  getAIRecommendations: async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await api.get('/api/ai-recommendations/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching AI recommendations:', error);
      return [];
    }
  },

  // Execute recommendation actions
  executeRecommendation: async (recommendation) => {
    switch (recommendation.action) {
      case 'start_meditation':
        if (recommendation.url) {
          window.open(recommendation.url, '_blank');
        }
        break;
      case 'open_journal':
        return { 
          type: 'journal_prompt', 
          message: recommendation.prompt || "Take a moment to reflect on your thoughts and feelings."
        };
      case 'play_music':
        if (recommendation.url) {
          window.open(recommendation.url, '_blank');
        }
        break;
      case 'breathing_exercise':
        return { 
          type: 'breathing_guide', 
          message: "Let's start a breathing exercise.",
          instruction: recommendation.instruction || "Breathe in for 4, hold for 4, breathe out for 4"
        };
      case 'wellness_activity':
        return { 
          type: 'wellness_guide', 
          message: recommendation.tip,
          content: recommendation.content
        };
      default:
        return { type: 'info', message: "Activity started!" };
    }
  }
};
