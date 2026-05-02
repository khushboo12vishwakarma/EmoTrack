// // export default Progress;
// import React, { useState, useEffect } from 'react';
// import { emotionService } from '../services/emotionService';
// import LoadingSpinner from '../components/ui/LoadingSpinner';
// import { 
//   TrendingUp, 
//   Calendar, 
//   Heart, 
//   BarChart3,
//   Activity,
//   Target,
//   CheckCircle,
//   Clock,
//   AlertCircle
// } from 'lucide-react';

// const Progress = () => {
//   const [progressLogs, setProgressLogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [updating, setUpdating] = useState(null); // Track which log is being updated

//   useEffect(() => {
//     fetchProgressLogs();
//   }, []);

//   const fetchProgressLogs = async () => {
//     try {
//       const data = await emotionService.getUserProgressLogs();
//       setProgressLogs(data);
//       setError(''); // Clear any previous errors
//     } catch (err) {
//       console.error('Error fetching progress logs:', err);
//       setError('Failed to load progress data. Please try refreshing the page.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ IMPROVED - Mark progress log as completed with better error handling
//   const handleMarkCompleted = async (logId) => {
//     if (!logId) {
//       setError('Invalid progress log ID');
//       return;
//     }

//     setUpdating(logId);
//     setError(''); // Clear any previous errors
    
//     try {
//       // Call the API
//       const result = await emotionService.markProgressLogCompleted(logId);
      
//       // Update local state to reflect the change
//       setProgressLogs(prevLogs => 
//         prevLogs.map(log => 
//           log.id === logId 
//             ? { ...log, completed: true }
//             : log
//         )
//       );

//       console.log('Successfully marked as completed:', result);
      
//     } catch (err) {
//       console.error('Error marking as completed:', err);
      
//       // Show specific error message
//       const errorMessage = err.message || 'Failed to mark as completed';
//       setError(`Error: ${errorMessage}. Please try again or contact support.`);
      
//       // Optional: Show a browser alert as well
//       alert(`Failed to mark as completed: ${errorMessage}`);
      
//     } finally {
//       setUpdating(null);
//     }
//   };

//   const calculateStats = () => {
//     if (progressLogs.length === 0) return null;

//     const totalEntries = progressLogs.length;
//     const completedEntries = progressLogs.filter(log => log.completed).length;
//     const averageMood = progressLogs
//       .filter(log => log.mood_rating)
//       .reduce((sum, log) => sum + log.mood_rating, 0) / 
//       progressLogs.filter(log => log.mood_rating).length || 0;

//     const recentLogs = progressLogs.slice(-7); // Last 7 entries
//     const recentAverageMood = recentLogs
//       .filter(log => log.mood_rating)
//       .reduce((sum, log) => sum + log.mood_rating, 0) / 
//       recentLogs.filter(log => log.mood_rating).length || 0;

//     return {
//       totalEntries,
//       completedEntries,
//       completionRate: (completedEntries / totalEntries) * 100,
//       averageMood: averageMood.toFixed(1),
//       recentAverageMood: recentAverageMood.toFixed(1),
//       trend: recentAverageMood > averageMood ? 'improving' : 'declining'
//     };
//   };

//   const getMoodColor = (rating) => {
//     if (rating >= 4) return 'text-green-600 bg-green-50';
//     if (rating >= 3) return 'text-yellow-600 bg-yellow-50';
//     return 'text-red-600 bg-red-50';
//   };

//   const getMoodEmoji = (rating) => {
//     if (rating >= 4) return '😊';
//     if (rating >= 3) return '😐';
//     return '😞';
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <LoadingSpinner size="lg" />
//       </div>
//     );
//   }

//   const stats = calculateStats();

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Your Progress</h1>
//           <p className="mt-2 text-gray-600">
//             Track your emotional wellness journey over time
//           </p>
//         </div>

