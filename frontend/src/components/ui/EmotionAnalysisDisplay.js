// // // src/components/EmotionAnalysisDisplay.js
// // import React, { useState, useEffect } from 'react';
// // import { emotionAnalysisService } from '../services/emotionAnalysisService';
// // import ProfessionalSuggestion from './ProfessionalSuggestion';
// // import LoadingSpinner from './ui/LoadingSpinner';
// // import { 
// //   RefreshCw, 
// //   AlertCircle, 
// //   TrendingUp, 
// //   Clock, 
// //   Calendar,
// //   Activity
// // } from 'lucide-react';

// // const EmotionAnalysisDisplay = ({ showLatestOnly = true, className = "" }) => {
// //   const [emotionData, setEmotionData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [refreshing, setRefreshing] = useState(false);

// //   useEffect(() => {
// //     fetchEmotionAnalysis();
// //   }, []);

// //   const fetchEmotionAnalysis = async () => {
// //     try {
// //       setLoading(true);
// //       setError('');
      
// //       console.log('🔄 Fetching latest emotion analysis...');
// //       const analysisData = await emotionAnalysisService.getLatestEmotionAnalysis();
      
// //       if (analysisData) {
// //         console.log('✅ Emotion analysis loaded:', analysisData);
// //         setEmotionData(analysisData);
// //       } else {
// //         setError('No emotion analysis found. Please share your feelings first.');
// //       }
// //     } catch (err) {
// //       console.error('❌ Error fetching emotion analysis:', err);
// //       setError('Failed to load emotion analysis. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleRefresh = async () => {
// //     setRefreshing(true);
// //     await fetchEmotionAnalysis();
// //     setRefreshing(false);
// //   };

