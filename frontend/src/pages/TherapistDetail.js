
// // // import React, { useState, useEffect } from 'react';
// // // import { useParams, Link } from 'react-router-dom';
// // // import { therapistService } from '../services/therapistService';
// // // import { 
// // //   Shield, RefreshCw, ArrowLeft, AlertCircle, Star, MapPin, 
// // //   Clock, Globe, Users, Calendar, GraduationCap, MessageCircle, 
// // //   Award, CheckCircle, Video, Phone, Heart, Verified, User,
// // //   BookOpen, Languages, TrendingUp, Stethoscope
// // // } from 'lucide-react';

// // // const TherapistDetail = () => {
// // //   const { therapistId } = useParams();
// // //   const [therapistData, setTherapistData] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [retryCount, setRetryCount] = useState(0);

// // //   const fetchTherapistDetail = async () => {
// // //     try {
// // //       setLoading(true);
// // //       setError(null);
      
// // //       const data = await therapistService.getTherapistDetail(therapistId);
// // //       setTherapistData(data);
// // //     } catch (err) {
// // //       console.error('❌ Error fetching therapist detail:', err);
      
// // //       let errorMessage = 'Failed to load therapist profile';
      
// // //       if (err.response) {
// // //         const status = err.response.status;
// // //         if (status === 404) {
// // //           errorMessage = 'Therapist not found';
// // //         } else if (status === 401) {
// // //           errorMessage = 'Authentication required';
// // //         } else if (status === 403) {
// // //           errorMessage = 'Access forbidden';
// // //         } else if (status >= 500) {
// // //           errorMessage = 'Server error. Please try again later.';
// // //         }
// // //       } else if (err.request) {
// // //         errorMessage = 'Network error. Please check your internet connection.';
// // //       }
      
