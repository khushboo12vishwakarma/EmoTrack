

// // // // // export default BookAppointment;
// // // // // pages/BookAppointment.js - WITH THERAPIST IMAGES
// // // // import React, { useState, useEffect } from 'react';
// // // // import { useParams, useNavigate } from 'react-router-dom';
// // // // import { therapistService } from '../services/therapistService';
// // // // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // // // import { 
// // // //   Calendar, 
// // // //   Clock, 
// // // //   Video, 
// // // //   Phone, 
// // // //   MessageCircle, 
// // // //   MapPin, 
// // // //   User, 
// // // //   Star, 
// // // //   Shield, 
// // // //   ArrowLeft,
// // // //   CheckCircle,
// // // //   Award,
// // // //   Heart
// // // // } from 'lucide-react';

// // // // const BookAppointment = () => {
// // // //   const { therapistId } = useParams();
// // // //   const navigate = useNavigate();
  
// // // //   const [therapist, setTherapist] = useState(null);
// // // //   const [therapists, setTherapists] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [submitting, setSubmitting] = useState(false);
// // // //   const [error, setError] = useState('');
// // // //   const [success, setSuccess] = useState('');
// // // //   const [imageError, setImageError] = useState(false); // Track image loading errors
  
// // // //   const [formData, setFormData] = useState({
// // // //     date: '',
// // // //     time_slot: '',
// // // //     mode: 'online',
// // // //     online_type: 'Video Call',
// // // //     notes: '',
// // // //     selectedTherapistId: '',
// // // //   });

// // // //   useEffect(() => {
// // // //     if (therapistId) {
// // // //       fetchTherapistDetail();
// // // //     } else {
// // // //       fetchAllTherapists();
// // // //     }
// // // //   }, [therapistId]);

// // // //   // Reset image error when therapist changes
// // // //   useEffect(() => {
// // // //     setImageError(false);
// // // //   }, [therapist, formData.selectedTherapistId]);

// // // //   const fetchTherapistDetail = async () => {
// // // //     try {
// // // //       setLoading(true);
// // // //       setError('');
// // // //       const data = await therapistService.getTherapistDetail(therapistId);
// // // //       setTherapist(data.therapist || data);
      
// // // //       const therapistData = data.therapist || data;
// // // //       if (therapistData.availability_mode === 'offline') {
// // // //         setFormData(prev => ({ ...prev, mode: 'offline', online_type: '' }));
// // // //       }
// // // //     } catch (err) {
// // // //       setError('Failed to load therapist details');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const fetchAllTherapists = async () => {
// // // //     try {
// // // //       setLoading(true);
// // // //       setError('');
// // // //       console.log('🔍 Loading therapists for selection...');
      
// // // //       const data = await therapistService.getAllTherapists();
      
// // // //       if (data && data.length > 0) {
// // // //         setTherapists(data);
// // // //         const firstTherapist = data[0];
// // // //         setFormData(prev => ({ 
// // // //           ...prev, 
// // // //           selectedTherapistId: firstTherapist.id,
// // // //           mode: firstTherapist.availability_mode === 'offline' ? 'offline' : 'online',
// // // //           online_type: firstTherapist.availability_mode === 'offline' ? '' : 'Video Call'
// // // //         }));
// // // //       } else {
// // // //         setError('No therapists available at the moment.');
// // // //       }
// // // //     } catch (err) {
// // // //       console.error('❌ Error loading therapists:', err);
// // // //       setError('Failed to load therapists. Please try again.');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData(prev => ({
// // // //       ...prev,
// // // //       [name]: value,
// // // //     }));

// // // //     if (name === 'selectedTherapistId' && therapists.length > 0) {
// // // //       const selectedTherapist = therapists.find(t => t.id === parseInt(value));
// // // //       if (selectedTherapist) {
// // // //         setFormData(prev => ({
// // // //           ...prev,
// // // //           mode: selectedTherapist.availability_mode === 'offline' ? 'offline' : 'online',
// // // //           online_type: selectedTherapist.availability_mode === 'offline' ? '' : 'Video Call'
// // // //         }));
// // // //         setImageError(false); // Reset image error for new selection
// // // //       }
// // // //     }
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setSubmitting(true);
// // // //     setError('');
// // // //     setSuccess('');

// // // //     try {
// // // //       const targetTherapistId = therapistId || formData.selectedTherapistId;
      
// // // //       if (!targetTherapistId) {
// // // //         throw new Error('Please select a therapist');
// // // //       }

// // // //       const appointmentData = {
// // // //         ...formData,
// // // //         therapist: targetTherapistId,
// // // //       };

// // // //       console.log('📅 Booking appointment:', appointmentData);
// // // //       const response = await therapistService.bookAppointment(appointmentData);
      
// // // //       let therapistInfo;
// // // //       if (therapist) {
// // // //         therapistInfo = therapist;
// // // //       } else {
// // // //         therapistInfo = therapists.find(t => t.id === parseInt(targetTherapistId));
// // // //       }

// // // //       navigate('/booking-confirmation', {
// // // //         state: {
// // // //           bookingData: {
// // // //             therapistName: therapistInfo?.name || 'Therapist',
// // // //             date: formData.date,
// // // //             time: formData.time_slot,
// // // //             mode: formData.mode === 'online' ? formData.online_type : 'In-Person Session',
// // // //             confirmationId: response.data?.confirmationId || "BK" + Math.random().toString(36).substr(2, 9).toUpperCase(),
// // // //             therapistSpecialty: therapistInfo?.specialization || 'Therapy Session',
// // // //             sessionDuration: "50 minutes",
// // // //             location: therapistInfo?.location || 'TBD'
// // // //           }
// // // //         }
// // // //       });
      
// // // //     } catch (err) {
// // // //       console.error('❌ Booking error:', err);
// // // //       setError(err.response?.data?.error || err.message || 'Failed to book appointment. Please try again.');
// // // //     } finally {
// // // //       setSubmitting(false);
// // // //     }
// // // //   };

// // // //   const getCurrentTherapist = () => {
// // // //     if (therapist) return therapist;
// // // //     if (therapists.length > 0 && formData.selectedTherapistId) {
// // // //       return therapists.find(t => t.id === parseInt(formData.selectedTherapistId));
// // // //     }
// // // //     return null;
// // // //   };

// // // //   const currentTherapist = getCurrentTherapist();

// // // //   // Handle image loading error
// // // //   const handleImageError = () => {
// // // //     setImageError(true);
// // // //   };

// // // //   // Generate initials for fallback
// // // //   const getInitials = (name) => {
// // // //     if (!name) return 'DR';
// // // //     return name
// // // //       .split(' ')
// // // //       .map(word => word[0])
// // // //       .join('')
// // // //       .toUpperCase()
// // // //       .substring(0, 2);
// // // //   };

// // // //   const generateTimeSlots = () => {
// // // //     const slots = [];
// // // //     for (let hour = 9; hour <= 17; hour++) {
// // // //       slots.push(`${hour.toString().padStart(2, '0')}:00`);
// // // //       if (hour < 17) {
// // // //         slots.push(`${hour.toString().padStart(2, '0')}:30`);
// // // //       }
// // // //     }
// // // //     return slots;
// // // //   };

// // // //   const getMinDate = () => {
// // // //     const today = new Date();
// // // //     return today.toISOString().split('T')[0];
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
// // // //         <div className="text-center space-y-6">
// // // //           <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
// // // //             <Heart className="w-10 h-10 text-white animate-pulse" />
// // // //           </div>
// // // //           <LoadingSpinner size="lg" />
// // // //           <div className="space-y-2">
// // // //             <h3 className="text-xl font-semibold text-gray-800">
// // // //               {therapistId ? 'Loading Therapist Details' : 'Loading Available Therapists'}
// // // //             </h3>
// // // //             <p className="text-gray-500">Preparing your booking experience...</p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (error && !currentTherapist && therapists.length === 0) {
// // // //     return (
// // // //       <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 p-4 flex items-center justify-center">
// // // //         <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
// // // //           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// // // //             <Shield className="w-8 h-8 text-red-600" />
// // // //           </div>
// // // //           <h3 className="text-xl font-bold text-red-800 mb-2">Unable to Load</h3>
// // // //           <p className="text-red-600 mb-6">{error}</p>
// // // //           <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // // //             <button
// // // //               onClick={() => therapistId ? fetchTherapistDetail() : fetchAllTherapists()}
// // // //               className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
// // // //             >
// // // //               <ArrowLeft className="w-4 h-4 mr-2 rotate-180" />
// // // //               Try Again
// // // //             </button>
// // // //             <button
// // // //               onClick={() => navigate('/therapists')}
// // // //               className="inline-flex items-center px-6 py-3 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 transition-colors"
// // // //             >
// // // //               <ArrowLeft className="w-4 h-4 mr-2" />
// // // //               Browse Therapists
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 font-['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
// // // //         {/* HERO SECTION */}
// // // //         <div className="text-center mb-12">
// // // //           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl mb-6">
// // // //             <Calendar className="w-8 h-8 text-indigo-600" />
// // // //           </div>
// // // //           <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Session</h1>
// // // //           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// // // //             {therapistId 
// // // //               ? `Schedule a personalized session with ${therapist?.name || 'your therapist'}`
// // // //               : 'Choose a therapist and schedule your personalized session'
// // // //             }
// // // //           </p>
// // // //         </div>

// // // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // //           {/* ENHANCED THERAPIST INFO CARD WITH IMAGE */}
// // // //           <div className="lg:col-span-1">
// // // //             <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-8">
// // // //               {/* Card Header */}
// // // //               <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
// // // //                 <div className="flex items-center space-x-4">
// // // //                   <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
// // // //                     <User className="w-7 h-7 text-white" />
// // // //                   </div>
// // // //                   <div>
// // // //                     <h2 className="text-xl font-bold">
// // // //                       {therapistId ? 'Therapist Details' : 'Select Therapist'}
// // // //                     </h2>
// // // //                     <p className="text-indigo-100 text-sm">
// // // //                       {therapistId ? 'Licensed Professional' : 'Choose your preferred therapist'}
// // // //                     </p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Card Body */}
// // // //               <div className="p-6 space-y-6">
// // // //                 {/* Therapist Selection Dropdown (only for general booking) */}
// // // //                 {!therapistId && therapists.length > 0 && (
// // // //                   <div>
// // // //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                       Available Therapists
// // // //                     </label>
// // // //                     <select
// // // //                       name="selectedTherapistId"
// // // //                       value={formData.selectedTherapistId}
// // // //                       onChange={handleChange}
// // // //                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
// // // //                     >
// // // //                       {therapists.map((therapist) => (
// // // //                         <option key={therapist.id} value={therapist.id}>
// // // //                           {therapist.name} - {therapist.specialization}
// // // //                         </option>
// // // //                       ))}
// // // //                     </select>
// // // //                   </div>
// // // //                 )}

// // // //                 {/* ✨ THERAPIST IMAGE SECTION */}
// // // //                 {currentTherapist && (
// // // //                   <div className="text-center mb-6">
// // // //                     {currentTherapist.image && !imageError ? (
// // // //                       <img
// // // //                         src={currentTherapist.image}
// // // //                         alt={currentTherapist.name}
// // // //                         className="w-32 h-32 rounded-full object-cover shadow-lg mx-auto border-4 border-white"
// // // //                         onError={handleImageError}
// // // //                         onLoad={() => setImageError(false)}
// // // //                       />
// // // //                     ) : (
// // // //                       // Fallback when no image or image fails to load
// // // //                       <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto shadow-lg border-4 border-white">
// // // //                         <span className="text-3xl font-bold text-white">
// // // //                           {getInitials(currentTherapist.name)}
// // // //                         </span>
// // // //                       </div>
// // // //                     )}
// // // //                   </div>
// // // //                 )}

// // // //                 {/* Therapist Info Display */}
// // // //                 {currentTherapist && (
// // // //                   <div>
// // // //                     <div className="flex items-center justify-between mb-2">
// // // //                       <h3 className="text-lg font-bold text-gray-900">{currentTherapist.name}</h3>
// // // //                       <div className="inline-flex items-center px-2 py-1 bg-emerald-100 rounded-full">
// // // //                         <Shield className="w-3 h-3 text-emerald-600 mr-1" />
// // // //                         <span className="text-xs font-bold text-emerald-700">VERIFIED</span>
// // // //                       </div>
// // // //                     </div>
// // // //                     <div className="inline-flex items-center px-3 py-1 bg-indigo-100 rounded-full mb-4">
// // // //                       <Award className="w-3 h-3 text-indigo-600 mr-1" />
// // // //                       <span className="text-sm font-semibold text-indigo-700">{currentTherapist.specialization}</span>
// // // //                     </div>
// // // //                   </div>
// // // //                 )}
                
// // // //                 {currentTherapist && (
// // // //                   <div className="space-y-4">
// // // //                     <div className="flex items-center p-3 bg-gray-50 rounded-xl">
// // // //                       <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
// // // //                         <MapPin className="h-5 w-5 text-blue-600" />
// // // //                       </div>
// // // //                       <div>
// // // //                         <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Location</div>
// // // //                         <div className="font-semibold text-gray-900">{currentTherapist.location}</div>
// // // //                       </div>
// // // //                     </div>
                    
// // // //                     <div className="flex items-center p-3 bg-gray-50 rounded-xl">
// // // //                       <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
// // // //                         <Clock className="h-5 w-5 text-emerald-600" />
// // // //                       </div>
// // // //                       <div>
// // // //                         <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Available</div>
// // // //                         <div className="font-semibold text-gray-900">{currentTherapist.availability_hours || "9 AM - 6 PM"}</div>
// // // //                       </div>
// // // //                     </div>

// // // //                     {currentTherapist.rating && (
// // // //                       <div className="flex items-center p-3 bg-yellow-50 rounded-xl">
// // // //                         <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
// // // //                           <Star className="h-5 w-5 text-yellow-600 fill-current" />
// // // //                         </div>
// // // //                         <div>
// // // //                           <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Rating</div>
// // // //                           <div className="font-semibold text-gray-900">{currentTherapist.rating}/5.0</div>
// // // //                         </div>
// // // //                       </div>
// // // //                     )}
                    
// // // //                     {/* Availability Badge */}
// // // //                     <div className="text-center pt-2">
// // // //                       <span
// // // //                         className={`inline-flex items-center px-4 py-2 rounded-xl font-semibold text-sm ${
// // // //                           currentTherapist.availability_mode === 'online'
// // // //                             ? 'bg-emerald-100 text-emerald-700'
// // // //                             : currentTherapist.availability_mode === 'offline'
// // // //                             ? 'bg-blue-100 text-blue-700'
// // // //                             : 'bg-purple-100 text-purple-700'
// // // //                         }`}
// // // //                       >
// // // //                         {currentTherapist.availability_mode === 'online'
// // // //                           ? 'Online Sessions Only'
// // // //                           : currentTherapist.availability_mode === 'offline'
// // // //                           ? 'In-Person Sessions Only'
// // // //                           : 'Online & In-Person Available'}
// // // //                       </span>
// // // //                     </div>
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* BOOKING FORM (REST OF YOUR EXISTING CODE) */}
// // // //           <div className="lg:col-span-2">
// // // //             <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
// // // //               {/* Form Header */}
// // // //               <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-100 p-6">
// // // //                 <h2 className="text-2xl font-bold text-gray-900">Schedule Your Appointment</h2>
// // // //                 <p className="text-gray-600 mt-1">Fill in the details below to book your session</p>
// // // //               </div>

