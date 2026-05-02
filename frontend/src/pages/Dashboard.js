// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import { emotionService } from '../services/emotionService';
// // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // // // // // // // import { 
// // // // // // // //   Heart, 
// // // // // // // //   Mic, 
// // // // // // // //   Calendar, 
// // // // // // // //   TrendingUp, 
// // // // // // // //   MessageCircle, 
// // // // // // // //   BookOpen,
// // // // // // // //   Music,
// // // // // // // //   Video,
// // // // // // // //   Quote
// // // // // // // // } from 'lucide-react';

// // // // // // // // const Dashboard = () => {
// // // // // // // //   const [dashboardData, setDashboardData] = useState(null);
// // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // //   const [error, setError] = useState('');
// // // // // // // //   const [moodRating, setMoodRating] = useState(3);
// // // // // // // //   const [checkingIn, setCheckingIn] = useState(false);

// // // // // // // //   useEffect(() => {
// // // // // // // //     fetchDashboardData();
// // // // // // // //   }, []);

// // // // // // // //   const fetchDashboardData = async () => {
// // // // // // // //     try {
// // // // // // // //       const data = await emotionService.getRecoveryDashboard();
// // // // // // // //       setDashboardData(data);
// // // // // // // //     } catch (err) {
// // // // // // // //       setError('Failed to load dashboard data');
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleDailyCheckin = async () => {
// // // // // // // //     setCheckingIn(true);
// // // // // // // //     try {
// // // // // // // //       await emotionService.markDailyCheckin(moodRating);
// // // // // // // //       await fetchDashboardData(); // Refresh data
// // // // // // // //     } catch (err) {
// // // // // // // //       setError('Failed to submit daily check-in');
// // // // // // // //     } finally {
// // // // // // // //       setCheckingIn(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   if (loading) {
// // // // // // // //     return (
// // // // // // // //       <div className="flex justify-center items-center min-h-screen">
// // // // // // // //         <LoadingSpinner size="lg" />
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   if (error) {
// // // // // // // //     return (
// // // // // // // //       <div className="min-h-screen bg-gray-50 p-4">
// // // // // // // //         <div className="max-w-4xl mx-auto">
// // // // // // // //           <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
// // // // // // // //             {error}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-gray-50 py-8">
// // // // // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // // // // //         {/* Header */}
// // // // // // // //         <div className="mb-8">
// // // // // // // //           <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
// // // // // // // //           <p className="mt-2 text-gray-600">
// // // // // // // //             Track your emotional wellness journey
// // // // // // // //           </p>
// // // // // // // //         </div>

// // // // // // // //         {/* Quick Actions */}
// // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // // // // // // //           <Link
// // // // // // // //             to="/emotion-input"
// // // // // // // //             className="card hover:shadow-lg transition-shadow cursor-pointer group"
// // // // // // // //           >
// // // // // // // //             <div className="flex items-center">
// // // // // // // //               <Heart className="h-8 w-8 text-primary group-hover:text-blue-600" />
// // // // // // // //               <div className="ml-4">
// // // // // // // //                 <h3 className="text-lg font-semibold">Share Your Feelings</h3>
// // // // // // // //                 <p className="text-gray-600">Express how you're feeling today</p>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </Link>

// // // // // // // //           <Link
// // // // // // // //             to="/therapists"
// // // // // // // //             className="card hover:shadow-lg transition-shadow cursor-pointer group"
// // // // // // // //           >
// // // // // // // //             <div className="flex items-center">
// // // // // // // //               <MessageCircle className="h-8 w-8 text-secondary group-hover:text-green-600" />
// // // // // // // //               <div className="ml-4">
// // // // // // // //                 <h3 className="text-lg font-semibold">Find Therapists</h3>
// // // // // // // //                 <p className="text-gray-600">Connect with professionals</p>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </Link>

// // // // // // // //           <Link
// // // // // // // //             to="/progress"
// // // // // // // //             className="card hover:shadow-lg transition-shadow cursor-pointer group"
// // // // // // // //           >
// // // // // // // //             <div className="flex items-center">
// // // // // // // //               <TrendingUp className="h-8 w-8 text-accent group-hover:text-yellow-600" />
// // // // // // // //               <div className="ml-4">
// // // // // // // //                 <h3 className="text-lg font-semibold">View Progress</h3>
// // // // // // // //                 <p className="text-gray-600">Track your journey</p>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </Link>
// // // // // // // //         </div>

// // // // // // // //         {/* Recovery Tracker */}
// // // // // // // //         {dashboardData && (
// // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
// // // // // // // //             {/* Current Status */}
// // // // // // // //             <div className="card">
// // // // // // // //               <h2 className="text-xl font-semibold mb-4">Current Status</h2>
// // // // // // // //               <div className="space-y-4">
// // // // // // // //                 <div className="flex items-center justify-between">
// // // // // // // //                   <span className="text-gray-600">Detected Emotion:</span>
// // // // // // // //                   <span className="font-medium text-primary">
// // // // // // // //                     {dashboardData.detected_emotion}
// // // // // // // //                   </span>
// // // // // // // //                 </div>
// // // // // // // //                 <div className="flex items-center justify-between">
// // // // // // // //                   <span className="text-gray-600">Stress Level:</span>
// // // // // // // //                   <span className="font-medium text-primary">
// // // // // // // //                     {dashboardData.stress_level}
// // // // // // // //                   </span>
// // // // // // // //                 </div>
// // // // // // // //                 <div className="flex items-center justify-between">
// // // // // // // //                   <span className="text-gray-600">Current Day:</span>
// // // // // // // //                   <span className="font-medium text-primary">
// // // // // // // //                     Day {dashboardData.current_day}
// // // // // // // //                   </span>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* Daily Check-in */}
// // // // // // // //             <div className="card">
// // // // // // // //               <h2 className="text-xl font-semibold mb-4">Daily Check-in</h2>
// // // // // // // //               {dashboardData.completed_today ? (
// // // // // // // //                 <div className="text-center py-4">
// // // // // // // //                   <Calendar className="h-12 w-12 text-secondary mx-auto mb-2" />
// // // // // // // //                   <p className="text-secondary font-medium">
// // // // // // // //                     ✅ Today's check-in completed!
// // // // // // // //                   </p>
// // // // // // // //                 </div>
// // // // // // // //               ) : (
// // // // // // // //                 <div className="space-y-4">
// // // // // // // //                   <div>
// // // // // // // //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // // // //                       How are you feeling today? (1-5)
// // // // // // // //                     </label>
// // // // // // // //                     <div className="flex space-x-2">
// // // // // // // //                       {[1, 2, 3, 4, 5].map((rating) => (
// // // // // // // //                         <button
// // // // // // // //                           key={rating}
// // // // // // // //                           onClick={() => setMoodRating(rating)}
// // // // // // // //                           className={`w-10 h-10 rounded-full border-2 ${
// // // // // // // //                             moodRating === rating
// // // // // // // //                               ? 'border-primary bg-primary text-white'
// // // // // // // //                               : 'border-gray-300 text-gray-600 hover:border-primary'
// // // // // // // //                           }`}
// // // // // // // //                         >
// // // // // // // //                           {rating}
// // // // // // // //                         </button>
// // // // // // // //                       ))}
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                   <button
// // // // // // // //                     onClick={handleDailyCheckin}
// // // // // // // //                     disabled={checkingIn}
// // // // // // // //                     className="w-full btn-primary"
// // // // // // // //                   >
// // // // // // // //                     {checkingIn ? <LoadingSpinner size="sm" /> : 'Submit Check-in'}
// // // // // // // //                   </button>
// // // // // // // //                 </div>
// // // // // // // //               )}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         {/* Daily Content */}
// // // // // // // //         {dashboardData && (
// // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // //             {/* Tip of the Day */}
// // // // // // // //             <div className="card">
// // // // // // // //               <div className="flex items-center mb-3">
// // // // // // // //                 <BookOpen className="h-6 w-6 text-primary mr-2" />
// // // // // // // //                 <h3 className="text-lg font-semibold">Tip of the Day</h3>
// // // // // // // //               </div>
// // // // // // // //               <p className="text-gray-700">{dashboardData.tip_of_the_day}</p>
// // // // // // // //             </div>

// // // // // // // //             {/* Quote */}
// // // // // // // //             <div className="card">
// // // // // // // //               <div className="flex items-center mb-3">
// // // // // // // //                 <Quote className="h-6 w-6 text-secondary mr-2" />
// // // // // // // //                 <h3 className="text-lg font-semibold">Inspirational Quote</h3>
// // // // // // // //               </div>
// // // // // // // //               <p className="text-gray-700 italic">"{dashboardData.quote}"</p>
// // // // // // // //             </div>

// // // // // // // //             {/* Journaling Prompt */}
// // // // // // // //             <div className="card">
// // // // // // // //               <div className="flex items-center mb-3">
// // // // // // // //                 <MessageCircle className="h-6 w-6 text-accent mr-2" />
// // // // // // // //                 <h3 className="text-lg font-semibold">Journaling Prompt</h3>
// // // // // // // //               </div>
// // // // // // // //               <p className="text-gray-700">{dashboardData.journaling_prompt}</p>
// // // // // // // //             </div>

// // // // // // // //             {/* Music */}
// // // // // // // //             {dashboardData.music_link && (
// // // // // // // //               <div className="card">
// // // // // // // //                 <div className="flex items-center mb-3">
// // // // // // // //                   <Music className="h-6 w-6 text-purple-600 mr-2" />
// // // // // // // //                   <h3 className="text-lg font-semibold">Relaxation Music</h3>
// // // // // // // //                 </div>
// // // // // // // //                 <a
// // // // // // // //                   href={dashboardData.music_link}
// // // // // // // //                   target="_blank"
// // // // // // // //                   rel="noopener noreferrer"
// // // // // // // //                   className="text-primary hover:text-blue-600 underline"
// // // // // // // //                 >
// // // // // // // //                   Listen to recommended music
// // // // // // // //                 </a>
// // // // // // // //               </div>
// // // // // // // //             )}

// // // // // // // //             {/* Meditation */}
// // // // // // // //             {dashboardData.meditation_video && (
// // // // // // // //               <div className="card">
// // // // // // // //                 <div className="flex items-center mb-3">
// // // // // // // //                   <Video className="h-6 w-6 text-indigo-600 mr-2" />
// // // // // // // //                   <h3 className="text-lg font-semibold">Meditation Video</h3>
// // // // // // // //                 </div>
// // // // // // // //                 <a
// // // // // // // //                   href={dashboardData.meditation_video}
// // // // // // // //                   target="_blank"
// // // // // // // //                   rel="noopener noreferrer"
// // // // // // // //                   className="text-primary hover:text-blue-600 underline"
// // // // // // // //                 >
// // // // // // // //                   Watch meditation video
// // // // // // // //                 </a>
// // // // // // // //               </div>
// // // // // // // //             )}
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };








// // // // // // // // export default Dashboard;
// // // // // // // import React, { useState } from 'react';
// // // // // // // import { Link } from 'react-router-dom';
// // // // // // // import { useAuth } from '../context/AuthContext';

// // // // // // // const Dashboard = () => {
// // // // // // //   const { user } = useAuth();
// // // // // // //   const [selectedMood, setSelectedMood] = useState(3);
  
// // // // // // //   const recoveryDay = 1;
// // // // // // //   const totalDays = 10;
// // // // // // //   const progressPercent = (recoveryDay / totalDays) * 100;
// // // // // // //   const remainingDays = totalDays - recoveryDay;

// // // // // // //   // Therapy session data
// // // // // // //   const [therapyData, setTherapyData] = useState({
// // // // // // //     todaySessions: 1,
// // // // // // //     streakDays: 1,
// // // // // // //     totalSessions: 5,
// // // // // // //     completedSessions: 3,
// // // // // // //     upcomingSessions: 2
// // // // // // //   });

// // // // // // //   const quickActionItems = [
// // // // // // //     {
// // // // // // //       title: "Share Your Feelings",
// // // // // // //       description: "Express how you're feeling today",
// // // // // // //       emoji: "❤️",
// // // // // // //       link: "/emotion-input",
// // // // // // //       color: "bg-blue-50 hover:bg-blue-100 border-blue-200"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Find Therapists",
// // // // // // //       description: "Connect with professionals", 
// // // // // // //       emoji: "💬",
// // // // // // //       link: "/therapists",
// // // // // // //       color: "bg-green-50 hover:bg-green-100 border-green-200"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "View Progress",
// // // // // // //       description: "Track your journey",
// // // // // // //       emoji: "📈",
// // // // // // //       link: "/progress",
// // // // // // //       color: "bg-orange-50 hover:bg-orange-100 border-orange-200"
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   // Emotion status cards
// // // // // // //   const emotionCards = [
// // // // // // //     {
// // // // // // //       title: "Current Mood",
// // // // // // //       emoji: "😟",
// // // // // // //       value: "Anxiety",
// // // // // // //       color: "text-gray-700"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Stress Level",
// // // // // // //       emoji: "❤️",
// // // // // // //       value: "60%",
// // // // // // //       label: "High",
// // // // // // //       color: "text-red-600"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Today's Sessions",
// // // // // // //       emoji: "💬",
// // // // // // //       value: therapyData.todaySessions,
// // // // // // //       color: "text-blue-600"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Streak Days",
// // // // // // //       emoji: "🔥",
// // // // // // //       value: `${therapyData.streakDays} days`,
// // // // // // //       color: "text-orange-600"
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-50 py-8">
// // // // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// // // // // // //         {/* Welcome Header */}
// // // // // // //         <div className="mb-8">
// // // // // // //           <h1 className="text-3xl font-bold text-gray-900 mb-2">
// // // // // // //             Welcome back, {user?.username || 'User'}! 
// // // // // // //             <span className="ml-2">👋</span>
// // // // // // //           </h1>
// // // // // // //           <p className="text-lg text-gray-600">
// // // // // // //             Here's how you're doing today and this week
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         {/* Quick Actions Grid */}
// // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // // // // // //           {quickActionItems.map(({ title, description, emoji, link, color }) => (
// // // // // // //             <Link
// // // // // // //               key={title}
// // // // // // //               to={link}
// // // // // // //               className={`p-6 rounded-xl shadow-sm border-2 transition-all duration-200 hover:shadow-md ${color}`}
// // // // // // //             >
// // // // // // //               <div className="flex items-center space-x-3 mb-3">
// // // // // // //                 <span className="text-2xl">{emoji}</span>
// // // // // // //                 <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
// // // // // // //               </div>
// // // // // // //               <p className="text-gray-600">{description}</p>
// // // // // // //             </Link>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         {/* Recovery Journey Section */}
// // // // // // //         <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
// // // // // // //           <div className="flex items-center justify-between mb-4">
// // // // // // //             <div className="flex items-center space-x-3">
// // // // // // //               <span className="text-2xl">🌱</span>
// // // // // // //               <h2 className="text-xl font-semibold text-gray-900">Recovery Journey</h2>
// // // // // // //             </div>
// // // // // // //             <span className="text-2xl">🌱</span>
// // // // // // //           </div>
          
// // // // // // //           <div className="flex items-center justify-between mb-3">
// // // // // // //             <span className="text-gray-600 font-medium">Day {recoveryDay} of {totalDays}</span>
// // // // // // //             <span className="text-gray-900 font-bold">{Math.round(progressPercent)}%</span>
// // // // // // //           </div>
          
// // // // // // //           {/* Progress Bar */}
// // // // // // //           <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
// // // // // // //             <div 
// // // // // // //               className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500 ease-in-out"
// // // // // // //               style={{ width: `${progressPercent}%` }}
// // // // // // //             ></div>
// // // // // // //           </div>
          
// // // // // // //           <p className="text-gray-600 font-medium mb-3">
// // // // // // //             Keep going! You're doing great on your recovery journey.
// // // // // // //           </p>
          
// // // // // // //           <div className="flex items-center space-x-2 text-blue-600">
// // // // // // //             <span className="text-sm">📊</span>
// // // // // // //             <span className="text-sm font-medium">{remainingDays} days remaining</span>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Therapy Sessions Overview */}
// // // // // // //         <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
// // // // // // //           <div className="flex items-center justify-between mb-6">
// // // // // // //             <div className="flex items-center space-x-3">
// // // // // // //               <span className="text-2xl">🧠</span>
// // // // // // //               <h2 className="text-xl font-semibold text-gray-900">Therapy Sessions</h2>
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // // //             {/* Total Sessions */}
// // // // // // //             <div className="text-center">
// // // // // // //               <div className="text-3xl font-bold text-blue-600 mb-2">{therapyData.totalSessions}</div>
// // // // // // //               <p className="text-gray-600 text-sm font-medium">Total Sessions</p>
// // // // // // //             </div>
            
// // // // // // //             {/* Completed Sessions */}
// // // // // // //             <div className="text-center">
// // // // // // //               <div className="text-3xl font-bold text-green-600 mb-2">{therapyData.completedSessions}</div>
// // // // // // //               <p className="text-gray-600 text-sm font-medium">Completed</p>
// // // // // // //             </div>
            
// // // // // // //             {/* Upcoming Sessions */}
// // // // // // //             <div className="text-center">
// // // // // // //               <div className="text-3xl font-bold text-orange-600 mb-2">{therapyData.upcomingSessions}</div>
// // // // // // //               <p className="text-gray-600 text-sm font-medium">Upcoming</p>
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           {/* Progress Bar for Sessions */}
// // // // // // //           <div className="mt-6">
// // // // // // //             <div className="flex justify-between text-sm text-gray-600 mb-2">
// // // // // // //               <span>Session Progress</span>
// // // // // // //               <span>{Math.round((therapyData.completedSessions / therapyData.totalSessions) * 100)}%</span>
// // // // // // //             </div>
// // // // // // //             <div className="w-full bg-gray-200 rounded-full h-2">
// // // // // // //               <div 
// // // // // // //                 className="bg-gradient-to-r from-blue-400 to-green-500 h-2 rounded-full transition-all duration-500 ease-in-out"
// // // // // // //                 style={{ width: `${(therapyData.completedSessions / therapyData.totalSessions) * 100}%` }}
// // // // // // //               ></div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Enhanced Emotion Status Cards */}
// // // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// // // // // // //           {emotionCards.map(({ title, emoji, value, label, color }) => (
// // // // // // //             <div key={title} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow duration-200">
// // // // // // //               <div className="flex items-start justify-between mb-3">
// // // // // // //                 <div className="flex items-center space-x-2">
// // // // // // //                   <span className="text-2xl">{emoji}</span>
// // // // // // //                 </div>
// // // // // // //               </div>
              
// // // // // // //               <div className="space-y-1">
// // // // // // //                 <p className="text-gray-500 text-sm font-medium">{title}</p>
// // // // // // //                 <div className="flex items-baseline space-x-2">
// // // // // // //                   <span className={`text-2xl font-bold ${color}`}>{value}</span>
// // // // // // //                   {label && (
// // // // // // //                     <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
// // // // // // //                       label === 'High' ? 'bg-red-100 text-red-700' : 
// // // // // // //                       label === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
// // // // // // //                       'bg-green-100 text-green-700'
// // // // // // //                     }`}>
// // // // // // //                       {label}
// // // // // // //                     </span>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Dashboard;
// // // // // // // src/pages/Dashboard.js - CORRECTED DYNAMIC VERSION WITH EMOTION ANALYSIS
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // import { emotionService } from '../services/emotionService';
// // // // // // import { therapistService } from '../services/therapistService';
// // // // // // import { dynamicContentService } from '../services/dynamicContentService';
// // // // // // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // // // // // import WellnessActivityModal from '../components/modals/WellnessActivityModal';
// // // // // // import EmotionAnalysisDisplay from '../components/ui/EmotionAnalysisDisplay';


// // // // // // import { 
// // // // // //   Brain, 
// // // // // //   Heart, 
// // // // // //   Calendar, 
// // // // // //   TrendingUp, 
// // // // // //   Activity, 
// // // // // //   Users, 
// // // // // //   BookOpen, 
// // // // // //   MessageCircle,
// // // // // //   Star,
// // // // // //   Award,
// // // // // //   Clock,
// // // // // //   Target,
// // // // // //   Zap,
// // // // // //   Shield,
// // // // // //   ChevronRight,
// // // // // //   Plus,
// // // // // //   CheckCircle,
// // // // // //   AlertCircle,
// // // // // //   Music,
// // // // // //   Headphones,
// // // // // //   Play,
// // // // // //   User,
// // // // // //   BarChart3,
// // // // // //   Sparkles,
// // // // // //   ArrowUpRight,
// // // // // //   Mic,
// // // // // //   Video,
// // // // // //   PenTool,
// // // // // //   Timer,
// // // // // //   Sunrise,
// // // // // //   Moon,
// // // // // //   Lightbulb,
// // // // // //   Quote,
// // // // // //   ExternalLink,
// // // // // //   RefreshCw
// // // // // // } from 'lucide-react';

// // // // // // const Dashboard = () => {
// // // // // //   const navigate = useNavigate();
// // // // // //   const [dashboardData, setDashboardData] = useState({
// // // // // //     recoveryTracker: null,
// // // // // //     todayProgress: null,
// // // // // //     userProfile: null,
// // // // // //     recentSessions: [],
// // // // // //     upcomingAppointments: []
// // // // // //   });
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [error, setError] = useState('');
// // // // // //   const [greeting, setGreeting] = useState('');
// // // // // //   const [currentTip, setCurrentTip] = useState(0);
// // // // // //   const [refreshing, setRefreshing] = useState(false);
  
// // // // // //   // Dynamic content states
// // // // // //   const [wellnessTips, setWellnessTips] = useState([]);
// // // // // //   const [aiRecommendations, setAIRecommendations] = useState([]);
// // // // // //   const [modalActivity, setModalActivity] = useState(null);
// // // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // // //   const [tipInterval, setTipInterval] = useState(null);

// // // // // //   useEffect(() => {
// // // // // //     setDynamicGreeting();
// // // // // //     fetchDashboardData();
// // // // // //     loadDynamicContent();
    
// // // // // //     return () => {
// // // // // //       if (tipInterval) clearInterval(tipInterval);
// // // // // //     };
// // // // // //   }, []);

// // // // // //   // Start tip rotation when tips are loaded
// // // // // //   useEffect(() => {
// // // // // //     if (wellnessTips.length > 0) {
// // // // // //       // Clear existing interval
// // // // // //       if (tipInterval) clearInterval(tipInterval);
      
// // // // // //       // Start new interval
// // // // // //       const interval = setInterval(() => {
// // // // // //         setCurrentTip(prev => (prev + 1) % wellnessTips.length);
// // // // // //       }, 8000); // 8 seconds per tip
      
// // // // // //       setTipInterval(interval);
// // // // // //     }
// // // // // //   }, [wellnessTips]);

// // // // // //   const setDynamicGreeting = () => {
// // // // // //     const hour = new Date().getHours();
// // // // // //     if (hour < 12) setGreeting('Good Morning');
// // // // // //     else if (hour < 17) setGreeting('Good Afternoon');
// // // // // //     else setGreeting('Good Evening');
// // // // // //   };

// // // // // //   const fetchDashboardData = async () => {
// // // // // //     try {
// // // // // //       setLoading(true);
// // // // // //       setError('');
      
// // // // // //       const [recoveryData, profileData] = await Promise.all([
// // // // // //         emotionService.getActiveRecoveryTracker().catch(() => ({ has_tracker: false })),
// // // // // //         therapistService.getUserProfile().catch(() => null)
// // // // // //       ]);

// // // // // //       let todayProgressData = null;
// // // // // //       try {
// // // // // //         todayProgressData = await emotionService.getTodayProgressLog();
// // // // // //       } catch (err) {
// // // // // //         console.log('No progress log for today yet');
// // // // // //       }

// // // // // //       setDashboardData({
// // // // // //         recoveryTracker: recoveryData,
// // // // // //         todayProgress: todayProgressData,
// // // // // //         userProfile: profileData,
// // // // // //         recentSessions: [],
// // // // // //         upcomingAppointments: []
// // // // // //       });
// // // // // //     } catch (err) {
// // // // // //       console.error('Dashboard fetch error:', err);
// // // // // //       setError('Some dashboard data could not be loaded');
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   // LOAD DYNAMIC CONTENT FROM YOUR BACKEND
// // // // // //   const loadDynamicContent = async () => {
// // // // // //     try {
// // // // // //       console.log('🔄 Loading dynamic content from backend...');
      
// // // // // //       const [tipsData, recommendationsData] = await Promise.all([
// // // // // //         dynamicContentService.getWellnessTips(),
// // // // // //         dynamicContentService.getAIRecommendations()
// // // // // //       ]);
      
// // // // // //       console.log('✅ Tips loaded:', tipsData);
// // // // // //       console.log('✅ Recommendations loaded:', recommendationsData);
      
// // // // // //       setWellnessTips(tipsData);
// // // // // //       setAIRecommendations(recommendationsData);
// // // // // //     } catch (err) {
// // // // // //       console.error('❌ Error loading dynamic content:', err);
// // // // // //       // Set fallback content if backend fails
// // // // // //       setWellnessTips([
// // // // // //         {
// // // // // //           id: 1,
// // // // // //           category: "Mental Clarity",
// // // // // //           tip: "Take 5 deep breaths whenever you feel overwhelmed.",
// // // // // //           icon: 'Brain',
// // // // // //           color: "from-blue-500 to-indigo-600",
// // // // // //           actionText: "Try Deep Breathing",
// // // // // //           action: 'breathing_exercise'
// // // // // //         }
// // // // // //       ]);
// // // // // //       setAIRecommendations([
// // // // // //         {
// // // // // //           id: 1,
// // // // // //           title: "Try Meditation",
// // // // // //           description: "5-minute guided session",
// // // // // //           icon: "Headphones",
// // // // // //           color: "text-indigo-600",
// // // // // //           bgColor: "bg-indigo-50",
// // // // // //           action: "start_meditation"
// // // // // //         }
// // // // // //       ]);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleQuickAction = async (action) => {
// // // // // //     setRefreshing(true);
    
// // // // // //     switch(action) {
// // // // // //       case 'emotion-input':
// // // // // //         navigate('/emotion-input');
// // // // // //         break;
// // // // // //       case 'book-session':
// // // // // //         navigate('/book-session');
// // // // // //         break;
// // // // // //       case 'view-progress':
// // // // // //         navigate('/progress');
// // // // // //         break;
// // // // // //       case 'find-therapist':
// // // // // //         navigate('/therapists');
// // // // // //         break;
// // // // // //       default:
// // // // // //         break;
// // // // // //     }
    
// // // // // //     setTimeout(() => setRefreshing(false), 1000);
// // // // // //   };

// // // // // //   // Handle AI recommendation clicks
// // // // // //   const handleRecommendationClick = async (recommendation) => {
// // // // // //     try {
// // // // // //       console.log('🎯 Executing recommendation:', recommendation);
// // // // // //       const result = await dynamicContentService.executeRecommendation(recommendation);
      
// // // // // //       if (result && (result.type === 'breathing_guide' || result.type === 'grounding_guide' || result.type === 'journal_prompt')) {
// // // // // //         setModalActivity(result);
// // // // // //         setIsModalOpen(true);
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error('Error executing recommendation:', error);
// // // // // //       alert('This feature will be available soon!');
// // // // // //     }
// // // // // //   };

// // // // // //   // Handle wellness tip action
// // // // // //   const handleWellnessTipAction = async (tip) => {
// // // // // //     console.log('🌟 Executing wellness tip action:', tip);
// // // // // //     const result = await dynamicContentService.executeRecommendation(tip);
    
// // // // // //     if (result && (result.type === 'breathing_guide' || result.type === 'grounding_guide' || result.type === 'wellness_guide')) {
// // // // // //       setModalActivity(result);
// // // // // //       setIsModalOpen(true);
// // // // // //     } else {
// // // // // //       alert(`Starting ${tip.category} activity...`);
// // // // // //     }
// // // // // //   };

// // // // // //   // Refresh dynamic content
// // // // // //   const refreshDynamicContent = async () => {
// // // // // //     setRefreshing(true);
// // // // // //     await loadDynamicContent();
// // // // // //     setRefreshing(false);
// // // // // //   };

// // // // // //   const calculateMoodTrend = () => {
// // // // // //     const { userProfile } = dashboardData;
// // // // // //     if (!userProfile?.mood_history_count) return null;
    
// // // // // //     const improvement = Math.random() > 0.5;
// // // // // //     return {
// // // // // //       direction: improvement ? 'up' : 'stable',
// // // // // //       percentage: Math.floor(Math.random() * 20) + 5
// // // // // //     };
// // // // // //   };

// // // // // //   // Get icon component by name
// // // // // //   const getIconComponent = (iconName) => {
// // // // // //     const icons = {
// // // // // //       Brain, Heart, Sunrise, Moon, Activity, Headphones, PenTool, Music
// // // // // //     };
// // // // // //     return icons[iconName] || Brain;
// // // // // //   };

// // // // // //   const currentTipData = wellnessTips[currentTip];
// // // // // //   const moodTrend = calculateMoodTrend();

// // // // // //   if (loading) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 flex items-center justify-center">
// // // // // //         <div className="text-center space-y-8">
// // // // // //           <div className="relative">
// // // // // //             <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl mx-auto flex items-center justify-center shadow-2xl animate-pulse">
// // // // // //               <Brain className="w-16 h-16 text-white" />
// // // // // //             </div>
// // // // // //             <div className="absolute -top-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
// // // // // //               <Sparkles className="w-5 h-5 text-white" />
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <LoadingSpinner size="lg" />
// // // // // //           <div className="space-y-3">
// // // // // //             <h3 className="text-2xl font-bold text-gray-800">Loading Your Wellness Dashboard</h3>
// // // // // //             <p className="text-gray-600 max-w-md mx-auto">Preparing your personalized mental health insights...</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
// // // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
// // // // // //         {/* PROFESSIONAL HEADER WITH DYNAMIC GREETING */}
// // // // // //         <div className="mb-12">
// // // // // //           <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
// // // // // //             <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 p-8 text-white relative overflow-hidden">
// // // // // //               <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
// // // // // //               <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
              
// // // // // //               <div className="relative z-10 flex items-center justify-between">
// // // // // //                 <div>
// // // // // //                   <div className="flex items-center space-x-4 mb-4">
// // // // // //                     <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
// // // // // //                       <Brain className="w-8 h-8 text-white" />
// // // // // //                     </div>
// // // // // //                     <div>
// // // // // //                       <h1 className="text-4xl font-bold mb-2">
// // // // // //                         {greeting}, {dashboardData.userProfile?.username || 'User'}!
// // // // // //                       </h1>
// // // // // //                       <p className="text-blue-100 text-lg">
// // // // // //                         Welcome back to your wellness journey
// // // // // //                       </p>
// // // // // //                     </div>
// // // // // //                   </div>
                  
// // // // // //                   <div className="flex items-center space-x-6">
// // // // // //                     <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl px-4 py-2">
// // // // // //                       <span className="text-emerald-100 text-sm font-bold">
// // // // // //                         Active Since {dashboardData.userProfile?.joined || 'Recently'}
// // // // // //                       </span>
// // // // // //                     </div>
// // // // // //                     {dashboardData.recoveryTracker?.has_tracker && (
// // // // // //                       <div className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl px-4 py-2">
// // // // // //                         <span className="text-yellow-100 text-sm font-bold">
// // // // // //                           Recovery Day {dashboardData.recoveryTracker.tracker?.days_elapsed + 1 || 1}
// // // // // //                         </span>
// // // // // //                       </div>
// // // // // //                     )}
// // // // // //                   </div>
// // // // // //                 </div>
                
// // // // // //                 <div className="text-right">
// // // // // //                   <div className="text-3xl font-bold mb-1">
// // // // // //                     {new Date().toLocaleDateString('en-US', { 
// // // // // //                       weekday: 'long',
// // // // // //                       month: 'short', 
// // // // // //                       day: 'numeric'
// // // // // //                     })}
// // // // // //                   </div>
// // // // // //                   <div className="text-blue-100">
// // // // // //                     {new Date().toLocaleTimeString('en-US', { 
// // // // // //                       hour: '2-digit', 
// // // // // //                       minute: '2-digit'
// // // // // //                     })}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
            
// // // // // //             {/* Quick Stats Bar */}
// // // // // //             <div className="bg-gradient-to-r from-gray-50 to-indigo-50 p-6">
// // // // // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// // // // // //                 <div className="text-center">
// // // // // //                   <div className="text-2xl font-bold text-gray-900">
// // // // // //                     {dashboardData.userProfile?.mood_history_count || 0}
// // // // // //                   </div>
// // // // // //                   <div className="text-sm text-gray-600 font-medium">Mood Entries</div>
// // // // // //                 </div>
// // // // // //                 <div className="text-center">
// // // // // //                   <div className="text-2xl font-bold text-gray-900">
// // // // // //                     {dashboardData.userProfile?.therapy_sessions_count || 0}
// // // // // //                   </div>
// // // // // //                   <div className="text-sm text-gray-600 font-medium">Therapy Sessions</div>
// // // // // //                 </div>
// // // // // //                 <div className="text-center">
// // // // // //                   <div className="text-2xl font-bold text-gray-900">
// // // // // //                     {dashboardData.recoveryTracker?.has_tracker ? 
// // // // // //                       Math.round(dashboardData.recoveryTracker.tracker?.completion_percentage || 0) : 0}%
// // // // // //                   </div>
// // // // // //                   <div className="text-sm text-gray-600 font-medium">Recovery Progress</div>
// // // // // //                 </div>
// // // // // //                 <div className="text-center">
// // // // // //                   <div className="text-2xl font-bold text-emerald-600">98%</div>
// // // // // //                   <div className="text-sm text-gray-600 font-medium">Wellness Score</div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* ERROR DISPLAY */}
// // // // // //         {error && (
// // // // // //           <div className="mb-8 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6">
// // // // // //             <div className="flex items-center">
// // // // // //               <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
// // // // // //               <p className="font-semibold text-red-800">{error}</p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}

// // // // // //         {/* ✅ DYNAMIC EMOTION ANALYSIS SECTION - ADDED HERE */}
// // // // // //         <div className="mb-8">
// // // // // //           <EmotionAnalysisDisplay />
// // // // // //         </div>

// // // // // //         <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
// // // // // //           {/* LEFT COLUMN - Main Actions & Today's Focus */}
// // // // // //           <div className="xl:col-span-2 space-y-8">
            
// // // // // //             {/* QUICK ACTIONS GRID */}
// // // // // //             <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
// // // // // //               <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
// // // // // //                 <Zap className="w-6 h-6 mr-3 text-yellow-600" />
// // // // // //                 Quick Actions
// // // // // //               </h2>
              
// // // // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // //                 {[
// // // // // //                   {
// // // // // //                     icon: Mic,
// // // // // //                     title: "Share Your Feelings",
// // // // // //                     description: "Voice, text, or video emotion analysis",
// // // // // //                     color: "from-blue-500 to-indigo-600",
// // // // // //                     action: "emotion-input",
// // // // // //                     badge: "AI Powered"
// // // // // //                   },
// // // // // //                   {
// // // // // //                     icon: Calendar,
// // // // // //                     title: "Book Therapy Session",
// // // // // //                     description: "Connect with licensed professionals",
// // // // // //                     color: "from-emerald-500 to-green-600", 
// // // // // //                     action: "book-session",
// // // // // //                     badge: "Professional"
// // // // // //                   },
// // // // // //                   {
// // // // // //                     icon: BarChart3,
// // // // // //                     title: "View Progress",
// // // // // //                     description: "Track your wellness journey",
// // // // // //                     color: "from-purple-500 to-violet-600",
// // // // // //                     action: "view-progress", 
// // // // // //                     badge: "Insights"
// // // // // //                   },
// // // // // //                   {
// // // // // //                     icon: Users,
// // // // // //                     title: "Find Therapists",
// // // // // //                     description: "Browse verified mental health experts",
// // // // // //                     color: "from-pink-500 to-rose-600",
// // // // // //                     action: "find-therapist",
// // // // // //                     badge: "Verified"
// // // // // //                   }
// // // // // //                 ].map((item, index) => (
// // // // // //                   <button
// // // // // //                     key={index}
// // // // // //                     onClick={() => handleQuickAction(item.action)}
// // // // // //                     disabled={refreshing}
// // // // // //                     className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 disabled:opacity-70 disabled:transform-none"
// // // // // //                   >
// // // // // //                     <div className="flex items-start space-x-4">
// // // // // //                       <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
// // // // // //                         <item.icon className="w-7 h-7 text-white" />
// // // // // //                       </div>
// // // // // //                       <div className="flex-1 text-left">
// // // // // //                         <div className="flex items-center justify-between mb-2">
// // // // // //                           <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
// // // // // //                           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
// // // // // //                             {item.badge}
// // // // // //                           </span>
// // // // // //                         </div>
// // // // // //                         <p className="text-gray-600 text-sm leading-relaxed mb-3">
// // // // // //                           {item.description}
// // // // // //                         </p>
// // // // // //                         <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
// // // // // //                           <span className="text-sm font-semibold">Get Started</span>
// // // // // //                           <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </button>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* DYNAMIC ROTATING WELLNESS TIP */}
// // // // // //             {currentTipData && (
// // // // // //               <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
// // // // // //                 <div className={`bg-gradient-to-r ${currentTipData.color} p-6 text-white relative overflow-hidden`}>
// // // // // //                   <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
// // // // // //                   <div className="relative z-10 flex items-center justify-between">
// // // // // //                     <div className="flex items-center space-x-4">
// // // // // //                       <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
// // // // // //                         {React.createElement(getIconComponent(currentTipData.icon), { className: "w-6 h-6 text-white" })}
// // // // // //                       </div>
// // // // // //                       <div>
// // // // // //                         <h3 className="text-lg font-bold mb-1">
// // // // // //                           Daily Wellness Tip - {currentTipData.category}
// // // // // //                         </h3>
// // // // // //                         <div className="flex items-center space-x-2 text-sm opacity-90">
// // // // // //                           <Timer className="w-4 h-4" />
// // // // // //                           <span>Auto-rotates every 8 seconds</span>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                     <button
// // // // // //                       onClick={refreshDynamicContent}
// // // // // //                       disabled={refreshing}
// // // // // //                       className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors disabled:opacity-50"
// // // // // //                     >
// // // // // //                       <RefreshCw className={`w-5 h-5 text-white ${refreshing ? 'animate-spin' : ''}`} />
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //                 <div className="p-6">
// // // // // //                   <div className="flex items-start space-x-4">
// // // // // //                     <div className="w-2 h-16 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
// // // // // //                     <div className="flex-1">
// // // // // //                       <p className="text-gray-700 text-lg leading-relaxed font-medium mb-4">
// // // // // //                         {currentTipData.tip}
// // // // // //                       </p>
                      
// // // // // //                       {/* Dynamic Action Button */}
// // // // // //                       {currentTipData.actionText && (
// // // // // //                         <button
// // // // // //                           onClick={() => handleWellnessTipAction(currentTipData)}
// // // // // //                           className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-colors shadow-lg"
// // // // // //                         >
// // // // // //                           <Play className="w-4 h-4 mr-2" />
// // // // // //                           {currentTipData.actionText}
// // // // // //                         </button>
// // // // // //                       )}
                      
// // // // // //                       <div className="flex items-center justify-between mt-6">
// // // // // //                         <div className="flex space-x-1">
// // // // // //                           {wellnessTips.map((_, index) => (
// // // // // //                             <div
// // // // // //                               key={index}
// // // // // //                               className={`w-2 h-2 rounded-full transition-colors duration-300 ${
// // // // // //                                 index === currentTip ? 'bg-indigo-600' : 'bg-gray-300'
// // // // // //                               }`}
// // // // // //                             ></div>
// // // // // //                           ))}
// // // // // //                         </div>
// // // // // //                         <span className="text-sm text-gray-500 font-medium">
// // // // // //                           Tip {currentTip + 1} of {wellnessTips.length}
// // // // // //                         </span>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {/* TODAY'S PROGRESS */}
// // // // // //             {dashboardData.todayProgress && (
// // // // // //               <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
// // // // // //                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
// // // // // //                   <Target className="w-6 h-6 mr-3 text-emerald-600" />
// // // // // //                   Today's Wellness Check
// // // // // //                 </h2>
                
// // // // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // //                   {dashboardData.todayProgress.tip_of_the_day && (
// // // // // //                     <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6">
// // // // // //                       <div className="flex items-center mb-4">
// // // // // //                         <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center mr-3">
// // // // // //                           <Lightbulb className="w-5 h-5 text-white" />
// // // // // //                         </div>
// // // // // //                         <h4 className="font-bold text-yellow-800">Today's Insight</h4>
// // // // // //                       </div>
// // // // // //                       <p className="text-yellow-700 leading-relaxed">
// // // // // //                         {dashboardData.todayProgress.tip_of_the_day}
// // // // // //                       </p>
// // // // // //                     </div>
// // // // // //                   )}
                  
// // // // // //                   {dashboardData.todayProgress.quote && (
// // // // // //                     <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
// // // // // //                       <div className="flex items-center mb-4">
// // // // // //                         <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mr-3">
// // // // // //                           <Quote className="w-5 h-5 text-white" />
// // // // // //                         </div>
// // // // // //                         <h4 className="font-bold text-purple-800">Daily Inspiration</h4>
// // // // // //                       </div>
// // // // // //                       <p className="text-purple-700 italic leading-relaxed">
// // // // // //                         "{dashboardData.todayProgress.quote}"
// // // // // //                       </p>
// // // // // //                     </div>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>

// // // // // //           {/* RIGHT SIDEBAR */}
// // // // // //           <div className="space-y-8">
            
// // // // // //             {/* RECOVERY TRACKER WIDGET */}
// // // // // //             {dashboardData.recoveryTracker?.has_tracker && (
// // // // // //               <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
// // // // // //                 <div className="bg-gradient-to-r from-emerald-600 to-green-700 p-6 text-white">
// // // // // //                   <div className="flex items-center justify-between">
// // // // // //                     <div>
// // // // // //                       <h3 className="text-xl font-bold mb-1">Recovery Journey</h3>
// // // // // //                       <p className="text-emerald-100 text-sm">10-Day Wellness Program</p>
// // // // // //                     </div>
// // // // // //                     <div className="text-2xl font-bold">
// // // // // //                       {Math.round(dashboardData.recoveryTracker.tracker?.completion_percentage || 0)}%
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
                
// // // // // //                 <div className="p-6">
// // // // // //                   <div className="mb-6">
// // // // // //                     <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
// // // // // //                       <span>Progress</span>
// // // // // //                       <span>
// // // // // //                         Day {dashboardData.recoveryTracker.tracker?.days_elapsed + 1 || 1} of{' '}
// // // // // //                         {dashboardData.recoveryTracker.tracker?.total_days || 10}
// // // // // //                       </span>
// // // // // //                     </div>
// // // // // //                     <div className="w-full bg-gray-200 rounded-full h-3">
// // // // // //                       <div 
// // // // // //                         className="bg-gradient-to-r from-emerald-500 to-green-600 h-3 rounded-full transition-all duration-1000"
// // // // // //                         style={{ 
// // // // // //                           width: `${Math.min(100, dashboardData.recoveryTracker.tracker?.completion_percentage || 0)}%` 
// // // // // //                         }}
// // // // // //                       ></div>
// // // // // //                     </div>
// // // // // //                   </div>
                  
// // // // // //                   <div className="space-y-4">
// // // // // //                     <div className="flex items-center justify-between">
// // // // // //                       <span className="text-gray-600">Current Focus</span>
// // // // // //                       <span className="font-semibold text-gray-800">
// // // // // //                         {dashboardData.recoveryTracker.tracker?.emotion || 'Wellness'}
// // // // // //                       </span>
// // // // // //                     </div>
// // // // // //                     <div className="flex items-center justify-between">
// // // // // //                       <span className="text-gray-600">Stress Level</span>
// // // // // //                       <span className={`px-2 py-1 rounded-full text-xs font-bold ${
// // // // // //                         dashboardData.recoveryTracker.tracker?.stress_level === 'High' 
// // // // // //                           ? 'bg-red-100 text-red-800'
// // // // // //                           : dashboardData.recoveryTracker.tracker?.stress_level === 'Medium'
// // // // // //                           ? 'bg-yellow-100 text-yellow-800'
// // // // // //                           : 'bg-green-100 text-green-800'
// // // // // //                       }`}>
// // // // // //                         {dashboardData.recoveryTracker.tracker?.stress_level || 'Low'}
// // // // // //                       </span>
// // // // // //                     </div>
// // // // // //                   </div>
                  
// // // // // //                   <button 
// // // // // //                     onClick={() => navigate('/progress')}
// // // // // //                     className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-green-700 text-white py-3 rounded-2xl font-semibold hover:from-emerald-700 hover:to-green-800 transition-colors flex items-center justify-center"
// // // // // //                   >
// // // // // //                     View Full Progress
// // // // // //                     <ArrowUpRight className="w-4 h-4 ml-2" />
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {/* MOOD TREND WIDGET */}
// // // // // //             {moodTrend && (
// // // // // //               <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-6">
// // // // // //                 <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
// // // // // //                   <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
// // // // // //                   Mood Insights
// // // // // //                 </h3>
                
// // // // // //                 <div className="text-center mb-6">
// // // // // //                   <div className="text-3xl font-bold text-gray-800 mb-2">
// // // // // //                     {moodTrend.direction === 'up' ? '↗️' : '📊'} {moodTrend.percentage}%
// // // // // //                   </div>
// // // // // //                   <p className="text-gray-600">
// // // // // //                     {moodTrend.direction === 'up' ? 'Improvement' : 'Stable'} this week
// // // // // //                   </p>
// // // // // //                 </div>
                
// // // // // //                 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4">
// // // // // //                   <p className="text-blue-800 text-sm text-center font-medium">
// // // // // //                     {moodTrend.direction === 'up' 
// // // // // //                       ? '🌟 Great progress! Keep up the wellness routine.'
// // // // // //                       : '💙 Maintaining stability is also progress.'
// // // // // //                     }
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {/* DYNAMIC AI RECOMMENDATIONS */}
// // // // // //             <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-6">
// // // // // //               <div className="flex items-center justify-between mb-6">
// // // // // //                 <h3 className="text-xl font-bold text-gray-800 flex items-center">
// // // // // //                   <Brain className="w-5 h-5 mr-2 text-purple-600" />
// // // // // //                   AI Recommendations
// // // // // //                 </h3>
// // // // // //                 <button
// // // // // //                   onClick={refreshDynamicContent}
// // // // // //                   disabled={refreshing}
// // // // // //                   className="p-2 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors disabled:opacity-50"
// // // // // //                 >
// // // // // //                   <RefreshCw className={`w-4 h-4 text-purple-600 ${refreshing ? 'animate-spin' : ''}`} />
// // // // // //                 </button>
// // // // // //               </div>
              
// // // // // //               <div className="space-y-4">
// // // // // //                 {aiRecommendations.map((rec, index) => {
// // // // // //                   const IconComponent = getIconComponent(rec.icon);
// // // // // //                   return (
// // // // // //                     <button
// // // // // //                       key={rec.id || index}
// // // // // //                       onClick={() => handleRecommendationClick(rec)}
// // // // // //                       className={`w-full ${rec.bgColor} border border-gray-200 rounded-2xl p-4 hover:shadow-md transition-all cursor-pointer text-left group`}
// // // // // //                     >
// // // // // //                       <div className="flex items-center space-x-3">
// // // // // //                         <div className={`w-10 h-10 ${rec.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
// // // // // //                           <IconComponent className={`w-5 h-5 ${rec.color}`} />
// // // // // //                         </div>
// // // // // //                         <div className="flex-1">
// // // // // //                           <div className="flex items-center justify-between">
// // // // // //                             <h4 className="font-semibold text-gray-800">{rec.title}</h4>
// // // // // //                             {rec.duration && (
// // // // // //                               <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
// // // // // //                                 {rec.duration}
// // // // // //                               </span>
// // // // // //                             )}
// // // // // //                           </div>
// // // // // //                           <p className="text-sm text-gray-600">{rec.description}</p>
// // // // // //                         </div>
// // // // // //                         <ChevronRight className={`w-4 h-4 ${rec.color} group-hover:translate-x-1 transition-transform`} />
// // // // // //                       </div>
// // // // // //                     </button>
// // // // // //                   );
// // // // // //                 })}
// // // // // //               </div>
              
// // // // // //               {aiRecommendations.length === 0 && (
// // // // // //                 <div className="text-center py-8">
// // // // // //                   <Brain className="w-12 h-12 text-gray-300 mx-auto mb-4" />
// // // // // //                   <p className="text-gray-500">Loading personalized recommendations...</p>
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
      
// // // // // //       {/* WELLNESS ACTIVITY MODAL */}
// // // // // //       <WellnessActivityModal 
// // // // // //         isOpen={isModalOpen}
// // // // // //         onClose={() => setIsModalOpen(false)}
// // // // // //         activity={modalActivity}
// // // // // //       />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // /// src/pages/Dashboard.js - COMPLETE CODE WITH EMOTION HISTORY & CRISIS SUPPORT
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import { emotionService } from '../services/emotionService';
// // // // // import { therapistService } from '../services/therapistService';
// // // // // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // // // // import WellnessActivityModal from '../components/modals/WellnessActivityModal';
// // // // // import EmotionAnalysisDisplay from '../components/ui/EmotionAnalysisDisplay';
// // // // // import EmotionHistory from '../components/EmotionHistory';
// // // // // import CrisisSupport from '../components/CrisisSupport';

// // // // // import { 
// // // // //   Brain, 
// // // // //   Heart, 
// // // // //   Calendar, 
// // // // //   TrendingUp, 
// // // // //   Activity, 
// // // // //   Users, 
// // // // //   BookOpen, 
// // // // //   MessageCircle,
// // // // //   Target,
// // // // //   Zap,
// // // // //   ChevronRight,
// // // // //   AlertCircle,
// // // // //   BarChart3,
// // // // //   Sparkles,
// // // // //   ArrowUpRight,
// // // // //   Mic,
// // // // //   Lightbulb,
// // // // //   Quote
// // // // // } from 'lucide-react';

// // // // // const Dashboard = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const [dashboardData, setDashboardData] = useState({
// // // // //     recoveryTracker: null,
// // // // //     todayProgress: null,
// // // // //     userProfile: null,
// // // // //     recentSessions: [],
// // // // //     upcomingAppointments: []
// // // // //   });
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState('');
// // // // //   const [greeting, setGreeting] = useState('');
// // // // //   const [refreshing, setRefreshing] = useState(false);
  
// // // // //   // Modal states
// // // // //   const [modalActivity, setModalActivity] = useState(null);
// // // // //   const [isModalOpen, setIsModalOpen] = useState(false);

// // // // //   useEffect(() => {
// // // // //     setDynamicGreeting();
// // // // //     fetchDashboardData();
// // // // //   }, []);

// // // // //   const setDynamicGreeting = () => {
// // // // //     const hour = new Date().getHours();
// // // // //     if (hour < 12) setGreeting('Good Morning');
// // // // //     else if (hour < 17) setGreeting('Good Afternoon');
// // // // //     else setGreeting('Good Evening');
// // // // //   };

// // // // //   const fetchDashboardData = async () => {
// // // // //     try {
// // // // //       setLoading(true);
// // // // //       setError('');
      
// // // // //       const [recoveryData, profileData] = await Promise.all([
// // // // //         emotionService.getActiveRecoveryTracker().catch(() => ({ has_tracker: false })),
// // // // //         therapistService.getUserProfile().catch(() => null)
// // // // //       ]);

// // // // //       let todayProgressData = null;
// // // // //       try {
// // // // //         todayProgressData = await emotionService.getTodayProgressLog();
// // // // //       } catch (err) {
// // // // //         console.log('No progress log for today yet');
// // // // //       }

// // // // //       setDashboardData({
// // // // //         recoveryTracker: recoveryData,
// // // // //         todayProgress: todayProgressData,
// // // // //         userProfile: profileData,
// // // // //         recentSessions: [],
// // // // //         upcomingAppointments: []
// // // // //       });
// // // // //     } catch (err) {
// // // // //       console.error('Dashboard fetch error:', err);
// // // // //       setError('Some dashboard data could not be loaded');
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleQuickAction = async (action) => {
// // // // //     setRefreshing(true);
    
// // // // //     switch(action) {
// // // // //       case 'emotion-input':
// // // // //         navigate('/emotion-input');
// // // // //         break;
// // // // //       case 'book-session':
// // // // //         navigate('/book-session');
// // // // //         break;
// // // // //       case 'view-progress':
// // // // //         navigate('/progress');
// // // // //         break;
// // // // //       case 'find-therapist':
// // // // //         navigate('/therapists');
// // // // //         break;
// // // // //       default:
// // // // //         break;
// // // // //     }
    
// // // // //     setTimeout(() => setRefreshing(false), 1000);
// // // // //   };

// // // // //   const calculateMoodTrend = () => {
// // // // //     const { userProfile } = dashboardData;
// // // // //     if (!userProfile?.mood_history_count) return null;
    
// // // // //     const improvement = Math.random() > 0.5;
// // // // //     return {
// // // // //       direction: improvement ? 'up' : 'stable',
// // // // //       percentage: Math.floor(Math.random() * 20) + 5
// // // // //     };
// // // // //   };

// // // // //   const moodTrend = calculateMoodTrend();

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 flex items-center justify-center">
// // // // //         <div className="text-center space-y-8">
// // // // //           <div className="relative">
// // // // //             <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl mx-auto flex items-center justify-center shadow-2xl animate-pulse">
// // // // //               <Brain className="w-16 h-16 text-white" />
// // // // //             </div>
// // // // //             <div className="absolute -top-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
// // // // //               <Sparkles className="w-5 h-5 text-white" />
// // // // //             </div>
// // // // //           </div>
// // // // //           <LoadingSpinner size="lg" />
// // // // //           <div className="space-y-3">
// // // // //             <h3 className="text-2xl font-bold text-gray-800">Loading Your Wellness Dashboard</h3>
// // // // //             <p className="text-gray-600 max-w-md mx-auto">Preparing your personalized mental health insights...</p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
// // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
// // // // //         {/* PROFESSIONAL HEADER WITH DYNAMIC GREETING */}
// // // // //         <div className="mb-12">
// // // // //           <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
// // // // //             <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 p-8 text-white relative overflow-hidden">
// // // // //               <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
// // // // //               <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
              
// // // // //               <div className="relative z-10 flex items-center justify-between">
// // // // //                 <div>
// // // // //                   <div className="flex items-center space-x-4 mb-4">
// // // // //                     <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
// // // // //                       <Brain className="w-8 h-8 text-white" />
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <h1 className="text-4xl font-bold mb-2">
// // // // //                         {greeting}, {dashboardData.userProfile?.username || 'User'}!
// // // // //                       </h1>
// // // // //                       <p className="text-blue-100 text-lg">
// // // // //                         Welcome back to your wellness journey
// // // // //                       </p>
// // // // //                     </div>
// // // // //                   </div>
                  
// // // // //                   <div className="flex items-center space-x-6">
// // // // //                     <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl px-4 py-2">
// // // // //                       <span className="text-emerald-100 text-sm font-bold">
// // // // //                         Active Since {dashboardData.userProfile?.joined || 'Recently'}
// // // // //                       </span>
// // // // //                     </div>
// // // // //                     {dashboardData.recoveryTracker?.has_tracker && (
// // // // //                       <div className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl px-4 py-2">
// // // // //                         <span className="text-yellow-100 text-sm font-bold">
// // // // //                           Recovery Day {dashboardData.recoveryTracker.tracker?.days_elapsed + 1 || 1}
// // // // //                         </span>
// // // // //                       </div>
// // // // //                     )}
// // // // //                   </div>
// // // // //                 </div>
                
// // // // //                 <div className="text-right">
// // // // //                   <div className="text-3xl font-bold mb-1">
// // // // //                     {new Date().toLocaleDateString('en-US', { 
// // // // //                       weekday: 'long',
// // // // //                       month: 'short', 
// // // // //                       day: 'numeric'
// // // // //                     })}
// // // // //                   </div>
// // // // //                   <div className="text-blue-100">
// // // // //                     {new Date().toLocaleTimeString('en-US', { 
// // // // //                       hour: '2-digit', 
// // // // //                       minute: '2-digit'
// // // // //                     })}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
            
// // // // //             {/* Quick Stats Bar */}
// // // // //             <div className="bg-gradient-to-r from-gray-50 to-indigo-50 p-6">
// // // // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// // // // //                 <div className="text-center">
// // // // //                   <div className="text-2xl font-bold text-gray-900">
// // // // //                     {dashboardData.userProfile?.mood_history_count || 0}
// // // // //                   </div>
// // // // //                   <div className="text-sm text-gray-600 font-medium">Mood Entries</div>
// // // // //                 </div>
// // // // //                 <div className="text-center">
// // // // //                   <div className="text-2xl font-bold text-gray-900">
// // // // //                     {dashboardData.userProfile?.therapy_sessions_count || 0}
// // // // //                   </div>
// // // // //                   <div className="text-sm text-gray-600 font-medium">Therapy Sessions</div>
// // // // //                 </div>
// // // // //                 <div className="text-center">
// // // // //                   <div className="text-2xl font-bold text-gray-900">
// // // // //                     {dashboardData.recoveryTracker?.has_tracker ? 
// // // // //                       Math.round(dashboardData.recoveryTracker.tracker?.completion_percentage || 0) : 0}%
// // // // //                   </div>
// // // // //                   <div className="text-sm text-gray-600 font-medium">Recovery Progress</div>
// // // // //                 </div>
// // // // //                 <div className="text-center">
// // // // //                   <div className="text-2xl font-bold text-emerald-600">98%</div>
// // // // //                   <div className="text-sm text-gray-600 font-medium">Wellness Score</div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* ERROR DISPLAY */}
// // // // //         {error && (
// // // // //           <div className="mb-8 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6">
// // // // //             <div className="flex items-center">
// // // // //               <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
// // // // //               <p className="font-semibold text-red-800">{error}</p>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}

// // // // //         {/* ✅ EMOTION ANALYSIS SECTION */}
// // // // //         <div className="mb-8">
// // // // //           <EmotionAnalysisDisplay />
// // // // //         </div>

// // // // //         {/* 📊 EMOTION HISTORY TIMELINE */}
// // // // //         <div className="mb-8">
// // // // //           <EmotionHistory />
// // // // //         </div>

// // // // //         {/* 🆘 CRISIS SUPPORT WIDGET */}
// // // // //         <div className="mb-8">
// // // // //           <CrisisSupport />
// // // // //         </div>

// // // // //         <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
// // // // //           {/* LEFT COLUMN - Main Actions & Today's Progress */}
// // // // //           <div className="xl:col-span-2 space-y-8">
            
// // // // //             {/* QUICK ACTIONS GRID */}
// // // // //             <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
// // // // //               <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
// // // // //                 <Zap className="w-6 h-6 mr-3 text-yellow-600" />
// // // // //                 Quick Actions
// // // // //               </h2>
              
// // // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // //                 {[
// // // // //                   {
// // // // //                     icon: Mic,
// // // // //                     title: "Share Your Feelings",
// // // // //                     description: "Voice, text, or video emotion analysis",
// // // // //                     color: "from-blue-500 to-indigo-600",
// // // // //                     action: "emotion-input",
// // // // //                     badge: "AI Powered"
// // // // //                   },
// // // // //                   {
// // // // //                     icon: Calendar,
// // // // //                     title: "Book Therapy Session",
// // // // //                     description: "Connect with licensed professionals",
// // // // //                     color: "from-emerald-500 to-green-600", 
// // // // //                     action: "book-session",
// // // // //                     badge: "Professional"
// // // // //                   },
// // // // //                   {
// // // // //                     icon: BarChart3,
// // // // //                     title: "View Progress",
// // // // //                     description: "Track your wellness journey",
// // // // //                     color: "from-purple-500 to-violet-600",
// // // // //                     action: "view-progress", 
// // // // //                     badge: "Insights"
// // // // //                   },
// // // // //                   {
// // // // //                     icon: Users,
// // // // //                     title: "Find Therapists",
// // // // //                     description: "Browse verified mental health experts",
// // // // //                     color: "from-pink-500 to-rose-600",
// // // // //                     action: "find-therapist",
// // // // //                     badge: "Verified"
// // // // //                   }
// // // // //                 ].map((item, index) => (
// // // // //                   <button
// // // // //                     key={index}
// // // // //                     onClick={() => handleQuickAction(item.action)}
// // // // //                     disabled={refreshing}
// // // // //                     className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 disabled:opacity-70 disabled:transform-none"
// // // // //                   >
// // // // //                     <div className="flex items-start space-x-4">
// // // // //                       <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
// // // // //                         <item.icon className="w-7 h-7 text-white" />
// // // // //                       </div>
// // // // //                       <div className="flex-1 text-left">
// // // // //                         <div className="flex items-center justify-between mb-2">
// // // // //                           <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
// // // // //                           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
// // // // //                             {item.badge}
// // // // //                           </span>
// // // // //                         </div>
// // // // //                         <p className="text-gray-600 text-sm leading-relaxed mb-3">
// // // // //                           {item.description}
// // // // //                         </p>
// // // // //                         <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
// // // // //                           <span className="text-sm font-semibold">Get Started</span>
// // // // //                           <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </button>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* TODAY'S PROGRESS */}
// // // // //             {dashboardData.todayProgress && (
// // // // //               <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
// // // // //                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
// // // // //                   <Target className="w-6 h-6 mr-3 text-emerald-600" />
// // // // //                   Today's Wellness Check
// // // // //                 </h2>
                
// // // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // //                   {dashboardData.todayProgress.tip_of_the_day && (
// // // // //                     <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6">
// // // // //                       <div className="flex items-center mb-4">
// // // // //                         <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center mr-3">
// // // // //                           <Lightbulb className="w-5 h-5 text-white" />
// // // // //                         </div>
// // // // //                         <h4 className="font-bold text-yellow-800">Today's Insight</h4>
// // // // //                       </div>
// // // // //                       <p className="text-yellow-700 leading-relaxed">
// // // // //                         {dashboardData.todayProgress.tip_of_the_day}
// // // // //                       </p>
// // // // //                     </div>
// // // // //                   )}
                  
// // // // //                   {dashboardData.todayProgress.quote && (
// // // // //                     <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
// // // // //                       <div className="flex items-center mb-4">
// // // // //                         <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mr-3">
// // // // //                           <Quote className="w-5 h-5 text-white" />
// // // // //                         </div>
// // // // //                         <h4 className="font-bold text-purple-800">Daily Inspiration</h4>
// // // // //                       </div>
// // // // //                       <p className="text-purple-700 italic leading-relaxed">
// // // // //                         "{dashboardData.todayProgress.quote}"
// // // // //                       </p>
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>

// // // // //           {/* RIGHT SIDEBAR */}
// // // // //           <div className="space-y-8">
            
// // // // //             {/* RECOVERY TRACKER WIDGET */}
// // // // //             {dashboardData.recoveryTracker?.has_tracker && (
// // // // //               <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
// // // // //                 <div className="bg-gradient-to-r from-emerald-600 to-green-700 p-6 text-white">
// // // // //                   <div className="flex items-center justify-between">
// // // // //                     <div>
// // // // //                       <h3 className="text-xl font-bold mb-1">Recovery Journey</h3>
// // // // //                       <p className="text-emerald-100 text-sm">10-Day Wellness Program</p>
// // // // //                     </div>
// // // // //                     <div className="text-2xl font-bold">
// // // // //                       {Math.round(dashboardData.recoveryTracker.tracker?.completion_percentage || 0)}%
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
                
// // // // //                 <div className="p-6">
// // // // //                   <div className="mb-6">
// // // // //                     <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
// // // // //                       <span>Progress</span>
// // // // //                       <span>
// // // // //                         Day {dashboardData.recoveryTracker.tracker?.days_elapsed + 1 || 1} of{' '}
// // // // //                         {dashboardData.recoveryTracker.tracker?.total_days || 10}
// // // // //                       </span>
// // // // //                     </div>
// // // // //                     <div className="w-full bg-gray-200 rounded-full h-3">
// // // // //                       <div 
// // // // //                         className="bg-gradient-to-r from-emerald-500 to-green-600 h-3 rounded-full transition-all duration-1000"
// // // // //                         style={{ 
// // // // //                           width: `${Math.min(100, dashboardData.recoveryTracker.tracker?.completion_percentage || 0)}%` 
// // // // //                         }}
// // // // //                       ></div>
// // // // //                     </div>
// // // // //                   </div>
                  
// // // // //                   <div className="space-y-4">
// // // // //                     <div className="flex items-center justify-between">
// // // // //                       <span className="text-gray-600">Current Focus</span>
// // // // //                       <span className="font-semibold text-gray-800">
// // // // //                         {dashboardData.recoveryTracker.tracker?.emotion || 'Wellness'}
// // // // //                       </span>
// // // // //                     </div>
// // // // //                     <div className="flex items-center justify-between">
// // // // //                       <span className="text-gray-600">Stress Level</span>
// // // // //                       <span className={`px-2 py-1 rounded-full text-xs font-bold ${
// // // // //                         dashboardData.recoveryTracker.tracker?.stress_level === 'High' 
// // // // //                           ? 'bg-red-100 text-red-800'
// // // // //                           : dashboardData.recoveryTracker.tracker?.stress_level === 'Medium'
// // // // //                           ? 'bg-yellow-100 text-yellow-800'
// // // // //                           : 'bg-green-100 text-green-800'
// // // // //                       }`}>
// // // // //                         {dashboardData.recoveryTracker.tracker?.stress_level || 'Low'}
// // // // //                       </span>
// // // // //                     </div>
// // // // //                   </div>
                  
// // // // //                   <button 
// // // // //                     onClick={() => navigate('/progress')}
// // // // //                     className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-green-700 text-white py-3 rounded-2xl font-semibold hover:from-emerald-700 hover:to-green-800 transition-colors flex items-center justify-center"
// // // // //                   >
// // // // //                     View Full Progress
// // // // //                     <ArrowUpRight className="w-4 h-4 ml-2" />
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}

// // // // //             {/* MOOD TREND WIDGET */}
// // // // //             {moodTrend && (
// // // // //               <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-6">
// // // // //                 <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
// // // // //                   <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
// // // // //                   Mood Insights
// // // // //                 </h3>
                
// // // // //                 <div className="text-center mb-6">
// // // // //                   <div className="text-3xl font-bold text-gray-800 mb-2">
// // // // //                     {moodTrend.direction === 'up' ? '↗️' : '📊'} {moodTrend.percentage}%
// // // // //                   </div>
// // // // //                   <p className="text-gray-600">
// // // // //                     {moodTrend.direction === 'up' ? 'Improvement' : 'Stable'} this week
// // // // //                   </p>
// // // // //                 </div>
                
// // // // //                 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4">
// // // // //                   <p className="text-blue-800 text-sm text-center font-medium">
// // // // //                     {moodTrend.direction === 'up' 
// // // // //                       ? '🌟 Great progress! Keep up the wellness routine.'
// // // // //                       : '💙 Maintaining stability is also progress.'
// // // // //                     }
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
      
// // // // //       {/* WELLNESS ACTIVITY MODAL */}
// // // // //       <WellnessActivityModal 
// // // // //         isOpen={isModalOpen}
// // // // //         onClose={() => setIsModalOpen(false)}
// // // // //         activity={modalActivity}
// // // // //       />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Dashboard;
// // // // import React, { useState, useEffect } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import { emotionService } from '../services/emotionService';
// // // // import { therapistService } from '../services/therapistService';
// // // // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // // // import WellnessActivityModal from '../components/modals/WellnessActivityModal';
// // // // import EmotionAnalysisDisplay from '../components/ui/EmotionAnalysisDisplay';
// // // // import EmotionHistory from '../components/EmotionHistory';
// // // // // CrisisSupport import removed
// // // // // import CrisisSupport from '../components/CrisisSupport';

// // // // import { 
// // // //   Brain, 
// // // //   Heart, 
// // // //   Calendar, 
// // // //   TrendingUp, 
// // // //   Activity, 
// // // //   Users, 
// // // //   BookOpen, 
// // // //   MessageCircle,
// // // //   Target,
// // // //   Zap,
// // // //   ChevronRight,
// // // //   AlertCircle,
// // // //   BarChart3,
// // // //   Sparkles,
// // // //   ArrowUpRight,
// // // //   Mic,
// // // //   Lightbulb,
// // // //   Quote
// // // // } from 'lucide-react';

// // // // const Dashboard = () => {
// // // //   const navigate = useNavigate();
// // // //   const [dashboardData, setDashboardData] = useState({
// // // //     recoveryTracker: null,
// // // //     todayProgress: null,
// // // //     userProfile: null,
// // // //     recentSessions: [],
// // // //     upcomingAppointments: []
// // // //   });
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState('');
// // // //   const [greeting, setGreeting] = useState('');
// // // //   const [refreshing, setRefreshing] = useState(false);
  
// // // //   // Modal states
// // // //   const [modalActivity, setModalActivity] = useState(null);
// // // //   const [isModalOpen, setIsModalOpen] = useState(false);

// // // //   useEffect(() => {
// // // //     setDynamicGreeting();
// // // //     fetchDashboardData();
// // // //   }, []);

// // // //   const setDynamicGreeting = () => {
// // // //     const hour = new Date().getHours();
// // // //     if (hour < 12) setGreeting('Good Morning');
// // // //     else if (hour < 17) setGreeting('Good Afternoon');
// // // //     else setGreeting('Good Evening');
// // // //   };

// // // //   const fetchDashboardData = async () => {
// // // //     try {
// // // //       setLoading(true);
// // // //       setError('');
      
// // // //       const [recoveryData, profileData] = await Promise.all([
// // // //         emotionService.getActiveRecoveryTracker().catch(() => ({ has_tracker: false })),
// // // //         therapistService.getUserProfile().catch(() => null)
// // // //       ]);

// // // //       let todayProgressData = null;
// // // //       try {
// // // //         todayProgressData = await emotionService.getTodayProgressLog();
// // // //       } catch (err) {
// // // //         console.log('No progress log for today yet');
// // // //       }

// // // //       setDashboardData({
// // // //         recoveryTracker: recoveryData,
// // // //         todayProgress: todayProgressData,
// // // //         userProfile: profileData,
// // // //         recentSessions: [],
// // // //         upcomingAppointments: []
// // // //       });
// // // //     } catch (err) {
// // // //       console.error('Dashboard fetch error:', err);
// // // //       setError('Some dashboard data could not be loaded');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleQuickAction = async (action) => {
// // // //     setRefreshing(true);
    
// // // //     switch(action) {
// // // //       case 'emotion-input':
// // // //         navigate('/emotion-input');
// // // //         break;
// // // //       case 'book-session':
// // // //         navigate('/book-session');
// // // //         break;
// // // //       case 'view-progress':
// // // //         navigate('/progress');
// // // //         break;
// // // //       case 'find-therapist':
// // // //         navigate('/therapists');
// // // //         break;
// // // //       default:
// // // //         break;
// // // //     }
    
// // // //     setTimeout(() => setRefreshing(false), 1000);
// // // //   };

// // // //   const calculateMoodTrend = () => {
// // // //     const { userProfile } = dashboardData;
// // // //     if (!userProfile?.mood_history_count) return null;
    
// // // //     const improvement = Math.random() > 0.5;
// // // //     return {
// // // //       direction: improvement ? 'up' : 'stable',
// // // //       percentage: Math.floor(Math.random() * 20) + 5
// // // //     };
// // // //   };

// // // //   const moodTrend = calculateMoodTrend();

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 flex items-center justify-center">
// // // //         <div className="text-center space-y-8">
// // // //           <div className="relative">
// // // //             <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl mx-auto flex items-center justify-center shadow-2xl animate-pulse">
// // // //               <Brain className="w-16 h-16 text-white" />
// // // //             </div>
// // // //             <div className="absolute -top-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
// // // //               <Sparkles className="w-5 h-5 text-white" />
// // // //             </div>
// // // //           </div>
// // // //           <LoadingSpinner size="lg" />
// // // //           <div className="space-y-3">
// // // //             <h3 className="text-2xl font-bold text-gray-800">Loading Your Wellness Dashboard</h3>
// // // //             <p className="text-gray-600 max-w-md mx-auto">Preparing your personalized mental health insights...</p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
// // // //         {/* PROFESSIONAL HEADER WITH DYNAMIC GREETING */}
// // // //         <div className="mb-12">
// // // //           <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
// // // //             <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 p-8 text-white relative overflow-hidden">
// // // //               <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
// // // //               <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
              
// // // //               <div className="relative z-10 flex items-center justify-between">
// // // //                 <div>
// // // //                   <div className="flex items-center space-x-4 mb-4">
// // // //                     <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
// // // //                       <Brain className="w-8 h-8 text-white" />
// // // //                     </div>
// // // //                     <div>
// // // //                       <h1 className="text-4xl font-bold mb-2">
// // // //                         {greeting}, {dashboardData.userProfile?.username || 'User'}!
// // // //                       </h1>
// // // //                       <p className="text-blue-100 text-lg">
// // // //                         Welcome back to your wellness journey
// // // //                       </p>
// // // //                     </div>
// // // //                   </div>
                  
// // // //                   <div className="flex items-center space-x-6">
// // // //                     <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl px-4 py-2">
// // // //                       <span className="text-emerald-100 text-sm font-bold">
// // // //                         Active Since {dashboardData.userProfile?.joined || 'Recently'}
// // // //                       </span>
// // // //                     </div>
// // // //                     {dashboardData.recoveryTracker?.has_tracker && (
// // // //                       <div className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl px-4 py-2">
// // // //                         <span className="text-yellow-100 text-sm font-bold">
// // // //                           Recovery Day {dashboardData.recoveryTracker.tracker?.days_elapsed + 1 || 1}
// // // //                         </span>
// // // //                       </div>
// // // //                     )}
// // // //                   </div>
// // // //                 </div>
                
// // // //                 <div className="text-right">
// // // //                   <div className="text-3xl font-bold mb-1">
// // // //                     {new Date().toLocaleDateString('en-US', { 
// // // //                       weekday: 'long',
// // // //                       month: 'short', 
// // // //                       day: 'numeric'
// // // //                     })}
// // // //                   </div>
// // // //                   <div className="text-blue-100">
// // // //                     {new Date().toLocaleTimeString('en-US', { 
// // // //                       hour: '2-digit', 
// // // //                       minute: '2-digit'
// // // //                     })}
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
            
// // // //             {/* Quick Stats Bar */}
// // // //             <div className="bg-gradient-to-r from-gray-50 to-indigo-50 p-6">
// // // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// // // //                 <div className="text-center">
// // // //                   <div className="text-2xl font-bold text-gray-900">
// // // //                     {dashboardData.userProfile?.mood_history_count || 0}
// // // //                   </div>
// // // //                   <div className="text-sm text-gray-600 font-medium">Mood Entries</div>
// // // //                 </div>
// // // //                 <div className="text-center">
// // // //                   <div className="text-2xl font-bold text-gray-900">
// // // //                     {dashboardData.userProfile?.therapy_sessions_count || 0}
// // // //                   </div>
// // // //                   <div className="text-sm text-gray-600 font-medium">Therapy Sessions</div>
// // // //                 </div>
// // // //                 <div className="text-center">
// // // //                   <div className="text-2xl font-bold text-gray-900">
// // // //                     {dashboardData.recoveryTracker?.has_tracker ? 
// // // //                       Math.round(dashboardData.recoveryTracker.tracker?.completion_percentage || 0) : 0}%
// // // //                   </div>
// // // //                   <div className="text-sm text-gray-600 font-medium">Recovery Progress</div>
// // // //                 </div>
// // // //                 <div className="text-center">
// // // //                   <div className="text-2xl font-bold text-emerald-600">98%</div>
// // // //                   <div className="text-sm text-gray-600 font-medium">Wellness Score</div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* ERROR DISPLAY */}
// // // //         {error && (
// // // //           <div className="mb-8 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6">
// // // //               <div className="flex items-center">
// // // //                 <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
// // // //                 <p className="font-semibold text-red-800">{error}</p>
// // // //               </div>
// // // //             </div>
// // // //         )}

// // // //         {/* ✅ EMOTION ANALYSIS SECTION */}
// // // //         <div className="mb-8">
// // // //           <EmotionAnalysisDisplay />
// // // //         </div>

// // // //         {/* 📊 EMOTION HISTORY TIMELINE */}
// // // //         <div className="mb-8">
// // // //           <EmotionHistory />
// // // //         </div>

// // // //         {/* Crisis Support widget removed */}

// // // //         <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
// // // //           {/* LEFT COLUMN - Main Actions & Today's Progress */}
// // // //           <div className="xl:col-span-2 space-y-8">
            
// // // //             {/* QUICK ACTIONS GRID */}
// // // //             <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
// // // //               <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
// // // //                 <Zap className="w-6 h-6 mr-3 text-yellow-600" />
// // // //                 Quick Actions
// // // //               </h2>
              
// // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //                 {[
// // // //                   {
// // // //                     icon: Mic,
// // // //                     title: "Share Your Feelings",
// // // //                     description: "Voice, text, or video emotion analysis",
// // // //                     color: "from-blue-500 to-indigo-600",
// // // //                     action: "emotion-input",
// // // //                     badge: "AI Powered"
// // // //                   },
// // // //                   {
// // // //                     icon: Calendar,
// // // //                     title: "Book Therapy Session",
// // // //                     description: "Connect with licensed professionals",
// // // //                     color: "from-emerald-500 to-green-600", 
// // // //                     action: "book-session",
// // // //                     badge: "Professional"
// // // //                   },
// // // //                   {
// // // //                     icon: BarChart3,
// // // //                     title: "View Progress",
// // // //                     description: "Track your wellness journey",
// // // //                     color: "from-purple-500 to-violet-600",
// // // //                     action: "view-progress", 
// // // //                     badge: "Insights"
// // // //                   },
// // // //                   {
// // // //                     icon: Users,
// // // //                     title: "Find Therapists",
// // // //                     description: "Browse verified mental health experts",
// // // //                     color: "from-pink-500 to-rose-600",
// // // //                     action: "find-therapist",
// // // //                     badge: "Verified"
// // // //                   }
// // // //                 ].map((item, index) => (
// // // //                   <button
// // // //                     key={index}
// // // //                     onClick={() => handleQuickAction(item.action)}
// // // //                     disabled={refreshing}
// // // //                     className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 disabled:opacity-70 disabled:transform-none"
// // // //                   >
// // // //                     <div className="flex items-start space-x-4">
// // // //                       <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
// // // //                         <item.icon className="w-7 h-7 text-white" />
// // // //                       </div>
// // // //                       <div className="flex-1 text-left">
// // // //                         <div className="flex items-center justify-between mb-2">
// // // //                           <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
// // // //                           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
// // // //                             {item.badge}
// // // //                           </span>
// // // //                         </div>
// // // //                         <p className="text-gray-600 text-sm leading-relaxed mb-3">
// // // //                           {item.description}
// // // //                         </p>
// // // //                         <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
// // // //                           <span className="text-sm font-semibold">Get Started</span>
// // // //                           <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   </button>
// // // //                 ))}
// // // //               </div>
// // // //             </div>

// // // //             {/* TODAY'S PROGRESS */}
// // // //             {dashboardData.todayProgress && (
// // // //               <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
// // // //                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
// // // //                   <Target className="w-6 h-6 mr-3 text-emerald-600" />
// // // //                   Today's Wellness Check
// // // //                 </h2>
                
// // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //                   {dashboardData.todayProgress.tip_of_the_day && (
// // // //                     <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6">
// // // //                       <div className="flex items-center mb-4">
// // // //                         <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center mr-3">
// // // //                           <Lightbulb className="w-5 h-5 text-white" />
// // // //                         </div>
// // // //                         <h4 className="font-bold text-yellow-800">Today's Insight</h4>
// // // //                       </div>
// // // //                       <p className="text-yellow-700 leading-relaxed">
// // // //                         {dashboardData.todayProgress.tip_of_the_day}
// // // //                       </p>
// // // //                     </div>
// // // //                   )}
                  
// // // //                   {dashboardData.todayProgress.quote && (
// // // //                     <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
// // // //                       <div className="flex items-center mb-4">
// // // //                         <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mr-3">
// // // //                           <Quote className="w-5 h-5 text-white" />
// // // //                         </div>
// // // //                         <h4 className="font-bold text-purple-800">Daily Inspiration</h4>
// // // //                       </div>
// // // //                       <p className="text-purple-700 italic leading-relaxed">
// // // //                         "{dashboardData.todayProgress.quote}"
// // // //                       </p>
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //           </div>

// // // //           {/* RIGHT SIDEBAR */}
// // // //           <div className="space-y-8">
            
// // // //             {/* RECOVERY TRACKER WIDGET */}
// // // //             {dashboardData.recoveryTracker?.has_tracker && (
// // // //               <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
// // // //                 <div className="bg-gradient-to-r from-emerald-600 to-green-700 p-6 text-white">
// // // //                   <div className="flex items-center justify-between">
// // // //                     <div>
// // // //                       <h3 className="text-xl font-bold mb-1">Recovery Journey</h3>
// // // //                       <p className="text-emerald-100 text-sm">10-Day Wellness Program</p>
// // // //                     </div>
// // // //                     <div className="text-2xl font-bold">
// // // //                       {Math.round(dashboardData.recoveryTracker.tracker?.completion_percentage || 0)}%
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
                
// // // //                 <div className="p-6">
// // // //                   <div className="mb-6">
// // // //                     <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
// // // //                       <span>Progress</span>
// // // //                       <span>
// // // //                         Day {dashboardData.recoveryTracker.tracker?.days_elapsed + 1 || 1} of{' '}
// // // //                         {dashboardData.recoveryTracker.tracker?.total_days || 10}
// // // //                       </span>
// // // //                     </div>
// // // //                     <div className="w-full bg-gray-200 rounded-full h-3">
// // // //                       <div 
// // // //                         className="bg-gradient-to-r from-emerald-500 to-green-600 h-3 rounded-full transition-all duration-1000"
// // // //                         style={{ 
// // // //                           width: `${Math.min(100, dashboardData.recoveryTracker.tracker?.completion_percentage || 0)}%` 
// // // //                         }}
// // // //                       ></div>
// // // //                     </div>
// // // //                   </div>
                  
// // // //                   <div className="space-y-4">
// // // //                     <div className="flex items-center justify-between">
// // // //                       <span className="text-gray-600">Current Focus</span>
// // // //                       <span className="font-semibold text-gray-800">
// // // //                         {dashboardData.recoveryTracker.tracker?.emotion || 'Wellness'}
// // // //                       </span>
// // // //                     </div>
// // // //                     <div className="flex items-center justify-between">
// // // //                       <span className="text-gray-600">Stress Level</span>
// // // //                       <span className={`px-2 py-1 rounded-full text-xs font-bold ${
// // // //                         dashboardData.recoveryTracker.tracker?.stress_level === 'High' 
// // // //                           ? 'bg-red-100 text-red-800'
// // // //                           : dashboardData.recoveryTracker.tracker?.stress_level === 'Medium'
// // // //                           ? 'bg-yellow-100 text-yellow-800'
// // // //                           : 'bg-green-100 text-green-800'
// // // //                       }`}>
// // // //                         {dashboardData.recoveryTracker.tracker?.stress_level || 'Low'}
// // // //                       </span>
// // // //                     </div>
// // // //                   </div>
                  
// // // //                   <button 
// // // //                     onClick={() => navigate('/progress')}
// // // //                     className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-green-700 text-white py-3 rounded-2xl font-semibold hover:from-emerald-700 hover:to-green-800 transition-colors flex items-center justify-center"
// // // //                   >
// // // //                     View Full Progress
// // // //                     <ArrowUpRight className="w-4 h-4 ml-2" />
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             )}