// // //       setError({
// // //         message: errorMessage,
// // //         details: err.message,
// // //         status: err.response?.status
// // //       });
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (therapistId) {
// // //       fetchTherapistDetail();
// // //     }
// // //   }, [therapistId]);

// // //   const handleRetry = () => {
// // //     setRetryCount(prev => prev + 1);
// // //     fetchTherapistDetail();
// // //   };

// // //   // Loading State
// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // //         <div className="text-center space-y-6">
// // //           <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl animate-pulse">
// // //             <Heart className="w-10 h-10 text-white" />
// // //           </div>
// // //           <div className="space-y-2">
// // //             <h3 className="text-xl font-semibold text-gray-800">Loading Profile</h3>
// // //             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   // Error State
// // //   if (error) {
// // //     return (
// // //       <div className="min-h-screen bg-slate-50 p-4 flex items-center justify-center">
// // //         <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
// // //           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// // //             <AlertCircle className="w-8 h-8 text-red-600" />
// // //           </div>
          
// // //           <h3 className="text-xl font-bold text-red-800 mb-2">Unable to Load Profile</h3>
// // //           <p className="text-red-600 mb-2">{error.message}</p>
          
// // //           <div className="space-y-3">
// // //             <button
// // //               onClick={handleRetry}
// // //               className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
// // //             >
// // //               <RefreshCw className="w-4 h-4 mr-2" />
// // //               Try Again {retryCount > 0 && `(${retryCount})`}
// // //             </button>
            
// // //             <Link
// // //               to="/therapists"
// // //               className="ml-3 inline-flex items-center px-6 py-3 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 transition-colors"
// // //             >
// // //               <ArrowLeft className="w-4 h-4 mr-2" />
// // //               Back to Therapists
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   const { therapist, reviews } = therapistData || {};

// // //   if (!therapist) {
// // //     return <div>No therapist data found</div>;
// // //   }

// // //   // Helper function to safely render specializations
// // //   const renderSpecializations = (specializations) => {
// // //     if (!specializations || !Array.isArray(specializations)) return null;
    
// // //     return specializations.map((spec, index) => {
// // //       // Handle if spec is an object
// // //       if (typeof spec === 'object' && spec !== null) {
// // //         return (
// // //           <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
// // //             <h4 className="font-semibold text-gray-900 mb-2">{spec.name || 'Specialization'}</h4>
// // //             <p className="text-sm text-gray-700 leading-relaxed">
// // //               {spec.description || 'No description available'}
// // //             </p>
// // //           </div>
// // //         );
// // //       }
// // //       // Handle if spec is a string
// // //       else if (typeof spec === 'string') {
// // //         return (
// // //           <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
// // //             <p className="text-sm text-gray-700 leading-relaxed">{spec}</p>
// // //           </div>
// // //         );
// // //       }
// // //       return null;
// // //     });
// // //   };

// // //   // Helper function to safely render expertise areas
// // //   const renderExpertiseAreas = (expertiseAreas) => {
// // //     if (!expertiseAreas || !Array.isArray(expertiseAreas)) {
// // //       // Default expertise areas
// // //       return [
// // //         'Addiction', 'ADHD', 'Adjustment Disorder', 'Anger',
// // //         'Anxiety', 'Assertiveness', 'Autism', 'Bipolar Disorder',
// // //         'Bullying', 'Burnout', 'Career Issues', 'Communication Disorder',
// // //         'Depression', 'Developmental Delay', 'Divorce', 'Domestic Violence',
// // //         'Eating Disorder', 'Emotion Control', 'Family Problems', 'Grief',
// // //         'Marriage Issues', 'OCD', 'Panic Disorder', 'PTSD',
// // //         'Relationship Issues', 'Self Esteem', 'Sleep Issues', 'Stress Management',
// // //         'Substance Abuse', 'Suicidal Thoughts', 'Trauma', 'Work Stress'
// // //       ].slice(0, 32);
// // //     }
    
// // //     return expertiseAreas.map(area => {
// // //       if (typeof area === 'object' && area !== null) {
// // //         return area.name || area.title || 'Area';
// // //       }
// // //       return area;
// // //     });
// // //   };

// // //   // Safe data extraction
// // //   const defaultLanguages = therapist.languages ? therapist.languages.split(',').map(l => l.trim()) : ['English', 'Hindi'];
// // //   const avgRating = therapist.rating || 4.5;
// // //   const safeExpertiseAreas = renderExpertiseAreas(therapist.expertise_areas);

// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
// // //         {/* Header Section */}
// // //         <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
// // //           <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-12 text-white relative">
// // //             <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              
// // //               {/* Left - Therapist Info */}
// // //               <div className="flex items-center space-x-6 mb-6 lg:mb-0">
// // //                 {/* Profile Picture */}
// // //                 <div className="w-32 h-32 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30 shadow-xl">
// // //                   {therapist.photoUrl ? (
// // //                     <img 
// // //                       src={therapist.photoUrl} 
// // //                       alt={therapist.name}
// // //                       className="w-full h-full object-cover rounded-2xl"
// // //                     />
// // //                   ) : (
// // //                     <User className="w-16 h-16 text-white/80" />
// // //                   )}
// // //                 </div>
                
// // //                 {/* Info */}
// // //                 <div className="space-y-3">
// // //                   <div>
// // //                     <h1 className="text-3xl lg:text-4xl font-bold mb-2">{therapist.name}</h1>
// // //                     <div className="flex items-center space-x-3">
// // //                       <div className="bg-white/20 px-4 py-2 rounded-lg border border-white/30">
// // //                         <span className="font-semibold">{therapist.specialization}</span>
// // //                       </div>
// // //                       <div className="bg-emerald-500 px-3 py-1 rounded-full flex items-center">
// // //                         <Verified className="w-4 h-4 mr-1" />
// // //                         <span className="text-sm font-bold">VERIFIED</span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
                  
// // //                   {/* Rating */}
// // //                   <div className="flex items-center space-x-4">
// // //                     <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg border border-white/30">
// // //                       <div className="flex items-center space-x-1 mr-3">
// // //                         {[...Array(5)].map((_, i) => (
// // //                           <Star 
// // //                             key={i} 
// // //                             className={`w-4 h-4 ${i < Math.floor(avgRating) ? 'text-yellow-300 fill-current' : 'text-white/40'}`} 
// // //                           />
// // //                         ))}
// // //                       </div>
// // //                       <span className="font-bold text-lg">{avgRating}</span>
// // //                     </div>
// // //                     <div className="text-white/90">
// // //                       <span className="font-semibold">₹{therapist.fee}</span>
// // //                       <span className="text-sm ml-1">per session</span>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
              
// // //               {/* Right - Action Buttons */}
// // //               <div className="flex flex-col sm:flex-row gap-3">
// // //                 <Link
// // //                   to={`/book-appointment/${therapist.id}`}
// // //                   className="bg-white text-purple-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg flex items-center justify-center"
// // //                 >
// // //                   <Calendar className="w-5 h-5 mr-2" />
// // //                   Book a session
// // //                 </Link>
// // //                 <button className="bg-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors border border-white/30 flex items-center justify-center">
// // //                   <MessageCircle className="w-5 h-5 mr-2" />
// // //                   Message
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
          
// // //           {/* Quick Stats */}
// // //           <div className="p-6 bg-gray-50 border-t">
// // //             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// // //               <div className="text-center">
// // //                 <div className="text-2xl font-bold text-gray-900">{therapist.experience || '5+ Years'}</div>
// // //                 <div className="text-sm text-gray-600">Experience</div>
// // //               </div>
// // //               <div className="text-center">
// // //                 <div className="text-2xl font-bold text-gray-900">{reviews?.length || 0}</div>
// // //                 <div className="text-sm text-gray-600">Reviews</div>
// // //               </div>
// // //               <div className="text-center">
// // //                 <div className="text-2xl font-bold text-gray-900">98%</div>
// // //                 <div className="text-sm text-gray-600">Success Rate</div>
// // //               </div>
// // //               <div className="text-center">
// // //                 <div className="text-2xl font-bold text-gray-900">500+</div>
// // //                 <div className="text-sm text-gray-600">Patients Helped</div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
// // //           {/* Left Sidebar */}
// // //           <div className="lg:col-span-1 space-y-6">
            
// // //             {/* About Me */}
// // //             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
// // //               <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
// // //                 <User className="w-5 h-5 mr-2 text-purple-600" />
// // //                 About me
// // //               </h3>
// // //               <div className="space-y-3">
// // //                 <p className="text-sm text-gray-600 leading-relaxed">
// // //                   {therapist.profile_description || 
// // //                     `Experienced therapist specializing in ${therapist.specialization}. I use evidence-based approaches to help clients achieve their mental health goals and improve their overall well-being.`
// // //                   }
// // //                 </p>
                
// // //                 <div className="pt-4 border-t border-gray-100">
// // //                   <div className="flex items-center text-sm text-gray-600 mb-2">
// // //                     <MapPin className="w-4 h-4 mr-2" />
// // //                     {therapist.location}
// // //                   </div>
// // //                   <div className="flex items-center text-sm text-gray-600">
// // //                     <Clock className="w-4 h-4 mr-2" />
// // //                     {therapist.availability_hours || "9 AM - 6 PM"}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Languages */}
// // //             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
// // //               <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
// // //                 <Languages className="w-5 h-5 mr-2 text-blue-600" />
// // //                 Languages known
// // //               </h3>
// // //               <div className="flex flex-wrap gap-2">
// // //                 {defaultLanguages.map((lang, index) => (
// // //                   <span 
// // //                     key={index}
// // //                     className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
// // //                   >
// // //                     {lang}
// // //                   </span>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Average user rating */}
// // //             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
// // //               <h3 className="text-lg font-bold text-gray-900 mb-4">Average user rating</h3>
// // //               <div className="text-center space-y-4">
// // //                 <div className="text-6xl font-bold text-purple-600">{avgRating}</div>
// // //                 <div className="flex justify-center space-x-1">
// // //                   {[...Array(5)].map((_, i) => (
// // //                     <Star 
// // //                       key={i} 
// // //                       className={`w-6 h-6 ${i < Math.floor(avgRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
// // //                     />
// // //                   ))}
// // //                 </div>
// // //                 <p className="text-sm text-gray-600">Based on {reviews?.length || 0} reviews</p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Main Content */}
// // //           <div className="lg:col-span-3 space-y-8">
            
// // //             {/* Area of Expertise */}
// // //             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
// // //               <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
// // //                 <Award className="w-6 h-6 mr-3 text-purple-600" />
// // //                 Area of expertise
// // //               </h2>
              
// // //               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
// // //                 {safeExpertiseAreas.slice(0, 32).map((area, index) => (
// // //                   <div 
// // //                     key={index} 
// // //                     className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg px-4 py-3 text-center hover:shadow-md transition-shadow"
// // //                   >
// // //                     <span className="text-sm font-medium text-purple-700">{area}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Specializations */}
// // //             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
// // //               <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
// // //                 <Stethoscope className="w-6 h-6 mr-3 text-blue-600" />
// // //                 Specializations
// // //               </h2>
              
// // //               <div className="space-y-4">
// // //                 {therapist.specializations && Array.isArray(therapist.specializations) ? (
// // //                   renderSpecializations(therapist.specializations)
// // //                 ) : (
// // //                   <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
// // //                     <p className="text-sm text-gray-700 leading-relaxed">
// // //                       Specializes in {therapist.specialization} with expertise in various therapeutic modalities including 
// // //                       Cognitive Behavioral Therapy (CBT), individual counseling, and evidence-based treatment approaches.
// // //                     </p>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>

// // //             {/* Reviews Section */}
// // //             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
// // //               <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
// // //                 <MessageCircle className="w-6 h-6 mr-3 text-green-600" />
// // //                 Reviews
// // //               </h2>
              
// // //               <div className="space-y-6">
// // //                 {reviews && reviews.length > 0 ? (
// // //                   reviews.map((review, index) => (
// // //                     <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
// // //                       <div className="flex items-start space-x-4">
// // //                         <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
// // //                           {review.user ? review.user.charAt(0).toUpperCase() : 'U'}
// // //                         </div>
// // //                         <div className="flex-1">
// // //                           <div className="flex items-center justify-between mb-2">
// // //                             <div>
// // //                               <h4 className="font-semibold text-gray-900">{review.user || 'Anonymous'}</h4>
// // //                               <p className="text-sm text-gray-500">
// // //                                 Reviewed on {new Date(review.date_posted).toLocaleDateString('en-US', {
// // //                                   year: 'numeric',
// // //                                   month: 'short',
// // //                                   day: 'numeric'
// // //                                 })}
// // //                               </p>
// // //                             </div>
// // //                             <div className="flex items-center space-x-1">
// // //                               {[...Array(5)].map((_, i) => (
// // //                                 <Star 
// // //                                   key={i} 
// // //                                   className={`w-4 h-4 ${i < (review.rating || 5) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
// // //                                 />
// // //                               ))}
// // //                             </div>
// // //                           </div>
// // //                           <p className="text-gray-700 leading-relaxed">{review.review_text}</p>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   ))
// // //                 ) : (
// // //                   <div className="text-center py-8 text-gray-500">
// // //                     <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
// // //                     <p>No reviews yet. Be the first to review this therapist!</p>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TherapistDetail;
// // import React, { useState, useEffect, useCallback } from 'react';
// // import { useParams, Link } from 'react-router-dom';
// // import { therapistService } from '../services/therapistService';
// // import ReviewModal from './ReviewModal';
// // import { 
// //   RefreshCw, ArrowLeft, AlertCircle, Star, MapPin, 
// //   Clock, Calendar, MessageCircle, 
// //   Award, Heart, Verified, User,
// //   Languages, Stethoscope
// // } from 'lucide-react';

// // const TherapistDetail = () => {
// //   const { therapistId } = useParams();
// //   const [therapistData, setTherapistData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [retryCount, setRetryCount] = useState(0);
// //   const [showReviewModal, setShowReviewModal] = useState(false);
// //   const [userHasReviewed, setUserHasReviewed] = useState(false);

// //   const fetchTherapistDetail = useCallback(async () => {
// //     try {
// //       setLoading(true);
// //       setError(null);
      
// //       const data = await therapistService.getTherapistDetail(therapistId);
// //       setTherapistData(data);
// //     } catch (err) {
// //       console.error('❌ Error fetching therapist detail:', err);
      
// //       let errorMessage = 'Failed to load therapist profile';
      
// //       if (err.response) {
// //         const status = err.response.status;
// //         if (status === 404) {
// //           errorMessage = 'Therapist not found';
// //         } else if (status === 401) {
// //           errorMessage = 'Authentication required';
// //         } else if (status === 403) {
// //           errorMessage = 'Access forbidden';
// //         } else if (status >= 500) {
// //           errorMessage = 'Server error. Please try again later.';
// //         }
// //       } else if (err.request) {
// //         errorMessage = 'Network error. Please check your internet connection.';
// //       }
      
// //       setError({
// //         message: errorMessage,
// //         details: err.message,
// //         status: err.response?.status
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [therapistId]);