//         {/* ✅ IMPROVED ERROR DISPLAY */}
//         {error && (
//           <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
//             <div className="flex items-start">
//               <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
//               <div>
//                 <h3 className="text-sm font-medium text-red-800">Error</h3>
//                 <p className="mt-1 text-sm text-red-700">{error}</p>
//                 <button
//                   onClick={() => setError('')}
//                   className="mt-2 text-sm text-red-600 underline hover:text-red-800"
//                 >
//                   Dismiss
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {progressLogs.length === 0 ? (
//           <div className="text-center py-12">
//             <Activity className="h-16 w-16 text-gray-300 mx-auto mb-4" />
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">
//               No progress data yet
//             </h3>
//             <p className="text-gray-600 mb-4">
//               Start tracking your mood to see your progress over time
//             </p>
//           </div>
//         ) : (
//           <>
//             {/* Statistics Cards */}
//             {stats && (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                 <div className="card text-center">
//                   <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
//                   <h3 className="text-2xl font-bold text-gray-900">{stats.totalEntries}</h3>
//                   <p className="text-sm text-gray-600">Total Entries</p>
//                 </div>

//                 <div className="card text-center">
//                   <Target className="h-8 w-8 text-secondary mx-auto mb-2" />
//                   <h3 className="text-2xl font-bold text-gray-900">{stats.completionRate.toFixed(0)}%</h3>
//                   <p className="text-sm text-gray-600">Completion Rate</p>
//                 </div>

//                 <div className="card text-center">
//                   <Heart className="h-8 w-8 text-accent mx-auto mb-2" />
//                   <h3 className="text-2xl font-bold text-gray-900">{stats.averageMood}/5</h3>
//                   <p className="text-sm text-gray-600">Average Mood</p>
//                 </div>

//                 <div className="card text-center">
//                   <TrendingUp className={`h-8 w-8 mx-auto mb-2 ${
//                     stats.trend === 'improving' ? 'text-green-600' : 'text-red-600'
//                   }`} />
//                   <h3 className="text-2xl font-bold text-gray-900">{stats.recentAverageMood}/5</h3>
//                   <p className="text-sm text-gray-600">Recent Average</p>
//                   <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-1 ${
//                     stats.trend === 'improving' 
//                       ? 'bg-green-100 text-green-800' 
//                       : 'bg-red-100 text-red-800'
//                   }`}>
//                     {stats.trend === 'improving' ? '↗ Improving' : '↘ Needs Attention'}
//                   </span>
//                 </div>
//               </div>
//             )}

//             {/* Progress Timeline */}
//             <div className="card">
//               <div className="flex items-center mb-6">
//                 <BarChart3 className="h-6 w-6 text-primary mr-2" />
//                 <h2 className="text-xl font-semibold">Progress Timeline</h2>
//               </div>

//               <div className="space-y-4">
//                 {progressLogs.slice().reverse().map((log, index) => (
//                   <div key={log.id} className="border border-gray-200 rounded-lg p-4">
//                     <div className="flex items-center justify-between mb-3">
//                       <div className="flex items-center space-x-3">
//                         <div className="text-2xl">
//                           {log.mood_rating ? getMoodEmoji(log.mood_rating) : '📝'}
//                         </div>
//                         <div>
//                           <h3 className="font-medium text-gray-900">
//                             {new Date(log.date).toLocaleDateString('en-US', {
//                               weekday: 'long',
//                               year: 'numeric',
//                               month: 'long',
//                               day: 'numeric'
//                             })}
//                           </h3>
//                           {log.mood_rating && (
//                             <p className="text-sm text-gray-600">
//                               Mood Rating: {log.mood_rating}/5
//                             </p>
//                           )}
//                         </div>
//                       </div>
                      
//                       <div className="flex items-center space-x-2">
//                         {log.mood_rating && (
//                           <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMoodColor(log.mood_rating)}`}>
//                             {log.mood_rating >= 4 ? 'Great' : log.mood_rating >= 3 ? 'Okay' : 'Struggling'}
//                           </span>
//                         )}
                        
//                         {/* ✅ IMPROVED COMPLETION STATUS & BUTTON */}
//                         {!log.completed ? (
//                           <button
//                             onClick={() => handleMarkCompleted(log.id)}
//                             disabled={updating === log.id}
//                             className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 border border-blue-200 hover:border-blue-300"
//                             title="Mark this day as completed"
//                           >
//                             {updating === log.id ? (
//                               <>
//                                 <div className="w-3 h-3 border border-blue-600 border-t-transparent rounded-full animate-spin mr-1"></div>
//                                 Updating...
//                               </>
//                             ) : (
//                               <>
//                                 <Clock className="w-3 h-3 mr-1" />
//                                 Mark as Completed
//                               </>
//                             )}
//                           </button>
//                         ) : (
//                           <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
//                             <CheckCircle className="w-3 h-3 mr-1" />
//                             Completed
//                           </span>
//                         )}
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
//                       {log.tip_of_the_day && (
//                         <div>
//                           <h4 className="font-medium text-gray-700 mb-1">💡 Tip of the Day</h4>
//                           <p className="text-gray-600">{log.tip_of_the_day}</p>
//                         </div>
//                       )}

//                       {log.quote && (
//                         <div>
//                           <h4 className="font-medium text-gray-700 mb-1">💬 Quote</h4>
//                           <p className="text-gray-600 italic">"{log.quote}"</p>
//                         </div>
//                       )}

//                       {log.journaling_prompt && (
//                         <div>
//                           <h4 className="font-medium text-gray-700 mb-1">📝 Journaling Prompt</h4>
//                           <p className="text-gray-600">{log.journaling_prompt}</p>
//                         </div>
//                       )}

//                       {log.breathing_minutes && (
//                         <div>
//                           <h4 className="font-medium text-gray-700 mb-1">🌬 Breathing Exercise</h4>
//                           <p className="text-gray-600">{log.breathing_minutes} minutes</p>
//                         </div>
//                       )}
//                     </div>

//                     {(log.music_link || log.meditation_video) && (
//                       <div className="mt-3 pt-3 border-t border-gray-100">
//                         <div className="flex space-x-4">
//                           {log.music_link && (
//                             <a
//                               href={log.music_link}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="text-primary hover:text-blue-600 text-sm"
//                             >
//                               🎧 Listen to Music
//                             </a>
//                           )}
//                           {log.meditation_video && (
//                             <a
//                               href={log.meditation_video}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="text-primary hover:text-blue-600 text-sm"
//                             >
//                               🧘 Watch Meditation
//                             </a>
//                           )}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {progressLogs.length > 10 && (
//                 <div className="text-center mt-6">
//                   <p className="text-sm text-gray-600">
//                     Showing latest entries. Keep tracking your mood to see more progress!
//                   </p>
//                 </div>
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Progress;
// export default Progress;
import React, { useState, useEffect } from 'react';
import { emotionService } from '../services/emotionService';
import LoadingSpinner from '../components/ui/LoadingSpinner';

import { 
  TrendingUp, 
  Calendar, 
  Heart, 
  BarChart3,
  Activity,
  Target,
  CheckCircle,
  Clock,
  AlertCircle,
  Star,
  Award,
  Brain
} from 'lucide-react';

const Progress = () => {
  const [progressLogs, setProgressLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updating, setUpdating] = useState(null);

  useEffect(() => {
    fetchProgressLogs();
  }, []);

  const fetchProgressLogs = async () => {
    try {
      const data = await emotionService.getUserProgressLogs();
      setProgressLogs(data);
      setError('');
    } catch (err) {
      console.error('Error fetching progress logs:', err);
      setError('Failed to load progress data. Please try refreshing the page.');
    } finally {
      setLoading(false);
    }
  };




  const handleMarkCompleted = async (logId) => {
    if (!logId) {
      setError('Invalid progress log ID');
      return;
    }

    setUpdating(logId);
    setError('');
    
    try {
      const result = await emotionService.markProgressLogCompleted(logId);
      
      setProgressLogs(prevLogs => 
        prevLogs.map(log => 
          log.id === logId 
            ? { ...log, completed: true }
            : log
        )
      );

      console.log('Successfully marked as completed:', result);
      
    } catch (err) {
      console.error('Error marking as completed:', err);
      
      const errorMessage = err.message || 'Failed to mark as completed';
      setError(`Error: ${errorMessage}. Please try again or contact support.`);
      
      alert(`Failed to mark as completed: ${errorMessage}`);
      
    } finally {
      setUpdating(null);
    }
  };

  const calculateStats = () => {
    if (progressLogs.length === 0) return null;

    const totalEntries = progressLogs.length;
    const completedEntries = progressLogs.filter(log => log.completed).length;
    const averageMood = progressLogs
      .filter(log => log.mood_rating)
      .reduce((sum, log) => sum + log.mood_rating, 0) / 
      progressLogs.filter(log => log.mood_rating).length || 0;

    const recentLogs = progressLogs.slice(-7);
    const recentAverageMood = recentLogs
      .filter(log => log.mood_rating)
      .reduce((sum, log) => sum + log.mood_rating, 0) / 
      recentLogs.filter(log => log.mood_rating).length || 0;

    return {
      totalEntries,
      completedEntries,
      completionRate: (completedEntries / totalEntries) * 100,
      averageMood: averageMood.toFixed(1),
      recentAverageMood: recentAverageMood.toFixed(1),
      trend: recentAverageMood > averageMood ? 'improving' : 'declining'
    };
  };

  const getMoodColor = (rating) => {
    if (rating >= 4) return 'text-emerald-700 bg-emerald-100 border-emerald-200';
    if (rating >= 3) return 'text-amber-700 bg-amber-100 border-amber-200';
    return 'text-rose-700 bg-rose-100 border-rose-200';
  };

  const getMoodEmoji = (rating) => {
    if (rating >= 4) return '😊';
    if (rating >= 3) return '😐';
    return '😞';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-pulse">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full mx-auto flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
          <LoadingSpinner size="lg" />
          <p className="text-lg font-medium text-gray-600 animate-fade-in">
            Loading your progress...
          </p>
        </div>
      </div>
    );
  }

  const stats = calculateStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 font-['Inter','-apple-system','BlinkMacSystemFont','Segoe_UI','Roboto','sans-serif']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* PROFESSIONAL HEADER */}
        <header className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl mb-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Your Progress
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Track your emotional wellness journey over time with detailed insights and achievements
          </p>
        </header>

        {/* ENHANCED ERROR DISPLAY */}
        {error && (
          <div className="bg-white/90 backdrop-blur-sm border border-red-200 rounded-2xl p-6 mb-8 shadow-lg animate-slide-in">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Something went wrong</h3>
                <p className="text-red-700 leading-relaxed">{error}</p>
                <button
                  onClick={() => setError('')}
                  className="mt-3 inline-flex items-center px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg font-medium transition-colors duration-200"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        )}

        {progressLogs.length === 0 ? (
          /* EMPTY STATE */
          <div className="text-center py-24 animate-fade-in">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-8 flex items-center justify-center">
              <Activity className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No progress data yet
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Start tracking your mood to unlock insights about your emotional wellness journey
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Heart className="w-5 h-5 mr-2" />
              Begin Your Journey
            </div>
          </div>
        ) : (
          <>
            {/* ENHANCED STATISTICS CARDS */}
            {stats && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {[
                  {
                    icon: Calendar,
                    label: 'Journal Entries',
                    value: stats.totalEntries,
                    color: 'from-blue-500 to-indigo-600',
                    bgColor: 'from-blue-50 to-indigo-50',
                    delay: '0ms'
                  },
                  {
                    icon: Target,
                    label: 'Completion Rate',
                    value: `${stats.completionRate.toFixed(0)}%`,
                    color: 'from-emerald-500 to-green-600',
                    bgColor: 'from-emerald-50 to-green-50',
                    delay: '100ms'
                  },
                  {
                    icon: Heart,
                    label: 'Average Mood',
                    value: `${stats.averageMood}/5`,
                    color: 'from-pink-500 to-rose-600',
                    bgColor: 'from-pink-50 to-rose-50',
                    delay: '200ms'
                  },
                  {
                    icon: TrendingUp,
                    label: 'Recent Average',
                    value: `${stats.recentAverageMood}/5`,
                    color: stats.trend === 'improving' ? 'from-emerald-500 to-green-600' : 'from-red-500 to-rose-600',
                    bgColor: stats.trend === 'improving' ? 'from-emerald-50 to-green-50' : 'from-red-50 to-rose-50',
                    delay: '300ms',
                    trend: stats.trend
                  }
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`bg-gradient-to-br ${stat.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 border border-white/50 animate-fade-in-up`}
                    style={{ animationDelay: stat.delay }}
                  >
                    <div className="text-center space-y-4">
                      <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl shadow-lg`}>
                        <stat.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2 tabular-nums">
                          {stat.value}
                        </h3>
                        <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                          {stat.label}
                        </p>
                      </div>

                      {stat.trend && (
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                          stat.trend === 'improving' 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {stat.trend === 'improving' ? '↗ Improving' : '↘ Needs Attention'}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ENHANCED PROGRESS TIMELINE */}
            <section className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="bg-gradient-to-r from-indigo-600 to-purple-700 px-8 py-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Progress Timeline</h2>
                    <p className="text-indigo-100">Your emotional wellness journey</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6 max-h-96 overflow-y-auto custom-scrollbar">
                {progressLogs.slice().reverse().map((log, index) => (
                  <article
                    key={log.id}
                    className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 animate-slide-in-left"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <header className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center text-2xl">
                          {log.mood_rating ? getMoodEmoji(log.mood_rating) : '📝'}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {new Date(log.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </h3>
                          {log.mood_rating && (
                            <p className="text-sm font-medium text-gray-600">
                              Mood Rating: {log.mood_rating}/5
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        {log.mood_rating && (
                          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getMoodColor(log.mood_rating)}`}>
                            {log.mood_rating >= 4 ? 'Excellent' : log.mood_rating >= 3 ? 'Good' : 'Needs Support'}
                          </span>
                        )}
                        
                        {!log.completed ? (
                          <button
                            onClick={() => handleMarkCompleted(log.id)}
                            disabled={updating === log.id}
                            className="group inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold rounded-xl hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                            title="Mark this day as completed"
                          >
                            {updating === log.id ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Updating...</span>
                              </>
                            ) : (
                              <>
                                <Clock className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                                <span>Mark Completed</span>
                              </>
                            )}
                          </button>
                        ) : (
                          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold rounded-xl shadow-lg">
                            <CheckCircle className="w-4 h-4" />
                            <span>Completed</span>
                          </div>
                        )}
                      </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      {log.tip_of_the_day && (
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200">
                          <h4 className="flex items-center font-bold text-yellow-800 mb-2">
                            <Star className="w-4 h-4 mr-2" />
                            Tip of the Day
                          </h4>
                          <p className="text-yellow-700 leading-relaxed">{log.tip_of_the_day}</p>
                        </div>
                      )}

                      {log.quote && (
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-200">
                          <h4 className="flex items-center font-bold text-purple-800 mb-2">
                            <Award className="w-4 h-4 mr-2" />
                            Inspiration
                          </h4>
                          <p className="text-purple-700 italic leading-relaxed">"{log.quote}"</p>
                        </div>
                      )}

                      {log.journaling_prompt && (
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
                          <h4 className="flex items-center font-bold text-blue-800 mb-2">
                            <Brain className="w-4 h-4 mr-2" />
                            Journaling Prompt
                          </h4>
                          <p className="text-blue-700 leading-relaxed">{log.journaling_prompt}</p>
                        </div>
                      )}

                      {log.breathing_minutes && (
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                          <h4 className="flex items-center font-bold text-green-800 mb-2">
                            <Heart className="w-4 h-4 mr-2" />
                            Breathing Exercise
                          </h4>
                          <p className="text-green-700 leading-relaxed">{log.breathing_minutes} minutes</p>
                        </div>
                      )}
                    </div>

                    {(log.music_link || log.meditation_video) && (
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <div className="flex flex-wrap gap-3">
                          {log.music_link && (
                            <a
                              href={log.music_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm font-semibold rounded-xl hover:from-pink-600 hover:to-rose-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                            >
                              <span>🎧</span>
                              <span>Listen to Music</span>
                            </a>
                          )}
                          {log.meditation_video && (
                            <a
                              href={log.meditation_video}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                            >
                              <span>🧘</span>
                              <span>Watch Meditation</span>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>

              {progressLogs.length > 10 && (
                <div className="bg-gradient-to-r from-gray-50 to-indigo-50 px-8 py-6 text-center border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-600">
                    Showing your latest entries. Keep tracking to unlock more insights! 🚀
                  </p>
                </div>
              )}
            </section>
          </>
        )}
      </div>

      {/* CUSTOM STYLES */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in {
          from { 
            opacity: 0; 
            transform: translateX(-10px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-left {
          from { 
            opacity: 0; 
            transform: translateX(-20px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        .animate-fade-in { 
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-up { 
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-slide-in { 
          animation: slide-in 0.5s ease-out;
        }
        
        .animate-slide-in-left { 
          animation: slide-in-left 0.6s ease-out;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6366f1, #8b5cf6);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #4f46e5, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default Progress;