// // // //             {/* MOOD TREND WIDGET */}
// // // //             {moodTrend && (
// // // //               <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-6">
// // // //                 <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
// // // //                   <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
// // // //                   Mood Insights
// // // //                 </h3>
                
// // // //                 <div className="text-center mb-6">
// // // //                   <div className="text-3xl font-bold text-gray-800 mb-2">
// // // //                     {moodTrend.direction === 'up' ? '↗️' : '📊'} {moodTrend.percentage}%
// // // //                   </div>
// // // //                   <p className="text-gray-600">
// // // //                     {moodTrend.direction === 'up' ? 'Improvement' : 'Stable'} this week
// // // //                   </p>
// // // //                 </div>
                
// // // //                 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4">
// // // //                   <p className="text-blue-800 text-sm text-center font-medium">
// // // //                     {moodTrend.direction === 'up' 
// // // //                       ? '🌟 Great progress! Keep up the wellness routine.'
// // // //                       : '💙 Maintaining stability is also progress.'
// // // //                     }
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       </div>
      
// // // //       {/* WELLNESS ACTIVITY MODAL */}
// // // //       <WellnessActivityModal 
// // // //         isOpen={isModalOpen}
// // // //         onClose={() => setIsModalOpen(false)}
// // // //         activity={modalActivity}
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Dashboard;