// //   const checkUserReview = useCallback(() => {
// //     const user = JSON.parse(localStorage.getItem('user'));
// //     if (user && therapistData?.reviews) {
// //       const hasReviewed = therapistData.reviews.some(review => review.user === user.username);
// //       setUserHasReviewed(hasReviewed);
// //     }
// //   }, [therapistData?.reviews]);

// //   const handleReviewSuccess = useCallback(() => {
// //     fetchTherapistDetail();
// //     setShowReviewModal(false);
// //   }, [fetchTherapistDetail]);

// //   useEffect(() => {
// //     if (therapistId) {
// //       fetchTherapistDetail();
// //     }
// //   }, [therapistId, fetchTherapistDetail]);

// //   useEffect(() => {
// //     checkUserReview();
// //   }, [checkUserReview]);

// //   const handleRetry = () => {
// //     setRetryCount(prev => prev + 1);
// //     fetchTherapistDetail();
// //   };

// //   // Loading State
// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //         <div className="text-center space-y-6">
// //           <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl animate-pulse">
// //             <Heart className="w-10 h-10 text-white" />
// //           </div>
// //           <div className="space-y-2">
// //             <h3 className="text-xl font-semibold text-gray-800">Loading Profile</h3>
// //             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Error State
// //   if (error) {
// //     return (
// //       <div className="min-h-screen bg-slate-50 p-4 flex items-center justify-center">
// //         <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
// //           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //             <AlertCircle className="w-8 h-8 text-red-600" />
// //           </div>
          
// //           <h3 className="text-xl font-bold text-red-800 mb-2">Unable to Load Profile</h3>
// //           <p className="text-red-600 mb-2">{error.message}</p>
          
// //           <div className="space-y-3">
// //             <button
// //               onClick={handleRetry}
// //               className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
// //             >
// //               <RefreshCw className="w-4 h-4 mr-2" />
// //               Try Again {retryCount > 0 && `(${retryCount})`}
// //             </button>
            
// //             <Link
// //               to="/therapists"
// //               className="ml-3 inline-flex items-center px-6 py-3 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 transition-colors"
// //             >
// //               <ArrowLeft className="w-4 h-4 mr-2" />
// //               Back to Therapists
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   const { therapist, reviews } = therapistData || {};

// //   if (!therapist) {
// //     return <div>No therapist data found</div>;
// //   }

// //   // Helper function to safely render specializations
// //   const renderSpecializations = (specializations) => {
// //     if (!specializations || !Array.isArray(specializations)) return null;
    
// //     return specializations.map((spec, index) => {
// //       // Handle if spec is an object
// //       if (typeof spec === 'object' && spec !== null) {
// //         return (
// //           <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
// //             <h4 className="font-semibold text-gray-900 mb-2">{spec.name || 'Specialization'}</h4>
// //             <p className="text-sm text-gray-700 leading-relaxed">
// //               {spec.description || 'No description available'}
// //             </p>
// //           </div>
// //         );
// //       }
// //       // Handle if spec is a string
// //       else if (typeof spec === 'string') {
// //         return (
// //           <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
// //             <p className="text-sm text-gray-700 leading-relaxed">{spec}</p>
// //           </div>
// //         );
// //       }
// //       return null;
// //     });
// //   };