// // // //               <div className="p-6">
// // // //                 {/* Error Display */}
// // // //                 {error && (
// // // //                   <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4 rounded-r-xl">
// // // //                     <div className="flex items-center">
// // // //                       <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
// // // //                         <Shield className="w-4 h-4 text-red-600" />
// // // //                       </div>
// // // //                       <div>
// // // //                         <h4 className="font-semibold text-red-800">Booking Error</h4>
// // // //                         <p className="text-red-600">{error}</p>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 )}

// // // //                 <form onSubmit={handleSubmit} className="space-y-8">
// // // //                   {/* Date Selection */}
// // // //                   <div>
// // // //                     <label className="flex items-center text-lg font-semibold text-gray-900 mb-4">
// // // //                       <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
// // // //                         <Calendar className="h-4 w-4 text-indigo-600" />
// // // //                       </div>
// // // //                       Select Date
// // // //                     </label>
// // // //                     <input
// // // //                       type="date"
// // // //                       name="date"
// // // //                       value={formData.date}
// // // //                       onChange={handleChange}
// // // //                       min={getMinDate()}
// // // //                       required
// // // //                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-lg"
// // // //                     />
// // // //                   </div>

// // // //                   {/* Time Slot Selection */}
// // // //                   <div>
// // // //                     <label className="flex items-center text-lg font-semibold text-gray-900 mb-4">
// // // //                       <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
// // // //                         <Clock className="h-4 w-4 text-emerald-600" />
// // // //                       </div>
// // // //                       Select Time
// // // //                     </label>
// // // //                     <select
// // // //                       name="time_slot"
// // // //                       value={formData.time_slot}
// // // //                       onChange={handleChange}
// // // //                       required
// // // //                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-lg"
// // // //                     >
// // // //                       <option value="">Choose your preferred time slot</option>
// // // //                       {generateTimeSlots().map((slot) => (
// // // //                         <option key={slot} value={slot}>
// // // //                           {slot}
// // // //                         </option>
// // // //                       ))}
// // // //                     </select>
// // // //                   </div>

// // // //                   {/* Session Mode & Rest of Form - Keep your existing code here */}
// // // //                   {currentTherapist && (
// // // //                     <div>
// // // //                       <label className="block text-lg font-semibold text-gray-900 mb-4">
// // // //                         Session Format
// // // //                       </label>
// // // //                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                         {/* Your existing session mode options */}
// // // //                         {(currentTherapist.availability_mode === 'online' || currentTherapist.availability_mode === 'both' || !currentTherapist.availability_mode) && (
// // // //                           <label className="relative cursor-pointer">
// // // //                             <input
// // // //                               type="radio"
// // // //                               name="mode"
// // // //                               value="online"
// // // //                               checked={formData.mode === 'online'}
// // // //                               onChange={handleChange}
// // // //                               className="sr-only"
// // // //                             />
// // // //                             <div
// // // //                               className={`border-2 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg ${
// // // //                                 formData.mode === 'online'
// // // //                                   ? 'border-indigo-500 bg-indigo-50 shadow-md'
// // // //                                   : 'border-gray-200 hover:border-indigo-300'
// // // //                               }`}
// // // //                             >
// // // //                               <div className="flex items-center mb-3">
// // // //                                 <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
// // // //                                   <Video className="h-6 w-6 text-emerald-600" />
// // // //                                 </div>
// // // //                                 <div>
// // // //                                   <span className="text-lg font-bold text-gray-900">Online Session</span>
// // // //                                   {formData.mode === 'online' && (
// // // //                                     <CheckCircle className="w-5 h-5 text-indigo-600 ml-2 inline" />
// // // //                                   )}
// // // //                                 </div>
// // // //                               </div>
// // // //                               <p className="text-gray-600 leading-relaxed">
// // // //                                 Connect from the comfort of your home via video call, voice call, or secure messaging
// // // //                               </p>
// // // //                             </div>
// // // //                           </label>
// // // //                         )}

// // // //                         {(currentTherapist.availability_mode === 'offline' || currentTherapist.availability_mode === 'both' || !currentTherapist.availability_mode) && (
// // // //                           <label className="relative cursor-pointer">
// // // //                             <input
// // // //                               type="radio"
// // // //                               name="mode"
// // // //                               value="offline"
// // // //                               checked={formData.mode === 'offline'}
// // // //                               onChange={handleChange}
// // // //                               className="sr-only"
// // // //                             />
// // // //                             <div
// // // //                               className={`border-2 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg ${
// // // //                                 formData.mode === 'offline'
// // // //                                   ? 'border-indigo-500 bg-indigo-50 shadow-md'
// // // //                                   : 'border-gray-200 hover:border-indigo-300'
// // // //                               }`}
// // // //                             >
// // // //                               <div className="flex items-center mb-3">
// // // //                                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
// // // //                                   <MapPin className="h-6 w-6 text-blue-600" />
// // // //                                 </div>
// // // //                                 <div>
// // // //                                   <span className="text-lg font-bold text-gray-900">In-Person Session</span>
// // // //                                   {formData.mode === 'offline' && (
// // // //                                     <CheckCircle className="w-5 h-5 text-indigo-600 ml-2 inline" />
// // // //                                   )}
// // // //                                 </div>
// // // //                               </div>
// // // //                               <p className="text-gray-600 leading-relaxed">
// // // //                                 Meet face-to-face at the therapist's professional office location
// // // //                               </p>
// // // //                             </div>
// // // //                           </label>
// // // //                         )}
// // // //                       </div>
// // // //                     </div>
// // // //                   )}

// // // //                   {/* Online Type Selection */}
// // // //                   {formData.mode === 'online' && (
// // // //                     <div>
// // // //                       <label className="block text-lg font-semibold text-gray-900 mb-4">
// // // //                         Online Session Type
// // // //                       </label>
// // // //                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // // //                         {[
// // // //                           { value: 'Video Call', icon: Video, label: 'Video Call', desc: 'Face-to-face video' },
// // // //                           { value: 'Voice Call', icon: Phone, label: 'Voice Call', desc: 'Audio only' },
// // // //                           { value: 'Live Chat', icon: MessageCircle, label: 'Live Chat', desc: 'Text messaging' },
// // // //                         ].map(({ value, icon: Icon, label, desc }) => (
// // // //                           <label key={value} className="relative cursor-pointer">
// // // //                             <input
// // // //                               type="radio"
// // // //                               name="online_type"
// // // //                               value={value}
// // // //                               checked={formData.online_type === value}
// // // //                               onChange={handleChange}
// // // //                               className="sr-only"
// // // //                             />
// // // //                             <div
// // // //                               className={`border-2 rounded-2xl p-4 transition-all duration-200 text-center hover:shadow-md ${
// // // //                                 formData.online_type === value
// // // //                                   ? 'border-indigo-500 bg-indigo-50 shadow-md'
// // // //                                   : 'border-gray-200 hover:border-indigo-300'
// // // //                               }`}
// // // //                             >
// // // //                               <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
// // // //                                 <Icon className="h-6 w-6 text-indigo-600" />
// // // //                               </div>
// // // //                               <span className="font-bold text-gray-900 block">{label}</span>
// // // //                               <span className="text-sm text-gray-600">{desc}</span>
// // // //                               {formData.online_type === value && (
// // // //                                 <CheckCircle className="w-5 h-5 text-indigo-600 mx-auto mt-2" />
// // // //                               )}
// // // //                             </div>
// // // //                           </label>
// // // //                         ))}
// // // //                       </div>
// // // //                     </div>
// // // //                   )}

// // // //                   {/* Notes */}
// // // //                   <div>
// // // //                     <label className="block text-lg font-semibold text-gray-900 mb-4">
// // // //                       Additional Notes (Optional)
// // // //                     </label>
// // // //                     <textarea
// // // //                       name="notes"
// // // //                       value={formData.notes}
// // // //                       onChange={handleChange}
// // // //                       rows={4}
// // // //                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none text-lg"
// // // //                       placeholder="Share any specific concerns, goals, or topics you'd like to discuss in your session..."
// // // //                     />
// // // //                   </div>

// // // //                   {/* Submit Button */}
// // // //                   <div className="pt-4">
// // // //                     <button
// // // //                       type="submit"
// // // //                       disabled={submitting || !currentTherapist}
// // // //                       className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none"
// // // //                     >
// // // //                       {submitting ? (
// // // //                         <div className="flex items-center justify-center">
// // // //                           <LoadingSpinner size="sm" />
// // // //                           <span className="ml-3">Booking Your Session...</span>
// // // //                         </div>
// // // //                       ) : (
// // // //                         <div className="flex items-center justify-center">
// // // //                           <Calendar className="w-5 h-5 mr-3" />
// // // //                           Confirm & Book Appointment
// // // //                         </div>
// // // //                       )}
// // // //                     </button>
                    
// // // //                     <p className="text-center text-sm text-gray-500 mt-4">
// // // //                       By booking, you agree to our terms of service and privacy policy. 
// // // //                       You'll receive a confirmation email shortly after booking.
// // // //                     </p>
// // // //                   </div>
// // // //                 </form>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BookAppointment;
// // // import React, { useState, useEffect } from 'react';
// // // import { useParams, useNavigate } from 'react-router-dom';
// // // import { therapistService } from '../services/therapistService';
// // // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // // import { 
// // //   Calendar, 
// // //   Clock, 
// // //   Video, 
// // //   Phone, 
// // //   MessageCircle, 
// // //   MapPin, 
// // //   User, 
// // //   Star, 
// // //   Shield, 
// // //   ArrowLeft,
// // //   CheckCircle,
// // //   Award,
// // //   Heart
// // // } from 'lucide-react';

// // // const BookAppointment = () => {
// // //   const { therapistId } = useParams();
// // //   const navigate = useNavigate();
// // //   const [therapist, setTherapist] = useState(null);
// // //   const [therapists, setTherapists] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [submitting, setSubmitting] = useState(false);
// // //   const [error, setError] = useState('');
// // //   const [success, setSuccess] = useState('');
// // //   const [imageError, setImageError] = useState(false); // Track image loading errors
// // //   const [formData, setFormData] = useState({
// // //     date: '',
// // //     time_slot: '',
// // //     mode: 'online',
// // //     online_type: 'Video Call',
// // //     notes: '',
// // //     selectedTherapistId: '',
// // //   });

// // //   useEffect(() => {
// // //     if (therapistId) {
// // //       fetchTherapistDetail();
// // //     } else {
// // //       fetchAllTherapists();
// // //     }
// // //   }, [therapistId]);

// // //   // Reset image error when therapist changes
// // //   useEffect(() => {
// // //     setImageError(false);
// // //   }, [therapist, formData.selectedTherapistId]);

// // //   const fetchTherapistDetail = async () => {
// // //     try {
// // //       setLoading(true);
// // //       setError('');
// // //       const data = await therapistService.getTherapistDetail(therapistId);
// // //       setTherapist(data.therapist || data);
      
// // //       const therapistData = data.therapist || data;
// // //       if (therapistData.availability_mode === 'offline') {
// // //         setFormData(prev => ({ ...prev, mode: 'offline', online_type: '' }));
// // //       }
// // //     } catch (err) {
// // //       setError('Failed to load therapist details');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const fetchAllTherapists = async () => {
// // //     try {
// // //       setLoading(true);
// // //       setError('');
// // //       console.log('🔍 Loading therapists for selection...');
      
// // //       const data = await therapistService.getAllTherapists();
      
// // //       if (data && data.length > 0) {
// // //         setTherapists(data);
// // //         const firstTherapist = data[0];
// // //         setFormData(prev => ({ 
// // //           ...prev, 
// // //           selectedTherapistId: firstTherapist.id,
// // //           mode: firstTherapist.availability_mode === 'offline' ? 'offline' : 'online',
// // //           online_type: firstTherapist.availability_mode === 'offline' ? '' : 'Video Call'
// // //         }));
// // //       } else {
// // //         setError('No therapists available at the moment.');
// // //       }
// // //     } catch (err) {
// // //       console.error('❌ Error loading therapists:', err);
// // //       setError('Failed to load therapists. Please try again.');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData(prev => ({
// // //       ...prev,
// // //       [name]: value,
// // //     }));

// // //     if (name === 'selectedTherapistId' && therapists.length > 0) {
// // //       const selectedTherapist = therapists.find(t => t.id === parseInt(value));
// // //       if (selectedTherapist) {
// // //         setFormData(prev => ({
// // //           ...prev,
// // //           mode: selectedTherapist.availability_mode === 'offline' ? 'offline' : 'online',
// // //           online_type: selectedTherapist.availability_mode === 'offline' ? '' : 'Video Call'
// // //         }));
// // //         setImageError(false); // Reset image error for new selection
// // //       }
// // //     }
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setSubmitting(true);
// // //     setError('');
// // //     setSuccess('');