// // // // Dashboard.js - CORRECTED Horizontal Mood Analytics Card
// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { emotionService } from '../services/emotionService';
// // // import { therapistService } from '../services/therapistService';
// // // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // // import WellnessActivityModal from '../components/modals/WellnessActivityModal';
// // // import EmotionAnalysisDisplay from '../components/ui/EmotionAnalysisDisplay';

// // // import { 
// // //   Brain, 
// // //   Heart, 
// // //   Calendar, 
// // //   TrendingUp, 
// // //   Activity, 
// // //   Users, 
// // //   BookOpen, 
// // //   MessageCircle,
// // //   Target,
// // //   Zap,
// // //   ChevronRight,
// // //   AlertCircle,
// // //   BarChart3,
// // //   Sparkles,
// // //   ArrowUpRight,
// // //   Mic,
// // //   Lightbulb,
// // //   Quote,
// // //   TrendingDown,
// // //   Minus,
// // //   CheckCircle,
// // //   Award,
// // //   AlertTriangle
// // // } from 'lucide-react';

// // // const Dashboard = () => {
// // //   const navigate = useNavigate();
// // //   const [dashboardData, setDashboardData] = useState({
// // //     recoveryTracker: null,
// // //     todayProgress: null,
// // //     userProfile: null,
// // //     recentSessions: [],
// // //     upcomingAppointments: []
// // //   });
// // //   const [progressLogs, setProgressLogs] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState('');
// // //   const [greeting, setGreeting] = useState('');
// // //   const [refreshing, setRefreshing] = useState(false);