// //   // Helper function to safely render expertise areas
// //   const renderExpertiseAreas = (expertiseAreas) => {
// //     if (!expertiseAreas || !Array.isArray(expertiseAreas)) {
// //       // Default expertise areas
// //       return [
// //         'Addiction', 'ADHD', 'Adjustment Disorder', 'Anger',
// //         'Anxiety', 'Assertiveness', 'Autism', 'Bipolar Disorder',
// //         'Bullying', 'Burnout', 'Career Issues', 'Communication Disorder',
// //         'Depression', 'Developmental Delay', 'Divorce', 'Domestic Violence',
// //         'Eating Disorder', 'Emotion Control', 'Family Problems', 'Grief',
// //         'Marriage Issues', 'OCD', 'Panic Disorder', 'PTSD',
// //         'Relationship Issues', 'Self Esteem', 'Sleep Issues', 'Stress Management',
// //         'Substance Abuse', 'Suicidal Thoughts', 'Trauma', 'Work Stress'
// //       ].slice(0, 32);
// //     }
    
// //     return expertiseAreas.map(area => {
// //       if (typeof area === 'object' && area !== null) {
// //         return area.name || area.title || 'Area';
// //       }
// //       return area;
// //     });
// //   };

// //   // Safe data extraction
// //   const defaultLanguages = therapist.languages ? therapist.languages.split(',').map(l => l.trim()) : ['English', 'Hindi'];
// //   const avgRating = therapist.rating || 4.5;
// //   const safeExpertiseAreas = renderExpertiseAreas(therapist.expertise_areas);

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
// //         {/* Header Section */}
// //         <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
// //           <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-12 text-white relative">
// //             <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              
// //               {/* Left - Therapist Info */}
// //               <div className="flex items-center space-x-6 mb-6 lg:mb-0">
// //                 {/* Profile Picture */}
// //                 <div className="w-32 h-32 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30 shadow-xl">
// //                   {therapist.photoUrl ? (
// //                     <img 
// //                       src={therapist.photoUrl} 
// //                       alt={therapist.name}
// //                       className="w-full h-full object-cover rounded-2xl"
// //                     />
// //                   ) : (
// //                     <User className="w-16 h-16 text-white/80" />
// //                   )}
// //                 </div>
                
// //                 {/* Info */}
// //                 <div className="space-y-3">
// //                   <div>
// //                     <h1 className="text-3xl lg:text-4xl font-bold mb-2">{therapist.name}</h1>
// //                     <div className="flex items-center space-x-3">
// //                       <div className="bg-white/20 px-4 py-2 rounded-lg border border-white/30">
// //                         <span className="font-semibold">{therapist.specialization}</span>
// //                       </div>
// //                       <div className="bg-emerald-500 px-3 py-1 rounded-full flex items-center">
// //                         <Verified className="w-4 h-4 mr-1" />
// //                         <span className="text-sm font-bold">VERIFIED</span>
// //                       </div>
// //                     </div>
// //                   </div>
                  
// //                   {/* Rating */}
// //                   <div className="flex items-center space-x-4">
// //                     <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg border border-white/30">
// //                       <div className="flex items-center space-x-1 mr-3">
// //                         {[...Array(5)].map((_, i) => (
// //                           <Star 
// //                             key={i} 
// //                             className={`w-4 h-4 ${i < Math.floor(avgRating) ? 'text-yellow-300 fill-current' : 'text-white/40'}`} 
// //                           />
// //                         ))}
// //                       </div>
// //                       <span className="font-bold text-lg">{avgRating}</span>
// //                     </div>
// //                     <div className="text-white/90">
// //                       <span className="font-semibold">₹{therapist.fee}</span>
// //                       <span className="text-sm ml-1">per session</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               {/* Right - Action Buttons */}
// //               <div className="flex flex-col sm:flex-row gap-3">
// //                 <Link
// //                   to={`/book-appointment/${therapist.id}`}
// //                   className="bg-white text-purple-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg flex items-center justify-center"
// //                 >
// //                   <Calendar className="w-5 h-5 mr-2" />
// //                   Book a session
// //                 </Link>
// //                 <button className="bg-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors border border-white/30 flex items-center justify-center">
// //                   <MessageCircle className="w-5 h-5 mr-2" />
// //                   Message
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
          
// //           {/* Quick Stats */}
// //           <div className="p-6 bg-gray-50 border-t">
// //             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //               <div className="text-center">
// //                 <div className="text-2xl font-bold text-gray-900">{therapist.experience || '5+ Years'}</div>
// //                 <div className="text-sm text-gray-600">Experience</div>
// //               </div>
// //               <div className="text-center">
// //                 <div className="text-2xl font-bold text-gray-900">{reviews?.length || 0}</div>
// //                 <div className="text-sm text-gray-600">Reviews</div>
// //               </div>
// //               <div className="text-center">
// //                 <div className="text-2xl font-bold text-gray-900">98%</div>
// //                 <div className="text-sm text-gray-600">Success Rate</div>
// //               </div>
// //               <div className="text-center">
// //                 <div className="text-2xl font-bold text-gray-900">500+</div>
// //                 <div className="text-sm text-gray-600">Patients Helped</div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
// //           {/* Left Sidebar */}
// //           <div className="lg:col-span-1 space-y-6">
            
// //             {/* About Me */}
// //             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
// //               <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
// //                 <User className="w-5 h-5 mr-2 text-purple-600" />
// //                 About me
// //               </h3>
// //               <div className="space-y-3">
// //                 <p className="text-sm text-gray-600 leading-relaxed">
// //                   {therapist.profile_description || 
// //                     `Experienced therapist specializing in ${therapist.specialization}. I use evidence-based approaches to help clients achieve their mental health goals and improve their overall well-being.`
// //                   }
// //                 </p>
                
// //                 <div className="pt-4 border-t border-gray-100">
// //                   <div className="flex items-center text-sm text-gray-600 mb-2">
// //                     <MapPin className="w-4 h-4 mr-2" />
// //                     {therapist.location}
// //                   </div>
// //                   <div className="flex items-center text-sm text-gray-600">
// //                     <Clock className="w-4 h-4 mr-2" />
// //                     {therapist.availability_hours || "9 AM - 6 PM"}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Languages */}
// //             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
// //               <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
// //                 <Languages className="w-5 h-5 mr-2 text-blue-600" />
// //                 Languages known
// //               </h3>
// //               <div className="flex flex-wrap gap-2">
// //                 {defaultLanguages.map((lang, index) => (
// //                   <span 
// //                     key={index}
// //                     className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
// //                   >
// //                     {lang}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Average user rating */}
// //             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
// //               <h3 className="text-lg font-bold text-gray-900 mb-4">Average user rating</h3>
// //               <div className="text-center space-y-4">
// //                 <div className="text-6xl font-bold text-purple-600">{avgRating}</div>
// //                 <div className="flex justify-center space-x-1">
// //                   {[...Array(5)].map((_, i) => (
// //                     <Star 
// //                       key={i} 
// //                       className={`w-6 h-6 ${i < Math.floor(avgRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
// //                     />
// //                   ))}
// //                 </div>
// //                 <p className="text-sm text-gray-600">Based on {reviews?.length || 0} reviews</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Main Content */}
// //           <div className="lg:col-span-3 space-y-8">
            