// // //     try {
// // //       const targetTherapistId = therapistId || formData.selectedTherapistId;
      
// // //       if (!targetTherapistId) {
// // //         throw new Error('Please select a therapist');
// // //       }

// // //       const appointmentData = {
// // //         ...formData,
// // //         therapist: targetTherapistId,
// // //       };

// // //       console.log('📅 Booking appointment:', appointmentData);
// // //       const response = await therapistService.bookAppointment(appointmentData);
      
// // //       let therapistInfo;
// // //       if (therapist) {
// // //         therapistInfo = therapist;
// // //       } else {
// // //         therapistInfo = therapists.find(t => t.id === parseInt(targetTherapistId));
// // //       }

// // //       navigate('/booking-confirmation', {
// // //         state: {
// // //           bookingData: {
// // //             therapistName: therapistInfo?.name || 'Therapist',
// // //             date: formData.date,
// // //             time: formData.time_slot,
// // //             mode: formData.mode === 'online' ? formData.online_type : 'In-Person Session',
// // //             confirmationId: response.data?.confirmationId || "BK" + Math.random().toString(36).substr(2, 9).toUpperCase(),
// // //             therapistSpecialty: therapistInfo?.specialization || 'Therapy Session',
// // //             sessionDuration: "50 minutes",
// // //             location: therapistInfo?.location || 'TBD'
// // //           }
// // //         }
// // //       });
      
// // //     } catch (err) {
// // //       console.error('❌ Booking error:', err);
// // //       setError(err.response?.data?.error || err.message || 'Failed to book appointment. Please try again.');
// // //     } finally {
// // //       setSubmitting(false);
// // //     }
// // //   };

// // //   const getCurrentTherapist = () => {
// // //     if (therapist) return therapist;
// // //     if (therapists.length > 0 && formData.selectedTherapistId) {
// // //       return therapists.find(t => t.id === parseInt(formData.selectedTherapistId));
// // //     }
// // //     return null;
// // //   };

// // //   const currentTherapist = getCurrentTherapist();

// // //   // Handle image loading error
// // //   const handleImageError = () => {
// // //     setImageError(true);
// // //   };

// // //   // Generate initials for fallback
// // //   const getInitials = (name) => {
// // //     if (!name) return 'DR';
// // //     return name
// // //       .split(' ')
// // //       .map(word => word[0])
// // //       .join('')
// // //       .toUpperCase()
// // //       .substring(0, 2);
// // //   };

// // //   const generateTimeSlots = () => {
// // //     const slots = [];
// // //     for (let hour = 9; hour <= 17; hour++) {
// // //       slots.push(`${hour.toString().padStart(2, '0')}:00`);
// // //       if (hour < 17) {
// // //         slots.push(`${hour.toString().padStart(2, '0')}:30`);
// // //       }
// // //     }
// // //     return slots;
// // //   };

// // //   const getMinDate = () => {
// // //     const today = new Date();
// // //     return today.toISOString().split('T')[0];
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
// // //         <div className="text-center space-y-6">
// // //           <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
// // //             <Heart className="w-10 h-10 text-white animate-pulse" />
// // //           </div>
// // //           <LoadingSpinner size="lg" />
// // //           <div className="space-y-2">
// // //             <h3 className="text-xl font-semibold text-gray-800">
// // //               {therapistId ? 'Loading Therapist Details' : 'Loading Available Therapists'}
// // //             </h3>
// // //             <p className="text-gray-500">Preparing your booking experience...</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   if (error && !currentTherapist && therapists.length === 0) {
// // //     return (
// // //       <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 p-4 flex items-center justify-center">
// // //         <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
// // //           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// // //             <Shield className="w-8 h-8 text-red-600" />
// // //           </div>
// // //           <h3 className="text-xl font-bold text-red-800 mb-2">Unable to Load</h3>
// // //           <p className="text-red-600 mb-6">{error}</p>
// // //           <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // //             <button
// // //               onClick={() => therapistId ? fetchTherapistDetail() : fetchAllTherapists()}
// // //               className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
// // //             >
// // //               <ArrowLeft className="w-4 h-4 mr-2 rotate-180" />
// // //               Try Again
// // //             </button>
// // //             <button
// // //               onClick={() => navigate('/therapists')}
// // //               className="inline-flex items-center px-6 py-3 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 transition-colors"
// // //             >
// // //               <ArrowLeft className="w-4 h-4 mr-2" />
// // //               Browse Therapists
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 font-['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
// // //         {/* HERO SECTION */}
// // //         <div className="text-center mb-12">
// // //           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl mb-6">
// // //             <Calendar className="w-8 h-8 text-indigo-600" />
// // //           </div>
// // //           <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Session</h1>
// // //           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// // //             {therapistId 
// // //               ? `Schedule a personalized session with ${therapist?.name || 'your therapist'}`
// // //               : 'Choose a therapist and schedule your personalized session'
// // //             }
// // //           </p>
// // //         </div>

// // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //           {/* ENHANCED THERAPIST INFO CARD WITH IMAGE */}
// // //           <div className="lg:col-span-1">
// // //             <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-8">
// // //               {/* Card Header */}
// // //               <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
// // //                 <div className="flex items-center space-x-4">
// // //                   <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
// // //                     <User className="w-7 h-7 text-white" />
// // //                   </div>
// // //                   <div>
// // //                     <h2 className="text-xl font-bold">
// // //                       {therapistId ? 'Therapist Details' : 'Select Therapist'}
// // //                     </h2>
// // //                     <p className="text-indigo-100 text-sm">
// // //                       {therapistId ? 'Licensed Professional' : 'Choose your preferred therapist'}
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Card Body */}
// // //               <div className="p-6 space-y-6">
// // //                 {/* Therapist Selection Dropdown (only for general booking) */}
// // //                 {!therapistId && therapists.length > 0 && (
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                       Available Therapists
// // //                     </label>
// // //                     <select
// // //                       name="selectedTherapistId"
// // //                       value={formData.selectedTherapistId}
// // //                       onChange={handleChange}
// // //                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
// // //                     >
// // //                       {therapists.map((therapist) => (
// // //                         <option key={therapist.id} value={therapist.id}>
// // //                           {therapist.name} - {therapist.specialization}
// // //                         </option>
// // //                       ))}
// // //                     </select>
// // //                   </div>
// // //                 )}

// // //                 {/* ✨ UPDATED THERAPIST IMAGE SECTION */}
// // //                 {currentTherapist && (
// // //                   <div className="text-center mb-6">
// // //                     <div className="w-32 h-32 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30 shadow-xl mx-auto">
// // //                       {(currentTherapist.photoUrl || currentTherapist.image) && !imageError ? (
// // //                         <img 
// // //                           src={currentTherapist.photoUrl || currentTherapist.image}
// // //                           alt={currentTherapist.name}
// // //                           className="w-full h-full object-cover rounded-2xl"
// // //                           onError={handleImageError}
// // //                           onLoad={() => setImageError(false)}
// // //                         />
// // //                       ) : (
// // //                         <User className="w-16 h-16 text-white/80" />
// // //                       )}
// // //                     </div>
// // //                   </div>
// // //                 )}

// // //                 {/* Therapist Info Display */}
// // //                 {currentTherapist && (
// // //                   <div>
// // //                     <div className="flex items-center justify-between mb-2">
// // //                       <h3 className="text-lg font-bold text-gray-900">{currentTherapist.name}</h3>
// // //                       <div className="inline-flex items-center px-2 py-1 bg-emerald-100 rounded-full">
// // //                         <Shield className="w-3 h-3 text-emerald-600 mr-1" />
// // //                         <span className="text-xs font-bold text-emerald-700">VERIFIED</span>
// // //                       </div>
// // //                     </div>
// // //                     <div className="inline-flex items-center px-3 py-1 bg-indigo-100 rounded-full mb-4">
// // //                       <Award className="w-3 h-3 text-indigo-600 mr-1" />
// // //                       <span className="text-sm font-semibold text-indigo-700">{currentTherapist.specialization}</span>
// // //                     </div>
// // //                   </div>
// // //                 )}
                
// // //                 {currentTherapist && (
// // //                   <div className="space-y-4">
// // //                     <div className="flex items-center p-3 bg-gray-50 rounded-xl">
// // //                       <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
// // //                         <MapPin className="h-5 w-5 text-blue-600" />
// // //                       </div>
// // //                       <div>
// // //                         <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Location</div>
// // //                         <div className="font-semibold text-gray-900">{currentTherapist.location}</div>
// // //                       </div>
// // //                     </div>
                    
// // //                     <div className="flex items-center p-3 bg-gray-50 rounded-xl">
// // //                       <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
// // //                         <Clock className="h-5 w-5 text-emerald-600" />
// // //                       </div>
// // //                       <div>
// // //                         <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Available</div>
// // //                         <div className="font-semibold text-gray-900">{currentTherapist.availability_hours || "9 AM - 6 PM"}</div>
// // //                       </div>
// // //                     </div>

// // //                     {currentTherapist.rating && (
// // //                       <div className="flex items-center p-3 bg-yellow-50 rounded-xl">
// // //                         <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
// // //                           <Star className="h-5 w-5 text-yellow-600 fill-current" />
// // //                         </div>
// // //                         <div>
// // //                           <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Rating</div>
// // //                           <div className="font-semibold text-gray-900">{currentTherapist.rating}/5.0</div>
// // //                         </div>
// // //                       </div>
// // //                     )}
                    
// // //                     {/* Availability Badge */}
// // //                     <div className="text-center pt-2">
// // //                       <span
// // //                         className={`inline-flex items-center px-4 py-2 rounded-xl font-semibold text-sm ${
// // //                           currentTherapist.availability_mode === 'online'
// // //                             ? 'bg-emerald-100 text-emerald-700'
// // //                             : currentTherapist.availability_mode === 'offline'
// // //                             ? 'bg-blue-100 text-blue-700'
// // //                             : 'bg-purple-100 text-purple-700'
// // //                         }`}
// // //                       >
// // //                         {currentTherapist.availability_mode === 'online'
// // //                           ? 'Online Sessions Only'
// // //                           : currentTherapist.availability_mode === 'offline'
// // //                           ? 'In-Person Sessions Only'
// // //                           : 'Online & In-Person Available'}
// // //                       </span>
// // //                     </div>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* BOOKING FORM (REST OF YOUR EXISTING CODE) */}
// // //           <div className="lg:col-span-2">
// // //             <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
// // //               {/* Form Header */}
// // //               <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-100 p-6">
// // //                 <h2 className="text-2xl font-bold text-gray-900">Schedule Your Appointment</h2>
// // //                 <p className="text-gray-600 mt-1">Fill in the details below to book your session</p>
// // //               </div>

// // //               <div className="p-6">
// // //                 {/* Error Display */}
// // //                 {error && (
// // //                   <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4 rounded-r-xl">
// // //                     <div className="flex items-center">
// // //                       <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
// // //                         <Shield className="w-4 h-4 text-red-600" />
// // //                       </div>
// // //                       <div>
// // //                         <h4 className="font-semibold text-red-800">Booking Error</h4>
// // //                         <p className="text-red-600">{error}</p>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 )}

// // //                 <form onSubmit={handleSubmit} className="space-y-8">
// // //                   {/* Date Selection */}
// // //                   <div>
// // //                     <label className="flex items-center text-lg font-semibold text-gray-900 mb-4">
// // //                       <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
// // //                         <Calendar className="h-4 w-4 text-indigo-600" />
// // //                       </div>
// // //                       Select Date
// // //                     </label>
// // //                     <input
// // //                       type="date"
// // //                       name="date"
// // //                       value={formData.date}
// // //                       onChange={handleChange}
// // //                       min={getMinDate()}
// // //                       required
// // //                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-lg"
// // //                     />
// // //                   </div>

// // //                   {/* Time Slot Selection */}
// // //                   <div>
// // //                     <label className="flex items-center text-lg font-semibold text-gray-900 mb-4">
// // //                       <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
// // //                         <Clock className="h-4 w-4 text-emerald-600" />
// // //                       </div>
// // //                       Select Time
// // //                     </label>
// // //                     <select
// // //                       name="time_slot"
// // //                       value={formData.time_slot}
// // //                       onChange={handleChange}
// // //                       required
// // //                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-lg"
// // //                     >
// // //                       <option value="">Choose your preferred time slot</option>
// // //                       {generateTimeSlots().map((slot) => (
// // //                         <option key={slot} value={slot}>
// // //                           {slot}
// // //                         </option>
// // //                       ))}
// // //                     </select>
// // //                   </div>

// // //                   {/* Session Mode & Rest of Form - Keep your existing code here */}
// // //                   {currentTherapist && (
// // //                     <div>
// // //                       <label className="block text-lg font-semibold text-gray-900 mb-4">
// // //                         Session Format
// // //                       </label>
// // //                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                         {/* Your existing session mode options */}
// // //                         {(currentTherapist.availability_mode === 'online' || currentTherapist.availability_mode === 'both' || !currentTherapist.availability_mode) && (
// // //                           <label className="relative cursor-pointer">
// // //                             <input
// // //                               type="radio"
// // //                               name="mode"
// // //                               value="online"
// // //                               checked={formData.mode === 'online'}
// // //                               onChange={handleChange}
// // //                               className="sr-only"
// // //                             />
// // //                             <div
// // //                               className={`border-2 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg ${
// // //                                 formData.mode === 'online'
// // //                                   ? 'border-indigo-500 bg-indigo-50 shadow-md'
// // //                                   : 'border-gray-200 hover:border-indigo-300'
// // //                               }`}
// // //                             >
// // //                               <div className="flex items-center mb-3">
// // //                                 <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
// // //                                   <Video className="h-6 w-6 text-emerald-600" />
// // //                                 </div>
// // //                                 <div>
// // //                                   <span className="text-lg font-bold text-gray-900">Online Session</span>
// // //                                   {formData.mode === 'online' && (
// // //                                     <CheckCircle className="w-5 h-5 text-indigo-600 ml-2 inline" />
// // //                                   )}
// // //                                 </div>
// // //                               </div>
// // //                               <p className="text-gray-600 leading-relaxed">
// // //                                 Connect from the comfort of your home via video call, voice call, or secure messaging
// // //                               </p>
// // //                             </div>
// // //                           </label>
// // //                         )}