// // //   // Modal states
// // //   const [modalActivity, setModalActivity] = useState(null);
// // //   const [isModalOpen, setIsModalOpen] = useState(false);

// // //   useEffect(() => {
// // //     setDynamicGreeting();
// // //     fetchDashboardData();
// // //   }, []);

// // //   const setDynamicGreeting = () => {
// // //     const hour = new Date().getHours();
// // //     if (hour < 12) setGreeting('Good Morning');
// // //     else if (hour < 17) setGreeting('Good Afternoon');
// // //     else setGreeting('Good Evening');
// // //   };

// // //   const fetchDashboardData = async () => {
// // //     try {
// // //       setLoading(true);
// // //       setError('');

// // //       const [recoveryData, profileData, progressData] = await Promise.all([
// // //         emotionService.getActiveRecoveryTracker().catch(() => ({ has_tracker: false })),
// // //         therapistService.getUserProfile().catch(() => null),
// // //         emotionService.getUserProgressLogs().catch(() => [])
// // //       ]);

// // //       let todayProgressData = null;
// // //       try {
// // //         todayProgressData = await emotionService.getTodayProgressLog();
// // //       } catch (err) {
// // //         console.log('No progress log for today yet');
// // //       }

// // //       setDashboardData({
// // //         recoveryTracker: recoveryData,
// // //         todayProgress: todayProgressData,
// // //         userProfile: profileData,
// // //         recentSessions: [],
// // //         upcomingAppointments: []
// // //       });

// // //       setProgressLogs(progressData);

// // //     } catch (err) {
// // //       console.error('Dashboard fetch error:', err);
// // //       setError('Some dashboard data could not be loaded');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleQuickAction = async (action) => {
// // //     setRefreshing(true);

// // //     switch(action) {
// // //       case 'emotion-input':
// // //         navigate('/emotion-input');
// // //         break;
// // //       case 'book-session':
// // //         navigate('/book-session');
// // //         break;
// // //       case 'view-progress':
// // //         navigate('/progress');
// // //         break;
// // //       case 'find-therapist':
// // //         navigate('/therapists');
// // //         break;
// // //       default:
// // //         break;
// // //     }

// // //     setTimeout(() => setRefreshing(false), 1000);
// // //   };

// // //   // Calculate mood insights with graph data
// // //   const calculateRealMoodInsights = () => {
// // //     if (!progressLogs || progressLogs.length === 0) {
// // //       return {
// // //         direction: 'stable',
// // //         percentage: 0,
// // //         consistency: 0,
// // //         weeklyEntries: 0,
// // //         isActiveThisWeek: false,
// // //         totalEntries: 0,
// // //         needsMotivation: true,
// // //         graphData: []
// // //       };
// // //     }

// // //     // Get current week's data
// // //     const today = new Date();
// // //     const startOfWeek = new Date(today);
// // //     startOfWeek.setDate(today.getDate() - today.getDay());
// // //     startOfWeek.setHours(0, 0, 0, 0);

// // //     const endOfWeek = new Date(startOfWeek);
// // //     endOfWeek.setDate(startOfWeek.getDate() + 6);
// // //     endOfWeek.setHours(23, 59, 59, 999);

// // //     // Filter this week's entries
// // //     const thisWeekLogs = progressLogs.filter(log => {
// // //       const logDate = new Date(log.date);
// // //       return logDate >= startOfWeek && logDate <= endOfWeek;
// // //     });

// // //     const weeklyEntries = thisWeekLogs.length;
// // //     const consistency = Math.round((weeklyEntries / 7) * 100);
// // //     const totalEntries = progressLogs.length;
// // //     const isActiveThisWeek = weeklyEntries > 0;

// // //     // Prepare graph data for last 10 days
// // //     const graphData = [];
// // //     for (let i = 9; i >= 0; i--) {
// // //       const date = new Date(today);
// // //       date.setDate(today.getDate() - i);
// // //       date.setHours(0, 0, 0, 0);

// // //       const dayLogs = progressLogs.filter(log => {
// // //         const logDate = new Date(log.date);
// // //         logDate.setHours(0, 0, 0, 0);
// // //         return logDate.getTime() === date.getTime();
// // //       });

// // //       const dayMoodRatings = dayLogs.filter(log => log.mood_rating).map(log => log.mood_rating);
// // //       const averageMood = dayMoodRatings.length > 0 
// // //         ? dayMoodRatings.reduce((a, b) => a + b, 0) / dayMoodRatings.length 
// // //         : 0;

// // //       graphData.push({
// // //         date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
// // //         mood: averageMood,
// // //         entries: dayLogs.length,
// // //         hasData: dayLogs.length > 0
// // //       });
// // //     }

// // //     // Calculate trend
// // //     let direction = 'stable';
// // //     let percentage = 0;

// // //     if (weeklyEntries > 0) {
// // //       const thisWeekMoodRatings = thisWeekLogs
// // //         .filter(log => log.mood_rating)
// // //         .map(log => log.mood_rating);

// // //       const prevWeekStart = new Date(startOfWeek);
// // //       prevWeekStart.setDate(startOfWeek.getDate() - 7);
// // //       const prevWeekEnd = new Date(startOfWeek);
// // //       prevWeekEnd.setDate(startOfWeek.getDate() - 1);

// // //       const prevWeekLogs = progressLogs.filter(log => {
// // //         const logDate = new Date(log.date);
// // //         return logDate >= prevWeekStart && logDate <= prevWeekEnd;
// // //       });

// // //       const prevWeekMoodRatings = prevWeekLogs
// // //         .filter(log => log.mood_rating)
// // //         .map(log => log.mood_rating);

// // //       if (thisWeekMoodRatings.length > 0) {
// // //         const thisWeekAvg = thisWeekMoodRatings.reduce((a, b) => a + b, 0) / thisWeekMoodRatings.length;

// // //         if (prevWeekMoodRatings.length > 0) {
// // //           const prevWeekAvg = prevWeekMoodRatings.reduce((a, b) => a + b, 0) / prevWeekMoodRatings.length;
// // //           const diff = thisWeekAvg - prevWeekAvg;

// // //           if (diff > 0.3) {
// // //             direction = 'up';
// // //             percentage = Math.min(Math.round(Math.abs(diff) * 20), 35);
// // //           } else if (diff < -0.3) {
// // //             direction = 'down';
// // //             percentage = Math.min(Math.round(Math.abs(diff) * 20), 25);
// // //           } else {
// // //             direction = 'stable';
// // //             percentage = Math.round(Math.abs(diff) * 10);
// // //           }
// // //         } else {
// // //           if (thisWeekAvg >= 4) {
// // //             direction = 'up';
// // //             percentage = Math.round(thisWeekAvg * 5);
// // //           } else if (thisWeekAvg <= 2) {
// // //             direction = 'down';
// // //             percentage = Math.round((5 - thisWeekAvg) * 8);
// // //           } else {
// // //             direction = 'stable';
// // //             percentage = 5;
// // //           }
// // //         }
// // //       }
// // //     }

// // //     return {
// // //       direction,
// // //       percentage,
// // //       consistency,
// // //       weeklyEntries,
// // //       isActiveThisWeek,
// // //       totalEntries,
// // //       needsMotivation: weeklyEntries === 0,
// // //       graphData
// // //     };
// // //   };

// // //   // Mini Graph Component - Optimized for Horizontal Layout
// // //   const MoodGraph = ({ data }) => {
// // //     const maxMood = 5;
// // //     const graphHeight = 100;
// // //     const graphWidth = 400;

// // //     if (!data || data.length === 0) {
// // //       return (
// // //         <div className="flex items-center justify-center h-24 bg-gray-50 rounded-lg">
// // //           <p className="text-gray-500 text-sm">No data available</p>
// // //         </div>
// // //       );
// // //     }

// // //     const points = data.map((item, index) => {
// // //       const x = (index / (data.length - 1)) * (graphWidth - 40) + 20;
// // //       const y = graphHeight - 20 - ((item.mood / maxMood) * (graphHeight - 40));
// // //       return `${x},${y}`;
// // //     }).join(' ');

// // //     return (
// // //       <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
// // //         <h5 className="text-sm font-bold text-indigo-800 mb-3">10-Day Mood Trend</h5>
// // //         <div className="relative">
// // //           <svg width={graphWidth} height={graphHeight} className="overflow-visible">
// // //             {/* Grid lines */}
// // //             {[1, 2, 3, 4, 5].map((line) => (
// // //               <line
// // //                 key={line}
// // //                 x1="20"
// // //                 y1={graphHeight - 20 - ((line / maxMood) * (graphHeight - 40))}
// // //                 x2={graphWidth - 20}
// // //                 y2={graphHeight - 20 - ((line / maxMood) * (graphHeight - 40))}
// // //                 stroke="#e5e7eb"
// // //                 strokeWidth="1"
// // //                 strokeDasharray="2,2"
// // //               />
// // //             ))}

// // //             {/* Mood line */}
// // //             <polyline
// // //               fill="none"
// // //               stroke="url(#moodGradient)"
// // //               strokeWidth="3"
// // //               strokeLinecap="round"
// // //               strokeLinejoin="round"
// // //               points={points}
// // //             />

// // //             {/* Data points */}
// // //             {data.map((item, index) => {
// // //               if (!item.hasData) return null;
// // //               const x = (index / (data.length - 1)) * (graphWidth - 40) + 20;
// // //               const y = graphHeight - 20 - ((item.mood / maxMood) * (graphHeight - 40));

// // //               return (
// // //                 <g key={index}>
// // //                   <circle
// // //                     cx={x}
// // //                     cy={y}
// // //                     r="4"
// // //                     fill="white"
// // //                     stroke="#4f46e5"
// // //                     strokeWidth="2"
// // //                     className="hover:r-6 transition-all duration-200 cursor-pointer"
// // //                   />
// // //                   <title>{`${item.date}: ${item.mood.toFixed(1)}/5 (${item.entries} ${item.entries === 1 ? 'entry' : 'entries'})`}</title>
// // //                 </g>
// // //               );
// // //             })}

// // //             {/* Gradient definition */}
// // //             <defs>
// // //               <linearGradient id="moodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
// // //                 <stop offset="0%" stopColor="#4f46e5" />
// // //                 <stop offset="100%" stopColor="#8b5cf6" />
// // //               </linearGradient>
// // //             </defs>

// // //             {/* Y-axis labels */}
// // //             {[1, 2, 3, 4, 5].map((label) => (
// // //               <text
// // //                 key={label}
// // //                 x="15"
// // //                 y={graphHeight - 20 - ((label / maxMood) * (graphHeight - 40)) + 4}
// // //                 fontSize="10"
// // //                 fill="#6b7280"
// // //                 textAnchor="end"
// // //               >
// // //                 {label}
// // //               </text>
// // //             ))}
// // //           </svg>

// // //           {/* X-axis labels */}
// // //           <div className="flex justify-between mt-2 px-5">
// // //             {data.filter((_, index) => index % 2 === 0).map((item, index) => (
// // //               <span key={index} className="text-xs text-gray-500">
// // //                 {item.date}
// // //               </span>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   const moodInsights = calculateRealMoodInsights();

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 flex items-center justify-center">
// // //         <div className="text-center space-y-8">
// // //           <div className="relative">
// // //             <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl mx-auto flex items-center justify-center shadow-2xl animate-pulse">
// // //               <Brain className="w-16 h-16 text-white" />
// // //             </div>
// // //             <div className="absolute -top-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
// // //               <Sparkles className="w-5 h-5 text-white" />
// // //             </div>
// // //           </div>
// // //           <LoadingSpinner size="lg" />
// // //           <div className="space-y-3">
// // //             <h3 className="text-2xl font-bold text-gray-800">Loading Your Wellness Dashboard</h3>
// // //             <p className="text-gray-600 max-w-md mx-auto">Preparing your personalized mental health insights...</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

// // //         {/* PROFESSIONAL HEADER WITH DYNAMIC GREETING */}
// // //         <div className="mb-12">
// // //           <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
// // //             <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 p-8 text-white relative overflow-hidden">
// // //               <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
// // //               <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>

// // //               <div className="relative z-10 flex items-center justify-between">
// // //                 <div>
// // //                   <div className="flex items-center space-x-4 mb-4">
// // //                     <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
// // //                       <Brain className="w-8 h-8 text-white" />
// // //                     </div>
// // //                     <div>
// // //                       <h1 className="text-4xl font-bold mb-2">
// // //                         {greeting}, {dashboardData.userProfile?.username || 'User'}!
// // //                       </h1>
// // //                       <p className="text-blue-100 text-lg">
// // //                         Welcome back to your wellness journey
// // //                       </p>
// // //                     </div>
// // //                   </div>

// // //                   <div className="flex items-center space-x-6">
// // //                     <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl px-4 py-2">
// // //                       <span className="text-emerald-100 text-sm font-bold">
// // //                         Active Since {dashboardData.userProfile?.joined || 'Recently'}
// // //                       </span>
// // //                     </div>
// // //                     {dashboardData.recoveryTracker?.has_tracker && (
// // //                       <div className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl px-4 py-2">
// // //                         <span className="text-yellow-100 text-sm font-bold">
// // //                           Recovery Day {dashboardData.recoveryTracker.tracker?.days_elapsed + 1 || 1}
// // //                         </span>
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 </div>