// //             {/* Area of Expertise */}
// //             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
// //                 <Award className="w-6 h-6 mr-3 text-purple-600" />
// //                 Area of expertise
// //               </h2>
              
// //               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
// //                 {safeExpertiseAreas.slice(0, 32).map((area, index) => (
// //                   <div 
// //                     key={index} 
// //                     className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg px-4 py-3 text-center hover:shadow-md transition-shadow"
// //                   >
// //                     <span className="text-sm font-medium text-purple-700">{area}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Specializations */}
// //             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
// //                 <Stethoscope className="w-6 h-6 mr-3 text-blue-600" />
// //                 Specializations
// //               </h2>
              
// //               <div className="space-y-4">
// //                 {therapist.specializations && Array.isArray(therapist.specializations) ? (
// //                   renderSpecializations(therapist.specializations)
// //                 ) : (
// //                   <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
// //                     <p className="text-sm text-gray-700 leading-relaxed">
// //                       Specializes in {therapist.specialization} with expertise in various therapeutic modalities including 
// //                       Cognitive Behavioral Therapy (CBT), individual counseling, and evidence-based treatment approaches.
// //                     </p>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>

// //             {/* Reviews Section */}
// //             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
// //               <div className="flex items-center justify-between mb-6">
// //                 <h2 className="text-2xl font-bold text-gray-900 flex items-center">
// //                   <MessageCircle className="w-6 h-6 mr-3 text-green-600" />
// //                   Reviews
// //                 </h2>
                
// //                 {/* Add Review Button */}
// //                 {!userHasReviewed && (
// //                   <button
// //                     onClick={() => setShowReviewModal(true)}
// //                     className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2"
// //                   >
// //                     <Star className="w-4 h-4" />
// //                     <span>Write Review</span>
// //                   </button>
// //                 )}
// //               </div>
              
// //               <div className="space-y-6">
// //                 {reviews && reviews.length > 0 ? (
// //                   reviews.map((review, index) => (
// //                     <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
// //                       <div className="flex items-start space-x-4">
// //                         <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
// //                           {review.user ? review.user.charAt(0).toUpperCase() : 'U'}
// //                         </div>
// //                         <div className="flex-1">
// //                           <div className="flex items-center justify-between mb-2">
// //                             <div>
// //                               <h4 className="font-semibold text-gray-900">{review.user || 'Anonymous'}</h4>
// //                               <p className="text-sm text-gray-500">
// //                                 Reviewed on {new Date(review.date_posted).toLocaleDateString('en-US', {
// //                                   year: 'numeric',
// //                                   month: 'short',
// //                                   day: 'numeric'
// //                                 })}
// //                               </p>
// //                             </div>
// //                             <div className="flex items-center space-x-1">
// //                               {[...Array(5)].map((_, i) => (
// //                                 <Star 
// //                                   key={i} 
// //                                   className={`w-4 h-4 ${i < (review.rating || 5) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
// //                                 />
// //                               ))}
// //                             </div>
// //                           </div>
// //                           <p className="text-gray-700 leading-relaxed">{review.review_text}</p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <div className="text-center py-8 text-gray-500">
// //                     <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
// //                     <p>No reviews yet. Be the first to review this therapist!</p>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <ReviewModal
// //         isOpen={showReviewModal}
// //         onClose={() => setShowReviewModal(false)}
// //         therapist={therapist}
// //         onSubmitSuccess={handleReviewSuccess}
// //       />
// //     </div>
// //   );
// // };

// // export default TherapistDetail;
// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { therapistService } from '../services/therapistService';
// import ReviewModal from './ReviewModal';
// import { 
//   RefreshCw, ArrowLeft, AlertCircle, Star, MapPin, 
//   Clock, Calendar, MessageCircle, 
//   Award, Heart, Verified, User,
//   Languages, Stethoscope
// } from 'lucide-react';

// const TherapistDetail = () => {
//   const { therapistId } = useParams();
//   const [therapistData, setTherapistData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [retryCount, setRetryCount] = useState(0);
  
//   // Review modal states
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [userHasReviewed, setUserHasReviewed] = useState(false);

//   // Single fetch function - removed useCallback to prevent dependency issues
//   const fetchTherapistDetail = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const data = await therapistService.getTherapistDetail(therapistId);
//       setTherapistData(data);
      
//       // Check user review status
//       const user = JSON.parse(localStorage.getItem('user'));
//       if (user && data.reviews) {
//         const hasReviewed = data.reviews.some(review => review.user === user.username);
//         setUserHasReviewed(hasReviewed);
//       }
      
//     } catch (err) {
//       console.error('❌ Error fetching therapist detail:', err);
      
//       let errorMessage = 'Failed to load therapist profile';
      
//       if (err.response) {
//         const status = err.response.status;
//         if (status === 404) {
//           errorMessage = 'Therapist not found';
//         } else if (status === 401) {
//           errorMessage = 'Authentication required';
//         } else if (status === 403) {
//           errorMessage = 'Access forbidden';
//         } else if (status >= 500) {
//           errorMessage = 'Server error. Please try again later.';
//         }
//       } else if (err.request) {
//         errorMessage = 'Network error. Please check your internet connection.';
//       }
      
//       setError({
//         message: errorMessage,
//         details: err.message,
//         status: err.response?.status
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle successful review submission
//   const handleReviewSuccess = () => {
//     fetchTherapistDetail(); // Refresh data
//     setShowReviewModal(false);
//   };

//   // Fetch data only once when component mounts or therapistId changes
//   useEffect(() => {
//     if (therapistId) {
//       fetchTherapistDetail();
//     }
//   }, [therapistId]); // Only depend on therapistId

//   const handleRetry = () => {
//     setRetryCount(prev => prev + 1);
//     fetchTherapistDetail();
//   };

