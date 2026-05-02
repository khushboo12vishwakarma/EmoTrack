import api from './api';

export const dashboardService = {
  // Get comprehensive dashboard data
  getDashboardData: async () => {
    try {
      console.log('📊 Fetching dashboard data...');
      const token = localStorage.getItem('access_token');
      const response = await api.get('/dashboard-data/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('✅ Dashboard data fetched successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching dashboard data:', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('access_token');
        window.location.href = '/login';
      }
      throw error;
    }
  },

  // Get quick stats only
  getQuickStats: async () => {
    try {
      const data = await dashboardService.getDashboardData();
      return data.stats;
    } catch (error) {
      console.error('❌ Error fetching quick stats:', error);
      throw error;
    }
  },

  // Get recent activities
  getRecentActivities: async () => {
    try {
      const data = await dashboardService.getDashboardData();
      return data.recent_activities;
    } catch (error) {
      console.error('❌ Error fetching recent activities:', error);
      throw error;
    }
  }
};

export default dashboardService;