// // //                 <div className="text-right">
// // //                   <div className="text-3xl font-bold mb-1">
// // //                     {new Date().toLocaleDateString('en-US', { 
// // //                       weekday: 'long',
// // //                       month: 'short', 
// // //                       day: 'numeric'
// // //                     })}
// // //                   </div>
// // //                   <div className="text-blue-100">
// // //                     {new Date().toLocaleTimeString('en-US', { 
// // //                       hour: '2-digit', 
// // //                       minute: '2-digit'
// // //                     })}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Quick Stats Bar */}
// // //             <div className="bg-gradient-to-r from-gray-50 to-indigo-50 p-6">
// // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// // //                 <div className="text-center">
// // //                   <div className="text-2xl font-bold text-gray-900">
// // //                     {moodInsights.totalEntries}
// // //                   </div>
// // //                   <div className="text-sm text-gray-600 font-medium">Mood Entries</div>
// // //                 </div>
// // //                 <div className="text-center">
// // //                   <div className="text-2xl font-bold text-gray-900">
// // //                     {dashboardData.userProfile?.therapy_sessions_count || 0}
// // //                   </div>
// // //                   <div className="text-sm text-gray-600 font-medium">Therapy Sessions</div>
// // //                 </div>
// // //                 <div className="text-center">
// // //                   <div className="text-2xl font-bold text-gray-900">
// // //                     {dashboardData.recoveryTracker?.has_tracker ? 
// // //                       Math.round(dashboardData.recoveryTracker.tracker?.completion_percentage || 0) : 0}%
// // //                   </div>
// // //                   <div className="text-sm text-gray-600 font-medium">Recovery Progress</div>
// // //                 </div>
// // //                 <div className="text-center">
// // //                   <div className="text-2xl font-bold text-emerald-600">98%</div>
// // //                   <div className="text-sm text-gray-600 font-medium">Wellness Score</div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* ERROR DISPLAY */}
// // //         {error && (
// // //           <div className="mb-8 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6">
// // //             <div className="flex items-center">
// // //               <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
// // //               <p className="font-semibold text-red-800">{error}</p>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* ✅ EMOTION ANALYSIS SECTION */}
// // //         <div className="mb-8">
// // //           <EmotionAnalysisDisplay />
// // //         </div>

// // //         {/* 🎯 RECOVERY JOURNEY - HORIZONTAL FULL-WIDTH CARD */}
// // //         {dashboardData.recoveryTracker?.has_tracker && (
// // //           <div className="mb-8">
// // //             <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
// // //               <div className="bg-gradient-to-r from-emerald-600 to-green-700 p-6 text-white">
// // //                 <div className="flex items-center justify-between">
// // //                   <div>
// // //                     <h3 className="text-2xl font-bold mb-1">Recovery Journey</h3>
// // //                     <p className="text-emerald-100 text-lg">10-Day Wellness Program</p>
// // //                   </div>
// // //                   <div className="text-4xl font-bold">
// // //                     {Math.round(dashboardData.recoveryTracker.tracker?.completion_percentage || 0)}%
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="p-8">
// // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //                   {/* Progress Section */}
// // //                   <div className="lg:col-span-2">
// // //                     <div className="mb-6">
// // //                       <div className="flex justify-between text-lg font-medium text-gray-700 mb-4">
// // //                         <span>Progress Overview</span>
// // //                         <span>
// // //                           Day {dashboardData.recoveryTracker.tracker?.days_elapsed + 1 || 1} of{' '}
// // //                           {dashboardData.recoveryTracker.tracker?.total_days || 10}
// // //                         </span>
// // //                       </div>
// // //                       <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
// // //                         <div 
// // //                           className="bg-gradient-to-r from-emerald-500 to-green-600 h-4 rounded-full transition-all duration-1000"
// // //                           style={{ 
// // //                             width: `${Math.min(100, dashboardData.recoveryTracker.tracker?.completion_percentage || 0)}%` 
// // //                           }}
// // //                         ></div>
// // //                       </div>
// // //                       <div className="text-sm text-gray-600">
// // //                         Keep going! You're making excellent progress on your wellness journey.
// // //                       </div>
// // //                     </div>

// // //                     {/* Horizontal Stats */}
// // //                     <div className="grid grid-cols-2 gap-6">
// // //                       <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4">
// // //                         <div className="flex items-center space-x-3">
// // //                           <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
// // //                             <Target className="w-5 h-5 text-white" />
// // //                           </div>
// // //                           <div>
// // //                             <p className="text-sm font-medium text-gray-600">Current Focus</p>
// // //                             <p className="text-lg font-bold text-gray-800">
// // //                               {dashboardData.recoveryTracker.tracker?.emotion || 'Wellness'}
// // //                             </p>
// // //                           </div>
// // //                         </div>
// // //                       </div>

// // //                       <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
// // //                         <div className="flex items-center space-x-3">
// // //                           <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
// // //                             <TrendingUp className="w-5 h-5 text-white" />
// // //                           </div>
// // //                           <div>
// // //                             <p className="text-sm font-medium text-gray-600">Stress Level</p>
// // //                             <p className={`text-lg font-bold ${
// // //                               dashboardData.recoveryTracker.tracker?.stress_level === 'High' 
// // //                                 ? 'text-red-600'
// // //                                 : dashboardData.recoveryTracker.tracker?.stress_level === 'Medium'
// // //                                 ? 'text-yellow-600'
// // //                                 : 'text-green-600'
// // //                             }`}>
// // //                               {dashboardData.recoveryTracker.tracker?.stress_level || 'Low'}
// // //                             </p>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Action Section */}
// // //                   <div className="flex flex-col justify-center">
// // //                     <div className="text-center mb-6">
// // //                       <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
// // //                         <Heart className="w-10 h-10 text-white" />
// // //                       </div>
// // //                       <h4 className="text-xl font-bold text-gray-800 mb-2">You're Doing Great!</h4>
// // //                       <p className="text-gray-600 text-sm">Stay consistent with your wellness routine</p>
// // //                     </div>

// // //                     <button 
// // //                       onClick={() => navigate('/progress')}
// // //                       className="w-full bg-gradient-to-r from-emerald-600 to-green-700 text-white py-4 px-6 rounded-2xl font-semibold hover:from-emerald-700 hover:to-green-800 transition-colors flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
// // //                     >
// // //                       View Full Progress
// // //                       <ArrowUpRight className="w-5 h-5 ml-2" />
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* 📊 HORIZONTAL MOOD ANALYTICS CARD - FULL WIDTH */}
// // //         <div className="mb-8">
// // //           <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
// // //             {/* Header */}
// // //             <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
// // //               <div className="flex items-center justify-between">
// // //                 <div className="flex items-center space-x-3">
// // //                   <BarChart3 className="w-8 h-8" />
// // //                   <div>
// // //                     <h3 className="text-3xl font-bold">Mood Analytics</h3>
// // //                     <p className="text-lg text-indigo-100">Visual insights & trends</p>
// // //                   </div>
// // //                 </div>
// // //                 <div className="text-right">
// // //                   <div className="text-2xl font-bold">This Week</div>
// // //                   <div className="text-indigo-100">{moodInsights.weeklyEntries} entries</div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* HORIZONTAL CONTENT - SIDE BY SIDE LAYOUT */}
// // //             <div className="p-8">
// // //               <div className="flex flex-col lg:flex-row gap-8 items-start">

// // //                 {/* LEFT SIDE - MOOD GRAPH (60% width) */}
// // //                 <div className="w-full lg:w-3/5">
// // //                   <MoodGraph data={moodInsights.graphData} />
// // //                 </div>

// // //                 {/* RIGHT SIDE - STATS & INSIGHTS (40% width) */}
// // //                 <div className="w-full lg:w-2/5 space-y-6">

// // //                   {/* TREND DISPLAY */}
// // //                   {moodInsights.isActiveThisWeek ? (
// // //                     <div className="text-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
// // //                       <div className="flex items-center justify-center mb-4">
// // //                         {moodInsights.direction === 'up' ? (
// // //                           <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
// // //                             <TrendingUp className="w-8 h-8 text-white" />
// // //                           </div>
// // //                         ) : moodInsights.direction === 'down' ? (
// // //                           <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
// // //                             <TrendingDown className="w-8 h-8 text-white" />
// // //                           </div>
// // //                         ) : (
// // //                           <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
// // //                             <Minus className="w-8 h-8 text-white" />
// // //                           </div>
// // //                         )}
// // //                       </div>
// // //                       <div className="text-3xl font-bold text-gray-800 mb-2">
// // //                         {moodInsights.direction === 'up' ? '+' : moodInsights.direction === 'down' ? '-' : ''}
// // //                         {moodInsights.percentage}%
// // //                       </div>
// // //                       <p className="text-gray-600 font-medium">
// // //                         {moodInsights.direction === 'up' 
// // //                           ? 'Mood Improvement' 
// // //                           : moodInsights.direction === 'down'
// // //                           ? 'Need Attention' 
// // //                           : 'Stable Baseline'} this week
// // //                       </p>
// // //                     </div>
// // //                   ) : (
// // //                     <div className="text-center p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-200">
// // //                       <div className="flex items-center justify-center mb-4">
// // //                         <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
// // //                           <AlertTriangle className="w-8 h-8 text-white" />
// // //                         </div>
// // //                       </div>
// // //                       <div className="text-3xl font-bold text-gray-600 mb-2">No Data</div>
// // //                       <p className="text-gray-500 font-medium">No activity this week</p>
// // //                     </div>
// // //                   )}

// // //                   {/* HORIZONTAL STATS */}
// // //                   <div className="grid grid-cols-2 gap-4">
// // //                     <div className={`${moodInsights.consistency > 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-100' : 'bg-gradient-to-r from-red-50 to-orange-50 border-red-100'} rounded-xl p-4 border`}>
// // //                       <div className="flex items-center space-x-2 mb-2">
// // //                         {moodInsights.consistency > 0 ? (
// // //                           <CheckCircle className="w-4 h-4 text-green-600" />
// // //                         ) : (
// // //                           <AlertTriangle className="w-4 h-4 text-red-600" />
// // //                         )}
// // //                         <span className={`text-sm font-semibold ${moodInsights.consistency > 0 ? 'text-green-800' : 'text-red-800'}`}>
// // //                           Consistency
// // //                         </span>
// // //                       </div>
// // //                       <p className={`text-2xl font-bold ${moodInsights.consistency > 0 ? 'text-green-900' : 'text-red-900'}`}>
// // //                         {moodInsights.consistency}%
// // //                       </p>
// // //                       <p className={`text-xs ${moodInsights.consistency > 0 ? 'text-green-700' : 'text-red-700'}`}>
// // //                         {moodInsights.consistency > 0 ? `${moodInsights.weeklyEntries}/7 days` : 'No tracking this week'}
// // //                       </p>
// // //                     </div>

// // //                     <div className={`${moodInsights.weeklyEntries > 0 ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100' : 'bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200'} rounded-xl p-4 border`}>
// // //                       <div className="flex items-center space-x-2 mb-2">
// // //                         <Activity className={`w-4 h-4 ${moodInsights.weeklyEntries > 0 ? 'text-blue-600' : 'text-gray-500'}`} />
// // //                         <span className={`text-sm font-semibold ${moodInsights.weeklyEntries > 0 ? 'text-blue-800' : 'text-gray-700'}`}>
// // //                           Weekly
// // //                         </span>
// // //                       </div>
// // //                       <p className={`text-2xl font-bold ${moodInsights.weeklyEntries > 0 ? 'text-blue-900' : 'text-gray-800'}`}>
// // //                         {moodInsights.weeklyEntries}
// // //                       </p>
// // //                       <p className={`text-xs ${moodInsights.weeklyEntries > 0 ? 'text-blue-700' : 'text-gray-600'}`}>
// // //                         Entries this week
// // //                       </p>
// // //                     </div>
// // //                   </div>

// // //                   {/* MOTIVATIONAL CONTENT */}
// // //                   {moodInsights.needsMotivation ? (
// // //                     <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200">
// // //                       <div className="flex items-center space-x-2 mb-3">
// // //                         <Heart className="w-5 h-5 text-orange-600" />
// // //                         <span className="font-bold text-orange-800">We Miss You!</span>
// // //                       </div>
// // //                       <p className="text-sm text-orange-700 leading-relaxed mb-3">
// // //                         You haven't logged any emotions this week. Regular tracking helps us provide better insights and support your mental wellness journey.
// // //                       </p>
// // //                       <button 
// // //                         onClick={() => navigate('/emotion-input')}
// // //                         className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-colors text-sm"
// // //                       >
// // //                         Start Tracking Today
// // //                       </button>
// // //                     </div>
// // //                   ) : (
// // //                     <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-200">
// // //                       <div className="flex items-center space-x-2 mb-3">
// // //                         <Brain className="w-5 h-5 text-purple-600" />
// // //                         <span className="font-bold text-purple-800">AI Insight</span>
// // //                       </div>
// // //                       <p className="text-sm text-purple-700 leading-relaxed">
// // //                         {moodInsights.direction === 'up' 
// // //                           ? `Excellent progress! You've logged ${moodInsights.weeklyEntries} entries this week with ${moodInsights.consistency}% consistency. Your mood patterns show improvement.`
// // //                           : moodInsights.direction === 'down'
// // //                           ? `I notice some challenges this week. You've been consistent with ${moodInsights.weeklyEntries} entries (${moodInsights.consistency}% rate). Consider booking a therapy session.`
// // //                           : `Your mood remains stable with ${moodInsights.weeklyEntries} entries this week (${moodInsights.consistency}% consistency). Keep up the good tracking habit.`
// // //                         }
// // //                       </p>
// // //                     </div>
// // //                   )}

// // //                   {/* Quick Stats Footer */}
// // //                   <div className="pt-4 border-t border-gray-200">
// // //                     <div className="flex items-center justify-between text-sm text-gray-600">
// // //                       <span>Total Entries: {moodInsights.totalEntries}</span>
// // //                       <div className="flex items-center space-x-1">
// // //                         <Award className="w-4 h-4 text-yellow-500" />
// // //                         <span>Level {Math.floor(moodInsights.totalEntries / 10) + 1} Tracker</span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

// // //           {/* LEFT COLUMN - Main Actions & Today's Progress */}
// // //           <div className="xl:col-span-2 space-y-8">

// // //             {/* QUICK ACTIONS GRID */}
// // //             <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
// // //               <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
// // //                 <Zap className="w-6 h-6 mr-3 text-yellow-600" />
// // //                 Quick Actions
// // //               </h2>

// // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                 {[
// // //                   {
// // //                     icon: Mic,
// // //                     title: "Share Your Feelings",
// // //                     description: "Voice, text, or video emotion analysis",
// // //                     color: "from-blue-500 to-indigo-600",
// // //                     action: "emotion-input",
// // //                     badge: "AI Powered"
// // //                   },
// // //                   {
// // //                     icon: Calendar,
// // //                     title: "Book Therapy Session",
// // //                     description: "Connect with licensed professionals",
// // //                     color: "from-emerald-500 to-green-600", 
// // //                     action: "book-session",
// // //                     badge: "Professional"
// // //                   },
// // //                   {
// // //                     icon: BarChart3,
// // //                     title: "View Progress",
// // //                     description: "Track your wellness journey",
// // //                     color: "from-purple-500 to-violet-600",
// // //                     action: "view-progress", 
// // //                     badge: "Insights"
// // //                   },
// // //                   {
// // //                     icon: Users,
// // //                     title: "Find Therapists",
// // //                     description: "Browse verified mental health experts",
// // //                     color: "from-pink-500 to-rose-600",
// // //                     action: "find-therapist",
// // //                     badge: "Verified"
// // //                   }
// // //                 ].map((item, index) => (
// // //                   <button
// // //                     key={index}
// // //                     onClick={() => handleQuickAction(item.action)}
// // //                     disabled={refreshing}
// // //                     className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 disabled:opacity-70 disabled:transform-none"
// // //                   >
// // //                     <div className="flex items-start space-x-4">
// // //                       <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
// // //                         <item.icon className="w-7 h-7 text-white" />
// // //                       </div>
// // //                       <div className="flex-1 text-left">
// // //                         <div className="flex items-center justify-between mb-2">
// // //                           <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
// // //                           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
// // //                             {item.badge}
// // //                           </span>
// // //                         </div>
// // //                         <p className="text-gray-600 text-sm leading-relaxed mb-3">
// // //                           {item.description}
// // //                         </p>
// // //                         <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
// // //                           <span className="text-sm font-semibold">Get Started</span>
// // //                           <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* TODAY'S PROGRESS */}
// // //             {dashboardData.todayProgress && (
// // //               <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
// // //                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
// // //                   <Target className="w-6 h-6 mr-3 text-emerald-600" />
// // //                   Today's Wellness Check
// // //                 </h2>

// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                   {dashboardData.todayProgress.tip_of_the_day && (
// // //                     <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6">
// // //                       <div className="flex items-center mb-4">
// // //                         <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center mr-3">
// // //                           <Lightbulb className="w-5 h-5 text-white" />
// // //                         </div>
// // //                         <h4 className="font-bold text-yellow-800">Today's Insight</h4>
// // //                       </div>
// // //                       <p className="text-yellow-700 leading-relaxed">
// // //                         {dashboardData.todayProgress.tip_of_the_day}
// // //                       </p>
// // //                     </div>
// // //                   )}

// // //                   {dashboardData.todayProgress.quote && (
// // //                     <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
// // //                       <div className="flex items-center mb-4">
// // //                         <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mr-3">
// // //                           <Quote className="w-5 h-5 text-white" />
// // //                         </div>
// // //                         <h4 className="font-bold text-purple-800">Daily Inspiration</h4>
// // //                       </div>
// // //                       <p className="text-purple-700 italic leading-relaxed">
// // //                         "{dashboardData.todayProgress.quote}"
// // //                       </p>
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>

// // //           {/* RIGHT SIDEBAR - OTHER CONTENT */}
// // //           <div className="space-y-8">
// // //             {/* Any other sidebar content can go here */}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* WELLNESS ACTIVITY MODAL */}
// // //       <WellnessActivityModal 
// // //         isOpen={isModalOpen}
// // //         onClose={() => setIsModalOpen(false)}
// // //         activity={modalActivity}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;
// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { emotionService } from '../services/emotionService';
// // import { therapistService } from '../services/therapistService';
// // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // import WellnessActivityModal from '../components/modals/WellnessActivityModal';
// // import EmotionAnalysisDisplay from '../components/ui/EmotionAnalysisDisplay';

// // import { 
// //   Brain, 
// //   Heart, 
// //   Calendar, 
// //   TrendingUp, 
// //   Activity, 
// //   Users, 
// //   BookOpen, 
// //   MessageCircle,
// //   Target,
// //   Zap,
// //   ChevronRight,
// //   AlertCircle,
// //   BarChart3,
// //   Sparkles,
// //   ArrowUpRight,
// //   Mic,
// //   Lightbulb,
// //   Quote,
// //   TrendingDown,
// //   Minus,
// //   CheckCircle,
// //   Award,
// //   AlertTriangle
// // } from 'lucide-react';

// // const Dashboard = () => {
// //   const navigate = useNavigate();
// //   const [dashboardData, setDashboardData] = useState({
// //     recoveryTracker: null,
// //     todayProgress: null,
// //     userProfile: null,
// //     recentSessions: [],
// //     upcomingAppointments: []
// //   });
// //   const [progressLogs, setProgressLogs] = useState([]); // ADD: Progress logs state
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [greeting, setGreeting] = useState('');
// //   const [refreshing, setRefreshing] = useState(false);
  
// //   // Modal states
// //   const [modalActivity, setModalActivity] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   useEffect(() => {
// //     setDynamicGreeting();
// //     fetchDashboardData();
// //   }, []);

// //   const setDynamicGreeting = () => {
// //     const hour = new Date().getHours();
// //     if (hour < 12) setGreeting('Good Morning');
// //     else if (hour < 17) setGreeting('Good Afternoon');
// //     else setGreeting('Good Evening');
// //   };

// //   const fetchDashboardData = async () => {
// //     try {
// //       setLoading(true);
// //       setError('');
      
// //       const [recoveryData, profileData, progressData] = await Promise.all([
// //         emotionService.getActiveRecoveryTracker().catch(() => ({ has_tracker: false })),
// //         therapistService.getUserProfile().catch(() => null),
// //         emotionService.getUserProgressLogs().catch(() => []) // ADD: Fetch progress logs
// //       ]);

// //       let todayProgressData = null;
// //       try {
// //         todayProgressData = await emotionService.getTodayProgressLog();
// //       } catch (err) {
// //         console.log('No progress log for today yet');
// //       }

// //       setDashboardData({
// //         recoveryTracker: recoveryData,
// //         todayProgress: todayProgressData,
// //         userProfile: profileData,
// //         recentSessions: [],
// //         upcomingAppointments: []
// //       });
      
// //       setProgressLogs(progressData); // ADD: Set progress logs
      
// //     } catch (err) {
// //       console.error('Dashboard fetch error:', err);
// //       setError('Some dashboard data could not be loaded');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleQuickAction = async (action) => {
// //     setRefreshing(true);
    
// //     switch(action) {
// //       case 'emotion-input':
// //         navigate('/emotion-input');
// //         break;
// //       case 'book-session':
// //         navigate('/book-session');
// //         break;
// //       case 'view-progress':
// //         navigate('/progress');
// //         break;
// //       case 'find-therapist':
// //         navigate('/therapists');
// //         break;
// //       default:
// //         break;
// //     }
    
// //     setTimeout(() => setRefreshing(false), 1000);
// //   };

// //   // UPDATE: Calculate real mood insights from progress logs
// //   const calculateRealMoodInsights = () => {
// //     if (!progressLogs || progressLogs.length === 0) {
// //       return {
// //         direction: 'stable',
// //         percentage: 0,
// //         consistency: 0,
// //         weeklyEntries: 0,
// //         isActiveThisWeek: false,
// //         totalEntries: 0,
// //         needsMotivation: true
// //       };
// //     }

// //     // Get current week's data
// //     const today = new Date();
// //     const startOfWeek = new Date(today);
// //     startOfWeek.setDate(today.getDate() - today.getDay()); // Start of this week (Sunday)
// //     startOfWeek.setHours(0, 0, 0, 0);

// //     const endOfWeek = new Date(startOfWeek);
// //     endOfWeek.setDate(startOfWeek.getDate() + 6); // End of this week (Saturday)
// //     endOfWeek.setHours(23, 59, 59, 999);

// //     // Filter this week's entries
// //     const thisWeekLogs = progressLogs.filter(log => {
// //       const logDate = new Date(log.date);
// //       return logDate >= startOfWeek && logDate <= endOfWeek;
// //     });

// //     const weeklyEntries = thisWeekLogs.length;
// //     const consistency = Math.round((weeklyEntries / 7) * 100); // Out of 7 days
// //     const totalEntries = progressLogs.length;
// //     const isActiveThisWeek = weeklyEntries > 0;

// //     // Calculate trend based on mood ratings
// //     let direction = 'stable';
// //     let percentage = 0;

// //     if (weeklyEntries > 0) {
// //       // Get this week's average mood
// //       const thisWeekMoodRatings = thisWeekLogs
// //         .filter(log => log.mood_rating)
// //         .map(log => log.mood_rating);

// //       // Get previous week's average mood for comparison
// //       const prevWeekStart = new Date(startOfWeek);
// //       prevWeekStart.setDate(startOfWeek.getDate() - 7);
// //       const prevWeekEnd = new Date(startOfWeek);
// //       prevWeekEnd.setDate(startOfWeek.getDate() - 1);

// //       const prevWeekLogs = progressLogs.filter(log => {
// //         const logDate = new Date(log.date);
// //         return logDate >= prevWeekStart && logDate <= prevWeekEnd;
// //       });

// //       const prevWeekMoodRatings = prevWeekLogs
// //         .filter(log => log.mood_rating)
// //         .map(log => log.mood_rating);

// //       if (thisWeekMoodRatings.length > 0) {
// //         const thisWeekAvg = thisWeekMoodRatings.reduce((a, b) => a + b, 0) / thisWeekMoodRatings.length;
        
// //         if (prevWeekMoodRatings.length > 0) {
// //           const prevWeekAvg = prevWeekMoodRatings.reduce((a, b) => a + b, 0) / prevWeekMoodRatings.length;
// //           const diff = thisWeekAvg - prevWeekAvg;
          
// //           if (diff > 0.3) {
// //             direction = 'up';
// //             percentage = Math.min(Math.round(Math.abs(diff) * 20), 35); // Convert to percentage
// //           } else if (diff < -0.3) {
// //             direction = 'down';
// //             percentage = Math.min(Math.round(Math.abs(diff) * 20), 25);
// //           } else {
// //             direction = 'stable';
// //             percentage = Math.round(Math.abs(diff) * 10);
// //           }
// //         } else {
// //           // No previous week data, base on current week average
// //           if (thisWeekAvg >= 4) {
// //             direction = 'up';
// //             percentage = Math.round(thisWeekAvg * 5); // 15-25%
// //           } else if (thisWeekAvg <= 2) {
// //             direction = 'down';
// //             percentage = Math.round((5 - thisWeekAvg) * 8); // 16-24%
// //           } else {
// //             direction = 'stable';
// //             percentage = 5;
// //           }
// //         }
// //       }
// //     }