//   // Loading State
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center space-y-6">
//           <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl animate-pulse">
//             <Heart className="w-10 h-10 text-white" />
//           </div>
//           <div className="space-y-2">
//             <h3 className="text-xl font-semibold text-gray-800">Loading Profile</h3>
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Error State
//   if (error) {
//     return (
//       <div className="min-h-screen bg-slate-50 p-4 flex items-center justify-center">
//         <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <AlertCircle className="w-8 h-8 text-red-600" />
//           </div>
          
//           <h3 className="text-xl font-bold text-red-800 mb-2">Unable to Load Profile</h3>
//           <p className="text-red-600 mb-2">{error.message}</p>
          
//           <div className="space-y-3">
//             <button
//               onClick={handleRetry}
//               className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
//             >
//               <RefreshCw className="w-4 h-4 mr-2" />
//               Try Again {retryCount > 0 && `(${retryCount})`}
//             </button>
            
//             <Link
//               to="/therapists"
//               className="ml-3 inline-flex items-center px-6 py-3 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 transition-colors"
//             >
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               Back to Therapists
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Extract data safely
//   if (!therapistData) {
//     return <div>No therapist data found</div>;
//   }

//   const therapist = therapistData;
//   const reviews = therapistData.reviews || [];

//   // Helper functions
//   const renderSpecializations = (specializations) => {
//     if (!specializations || !Array.isArray(specializations)) return null;
    
//     return specializations.map((spec, index) => {
//       if (typeof spec === 'object' && spec !== null) {
//         return (
//           <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
//             <h4 className="font-semibold text-gray-900 mb-2">{spec.name || 'Specialization'}</h4>
//             <p className="text-sm text-gray-700 leading-relaxed">
//               {spec.description || 'No description available'}
//             </p>
//           </div>
//         );
//       } else if (typeof spec === 'string') {
//         return (
//           <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
//             <p className="text-sm text-gray-700 leading-relaxed">{spec}</p>
//           </div>
//         );
//       }
//       return null;
//     });
//   };

//   const renderExpertiseAreas = (expertiseAreas) => {
//     if (!expertiseAreas || !Array.isArray(expertiseAreas)) {
//       return [
//         'Addiction', 'ADHD', 'Adjustment Disorder', 'Anger',
//         'Anxiety', 'Assertiveness', 'Autism', 'Bipolar Disorder',
//         'Bullying', 'Burnout', 'Career Issues', 'Communication Disorder',
//         'Depression', 'Developmental Delay', 'Divorce', 'Domestic Violence',
//         'Eating Disorder', 'Emotion Control', 'Family Problems', 'Grief',
//         'Marriage Issues', 'OCD', 'Panic Disorder', 'PTSD',
//         'Relationship Issues', 'Self Esteem', 'Sleep Issues', 'Stress Management'
//       ].slice(0, 32);
//     }
    
//     return expertiseAreas.map(area => {
//       if (typeof area === 'object' && area !== null) {
//         return area.name || area.title || 'Area';
//       }
//       return area;
//     });
//   };

//   // Safe data extraction with correct field names
//   const defaultLanguages = therapist.languages ? therapist.languages.split(',').map(l => l.trim()) : ['English', 'Hindi'];
//   const avgRating = parseFloat(therapist.rating) || 4.5;
//   const safeExpertiseAreas = renderExpertiseAreas(therapist.expertiseareas);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
//         {/* Header Section */}
//         <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
//           <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-12 text-white relative">
//             <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              
//               {/* Left - Therapist Info */}
//               <div className="flex items-center space-x-6 mb-6 lg:mb-0">
//                 {/* Profile Picture */}
//                 <div className="w-32 h-32 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30 shadow-xl">
//                   {therapist.photoUrl ? (
//                     <img 
//                       src={therapist.photoUrl} 
//                       alt={therapist.name}
//                       className="w-full h-full object-cover rounded-2xl"
//                     />
//                   ) : (
//                     <User className="w-16 h-16 text-white/80" />
//                   )}
//                 </div>
                
//                 {/* Info */}
//                 <div className="space-y-3">
//                   <div>
//                     <h1 className="text-3xl lg:text-4xl font-bold mb-2">{therapist.name}</h1>
//                     <div className="flex items-center space-x-3">
//                       <div className="bg-white/20 px-4 py-2 rounded-lg border border-white/30">
//                         <span className="font-semibold">{therapist.specialization}</span>
//                       </div>
//                       <div className="bg-emerald-500 px-3 py-1 rounded-full flex items-center">
//                         <Verified className="w-4 h-4 mr-1" />
//                         <span className="text-sm font-bold">VERIFIED</span>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Rating */}
//                   <div className="flex items-center space-x-4">
//                     <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg border border-white/30">
//                       <div className="flex items-center space-x-1 mr-3">
//                         {[...Array(5)].map((_, i) => (
//                           <Star 
//                             key={i} 
//                             className={`w-4 h-4 ${i < Math.floor(avgRating) ? 'text-yellow-300 fill-current' : 'text-white/40'}`} 
//                           />
//                         ))}
//                       </div>
//                       <span className="font-bold text-lg">{avgRating}</span>
//                     </div>
//                     <div className="text-white/90">
//                       <span className="font-semibold">₹{therapist.fee}</span>
//                       <span className="text-sm ml-1">per session</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Right - Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <Link
//                   to={`/book-appointment/${therapist.id}`}
//                   className="bg-white text-purple-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg flex items-center justify-center"
//                 >
//                   <Calendar className="w-5 h-5 mr-2" />
//                   Book a session
//                 </Link>
//                 <button className="bg-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors border border-white/30 flex items-center justify-center">
//                   <MessageCircle className="w-5 h-5 mr-2" />
//                   Message
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           {/* Quick Stats */}
//           <div className="p-6 bg-gray-50 border-t">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-900">{therapist.experience || '5+ Years'}</div>
//                 <div className="text-sm text-gray-600">Experience</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-900">{reviews.length}</div>
//                 <div className="text-sm text-gray-600">Reviews</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-900">98%</div>
//                 <div className="text-sm text-gray-600">Success Rate</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-900">500+</div>
//                 <div className="text-sm text-gray-600">Patients Helped</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
//           {/* Left Sidebar */}
//           <div className="lg:col-span-1 space-y-6">
            
//             {/* About Me */}
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
//               <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//                 <User className="w-5 h-5 mr-2 text-purple-600" />
//                 About me
//               </h3>
//               <div className="space-y-3">
//                 <p className="text-sm text-gray-600 leading-relaxed">
//                   {therapist.profiledescription || 
//                     `Experienced therapist specializing in ${therapist.specialization}. I use evidence-based approaches to help clients achieve their mental health goals and improve their overall well-being.`
//                   }
//                 </p>
                