// // //                         {(currentTherapist.availability_mode === 'offline' || currentTherapist.availability_mode === 'both' || !currentTherapist.availability_mode) && (
// // //                           <label className="relative cursor-pointer">
// // //                             <input
// // //                               type="radio"
// // //                               name="mode"
// // //                               value="offline"
// // //                               checked={formData.mode === 'offline'}
// // //                               onChange={handleChange}
// // //                               className="sr-only"
// // //                             />
// // //                             <div
// // //                               className={`border-2 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg ${
// // //                                 formData.mode === 'offline'
// // //                                   ? 'border-indigo-500 bg-indigo-50 shadow-md'
// // //                                   : 'border-gray-200 hover:border-indigo-300'
// // //                               }`}
// // //                             >
// // //                               <div className="flex items-center mb-3">
// // //                                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
// // //                                   <MapPin className="h-6 w-6 text-blue-600" />
// // //                                 </div>
// // //                                 <div>
// // //                                   <span className="text-lg font-bold text-gray-900">In-Person Session</span>
// // //                                   {formData.mode === 'offline' && (
// // //                                     <CheckCircle className="w-5 h-5 text-indigo-600 ml-2 inline" />
// // //                                   )}
// // //                                 </div>
// // //                               </div>
// // //                               <p className="text-gray-600 leading-relaxed">
// // //                                 Meet face-to-face at the therapist's professional office location
// // //                               </p>
// // //                             </div>
// // //                           </label>
// // //                         )}
// // //                       </div>
// // //                     </div>
// // //                   )}

// // //                   {/* Online Type Selection */}
// // //                   {formData.mode === 'online' && (
// // //                     <div>
// // //                       <label className="block text-lg font-semibold text-gray-900 mb-4">
// // //                         Online Session Type
// // //                       </label>
// // //                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // //                         {[
// // //                           { value: 'Video Call', icon: Video, label: 'Video Call', desc: 'Face-to-face video' },
// // //                           { value: 'Voice Call', icon: Phone, label: 'Voice Call', desc: 'Audio only' },
// // //                           { value: 'Live Chat', icon: MessageCircle, label: 'Live Chat', desc: 'Text messaging' },
// // //                         ].map(({ value, icon: Icon, label, desc }) => (
// // //                           <label key={value} className="relative cursor-pointer">
// // //                             <input
// // //                               type="radio"
// // //                               name="online_type"
// // //                               value={value}
// // //                               checked={formData.online_type === value}
// // //                               onChange={handleChange}
// // //                               className="sr-only"
// // //                             />
// // //                             <div
// // //                               className={`border-2 rounded-2xl p-4 transition-all duration-200 text-center hover:shadow-md ${
// // //                                 formData.online_type === value
// // //                                   ? 'border-indigo-500 bg-indigo-50 shadow-md'
// // //                                   : 'border-gray-200 hover:border-indigo-300'
// // //                               }`}
// // //                             >
// // //                               <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
// // //                                 <Icon className="h-6 w-6 text-indigo-600" />
// // //                               </div>
// // //                               <span className="font-bold text-gray-900 block">{label}</span>
// // //                               <span className="text-sm text-gray-600">{desc}</span>
// // //                               {formData.online_type === value && (
// // //                                 <CheckCircle className="w-5 h-5 text-indigo-600 mx-auto mt-2" />
// // //                               )}
// // //                             </div>
// // //                           </label>
// // //                         ))}
// // //                       </div>
// // //                     </div>
// // //                   )}

// // //                   {/* Notes */}
// // //                   <div>
// // //                     <label className="block text-lg font-semibold text-gray-900 mb-4">
// // //                       Additional Notes (Optional)
// // //                     </label>
// // //                     <textarea
// // //                       name="notes"
// // //                       value={formData.notes}
// // //                       onChange={handleChange}
// // //                       rows={4}
// // //                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none text-lg"
// // //                       placeholder="Share any specific concerns, goals, or topics you'd like to discuss in your session..."
// // //                     />
// // //                   </div>

// // //                   {/* Submit Button */}
// // //                   <div className="pt-4">
// // //                     <button
// // //                       type="submit"
// // //                       disabled={submitting || !currentTherapist}
// // //                       className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none"
// // //                     >
// // //                       {submitting ? (
// // //                         <div className="flex items-center justify-center">
// // //                           <LoadingSpinner size="sm" />
// // //                           <span className="ml-3">Booking Your Session...</span>
// // //                         </div>
// // //                       ) : (
// // //                         <div className="flex items-center justify-center">
// // //                           <Calendar className="w-5 h-5 mr-3" />
// // //                           Confirm & Book Appointment
// // //                         </div>
// // //                       )}
// // //                     </button>
                    
// // //                     <p className="text-center text-sm text-gray-500 mt-4">
// // //                       By booking, you agree to our terms of service and privacy policy. 
// // //                       You'll receive a confirmation email shortly after booking.
// // //                     </p>
// // //                   </div>
// // //                 </form>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BookAppointment;
// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import { therapistService } from '../services/therapistService';
// // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // import { 
// //   Calendar, 
// //   Clock, 
// //   Video, 
// //   Phone, 
// //   MessageCircle, 
// //   MapPin, 
// //   User, 
// //   Star, 
// //   Shield, 
// //   ArrowLeft,
// //   CheckCircle,
// //   Award,
// //   Heart,
// //   GraduationCap,
// //   Users,
// //   CheckCircle2,
// //   Info
// // } from 'lucide-react';

// // const BookAppointment = () => {
// //   const { therapistId } = useParams();
// //   const navigate = useNavigate();
// //   const [therapist, setTherapist] = useState(null);
// //   const [therapists, setTherapists] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [submitting, setSubmitting] = useState(false);
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');
// //   const [imageError, setImageError] = useState(false);
// //   const [formData, setFormData] = useState({
// //     date: '',
// //     time_slot: '',
// //     mode: 'online',
// //     online_type: 'Video Call',
// //     notes: '',
// //     selectedTherapistId: '',
// //   });

// //   useEffect(() => {
// //     if (therapistId) {
// //       fetchTherapistDetail();
// //     } else {
// //       fetchAllTherapists();
// //     }
// //   }, [therapistId]);

// //   useEffect(() => {
// //     setImageError(false);
// //   }, [therapist, formData.selectedTherapistId]);

// //   const fetchTherapistDetail = async () => {
// //     try {
// //       setLoading(true);
// //       setError('');
// //       const data = await therapistService.getTherapistDetail(therapistId);
// //       setTherapist(data.therapist || data);
      
// //       const therapistData = data.therapist || data;
// //       if (therapistData.availability_mode === 'offline') {
// //         setFormData(prev => ({ ...prev, mode: 'offline', online_type: '' }));
// //       }
// //     } catch (err) {
// //       setError('Failed to load therapist details');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchAllTherapists = async () => {
// //     try {
// //       setLoading(true);
// //       setError('');
// //       console.log('🔍 Loading therapists for selection...');
      
// //       const data = await therapistService.getAllTherapists();
      
// //       if (data && data.length > 0) {
// //         setTherapists(data);
// //         const firstTherapist = data[0];
// //         setFormData(prev => ({ 
// //           ...prev, 
// //           selectedTherapistId: firstTherapist.id,
// //           mode: firstTherapist.availability_mode === 'offline' ? 'offline' : 'online',
// //           online_type: firstTherapist.availability_mode === 'offline' ? '' : 'Video Call'
// //         }));
// //       } else {
// //         setError('No therapists available at the moment.');
// //       }
// //     } catch (err) {
// //       console.error('❌ Error loading therapists:', err);
// //       setError('Failed to load therapists. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: value,
// //     }));

// //     if (name === 'selectedTherapistId' && therapists.length > 0) {
// //       const selectedTherapist = therapists.find(t => t.id === parseInt(value));
// //       if (selectedTherapist) {
// //         setFormData(prev => ({
// //           ...prev,
// //           mode: selectedTherapist.availability_mode === 'offline' ? 'offline' : 'online',
// //           online_type: selectedTherapist.availability_mode === 'offline' ? '' : 'Video Call'
// //         }));
// //         setImageError(false);
// //       }
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setSubmitting(true);
// //     setError('');
// //     setSuccess('');

// //     try {
// //       const targetTherapistId = therapistId || formData.selectedTherapistId;
      
// //       if (!targetTherapistId) {
// //         throw new Error('Please select a therapist');
// //       }

// //       const appointmentData = {
// //         ...formData,
// //         therapist: targetTherapistId,
// //       };

// //       console.log('📅 Booking appointment:', appointmentData);
// //       const response = await therapistService.bookAppointment(appointmentData);
      
// //       let therapistInfo;
// //       if (therapist) {
// //         therapistInfo = therapist;
// //       } else {
// //         therapistInfo = therapists.find(t => t.id === parseInt(targetTherapistId));
// //       }

// //       navigate('/booking-confirmation', {
// //         state: {
// //           bookingData: {
// //             therapistName: therapistInfo?.name || 'Therapist',
// //             date: formData.date,
// //             time: formData.time_slot,
// //             mode: formData.mode === 'online' ? formData.online_type : 'In-Person Session',
// //             confirmationId: response.data?.confirmationId || "BK" + Math.random().toString(36).substr(2, 9).toUpperCase(),
// //             therapistSpecialty: therapistInfo?.specialization || 'Therapy Session',
// //             sessionDuration: "50 minutes",
// //             location: therapistInfo?.location || 'TBD'
// //           }
// //         }
// //       });
      