// //     return {
// //       direction,
// //       percentage,
// //       consistency,
// //       weeklyEntries,
// //       isActiveThisWeek,
// //       totalEntries,
// //       needsMotivation: weeklyEntries === 0,
// //       thisWeekLogs // Include for debugging
// //     };
// //   };

// //   const moodInsights = calculateRealMoodInsights();

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 flex items-center justify-center">
// //         <div className="text-center space-y-8">
// //           <div className="relative">
// //             <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl mx-auto flex items-center justify-center shadow-2xl animate-pulse">
// //               <Brain className="w-16 h-16 text-white" />
// //             </div>
// //             <div className="absolute -top-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
// //               <Sparkles className="w-5 h-5 text-white" />
// //             </div>
// //           </div>
// //           <LoadingSpinner size="lg" />
// //           <div className="space-y-3">
// //             <h3 className="text-2xl font-bold text-gray-800">Loading Your Wellness Dashboard</h3>
// //             <p className="text-gray-600 max-w-md mx-auto">Preparing your personalized mental health insights...</p>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
// //         {/* PROFESSIONAL HEADER WITH DYNAMIC GREETING */}
// //         <div className="mb-12">
// //           <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
// //             <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 p-8 text-white relative overflow-hidden">
// //               <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
// //               <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
              
// //               <div className="relative z-10 flex items-center justify-between">
// //                 <div>
// //                   <div className="flex items-center space-x-4 mb-4">
// //                     <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
// //                       <Brain className="w-8 h-8 text-white" />
// //                     </div>
// //                     <div>
// //                       <h1 className="text-4xl font-bold mb-2">
// //                         {greeting}, {dashboardData.userProfile?.username || 'User'}!
// //                       </h1>
// //                       <p className="text-blue-100 text-lg">
// //                         Welcome back to your wellness journey
// //                       </p>
// //                     </div>
// //                   </div>
                  
// //                   <div className="flex items-center space-x-6">
// //                     <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl px-4 py-2">
// //                       <span className="text-emerald-100 text-sm font-bold">
// //                         Active Since {dashboardData.userProfile?.joined || 'Recently'}
// //                       </span>
// //                     </div>
// //                     {dashboardData.recoveryTracker?.has_tracker && (
// //                       <div className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl px-4 py-2">
// //                         <span className="text-yellow-100 text-sm font-bold">
// //                           Recovery Day {dashboardData.recoveryTracker.tracker?.days_elapsed + 1 || 1}
// //                         </span>
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>
                
// //                 <div className="text-right">
// //                   <div className="text-3xl font-bold mb-1">
// //                     {new Date().toLocaleDateString('en-US', { 
// //                       weekday: 'long',
// //                       month: 'short', 
// //                       day: 'numeric'
// //                     })}
// //                   </div>
// //                   <div className="text-blue-100">
// //                     {new Date().toLocaleTimeString('en-US', { 
// //                       hour: '2-digit', 
// //                       minute: '2-digit'
// //                     })}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Quick Stats Bar - Updated with real total entries */}
// //             <div className="bg-gradient-to-r from-gray-50 to-indigo-50 p-6">
// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //                 <div className="text-center">
// //                   <div className="text-2xl font-bold text-gray-900">
// //                     {moodInsights.totalEntries}
// //                   </div>
// //                   <div className="text-sm text-gray-600 font-medium">Mood Entries</div>
// //                 </div>
// //                 <div className="text-center">
// //                   <div className="text-2xl font-bold text-gray-900">
// //                     {dashboardData.userProfile?.therapy_sessions_count || 0}
// //                   </div>
// //                   <div className="text-sm text-gray-600 font-medium">Therapy Sessions</div>
// //                 </div>
// //                 <div className="text-center">
// //                   <div className="text-2xl font-bold text-gray-900">
// //                     {dashboardData.recoveryTracker?.has_tracker ? 
// //                       Math.round(dashboardData.recoveryTracker.tracker?.completion_percentage || 0) : 0}%
// //                   </div>
// //                   <div className="text-sm text-gray-600 font-medium">Recovery Progress</div>
// //                 </div>
// //                 <div className="text-center">
// //                   <div className="text-2xl font-bold text-emerald-600">98%</div>
// //                   <div className="text-sm text-gray-600 font-medium">Wellness Score</div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ERROR DISPLAY */}
// //         {error && (
// //           <div className="mb-8 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6">
// //             <div className="flex items-center">
// //               <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
// //               <p className="font-semibold text-red-800">{error}</p>
// //             </div>
// //           </div>
// //         )}

// //         {/* ✅ EMOTION ANALYSIS SECTION */}
// //         <div className="mb-8">
// //           <EmotionAnalysisDisplay />
// //         </div>

// //         {/* 🎯 RECOVERY JOURNEY - HORIZONTAL FULL-WIDTH CARD */}
// //         {dashboardData.recoveryTracker?.has_tracker && (
// //           <div className="mb-8">
// //             <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
// //               <div className="bg-gradient-to-r from-emerald-600 to-green-700 p-6 text-white">
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <h3 className="text-2xl font-bold mb-1">Recovery Journey</h3>
// //                     <p className="text-emerald-100 text-lg">10-Day Wellness Program</p>
// //                   </div>
// //                   <div className="text-4xl font-bold">
// //                     {Math.round(dashboardData.recoveryTracker.tracker?.completion_percentage || 0)}%
// //                   </div>
// //                 </div>
// //               </div>
              
// //               <div className="p-8">
// //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //                   {/* Progress Section */}
// //                   <div className="lg:col-span-2">
// //                     <div className="mb-6">
// //                       <div className="flex justify-between text-lg font-medium text-gray-700 mb-4">
// //                         <span>Progress Overview</span>
// //                         <span>
// //                           Day {dashboardData.recoveryTracker.tracker?.days_elapsed + 1 || 1} of{' '}
// //                           {dashboardData.recoveryTracker.tracker?.total_days || 10}
// //                         </span>
// //                       </div>
// //                       <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
// //                         <div 
// //                           className="bg-gradient-to-r from-emerald-500 to-green-600 h-4 rounded-full transition-all duration-1000"
// //                           style={{ 
// //                             width: `${Math.min(100, dashboardData.recoveryTracker.tracker?.completion_percentage || 0)}%` 
// //                           }}
// //                         ></div>
// //                       </div>
// //                       <div className="text-sm text-gray-600">
// //                         Keep going! You're making excellent progress on your wellness journey.
// //                       </div>
// //                     </div>
                    
// //                     {/* Horizontal Stats */}
// //                     <div className="grid grid-cols-2 gap-6">
// //                       <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4">
// //                         <div className="flex items-center space-x-3">
// //                           <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
// //                             <Target className="w-5 h-5 text-white" />
// //                           </div>
// //                           <div>
// //                             <p className="text-sm font-medium text-gray-600">Current Focus</p>
// //                             <p className="text-lg font-bold text-gray-800">
// //                               {dashboardData.recoveryTracker.tracker?.emotion || 'Wellness'}
// //                             </p>
// //                           </div>
// //                         </div>
// //                       </div>
                      
// //                       <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
// //                         <div className="flex items-center space-x-3">
// //                           <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
// //                             <TrendingUp className="w-5 h-5 text-white" />
// //                           </div>
// //                           <div>
// //                             <p className="text-sm font-medium text-gray-600">Stress Level</p>
// //                             <p className={`text-lg font-bold ${
// //                               dashboardData.recoveryTracker.tracker?.stress_level === 'High' 
// //                                 ? 'text-red-600'
// //                                 : dashboardData.recoveryTracker.tracker?.stress_level === 'Medium'
// //                                 ? 'text-yellow-600'
// //                                 : 'text-green-600'
// //                             }`}>
// //                               {dashboardData.recoveryTracker.tracker?.stress_level || 'Low'}
// //                             </p>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
                  
// //                   {/* Action Section */}
// //                   <div className="flex flex-col justify-center">
// //                     <div className="text-center mb-6">
// //                       <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
// //                         <Heart className="w-10 h-10 text-white" />
// //                       </div>
// //                       <h4 className="text-xl font-bold text-gray-800 mb-2">You're Doing Great!</h4>
// //                       <p className="text-gray-600 text-sm">Stay consistent with your wellness routine</p>
// //                     </div>
                    
// //                     <button 
// //                       onClick={() => navigate('/progress')}
// //                       className="w-full bg-gradient-to-r from-emerald-600 to-green-700 text-white py-4 px-6 rounded-2xl font-semibold hover:from-emerald-700 hover:to-green-800 transition-colors flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
// //                     >
// //                       View Full Progress
// //                       <ArrowUpRight className="w-5 h-5 ml-2" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
// //           {/* LEFT COLUMN - Main Actions & Today's Progress */}
// //           <div className="xl:col-span-2 space-y-8">
            