//                 <div className="pt-4 border-t border-gray-100">
//                   <div className="flex items-center text-sm text-gray-600 mb-2">
//                     <MapPin className="w-4 h-4 mr-2" />
//                     {therapist.location}
//                   </div>
//                   <div className="flex items-center text-sm text-gray-600">
//                     <Clock className="w-4 h-4 mr-2" />
//                     {therapist.availabilityhours || "9 AM - 6 PM"}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Languages */}
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
//               <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//                 <Languages className="w-5 h-5 mr-2 text-blue-600" />
//                 Languages known
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {defaultLanguages.map((lang, index) => (
//                   <span 
//                     key={index}
//                     className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
//                   >
//                     {lang}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Average user rating */}
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
//               <h3 className="text-lg font-bold text-gray-900 mb-4">Average user rating</h3>
//               <div className="text-center space-y-4">
//                 <div className="text-6xl font-bold text-purple-600">{avgRating}</div>
//                 <div className="flex justify-center space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star 
//                       key={i} 
//                       className={`w-6 h-6 ${i < Math.floor(avgRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
//                     />
//                   ))}
//                 </div>
//                 <p className="text-sm text-gray-600">Based on {reviews.length} reviews</p>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3 space-y-8">
            
//             {/* Area of Expertise */}
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//                 <Award className="w-6 h-6 mr-3 text-purple-600" />
//                 Area of expertise
//               </h2>
              
//               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
//                 {safeExpertiseAreas.slice(0, 32).map((area, index) => (
//                   <div 
//                     key={index} 
//                     className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg px-4 py-3 text-center hover:shadow-md transition-shadow"
//                   >
//                     <span className="text-sm font-medium text-purple-700">{area}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Specializations */}
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//                 <Stethoscope className="w-6 h-6 mr-3 text-blue-600" />
//                 Specializations
//               </h2>
              
//               <div className="space-y-4">
//                 {therapist.specializations && Array.isArray(therapist.specializations) ? (
//                   renderSpecializations(therapist.specializations)
//                 ) : (
//                   <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
//                     <p className="text-sm text-gray-700 leading-relaxed">
//                       Specializes in {therapist.specialization} with expertise in various therapeutic modalities including 
//                       Cognitive Behavioral Therapy (CBT), individual counseling, and evidence-based treatment approaches.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Reviews Section */}
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl font-bold text-gray-900 flex items-center">
//                   <MessageCircle className="w-6 h-6 mr-3 text-green-600" />
//                   Reviews
//                 </h2>
                
//                 {/* Write Review Button - Only show if user hasn't reviewed */}
//                 {!userHasReviewed && (
//                   <button
//                     onClick={() => setShowReviewModal(true)}
//                     className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2"
//                   >
//                     <Star className="w-4 h-4" />
//                     <span>Write Review</span>
//                   </button>
//                 )}
//               </div>
              
//               <div className="space-y-6">
//                 {reviews && reviews.length > 0 ? (
//                   reviews.map((review, index) => (
//                     <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
//                       <div className="flex items-start space-x-4">
//                         <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
//                           {review.user ? review.user.charAt(0).toUpperCase() : 'U'}
//                         </div>
//                         <div className="flex-1">
//                           <div className="flex items-center justify-between mb-2">
//                             <div>
//                               <h4 className="font-semibold text-gray-900">{review.user || 'Anonymous'}</h4>
//                               <p className="text-sm text-gray-500">
//                                 Reviewed on {new Date(review.dateposted).toLocaleDateString('en-US', {
//                                   year: 'numeric',
//                                   month: 'short',
//                                   day: 'numeric'
//                                 })}
//                               </p>
//                             </div>
//                             <div className="flex items-center space-x-1">
//                               {[...Array(5)].map((_, i) => (
//                                 <Star 
//                                   key={i} 
//                                   className={`w-4 h-4 ${i < (review.rating || 5) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
//                                 />
//                               ))}
//                             </div>
//                           </div>
//                           <p className="text-gray-700 leading-relaxed">{review.reviewtext}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="text-center py-8 text-gray-500">
//                     <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
//                     <p>No reviews yet. Be the first to review this therapist!</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Review Modal */}
//       <ReviewModal
//         isOpen={showReviewModal}
//         onClose={() => setShowReviewModal(false)}
//         therapist={therapist}
//         onSubmitSuccess={handleReviewSuccess}
//       />
//     </div>
//   );
// };

// export default TherapistDetail;
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { therapistService } from '../services/therapistService';
import ReviewModal from './ReviewModal';
import { 
  RefreshCw, ArrowLeft, AlertCircle, Star, MapPin, 
  Clock, Calendar, MessageCircle, 
  Award, Heart, Verified, User,
  Languages, Stethoscope
} from 'lucide-react';

const TherapistDetail = () => {
  const { therapistId } = useParams();
  const [therapistData, setTherapistData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  
  // Review modal states
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [userHasReviewed, setUserHasReviewed] = useState(false);

  // Single fetch function - removed useCallback to prevent dependency issues
  const fetchTherapistDetail = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await therapistService.getTherapistDetail(therapistId);
      setTherapistData(data);
      
      // Check user review status
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && data.reviews) {
        const hasReviewed = data.reviews.some(review => review.user === user.username);
        setUserHasReviewed(hasReviewed);
      }
      
    } catch (err) {
      console.error('❌ Error fetching therapist detail:', err);
      
      let errorMessage = 'Failed to load therapist profile';
      
      if (err.response) {
        const status = err.response.status;
        if (status === 404) {
          errorMessage = 'Therapist not found';
        } else if (status === 401) {
          errorMessage = 'Authentication required';
        } else if (status === 403) {
          errorMessage = 'Access forbidden';
        } else if (status >= 500) {
          errorMessage = 'Server error. Please try again later.';
        }
      } else if (err.request) {
        errorMessage = 'Network error. Please check your internet connection.';
      }
      
      setError({
        message: errorMessage,
        details: err.message,
        status: err.response?.status
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle successful review submission
  const handleReviewSuccess = () => {
    fetchTherapistDetail(); // Refresh data
    setShowReviewModal(false);
  };

  // Fetch data only once when component mounts or therapistId changes
  useEffect(() => {
    if (therapistId) {
      fetchTherapistDetail();
    }
  }, [therapistId]); // Only depend on therapistId

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    fetchTherapistDetail();
  };

  // Updated renderExpertiseAreas function
  const renderExpertiseAreas = (expertiseAreasList) => {
    if (expertiseAreasList && Array.isArray(expertiseAreasList)) {
      return expertiseAreasList.map(area => ({
        name: area.name,
        category: area.category || 'general'
      }));
    }
    // Default expertise areas if no data
    return [
      'Addiction', 'ADHD', 'Adjustment Disorder', 'Anger',
      'Anxiety', 'Assertiveness', 'Autism', 'Bipolar Disorder',
      'Bullying', 'Burnout', 'Career Issues', 'Communication Disorder',
      'Depression', 'Developmental Delay', 'Divorce', 'Domestic Violence',
      'Eating Disorder', 'Emotion Control', 'Family Problems', 'Grief',
      'Marriage Issues', 'OCD', 'Panic Disorder', 'PTSD',
      'Relationship Issues', 'Self Esteem', 'Sleep Issues', 'Stress Management'
    ].slice(0, 32);
  };

  // Updated renderSpecializations function
  const renderSpecializations = (specializationsList) => {
    if (!specializationsList || !Array.isArray(specializationsList)) return null;
    
    return specializationsList.map((spec, index) => (
      <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-2">{spec.name}</h4>
        <p className="text-sm text-gray-700 leading-relaxed">
          {spec.description}
        </p>
      </div>
    ));
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl animate-pulse">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">Loading Profile</h3>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 p-4 flex items-center justify-center">
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          
          <h3 className="text-xl font-bold text-red-800 mb-2">Unable to Load Profile</h3>
          <p className="text-red-600 mb-2">{error.message}</p>
          
          <div className="space-y-3">
            <button
              onClick={handleRetry}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again {retryCount > 0 && `(${retryCount})`}
            </button>
            
            <Link
              to="/therapists"
              className="ml-3 inline-flex items-center px-6 py-3 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Therapists
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Extract data safely
  if (!therapistData) {
    return <div>No therapist data found</div>;
  }

  const therapist = therapistData;
  const reviews = therapistData.reviews || [];

  // Updated usage in your component
  const safeExpertiseAreas = renderExpertiseAreas(therapist.expertise_areas_list);
  const safeSpecializations = renderSpecializations(therapist.specializations_list);

  // Safe data extraction with correct field names
  const defaultLanguages = therapist.languages ? therapist.languages.split(',').map(l => l.trim()) : ['English', 'Hindi'];
  const avgRating = parseFloat(therapist.rating) || 4.5;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-12 text-white relative">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              
              {/* Left - Therapist Info */}
              <div className="flex items-center space-x-6 mb-6 lg:mb-0">
                {/* Profile Picture */}
                <div className="w-32 h-32 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30 shadow-xl">
                  {therapist.photoUrl ? (
                    <img 
                      src={therapist.photoUrl} 
                      alt={therapist.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <User className="w-16 h-16 text-white/80" />
                  )}
                </div>
                
                {/* Info */}
                <div className="space-y-3">
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold mb-2">{therapist.name}</h1>
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 px-4 py-2 rounded-lg border border-white/30">
                        <span className="font-semibold">{therapist.specialization}</span>
                      </div>
                      <div className="bg-emerald-500 px-3 py-1 rounded-full flex items-center">
                        <Verified className="w-4 h-4 mr-1" />
                        <span className="text-sm font-bold">VERIFIED</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg border border-white/30">
                      <div className="flex items-center space-x-1 mr-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(avgRating) ? 'text-yellow-300 fill-current' : 'text-white/40'}`} 
                          />
                        ))}
                      </div>
                      <span className="font-bold text-lg">{avgRating}</span>
                    </div>
                    <div className="text-white/90">
                      <span className="font-semibold">₹{therapist.fee}</span>
                      <span className="text-sm ml-1">per session</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right - Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/book-appointment/${therapist.id}`}
                  className="bg-white text-purple-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a session
                </Link>
                <button className="bg-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors border border-white/30 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message
                </button>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="p-6 bg-gray-50 border-t">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{therapist.experience || '5+ Years'}</div>
                <div className="text-sm text-gray-600">Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{reviews.length}</div>
                <div className="text-sm text-gray-600">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Patients Helped</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* About Me */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-purple-600" />
                About me
              </h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {therapist.profiledescription || 
                    `Experienced therapist specializing in ${therapist.specialization}. I use evidence-based approaches to help clients achieve their mental health goals and improve their overall well-being.`
                  }
                </p>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    {therapist.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {therapist.availabilityhours || "9 AM - 6 PM"}
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Languages className="w-5 h-5 mr-2 text-blue-600" />
                Languages known
              </h3>
              <div className="flex flex-wrap gap-2">
                {defaultLanguages.map((lang, index) => (
                  <span 
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Average user rating */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Average user rating</h3>
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-purple-600">{avgRating}</div>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-6 h-6 ${i < Math.floor(avgRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Based on {reviews.length} reviews</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Area of Expertise */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-purple-600" />
                Area of expertise
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {Array.isArray(safeExpertiseAreas) && safeExpertiseAreas.length > 0 ? (
                  safeExpertiseAreas.slice(0, 32).map((area, index) => (
                    <div 
                      key={index} 
                      className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg px-4 py-3 text-center hover:shadow-md transition-shadow"
                    >
                      <span className="text-sm font-medium text-purple-700">
                        {typeof area === 'object' ? area.name : area}
                      </span>
                    </div>
                  ))
                ) : (
                  // Default areas if no expertise areas available
                  ['Anxiety', 'Depression', 'Stress Management', 'Relationship Issues', 'Family Problems', 'Self Esteem', 'Trauma', 'PTSD'].map((area, index) => (
                    <div 
                      key={index} 
                      className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg px-4 py-3 text-center hover:shadow-md transition-shadow"
                    >
                      <span className="text-sm font-medium text-purple-700">{area}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Updated Specializations section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Stethoscope className="w-6 h-6 mr-3 text-blue-600" />
                Specializations
              </h2>
              
              <div className="space-y-4">
                {safeSpecializations && safeSpecializations.length > 0 ? (
                  safeSpecializations
                ) : (
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Specializes in {therapist.specialization} with expertise in various therapeutic modalities.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-green-600" />
                  Reviews
                </h2>
                
                {/* Write Review Button - Only show if user hasn't reviewed */}
                {!userHasReviewed && (
                  <button
                    onClick={() => setShowReviewModal(true)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2"
                  >
                    <Star className="w-4 h-4" />
                    <span>Write Review</span>
                  </button>
                )}
              </div>
              
              <div className="space-y-6">
                {reviews && reviews.length > 0 ? (
                  reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          {review.user ? review.user.charAt(0).toUpperCase() : 'U'}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-900">{review.user || 'Anonymous'}</h4>
                              <p className="text-sm text-gray-500">
                                Reviewed on {new Date(review.dateposted || review.date_posted).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </p>
                            </div>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < (review.rating || 5) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{review.reviewtext || review.review_text}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>No reviews yet. Be the first to review this therapist!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Modal */}
      <ReviewModal
        isOpen={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        therapist={therapist}
        onSubmitSuccess={handleReviewSuccess}
      />
    </div>
  );
};

export default TherapistDetail;