// //     } catch (err) {
// //       console.error('❌ Booking error:', err);
// //       setError(err.response?.data?.error || err.message || 'Failed to book appointment. Please try again.');
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   const getCurrentTherapist = () => {
// //     if (therapist) return therapist;
// //     if (therapists.length > 0 && formData.selectedTherapistId) {
// //       return therapists.find(t => t.id === parseInt(formData.selectedTherapistId));
// //     }
// //     return null;
// //   };

// //   const currentTherapist = getCurrentTherapist();

// //   const handleImageError = () => {
// //     setImageError(true);
// //   };

// //   const getInitials = (name) => {
// //     if (!name) return 'DR';
// //     return name
// //       .split(' ')
// //       .map(word => word[0])
// //       .join('')
// //       .toUpperCase()
// //       .substring(0, 2);
// //   };

// //   const generateTimeSlots = () => {
// //     const slots = [];
// //     for (let hour = 9; hour <= 17; hour++) {
// //       slots.push(`${hour.toString().padStart(2, '0')}:00`);
// //       if (hour < 17) {
// //         slots.push(`${hour.toString().padStart(2, '0')}:30`);
// //       }
// //     }
// //     return slots;
// //   };

// //   const getMinDate = () => {
// //     const today = new Date();
// //     return today.toISOString().split('T')[0];
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
// //         <div className="text-center space-y-8">
// //           <div className="relative">
// //             <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl mx-auto flex items-center justify-center shadow-2xl">
// //               <Heart className="w-12 h-12 text-white animate-pulse" />
// //             </div>
// //             <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
// //               <Shield className="w-4 h-4 text-white" />
// //             </div>
// //           </div>
// //           <LoadingSpinner size="lg" />
// //           <div className="space-y-3">
// //             <h3 className="text-2xl font-bold text-slate-800">
// //               {therapistId ? 'Loading Therapist Profile' : 'Loading Available Therapists'}
// //             </h3>
// //             <p className="text-slate-600 max-w-md mx-auto">
// //               Setting up your professional booking experience with verified mental health professionals...
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (error && !currentTherapist && therapists.length === 0) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 p-4 flex items-center justify-center">
// //         <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-red-100 p-10 text-center">
// //           <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
// //             <Shield className="w-10 h-10 text-white" />
// //           </div>
// //           <h3 className="text-2xl font-bold text-red-800 mb-3">Service Temporarily Unavailable</h3>
// //           <p className="text-red-600 mb-8 text-lg leading-relaxed">{error}</p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <button
// //               onClick={() => therapistId ? fetchTherapistDetail() : fetchAllTherapists()}
// //               className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
// //             >
// //               <ArrowLeft className="w-5 h-5 mr-3 rotate-180" />
// //               Retry Connection
// //             </button>
// //             <button
// //               onClick={() => navigate('/therapists')}
// //               className="inline-flex items-center px-8 py-4 bg-slate-100 text-slate-700 font-semibold rounded-2xl hover:bg-slate-200 transition-all duration-300 shadow-md hover:shadow-lg"
// //             >
// //               <ArrowLeft className="w-5 h-5 mr-3" />
// //               Browse All Therapists
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
// //         {/* PROFESSIONAL HERO SECTION */}
// //         <div className="text-center mb-16">
// //           <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl mb-8 shadow-lg">
// //             <Calendar className="w-10 h-10 text-blue-700" />
// //           </div>
// //           <h1 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
// //             Professional Therapy Booking
// //           </h1>
// //           <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
// //             {therapistId 
// //               ? `Schedule your confidential session with ${therapist?.name || 'your licensed therapist'}`
// //               : 'Connect with verified mental health professionals and schedule your personalized therapy session'
// //             }
// //           </p>
// //           <div className="mt-8 inline-flex items-center space-x-6 text-sm text-slate-500">
// //             <div className="flex items-center">
// //               <Shield className="w-4 h-4 text-emerald-600 mr-2" />
// //               <span>HIPAA Compliant</span>
// //             </div>
// //             <div className="flex items-center">
// //               <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2" />
// //               <span>Licensed Professionals</span>
// //             </div>
// //             <div className="flex items-center">
// //               <Award className="w-4 h-4 text-purple-600 mr-2" />
// //               <span>Verified Credentials</span>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 xl:grid-cols-5 gap-10">
// //           {/* ENHANCED PROFESSIONAL THERAPIST PROFILE CARD */}
// //           <div className="xl:col-span-2">
// //             <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden sticky top-8">
// //               {/* Professional Header */}
// //               <div className="bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 p-8 text-white relative overflow-hidden">
// //                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
// //                 <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
// //                 <div className="relative z-10">
// //                   <div className="flex items-center justify-between mb-6">
// //                     <div className="flex items-center space-x-4">
// //                       <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
// //                         <GraduationCap className="w-8 h-8 text-white" />
// //                       </div>
// //                       <div>
// //                         <h2 className="text-2xl font-bold">
// //                           {therapistId ? 'Licensed Therapist' : 'Select Your Therapist'}
// //                         </h2>
// //                         <p className="text-blue-100 text-sm font-medium">
// //                           {therapistId ? 'Professional Mental Health Provider' : 'Choose from verified professionals'}
// //                         </p>
// //                       </div>
// //                     </div>
// //                     <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl px-3 py-1">
// //                       <span className="text-emerald-100 text-xs font-bold uppercase tracking-wide">Verified</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Professional Profile Body */}
// //               <div className="p-8 space-y-8">
// //                 {/* Therapist Selection */}
// //                 {!therapistId && therapists.length > 0 && (
// //                   <div>
// //                     <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wide">
// //                       Available Licensed Therapists
// //                     </label>
// //                     <div className="relative">
// //                       <select
// //                         name="selectedTherapistId"
// //                         value={formData.selectedTherapistId}
// //                         onChange={handleChange}
// //                         className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 transition-all duration-300 text-slate-800 font-medium bg-white shadow-sm appearance-none cursor-pointer"
// //                       >
// //                         {therapists.map((therapist) => (
// //                           <option key={therapist.id} value={therapist.id}>
// //                           {therapist.name} • {therapist.specialization}
// //                           </option>
// //                         ))}
// //                       </select>
// //                       <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
// //                         <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// //                         </svg>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}

// //                 {/* Professional Therapist Image & Info */}
// //                 {currentTherapist && (
// //                   <>
// //                     {/* Professional Photo */}
// //                     <div className="text-center">
// //                       <div className="relative inline-block">
// //                         <div className="w-40 h-40 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white">
// //                           {(currentTherapist.photoUrl || currentTherapist.image) && !imageError ? (
// //                             <img 
// //                               src={currentTherapist.photoUrl || currentTherapist.image}
// //                               alt={currentTherapist.name}
// //                               className="w-full h-full object-cover rounded-3xl"
// //                               onError={handleImageError}
// //                               onLoad={() => setImageError(false)}
// //                             />
// //                           ) : (
// //                             <User className="w-20 h-20 text-slate-400" />
// //                           )}
// //                         </div>
// //                         <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
// //                           <CheckCircle className="w-6 h-6 text-white" />
// //                         </div>
// //                       </div>
// //                     </div>

// //                     {/* Professional Details */}
// //                     <div className="text-center space-y-4">
// //                       <div>
// //                         <h3 className="text-2xl font-bold text-slate-800">Dr. {currentTherapist.name}</h3>
// //                         <p className="text-slate-600 font-medium">Licensed Mental Health Professional</p>
// //                       </div>
                      
// //                       <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-200">
// //                         <Award className="w-4 h-4 text-blue-600 mr-2" />
// //                         <span className="text-sm font-bold text-blue-800">{currentTherapist.specialization}</span>
// //                       </div>
// //                     </div>

// //                     {/* Professional Information Grid */}
// //                     <div className="grid grid-cols-1 gap-4">
// //                       {/* Location */}
// //                       <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300">
// //                         <div className="flex items-center">
// //                           <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
// //                             <MapPin className="h-6 w-6 text-blue-600" />
// //                           </div>
// //                           <div>
// //                             <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Practice Location</div>
// //                             <div className="font-bold text-slate-800">{currentTherapist.location}</div>
// //                           </div>
// //                         </div>
// //                       </div>

// //                       {/* Availability */}
// //                       <div className="bg-gradient-to-r from-slate-50 to-emerald-50 border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300">
// //                         <div className="flex items-center">
// //                           <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
// //                             <Clock className="h-6 w-6 text-emerald-600" />
// //                           </div>
// //                           <div>
// //                             <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Available Hours</div>
// //                             <div className="font-bold text-slate-800">{currentTherapist.availability_hours || "9:00 AM - 6:00 PM"}</div>
// //                           </div>
// //                         </div>
// //                       </div>

// //                       {/* Rating */}
// //                       {currentTherapist.rating && (
// //                         <div className="bg-gradient-to-r from-slate-50 to-yellow-50 border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300">
// //                           <div className="flex items-center">
// //                             <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
// //                               <Star className="h-6 w-6 text-yellow-600 fill-current" />
// //                             </div>
// //                             <div>
// //                               <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Patient Rating</div>
// //                               <div className="font-bold text-slate-800 flex items-center">
// //                                 {currentTherapist.rating}/5.0
// //                                 <span className="ml-2 text-xs text-yellow-600 font-medium">Excellent</span>
// //                               </div>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       )}

// //                       {/* Experience */}
// //                       <div className="bg-gradient-to-r from-slate-50 to-purple-50 border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300">
// //                         <div className="flex items-center">
// //                           <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
// //                             <Users className="h-6 w-6 text-purple-600" />
// //                           </div>
// //                           <div>
// //                             <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Experience</div>
// //                             <div className="font-bold text-slate-800">{currentTherapist.experience || "10+"} Years Practice</div>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     {/* Session Availability Badge */}
// //                     <div className="text-center pt-4">
// //                       <span
// //                         className={`inline-flex items-center px-6 py-3 rounded-2xl font-bold text-sm shadow-lg border-2 ${
// //                           currentTherapist.availability_mode === 'online'
// //                             ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white border-emerald-400'
// //                             : currentTherapist.availability_mode === 'offline'
// //                             ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-blue-400'
// //                             : 'bg-gradient-to-r from-purple-500 to-pink-600 text-white border-purple-400'
// //                         }`}
// //                       >
// //                         {currentTherapist.availability_mode === 'online'
// //                           ? '🌐 Online Sessions Available'
// //                           : currentTherapist.availability_mode === 'offline'
// //                           ? '🏢 In-Person Sessions Only'
// //                           : '💫 Flexible Session Options'}
// //                       </span>
// //                     </div>
// //                   </>
// //                 )}
// //               </div>
// //             </div>
// //           </div>

// //           {/* PROFESSIONAL BOOKING FORM */}
// //           <div className="xl:col-span-3">
// //             <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
// //               {/* Professional Form Header */}
// //               <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border-b border-slate-200 p-8 text-white relative overflow-hidden">
// //                 <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
// //                 <div className="relative z-10">
// //                   <h2 className="text-3xl font-bold mb-3">Schedule Your Appointment</h2>
// //                   <p className="text-slate-300 text-lg leading-relaxed">
// //                     Complete the form below to book your confidential therapy session with a licensed professional
// //                   </p>
// //                   <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-xl border border-blue-400/30">
// //                     <Info className="w-4 h-4 text-blue-200 mr-2" />
// //                     <span className="text-blue-100 text-sm font-medium">All sessions are strictly confidential</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="p-8">
// //                 {/* Professional Error Display */}
// //                 {error && (
// //                   <div className="mb-8 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-2xl shadow-lg">
// //                     <div className="flex items-start">
// //                       <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
// //                         <Shield className="w-5 h-5 text-red-600" />
// //                       </div>
// //                       <div>
// //                         <h4 className="font-bold text-red-800 text-lg mb-1">Booking Issue</h4>
// //                         <p className="text-red-700">{error}</p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}

// //                 <form onSubmit={handleSubmit} className="space-y-10">
// //                   {/* Professional Date Selection */}
// //                   <div>
// //                     <label className="flex items-center text-xl font-bold text-slate-800 mb-6">
// //                       <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
// //                         <Calendar className="h-5 w-5 text-blue-700" />
// //                       </div>
// //                       Select Appointment Date
// //                     </label>
// //                     <input
// //                       type="date"
// //                       name="date"
// //                       value={formData.date}
// //                       onChange={handleChange}
// //                       min={getMinDate()}
// //                       required
// //                       className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 transition-all duration-300 text-lg font-medium bg-white shadow-sm"
// //                     />
// //                   </div>

// //                   {/* Professional Time Selection */}
// //                   <div>
// //                     <label className="flex items-center text-xl font-bold text-slate-800 mb-6">
// //                       <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
// //                         <Clock className="h-5 w-5 text-emerald-700" />
// //                       </div>
// //                       Choose Time Slot
// //                     </label>
// //                     <div className="relative">
// //                       <select
// //                         name="time_slot"
// //                         value={formData.time_slot}
// //                         onChange={handleChange}
// //                         required
// //                         className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 transition-all duration-300 text-lg font-medium bg-white shadow-sm appearance-none cursor-pointer"
// //                       >
// //                         <option value="">Select your preferred time slot</option>
// //                         {generateTimeSlots().map((slot) => (
// //                           <option key={slot} value={slot}>
// //                             {slot} - Available
// //                           </option>
// //                         ))}
// //                       </select>
// //                       <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
// //                         <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// //                         </svg>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Professional Session Format */}
// //                   {currentTherapist && (
// //                     <div>
// //                       <label className="block text-xl font-bold text-slate-800 mb-6">
// //                         Session Format Preference
// //                       </label>
// //                       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //                         {(currentTherapist.availability_mode === 'online' || currentTherapist.availability_mode === 'both' || !currentTherapist.availability_mode) && (
// //                           <label className="relative cursor-pointer group">
// //                             <input
// //                               type="radio"
// //                               name="mode"
// //                               value="online"
// //                               checked={formData.mode === 'online'}
// //                               onChange={handleChange}
// //                               className="sr-only"
// //                             />
// //                             <div
// //                               className={`border-3 rounded-3xl p-8 transition-all duration-300 group-hover:shadow-xl ${
// //                                 formData.mode === 'online'
// //                                   ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl transform scale-105'
// //                                   : 'border-slate-200 hover:border-blue-300 bg-white shadow-lg'
// //                               }`}
// //                             >
// //                               <div className="flex items-center mb-4">
// //                                 <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
// //                                   <Video className="h-7 w-7 text-white" />
// //                                 </div>
// //                                 <div>
// //                                   <span className="text-xl font-bold text-slate-800 block">Online Therapy</span>
// //                                   {formData.mode === 'online' && (
// //                                     <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
// //                                   )}
// //                                 </div>
// //                               </div>
// //                               <p className="text-slate-600 leading-relaxed font-medium">
// //                                 Secure, private sessions from your comfortable space via video, voice, or secure messaging platform
// //                               </p>
// //                             </div>
// //                           </label>
// //                         )}

// //                         {(currentTherapist.availability_mode === 'offline' || currentTherapist.availability_mode === 'both' || !currentTherapist.availability_mode) && (
// //                           <label className="relative cursor-pointer group">
// //                             <input
// //                               type="radio"
// //                               name="mode"
// //                               value="offline"
// //                               checked={formData.mode === 'offline'}
// //                               onChange={handleChange}
// //                               className="sr-only"
// //                             />
// //                             <div
// //                               className={`border-3 rounded-3xl p-8 transition-all duration-300 group-hover:shadow-xl ${
// //                                 formData.mode === 'offline'
// //                                   ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl transform scale-105'
// //                                   : 'border-slate-200 hover:border-blue-300 bg-white shadow-lg'
// //                               }`}
// //                             >
// //                               <div className="flex items-center mb-4">
// //                                 <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
// //                                   <MapPin className="h-7 w-7 text-white" />
// //                                 </div>
// //                                 <div>
// //                                   <span className="text-xl font-bold text-slate-800 block">In-Person Session</span>
// //                                   {formData.mode === 'offline' && (
// //                                     <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
// //                                   )}
// //                                 </div>
// //                               </div>
// //                               <p className="text-slate-600 leading-relaxed font-medium">
// //                                 Traditional face-to-face therapy in the therapist's professional, confidential office environment
// //                               </p>
// //                             </div>
// //                           </label>
// //                         )}
// //                       </div>
// //                     </div>
// //                   )}

// //                   {/* Professional Online Options */}
// //                   {formData.mode === 'online' && (
// //                     <div>
// //                       <label className="block text-xl font-bold text-slate-800 mb-6">
// //                         Online Session Method
// //                       </label>
// //                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                         {[
// //                           { value: 'Video Call', icon: Video, label: 'Video Therapy', desc: 'Face-to-face video session' },
// //                           { value: 'Voice Call', icon: Phone, label: 'Audio Only', desc: 'Voice-only session' },
// //                           { value: 'Live Chat', icon: MessageCircle, label: 'Text Therapy', desc: 'Secure messaging' },
// //                         ].map(({ value, icon: Icon, label, desc }) => (
// //                           <label key={value} className="relative cursor-pointer group">
// //                             <input
// //                               type="radio"
// //                               name="online_type"
// //                               value={value}
// //                               checked={formData.online_type === value}
// //                               onChange={handleChange}
// //                               className="sr-only"
// //                             />
// //                             <div
// //                               className={`border-2 rounded-3xl p-6 transition-all duration-300 text-center group-hover:shadow-lg ${
// //                                 formData.online_type === value
// //                                   ? 'border-blue-500 bg-blue-50 shadow-lg transform scale-105'
// //                                   : 'border-slate-200 hover:border-blue-300 bg-white'
// //                               }`}
// //                             >
// //                               <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
// //                                 <Icon className="h-7 w-7 text-indigo-700" />
// //                               </div>
// //                               <span className="font-bold text-slate-800 block text-lg mb-2">{label}</span>
// //                               <span className="text-sm text-slate-600 font-medium">{desc}</span>
// //                               {formData.online_type === value && (
// //                                 <CheckCircle className="w-6 h-6 text-blue-600 mx-auto mt-3" />
// //                               )}
// //                             </div>
// //                           </label>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   )}

// //                   {/* Professional Notes Section */}
// //                   <div>
// //                     <label className="block text-xl font-bold text-slate-800 mb-6">
// //                       Session Notes (Optional)
// //                     </label>
// //                     <textarea
// //                       name="notes"
// //                       value={formData.notes}
// //                       onChange={handleChange}
// //                       rows={5}
// //                       className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 transition-all duration-300 resize-none text-lg font-medium bg-white shadow-sm"
// //                       placeholder="Share any specific concerns, therapeutic goals, or topics you'd like to address during your session. This helps your therapist prepare for your appointment."
// //                     />
// //                   </div>

// //                   {/* Professional Submit Button */}
// //                   <div className="pt-6">
// //                     <button
// //                       type="submit"
// //                       disabled={submitting || !currentTherapist}
// //                       className="w-full py-6 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 hover:from-blue-700 hover:via-indigo-800 hover:to-purple-800 disabled:from-slate-400 disabled:to-slate-500 text-white font-bold rounded-3xl text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
// //                     >
// //                       {submitting ? (
// //                         <div className="flex items-center justify-center">
// //                           <LoadingSpinner size="md" />
// //                           <span className="ml-4">Securing Your Appointment...</span>
// //                         </div>
// //                       ) : (
// //                         <div className="flex items-center justify-center">
// //                           <Calendar className="w-6 h-6 mr-4" />
// //                           Confirm Professional Booking
// //                         </div>
// //                       )}
// //                     </button>
                    
// //                     <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-200">
// //                       <p className="text-center text-sm text-slate-600 leading-relaxed">
// //                         <Shield className="w-4 h-4 inline mr-2 text-emerald-600" />
// //                         By booking, you agree to our 
// //                         <span className="font-semibold text-slate-800"> terms of service</span> and 
// //                         <span className="font-semibold text-slate-800"> privacy policy</span>. 
// //                         Your appointment confirmation will be sent via secure email immediately after booking.
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BookAppointment;
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { therapistService } from '../services/therapistService';
// import LoadingSpinner from '../components/ui/LoadingSpinner';
// import { 
//   Calendar, 
//   Clock, 
//   Video, 
//   Phone, 
//   MessageCircle, 
//   MapPin, 
//   User, 
//   Star, 
//   Shield, 
//   ArrowLeft,
//   CheckCircle,
//   Award,
//   Heart,
//   GraduationCap,
//   Users,
//   CheckCircle2,
//   Info
// } from 'lucide-react';

// const BookAppointment = () => {
//   const { therapistId } = useParams();
//   const navigate = useNavigate();
//   const [therapist, setTherapist] = useState(null);
//   const [therapists, setTherapists] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [imageError, setImageError] = useState(false);
//   const [formData, setFormData] = useState({
//     date: '',
//     time_slot: '',
//     mode: 'online',
//     online_type: 'Video Call',
//     notes: '',
//     selectedTherapistId: '',
//   });

//   useEffect(() => {
//     if (therapistId) {
//       fetchTherapistDetail();
//     } else {
//       fetchAllTherapists();
//     }
//   }, [therapistId]);

//   useEffect(() => {
//     setImageError(false);
//   }, [therapist, formData.selectedTherapistId]);

//   const fetchTherapistDetail = async () => {
//     try {
//       setLoading(true);
//       setError('');
//       const data = await therapistService.getTherapistDetail(therapistId);
//       setTherapist(data.therapist || data);
      
//       const therapistData = data.therapist || data;
//       if (therapistData.availability_mode === 'offline') {
//         setFormData(prev => ({ ...prev, mode: 'offline', online_type: '' }));
//       }
//     } catch (err) {
//       setError('Failed to load therapist details');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchAllTherapists = async () => {
//     try {
//       setLoading(true);
//       setError('');
//       console.log('🔍 Loading therapists for selection...');
      
//       const data = await therapistService.getAllTherapists();
      
//       if (data && data.length > 0) {
//         setTherapists(data);
//         const firstTherapist = data[0];
//         setFormData(prev => ({ 
//           ...prev, 
//           selectedTherapistId: firstTherapist.id,
//           mode: firstTherapist.availability_mode === 'offline' ? 'offline' : 'online',
//           online_type: firstTherapist.availability_mode === 'offline' ? '' : 'Video Call'
//         }));
//       } else {
//         setError('No therapists available at the moment.');
//       }
//     } catch (err) {
//       console.error('❌ Error loading therapists:', err);
//       setError('Failed to load therapists. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (name === 'selectedTherapistId' && therapists.length > 0) {
//       const selectedTherapist = therapists.find(t => t.id === parseInt(value));
//       if (selectedTherapist) {
//         setFormData(prev => ({
//           ...prev,
//           mode: selectedTherapist.availability_mode === 'offline' ? 'offline' : 'online',
//           online_type: selectedTherapist.availability_mode === 'offline' ? '' : 'Video Call'
//         }));
//         setImageError(false);
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setError('');
//     setSuccess('');

//     try {
//       const targetTherapistId = therapistId || formData.selectedTherapistId;
      
//       if (!targetTherapistId) {
//         throw new Error('Please select a therapist');
//       }

//       const appointmentData = {
//         ...formData,
//         therapist: targetTherapistId,
//       };

//       console.log('📅 Booking appointment:', appointmentData);
//       const response = await therapistService.bookAppointment(appointmentData);
      
//       let therapistInfo;
//       if (therapist) {
//         therapistInfo = therapist;
//       } else {
//         therapistInfo = therapists.find(t => t.id === parseInt(targetTherapistId));
//       }

//       navigate('/booking-confirmation', {
//         state: {
//           bookingData: {
//             therapistName: therapistInfo?.name || 'Therapist',
//             date: formData.date,
//             time: formData.time_slot,
//             mode: formData.mode === 'online' ? formData.online_type : 'In-Person Session',
//             confirmationId: response.data?.confirmationId || "BK" + Math.random().toString(36).substr(2, 9).toUpperCase(),
//             therapistSpecialty: therapistInfo?.specialization || 'Therapy Session',
//             sessionDuration: "50 minutes",
//             location: therapistInfo?.location || 'TBD'
//           }
//         }
//       });
      
//     } catch (err) {
//       console.error('❌ Booking error:', err);
//       setError(err.response?.data?.error || err.message || 'Failed to book appointment. Please try again.');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const getCurrentTherapist = () => {
//     if (therapist) return therapist;
//     if (therapists.length > 0 && formData.selectedTherapistId) {
//       return therapists.find(t => t.id === parseInt(formData.selectedTherapistId));
//     }
//     return null;
//   };

//   const currentTherapist = getCurrentTherapist();

//   const handleImageError = () => {
//     setImageError(true);
//   };

//   const getInitials = (name) => {
//     if (!name) return 'DR';
//     return name
//       .split(' ')
//       .map(word => word[0])
//       .join('')
//       .toUpperCase()
//       .substring(0, 2);
//   };

//   const generateTimeSlots = () => {
//     const slots = [];
//     for (let hour = 9; hour <= 17; hour++) {
//       slots.push(`${hour.toString().padStart(2, '0')}:00`);
//       if (hour < 17) {
//         slots.push(`${hour.toString().padStart(2, '0')}:30`);
//       }
//     }
//     return slots;
//   };

//   const getMinDate = () => {
//     const today = new Date();
//     return today.toISOString().split('T')[0];
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center">
//         <div className="text-center space-y-8">
//           <div className="relative">
//             <div className="w-24 h-24 bg-gradient-to-br from-blue-800 to-indigo-900 rounded-3xl mx-auto flex items-center justify-center shadow-2xl">
//               <Heart className="w-12 h-12 text-white animate-pulse" />
//             </div>
//             <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
//               <Shield className="w-4 h-4 text-white" />
//             </div>
//           </div>
//           <LoadingSpinner size="lg" />
//           <div className="space-y-3">
//             <h3 className="text-2xl font-bold text-gray-800">
//               {therapistId ? 'Loading Therapist Profile' : 'Loading Available Therapists'}
//             </h3>
//             <p className="text-gray-600 max-w-md mx-auto">
//               Setting up your professional booking experience with verified mental health professionals...
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error && !currentTherapist && therapists.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50 to-pink-50 p-4 flex items-center justify-center">
//         <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-red-200 p-10 text-center">
//           <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
//             <Shield className="w-10 h-10 text-white" />
//           </div>
//           <h3 className="text-2xl font-bold text-red-800 mb-3">Service Temporarily Unavailable</h3>
//           <p className="text-red-600 mb-8 text-lg leading-relaxed">{error}</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={() => therapistId ? fetchTherapistDetail() : fetchAllTherapists()}
//               className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-semibold rounded-2xl hover:from-blue-800 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//             >
//               <ArrowLeft className="w-5 h-5 mr-3 rotate-180" />
//               Retry Connection
//             </button>
//             <button
//               onClick={() => navigate('/therapists')}
//               className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-2xl hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
//             >
//               <ArrowLeft className="w-5 h-5 mr-3" />
//               Browse All Therapists
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
//         {/* PROFESSIONAL HERO SECTION */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl mb-8 shadow-lg border border-blue-200">
//             <Calendar className="w-10 h-10 text-blue-800" />
//           </div>
//           <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
//             Professional Therapy Booking
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             {therapistId 
//               ? `Schedule your confidential session with ${therapist?.name || 'your licensed therapist'}`
//               : 'Connect with verified mental health professionals and schedule your personalized therapy session'
//             }
//           </p>
//           <div className="mt-8 inline-flex items-center space-x-6 text-sm text-gray-500">
//             <div className="flex items-center">
//               <Shield className="w-4 h-4 text-emerald-600 mr-2" />
//               <span>HIPAA Compliant</span>
//             </div>
//             <div className="flex items-center">
//               <CheckCircle2 className="w-4 h-4 text-blue-700 mr-2" />
//               <span>Licensed Professionals</span>
//             </div>
//             <div className="flex items-center">
//               <Award className="w-4 h-4 text-indigo-600 mr-2" />
//               <span>Verified Credentials</span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 xl:grid-cols-5 gap-10">
//           {/* PROFESSIONAL THERAPIST PROFILE CARD */}
//           <div className="xl:col-span-2">
//             <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden sticky top-8">
//               {/* Professional Header */}
//               <div className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 p-8 text-white relative overflow-hidden">
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
//                 <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
//                 <div className="relative z-10">
//                   <div className="flex items-center justify-between mb-6">
//                     <div className="flex items-center space-x-4">
//                       <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
//                         <GraduationCap className="w-8 h-8 text-white" />
//                       </div>
//                       <div>
//                         <h2 className="text-2xl font-bold">
//                           {therapistId ? 'Licensed Therapist' : 'Select Your Therapist'}
//                         </h2>
//                         <p className="text-blue-100 text-sm font-medium">
//                           {therapistId ? 'Professional Mental Health Provider' : 'Choose from verified professionals'}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="bg-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl px-3 py-1">
//                       <span className="text-emerald-100 text-xs font-bold uppercase tracking-wide">Verified</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Professional Profile Body */}
//               <div className="p-8 space-y-8">
//                 {/* Therapist Selection */}
//                 {!therapistId && therapists.length > 0 && (
//                   <div>
//                     <label className="block text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">
//                       Available Licensed Therapists
//                     </label>
//                     <div className="relative">
//                       <select
//                         name="selectedTherapistId"
//                         value={formData.selectedTherapistId}
//                         onChange={handleChange}
//                         className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-700 transition-all duration-300 text-gray-800 font-medium bg-white shadow-sm appearance-none cursor-pointer"
//                       >
//                         {therapists.map((therapist) => (
//                           <option key={therapist.id} value={therapist.id}>
//                             Dr. {therapist.name} • {therapist.specialization}
//                           </option>
//                         ))}
//                       </select>
//                       <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
//                         <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Professional Therapist Image & Info */}
//                 {currentTherapist && (
//                   <>
//                     {/* Professional Photo */}
//                     <div className="text-center">
//                       <div className="relative inline-block">
//                         <div className="w-40 h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white">
//                           {(currentTherapist.photoUrl || currentTherapist.image) && !imageError ? (
//                             <img 
//                               src={currentTherapist.photoUrl || currentTherapist.image}
//                               alt={currentTherapist.name}
//                               className="w-full h-full object-cover rounded-3xl"
//                               onError={handleImageError}
//                               onLoad={() => setImageError(false)}
//                             />
//                           ) : (
//                             <User className="w-20 h-20 text-gray-400" />
//                           )}
//                         </div>
//                         <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
//                           <CheckCircle className="w-6 h-6 text-white" />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Professional Details */}
//                     <div className="text-center space-y-4">
//                       <div>
//                         <h3 className="text-2xl font-bold text-gray-800">Dr. {currentTherapist.name}</h3>
//                         <p className="text-gray-600 font-medium">Licensed Mental Health Professional</p>
//                       </div>
                      
//                       <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-200">
//                         <Award className="w-4 h-4 text-blue-700 mr-2" />
//                         <span className="text-sm font-bold text-blue-800">{currentTherapist.specialization}</span>
//                       </div>
//                     </div>

//                     {/* Professional Information Grid */}
//                     <div className="grid grid-cols-1 gap-4">
//                       {/* Location */}
//                       <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300">
//                         <div className="flex items-center">
//                           <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
//                             <MapPin className="h-6 w-6 text-blue-700" />
//                           </div>
//                           <div>
//                             <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Practice Location</div>
//                             <div className="font-bold text-gray-800">{currentTherapist.location}</div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Availability */}
//                       <div className="bg-gradient-to-r from-gray-50 to-emerald-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300">
//                         <div className="flex items-center">
//                           <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
//                             <Clock className="h-6 w-6 text-emerald-700" />
//                           </div>
//                           <div>
//                             <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Available Hours</div>
//                             <div className="font-bold text-gray-800">{currentTherapist.availability_hours || "9:00 AM - 6:00 PM"}</div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Rating */}
//                       {currentTherapist.rating && (
//                         <div className="bg-gradient-to-r from-gray-50 to-yellow-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300">
//                           <div className="flex items-center">
//                             <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
//                               <Star className="h-6 w-6 text-yellow-600 fill-current" />
//                             </div>
//                             <div>
//                               <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Patient Rating</div>
//                               <div className="font-bold text-gray-800 flex items-center">
//                                 {currentTherapist.rating}/5.0
//                                 <span className="ml-2 text-xs text-yellow-600 font-medium">Excellent</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       )}

//                       {/* Experience */}
//                       <div className="bg-gradient-to-r from-gray-50 to-indigo-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300">
//                         <div className="flex items-center">
//                           <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
//                             <Users className="h-6 w-6 text-indigo-700" />
//                           </div>
//                           <div>
//                             <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Experience</div>
//                             <div className="font-bold text-gray-800">{currentTherapist.experience || "10+"} Years Practice</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Session Availability Badge */}
//                     <div className="text-center pt-4">
//                       <span
//                         className={`inline-flex items-center px-6 py-3 rounded-2xl font-bold text-sm shadow-lg border-2 ${
//                           currentTherapist.availability_mode === 'online'
//                             ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-emerald-500'
//                             : currentTherapist.availability_mode === 'offline'
//                             ? 'bg-gradient-to-r from-blue-700 to-blue-800 text-white border-blue-600'
//                             : 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white border-indigo-500'
//                         }`}
//                       >
//                         {currentTherapist.availability_mode === 'online'
//                           ? '🌐 Online Sessions Available'
//                           : currentTherapist.availability_mode === 'offline'
//                           ? '🏢 In-Person Sessions Only'
//                           : '💫 Flexible Session Options'}
//                       </span>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* PROFESSIONAL BOOKING FORM */}
//           <div className="xl:col-span-3">
//             <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
//               {/* Professional Form Header */}
//               <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border-b border-gray-200 p-8 text-white relative overflow-hidden">
//                 <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
//                 <div className="relative z-10">
//                   <h2 className="text-3xl font-bold mb-3">Schedule Your Appointment</h2>
//                   <p className="text-gray-300 text-lg leading-relaxed">
//                     Complete the form below to book your confidential therapy session with a licensed professional
//                   </p>
//                   <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-700/20 rounded-xl border border-blue-400/30">
//                     <Info className="w-4 h-4 text-blue-200 mr-2" />
//                     <span className="text-blue-100 text-sm font-medium">All sessions are strictly confidential</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-8">
//                 {/* Professional Error Display */}
//                 {error && (
//                   <div className="mb-8 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 p-6 rounded-2xl shadow-lg">
//                     <div className="flex items-start">
//                       <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
//                         <Shield className="w-5 h-5 text-red-600" />
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-red-800 text-lg mb-1">Booking Issue</h4>
//                         <p className="text-red-700">{error}</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit} className="space-y-10">
//                   {/* Professional Date Selection */}
//                   <div>
//                     <label className="flex items-center text-xl font-bold text-gray-800 mb-6">
//                       <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
//                         <Calendar className="h-5 w-5 text-blue-800" />
//                       </div>
//                       Select Appointment Date
//                     </label>
//                     <input
//                       type="date"
//                       name="date"
//                       value={formData.date}
//                       onChange={handleChange}
//                       min={getMinDate()}
//                       required
//                       className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-700 transition-all duration-300 text-lg font-medium bg-white shadow-sm"
//                     />
//                   </div>

//                   {/* Professional Time Selection */}
//                   <div>
//                     <label className="flex items-center text-xl font-bold text-gray-800 mb-6">
//                       <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
//                         <Clock className="h-5 w-5 text-emerald-800" />
//                       </div>
//                       Choose Time Slot
//                     </label>
//                     <div className="relative">
//                       <select
//                         name="time_slot"
//                         value={formData.time_slot}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-700 transition-all duration-300 text-lg font-medium bg-white shadow-sm appearance-none cursor-pointer"
//                       >
//                         <option value="">Select your preferred time slot</option>
//                         {generateTimeSlots().map((slot) => (
//                           <option key={slot} value={slot}>
//                             {slot} - Available
//                           </option>
//                         ))}
//                       </select>
//                       <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
//                         <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Professional Session Format */}
//                   {currentTherapist && (
//                     <div>
//                       <label className="block text-xl font-bold text-gray-800 mb-6">
//                         Session Format Preference
//                       </label>
//                       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                         {(currentTherapist.availability_mode === 'online' || currentTherapist.availability_mode === 'both' || !currentTherapist.availability_mode) && (
//                           <label className="relative cursor-pointer group">
//                             <input
//                               type="radio"
//                               name="mode"
//                               value="online"
//                               checked={formData.mode === 'online'}
//                               onChange={handleChange}
//                               className="sr-only"
//                             />
//                             <div
//                               className={`border-3 rounded-3xl p-8 transition-all duration-300 group-hover:shadow-xl ${
//                                 formData.mode === 'online'
//                                   ? 'border-blue-700 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl transform scale-105'
//                                   : 'border-gray-200 hover:border-blue-300 bg-white shadow-lg'
//                               }`}
//                             >
//                               <div className="flex items-center mb-4">
//                                 <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
//                                   <Video className="h-7 w-7 text-white" />
//                                 </div>
//                                 <div>
//                                   <span className="text-xl font-bold text-gray-800 block">Online Therapy</span>
//                                   {formData.mode === 'online' && (
//                                     <CheckCircle className="w-6 h-6 text-blue-700 mt-1" />
//                                   )}
//                                 </div>
//                               </div>
//                               <p className="text-gray-600 leading-relaxed font-medium">
//                                 Secure, private sessions from your comfortable space via video, voice, or secure messaging platform
//                               </p>
//                             </div>
//                           </label>
//                         )}

//                         {(currentTherapist.availability_mode === 'offline' || currentTherapist.availability_mode === 'both' || !currentTherapist.availability_mode) && (
//                           <label className="relative cursor-pointer group">
//                             <input
//                               type="radio"
//                               name="mode"
//                               value="offline"
//                               checked={formData.mode === 'offline'}
//                               onChange={handleChange}
//                               className="sr-only"
//                             />
//                             <div
//                               className={`border-3 rounded-3xl p-8 transition-all duration-300 group-hover:shadow-xl ${
//                                 formData.mode === 'offline'
//                                   ? 'border-blue-700 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl transform scale-105'
//                                   : 'border-gray-200 hover:border-blue-300 bg-white shadow-lg'
//                               }`}
//                             >
//                               <div className="flex items-center mb-4">
//                                 <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
//                                   <MapPin className="h-7 w-7 text-white" />
//                                 </div>
//                                 <div>
//                                   <span className="text-xl font-bold text-gray-800 block">In-Person Session</span>
//                                   {formData.mode === 'offline' && (
//                                     <CheckCircle className="w-6 h-6 text-blue-700 mt-1" />
//                                   )}
//                                 </div>
//                               </div>
//                               <p className="text-gray-600 leading-relaxed font-medium">
//                                 Traditional face-to-face therapy in the therapist's professional, confidential office environment
//                               </p>
//                             </div>
//                           </label>
//                         )}
//                       </div>
//                     </div>
//                   )}

//                   {/* Professional Online Options */}
//                   {formData.mode === 'online' && (
//                     <div>
//                       <label className="block text-xl font-bold text-gray-800 mb-6">
//                         Online Session Method
//                       </label>
//                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         {[
//                           { value: 'Video Call', icon: Video, label: 'Video Therapy', desc: 'Face-to-face video session' },
//                           { value: 'Voice Call', icon: Phone, label: 'Audio Only', desc: 'Voice-only session' },
//                           { value: 'Live Chat', icon: MessageCircle, label: 'Text Therapy', desc: 'Secure messaging' },
//                         ].map(({ value, icon: Icon, label, desc }) => (
//                           <label key={value} className="relative cursor-pointer group">
//                             <input
//                               type="radio"
//                               name="online_type"
//                               value={value}
//                               checked={formData.online_type === value}
//                               onChange={handleChange}
//                               className="sr-only"
//                             />
//                             <div
//                               className={`border-2 rounded-3xl p-6 transition-all duration-300 text-center group-hover:shadow-lg ${
//                                 formData.online_type === value
//                                   ? 'border-blue-700 bg-blue-50 shadow-lg transform scale-105'
//                                   : 'border-gray-200 hover:border-blue-300 bg-white'
//                               }`}
//                             >
//                               <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
//                                 <Icon className="h-7 w-7 text-indigo-800" />
//                               </div>
//                               <span className="font-bold text-gray-800 block text-lg mb-2">{label}</span>
//                               <span className="text-sm text-gray-600 font-medium">{desc}</span>
//                               {formData.online_type === value && (
//                                 <CheckCircle className="w-6 h-6 text-blue-700 mx-auto mt-3" />
//                               )}
//                             </div>
//                           </label>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* Professional Notes Section */}
//                   <div>
//                     <label className="block text-xl font-bold text-gray-800 mb-6">
//                       Session Notes (Optional)
//                     </label>
//                     <textarea
//                       name="notes"
//                       value={formData.notes}
//                       onChange={handleChange}
//                       rows={5}
//                       className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-700 transition-all duration-300 resize-none text-lg font-medium bg-white shadow-sm"
//                       placeholder="Share any specific concerns, therapeutic goals, or topics you'd like to address during your session. This helps your therapist prepare for your appointment."
//                     />
//                   </div>

//                   {/* Professional Submit Button */}
//                   <div className="pt-6">
//                     <button
//                       type="submit"
//                       disabled={submitting || !currentTherapist}
//                       className="w-full py-6 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 hover:from-blue-800 hover:via-blue-900 hover:to-indigo-900 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-3xl text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
//                     >
//                       {submitting ? (
//                         <div className="flex items-center justify-center">
//                           <LoadingSpinner size="md" />
//                           <span className="ml-4">Securing Your Appointment...</span>
//                         </div>
//                       ) : (
//                         <div className="flex items-center justify-center">
//                           <Calendar className="w-6 h-6 mr-4" />
//                           Confirm Professional Booking
//                         </div>
//                       )}
//                     </button>
                    
//                     <div className="mt-6 p-4 bg-gray-50 rounded-2xl border border-gray-200">
//                       <p className="text-center text-sm text-gray-600 leading-relaxed">
//                         <Shield className="w-4 h-4 inline mr-2 text-emerald-600" />
//                         By booking, you agree to our 
//                         <span className="font-semibold text-gray-800"> terms of service</span> and 
//                         <span className="font-semibold text-gray-800"> privacy policy</span>. 
//                         Your appointment confirmation will be sent via secure email immediately after booking.
//                       </p>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookAppointment;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { therapistService } from '../services/therapistService';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { 
  Calendar, 
  Clock, 
  Video, 
  Phone, 
  MessageCircle, 
  MapPin, 
  User, 
  Star, 
  Shield, 
  ArrowLeft,
  CheckCircle,
  Award,
  Heart,
  GraduationCap,
  Users,
  CheckCircle2,
  Info
} from 'lucide-react';

const BookAppointment = () => {
  const { therapistId } = useParams();
  const navigate = useNavigate();
  const [therapist, setTherapist] = useState(null);
  const [therapists, setTherapists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    time_slot: '',
    mode: 'online',
    online_type: 'Video Call',
    notes: '',
    selectedTherapistId: '',
  });

  // Helper function to format doctor names properly
  const formatDoctorName = (name) => {
    if (!name) return 'Dr. Unknown';
    
    // Check if name already has Dr. prefix (case insensitive)
    const lowerName = name.toLowerCase().trim();
    if (lowerName.startsWith('dr.') || lowerName.startsWith('dr ')) {
      return name.trim();
    }
    
    return `Dr. ${name.trim()}`;
  };

  // Helper function to format experience text
  const formatExperience = (experience) => {
    if (!experience) return "10+ Years Practice";
    
    const lowerExp = experience.toLowerCase();
    if (lowerExp.includes('years') || lowerExp.includes('year')) {
      return experience;
    }
    
    return `${experience} Years Practice`;
  };

  useEffect(() => {
    if (therapistId) {
      fetchTherapistDetail();
    } else {
      fetchAllTherapists();
    }
  }, [therapistId]);

  useEffect(() => {
    setImageError(false);
  }, [therapist, formData.selectedTherapistId]);

  const fetchTherapistDetail = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await therapistService.getTherapistDetail(therapistId);
      setTherapist(data.therapist || data);
      
      const therapistData = data.therapist || data;
      if (therapistData.availability_mode === 'offline') {
        setFormData(prev => ({ ...prev, mode: 'offline', online_type: '' }));
      }
    } catch (err) {
      setError('Failed to load therapist details');
    } finally {
      setLoading(false);
    }
  };

  const fetchAllTherapists = async () => {
    try {
      setLoading(true);
      setError('');
      console.log('🔍 Loading therapists for selection...');
      
      const data = await therapistService.getAllTherapists();
      
      if (data && data.length > 0) {
        setTherapists(data);
        const firstTherapist = data[0];
        setFormData(prev => ({ 
          ...prev, 
          selectedTherapistId: firstTherapist.id,
          mode: firstTherapist.availability_mode === 'offline' ? 'offline' : 'online',
          online_type: firstTherapist.availability_mode === 'offline' ? '' : 'Video Call'
        }));
      } else {
        setError('No therapists available at the moment.');
      }
    } catch (err) {
      console.error('❌ Error loading therapists:', err);
      setError('Failed to load therapists. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'selectedTherapistId' && therapists.length > 0) {
      const selectedTherapist = therapists.find(t => t.id === parseInt(value));
      if (selectedTherapist) {
        setFormData(prev => ({
          ...prev,
          mode: selectedTherapist.availability_mode === 'offline' ? 'offline' : 'online',
          online_type: selectedTherapist.availability_mode === 'offline' ? '' : 'Video Call'
        }));
        setImageError(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const targetTherapistId = therapistId || formData.selectedTherapistId;
      
      if (!targetTherapistId) {
        throw new Error('Please select a therapist');
      }

      const appointmentData = {
        ...formData,
        therapist: targetTherapistId,
      };

      console.log('📅 Booking appointment:', appointmentData);
      const response = await therapistService.bookAppointment(appointmentData);
      
      let therapistInfo;
      if (therapist) {
        therapistInfo = therapist;
      } else {
        therapistInfo = therapists.find(t => t.id === parseInt(targetTherapistId));
      }

      navigate('/booking-confirmation', {
        state: {
          bookingData: {
            therapistName: therapistInfo?.name || 'Therapist',
            date: formData.date,
            time: formData.time_slot,
            mode: formData.mode === 'online' ? formData.online_type : 'In-Person Session',
            confirmationId: response.data?.confirmationId || "BK" + Math.random().toString(36).substr(2, 9).toUpperCase(),
            therapistSpecialty: therapistInfo?.specialization || 'Therapy Session',
            sessionDuration: "50 minutes",
            location: therapistInfo?.location || 'TBD'
          }
        }
      });
      
    } catch (err) {
      console.error('❌ Booking error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to book appointment. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const getCurrentTherapist = () => {
    if (therapist) return therapist;
    if (therapists.length > 0 && formData.selectedTherapistId) {
      return therapists.find(t => t.id === parseInt(formData.selectedTherapistId));
    }
    return null;
  };

  const currentTherapist = getCurrentTherapist();

  const handleImageError = () => {
    setImageError(true);
  };

  const getInitials = (name) => {
    if (!name) return 'DR';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      if (hour < 17) {
        slots.push(`${hour.toString().padStart(2, '0')}:30`);
      }
    }
    return slots;
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Navigation handlers for terms and privacy
  const handleTermsClick = (e) => {
    e.preventDefault();
    navigate('/terms');
  };

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    navigate('/privacy');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center space-y-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-800 to-indigo-900 rounded-3xl mx-auto flex items-center justify-center shadow-2xl">
              <Heart className="w-12 h-12 text-white animate-pulse" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
          </div>
          <LoadingSpinner size="lg" />
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-gray-800">
              {therapistId ? 'Loading Therapist Profile' : 'Loading Available Therapists'}
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Setting up your professional booking experience with verified mental health professionals...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error && !currentTherapist && therapists.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50 to-pink-50 p-4 flex items-center justify-center">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-red-200 p-10 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-red-800 mb-3">Service Temporarily Unavailable</h3>
          <p className="text-red-600 mb-8 text-lg leading-relaxed">{error}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => therapistId ? fetchTherapistDetail() : fetchAllTherapists()}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-semibold rounded-2xl hover:from-blue-800 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-3 rotate-180" />
              Retry Connection
            </button>
            <button
              onClick={() => navigate('/therapists')}
              className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-2xl hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-3" />
              Browse All Therapists
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* PROFESSIONAL HERO SECTION */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl mb-8 shadow-lg border border-blue-200">
            <Calendar className="w-10 h-10 text-blue-800" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Professional Therapy Booking
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {therapistId 
              ? `Schedule your confidential session with ${therapist?.name || 'your licensed therapist'}`
              : 'Connect with verified mental health professionals and schedule your personalized therapy session'
            }
          </p>
          <div className="mt-8 inline-flex items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-emerald-600 mr-2" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-blue-700 mr-2" />
              <span>Licensed Professionals</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 text-indigo-600 mr-2" />
              <span>Verified Credentials</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-10">
          {/* PROFESSIONAL THERAPIST PROFILE CARD */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden sticky top-8">
              {/* Professional Header */}
              <div className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">
                          {therapistId ? 'Licensed Therapist' : 'Select Your Therapist'}
                        </h2>
                        <p className="text-blue-100 text-sm font-medium">
                          {therapistId ? 'Professional Mental Health Provider' : 'Choose from verified professionals'}
                        </p>
                      </div>
                    </div>
                    <div className="bg-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl px-3 py-1">
                      <span className="text-emerald-100 text-xs font-bold uppercase tracking-wide">Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Profile Body */}
              <div className="p-8 space-y-8">
                {/* Therapist Selection - FIXED DUPLICATE DR. */}
                {!therapistId && therapists.length > 0 && (
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">
                      Available Licensed Therapists
                    </label>
                    <div className="relative">
                      <select
                        name="selectedTherapistId"
                        value={formData.selectedTherapistId}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-700 transition-all duration-300 text-gray-800 font-medium bg-white shadow-sm appearance-none cursor-pointer"
                      >
                        {therapists.map((therapist) => (
                          <option key={therapist.id} value={therapist.id}>
                            {formatDoctorName(therapist.name)} • {therapist.specialization}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* Professional Therapist Image & Info */}
                {currentTherapist && (
                  <>
                    {/* Professional Photo */}
                    <div className="text-center">
                      <div className="relative inline-block">
                        <div className="w-40 h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white">
                          {(currentTherapist.photoUrl || currentTherapist.image) && !imageError ? (
                            <img 
                              src={currentTherapist.photoUrl || currentTherapist.image}
                              alt={currentTherapist.name}
                              className="w-full h-full object-cover rounded-3xl"
                              onError={handleImageError}
                              onLoad={() => setImageError(false)}
                            />
                          ) : (
                            <User className="w-20 h-20 text-gray-400" />
                          )}
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Professional Details - FIXED DUPLICATE "Dr." */}
                    <div className="text-center space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {formatDoctorName(currentTherapist.name)}
                        </h3>
                        <p className="text-gray-600 font-medium">Licensed Mental Health Professional</p>
                      </div>
                      
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-200">
                        <Award className="w-4 h-4 text-blue-700 mr-2" />
                        <span className="text-sm font-bold text-blue-800">{currentTherapist.specialization}</span>
                      </div>
                    </div>

                    {/* Professional Information Grid */}
                    <div className="grid grid-cols-1 gap-4">
                      {/* Location */}
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                            <MapPin className="h-6 w-6 text-blue-700" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Practice Location</div>
                            <div className="font-bold text-gray-800">{currentTherapist.location}</div>
                          </div>
                        </div>
                      </div>

                      {/* Availability */}
                      <div className="bg-gradient-to-r from-gray-50 to-emerald-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                            <Clock className="h-6 w-6 text-emerald-700" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Available Hours</div>
                            <div className="font-bold text-gray-800">{currentTherapist.availability_hours || "9:00 AM - 6:00 PM"}</div>
                          </div>
                        </div>
                      </div>

                      {/* Rating */}
                      {currentTherapist.rating && (
                        <div className="bg-gradient-to-r from-gray-50 to-yellow-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                              <Star className="h-6 w-6 text-yellow-600 fill-current" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Patient Rating</div>
                              <div className="font-bold text-gray-800 flex items-center">
                                {currentTherapist.rating}/5.0
                                <span className="ml-2 text-xs text-yellow-600 font-medium">Excellent</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Experience - FIXED DUPLICATE "Years" */}
                      <div className="bg-gradient-to-r from-gray-50 to-indigo-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                            <Users className="h-6 w-6 text-indigo-700" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Experience</div>
                            <div className="font-bold text-gray-800">
                              {formatExperience(currentTherapist.experience)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Session Availability Badge */}
                    <div className="text-center pt-4">
                      <span
                        className={`inline-flex items-center px-6 py-3 rounded-2xl font-bold text-sm shadow-lg border-2 ${
                          currentTherapist.availability_mode === 'online'
                            ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-emerald-500'
                            : currentTherapist.availability_mode === 'offline'
                            ? 'bg-gradient-to-r from-blue-700 to-blue-800 text-white border-blue-600'
                            : 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white border-indigo-500'
                        }`}
                      >
                        {currentTherapist.availability_mode === 'online'
                          ? '🌐 Online Sessions Available'
                          : currentTherapist.availability_mode === 'offline'
                          ? '🏢 In-Person Sessions Only'
                          : '💫 Flexible Session Options'}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* PROFESSIONAL BOOKING FORM */}
          <div className="xl:col-span-3">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Professional Form Header */}
              <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border-b border-gray-200 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-3">Schedule Your Appointment</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Complete the form below to book your confidential therapy session with a licensed professional
                  </p>
                  <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-700/20 rounded-xl border border-blue-400/30">
                    <Info className="w-4 h-4 text-blue-200 mr-2" />
                    <span className="text-blue-100 text-sm font-medium">All sessions are strictly confidential</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Professional Error Display */}
                {error && (
                  <div className="mb-8 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 p-6 rounded-2xl shadow-lg">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Shield className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-red-800 text-lg mb-1">Booking Issue</h4>
                        <p className="text-red-700">{error}</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Professional Date Selection */}
                  <div>
                    <label className="flex items-center text-xl font-bold text-gray-800 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <Calendar className="h-5 w-5 text-blue-800" />
                      </div>
                      Select Appointment Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={getMinDate()}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-700 transition-all duration-300 text-lg font-medium bg-white shadow-sm"
                    />
                  </div>

                  {/* Professional Time Selection */}
                  <div>
                    <label className="flex items-center text-xl font-bold text-gray-800 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <Clock className="h-5 w-5 text-emerald-800" />
                      </div>
                      Choose Time Slot
                    </label>
                    <div className="relative">
                      <select
                        name="time_slot"
                        value={formData.time_slot}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-700 transition-all duration-300 text-lg font-medium bg-white shadow-sm appearance-none cursor-pointer"
                      >
                        <option value="">Select your preferred time slot</option>
                        {generateTimeSlots().map((slot) => (
                          <option key={slot} value={slot}>
                            {slot} - Available
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Professional Session Format */}
                  {currentTherapist && (
                    <div>
                      <label className="block text-xl font-bold text-gray-800 mb-6">
                        Session Format Preference
                      </label>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {(currentTherapist.availability_mode === 'online' || currentTherapist.availability_mode === 'both' || !currentTherapist.availability_mode) && (
                          <label className="relative cursor-pointer group">
                            <input
                              type="radio"
                              name="mode"
                              value="online"
                              checked={formData.mode === 'online'}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div
                              className={`border-3 rounded-3xl p-8 transition-all duration-300 group-hover:shadow-xl ${
                                formData.mode === 'online'
                                  ? 'border-blue-700 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl transform scale-105'
                                  : 'border-gray-200 hover:border-blue-300 bg-white shadow-lg'
                              }`}
                            >
                              <div className="flex items-center mb-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                                  <Video className="h-7 w-7 text-white" />
                                </div>
                                <div>
                                  <span className="text-xl font-bold text-gray-800 block">Online Therapy</span>
                                  {formData.mode === 'online' && (
                                    <CheckCircle className="w-6 h-6 text-blue-700 mt-1" />
                                  )}
                                </div>
                              </div>
                              <p className="text-gray-600 leading-relaxed font-medium">
                                Secure, private sessions from your comfortable space via video, voice, or secure messaging platform
                              </p>
                            </div>
                          </label>
                        )}

                        {(currentTherapist.availability_mode === 'offline' || currentTherapist.availability_mode === 'both' || !currentTherapist.availability_mode) && (
                          <label className="relative cursor-pointer group">
                            <input
                              type="radio"
                              name="mode"
                              value="offline"
                              checked={formData.mode === 'offline'}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div
                              className={`border-3 rounded-3xl p-8 transition-all duration-300 group-hover:shadow-xl ${
                                formData.mode === 'offline'
                                  ? 'border-blue-700 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl transform scale-105'
                                  : 'border-gray-200 hover:border-blue-300 bg-white shadow-lg'
                              }`}
                            >
                              <div className="flex items-center mb-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                                  <MapPin className="h-7 w-7 text-white" />
                                </div>
                                <div>
                                  <span className="text-xl font-bold text-gray-800 block">In-Person Session</span>
                                  {formData.mode === 'offline' && (
                                    <CheckCircle className="w-6 h-6 text-blue-700 mt-1" />
                                  )}
                                </div>
                              </div>
                              <p className="text-gray-600 leading-relaxed font-medium">
                                Traditional face-to-face therapy in the therapist's professional, confidential office environment
                              </p>
                            </div>
                          </label>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Professional Online Options */}
                  {formData.mode === 'online' && (
                    <div>
                      <label className="block text-xl font-bold text-gray-800 mb-6">
                        Online Session Method
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { value: 'Video Call', icon: Video, label: 'Video Therapy', desc: 'Face-to-face video session' },
                          { value: 'Voice Call', icon: Phone, label: 'Audio Only', desc: 'Voice-only session' },
                          { value: 'Live Chat', icon: MessageCircle, label: 'Text Therapy', desc: 'Secure messaging' },
                        ].map(({ value, icon: Icon, label, desc }) => (
                          <label key={value} className="relative cursor-pointer group">
                            <input
                              type="radio"
                              name="online_type"
                              value={value}
                              checked={formData.online_type === value}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div
                              className={`border-2 rounded-3xl p-6 transition-all duration-300 text-center group-hover:shadow-lg ${
                                formData.online_type === value
                                  ? 'border-blue-700 bg-blue-50 shadow-lg transform scale-105'
                                  : 'border-gray-200 hover:border-blue-300 bg-white'
                              }`}
                            >
                              <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                                <Icon className="h-7 w-7 text-indigo-800" />
                              </div>
                              <span className="font-bold text-gray-800 block text-lg mb-2">{label}</span>
                              <span className="text-sm text-gray-600 font-medium">{desc}</span>
                              {formData.online_type === value && (
                                <CheckCircle className="w-6 h-6 text-blue-700 mx-auto mt-3" />
                              )}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Professional Notes Section */}
                  <div>
                    <label className="block text-xl font-bold text-gray-800 mb-6">
                      Session Notes (Optional)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-700 transition-all duration-300 resize-none text-lg font-medium bg-white shadow-sm"
                      placeholder="Share any specific concerns, therapeutic goals, or topics you'd like to address during your session. This helps your therapist prepare for your appointment."
                    />
                  </div>

                  {/* Professional Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={submitting || !currentTherapist}
                      className="w-full py-6 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 hover:from-blue-800 hover:via-blue-900 hover:to-indigo-900 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-3xl text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <div className="flex items-center justify-center">
                          <LoadingSpinner size="md" />
                          <span className="ml-4">Securing Your Appointment...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Calendar className="w-6 h-6 mr-4" />
                          Confirm Professional Booking
                        </div>
                      )}
                    </button>
                    
                    <div className="mt-6 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                      <p className="text-center text-sm text-gray-600 leading-relaxed">
                        <Shield className="w-4 h-4 inline mr-2 text-emerald-600" />
                        By booking, you agree to our 
                        <button 
                          onClick={handleTermsClick}
                          className="font-semibold text-blue-700 hover:text-blue-800 underline mx-1 cursor-pointer"
                        >
                          terms of service
                        </button> 
                        and 
                        <button 
                          onClick={handlePrivacyClick}
                          className="font-semibold text-blue-700 hover:text-blue-800 underline mx-1 cursor-pointer"
                        >
                          privacy policy
                        </button>. 
                        Your appointment confirmation will be sent via secure email immediately after booking.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