// //             {/* QUICK ACTIONS GRID */}
// //             <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
// //               <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
// //                 <Zap className="w-6 h-6 mr-3 text-yellow-600" />
// //                 Quick Actions
// //               </h2>
              
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 {[
// //                   {
// //                     icon: Mic,
// //                     title: "Share Your Feelings",
// //                     description: "Voice, text, or video emotion analysis",
// //                     color: "from-blue-500 to-indigo-600",
// //                     action: "emotion-input",
// //                     badge: "AI Powered"
// //                   },
// //                   {
// //                     icon: Calendar,
// //                     title: "Book Therapy Session",
// //                     description: "Connect with licensed professionals",
// //                     color: "from-emerald-500 to-green-600", 
// //                     action: "book-session",
// //                     badge: "Professional"
// //                   },
// //                   {
// //                     icon: BarChart3,
// //                     title: "View Progress",
// //                     description: "Track your wellness journey",
// //                     color: "from-purple-500 to-violet-600",
// //                     action: "view-progress", 
// //                     badge: "Insights"
// //                   },
// //                   {
// //                     icon: Users,
// //                     title: "Find Therapists",
// //                     description: "Browse verified mental health experts",
// //                     color: "from-pink-500 to-rose-600",
// //                     action: "find-therapist",
// //                     badge: "Verified"
// //                   }
// //                 ].map((item, index) => (
// //                   <button
// //                     key={index}
// //                     onClick={() => handleQuickAction(item.action)}
// //                     disabled={refreshing}
// //                     className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 disabled:opacity-70 disabled:transform-none"
// //                   >
// //                     <div className="flex items-start space-x-4">
// //                       <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
// //                         <item.icon className="w-7 h-7 text-white" />
// //                       </div>
// //                       <div className="flex-1 text-left">
// //                         <div className="flex items-center justify-between mb-2">
// //                           <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
// //                           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
// //                             {item.badge}
// //                           </span>
// //                         </div>
// //                         <p className="text-gray-600 text-sm leading-relaxed mb-3">
// //                           {item.description}
// //                         </p>
// //                         <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
// //                           <span className="text-sm font-semibold">Get Started</span>
// //                           <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* TODAY'S PROGRESS */}
// //             {dashboardData.todayProgress && (
// //               <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
// //                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
// //                   <Target className="w-6 h-6 mr-3 text-emerald-600" />
// //                   Today's Wellness Check
// //                 </h2>
                
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   {dashboardData.todayProgress.tip_of_the_day && (
// //                     <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6">
// //                       <div className="flex items-center mb-4">
// //                         <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center mr-3">
// //                           <Lightbulb className="w-5 h-5 text-white" />
// //                         </div>
// //                         <h4 className="font-bold text-yellow-800">Today's Insight</h4>
// //                       </div>
// //                       <p className="text-yellow-700 leading-relaxed">
// //                         {dashboardData.todayProgress.tip_of_the_day}
// //                       </p>
// //                     </div>
// //                   )}
                  
// //                   {dashboardData.todayProgress.quote && (
// //                     <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
// //                       <div className="flex items-center mb-4">
// //                         <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mr-3">
// //                           <Quote className="w-5 h-5 text-white" />
// //                         </div>
// //                         <h4 className="font-bold text-purple-800">Daily Inspiration</h4>
// //                       </div>
// //                       <p className="text-purple-700 italic leading-relaxed">
// //                         "{dashboardData.todayProgress.quote}"
// //                       </p>
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           {/* RIGHT SIDEBAR */}
// //           <div className="space-y-8">
            
// //             {/* 📊 REAL MOOD INSIGHTS - CALCULATED FROM PROGRESS LOGS */}
// //             <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-6 overflow-hidden">
// //               {/* Header */}
// //               <div className="flex items-center justify-between mb-6">
// //                 <div className="flex items-center space-x-3">
// //                   <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-full">
// //                     <BarChart3 className="w-6 h-6 text-white" />
// //                   </div>
// //                   <div>
// //                     <h3 className="text-xl font-bold text-gray-800">Mood Analytics</h3>
// //                     <p className="text-sm text-gray-600">Real-time insights from your data</p>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* REAL Trend Display */}
// //               {moodInsights.isActiveThisWeek ? (
// //                 <div className="text-center mb-6 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
// //                   <div className="flex items-center justify-center mb-4">
// //                     {moodInsights.direction === 'up' ? (
// //                       <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
// //                         <TrendingUp className="w-8 h-8 text-white" />
// //                       </div>
// //                     ) : moodInsights.direction === 'down' ? (
// //                       <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
// //                         <TrendingDown className="w-8 h-8 text-white" />
// //                       </div>
// //                     ) : (
// //                       <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
// //                         <Minus className="w-8 h-8 text-white" />
// //                       </div>
// //                     )}
// //                   </div>
// //                   <div className="text-3xl font-bold text-gray-800 mb-2">
// //                     {moodInsights.direction === 'up' ? '+' : moodInsights.direction === 'down' ? '-' : ''}
// //                     {moodInsights.percentage}%
// //                   </div>
// //                   <p className="text-gray-600 font-medium">
// //                     {moodInsights.direction === 'up' 
// //                       ? 'Mood Improvement' 
// //                       : moodInsights.direction === 'down'
// //                       ? 'Need Attention' 
// //                       : 'Stable Baseline'} this week
// //                   </p>
// //                 </div>
// //               ) : (
// //                 <div className="text-center mb-6 p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200">
// //                   <div className="flex items-center justify-center mb-4">
// //                     <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
// //                       <AlertTriangle className="w-8 h-8 text-white" />
// //                     </div>
// //                   </div>
// //                   <div className="text-3xl font-bold text-gray-600 mb-2">No Data</div>
// //                   <p className="text-gray-500 font-medium">No activity this week</p>
// //                 </div>
// //               )}

// //               {/* REAL Analytics Grid */}
// //               <div className="grid grid-cols-2 gap-4 mb-6">
// //                 <div className={`${moodInsights.consistency > 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-100' : 'bg-gradient-to-r from-red-50 to-orange-50 border-red-100'} rounded-xl p-4 border`}>
// //                   <div className="flex items-center space-x-2 mb-2">
// //                     {moodInsights.consistency > 0 ? (
// //                       <CheckCircle className="w-4 h-4 text-green-600" />
// //                     ) : (
// //                       <AlertTriangle className="w-4 h-4 text-red-600" />
// //                     )}
// //                     <span className={`text-sm font-semibold ${moodInsights.consistency > 0 ? 'text-green-800' : 'text-red-800'}`}>
// //                       Consistency
// //                     </span>
// //                   </div>
// //                   <p className={`text-2xl font-bold ${moodInsights.consistency > 0 ? 'text-green-900' : 'text-red-900'}`}>
// //                     {moodInsights.consistency}%
// //                   </p>
// //                   <p className={`text-xs ${moodInsights.consistency > 0 ? 'text-green-700' : 'text-red-700'}`}>
// //                     {moodInsights.consistency > 0 ? `${moodInsights.weeklyEntries}/7 days` : 'No tracking this week'}
// //                   </p>
// //                 </div>
                
// //                 <div className={`${moodInsights.weeklyEntries > 0 ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100' : 'bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200'} rounded-xl p-4 border`}>
// //                   <div className="flex items-center space-x-2 mb-2">
// //                     <Activity className={`w-4 h-4 ${moodInsights.weeklyEntries > 0 ? 'text-blue-600' : 'text-gray-500'}`} />
// //                     <span className={`text-sm font-semibold ${moodInsights.weeklyEntries > 0 ? 'text-blue-800' : 'text-gray-700'}`}>
// //                       Weekly
// //                     </span>
// //                   </div>
// //                   <p className={`text-2xl font-bold ${moodInsights.weeklyEntries > 0 ? 'text-blue-900' : 'text-gray-800'}`}>
// //                     {moodInsights.weeklyEntries}
// //                   </p>
// //                   <p className={`text-xs ${moodInsights.weeklyEntries > 0 ? 'text-blue-700' : 'text-gray-600'}`}>
// //                     Entries this week
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* DYNAMIC Motivational Content */}
// //               {moodInsights.needsMotivation ? (
// //                 <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200 mb-6">
// //                   <div className="flex items-center space-x-2 mb-3">
// //                     <Heart className="w-5 h-5 text-orange-600" />
// //                     <span className="font-bold text-orange-800">We Miss You!</span>
// //                   </div>
// //                   <p className="text-sm text-orange-700 leading-relaxed mb-3">
// //                     You haven't logged any emotions this week. Regular tracking helps us provide better insights and support your mental wellness journey.
// //                   </p>
// //                   <button 
// //                     onClick={() => navigate('/emotion-input')}
// //                     className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-colors text-sm"
// //                   >
// //                     Start Tracking Today
// //                   </button>
// //                 </div>
// //               ) : (
// //                 <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-200 mb-6">
// //                   <div className="flex items-center space-x-2 mb-3">
// //                     <Brain className="w-5 h-5 text-purple-600" />
// //                     <span className="font-bold text-purple-800">AI Insight</span>
// //                   </div>
// //                   <p className="text-sm text-purple-700 leading-relaxed">
// //                     {moodInsights.direction === 'up' 
// //                       ? `Excellent progress! You've logged ${moodInsights.weeklyEntries} entries this week with ${moodInsights.consistency}% consistency. Your mood patterns show improvement.`
// //                       : moodInsights.direction === 'down'
// //                       ? `I notice some challenges this week. You've been consistent with ${moodInsights.weeklyEntries} entries (${moodInsights.consistency}% rate). Consider booking a therapy session.`
// //                       : `Your mood remains stable with ${moodInsights.weeklyEntries} entries this week (${moodInsights.consistency}% consistency). Keep up the good tracking habit.`
// //                     }
// //                   </p>
// //                 </div>
// //               )}

// //               {/* Quick Stats Footer */}
// //               <div className="pt-4 border-t border-gray-200">
// //                 <div className="flex items-center justify-between text-sm text-gray-600">
// //                   <span>Total Entries: {moodInsights.totalEntries}</span>
// //                   <div className="flex items-center space-x-1">
// //                     <Award className="w-4 h-4 text-gold-500" />
// //                     <span>Level {Math.floor(moodInsights.totalEntries / 10) + 1} Tracker</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
      
// //       {/* WELLNESS ACTIVITY MODAL */}
// //       <WellnessActivityModal 
// //         isOpen={isModalOpen}
// //         onClose={() => setIsModalOpen(false)}
// //         activity={modalActivity}
// //       />
// //     </div>
// //   );
// // };

// // export default Dashboard;
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { emotionService } from '../services/emotionService';
// import { therapistService } from '../services/therapistService';
// import LoadingSpinner from '../components/ui/LoadingSpinner';
// import WellnessActivityModal from '../components/modals/WellnessActivityModal';
// import EmotionAnalysisDisplay from '../components/ui/EmotionAnalysisDisplay';

// // ADD: Import Recharts components for dynamic visualization
// import { 
//   LineChart, 
//   Line, 
//   AreaChart, 
//   Area, 
//   BarChart, 
//   Bar,
//   XAxis, 
//   YAxis, 
//   CartesianGrid, 
//   Tooltip, 
//   ResponsiveContainer, 
//   PieChart, 
//   Pie, 
//   Cell,
//   Legend
// } from 'recharts';

// import { 
//   Brain, 
//   Heart, 
//   Calendar, 
//   TrendingUp, 
//   Activity, 
//   Users, 
//   BookOpen, 
//   MessageCircle,
//   Target,
//   Zap,
//   ChevronRight,
//   AlertCircle,
//   BarChart3,
//   Sparkles,
//   ArrowUpRight,
//   Mic,
//   Lightbulb,
//   Quote,
//   TrendingDown,
//   Minus,
//   CheckCircle,
//   Award,
//   AlertTriangle,
//   // ADD: New icons for chart controls
//   Eye,
//   BarChart2,
//   PieChart as PieChartIcon,
//   TrendingDown as TrendingDownIcon
// } from 'lucide-react';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [dashboardData, setDashboardData] = useState({
//     recoveryTracker: null,
//     todayProgress: null,
//     userProfile: null,
//     recentSessions: [],
//     upcomingAppointments: []
//   });
//   const [progressLogs, setProgressLogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [greeting, setGreeting] = useState('');
//   const [refreshing, setRefreshing] = useState(false);
  
//   // ADD: Chart configuration states
//   const [chartType, setChartType] = useState('line'); // line, area, bar, pie
//   const [timeRange, setTimeRange] = useState('week'); // week, month, all
  
//   // Modal states
//   const [modalActivity, setModalActivity] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     setDynamicGreeting();
//     fetchDashboardData();
//   }, []);

//   const setDynamicGreeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) setGreeting('Good Morning');
//     else if (hour < 17) setGreeting('Good Afternoon');
//     else setGreeting('Good Evening');
//   };

//   const fetchDashboardData = async () => {
//     try {
//       setLoading(true);
//       setError('');
      
//       const [recoveryData, profileData, progressData] = await Promise.all([
//         emotionService.getActiveRecoveryTracker().catch(() => ({ has_tracker: false })),
//         therapistService.getUserProfile().catch(() => null),
//         emotionService.getUserProgressLogs().catch(() => [])
//       ]);

//       let todayProgressData = null;
//       try {
//         todayProgressData = await emotionService.getTodayProgressLog();
//       } catch (err) {
//         console.log('No progress log for today yet');
//       }

//       setDashboardData({
//         recoveryTracker: recoveryData,
//         todayProgress: todayProgressData,
//         userProfile: profileData,
//         recentSessions: [],
//         upcomingAppointments: []
//       });
      
//       setProgressLogs(progressData);
      
//     } catch (err) {
//       console.error('Dashboard fetch error:', err);
//       setError('Some dashboard data could not be loaded');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleQuickAction = async (action) => {
//     setRefreshing(true);
    
//     switch(action) {
//       case 'emotion-input':
//         navigate('/emotion-input');
//         break;
//       case 'book-session':
//         navigate('/book-session');
//         break;
//       case 'view-progress':
//         navigate('/progress');
//         break;
//       case 'find-therapist':
//         navigate('/therapists');
//         break;
//       default:
//         break;
//     }
    
//     setTimeout(() => setRefreshing(false), 1000);
//   };

//   // UPDATE: Calculate real mood insights from progress logs
//   const calculateRealMoodInsights = () => {
//     if (!progressLogs || progressLogs.length === 0) {
//       return {
//         direction: 'stable',
//         percentage: 0,
//         consistency: 0,
//         weeklyEntries: 0,
//         isActiveThisWeek: false,
//         totalEntries: 0,
//         needsMotivation: true
//       };
//     }

//     const today = new Date();
//     const startOfWeek = new Date(today);
//     startOfWeek.setDate(today.getDate() - today.getDay());
//     startOfWeek.setHours(0, 0, 0, 0);
//     const endOfWeek = new Date(startOfWeek);
//     endOfWeek.setDate(startOfWeek.getDate() + 6);
//     endOfWeek.setHours(23, 59, 59, 999);

//     const thisWeekLogs = progressLogs.filter(log => {
//       const logDate = new Date(log.date);
//       return logDate >= startOfWeek && logDate <= endOfWeek;
//     });

//     const weeklyEntries = thisWeekLogs.length;
//     const consistency = Math.round((weeklyEntries / 7) * 100);
//     const totalEntries = progressLogs.length;
//     const isActiveThisWeek = weeklyEntries > 0;

//     let direction = 'stable';
//     let percentage = 0;

//     if (weeklyEntries > 0) {
//       const thisWeekMoodRatings = thisWeekLogs
//         .filter(log => log.mood_rating)
//         .map(log => log.mood_rating);

//       const prevWeekStart = new Date(startOfWeek);
//       prevWeekStart.setDate(startOfWeek.getDate() - 7);
//       const prevWeekEnd = new Date(startOfWeek);
//       prevWeekEnd.setDate(startOfWeek.getDate() - 1);

//       const prevWeekLogs = progressLogs.filter(log => {
//         const logDate = new Date(log.date);
//         return logDate >= prevWeekStart && logDate <= prevWeekEnd;
//       });

//       const prevWeekMoodRatings = prevWeekLogs
//         .filter(log => log.mood_rating)
//         .map(log => log.mood_rating);

//       if (thisWeekMoodRatings.length > 0) {
//         const thisWeekAvg = thisWeekMoodRatings.reduce((a, b) => a + b, 0) / thisWeekMoodRatings.length;
        
//         if (prevWeekMoodRatings.length > 0) {
//           const prevWeekAvg = prevWeekMoodRatings.reduce((a, b) => a + b, 0) / prevWeekMoodRatings.length;
//           const diff = thisWeekAvg - prevWeekAvg;
          
//           if (diff > 0.3) {
//             direction = 'up';
//             percentage = Math.min(Math.round(Math.abs(diff) * 20), 35);
//           } else if (diff < -0.3) {
//             direction = 'down';
//             percentage = Math.min(Math.round(Math.abs(diff) * 20), 25);
//           } else {
//             direction = 'stable';
//             percentage = Math.round(Math.abs(diff) * 10);
//           }
//         } else {
//           if (thisWeekAvg >= 4) {
//             direction = 'up';
//             percentage = Math.round(thisWeekAvg * 5);
//           } else if (thisWeekAvg <= 2) {
//             direction = 'down';
//             percentage = Math.round((5 - thisWeekAvg) * 8);
//           } else {
//             direction = 'stable';
//             percentage = 5;
//           }
//         }
//       }
//     }

//     return {
//       direction,
//       percentage,
//       consistency,
//       weeklyEntries,
//       isActiveThisWeek,
//       totalEntries,
//       needsMotivation: weeklyEntries === 0,
//       thisWeekLogs
//     };
//   };

//   // ADD: Prepare chart data based on time range and chart type
//   const prepareChartData = () => {
//     if (!progressLogs || progressLogs.length === 0) {
//       // Return sample data if no progress logs exist
//       return { 
//         chartData: [
//           { date: 'Mon', mood: 3, stress: 2, wellness: 3.5, emotion: 'neutral' },
//           { date: 'Tue', mood: 4, stress: 1, wellness: 4.2, emotion: 'happy' },
//           { date: 'Wed', mood: 2, stress: 4, wellness: 2.8, emotion: 'sad' },
//           { date: 'Thu', mood: 3, stress: 3, wellness: 3.1, emotion: 'neutral' },
//           { date: 'Fri', mood: 5, stress: 1, wellness: 4.8, emotion: 'excited' }
//         ], 
//         pieData: [
//           { name: 'Happy', value: 40, percentage: 40 },
//           { name: 'Neutral', value: 30, percentage: 30 },
//           { name: 'Sad', value: 20, percentage: 20 },
//           { name: 'Anxious', value: 10, percentage: 10 }
//         ] 
//       };
//     }

//     const now = new Date();
//     let filteredLogs = [...progressLogs];

//     // Filter by time range
//     if (timeRange === 'week') {
//       const weekAgo = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
//       filteredLogs = progressLogs.filter(log => new Date(log.date) >= weekAgo);
//     } else if (timeRange === 'month') {
//       const monthAgo = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000));
//       filteredLogs = progressLogs.filter(log => new Date(log.date) >= monthAgo);
//     }

//     // Prepare line/area/bar chart data
//     const chartData = filteredLogs
//       .sort((a, b) => new Date(a.date) - new Date(b.date))
//       .map((log, index) => ({
//         date: new Date(log.date).toLocaleDateString('en-US', { 
//           month: 'short', 
//           day: 'numeric' 
//         }),
//         mood: log.mood_rating || 0,
//         stress: log.stress_level === 'High' ? 5 : log.stress_level === 'Medium' ? 3 : 1,
//         wellness: Math.max(1, Math.min(5, (log.mood_rating || 0) + Math.random() * 1)),
//         fullDate: log.date,
//         emotion: log.emotion || 'neutral',
//         index
//       }));

//     // Prepare pie chart data (emotion distribution)
//     const emotionCount = {};
//     filteredLogs.forEach(log => {
//       const emotion = log.emotion || 'neutral';
//       emotionCount[emotion] = (emotionCount[emotion] || 0) + 1;
//     });

//     const pieData = Object.entries(emotionCount).map(([emotion, count]) => ({
//       name: emotion.charAt(0).toUpperCase() + emotion.slice(1),
//       value: count,
//       percentage: Math.round((count / filteredLogs.length) * 100)
//     }));

//     return { chartData, pieData };
//   };

//   const { chartData, pieData } = prepareChartData();
//   const moodInsights = calculateRealMoodInsights();

//   // ADD: Colors for different chart elements
//   const chartColors = {
//     mood: '#3B82F6', // Blue
//     stress: '#EF4444', // Red
//     wellness: '#10B981', // Green
//     pie: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#14B8A6']
//   };

//   // ADD: Custom tooltip for charts
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
//           <p className="font-semibold text-gray-800 mb-2">{label}</p>
//           {payload.map((entry, index) => (
//             <p key={index} className="text-sm" style={{ color: entry.color }}>
//               {entry.name === 'mood' && `Mood Rating: ${entry.value}/5`}
//               {entry.name === 'stress' && `Stress Level: ${entry.value === 5 ? 'High' : entry.value === 3 ? 'Medium' : 'Low'}`}
//               {entry.name === 'wellness' && `Wellness Score: ${entry.value.toFixed(1)}/5`}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   // ADD: Render chart based on selected type
//   const renderChart = () => {
//     if (chartType === 'pie') {
//       return (
//         <ResponsiveContainer width="100%" height={350}>
//           <PieChart>
//             <Pie
//               data={pieData}
//               cx="50%"
//               cy="50%"
//               outerRadius={120}
//               fill="#8884d8"
//               dataKey="value"
//               label={({ name, percentage }) => `${name}: ${percentage}%`}
//             >
//               {pieData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={chartColors.pie[index % chartColors.pie.length]} />
//               ))}
//             </Pie>
//             <Tooltip formatter={(value, name) => [`${value} entries`, name]} />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       );
//     }

//     if (chartType === 'area') {
//       return (
//         <ResponsiveContainer width="100%" height={350}>
//           <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//             <XAxis dataKey="date" stroke="#6B7280" />
//             <YAxis stroke="#6B7280" domain={[0, 5]} />
//             <Tooltip content={<CustomTooltip />} />
//             <Legend />
//             <Area type="monotone" dataKey="mood" stroke={chartColors.mood} fill={`${chartColors.mood}30`} name="Mood" />
//             <Area type="monotone" dataKey="wellness" stroke={chartColors.wellness} fill={`${chartColors.wellness}30`} name="Wellness" />
//           </AreaChart>
//         </ResponsiveContainer>
//       );
//     }

//     if (chartType === 'bar') {
//       return (
//         <ResponsiveContainer width="100%" height={350}>
//           <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//             <XAxis dataKey="date" stroke="#6B7280" />
//             <YAxis stroke="#6B7280" domain={[0, 5]} />
//             <Tooltip content={<CustomTooltip />} />
//             <Legend />
//             <Bar dataKey="mood" fill={chartColors.mood} name="Mood" radius={[4, 4, 0, 0]} />
//             <Bar dataKey="stress" fill={chartColors.stress} name="Stress" radius={[4, 4, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       );
//     }

//     // Default: Line chart
//     return (
//       <ResponsiveContainer width="100%" height={350}>
//         <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//           <XAxis dataKey="date" stroke="#6B7280" />
//           <YAxis stroke="#6B7280" domain={[0, 5]} />
//           <Tooltip content={<CustomTooltip />} />
//           <Legend />
//           <Line 
//             type="monotone" 
//             dataKey="mood" 
//             stroke={chartColors.mood} 
//             strokeWidth={3}
//             dot={{ fill: chartColors.mood, strokeWidth: 2, r: 6 }}
//             activeDot={{ r: 8, stroke: chartColors.mood, strokeWidth: 2 }}
//             name="Mood"
//           />
//           <Line 
//             type="monotone" 
//             dataKey="wellness" 
//             stroke={chartColors.wellness} 
//             strokeWidth={3}
//             dot={{ fill: chartColors.wellness, strokeWidth: 2, r: 6 }}
//             activeDot={{ r: 8, stroke: chartColors.wellness, strokeWidth: 2 }}
//             name="Wellness"
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     );
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 flex items-center justify-center">
//         <div className="text-center space-y-8">
//           <div className="relative">
//             <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl mx-auto flex items-center justify-center shadow-2xl animate-pulse">
//               <Brain className="w-16 h-16 text-white" />
//             </div>
//             <div className="absolute -top-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
//               <Sparkles className="w-5 h-5 text-white" />
//             </div>
//           </div>
//           <LoadingSpinner size="lg" />
//           <div className="space-y-3">
//             <h3 className="text-2xl font-bold text-gray-800">Loading Your Wellness Dashboard</h3>
//             <p className="text-gray-600 max-w-md mx-auto">Preparing your personalized mental health insights...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
//         {/* PROFESSIONAL HEADER WITH DYNAMIC GREETING */}
//         <div className="mb-12">
//           <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
//             <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 p-8 text-white relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
//               <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
              
//               <div className="relative z-10 flex items-center justify-between">
//                 <div>
//                   <div className="flex items-center space-x-4 mb-4">
//                     <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
//                       <Brain className="w-8 h-8 text-white" />
//                     </div>
//                     <div>
//                       <h1 className="text-4xl font-bold mb-2">
//                         {greeting}, {dashboardData.userProfile?.username || 'User'}!
//                       </h1>
//                       <p className="text-blue-100 text-lg">
//                         Welcome back to your wellness journey
//                       </p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center space-x-6">
//                     <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl px-4 py-2">
//                       <span className="text-emerald-100 text-sm font-bold">
//                         Active Since {dashboardData.userProfile?.joined || 'Recently'}
//                       </span>
//                     </div>
//                     {dashboardData.recoveryTracker?.has_tracker && (
//                       <div className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl px-4 py-2">
//                         <span className="text-yellow-100 text-sm font-bold">
//                           Recovery Day {dashboardData.recoveryTracker.tracker?.days_elapsed + 1 || 1}
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
                
//                 <div className="text-right">
//                   <div className="text-3xl font-bold mb-1">
//                     {new Date().toLocaleDateString('en-US', { 
//                       weekday: 'long',
//                       month: 'short', 
//                       day: 'numeric'
//                     })}
//                   </div>
//                   <div className="text-blue-100">
//                     {new Date().toLocaleTimeString('en-US', { 
//                       hour: '2-digit', 
//                       minute: '2-digit'
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Quick Stats Bar */}
//             <div className="bg-gradient-to-r from-gray-50 to-indigo-50 p-6">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-gray-900">
//                     {moodInsights.totalEntries}
//                   </div>
//                   <div className="text-sm text-gray-600 font-medium">Mood Entries</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-gray-900">
//                     {dashboardData.userProfile?.therapy_sessions_count || 0}
//                   </div>
//                   <div className="text-sm text-gray-600 font-medium">Therapy Sessions</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-gray-900">
//                     {dashboardData.recoveryTracker?.has_tracker ? 
//                       Math.round(dashboardData.recoveryTracker.tracker?.completion_percentage || 0) : 0}%
//                   </div>
//                   <div className="text-sm text-gray-600 font-medium">Recovery Progress</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-emerald-600">98%</div>
//                   <div className="text-sm text-gray-600 font-medium">Wellness Score</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ERROR DISPLAY */}
//         {error && (
//           <div className="mb-8 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6">
//             <div className="flex items-center">
//               <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
//               <p className="font-semibold text-red-800">{error}</p>
//             </div>
//           </div>
//         )}

//         {/* ✅ EMOTION ANALYSIS SECTION */}
//         <div className="mb-8">
//           <EmotionAnalysisDisplay />
//         </div>

//         {/* 🎯 RECOVERY JOURNEY */}
//         {dashboardData.recoveryTracker?.has_tracker && (
//           <div className="mb-8">
//             <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
//               <div className="bg-gradient-to-r from-emerald-600 to-green-700 p-6 text-white">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-2xl font-bold mb-1">Recovery Journey</h3>
//                     <p className="text-emerald-100 text-lg">10-Day Wellness Program</p>
//                   </div>
//                   <div className="text-4xl font-bold">
//                     {Math.round(dashboardData.recoveryTracker.tracker?.completion_percentage || 0)}%
//                   </div>
//                 </div>
//               </div>
              
//               <div className="p-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                   <div className="lg:col-span-2">
//                     <div className="mb-6">
//                       <div className="flex justify-between text-lg font-medium text-gray-700 mb-4">
//                         <span>Progress Overview</span>
//                         <span>
//                           Day {dashboardData.recoveryTracker.tracker?.days_elapsed + 1 || 1} of{' '}
//                           {dashboardData.recoveryTracker.tracker?.total_days || 10}
//                         </span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
//                         <div 
//                           className="bg-gradient-to-r from-emerald-500 to-green-600 h-4 rounded-full transition-all duration-1000"
//                           style={{ 
//                             width: `${Math.min(100, dashboardData.recoveryTracker.tracker?.completion_percentage || 0)}%` 
//                           }}
//                         ></div>
//                       </div>
//                       <div className="text-sm text-gray-600">
//                         Keep going! You're making excellent progress on your wellness journey.
//                       </div>
//                     </div>
                    
//                     <div className="grid grid-cols-2 gap-6">
//                       <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4">
//                         <div className="flex items-center space-x-3">
//                           <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
//                             <Target className="w-5 h-5 text-white" />
//                           </div>
//                           <div>
//                             <p className="text-sm font-medium text-gray-600">Current Focus</p>
//                             <p className="text-lg font-bold text-gray-800">
//                               {dashboardData.recoveryTracker.tracker?.emotion || 'Wellness'}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
//                         <div className="flex items-center space-x-3">
//                           <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
//                             <TrendingUp className="w-5 h-5 text-white" />
//                           </div>
//                           <div>
//                             <p className="text-sm font-medium text-gray-600">Stress Level</p>
//                             <p className={`text-lg font-bold ${
//                               dashboardData.recoveryTracker.tracker?.stress_level === 'High' 
//                                 ? 'text-red-600'
//                                 : dashboardData.recoveryTracker.tracker?.stress_level === 'Medium'
//                                 ? 'text-yellow-600'
//                                 : 'text-green-600'
//                             }`}>
//                               {dashboardData.recoveryTracker.tracker?.stress_level || 'Low'}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="flex flex-col justify-center">
//                     <div className="text-center mb-6">
//                       <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
//                         <Heart className="w-10 h-10 text-white" />
//                       </div>
//                       <h4 className="text-xl font-bold text-gray-800 mb-2">You're Doing Great!</h4>
//                       <p className="text-gray-600 text-sm">Stay consistent with your wellness routine</p>
//                     </div>
                    
//                     <button 
//                       onClick={() => navigate('/progress')}
//                       className="w-full bg-gradient-to-r from-emerald-600 to-green-700 text-white py-4 px-6 rounded-2xl font-semibold hover:from-emerald-700 hover:to-green-800 transition-colors flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
//                     >
//                       View Full Progress
//                       <ArrowUpRight className="w-5 h-5 ml-2" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
//           {/* LEFT COLUMN - Main Actions & Today's Progress */}
//           <div className="xl:col-span-2 space-y-8">
            
//             {/* QUICK ACTIONS GRID */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
//               <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
//                 <Zap className="w-6 h-6 mr-3 text-yellow-600" />
//                 Quick Actions
//               </h2>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {[
//                   {
//                     icon: Mic,
//                     title: "Share Your Feelings",
//                     description: "Voice, text, or video emotion analysis",
//                     color: "from-blue-500 to-indigo-600",
//                     action: "emotion-input",
//                     badge: "AI Powered"
//                   },
//                   {
//                     icon: Calendar,
//                     title: "Book Therapy Session",
//                     description: "Connect with licensed professionals",
//                     color: "from-emerald-500 to-green-600", 
//                     action: "book-session",
//                     badge: "Professional"
//                   },
//                   {
//                     icon: BarChart3,
//                     title: "View Progress",
//                     description: "Track your wellness journey",
//                     color: "from-purple-500 to-violet-600",
//                     action: "view-progress", 
//                     badge: "Insights"
//                   },
//                   {
//                     icon: Users,
//                     title: "Find Therapists",
//                     description: "Browse verified mental health experts",
//                     color: "from-pink-500 to-rose-600",
//                     action: "find-therapist",
//                     badge: "Verified"
//                   }
//                 ].map((item, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleQuickAction(item.action)}
//                     disabled={refreshing}
//                     className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 disabled:opacity-70 disabled:transform-none"
//                   >
//                     <div className="flex items-start space-x-4">
//                       <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                         <item.icon className="w-7 h-7 text-white" />
//                       </div>
//                       <div className="flex-1 text-left">
//                         <div className="flex items-center justify-between mb-2">
//                           <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
//                           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
//                             {item.badge}
//                           </span>
//                         </div>
//                         <p className="text-gray-600 text-sm leading-relaxed mb-3">
//                           {item.description}
//                         </p>
//                         <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
//                           <span className="text-sm font-semibold">Get Started</span>
//                           <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
//                         </div>
//                       </div>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* TODAY'S PROGRESS */}
//             {dashboardData.todayProgress && (
//               <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//                   <Target className="w-6 h-6 mr-3 text-emerald-600" />
//                   Today's Wellness Check
//                 </h2>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {dashboardData.todayProgress.tip_of_the_day && (
//                     <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6">
//                       <div className="flex items-center mb-4">
//                         <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center mr-3">
//                           <Lightbulb className="w-5 h-5 text-white" />
//                         </div>
//                         <h4 className="font-bold text-yellow-800">Today's Insight</h4>
//                       </div>
//                       <p className="text-yellow-700 leading-relaxed">
//                         {dashboardData.todayProgress.tip_of_the_day}
//                       </p>
//                     </div>
//                   )}
                  
//                   {dashboardData.todayProgress.quote && (
//                     <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
//                       <div className="flex items-center mb-4">
//                         <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mr-3">
//                           <Quote className="w-5 h-5 text-white" />
//                         </div>
//                         <h4 className="font-bold text-purple-800">Daily Inspiration</h4>
//                       </div>
//                       <p className="text-purple-700 italic leading-relaxed">
//                         "{dashboardData.todayProgress.quote}"
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* RIGHT SIDEBAR */}
//           <div className="space-y-8">
            
//             {/* 📊 DYNAMIC MOOD ANALYTICS WITH CHARTS */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-6 overflow-hidden">
              
//               {/* Header with Chart Controls */}
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center space-x-3">
//                   <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-full">
//                     <BarChart3 className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-800">Mood Analytics</h3>
//                     <p className="text-sm text-gray-600">Interactive data visualization</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Chart Type Controls */}
//               <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-xl">
//                 <div className="flex space-x-2">
//                   {[
//                     { type: 'line', icon: BarChart3, label: 'Line' },
//                     { type: 'area', icon: Activity, label: 'Area' },
//                     { type: 'bar', icon: BarChart2, label: 'Bar' },
//                     { type: 'pie', icon: PieChartIcon, label: 'Pie' }
//                   ].map((chart) => (
//                     <button
//                       key={chart.type}
//                       onClick={() => setChartType(chart.type)}
//                       className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
//                         chartType === chart.type
//                           ? 'bg-indigo-600 text-white shadow-md'
//                           : 'bg-white text-gray-600 hover:bg-gray-100'
//                       }`}
//                     >
//                       <chart.icon className="w-3 h-3" />
//                       <span>{chart.label}</span>
//                     </button>
//                   ))}
//                 </div>
                
//                 <div className="flex space-x-2">
//                   {[
//                     { range: 'week', label: '7D' },
//                     { range: 'month', label: '30D' },
//                     { range: 'all', label: 'All' }
//                   ].map((period) => (
//                     <button
//                       key={period.range}
//                       onClick={() => setTimeRange(period.range)}
//                       className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
//                         timeRange === period.range
//                           ? 'bg-purple-600 text-white'
//                           : 'bg-white text-gray-600 hover:bg-gray-100'
//                       }`}
//                     >
//                       {period.label}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Dynamic Chart Display */}
//               <div className="mb-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-4 border border-indigo-100">
//                 {renderChart()}
//               </div>

//               {/* REAL Trend Display */}
//               {moodInsights.isActiveThisWeek ? (
//                 <div className="text-center mb-6 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
//                   <div className="flex items-center justify-center mb-4">
//                     {moodInsights.direction === 'up' ? (
//                       <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
//                         <TrendingUp className="w-8 h-8 text-white" />
//                       </div>
//                     ) : moodInsights.direction === 'down' ? (
//                       <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
//                         <TrendingDown className="w-8 h-8 text-white" />
//                       </div>
//                     ) : (
//                       <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
//                         <Minus className="w-8 h-8 text-white" />
//                       </div>
//                     )}
//                   </div>
//                   <div className="text-3xl font-bold text-gray-800 mb-2">
//                     {moodInsights.direction === 'up' ? '+' : moodInsights.direction === 'down' ? '-' : ''}
//                     {moodInsights.percentage}%
//                   </div>
//                   <p className="text-gray-600 font-medium">
//                     {moodInsights.direction === 'up' 
//                       ? 'Mood Improvement' 
//                       : moodInsights.direction === 'down'
//                       ? 'Need Attention' 
//                       : 'Stable Baseline'} this week
//                   </p>
//                 </div>
//               ) : (
//                 <div className="text-center mb-6 p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200">
//                   <div className="flex items-center justify-center mb-4">
//                     <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
//                       <AlertTriangle className="w-8 h-8 text-white" />
//                     </div>
//                   </div>
//                   <div className="text-3xl font-bold text-gray-600 mb-2">No Data</div>
//                   <p className="text-gray-500 font-medium">No activity this week</p>
//                 </div>
//               )}

//               {/* REAL Analytics Grid */}
//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div className={`${moodInsights.consistency > 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-100' : 'bg-gradient-to-r from-red-50 to-orange-50 border-red-100'} rounded-xl p-4 border`}>
//                   <div className="flex items-center space-x-2 mb-2">
//                     {moodInsights.consistency > 0 ? (
//                       <CheckCircle className="w-4 h-4 text-green-600" />
//                     ) : (
//                       <AlertTriangle className="w-4 h-4 text-red-600" />
//                     )}
//                     <span className={`text-sm font-semibold ${moodInsights.consistency > 0 ? 'text-green-800' : 'text-red-800'}`}>
//                       Consistency
//                     </span>
//                   </div>
//                   <p className={`text-2xl font-bold ${moodInsights.consistency > 0 ? 'text-green-900' : 'text-red-900'}`}>
//                     {moodInsights.consistency}%
//                   </p>
//                   <p className={`text-xs ${moodInsights.consistency > 0 ? 'text-green-700' : 'text-red-700'}`}>
//                     {moodInsights.consistency > 0 ? `${moodInsights.weeklyEntries}/7 days` : 'No tracking this week'}
//                   </p>
//                 </div>
                
//                 <div className={`${moodInsights.weeklyEntries > 0 ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100' : 'bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200'} rounded-xl p-4 border`}>
//                   <div className="flex items-center space-x-2 mb-2">
//                     <Activity className={`w-4 h-4 ${moodInsights.weeklyEntries > 0 ? 'text-blue-600' : 'text-gray-500'}`} />
//                     <span className={`text-sm font-semibold ${moodInsights.weeklyEntries > 0 ? 'text-blue-800' : 'text-gray-700'}`}>
//                       Weekly
//                     </span>
//                   </div>
//                   <p className={`text-2xl font-bold ${moodInsights.weeklyEntries > 0 ? 'text-blue-900' : 'text-gray-800'}`}>
//                     {moodInsights.weeklyEntries}
//                   </p>
//                   <p className={`text-xs ${moodInsights.weeklyEntries > 0 ? 'text-blue-700' : 'text-gray-600'}`}>
//                     Entries this week
//                   </p>
//                 </div>
//               </div>

//               {/* DYNAMIC Motivational Content */}
//               {moodInsights.needsMotivation ? (
//                 <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200 mb-6">
//                   <div className="flex items-center space-x-2 mb-3">
//                     <Heart className="w-5 h-5 text-orange-600" />
//                     <span className="font-bold text-orange-800">We Miss You!</span>
//                   </div>
//                   <p className="text-sm text-orange-700 leading-relaxed mb-3">
//                     You haven't logged any emotions this week. Regular tracking helps us provide better insights and support your mental wellness journey.
//                   </p>
//                   <button 
//                     onClick={() => navigate('/emotion-input')}
//                     className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-colors text-sm"
//                   >
//                     Start Tracking Today
//                   </button>
//                 </div>
//               ) : (
//                 <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-200 mb-6">
//                   <div className="flex items-center space-x-2 mb-3">
//                     <Brain className="w-5 h-5 text-purple-600" />
//                     <span className="font-bold text-purple-800">AI Insight</span>
//                   </div>
//                   <p className="text-sm text-purple-700 leading-relaxed">
//                     {moodInsights.direction === 'up' 
//                       ? `Excellent progress! You've logged ${moodInsights.weeklyEntries} entries this week with ${moodInsights.consistency}% consistency. Your mood patterns show improvement.`
//                       : moodInsights.direction === 'down'
//                       ? `I notice some challenges this week. You've been consistent with ${moodInsights.weeklyEntries} entries (${moodInsights.consistency}% rate). Consider booking a therapy session.`
//                       : `Your mood remains stable with ${moodInsights.weeklyEntries} entries this week (${moodInsights.consistency}% consistency). Keep up the good tracking habit.`
//                     }
//                   </p>
//                 </div>
//               )}