// //   if (loading) {
// //     return (
// //       <div className={`bg-white rounded-3xl shadow-2xl border border-white/50 p-8 ${className}`}>
// //         <div className="flex items-center justify-center py-12">
// //           <div className="text-center">
// //             <LoadingSpinner size="lg" />
// //             <p className="text-gray-600 mt-4">Loading your emotion analysis...</p>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className={`bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-3xl p-8 ${className}`}>
// //         <div className="flex items-center justify-between">
// //           <div className="flex items-center">
// //             <AlertCircle className="w-8 h-8 text-orange-600 mr-4" />
// //             <div>
// //               <h3 className="text-xl font-bold text-orange-800">No Analysis Available</h3>
// //               <p className="text-orange-700 mt-2">{error}</p>
// //             </div>
// //           </div>
// //           <button
// //             onClick={handleRefresh}
// //             disabled={refreshing}
// //             className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors disabled:opacity-50"
// //           >
// //             <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
// //             Try Again
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (!emotionData) {
// //     return (
// //       <div className={`bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-3xl p-8 text-center ${className}`}>
// //         <Activity className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
// //         <h3 className="text-xl font-bold text-indigo-800 mb-2">Ready for Your First Analysis</h3>
// //         <p className="text-indigo-600">Share your feelings through voice, text, or video to get personalized insights.</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className={`space-y-8 ${className}`}>
// //       {/* Header with Refresh Button */}
// //       <div className="flex items-center justify-between">
// //         <div>
// //           <h2 className="text-3xl font-bold text-gray-800">Your Emotional Journey</h2>
// //           <p className="text-gray-600 mt-1">AI-powered insights and personalized guidance</p>
// //         </div>
// //         <button
// //           onClick={handleRefresh}
// //           disabled={refreshing}
// //           className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
// //         >
// //           <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
// //           {refreshing ? 'Refreshing...' : 'Refresh'}
// //         </button>
// //       </div>

// //       {/* Professional Suggestion Component with Dynamic Data */}
// //       <ProfessionalSuggestion 
// //         suggestion={emotionData.suggestion}
// //         emotionData={emotionData}
// //       />

// //       {/* Analysis Metadata */}
// //       <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-2xl p-6">
// //         <div className="flex items-center justify-between">
// //           <div className="flex items-center space-x-6">
// //             <div className="flex items-center space-x-2">
// //               <Clock className="w-5 h-5 text-gray-500" />
// //               <span className="text-sm font-medium text-gray-600">
// //                 Last Updated: {emotionData.time_of_analysis}
// //               </span>
// //             </div>
// //             <div className="flex items-center space-x-2">
// //               <Calendar className="w-5 h-5 text-gray-500" />
// //               <span className="text-sm font-medium text-gray-600">
// //                 {emotionData.date}
// //               </span>
// //             </div>
// //           </div>
// //           <div className="text-sm text-gray-500">
// //             Analysis ID: #{emotionData.id}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EmotionAnalysisDisplay;
// // src/components/EmotionAnalysisDisplay.js - CREATE THIS FILE  
// import React, { useState, useEffect } from 'react';
// import { emotionAnalysisService } from '../../services/emotionAnalysisService';
// import ProfessionalSuggestion from './ProfessionalSuggestion';
// import LoadingSpinner from '../ui/LoadingSpinner';
// import { 
//   RefreshCw, 
//   AlertCircle, 
//   Activity,
//   Clock, 
//   Calendar
// } from 'lucide-react';

// const EmotionAnalysisDisplay = ({ showLatestOnly = true, className = "" }) => {
//   const [emotionData, setEmotionData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [refreshing, setRefreshing] = useState(false);

//   useEffect(() => {
//     fetchEmotionAnalysis();
//   }, []);

//   const fetchEmotionAnalysis = async () => {
//     try {
//       setLoading(true);
//       setError('');
      
//       console.log('🔄 Fetching latest emotion analysis...');
//       const analysisData = await emotionAnalysisService.getLatestEmotionAnalysis();
      
//       if (analysisData) {
//         console.log('✅ Emotion analysis loaded:', analysisData);
//         setEmotionData(analysisData);
//       } else {
//         setError('No emotion analysis found. Please share your feelings first.');
//       }
//     } catch (err) {
//       console.error('❌ Error fetching emotion analysis:', err);
//       setError('Failed to load emotion analysis. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRefresh = async () => {
//     setRefreshing(true);
//     await fetchEmotionAnalysis();
//     setRefreshing(false);
//   };

//   if (loading) {
//     return (
//       <div className={`bg-white rounded-3xl shadow-2xl border border-white/50 p-8 ${className}`}>
//         <div className="flex items-center justify-center py-12">
//           <div className="text-center">
//             <LoadingSpinner size="lg" />
//             <p className="text-gray-600 mt-4">Loading your emotion analysis...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={`bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-3xl p-8 ${className}`}>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <AlertCircle className="w-8 h-8 text-orange-600 mr-4" />
//             <div>
//               <h3 className="text-xl font-bold text-orange-800">No Analysis Available</h3>
//               <p className="text-orange-700 mt-2">{error}</p>
//             </div>
//           </div>
//           <button
//             onClick={handleRefresh}
//             disabled={refreshing}
//             className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors disabled:opacity-50"
//           >
//             <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!emotionData) {
//     return (
//       <div className={`bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-3xl p-8 text-center ${className}`}>
//         <Activity className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
//         <h3 className="text-xl font-bold text-indigo-800 mb-2">Ready for Your First Analysis</h3>
//         <p className="text-indigo-600">Share your feelings through voice, text, or video to get personalized insights.</p>
//       </div>
//     );
//   }

//   return (
//     <div className={`space-y-8 ${className}`}>
//       {/* Header with Refresh Button */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-800">Your Emotional Journey</h2>
//           <p className="text-gray-600 mt-1">AI-powered insights and personalized guidance</p>
//         </div>
//         <button
//           onClick={handleRefresh}
//           disabled={refreshing}
//           className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
//         >
//           <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
//           {refreshing ? 'Refreshing...' : 'Refresh'}
//         </button>
//       </div>

//       {/* Professional Suggestion Component with Dynamic Data */}
//       <ProfessionalSuggestion 
//         suggestion={emotionData.suggestion}
//         emotionData={emotionData}
//       />

//       {/* Analysis Metadata */}
//       <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-2xl p-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-2">
//               <Clock className="w-5 h-5 text-gray-500" />
//               <span className="text-sm font-medium text-gray-600">
//                 Last Updated: {emotionData.time_of_analysis}
//               </span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Calendar className="w-5 h-5 text-gray-500" />
//               <span className="text-sm font-medium text-gray-600">
//                 {emotionData.date}
//               </span>
//             </div>
//           </div>
//           <div className="text-sm text-gray-500">
//             Analysis ID: #{emotionData.id}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmotionAnalysisDisplay;
// src/components/ui/EmotionAnalysisDisplay.js - CLEAN VERSION WITHOUT HEADERS
import React, { useState, useEffect } from 'react';
import { emotionAnalysisService } from '../../services/emotionAnalysisService';
import LoadingSpinner from './LoadingSpinner';
import { 
  BarChart3,
  Clock,
  Calendar,
  TrendingUp,
  RefreshCw, 
  AlertCircle, 
  Activity
} from 'lucide-react';

const EmotionAnalysisDisplay = ({ showLatestOnly = true, className = "" }) => {
  const [emotionData, setEmotionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchEmotionAnalysis();
  }, []);

  const fetchEmotionAnalysis = async () => {
    try {
      setLoading(true);
      setError('');
      
      const analysisData = await emotionAnalysisService.getLatestEmotionAnalysis();
      
      if (analysisData) {
        setEmotionData(analysisData);
      } else {
        setError('No emotion analysis found. Please share your feelings first.');
      }
    } catch (err) {
      console.error('Error fetching emotion analysis:', err);
      setError('Failed to load emotion analysis. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchEmotionAnalysis();
    setRefreshing(false);
  };

  // Helper function to format date (DD-MM-YYYY to readable format)
  const formatDate = (dateString) => {
    if (!dateString) return 'Today';
    
    if (dateString.includes('-') && dateString.length === 10) {
      const parts = dateString.split('-');
      if (parts.length === 3) {
        const day = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const year = parseInt(parts[2]);
        
        if (day <= 31 && month <= 12 && year > 1900) {
          const date = new Date(year, month - 1, day);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          });
        }
      }
    }
    
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      }
    } catch (error) {
      console.error('Date parsing error:', error);
    }
    
    return dateString;
  };

  // Helper function to get emotion color
  const getEmotionColor = (emotion) => {
    const emotionColors = {
      'Happy': 'from-yellow-500 to-orange-500',
      'Sad': 'from-blue-500 to-indigo-600',
      'Sadness': 'from-blue-500 to-indigo-600',
      'Angry': 'from-red-500 to-red-600',
      'Anxious': 'from-purple-500 to-purple-600',
      'Stressed': 'from-red-400 to-pink-500',
      'Calm': 'from-green-400 to-blue-500',
      'Excited': 'from-pink-500 to-yellow-500',
      'Confused': 'from-gray-500 to-gray-600',
      'Mixed': 'from-indigo-500 to-purple-600'
    };
    return emotionColors[emotion] || 'from-gray-500 to-gray-600';
  };

  // Helper function to get stress level color
  const getStressLevelColor = (stressLevel) => {
    const stressColors = {
      'Low': 'from-green-500 to-emerald-600',
      'Medium': 'from-yellow-500 to-orange-500',
      'High': 'from-red-500 to-red-600'
    };
    return stressColors[stressLevel] || 'from-gray-500 to-gray-600';
  };

  // Helper function to get emotion icon
  const getEmotionIcon = (emotion) => {
    const emotionIcons = {
      'Happy': '😊',
      'Sad': '😢',
      'Sadness': '😢',
      'Angry': '😠',
      'Anxious': '😰',
      'Stressed': '😫',
      'Calm': '😌',
      'Excited': '🤗',
      'Confused': '😕',
      'Mixed': '🤔'
    };
    return emotionIcons[emotion] || '🤔';
  };

  if (loading) {
    return (
      <div className={`bg-white rounded-3xl shadow-2xl border border-white/50 p-8 ${className}`}>
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <LoadingSpinner size="lg" />
            <p className="text-gray-600 mt-4">Loading your emotion analysis...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-3xl p-8 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AlertCircle className="w-8 h-8 text-orange-600 mr-4" />
            <div>
              <h3 className="text-xl font-bold text-orange-800">No Analysis Available</h3>
              <p className="text-orange-700 mt-2">{error}</p>
            </div>
          </div>
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!emotionData) {
    return (
      <div className={`bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-3xl p-8 text-center ${className}`}>
        <Activity className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-indigo-800 mb-2">Ready for Your First Analysis</h3>
        <p className="text-indigo-600">Share your feelings through voice, text, or video to get personalized insights.</p>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      {/* REMOVED: Clean Header Section */}
      
      {/* DIRECT EMOTION ANALYSIS CARDS - NO HEADERS */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        {/* REMOVED: Header with icon and title */}
        
        {/* Professional Grid Layout - Only the 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Detected Emotion */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-12 h-12 bg-gradient-to-br ${getEmotionColor(emotionData.emotion)} rounded-xl flex items-center justify-center shadow-lg`}>
                <span className="text-2xl">{getEmotionIcon(emotionData.emotion)}</span>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">DETECTED EMOTION</p>
                <p className="text-lg font-bold text-gray-800">{emotionData.emotion}</p>
              </div>
            </div>
            {emotionData.emotion_severity && (
              <div className="mt-3 px-3 py-1 bg-gray-100 rounded-full">
                <p className="text-xs font-semibold text-gray-600">Severity: {emotionData.emotion_severity}</p>
              </div>
            )}
          </div>
          
          {/* Stress Level */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-12 h-12 bg-gradient-to-br ${getStressLevelColor(emotionData.stress_level)} rounded-xl flex items-center justify-center shadow-lg`}>
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">STRESS LEVEL</p>
                <p className="text-lg font-bold text-gray-800">{emotionData.stress_level}</p>
              </div>
            </div>
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${getStressLevelColor(emotionData.stress_level)}`}
                  style={{ 
                    width: emotionData.stress_level === 'Low' ? '33%' : 
                           emotionData.stress_level === 'Medium' ? '66%' : '100%' 
                  }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Analysis Time */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">ANALYSIS TIME</p>
                <p className="text-lg font-bold text-gray-800">{emotionData.time_of_analysis}</p>
              </div>
            </div>
          </div>
          
          {/* Date */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">DATE</p>
                <p className="text-lg font-bold text-gray-800">{formatDate(emotionData.date)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REMOVED: Clean Metadata Section */}
    </div>
  );
};

export default EmotionAnalysisDisplay;