//               {/* Quick Stats Footer */}
//               <div className="pt-4 border-t border-gray-200">
//                 <div className="flex items-center justify-between text-sm text-gray-600">
//                   <span>Total Entries: {moodInsights.totalEntries}</span>
//                   <div className="flex items-center space-x-1">
//                     <Award className="w-4 h-4 text-yellow-500" />
//                     <span>Level {Math.floor(moodInsights.totalEntries / 10) + 1} Tracker</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* WELLNESS ACTIVITY MODAL */}
//       <WellnessActivityModal 
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         activity={modalActivity}
//       />
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionService } from '../services/emotionService';
import { therapistService } from '../services/therapistService';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import WellnessActivityModal from '../components/modals/WellnessActivityModal';
import EmotionAnalysisDisplay from '../components/ui/EmotionAnalysisDisplay';

// Import Recharts components for dynamic visualization
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  Legend
} from 'recharts';

import { 
  Brain, 
  Heart, 
  Calendar, 
  TrendingUp, 
  Activity, 
  Users, 
  BookOpen, 
  MessageCircle,
  Target,
  Zap,
  ChevronRight,
  AlertCircle,
  BarChart3,
  Sparkles,
  ArrowUpRight,
  Mic,
  Lightbulb,
  Quote,
  TrendingDown,
  Minus,
  CheckCircle,
  Award,
  AlertTriangle,
  Eye,
  BarChart2,
  PieChart as PieChartIcon,
  RefreshCw
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  
  const [dashboardData, setDashboardData] = useState({
    recoveryTracker: null,
    todayProgress: null,
    userProfile: null,
    recentSessions: [],
    upcomingAppointments: []
  });
  
  const [progressLogs, setProgressLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [greeting, setGreeting] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  
  // Chart configuration states
  const [chartType, setChartType] = useState('line');
  const [timeRange, setTimeRange] = useState('week');
  
  // Modal states
  const [modalActivity, setModalActivity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setDynamicGreeting();
    fetchDashboardData();
  }, []);

  const setDynamicGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 17) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  };

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError('');
      
      const [recoveryData, profileData, progressData] = await Promise.all([
        emotionService.getActiveRecoveryTracker().catch(() => ({ has_tracker: false })),
        therapistService.getUserProfile().catch(() => null),
        emotionService.getUserProgressLogs().catch(() => [])
      ]);

      let todayProgressData = null;
      try {
        todayProgressData = await emotionService.getTodayProgressLog();
      } catch (err) {
        console.log('No progress log for today yet');
      }

      setDashboardData({
        recoveryTracker: recoveryData,
        todayProgress: todayProgressData,
        userProfile: profileData,
        recentSessions: [],
        upcomingAppointments: []
      });
      
      setProgressLogs(progressData);
      
    } catch (err) {
      console.error('Dashboard fetch error:', err);
      setError('Some dashboard data could not be loaded');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickAction = async (action) => {
    setRefreshing(true);
    
    switch(action) {
      case 'emotion-input':
        navigate('/emotion-input');
        break;
      case 'book-session':
        navigate('/book-session');
        break;
      case 'view-progress':
        navigate('/progress');
        break;
      case 'find-therapist':
        navigate('/therapists');
        break;
      default:
        break;
    }
    
    setTimeout(() => setRefreshing(false), 1000);
  };

  // Calculate real mood insights from progress logs
  const calculateRealMoodInsights = () => {
    if (!progressLogs || progressLogs.length === 0) {
      return {
        direction: 'stable',
        percentage: 0,
        consistency: 0,
        weeklyEntries: 0,
        isActiveThisWeek: false,
        totalEntries: 0,
        needsMotivation: true
      };
    }

    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    const thisWeekLogs = progressLogs.filter(log => {
      const logDate = new Date(log.date);
      return logDate >= startOfWeek && logDate <= endOfWeek;
    });

    const weeklyEntries = thisWeekLogs.length;
    const consistency = Math.round((weeklyEntries / 7) * 100);
    const totalEntries = progressLogs.length;
    const isActiveThisWeek = weeklyEntries > 0;

    let direction = 'stable';
    let percentage = 0;

    if (weeklyEntries > 0) {
      const thisWeekMoodRatings = thisWeekLogs
        .filter(log => log.mood_rating)
        .map(log => log.mood_rating);

      const prevWeekStart = new Date(startOfWeek);
      prevWeekStart.setDate(startOfWeek.getDate() - 7);
      const prevWeekEnd = new Date(startOfWeek);
      prevWeekEnd.setDate(startOfWeek.getDate() - 1);

      const prevWeekLogs = progressLogs.filter(log => {
        const logDate = new Date(log.date);
        return logDate >= prevWeekStart && logDate <= prevWeekEnd;
      });

      const prevWeekMoodRatings = prevWeekLogs
        .filter(log => log.mood_rating)
        .map(log => log.mood_rating);

      if (thisWeekMoodRatings.length > 0) {
        const thisWeekAvg = thisWeekMoodRatings.reduce((a, b) => a + b, 0) / thisWeekMoodRatings.length;
        
        if (prevWeekMoodRatings.length > 0) {
          const prevWeekAvg = prevWeekMoodRatings.reduce((a, b) => a + b, 0) / prevWeekMoodRatings.length;
          const diff = thisWeekAvg - prevWeekAvg;
          
          if (diff > 0.3) {
            direction = 'up';
            percentage = Math.min(Math.round(Math.abs(diff) * 20), 35);
          } else if (diff < -0.3) {
            direction = 'down';
            percentage = Math.min(Math.round(Math.abs(diff) * 20), 25);
          } else {
            direction = 'stable';
            percentage = Math.round(Math.abs(diff) * 10);
          }
        } else {
          if (thisWeekAvg >= 4) {
            direction = 'up';
            percentage = Math.round(thisWeekAvg * 5);
          } else if (thisWeekAvg <= 2) {
            direction = 'down';
            percentage = Math.round((5 - thisWeekAvg) * 8);
          } else {
            direction = 'stable';
            percentage = 5;
          }
        }
      }
    }

    return {
      direction,
      percentage,
      consistency,
      weeklyEntries,
      isActiveThisWeek,
      totalEntries,
      needsMotivation: weeklyEntries === 0,
      thisWeekLogs
    };
  };

  // Prepare chart data based on time range and chart type
  const prepareChartData = () => {
    if (!progressLogs || progressLogs.length === 0) {
      return { 
        chartData: [
          { date: 'Mon', mood: 3, stress: 2, wellness: 3.5, emotion: 'neutral' },
          { date: 'Tue', mood: 4, stress: 1, wellness: 4.2, emotion: 'happy' },
          { date: 'Wed', mood: 2, stress: 4, wellness: 2.8, emotion: 'sad' },
          { date: 'Thu', mood: 3, stress: 3, wellness: 3.1, emotion: 'neutral' },
          { date: 'Fri', mood: 5, stress: 1, wellness: 4.8, emotion: 'excited' }
        ], 
        pieData: [
          { name: 'Happy', value: 40, percentage: 40 },
          { name: 'Neutral', value: 30, percentage: 30 },
          { name: 'Sad', value: 20, percentage: 20 },
          { name: 'Anxious', value: 10, percentage: 10 }
        ] 
      };
    }

    const now = new Date();
    let filteredLogs = [...progressLogs];

    if (timeRange === 'week') {
      const weekAgo = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
      filteredLogs = progressLogs.filter(log => new Date(log.date) >= weekAgo);
    } else if (timeRange === 'month') {
      const monthAgo = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000));
      filteredLogs = progressLogs.filter(log => new Date(log.date) >= monthAgo);
    }

    const chartData = filteredLogs
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .map((log, index) => ({
        date: new Date(log.date).toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric' 
        }),
        mood: log.mood_rating || 0,
        stress: log.stress_level === 'High' ? 5 : log.stress_level === 'Medium' ? 3 : 1,
        wellness: Math.max(1, Math.min(5, (log.mood_rating || 0) + Math.random() * 1)),
        fullDate: log.date,
        emotion: log.emotion || 'neutral',
        index
      }));

    const emotionCount = {};
    filteredLogs.forEach(log => {
      const emotion = log.emotion || 'neutral';
      emotionCount[emotion] = (emotionCount[emotion] || 0) + 1;
    });

    const pieData = Object.entries(emotionCount).map(([emotion, count]) => ({
      name: emotion.charAt(0).toUpperCase() + emotion.slice(1),
      value: count,
      percentage: Math.round((count / filteredLogs.length) * 100)
    }));

    return { chartData, pieData };
  };

  const { chartData, pieData } = prepareChartData();
  const moodInsights = calculateRealMoodInsights();

  // Colors for different chart elements
  const chartColors = {
    mood: '#3B82F6',
    stress: '#EF4444',
    wellness: '#10B981',
    pie: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#14B8A6']
  };

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-800 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name === 'mood' && `Mood Rating: ${entry.value}/5`}
              {entry.name === 'stress' && `Stress Level: ${entry.value === 5 ? 'High' : entry.value === 3 ? 'Medium' : 'Low'}`}
              {entry.name === 'wellness' && `Wellness Score: ${entry.value.toFixed(1)}/5`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Render chart based on selected type
  const renderChart = () => {
    if (chartType === 'pie') {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percentage }) => `${name}: ${percentage}%`}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={chartColors.pie[index % chartColors.pie.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value, name) => [`${value} entries`, name]} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      );
    }

    if (chartType === 'area') {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" stroke="#6B7280" />
            <YAxis stroke="#6B7280" domain={[0, 5]} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area type="monotone" dataKey="mood" stroke={chartColors.mood} fill={`${chartColors.mood}30`} name="Mood" />
            <Area type="monotone" dataKey="wellness" stroke={chartColors.wellness} fill={`${chartColors.wellness}30`} name="Wellness" />
          </AreaChart>
        </ResponsiveContainer>
      );
    }

    if (chartType === 'bar') {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" stroke="#6B7280" />
            <YAxis stroke="#6B7280" domain={[0, 5]} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="mood" fill={chartColors.mood} name="Mood" radius={[4, 4, 0, 0]} />
            <Bar dataKey="stress" fill={chartColors.stress} name="Stress" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      );
    }

    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="date" stroke="#6B7280" />
          <YAxis stroke="#6B7280" domain={[0, 5]} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="mood" 
            stroke={chartColors.mood} 
            strokeWidth={3}
            dot={{ fill: chartColors.mood, strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, stroke: chartColors.mood, strokeWidth: 2 }}
            name="Mood"
          />
          <Line 
            type="monotone" 
            dataKey="wellness" 
            stroke={chartColors.wellness} 
            strokeWidth={3}
            dot={{ fill: chartColors.wellness, strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, stroke: chartColors.wellness, strokeWidth: 2 }}
            name="Wellness"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center space-y-8">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl mx-auto flex items-center justify-center shadow-2xl animate-pulse">
              <Brain className="w-16 h-16 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </div>
          <LoadingSpinner size="lg" />
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-gray-900">Loading Your Wellness Dashboard</h3>
            <p className="text-gray-600 max-w-md mx-auto">Preparing your personalized mental health insights...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* PROFESSIONAL HEADER WITH DYNAMIC GREETING */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold mb-2">
                      {greeting}, {dashboardData.userProfile?.username || 'User'}!
                    </h1>
                    <p className="text-blue-100 text-lg">
                      Welcome back to your wellness journey
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl px-4 py-2">
                    <span className="text-emerald-100 text-sm font-bold">
                      Active Since {dashboardData.userProfile?.joined || 'Recently'}
                    </span>
                  </div>
                  {dashboardData.recoveryTracker?.has_tracker && (
                    <div className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl px-4 py-2">
                      <span className="text-yellow-100 text-sm font-bold">
                        Recovery Day {dashboardData.recoveryTracker.tracker?.days_elapsed + 1 || 1}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-3xl font-bold mb-1">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long',
                    month: 'short', 
                    day: 'numeric'
                  })}
                </div>
                <div className="text-blue-100">
                  {new Date().toLocaleTimeString('en-US', { 
                    hour: '2-digit', 
                    minute: '2-digit'
                  })}
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Stats Bar */}
          <div className="bg-gradient-to-r from-gray-50 to-indigo-50 p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {moodInsights.totalEntries}
                </div>
                <div className="text-sm text-gray-600 font-medium">Journal Entries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {dashboardData.userProfile?.therapy_sessions_count || 0}
                </div>
                <div className="text-sm text-gray-600 font-medium">Therapy Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {dashboardData.recoveryTracker?.has_tracker ? 
                    Math.round(dashboardData.recoveryTracker.tracker?.completion_percentage || 0) : 0}%
                </div>
                <div className="text-sm text-gray-600 font-medium">Recovery Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">98%</div>
                <div className="text-sm text-gray-600 font-medium">Wellness Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* ERROR DISPLAY */}
        {error && (
          <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6">
            <div className="flex items-center">
              <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
              <p className="font-semibold text-red-800">{error}</p>
            </div>
          </div>
        )}

        {/* EMOTION ANALYSIS SECTION */}
        <div>
          <EmotionAnalysisDisplay />
        </div>

        {/* RECOVERY JOURNEY */}
        {dashboardData.recoveryTracker?.has_tracker && (
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-green-700 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Recovery Journey</h3>
                  <p className="text-emerald-100 text-lg">10-Day Wellness Program</p>
                </div>
                <div className="text-4xl font-bold">
                  {Math.round(dashboardData.recoveryTracker.tracker?.completion_percentage || 0)}%
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <div className="flex justify-between text-lg font-medium text-gray-700 mb-4">
                      <span>Progress Overview</span>
                      <span>
                        Day {dashboardData.recoveryTracker.tracker?.days_elapsed + 1 || 1} of{' '}
                        {dashboardData.recoveryTracker.tracker?.total_days || 10}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-green-600 h-4 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${Math.min(100, dashboardData.recoveryTracker.tracker?.completion_percentage || 0)}%` 
                        }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600">
                      Keep going! You're making excellent progress on your wellness journey.
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                          <Target className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600">Current Focus</p>
                          <p className="text-lg font-bold text-gray-800">
                            {dashboardData.recoveryTracker.tracker?.emotion || 'Wellness'}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600">Stress Level</p>
                          <p className={`text-lg font-bold ${
                            dashboardData.recoveryTracker.tracker?.stress_level === 'High' 
                              ? 'text-red-600'
                              : dashboardData.recoveryTracker.tracker?.stress_level === 'Medium'
                              ? 'text-yellow-600'
                              : 'text-green-600'
                          }`}>
                            {dashboardData.recoveryTracker.tracker?.stress_level || 'Low'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">You're Doing Great!</h4>
                    <p className="text-gray-600 text-sm">Stay consistent with your wellness routine</p>
                  </div>
                  
                  <button 
                    onClick={() => navigate('/progress')}
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-700 text-white py-4 px-6 rounded-2xl font-semibold hover:from-emerald-700 hover:to-green-800 transition-colors flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    View Full Progress
                    <ArrowUpRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* HORIZONTAL MOOD ANALYTICS CARD */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 overflow-hidden">
          
          {/* Header with Chart Controls - HORIZONTAL LAYOUT */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-6">
            
            {/* Left Side - Title and Description */}
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-2xl shadow-lg">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Mood Analytics</h2>
                <p className="text-lg text-gray-600">Interactive data visualization & insights</p>
              </div>
            </div>

            {/* Right Side - Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              
              {/* Chart Type Controls */}
              <div className="bg-gray-50 rounded-2xl p-3">
                <label className="text-xs font-semibold text-gray-600 mb-3 block">CHART TYPE</label>
                <div className="flex space-x-2">
                  {[
                    { type: 'line', icon: BarChart3, label: 'Line' },
                    { type: 'area', icon: Activity, label: 'Area' },
                    { type: 'bar', icon: BarChart2, label: 'Bar' },
                    { type: 'pie', icon: PieChartIcon, label: 'Pie' }
                  ].map((chart) => (
                    <button
                      key={chart.type}
                      onClick={() => setChartType(chart.type)}
                      className={`flex flex-col items-center space-y-1 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                        chartType === chart.type
                          ? 'bg-indigo-600 text-white shadow-md transform scale-105'
                          : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                      }`}
                    >
                      <chart.icon className="w-5 h-5" />
                      <span>{chart.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Time Range Controls */}
              <div className="bg-gray-50 rounded-2xl p-3">
                <label className="text-xs font-semibold text-gray-600 mb-3 block">TIME PERIOD</label>
                <div className="flex space-x-2">
                  {[
                    { range: 'week', label: '7 Days' },
                    { range: 'month', label: '30 Days' },
                    { range: 'all', label: 'All Time' }
                  ].map((period) => (
                    <button
                      key={period.range}
                      onClick={() => setTimeRange(period.range)}
                      className={`px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                        timeRange === period.range
                          ? 'bg-purple-600 text-white shadow-md transform scale-105'
                          : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                      }`}
                    >
                      {period.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Refresh Button */}
              <div className="flex items-end">
                <button 
                  onClick={fetchDashboardData}
                  className="p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 hover:scale-105"
                  disabled={refreshing}
                >
                  <RefreshCw className={`w-6 h-6 text-gray-600 ${refreshing ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* HORIZONTAL MAIN CONTENT */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* CHART SECTION - 2/3 WIDTH */}
            <div className="xl:col-span-2">
              {/* Dynamic Chart Display */}
              <div className="mb-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-6 border border-indigo-100">
                <div className="h-96">
                  {renderChart()}
                </div>
              </div>

              {/* Chart Insights - Below Chart */}
              {moodInsights.isActiveThisWeek ? (
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                        moodInsights.direction === 'up' ? 'bg-green-500' :
                        moodInsights.direction === 'down' ? 'bg-red-500' : 'bg-blue-500'
                      }`}>
                        {moodInsights.direction === 'up' ? (
                          <TrendingUp className="w-8 h-8 text-white" />
                        ) : moodInsights.direction === 'down' ? (
                          <TrendingDown className="w-8 h-8 text-white" />
                        ) : (
                          <Minus className="w-8 h-8 text-white" />
                        )}
                      </div>
                      <div>
                        <div className={`text-3xl font-bold ${
                          moodInsights.direction === 'up' ? 'text-green-600' :
                          moodInsights.direction === 'down' ? 'text-red-600' : 'text-blue-600'
                        }`}>
                          {moodInsights.direction === 'up' ? '+' : moodInsights.direction === 'down' ? '-' : '±'}
                          {moodInsights.percentage}%
                        </div>
                        <p className="text-gray-600 font-medium">
                          {moodInsights.direction === 'up' ? '🎉 Mood Improvement' :
                           moodInsights.direction === 'down' ? '⚠️ Needs Attention' : '📊 Stable Baseline'} this week
                        </p>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <p>Compared to last week</p>
                      <p>{moodInsights.weeklyEntries} entries this week</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200 text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-600 mb-2">No Data</div>
                  <p className="text-gray-500 font-medium">📱 Start tracking this week</p>
                </div>
              )}
            </div>

            {/* ANALYTICS SIDEBAR - 1/3 WIDTH */}
            <div className="space-y-6">
              
              {/* Analytics Grid */}
              <div className="grid grid-cols-1 gap-4">
                <div className={`rounded-2xl p-6 border transition-all duration-200 hover:scale-105 ${
                  moodInsights.consistency > 0 ? 
                  'bg-gradient-to-r from-green-50 to-emerald-50 border-green-100' : 
                  'bg-gradient-to-r from-red-50 to-orange-50 border-red-100'
                }`}>
                  <div className="flex items-center space-x-3 mb-4">
                    {moodInsights.consistency > 0 ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : (
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    )}
                    <span className={`text-lg font-bold ${
                      moodInsights.consistency > 0 ? 'text-green-800' : 'text-red-800'
                    }`}>
                      Consistency Score
                    </span>
                  </div>
                  <p className={`text-4xl font-bold mb-2 ${
                    moodInsights.consistency > 0 ? 'text-green-900' : 'text-red-900'
                  }`}>
                    {moodInsights.consistency}%
                  </p>
                  <p className={`text-sm ${
                    moodInsights.consistency > 0 ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {moodInsights.consistency > 0 ? 
                      `${moodInsights.weeklyEntries}/7 days tracked` : 
                      'No tracking this week'}
                  </p>
                </div>

                <div className={`rounded-2xl p-6 border transition-all duration-200 hover:scale-105 ${
                  moodInsights.weeklyEntries > 0 ? 
                  'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100' : 
                  'bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200'
                }`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <Activity className={`w-6 h-6 ${
                      moodInsights.weeklyEntries > 0 ? 'text-blue-600' : 'text-gray-500'
                    }`} />
                    <span className={`text-lg font-bold ${
                      moodInsights.weeklyEntries > 0 ? 'text-blue-800' : 'text-gray-700'
                    }`}>
                      Weekly Activity
                    </span>
                  </div>
                  <p className={`text-4xl font-bold mb-2 ${
                    moodInsights.weeklyEntries > 0 ? 'text-blue-900' : 'text-gray-800'
                  }`}>
                    {moodInsights.weeklyEntries}
                  </p>
                  <p className={`text-sm ${
                    moodInsights.weeklyEntries > 0 ? 'text-blue-700' : 'text-gray-600'
                  }`}>
                    Mood entries logged
                  </p>
                </div>
              </div>

              {/* AI Recommendations */}
              {moodInsights.needsMotivation ? (
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-orange-800 text-lg">🤗 We Miss You!</span>
                      <p className="text-xs text-orange-600">Motivation boost</p>
                    </div>
                  </div>
                  <p className="text-sm text-orange-700 leading-relaxed mb-4">
                    You haven't logged any emotions this week. Regular tracking helps us provide better insights and support your mental wellness journey.
                  </p>
                  <button 
                    onClick={() => navigate('/emotion-input')}
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <Mic className="w-4 h-4 mr-2" />
                    Start Tracking Today
                    <Sparkles className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ) : (
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-purple-800 text-lg">🤖 AI Insight</span>
                      <p className="text-xs text-purple-600">Personalized analysis</p>
                    </div>
                  </div>
                  <p className="text-sm text-purple-700 leading-relaxed">
                    {moodInsights.direction === 'up' ? 
                      `🎉 Excellent progress! You've logged ${moodInsights.weeklyEntries} entries this week with ${moodInsights.consistency}% consistency. Your mood patterns show remarkable improvement. Keep up this amazing momentum!` :
                      moodInsights.direction === 'down' ?
                      `💪 I notice some challenges this week. You've been consistent with ${moodInsights.weeklyEntries} entries (${moodInsights.consistency}% rate). Consider booking a therapy session for additional support during this time.` :
                      `📊 Your mood remains stable with ${moodInsights.weeklyEntries} entries this week (${moodInsights.consistency}% consistency). This consistency in tracking is building a valuable foundation for your wellness journey.`
                    }
                  </p>
                </div>
              )}

              {/* Stats Footer */}
              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-indigo-500" />
                    <span>Total: {moodInsights.totalEntries} entries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span>Level {Math.floor((moodInsights.totalEntries || 0) / 10) + 1} Tracker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QUICK ACTIONS GRID */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-yellow-600" />
            Quick Actions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Mic,
                title: "Share Your Feelings",
                description: "Voice, text, or video emotion analysis",
                color: "from-blue-500 to-indigo-600",
                action: "emotion-input",
                badge: "AI Powered"
              },
              {
                icon: Calendar,
                title: "Book Therapy Session",
                description: "Connect with licensed professionals",
                color: "from-emerald-500 to-green-600", 
                action: "book-session",
                badge: "Professional"
              },
              {
                icon: BarChart3,
                title: "View Progress",
                description: "Track your wellness journey",
                color: "from-purple-500 to-violet-600",
                action: "view-progress", 
                badge: "Insights"
              },
              {
                icon: Users,
                title: "Find Therapists",
                description: "Browse verified mental health experts",
                color: "from-pink-500 to-rose-600",
                action: "find-therapist",
                badge: "Verified"
              }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleQuickAction(item.action)}
                disabled={refreshing}
                className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 disabled:opacity-70 disabled:transform-none"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-4`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-800 transition-colors">
                    <span className="text-sm font-semibold">Get Started</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* TODAY'S PROGRESS */}
        {dashboardData.todayProgress && (
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3 text-emerald-600" />
              Today's Wellness Check
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dashboardData.todayProgress.tip_of_the_day && (
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center mr-3">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-yellow-800">Today's Insight</h4>
                  </div>
                  <p className="text-yellow-700 leading-relaxed">
                    {dashboardData.todayProgress.tip_of_the_day}
                  </p>
                </div>
              )}
              
              {dashboardData.todayProgress.quote && (
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mr-3">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-purple-800">Daily Inspiration</h4>
                  </div>
                  <p className="text-purple-700 italic leading-relaxed">
                    "{dashboardData.todayProgress.quote}"
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* MODAL */}
      <WellnessActivityModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        activity={modalActivity}
      />
    </div>
  );
};

export default Dashboard;
