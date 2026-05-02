// // // // import React, { useState, useEffect } from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import { therapistService } from '../services/therapistService';
// // // // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // // // import { 
// // // //   Star, 
// // // //   MapPin, 
// // // //   Clock, 
// // // //   Globe, 
// // // //   Users,
// // // //   Filter,
// // // //   Search
// // // // } from 'lucide-react';

// // // // const TherapistList = () => {
// // // //   const [therapists, setTherapists] = useState([]);
// // // //   const [filteredTherapists, setFilteredTherapists] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState('');
// // // //   const [searchTerm, setSearchTerm] = useState('');
// // // //   const [filter, setFilter] = useState('all'); // all, online, offline
// // // //   const [specializationFilter, setSpecializationFilter] = useState('all');

// // // //   useEffect(() => {
// // // //     fetchTherapists();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     applyFilters();
// // // //   }, [therapists, searchTerm, filter, specializationFilter]);

// // // //   const fetchTherapists = async () => {
// // // //     try {
// // // //       const data = await therapistService.getAllTherapists();
// // // //       setTherapists(data);
// // // //     } catch (err) {
// // // //       setError('Failed to load therapists');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const applyFilters = () => {
// // // //     let filtered = [...therapists];

// // // //     // Search filter
// // // //     if (searchTerm) {
// // // //       filtered = filtered.filter(
// // // //         (therapist) =>
// // // //           therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //           therapist.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //           therapist.location.toLowerCase().includes(searchTerm.toLowerCase())
// // // //       );
// // // //     }

// // // //     // Availability filter
// // // //     if (filter !== 'all') {
// // // //       filtered = filtered.filter(
// // // //         (therapist) => 
// // // //           therapist.availability_mode === filter || 
// // // //           therapist.availability_mode === 'both'
// // // //       );
// // // //     }

// // // //     // Specialization filter
// // // //     if (specializationFilter !== 'all') {
// // // //       filtered = filtered.filter(
// // // //         (therapist) =>
// // // //           therapist.specialization.toLowerCase().includes(specializationFilter.toLowerCase())
// // // //       );
// // // //     }

// // // //     setFilteredTherapists(filtered);
// // // //   };

// // // //   const getSpecializations = () => {
// // // //     const specializations = [...new Set(therapists.map(t => t.specialization))];
// // // //     return specializations;
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="flex justify-center items-center min-h-screen">
// // // //         <LoadingSpinner size="lg" />
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (error) {
// // // //     return (
// // // //       <div className="min-h-screen bg-gray-50 p-4">
// // // //         <div className="max-w-4xl mx-auto">
// // // //           <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
// // // //             {error}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 py-8">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         {/* Header */}
// // // //         <div className="text-center mb-8">
// // // //           <h1 className="text-3xl font-bold text-gray-900">Find a Therapist</h1>
// // // //           <p className="mt-2 text-gray-600">
// // // //             Connect with qualified mental health professionals
// // // //           </p>
// // // //         </div>

// // // //         {/* Filters */}
// // // //         <div className="card mb-8">
// // // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // // //             {/* Search */}
// // // //             <div className="relative">
// // // //               <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Search therapists..."
// // // //                 value={searchTerm}
// // // //                 onChange={(e) => setSearchTerm(e.target.value)}
// // // //                 className="input-field pl-10"
// // // //               />
// // // //             </div>

// // // //             {/* Availability Filter */}
// // // //             <div>
// // // //               <select
// // // //                 value={filter}
// // // //                 onChange={(e) => setFilter(e.target.value)}
// // // //                 className="input-field"
// // // //               >
// // // //                 <option value="all">All Availability</option>
// // // //                 <option value="online">Online Only</option>
// // // //                 <option value="offline">In-Person Only</option>
// // // //               </select>
// // // //             </div>

// // // //             {/* Specialization Filter */}
// // // //             <div>
// // // //               <select
// // // //                 value={specializationFilter}
// // // //                 onChange={(e) => setSpecializationFilter(e.target.value)}
// // // //                 className="input-field"
// // // //               >
// // // //                 <option value="all">All Specializations</option>
// // // //                 {getSpecializations().map((spec) => (
// // // //                   <option key={spec} value={spec}>
// // // //                     {spec}
// // // //                   </option>
// // // //                 ))}
// // // //               </select>
// // // //             </div>

// // // //             {/* Clear Filters */}
// // // //             <button
// // // //               onClick={() => {
// // // //                 setSearchTerm('');
// // // //                 setFilter('all');
// // // //                 setSpecializationFilter('all');
// // // //               }}
// // // //               className="btn-secondary"
// // // //             >
// // // //               Clear Filters
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Results Count */}
// // // //         <div className="mb-6">
// // // //           <p className="text-gray-600">
// // // //             Showing {filteredTherapists.length} of {therapists.length} therapists
// // // //           </p>
// // // //         </div>

// // // //         {/* Therapist Grid */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //           {filteredTherapists.map((therapist) => (
// // // //             <div key={therapist.id} className="card hover:shadow-lg transition-shadow">
// // // //               <div className="flex items-start justify-between mb-4">
// // // //                 <div>
// // // //                   <h3 className="text-lg font-semibold text-gray-900">
// // // //                     {therapist.name}
// // // //                   </h3>
// // // //                   <p className="text-sm text-primary font-medium">
// // // //                     {therapist.specialization}
// // // //                   </p>
// // // //                 </div>
// // // //                 <div className="flex items-center">
// // // //                   <Star className="h-4 w-4 text-yellow-400 fill-current" />
// // // //                   <span className="text-sm text-gray-600 ml-1">
// // // //                     {therapist.rating}
// // // //                   </span>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="space-y-2 mb-4">
// // // //                 <div className="flex items-center text-sm text-gray-600">
// // // //                   <MapPin className="h-4 w-4 mr-2" />
// // // //                   {therapist.location}
// // // //                 </div>
// // // //                 <div className="flex items-center text-sm text-gray-600">
// // // //                   <Clock className="h-4 w-4 mr-2" />
// // // //                   {therapist.availability_hours}
// // // //                 </div>
// // // //                 <div className="flex items-center text-sm text-gray-600">
// // // //                   <Users className="h-4 w-4 mr-2" />
// // // //                   {therapist.experience}
// // // //                 </div>
// // // //                 <div className="flex items-center text-sm text-gray-600">
// // // //                   <Globe className="h-4 w-4 mr-2" />
// // // //                   {therapist.languages}
// // // //                 </div>
// // // //               </div>

// // // //               {/* Availability Mode Badge */}
// // // //               <div className="mb-4">
// // // //                 <span
// // // //                   className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
// // // //                     therapist.availability_mode === 'online'
// // // //                       ? 'bg-green-100 text-green-800'
// // // //                       : therapist.availability_mode === 'offline'
// // // //                       ? 'bg-blue-100 text-blue-800'
// // // //                       : 'bg-purple-100 text-purple-800'
// // // //                   }`}
// // // //                 >
// // // //                   {therapist.availability_mode === 'online'
// // // //                     ? 'Online Only'
// // // //                     : therapist.availability_mode === 'offline'
// // // //                     ? 'In-Person Only'
// // // //                     : 'Online & In-Person'}
// // // //                 </span>
// // // //               </div>

// // // //               {therapist.profile_description && (
// // // //                 <p className="text-sm text-gray-600 mb-4 line-clamp-3">
// // // //                   {therapist.profile_description}
// // // //                 </p>
// // // //               )}

// // // //               <div className="flex space-x-2">
// // // //                 <Link
// // // //                   to={`/therapist/${therapist.id}`}
// // // //                   className="flex-1 btn-secondary text-center"
// // // //                 >
// // // //                   View Profile
// // // //                 </Link>
// // // //                 <Link
// // // //                   to={`/book-appointment/${therapist.id}`}
// // // //                   className="flex-1 btn-primary text-center"
// // // //                 >
// // // //                   Book Now
// // // //                 </Link>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* No Results */}
// // // //         {filteredTherapists.length === 0 && !loading && (
// // // //           <div className="text-center py-12">
// // // //             <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
// // // //             <h3 className="text-lg font-semibold text-gray-900 mb-2">
// // // //               No therapists found
// // // //             </h3>
// // // //             <p className="text-gray-600">
// // // //               Try adjusting your search criteria or clearing the filters
// // // //             </p>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TherapistList;





// // // // import React, { useState, useEffect } from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import { therapistService } from '../services/therapistService';
// // // // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // // // import { 
// // // //   Star, 
// // // //   MapPin, 
// // // //   Clock, 
// // // //   Globe, 
// // // //   Users,
// // // //   Filter,
// // // //   Search,
// // // //   Award,
// // // //   Calendar,
// // // //   Video,
// // // //   UserCheck,
// // // //   ChevronDown,
// // // //   X,
// // // //   Heart,
// // // //   Shield,
// // // //   CheckCircle,
// // // //   Verified,
// // // //   SlidersHorizontal,
// // // //   ArrowRight,
// // // //   BadgeCheck,
// // // //   Timer
// // // // } from 'lucide-react';

// // // // const TherapistList = () => {
// // // //   const [therapists, setTherapists] = useState([]);
// // // //   const [filteredTherapists, setFilteredTherapists] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState('');
// // // //   const [searchTerm, setSearchTerm] = useState('');
// // // //   const [filter, setFilter] = useState('all');
// // // //   const [specializationFilter, setSpecializationFilter] = useState('all');
// // // //   const [showFilters, setShowFilters] = useState(false);

// // // //   useEffect(() => {
// // // //     fetchTherapists();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     applyFilters();
// // // //   }, [therapists, searchTerm, filter, specializationFilter]);

// // // //   const fetchTherapists = async () => {
// // // //     try {
// // // //       const data = await therapistService.getAllTherapists();
// // // //       setTherapists(data);
// // // //     } catch (err) {
// // // //       setError('Failed to load therapists. Please try again.');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const applyFilters = () => {
// // // //     let filtered = [...therapists];

// // // //     if (searchTerm) {
// // // //       filtered = filtered.filter(
// // // //         (therapist) =>
// // // //           therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //           therapist.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //           therapist.location.toLowerCase().includes(searchTerm.toLowerCase())
// // // //       );
// // // //     }

// // // //     if (filter !== 'all') {
// // // //       filtered = filtered.filter(
// // // //         (therapist) => 
// // // //           therapist.availability_mode === filter || 
// // // //           therapist.availability_mode === 'both'
// // // //       );
// // // //     }

// // // //     if (specializationFilter !== 'all') {
// // // //       filtered = filtered.filter(
// // // //         (therapist) =>
// // // //           therapist.specialization.toLowerCase().includes(specializationFilter.toLowerCase())
// // // //       );
// // // //     }

// // // //     setFilteredTherapists(filtered);
// // // //   };

// // // //   const getSpecializations = () => {
// // // //     const specializations = [...new Set(therapists.map(t => t.specialization))];
// // // //     return specializations;
// // // //   };

// // // //   const clearFilters = () => {
// // // //     setSearchTerm('');
// // // //     setFilter('all');
// // // //     setSpecializationFilter('all');
// // // //     setShowFilters(false);
// // // //   };

// // // //   const hasActiveFilters = searchTerm || filter !== 'all' || specializationFilter !== 'all';

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
// // // //         <div className="text-center space-y-4 max-w-sm mx-auto px-6">
// // // //           <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
// // // //             <Heart className="w-8 h-8 text-white animate-pulse" />
// // // //           </div>
// // // //           <LoadingSpinner size="lg" />
// // // //           <div className="space-y-2">
// // // //             <h3 className="text-lg font-semibold text-gray-900">Loading Therapists</h3>
// // // //             <p className="text-gray-600 text-sm">Finding qualified mental health professionals...</p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (error) {
// // // //     return (
// // // //       <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-4 flex items-center justify-center">
// // // //         <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm border border-red-200 p-6">
// // // //           <div className="text-center">
// // // //             <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// // // //               <X className="w-6 h-6 text-red-600" />
// // // //             </div>
// // // //             <h3 className="text-lg font-semibold text-gray-900 mb-2">Unable to Load Therapists</h3>
// // // //             <p className="text-gray-600 mb-4">{error}</p>
// // // //             <button
// // // //               onClick={fetchTherapists}
// // // //               className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors"
// // // //             >
// // // //               Try Again
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
// // // //       {/* Hero Section */}
// // // //       <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
// // // //         <div className="absolute inset-0 bg-black/10"></div>
        
// // // //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
// // // //           <div className="text-center max-w-4xl mx-auto">
// // // //             <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
// // // //               <UserCheck className="w-8 h-8 text-white" />
// // // //             </div>
            
// // // //             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
// // // //               Find Your <span className="text-yellow-300">Perfect</span> Therapist
// // // //             </h1>
            
// // // //             <p className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed">
// // // //               Connect with licensed, verified mental health professionals who understand your unique journey and are ready to support your healing.
// // // //             </p>
            
// // // //             <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm">
// // // //               <div className="flex items-center space-x-2">
// // // //                 <BadgeCheck className="w-4 h-4 text-emerald-300" />
// // // //                 <span>Licensed & Verified</span>
// // // //               </div>
// // // //               <div className="flex items-center space-x-2">
// // // //                 <Heart className="w-4 h-4 text-pink-300" />
// // // //                 <span>Compassionate Care</span>
// // // //               </div>
// // // //               <div className="flex items-center space-x-2">
// // // //                 <CheckCircle className="w-4 h-4 text-yellow-300" />
// // // //                 <span>Personalized Match</span>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
// // // //         {/* Search & Filters */}
// // // //         <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 -mt-8 relative z-10">
// // // //           <div className="p-6">
// // // //             {/* Search Bar */}
// // // //             <div className="flex flex-col lg:flex-row gap-4 mb-4">
// // // //               <div className="flex-1 relative">
// // // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                   <Search className="h-5 w-5 text-gray-400" />
// // // //                 </div>
// // // //                 <input
// // // //                   type="text"
// // // //                   placeholder="Search by name, specialty, or location..."
// // // //                   value={searchTerm}
// // // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // // //                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
// // // //                 />
// // // //               </div>
              
// // // //               <button
// // // //                 onClick={() => setShowFilters(!showFilters)}
// // // //                 className="lg:hidden inline-flex items-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 font-medium"
// // // //               >
// // // //                 <SlidersHorizontal className="w-4 h-4 mr-2" />
// // // //                 Filters
// // // //                 {hasActiveFilters && (
// // // //                   <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full">
// // // //                     {[searchTerm, filter !== 'all', specializationFilter !== 'all'].filter(Boolean).length}
// // // //                   </span>
// // // //                 )}
// // // //               </button>

// // // //               {/* Desktop Filters */}
// // // //               <div className="hidden lg:flex gap-3">
// // // //                 <select
// // // //                   value={filter}
// // // //                   onChange={(e) => setFilter(e.target.value)}
// // // //                   className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white min-w-[140px]"
// // // //                 >
// // // //                   <option value="all">All Sessions</option>
// // // //                   <option value="online">Online Only</option>
// // // //                   <option value="offline">In-Person Only</option>
// // // //                 </select>
                
// // // //                 <select
// // // //                   value={specializationFilter}
// // // //                   onChange={(e) => setSpecializationFilter(e.target.value)}
// // // //                   className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white min-w-[160px]"
// // // //                 >
// // // //                   <option value="all">All Specialties</option>
// // // //                   {getSpecializations().map((spec) => (
// // // //                     <option key={spec} value={spec}>{spec}</option>
// // // //                   ))}
// // // //                 </select>
// // // //               </div>
// // // //             </div>

// // // //             {/* Mobile Filters */}
// // // //             {showFilters && (
// // // //               <div className="lg:hidden border-t border-gray-200 pt-4 space-y-3">
// // // //                 <select
// // // //                   value={filter}
// // // //                   onChange={(e) => setFilter(e.target.value)}
// // // //                   className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
// // // //                 >
// // // //                   <option value="all">All Sessions</option>
// // // //                   <option value="online">Online Only</option>
// // // //                   <option value="offline">In-Person Only</option>
// // // //                 </select>
                
// // // //                 <select
// // // //                   value={specializationFilter}
// // // //                   onChange={(e) => setSpecializationFilter(e.target.value)}
// // // //                   className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
// // // //                 >
// // // //                   <option value="all">All Specialties</option>
// // // //                   {getSpecializations().map((spec) => (
// // // //                     <option key={spec} value={spec}>{spec}</option>
// // // //                   ))}
// // // //                 </select>
// // // //               </div>
// // // //             )}

// // // //             {/* Active Filters */}
// // // //             {hasActiveFilters && (
// // // //               <div className="mt-4 flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
// // // //                 <div className="flex flex-wrap gap-2 items-center">
// // // //                   <span className="text-sm font-medium text-purple-800">Active filters:</span>
// // // //                   {searchTerm && (
// // // //                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
// // // //                       "{searchTerm}"
// // // //                     </span>
// // // //                   )}
// // // //                   {filter !== 'all' && (
// // // //                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
// // // //                       {filter === 'online' ? 'Online' : 'In-Person'}
// // // //                     </span>
// // // //                   )}
// // // //                   {specializationFilter !== 'all' && (
// // // //                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
// // // //                       {specializationFilter}
// // // //                     </span>
// // // //                   )}
// // // //                 </div>
// // // //                 <button
// // // //                   onClick={clearFilters}
// // // //                   className="text-purple-700 hover:text-purple-900 text-sm font-medium flex items-center space-x-1"
// // // //                 >
// // // //                   <X className="w-3 h-3" />
// // // //                   <span>Clear all</span>
// // // //                 </button>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>

// // // //         {/* Results Header */}
// // // //         <div className="flex items-center justify-between mb-6">
// // // //           <div>
// // // //             <h2 className="text-xl font-semibold text-gray-900">
// // // //               {filteredTherapists.length === 0 && hasActiveFilters 
// // // //                 ? 'No matches found' 
// // // //                 : `${filteredTherapists.length} therapist${filteredTherapists.length !== 1 ? 's' : ''} available`
// // // //               }
// // // //             </h2>
// // // //             {filteredTherapists.length > 0 && (
// // // //               <p className="text-sm text-gray-600 mt-1">
// // // //                 All licensed and verified professionals
// // // //               </p>
// // // //             )}
// // // //           </div>
// // // //         </div>

// // // //         {/* Therapist Grid */}
// // // //         {filteredTherapists.length > 0 ? (
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //             {filteredTherapists.map((therapist) => (
// // // //               <div
// // // //                 key={therapist.id}
// // // //                 className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-purple-300 transition-all duration-200 overflow-hidden group"
// // // //               >
// // // //                 {/* Header */}
// // // //                 <div className="p-6 border-b border-gray-100">
// // // //                   <div className="flex items-start space-x-4">
// // // //                     <div className="relative flex-shrink-0">
// // // //                       <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
// // // //                         <Users className="w-6 h-6 text-white" />
// // // //                       </div>
// // // //                       <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
// // // //                         <Verified className="w-2.5 h-2.5 text-white" />
// // // //                       </div>
// // // //                     </div>
                    
// // // //                     <div className="flex-1 min-w-0">
// // // //                       <div className="flex items-start justify-between">
// // // //                         <div>
// // // //                           <h3 className="text-lg font-semibold text-gray-900 mb-1">
// // // //                             Dr. {therapist.name}
// // // //                           </h3>
// // // //                           <div className="inline-flex items-center px-2.5 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 rounded-md text-xs font-medium">
// // // //                             <Award className="w-3 h-3 mr-1" />
// // // //                             {therapist.specialization}
// // // //                           </div>
// // // //                         </div>
                        
// // // //                         <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
// // // //                           <Star className="h-3.5 w-3.5 text-yellow-500 fill-current mr-1" />
// // // //                           <span className="text-sm font-semibold text-yellow-700">{therapist.rating}</span>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Details */}
// // // //                 <div className="p-6 space-y-4">
// // // //                   <div className="grid grid-cols-2 gap-3 text-sm">
// // // //                     <div className="flex items-center text-gray-600">
// // // //                       <MapPin className="w-4 h-4 mr-2 text-purple-500" />
// // // //                       <span className="truncate">{therapist.location}</span>
// // // //                     </div>
// // // //                     <div className="flex items-center text-gray-600">
// // // //                       <Timer className="w-4 h-4 mr-2 text-emerald-500" />
// // // //                       <span className="truncate">{therapist.experience}</span>
// // // //                     </div>
// // // //                     <div className="flex items-center text-gray-600">
// // // //                       <Clock className="w-4 h-4 mr-2 text-indigo-500" />
// // // //                       <span className="truncate">{therapist.availability_hours}</span>
// // // //                     </div>
// // // //                     <div className="flex items-center text-gray-600">
// // // //                       <Globe className="w-4 h-4 mr-2 text-orange-500" />
// // // //                       <span className="truncate">{therapist.languages}</span>
// // // //                     </div>
// // // //                   </div>

// // // //                   {/* Availability Badge */}
// // // //                   <div className="pt-2">
// // // //                     {therapist.availability_mode === 'online' && (
// // // //                       <div className="inline-flex items-center px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-medium border border-emerald-200">
// // // //                         <Video className="w-3 h-3 mr-1.5" />
// // // //                         Online Available
// // // //                       </div>
// // // //                     )}
// // // //                     {therapist.availability_mode === 'offline' && (
// // // //                       <div className="inline-flex items-center px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-xs font-medium border border-purple-200">
// // // //                         <MapPin className="w-3 h-3 mr-1.5" />
// // // //                         In-Person Only
// // // //                       </div>
// // // //                     )}
// // // //                     {(therapist.availability_mode === 'both' || !therapist.availability_mode) && (
// // // //                       <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 rounded-lg text-xs font-medium border border-purple-200">
// // // //                         <CheckCircle className="w-3 h-3 mr-1.5" />
// // // //                         Both Available
// // // //                       </div>
// // // //                     )}
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Actions */}
// // // //                 <div className="px-6 pb-6 flex space-x-3">
// // // //                   <Link
// // // //                     to={`/therapist/${therapist.id}`}
// // // //                     className="flex-1 px-4 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg text-center font-medium transition-colors text-sm"
// // // //                   >
// // // //                     View Profile
// // // //                   </Link>
// // // //                   <Link
// // // //                     to={`/book-appointment/${therapist.id}`}
// // // //                     className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg text-center font-medium transition-colors text-sm inline-flex items-center justify-center"
// // // //                   >
// // // //                     <Calendar className="w-4 h-4 mr-1.5" />
// // // //                     Book Now
// // // //                   </Link>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         ) : (
// // // //           /* Empty State */
// // // //           <div className="text-center py-16">
// // // //             <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
// // // //               <Users className="w-8 h-8 text-purple-400" />
// // // //             </div>
// // // //             <h3 className="text-lg font-semibold text-gray-900 mb-2">
// // // //               {hasActiveFilters ? 'No therapists match your criteria' : 'No therapists available'}
// // // //             </h3>
// // // //             <p className="text-gray-600 mb-6 max-w-md mx-auto">
// // // //               {hasActiveFilters 
// // // //                 ? 'Try adjusting your search terms or filters to find more options.'
// // // //                 : 'We\'re working to connect you with qualified professionals. Please check back soon.'
// // // //               }
// // // //             </p>
// // // //             {hasActiveFilters && (
// // // //               <button
// // // //                 onClick={clearFilters}
// // // //                 className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors"
// // // //               >
// // // //                 <X className="w-4 h-4 mr-2" />
// // // //                 Clear All Filters
// // // //               </button>
// // // //             )}
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TherapistList;
// // // import React, { useState, useEffect } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { therapistService } from '../services/therapistService';
// // // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // // import { 
// // //   Star, 
// // //   MapPin, 
// // //   Clock, 
// // //   Globe, 
// // //   Users,
// // //   Filter,
// // //   Search,
// // //   Award,
// // //   Calendar,
// // //   Video,
// // //   UserCheck,
// // //   ChevronDown,
// // //   X,
// // //   Heart,
// // //   Shield,
// // //   CheckCircle,
// // //   Verified,
// // //   SlidersHorizontal,
// // //   ArrowRight,
// // //   BadgeCheck,
// // //   Timer
// // // } from 'lucide-react';

// // // const TherapistList = () => {
// // //   const [therapists, setTherapists] = useState([]);
// // //   const [filteredTherapists, setFilteredTherapists] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState('');
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [filter, setFilter] = useState('all');
// // //   const [specializationFilter, setSpecializationFilter] = useState('all');
// // //   const [showFilters, setShowFilters] = useState(false);

// // //   useEffect(() => {
// // //     fetchTherapists();
// // //   }, []);

// // //   useEffect(() => {
// // //     applyFilters();
// // //   }, [therapists, searchTerm, filter, specializationFilter]);

// // //   const fetchTherapists = async () => {
// // //     try {
// // //       const data = await therapistService.getAllTherapists();
// // //       setTherapists(data);
// // //     } catch (err) {
// // //       setError('Failed to load therapists. Please try again.');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const applyFilters = () => {
// // //     let filtered = [...therapists];

// // //     if (searchTerm) {
// // //       filtered = filtered.filter(
// // //         (therapist) =>
// // //           therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //           therapist.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //           therapist.location.toLowerCase().includes(searchTerm.toLowerCase())
// // //       );
// // //     }

// // //     if (filter !== 'all') {
// // //       filtered = filtered.filter(
// // //         (therapist) => 
// // //           therapist.availability_mode === filter || 
// // //           therapist.availability_mode === 'both'
// // //       );
// // //     }

// // //     if (specializationFilter !== 'all') {
// // //       filtered = filtered.filter(
// // //         (therapist) =>
// // //           therapist.specialization.toLowerCase().includes(specializationFilter.toLowerCase())
// // //       );
// // //     }

// // //     setFilteredTherapists(filtered);
// // //   };

// // //   const getSpecializations = () => {
// // //     const specializations = [...new Set(therapists.map(t => t.specialization))];
// // //     return specializations;
// // //   };

// // //   const clearFilters = () => {
// // //     setSearchTerm('');
// // //     setFilter('all');
// // //     setSpecializationFilter('all');
// // //     setShowFilters(false);
// // //   };

// // //   const hasActiveFilters = searchTerm || filter !== 'all' || specializationFilter !== 'all';

// // //   // Helper function to format therapist name
// // //   const formatTherapistName = (name) => {
// // //     // Check if name already starts with "Dr." (case insensitive)
// // //     if (name && name.toLowerCase().startsWith('dr.')) {
// // //       return name;
// // //     }
// // //     return `Dr. ${name}`;
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
// // //         <div className="text-center space-y-4 max-w-sm mx-auto px-6">
// // //           <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
// // //             <Heart className="w-8 h-8 text-white animate-pulse" />
// // //           </div>
// // //           <LoadingSpinner size="lg" />
// // //           <div className="space-y-2">
// // //             <h3 className="text-lg font-semibold text-gray-900">Loading Therapists</h3>
// // //             <p className="text-gray-600 text-sm">Finding qualified mental health professionals...</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-4 flex items-center justify-center">
// // //         <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm border border-red-200 p-6">
// // //           <div className="text-center">
// // //             <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// // //               <X className="w-6 h-6 text-red-600" />
// // //             </div>
// // //             <h3 className="text-lg font-semibold text-gray-900 mb-2">Unable to Load Therapists</h3>
// // //             <p className="text-gray-600 mb-4">{error}</p>
// // //             <button
// // //               onClick={fetchTherapists}
// // //               className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors"
// // //             >
// // //               Try Again
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
// // //       {/* Hero Section */}
// // //       <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
// // //         <div className="absolute inset-0 bg-black/10"></div>
        
// // //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
// // //           <div className="text-center max-w-4xl mx-auto">
// // //             <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
// // //               <UserCheck className="w-8 h-8 text-white" />
// // //             </div>
            
// // //             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
// // //               Find Your <span className="text-yellow-300">Perfect</span> Therapist
// // //             </h1>
            
// // //             <p className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed">
// // //               Connect with licensed, verified mental health professionals who understand your unique journey and are ready to support your healing.
// // //             </p>
            
// // //             <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm">
// // //               <div className="flex items-center space-x-2">
// // //                 <BadgeCheck className="w-4 h-4 text-emerald-300" />
// // //                 <span>Licensed & Verified</span>
// // //               </div>
// // //               <div className="flex items-center space-x-2">
// // //                 <Heart className="w-4 h-4 text-pink-300" />
// // //                 <span>Compassionate Care</span>
// // //               </div>
// // //               <div className="flex items-center space-x-2">
// // //                 <CheckCircle className="w-4 h-4 text-yellow-300" />
// // //                 <span>Personalized Match</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
// // //         {/* Search & Filters */}
// // //         <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 -mt-8 relative z-10">
// // //           <div className="p-6">
// // //             {/* Search Bar */}
// // //             <div className="flex flex-col lg:flex-row gap-4 mb-4">
// // //               <div className="flex-1 relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <Search className="h-5 w-5 text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Search by name, specialty, or location..."
// // //                   value={searchTerm}
// // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // //                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
// // //                 />
// // //               </div>
              
// // //               <button
// // //                 onClick={() => setShowFilters(!showFilters)}
// // //                 className="lg:hidden inline-flex items-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 font-medium"
// // //               >
// // //                 <SlidersHorizontal className="w-4 h-4 mr-2" />
// // //                 Filters
// // //                 {hasActiveFilters && (
// // //                   <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full">
// // //                     {[searchTerm, filter !== 'all', specializationFilter !== 'all'].filter(Boolean).length}
// // //                   </span>
// // //                 )}
// // //               </button>

// // //               {/* Desktop Filters */}
// // //               <div className="hidden lg:flex gap-3">
// // //                 <select
// // //                   value={filter}
// // //                   onChange={(e) => setFilter(e.target.value)}
// // //                   className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white min-w-[140px]"
// // //                 >
// // //                   <option value="all">All Sessions</option>
// // //                   <option value="online">Online Only</option>
// // //                   <option value="offline">In-Person Only</option>
// // //                 </select>
                
// // //                 <select
// // //                   value={specializationFilter}
// // //                   onChange={(e) => setSpecializationFilter(e.target.value)}
// // //                   className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white min-w-[160px]"
// // //                 >
// // //                   <option value="all">All Specialties</option>
// // //                   {getSpecializations().map((spec) => (
// // //                     <option key={spec} value={spec}>{spec}</option>
// // //                   ))}
// // //                 </select>
// // //               </div>
// // //             </div>

// // //             {/* Mobile Filters */}
// // //             {showFilters && (
// // //               <div className="lg:hidden border-t border-gray-200 pt-4 space-y-3">
// // //                 <select
// // //                   value={filter}
// // //                   onChange={(e) => setFilter(e.target.value)}
// // //                   className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
// // //                 >
// // //                   <option value="all">All Sessions</option>
// // //                   <option value="online">Online Only</option>
// // //                   <option value="offline">In-Person Only</option>
// // //                 </select>
                
// // //                 <select
// // //                   value={specializationFilter}
// // //                   onChange={(e) => setSpecializationFilter(e.target.value)}
// // //                   className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
// // //                 >
// // //                   <option value="all">All Specialties</option>
// // //                   {getSpecializations().map((spec) => (
// // //                     <option key={spec} value={spec}>{spec}</option>
// // //                   ))}
// // //                 </select>
// // //               </div>
// // //             )}

// // //             {/* Active Filters */}
// // //             {hasActiveFilters && (
// // //               <div className="mt-4 flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
// // //                 <div className="flex flex-wrap gap-2 items-center">
// // //                   <span className="text-sm font-medium text-purple-800">Active filters:</span>
// // //                   {searchTerm && (
// // //                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
// // //                       "{searchTerm}"
// // //                     </span>
// // //                   )}
// // //                   {filter !== 'all' && (
// // //                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
// // //                       {filter === 'online' ? 'Online' : 'In-Person'}
// // //                     </span>
// // //                   )}
// // //                   {specializationFilter !== 'all' && (
// // //                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
// // //                       {specializationFilter}
// // //                     </span>
// // //                   )}
// // //                 </div>
// // //                 <button
// // //                   onClick={clearFilters}
// // //                   className="text-purple-700 hover:text-purple-900 text-sm font-medium flex items-center space-x-1"
// // //                 >
// // //                   <X className="w-3 h-3" />
// // //                   <span>Clear all</span>
// // //                 </button>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>

// // //         {/* Results Header */}
// // //         <div className="flex items-center justify-between mb-6">
// // //           <div>
// // //             <h2 className="text-xl font-semibold text-gray-900">
// // //               {filteredTherapists.length === 0 && hasActiveFilters 
// // //                 ? 'No matches found' 
// // //                 : `${filteredTherapists.length} therapist${filteredTherapists.length !== 1 ? 's' : ''} available`
// // //               }
// // //             </h2>
// // //             {filteredTherapists.length > 0 && (
// // //               <p className="text-sm text-gray-600 mt-1">
// // //                 All licensed and verified professionals
// // //               </p>
// // //             )}
// // //           </div>
// // //         </div>

// // //         {/* Therapist Grid */}
// // //         {filteredTherapists.length > 0 ? (
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {filteredTherapists.map((therapist) => (
// // //               <div
// // //                 key={therapist.id}
// // //                 className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-purple-300 transition-all duration-200 overflow-hidden group"
// // //               >
// // //                 {/* Header */}
// // //                 <div className="p-6 border-b border-gray-100">
// // //                   <div className="flex items-start space-x-4">
// // //                     <div className="relative flex-shrink-0">
// // //                       <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
// // //                         <Users className="w-6 h-6 text-white" />
// // //                       </div>
// // //                       <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
// // //                         <Verified className="w-2.5 h-2.5 text-white" />
// // //                       </div>
// // //                     </div>
                    
// // //                     <div className="flex-1 min-w-0">
// // //                       <div className="flex items-start justify-between">
// // //                         <div>
// // //                           <h3 className="text-lg font-semibold text-gray-900 mb-1">
// // //                             {formatTherapistName(therapist.name)}
// // //                           </h3>
// // //                           <div className="inline-flex items-center px-2.5 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 rounded-md text-xs font-medium">
// // //                             <Award className="w-3 h-3 mr-1" />
// // //                             {therapist.specialization}
// // //                           </div>
// // //                         </div>
                        
// // //                         <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
// // //                           <Star className="h-3.5 w-3.5 text-yellow-500 fill-current mr-1" />
// // //                           <span className="text-sm font-semibold text-yellow-700">{therapist.rating}</span>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Details */}
// // //                 <div className="p-6 space-y-4">
// // //                   <div className="grid grid-cols-2 gap-3 text-sm">
// // //                     <div className="flex items-center text-gray-600">
// // //                       <MapPin className="w-4 h-4 mr-2 text-purple-500" />
// // //                       <span className="truncate">{therapist.location}</span>
// // //                     </div>
// // //                     <div className="flex items-center text-gray-600">
// // //                       <Timer className="w-4 h-4 mr-2 text-emerald-500" />
// // //                       <span className="truncate">{therapist.experience}</span>
// // //                     </div>
// // //                     <div className="flex items-center text-gray-600">
// // //                       <Clock className="w-4 h-4 mr-2 text-indigo-500" />
// // //                       <span className="truncate">{therapist.availability_hours}</span>
// // //                     </div>
// // //                     <div className="flex items-center text-gray-600">
// // //                       <Globe className="w-4 h-4 mr-2 text-orange-500" />
// // //                       <span className="truncate">{therapist.languages}</span>
// // //                     </div>
// // //                   </div>

// // //                   {/* Availability Badge */}
// // //                   <div className="pt-2">
// // //                     {therapist.availability_mode === 'online' && (
// // //                       <div className="inline-flex items-center px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-medium border border-emerald-200">
// // //                         <Video className="w-3 h-3 mr-1.5" />
// // //                         Online Available
// // //                       </div>
// // //                     )}
// // //                     {therapist.availability_mode === 'offline' && (
// // //                       <div className="inline-flex items-center px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-xs font-medium border border-purple-200">
// // //                         <MapPin className="w-3 h-3 mr-1.5" />
// // //                         In-Person Only
// // //                       </div>
// // //                     )}
// // //                     {(therapist.availability_mode === 'both' || !therapist.availability_mode) && (
// // //                       <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 rounded-lg text-xs font-medium border border-purple-200">
// // //                         <CheckCircle className="w-3 h-3 mr-1.5" />
// // //                         Both Available
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 </div>

// // //                 {/* Actions */}
// // //                 <div className="px-6 pb-6 flex space-x-3">
// // //                   <Link
// // //                     to={`/therapist/${therapist.id}`}
// // //                     className="flex-1 px-4 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg text-center font-medium transition-colors text-sm"
// // //                   >
// // //                     View Profile
// // //                   </Link>
// // //                   <Link
// // //                     to={`/book-appointment/${therapist.id}`}
// // //                     className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg text-center font-medium transition-colors text-sm inline-flex items-center justify-center"
// // //                   >
// // //                     <Calendar className="w-4 h-4 mr-1.5" />
// // //                     Book Now
// // //                   </Link>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         ) : (
// // //           /* Empty State */
// // //           <div className="text-center py-16">
// // //             <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
// // //               <Users className="w-8 h-8 text-purple-400" />
// // //             </div>
// // //             <h3 className="text-lg font-semibold text-gray-900 mb-2">
// // //               {hasActiveFilters ? 'No therapists match your criteria' : 'No therapists available'}
// // //             </h3>
// // //             <p className="text-gray-600 mb-6 max-w-md mx-auto">
// // //               {hasActiveFilters 
// // //                 ? 'Try adjusting your search terms or filters to find more options.'
// // //                 : 'We\'re working to connect you with qualified professionals. Please check back soon.'
// // //               }
// // //             </p>
// // //             {hasActiveFilters && (
// // //               <button
// // //                 onClick={clearFilters}
// // //                 className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors"
// // //               >
// // //                 <X className="w-4 h-4 mr-2" />
// // //                 Clear All Filters
// // //               </button>
// // //             )}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TherapistList;
// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { therapistService } from '../services/therapistService';
// // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // import {
// //   Star,
// //   MapPin,
// //   Clock,
// //   Globe,
// //   Users,
// //   Filter,
// //   Search,
// //   Award,
// //   Calendar,
// //   Video,
// //   UserCheck,
// //   ChevronDown,
// //   X,
// //   Heart,
// //   Shield,
// //   CheckCircle,
// //   Verified,
// //   BadgeCheck,
// //   Timer,
// //   ArrowRight
// // } from 'lucide-react';

// // // Helper function to format titles properly
// // const formatTitle = (str) => {
// //   return str
// //     .split(' ')
// //     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// //     .join(' ');
// // };

// // const TherapistList = () => {
// //   const [therapists, setTherapists] = useState([]);
// //   const [filteredTherapists, setFilteredTherapists] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [filter, setFilter] = useState('all');
// //   const [specializationFilter, setSpecializationFilter] = useState('all');
// //   const [showFilters, setShowFilters] = useState(false);

// //   useEffect(() => {
// //     fetchTherapists();
// //   }, []);

// //   useEffect(() => {
// //     applyFilters();
// //   }, [therapists, searchTerm, filter, specializationFilter]);

// //   const fetchTherapists = async () => {
// //     try {
// //       const data = await therapistService.getAllTherapists();
// //       setTherapists(data);
// //     } catch (err) {
// //       setError('Failed to load therapists. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const applyFilters = () => {
// //     let filtered = [...therapists];
    
// //     if (searchTerm) {
// //       filtered = filtered.filter(therapist =>
// //         [therapist.name, therapist.specialization, therapist.location].some(field =>
// //           field.toLowerCase().includes(searchTerm.toLowerCase())
// //         )
// //       );
// //     }
    
// //     if (filter !== 'all') {
// //       filtered = filtered.filter(therapist =>
// //         therapist.availability_mode === filter || therapist.availability_mode === 'both'
// //       );
// //     }
    
// //     if (specializationFilter !== 'all') {
// //       filtered = filtered.filter(therapist =>
// //         therapist.specialization.toLowerCase().includes(specializationFilter.toLowerCase())
// //       );
// //     }
    
// //     setFilteredTherapists(filtered);
// //   };

// //   const getSpecializations = () => {
// //     const specializations = [...new Set(therapists.map(t => t.specialization))];
// //     return specializations.sort();
// //   };

// //   const clearFilters = () => {
// //     setSearchTerm('');
// //     setFilter('all');
// //     setSpecializationFilter('all');
// //     setShowFilters(false);
// //   };

// //   const hasActiveFilters = searchTerm || filter !== 'all' || specializationFilter !== 'all';

// //   const formatTherapistName = (name) => {
// //     if (!name) return '';
// //     return name.toLowerCase().startsWith('dr.') ? name : `Dr. ${name}`;
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 flex items-center justify-center">
// //         <div className="text-center space-y-6">
// //           <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
// //             <Heart className="w-10 h-10 text-white animate-pulse" />
// //           </div>
// //           <LoadingSpinner size="lg" />
// //           <div className="space-y-2">
// //             <h3 className="text-xl font-semibold text-gray-800">Finding Mental Health Professionals</h3>
// //             <p className="text-gray-500">Loading qualified therapists for you...</p>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 p-4 flex items-center justify-center">
// //         <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
// //           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //             <X className="w-8 h-8 text-red-600" />
// //           </div>
// //           <h3 className="text-xl font-bold text-red-800 mb-2">Unable to Load Therapists</h3>
// //           <p className="text-red-600 mb-6">{error}</p>
// //           <button
// //             onClick={fetchTherapists}
// //             className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-200"
// //           >
// //             Try Again
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
// //       {/* Hero Section */}
// //       <section className="relative bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800">
// //         <div className="absolute inset-0 bg-black/10"></div>
        
// //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
// //           <div className="text-center max-w-4xl mx-auto">
// //             <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl mb-8">
// //               <UserCheck className="w-10 h-10 text-white" />
// //             </div>
            
// //             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
// //               Find Your Perfect <span className="text-yellow-300">Therapist</span>
// //             </h1>
            
// //             <p className="text-xl text-violet-100 mb-10 leading-relaxed max-w-2xl mx-auto">
// //               Connect with licensed, verified mental health professionals who understand your unique journey
// //             </p>
            
// //             <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
// //               <div className="flex items-center space-x-3 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
// //                 <BadgeCheck className="w-5 h-5 text-emerald-300" />
// //                 <span className="font-medium">Licensed & Verified</span>
// //               </div>
// //               <div className="flex items-center space-x-3 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
// //                 <Heart className="w-5 h-5 text-pink-300" />
// //                 <span className="font-medium">Compassionate Care</span>
// //               </div>
// //               <div className="flex items-center space-x-3 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
// //                 <CheckCircle className="w-5 h-5 text-yellow-300" />
// //                 <span className="font-medium">Personalized Match</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Main Content */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
// //         {/* Search & Filters */}
// //         <div className="bg-white rounded-2xl shadow-xl border border-gray-100 mb-12 -mt-12 relative z-10">
// //           <div className="p-8">
// //             <div className="flex flex-col lg:flex-row gap-6 mb-6">
// //               {/* Search Bar */}
// //               <div className="flex-1 relative">
// //                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
// //                   <Search className="h-5 w-5 text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="text"
// //                   placeholder="Search by name, specialty, or location..."
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                   className="block w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
// //                 />
// //               </div>
              
// //               {/* Mobile Filter Toggle */}
// //               <button
// //                 onClick={() => setShowFilters(!showFilters)}
// //                 className="lg:hidden inline-flex items-center px-6 py-4 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 font-medium text-lg"
// //               >
// //                 <Filter className="w-5 h-5 mr-3" />
// //                 Filters
// //                 {hasActiveFilters && (
// //                   <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-full">
// //                     {[searchTerm, filter !== 'all', specializationFilter !== 'all'].filter(Boolean).length}
// //                   </span>
// //                 )}
// //               </button>

// //               {/* Desktop Filters */}
// //               <div className="hidden lg:flex gap-4">
// //                 <select
// //                   value={filter}
// //                   onChange={(e) => setFilter(e.target.value)}
// //                   className="px-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white min-w-[180px]"
// //                 >
// //                   <option value="all">All Session Types</option>
// //                   <option value="online">Online Only</option>
// //                   <option value="offline">In-Person Only</option>
// //                 </select>
                
// //                 <select
// //                   value={specializationFilter}
// //                   onChange={(e) => setSpecializationFilter(e.target.value)}
// //                   className="px-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white min-w-[200px]"
// //                 >
// //                   <option value="all">All Specializations</option>
// //                   {getSpecializations().map((spec) => (
// //                     <option key={spec} value={spec}>{formatTitle(spec)}</option>
// //                   ))}
// //                 </select>
// //               </div>
// //             </div>

// //             {/* Mobile Filters */}
// //             {showFilters && (
// //               <div className="lg:hidden border-t border-gray-200 pt-6 space-y-4">
// //                 <select
// //                   value={filter}
// //                   onChange={(e) => setFilter(e.target.value)}
// //                   className="w-full px-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white"
// //                 >
// //                   <option value="all">All Session Types</option>
// //                   <option value="online">Online Only</option>
// //                   <option value="offline">In-Person Only</option>
// //                 </select>
                
// //                 <select
// //                   value={specializationFilter}
// //                   onChange={(e) => setSpecializationFilter(e.target.value)}
// //                   className="w-full px-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white"
// //                 >
// //                   <option value="all">All Specializations</option>
// //                   {getSpecializations().map((spec) => (
// //                     <option key={spec} value={spec}>{formatTitle(spec)}</option>
// //                   ))}
// //                 </select>
// //               </div>
// //             )}

// //             {/* Active Filters Display */}
// //             {hasActiveFilters && (
// //               <div className="mt-6 flex items-center justify-between p-4 bg-violet-50 rounded-xl border border-violet-200">
// //                 <div className="flex flex-wrap gap-2 items-center">
// //                   <span className="text-sm font-semibold text-violet-800">Active filters:</span>
// //                   {searchTerm && (
// //                     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-violet-100 text-violet-800">
// //                       "{searchTerm}"
// //                     </span>
// //                   )}
// //                   {filter !== 'all' && (
// //                     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
// //                       {filter === 'online' ? 'Online' : 'In-Person'}
// //                     </span>
// //                   )}
// //                   {specializationFilter !== 'all' && (
// //                     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
// //                       {formatTitle(specializationFilter)}
// //                     </span>
// //                   )}
// //                 </div>
// //                 <button
// //                   onClick={clearFilters}
// //                   className="text-violet-700 hover:text-violet-900 text-sm font-medium flex items-center space-x-1"
// //                 >
// //                   <X className="w-4 h-4" />
// //                   <span>Clear all</span>
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* Results Header */}
// //         <div className="flex items-center justify-between mb-8">
// //           <div>
// //             <h2 className="text-2xl font-bold text-gray-900">
// //               {filteredTherapists.length === 0 && hasActiveFilters 
// //                 ? 'No matches found' 
// //                 : `${filteredTherapists.length} therapist${filteredTherapists.length !== 1 ? 's' : ''} available`
// //               }
// //             </h2>
// //             {filteredTherapists.length > 0 && (
// //               <p className="text-gray-600 mt-1">
// //                 All licensed and verified professionals ready to help
// //               </p>
// //             )}
// //           </div>
// //         </div>

// //         {/* Therapist Cards Grid */}
// //         {filteredTherapists.length > 0 ? (
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {filteredTherapists.map((therapist) => (
// //               <div
// //                 key={therapist.id}
// //                 className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-violet-300 transition-all duration-300 overflow-hidden group"
// //               >
// //                 {/* Card Header */}
// //                 <div className="p-8 border-b border-gray-100">
// //                   <div className="flex items-start space-x-4">
// //                     <div className="relative flex-shrink-0">
// //                       <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
// //                         <span className="text-white text-2xl font-bold">
// //                           {therapist.name.charAt(0).toUpperCase()}
// //                         </span>
// //                       </div>
// //                       <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
// //                         <Verified className="w-3 h-3 text-white" />
// //                       </div>
// //                     </div>
                    
// //                     <div className="flex-1 min-w-0">
// //                       <h3 className="text-xl font-bold text-gray-900 mb-2">
// //                         <Link 
// //                           to={`/therapist/${therapist.id}`}
// //                           className="hover:text-violet-600 transition-colors"
// //                         >
// //                           {formatTherapistName(therapist.name)}
// //                         </Link>
// //                       </h3>
                      
// //                       <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800 rounded-full text-sm font-semibold mb-3">
// //                         <Award className="w-4 h-4 mr-2" />
// //                         {formatTitle(therapist.specialization)}
// //                       </div>
                      
// //                       <div className="flex items-center bg-yellow-50 px-3 py-2 rounded-lg">
// //                         <Star className="h-4 w-4 text-yellow-500 fill-current mr-2" />
// //                         <span className="text-sm font-bold text-yellow-700">{therapist.rating}/5.0</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Card Body */}
// //                 <div className="p-8 space-y-6">
// //                   {/* Details Grid */}
// //                   <div className="grid grid-cols-2 gap-4 text-sm">
// //                     <div className="flex items-center text-gray-600">
// //                       <MapPin className="w-4 h-4 mr-3 text-violet-500 flex-shrink-0" />
// //                       <span className="truncate">{therapist.location}</span>
// //                     </div>
// //                     <div className="flex items-center text-gray-600">
// //                       <Timer className="w-4 h-4 mr-3 text-emerald-500 flex-shrink-0" />
// //                       <span className="truncate">{therapist.experience}</span>
// //                     </div>
// //                     <div className="flex items-center text-gray-600">
// //                       <Clock className="w-4 h-4 mr-3 text-indigo-500 flex-shrink-0" />
// //                       <span className="truncate">{therapist.availability_hours}</span>
// //                     </div>
// //                     <div className="flex items-center text-gray-600">
// //                       <Globe className="w-4 h-4 mr-3 text-orange-500 flex-shrink-0" />
// //                       <span className="truncate">{therapist.languages}</span>
// //                     </div>
// //                   </div>

// //                   {/* Availability Badge */}
// //                   <div>
// //                     {therapist.availability_mode === 'online' && (
// //                       <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-sm font-semibold border border-emerald-200">
// //                         <Video className="w-4 h-4 mr-2" />
// //                         Online Available
// //                       </div>
// //                     )}
// //                     {therapist.availability_mode === 'offline' && (
// //                       <div className="inline-flex items-center px-4 py-2 bg-violet-50 text-violet-700 rounded-xl text-sm font-semibold border border-violet-200">
// //                         <MapPin className="w-4 h-4 mr-2" />
// //                         In-Person Only
// //                       </div>
// //                     )}
// //                     {(therapist.availability_mode === 'both' || !therapist.availability_mode) && (
// //                       <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 rounded-xl text-sm font-semibold border border-violet-200">
// //                         <CheckCircle className="w-4 h-4 mr-2" />
// //                         Both Available
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>

// //                 {/* Card Actions */}
// //                 <div className="px-8 pb-8 flex space-x-3">
// //                   <Link
// //                     to={`/therapist/${therapist.id}`}
// //                     className="flex-1 px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl text-center font-semibold transition-colors"
// //                   >
// //                     View Profile
// //                   </Link>
// //                   <Link
// //                     to={`/book-appointment/${therapist.id}`}
// //                     className="flex-1 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-xl text-center font-semibold transition-all duration-200 inline-flex items-center justify-center"
// //                   >
// //                     <Calendar className="w-4 h-4 mr-2" />
// //                     Book Now
// //                   </Link>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         ) : (
// //           /* Empty State */
// //           <div className="text-center py-20">
// //             <div className="w-20 h-20 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl mx-auto mb-6 flex items-center justify-center">
// //               <Users className="w-10 h-10 text-violet-400" />
// //             </div>
// //             <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //               {hasActiveFilters ? 'No therapists match your criteria' : 'No therapists available'}
// //             </h3>
// //             <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
// //               {hasActiveFilters 
// //                 ? 'Try adjusting your search terms or filters to find more options.'
// //                 : 'We\'re working to connect you with qualified professionals. Please check back soon.'
// //               }
// //             </p>
// //             {hasActiveFilters && (
// //               <button
// //                 onClick={clearFilters}
// //                 className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-200"
// //               >
// //                 <X className="w-5 h-5 mr-2" />
// //                 Clear All Filters
// //               </button>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // // export default TherapistList;
// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { therapistService } from '../services/therapistService';
// // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // import {
// //   Star,
// //   MapPin,
// //   Clock,
// //   Globe,
// //   Users,
// //   Filter,
// //   Search,
// //   Award,
// //   Calendar,
// //   Video,
// //   UserCheck,
// //   ChevronDown,
// //   X,
// //   Heart,
// //   Shield,
// //   CheckCircle,
// //   Verified,
// //   BadgeCheck,
// //   Timer,
// //   ArrowRight,
// //   ThumbsUp,
// //   GraduationCap
// // } from 'lucide-react';

// // // Helper functions
// // const formatTitle = (str) => {
// //   return str
// //     .split(' ')
// //     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// //     .join(' ');
// // };

// // const formatTherapistName = (name) => {
// //   if (!name) return '';
// //   return name.toLowerCase().startsWith('dr.') ? name.toUpperCase() : name.toUpperCase();
// // };

// // // Therapist Card Component - Exact match to your image
// // const TherapistCard = ({ therapist }) => (
// //   <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
// //     {/* Recommend Badge - Top Right */}
// //     <div className="absolute top-4 right-4 z-10">
// //       <div className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-semibold">
// //         <ThumbsUp className="w-4 h-4" />
// //         Recommend
// //       </div>
// //     </div>

// //     <div className="p-6">
// //       {/* Doctor Photo and Brand Badge */}
// //       <div className="flex justify-center mb-4">
// //         <div className="relative">
// //           <img 
// //             src={therapist.photoUrl || `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000) + 1500000000000}-${Math.floor(Math.random() * 1000) + 500000000000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80&crop=face`}
// //             alt={therapist.name}
// //             className="w-20 h-20 rounded-full object-cover border-4 border-pink-100"
// //             onError={(e) => {
// //               e.target.src = 'https://via.placeholder.com/80x80/EC4899/white?text=Dr';
// //             }}
// //           />
// //           {/* Brand Badge - Top Left */}
// //           <div className="absolute -top-1 -left-1 w-6 h-6 bg-pink-200 rounded-full flex items-center justify-center">
// //             <span className="text-xs text-pink-600 font-bold">EA</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Doctor Information */}
// //       <div className="text-left mb-4">
// //         <h3 className="text-teal-600 text-base font-bold uppercase mb-1">
// //           {formatTherapistName(therapist.name)}
// //         </h3>
        
// //         <p className="text-gray-900 font-semibold text-sm mb-2">
// //           {therapist.specialization || 'Counselling Psychologist'}
// //         </p>
        
// //         {/* Experience */}
// //         <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
// //           <Clock className="w-4 h-4" />
// //           <span>{therapist.experience} Yrs</span>
// //         </div>
        
// //         {/* Education */}
// //         <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
// //           <GraduationCap className="w-4 h-4" />
// //           <span>{therapist.education || 'B.Com,MA,PG Diploma'}</span>
// //         </div>
        
// //         {/* Rating */}
// //         <div className="flex items-center gap-2 mb-3">
// //           <span className="text-base font-bold text-gray-900">{therapist.rating}</span>
// //           <div className="flex items-center gap-1">
// //             {[1,2,3,4,5].map((star) => (
// //               <Star 
// //                 key={star}
// //                 className={`w-4 h-4 ${star <= Math.floor(therapist.rating) ? 'text-pink-500 fill-current' : 'text-gray-300'}`}
// //               />
// //             ))}
// //           </div>
// //           <span className="text-sm text-gray-600">({therapist.reviews || '54'} Ratings)</span>
// //         </div>
        
// //         {/* See Availability */}
// //         <button className="text-blue-600 text-sm font-medium underline hover:text-blue-700">
// //           See Availability
// //         </button>
// //       </div>

// //       {/* Session Info */}
// //       <div className="text-center border-t border-gray-100 pt-4 mb-4">
// //         <div className="text-gray-900 font-semibold text-base mb-1">Online</div>
// //         <p className="text-gray-500 text-sm mb-2">Session beginning at</p>
// //         <div className="text-teal-600 text-xl font-bold mb-4">₹{therapist.fee || '800'}</div>
// //       </div>
      
// //       {/* Action Buttons */}
// //       <div className="space-y-3">
// //         <Link
// //           to={`/book-appointment/${therapist.id}`}
// //           className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full text-center transition-colors text-sm"
// //         >
// //           Book a Session
// //         </Link>
        
// //         <Link
// //           to={`/therapist/${therapist.id}`}
// //           className="block w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-full text-center transition-colors text-sm"
// //         >
// //           View Profile
// //         </Link>
// //       </div>
// //     </div>
// //   </div>
// // );

// // const TherapistList = () => {
// //   const [therapists, setTherapists] = useState([]);
// //   const [filteredTherapists, setFilteredTherapists] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [filter, setFilter] = useState('all');
// //   const [specializationFilter, setSpecializationFilter] = useState('all');
// //   const [showFilters, setShowFilters] = useState(false);

// //   useEffect(() => {
// //     fetchTherapists();
// //   }, []);

// //   useEffect(() => {
// //     applyFilters();
// //   }, [therapists, searchTerm, filter, specializationFilter]);

// //   const fetchTherapists = async () => {
// //     try {
// //       const data = await therapistService.getAllTherapists();
// //       setTherapists(data);
// //     } catch (err) {
// //       setError('Failed to load therapists. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const applyFilters = () => {
// //     let filtered = [...therapists];
    
// //     if (searchTerm) {
// //       filtered = filtered.filter(therapist =>
// //         [therapist.name, therapist.specialization, therapist.location].some(field =>
// //           field.toLowerCase().includes(searchTerm.toLowerCase())
// //         )
// //       );
// //     }
    
// //     if (filter !== 'all') {
// //       filtered = filtered.filter(therapist =>
// //         therapist.availability_mode === filter || therapist.availability_mode === 'both'
// //       );
// //     }
    
// //     if (specializationFilter !== 'all') {
// //       filtered = filtered.filter(therapist =>
// //         therapist.specialization.toLowerCase().includes(specializationFilter.toLowerCase())
// //       );
// //     }
    
// //     setFilteredTherapists(filtered);
// //   };

// //   const getSpecializations = () => {
// //     const specializations = [...new Set(therapists.map(t => t.specialization))];
// //     return specializations.sort();
// //   };

// //   const clearFilters = () => {
// //     setSearchTerm('');
// //     setFilter('all');
// //     setSpecializationFilter('all');
// //     setShowFilters(false);
// //   };

// //   const hasActiveFilters = searchTerm || filter !== 'all' || specializationFilter !== 'all';

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 flex items-center justify-center">
// //         <div className="text-center space-y-6">
// //           <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
// //             <Heart className="w-10 h-10 text-white animate-pulse" />
// //           </div>
// //           <LoadingSpinner size="lg" />
// //           <div className="space-y-2">
// //             <h3 className="text-xl font-semibold text-gray-800">Finding Mental Health Professionals</h3>
// //             <p className="text-gray-500">Loading qualified therapists for you...</p>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 p-4 flex items-center justify-center">
// //         <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
// //           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //             <X className="w-8 h-8 text-red-600" />
// //           </div>
// //           <h3 className="text-xl font-bold text-red-800 mb-2">Unable to Load Therapists</h3>
// //           <p className="text-red-600 mb-6">{error}</p>
// //           <button
// //             onClick={fetchTherapists}
// //             className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-200"
// //           >
// //             Try Again
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
// //       {/* Hero Section */}
// //       <section className="relative bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800">
// //         <div className="absolute inset-0 bg-black/10"></div>
        
// //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
// //           <div className="text-center max-w-4xl mx-auto">
// //             <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl mb-8">
// //               <UserCheck className="w-10 h-10 text-white" />
// //             </div>
            
// //             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
// //               Find Your Perfect <span className="text-yellow-300">Therapist</span>
// //             </h1>
            
// //             <p className="text-xl text-violet-100 mb-10 leading-relaxed max-w-2xl mx-auto">
// //               Connect with licensed, verified mental health professionals who understand your unique journey
// //             </p>
            
// //             <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
// //               <div className="flex items-center space-x-3 bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
// //                 <BadgeCheck className="w-5 h-5 text-emerald-300" />
// //                 <span className="font-medium">Licensed & Verified</span>
// //               </div>
// //               <div className="flex items-center space-x-3 bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
// //                 <Heart className="w-5 h-5 text-pink-300" />
// //                 <span className="font-medium">Compassionate Care</span>
// //               </div>
// //               <div className="flex items-center space-x-3 bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
// //                 <CheckCircle className="w-5 h-5 text-yellow-300" />
// //                 <span className="font-medium">Personalized Match</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Main Content */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
// //         {/* Search & Filters Bar */}
// //         <div className="bg-white rounded-3xl shadow-lg border border-gray-100 mb-12 -mt-12 relative z-10">
// //           <div className="p-8">
// //             <div className="flex flex-col lg:flex-row gap-6">
// //               {/* Search Input */}
// //               <div className="flex-1 relative">
// //                 <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
// //                   <Search className="h-6 w-6 text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="text"
// //                   placeholder="Search by name, specialty, or location..."
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                   className="block w-full pl-14 pr-6 py-5 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors shadow-sm"
// //                 />
// //               </div>
              
// //               {/* Filter Dropdowns */}
// //               <div className="flex gap-4">
// //                 <select
// //                   value={filter}
// //                   onChange={(e) => setFilter(e.target.value)}
// //                   className="px-6 py-5 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white min-w-[200px] shadow-sm font-medium"
// //                 >
// //                   <option value="all">All Session Types</option>
// //                   <option value="online">Online Only</option>
// //                   <option value="offline">In-Person Only</option>
// //                 </select>
                
// //                 <select
// //                   value={specializationFilter}
// //                   onChange={(e) => setSpecializationFilter(e.target.value)}
// //                   className="px-6 py-5 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white min-w-[220px] shadow-sm font-medium"
// //                 >
// //                   <option value="all">All Specializations</option>
// //                   {getSpecializations().map((spec) => (
// //                     <option key={spec} value={spec}>{formatTitle(spec)}</option>
// //                   ))}
// //                 </select>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Results Header */}
// //         <div className="mb-10">
// //           <h2 className="text-3xl font-bold text-gray-900 mb-3">
// //             {filteredTherapists.length} therapist{filteredTherapists.length !== 1 ? 's' : ''} available
// //           </h2>
// //           <p className="text-lg text-gray-600">All licensed and verified professionals ready to help</p>
// //         </div>

// //         {/* Therapist Cards Grid - 3x3 Layout */}
// //         {filteredTherapists.length > 0 ? (
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
// //             {filteredTherapists.map((therapist) => (
// //               <TherapistCard key={therapist.id} therapist={therapist} />
// //             ))}
// //           </div>
// //         ) : (
// //           /* Empty State */
// //           <div className="text-center py-20">
// //             <div className="w-20 h-20 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl mx-auto mb-6 flex items-center justify-center">
// //               <Users className="w-10 h-10 text-violet-400" />
// //             </div>
// //             <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //               {hasActiveFilters ? 'No therapists match your criteria' : 'No therapists available'}
// //             </h3>
// //             <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
// //               {hasActiveFilters 
// //                 ? 'Try adjusting your search terms or filters to find more options.'
// //                 : 'We\'re working to connect you with qualified professionals. Please check back soon.'
// //               }
// //             </p>
// //             {hasActiveFilters && (
// //               <button
// //                 onClick={clearFilters}
// //                 className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-violet-700 hover:to-purple-700 transition-all duration-200 shadow-sm"
// //               >
// //                 <X className="w-5 h-5 mr-2" />
// //                 Clear All Filters
// //               </button>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TherapistList;
// import React, { useState, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import { therapistService } from '../services/therapistService';
// import LoadingSpinner from '../components/ui/LoadingSpinner';
// import {
//   Star,
//   MapPin,
//   Clock,
//   Globe,
//   Users,
//   Filter,
//   Search,
//   Award,
//   Calendar,
//   Video,
//   UserCheck,
//   ChevronDown,
//   X,
//   Heart,
//   Shield,
//   CheckCircle,
//   Verified,
//   BadgeCheck,
//   Timer,
//   ArrowRight,
//   ThumbsUp,
//   GraduationCap,
//   User
// } from 'lucide-react';

// // Professional AvailabilityModal Component
// const AvailabilityModal = ({ therapist, isOpen, onClose }) => {
//   const DAYS_OF_WEEK = [
//     { key: 'monday', label: 'Monday', short: 'MON' },
//     { key: 'tuesday', label: 'Tuesday', short: 'TUE' },
//     { key: 'wednesday', label: 'Wednesday', short: 'WED' },
//     { key: 'thursday', label: 'Thursday', short: 'THU' },
//     { key: 'friday', label: 'Friday', short: 'FRI' },
//     { key: 'saturday', label: 'Saturday', short: 'SAT' },
//     { key: 'sunday', label: 'Sunday', short: 'SUN' }
//   ];

//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
    
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   // Handle keyboard interactions
//   const handleKeyDown = useCallback((event) => {
//     if (event.key === 'Escape') {
//       onClose();
//     }
//   }, [onClose]);

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener('keydown', handleKeyDown);
//       return () => document.removeEventListener('keydown', handleKeyDown);
//     }
//   }, [isOpen, handleKeyDown]);

//   // Handle overlay click to close modal
//   const handleOverlayClick = (event) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

//   // Format schedule display
//   const getScheduleTime = (day) => {
//     if (!therapist?.schedule) return 'Not Available';
    
//     const time = therapist.schedule[day.key];
//     if (!time || time.toLowerCase().includes('unavailable') || time.toLowerCase().includes('closed')) {
//       return 'Not Available';
//     }
//     return time;
//   };

//   if (!isOpen) return null;

//   return (
//     <div 
//       className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//       onClick={handleOverlayClick}
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="modal-title"
//     >
//       {/* Modal Container - Responsive */}
//       <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl w-full max-w-md mx-4 relative transform transition-all duration-300">
        
//         {/* Header Section */}
//         <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-200 rounded-t-xl md:rounded-t-2xl p-4 md:p-6">
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-3 right-3 md:top-4 md:right-4 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 transition-all duration-200 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
//             aria-label="Close availability schedule"
//           >
//             <X className="w-5 h-5" />
//           </button>

//           {/* Therapist Header */}
//           <div className="flex items-center space-x-3 md:space-x-4 pr-10">
//             {/* Avatar */}
//             <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
//               <User className="w-5 h-5 md:w-6 md:h-6 text-white" />
//             </div>
            
//             {/* Info */}
//             <div className="flex-1 min-w-0">
//               <h2 
//                 id="modal-title"
//                 className="text-lg md:text-xl font-bold text-slate-900 mb-1 truncate"
//               >
//                 {therapist?.name || 'Therapist'}
//               </h2>
//               <div className="flex items-center text-slate-600 text-sm">
//                 <Calendar className="w-4 h-4 mr-2" />
//                 <span>Weekly Availability</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Schedule Content */}
//         <div className="p-4 md:p-6 max-h-96 overflow-y-auto">
//           <div className="space-y-2">
//             {DAYS_OF_WEEK.map((day, index) => {
//               const scheduleTime = getScheduleTime(day);
//               const isUnavailable = scheduleTime === 'Not Available';
//               const isToday = new Date().getDay() === (index + 1) % 7;
              
//               return (
//                 <div 
//                   key={day.key}
//                   className={`group flex items-center justify-between p-3 md:p-4 rounded-lg border transition-all duration-200 hover:shadow-sm ${
//                     isToday 
//                       ? 'bg-teal-50 border-teal-200' 
//                       : 'bg-slate-50/50 border-slate-200 hover:bg-slate-50'
//                   }`}
//                 >
//                   <div className="flex items-center space-x-3 md:space-x-4">
//                     {/* Day Badge */}
//                     <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center font-bold text-xs ${
//                       isToday 
//                         ? 'bg-teal-500 text-white' 
//                         : day.key === 'sunday' 
//                           ? 'bg-pink-100 text-pink-600' 
//                           : 'bg-white text-slate-600 border border-slate-200'
//                     }`}>
//                       {day.short}
//                     </div>
                    
//                     {/* Day Name */}
//                     <div>
//                       <div className="font-medium text-slate-900 text-sm md:text-base">
//                         {day.label}
//                         {isToday && (
//                           <span className="ml-2 text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
//                             Today
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Time Display */}
//                   <div className="flex items-center">
//                     <div className={`flex items-center space-x-1 md:space-x-2 px-2 md:px-3 py-1 md:py-2 rounded-lg font-medium text-xs md:text-sm ${
//                       isUnavailable 
//                         ? 'bg-red-50 text-red-600' 
//                         : 'bg-green-50 text-green-700'
//                     }`}>
//                       <Clock className="w-3 h-3 md:w-4 md:h-4" />
//                       <span className="truncate max-w-24 md:max-w-none">{scheduleTime}</span>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="bg-slate-50/50 border-t border-slate-200 rounded-b-xl md:rounded-b-2xl p-4 md:p-6">
//           <div className="space-y-4">
//             {/* Additional Info */}
//             <div className="grid grid-cols-1 gap-2 md:gap-3">
//               <div className="flex items-center justify-center text-slate-600 text-sm">
//                 <MapPin className="w-4 h-4 mr-2" />
//                 <span>{therapist?.location || 'Location not specified'}</span>
//               </div>
              
//               <div className="flex items-center justify-center text-slate-500 text-xs">
//                 <Clock className="w-3 h-3 mr-2" />
//                 <span>All times are in your local timezone</span>
//               </div>
//             </div>
            
//             {/* Action Buttons */}
//             <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
//               <button
//                 onClick={onClose}
//                 className="flex-1 px-4 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300"
//               >
//                 Close
//               </button>
//               <Link
//                 to={`/book-appointment/${therapist?.id}`}
//                 onClick={onClose}
//                 className="flex-1 px-4 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm text-center"
//               >
//                 Book Appointment
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Helper functions
// const formatTitle = (str) => {
//   return str
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// };

// const formatTherapistName = (name) => {
//   if (!name) return '';
//   return name.toLowerCase().startsWith('dr.') ? name.toUpperCase() : name.toUpperCase();
// };

// // Updated TherapistCard Component with Modal functionality
// const TherapistCard = ({ therapist }) => {
//   const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);

//   return (
//     <>
//       <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
//         {/* Recommend Badge - Top Right */}
//         <div className="absolute top-4 right-4 z-10">
//           <div className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-semibold">
//             <ThumbsUp className="w-4 h-4" />
//             Recommend
//           </div>
//         </div>

//         <div className="p-6">
//           {/* Doctor Photo and Brand Badge */}
//           <div className="flex justify-center mb-4">
//             <div className="relative">
//               <img 
//                 src={therapist.photoUrl || `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000) + 1500000000000}-${Math.floor(Math.random() * 1000) + 500000000000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80&crop=face`}
//                 alt={therapist.name}
//                 className="w-20 h-20 rounded-full object-cover border-4 border-pink-100"
//                 onError={(e) => {
//                   e.target.src = 'https://via.placeholder.com/80x80/EC4899/white?text=Dr';
//                 }}
//               />
//               {/* Brand Badge - Top Left */}
//               <div className="absolute -top-1 -left-1 w-6 h-6 bg-pink-200 rounded-full flex items-center justify-center">
//                 <span className="text-xs text-pink-600 font-bold">EA</span>
//               </div>
//             </div>
//           </div>

//           {/* Doctor Information */}
//           <div className="text-left mb-4">
//             <h3 className="text-teal-600 text-base font-bold uppercase mb-1">
//               {formatTherapistName(therapist.name)}
//             </h3>
            
//             <p className="text-gray-900 font-semibold text-sm mb-2">
//               {therapist.specialization || 'Counselling Psychologist'}
//             </p>
            
//             {/* Experience */}
//             <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
//               <Clock className="w-4 h-4" />
//               <span>{therapist.experience}</span>
//             </div>
            
//             {/* Education */}
//             <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
//               <GraduationCap className="w-4 h-4" />
//               <span>{therapist.education || 'B.Com,MA,PG Diploma'}</span>
//             </div>
            
//             {/* Rating */}
//             <div className="flex items-center gap-2 mb-3">
//               <span className="text-base font-bold text-gray-900">{therapist.rating}</span>
//               <div className="flex items-center gap-1">
//                 {[1,2,3,4,5].map((star) => (
//                   <Star 
//                     key={star}
//                     className={`w-4 h-4 ${star <= Math.floor(therapist.rating) ? 'text-pink-500 fill-current' : 'text-gray-300'}`}
//                   />
//                 ))}
//               </div>
//               <span className="text-sm text-gray-600">({therapist.reviews || '54'} Ratings)</span>
//             </div>
            
//             {/* See Availability - NOW FUNCTIONAL */}
//             <button 
//               className="text-blue-600 text-sm font-medium underline hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded"
//               onClick={() => setShowAvailabilityModal(true)}
//             >
//               See Availability
//             </button>
//           </div>

//           {/* Session Info */}
//           <div className="text-center border-t border-gray-100 pt-4 mb-4">
//             <div className="text-gray-900 font-semibold text-base mb-1">
//               {therapist.availability_mode === 'online' ? 'Online' : 
//                therapist.availability_mode === 'offline' ? 'In-Person' : 
//                therapist.availability_mode === 'both' ? 'Online & In-Person' : 'Online'}
//             </div>
//             <p className="text-gray-500 text-sm mb-2">Session beginning at</p>
//             <div className="text-teal-600 text-xl font-bold mb-4">₹{therapist.fee || '800'}</div>
//           </div>
          
//           {/* Action Buttons */}
//           <div className="space-y-3">
//             <Link
//               to={`/book-appointment/${therapist.id}`}
//               className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full text-center transition-colors text-sm"
//             >
//               Book a Session
//             </Link>
            
//             <Link
//               to={`/therapist/${therapist.id}`}
//               className="block w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-full text-center transition-colors text-sm"
//             >
//               View Profile
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Availability Modal */}
//       <AvailabilityModal 
//         therapist={therapist}
//         isOpen={showAvailabilityModal}
//         onClose={() => setShowAvailabilityModal(false)}
//       />
//     </>
//   );
// };

// // Main TherapistList Component (keeping your existing structure)
// const TherapistList = () => {
//   const [therapists, setTherapists] = useState([]);
//   const [filteredTherapists, setFilteredTherapists] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState('all');
//   const [specializationFilter, setSpecializationFilter] = useState('all');
//   const [showFilters, setShowFilters] = useState(false);

//   useEffect(() => {
//     fetchTherapists();
//   }, []);

//   useEffect(() => {
//     applyFilters();
//   }, [therapists, searchTerm, filter, specializationFilter]);

//   const fetchTherapists = async () => {
//     try {
//       const data = await therapistService.getAllTherapists();
//       setTherapists(data);
//     } catch (err) {
//       setError('Failed to load therapists. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const applyFilters = () => {
//     let filtered = [...therapists];
    
//     if (searchTerm) {
//       filtered = filtered.filter(therapist =>
//         [therapist.name, therapist.specialization, therapist.location].some(field =>
//           field && field.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       );
//     }
    
//     if (filter !== 'all') {
//       filtered = filtered.filter(therapist =>
//         therapist.availability_mode === filter || therapist.availability_mode === 'both'
//       );
//     }
    
//     if (specializationFilter !== 'all') {
//       filtered = filtered.filter(therapist =>
//         therapist.specialization && therapist.specialization.toLowerCase().includes(specializationFilter.toLowerCase())
//       );
//     }
    
//     setFilteredTherapists(filtered);
//   };

//   const getSpecializations = () => {
//     const specializations = [...new Set(therapists.map(t => t.specialization).filter(Boolean))];
//     return specializations.sort();
//   };

//   const clearFilters = () => {
//     setSearchTerm('');
//     setFilter('all');
//     setSpecializationFilter('all');
//     setShowFilters(false);
//   };

//   const hasActiveFilters = searchTerm || filter !== 'all' || specializationFilter !== 'all';

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 flex items-center justify-center">
//         <div className="text-center space-y-6">
//           <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
//             <Heart className="w-10 h-10 text-white animate-pulse" />
//           </div>
//           <LoadingSpinner size="lg" />
//           <div className="space-y-2">
//             <h3 className="text-xl font-semibold text-gray-800">Finding Mental Health Professionals</h3>
//             <p className="text-gray-500">Loading qualified therapists for you...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 p-4 flex items-center justify-center">
//         <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <X className="w-8 h-8 text-red-600" />
//           </div>
//           <h3 className="text-xl font-bold text-red-800 mb-2">Unable to Load Therapists</h3>
//           <p className="text-red-600 mb-6">{error}</p>
//           <button
//             onClick={fetchTherapists}
//             className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-200"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800">
//         <div className="absolute inset-0 bg-black/10"></div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
//           <div className="text-center max-w-4xl mx-auto">
//             <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl mb-6 md:mb-8">
//               <UserCheck className="w-8 h-8 md:w-10 md:h-10 text-white" />
//             </div>
            
//             <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
//               Find Your Perfect <span className="text-yellow-300">Therapist</span>
//             </h1>
            
//             <p className="text-base md:text-lg lg:text-xl text-violet-100 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
//               Connect with licensed, verified mental health professionals who understand your unique journey
//             </p>
            
//             <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white/90 px-4">
//               <div className="flex items-center space-x-2 md:space-x-3 bg-white/10 rounded-full px-4 md:px-6 py-2 md:py-3 backdrop-blur-sm">
//                 <BadgeCheck className="w-4 h-4 md:w-5 md:h-5 text-emerald-300" />
//                 <span className="font-medium text-sm md:text-base">Licensed & Verified</span>
//               </div>
//               <div className="flex items-center space-x-2 md:space-x-3 bg-white/10 rounded-full px-4 md:px-6 py-2 md:py-3 backdrop-blur-sm">
//                 <Heart className="w-4 h-4 md:w-5 md:h-5 text-pink-300" />
//                 <span className="font-medium text-sm md:text-base">Compassionate Care</span>
//               </div>
//               <div className="flex items-center space-x-2 md:space-x-3 bg-white/10 rounded-full px-4 md:px-6 py-2 md:py-3 backdrop-blur-sm">
//                 <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" />
//                 <span className="font-medium text-sm md:text-base">Personalized Match</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
//         {/* Search & Filters Bar */}
//         <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 mb-8 md:mb-12 -mt-8 md:-mt-12 relative z-10">
//           <div className="p-4 md:p-6 lg:p-8">
//             <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
//               {/* Search Input */}
//               <div className="flex-1 relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 md:pl-5 flex items-center pointer-events-none">
//                   <Search className="h-5 w-5 md:h-6 md:w-6 text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search by name, specialty, or location..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="block w-full pl-12 md:pl-14 pr-4 md:pr-6 py-4 md:py-5 text-base md:text-lg border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors shadow-sm"
//                 />
//               </div>
              
//               {/* Mobile Filter Toggle */}
//               <button
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="lg:hidden flex items-center justify-center px-4 py-4 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 font-medium"
//               >
//                 <Filter className="w-5 h-5 mr-2" />
//                 Filters
//                 {hasActiveFilters && (
//                   <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-full">
//                     {[searchTerm, filter !== 'all', specializationFilter !== 'all'].filter(Boolean).length}
//                   </span>
//                 )}
//               </button>
              
//               {/* Desktop Filter Dropdowns */}
//               <div className="hidden lg:flex gap-4">
//                 <select
//                   value={filter}
//                   onChange={(e) => setFilter(e.target.value)}
//                   className="px-4 md:px-6 py-4 md:py-5 text-base md:text-lg border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white min-w-[180px] md:min-w-[200px] shadow-sm font-medium"
//                 >
//                   <option value="all">All Session Types</option>
//                   <option value="online">Online Only</option>
//                   <option value="offline">In-Person Only</option>
//                 </select>
                
//                 <select
//                   value={specializationFilter}
//                   onChange={(e) => setSpecializationFilter(e.target.value)}
//                   className="px-4 md:px-6 py-4 md:py-5 text-base md:text-lg border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white min-w-[200px] md:min-w-[220px] shadow-sm font-medium"
//                 >
//                   <option value="all">All Specializations</option>
//                   {getSpecializations().map((spec) => (
//                     <option key={spec} value={spec}>{formatTitle(spec)}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
            
//             {/* Mobile Filters */}
//             {showFilters && (
//               <div className="lg:hidden mt-4 space-y-4 border-t border-gray-200 pt-4">
//                 <select
//                   value={filter}
//                   onChange={(e) => setFilter(e.target.value)}
//                   className="w-full px-4 py-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white shadow-sm font-medium"
//                 >
//                   <option value="all">All Session Types</option>
//                   <option value="online">Online Only</option>
//                   <option value="offline">In-Person Only</option>
//                 </select>
                
//                 <select
//                   value={specializationFilter}
//                   onChange={(e) => setSpecializationFilter(e.target.value)}
//                   className="w-full px-4 py-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white shadow-sm font-medium"
//                 >
//                   <option value="all">All Specializations</option>
//                   {getSpecializations().map((spec) => (
//                     <option key={spec} value={spec}>{formatTitle(spec)}</option>
//                   ))}
//                 </select>
                
//                 {hasActiveFilters && (
//                   <button
//                     onClick={clearFilters}
//                     className="w-full px-4 py-3 bg-red-500 text-white font-medium rounded-xl hover:bg-red-600 transition-colors"
//                   >
//                     Clear All Filters
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Results Header */}
//         <div className="mb-6 md:mb-10 px-2">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
//             {filteredTherapists.length} therapist{filteredTherapists.length !== 1 ? 's' : ''} available
//           </h2>
//           <p className="text-base md:text-lg text-gray-600">All licensed and verified professionals ready to help</p>
//         </div>

//         {/* Therapist Cards Grid */}
//         {filteredTherapists.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
//             {filteredTherapists.map((therapist) => (
//               <TherapistCard key={therapist.id} therapist={therapist} />
//             ))}
//           </div>
//         ) : (
//           /* Empty State */
//           <div className="text-center py-16 md:py-20 px-4">
//             <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl md:rounded-3xl mx-auto mb-4 md:mb-6 flex items-center justify-center">
//               <Users className="w-8 h-8 md:w-10 md:h-10 text-violet-400" />
//             </div>
//             <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
//               {hasActiveFilters ? 'No therapists match your criteria' : 'No therapists available'}
//             </h3>
//             <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-md mx-auto">
//               {hasActiveFilters 
//                 ? 'Try adjusting your search terms or filters to find more options.'
//                 : 'We\'re working to connect you with qualified professionals. Please check back soon.'
//               }
//             </p>
//             {hasActiveFilters && (
//               <button
//                 onClick={clearFilters}
//                 className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl md:rounded-2xl hover:from-violet-700 hover:to-purple-700 transition-all duration-200 shadow-sm text-sm md:text-base"
//               >
//                 <X className="w-4 h-4 md:w-5 md:h-5 mr-2" />
//                 Clear All Filters
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default TherapistList;
// import React, { useState, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import { therapistService } from '../services/therapistService';
// import LoadingSpinner from '../components/ui/LoadingSpinner';
// import {
//   Star,
//   MapPin,
//   Clock,
//   Globe,
//   Users,
//   Filter,
//   Search,
//   Award,
//   Calendar,
//   Video,
//   UserCheck,
//   ChevronDown,
//   X,
//   Heart,
//   Shield,
//   CheckCircle,
//   Verified,
//   BadgeCheck,
//   Timer,
//   ArrowRight,
//   ThumbsUp,
//   GraduationCap,
//   User
// } from 'lucide-react';

// // Professional AvailabilityModal Component
// const AvailabilityModal = ({ therapist, isOpen, onClose }) => {
//   const DAYS_OF_WEEK = [
//     { key: 'monday', label: 'Monday', short: 'MON' },
//     { key: 'tuesday', label: 'Tuesday', short: 'TUE' },
//     { key: 'wednesday', label: 'Wednesday', short: 'WED' },
//     { key: 'thursday', label: 'Thursday', short: 'THU' },
//     { key: 'friday', label: 'Friday', short: 'FRI' },
//     { key: 'saturday', label: 'Saturday', short: 'SAT' },
//     { key: 'sunday', label: 'Sunday', short: 'SUN' }
//   ];

//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
    
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   // Handle keyboard interactions
//   const handleKeyDown = useCallback((event) => {
//     if (event.key === 'Escape') {
//       onClose();
//     }
//   }, [onClose]);

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener('keydown', handleKeyDown);
//       return () => document.removeEventListener('keydown', handleKeyDown);
//     }
//   }, [isOpen, handleKeyDown]);

//   // Handle overlay click to close modal
//   const handleOverlayClick = (event) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

//   // Format schedule display
//   const getScheduleTime = (day) => {
//     if (!therapist?.schedule) return 'Not Available';
    
//     const time = therapist.schedule[day.key];
//     if (!time || time.toLowerCase().includes('unavailable') || time.toLowerCase().includes('closed')) {
//       return 'Not Available';
//     }
//     return time;
//   };

//   if (!isOpen) return null;

//   return (
//     <div 
//       className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//       onClick={handleOverlayClick}
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="modal-title"
//     >
//       {/* Modal Container - Responsive */}
//       <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl w-full max-w-md mx-4 relative transform transition-all duration-300">
        
//         {/* Header Section */}
//         <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-200 rounded-t-xl md:rounded-t-2xl p-4 md:p-6">
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-3 right-3 md:top-4 md:right-4 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 transition-all duration-200 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
//             aria-label="Close availability schedule"
//           >
//             <X className="w-5 h-5" />
//           </button>

//           {/* Therapist Header */}
//           <div className="flex items-center space-x-3 md:space-x-4 pr-10">
//             {/* Avatar */}
//             <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
//               <User className="w-5 h-5 md:w-6 md:h-6 text-white" />
//             </div>
            
//             {/* Info */}
//             <div className="flex-1 min-w-0">
//               <h2 
//                 id="modal-title"
//                 className="text-lg md:text-xl font-bold text-slate-900 mb-1 truncate"
//               >
//                 {therapist?.name || 'Therapist'}
//               </h2>
//               <div className="flex items-center text-slate-600 text-sm">
//                 <Calendar className="w-4 h-4 mr-2" />
//                 <span>Weekly Availability</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Schedule Content */}
//         <div className="p-4 md:p-6 max-h-96 overflow-y-auto">
//           <div className="space-y-2">
//             {DAYS_OF_WEEK.map((day, index) => {
//               const scheduleTime = getScheduleTime(day);
//               const isUnavailable = scheduleTime === 'Not Available';
//               const isToday = new Date().getDay() === (index + 1) % 7;
              
//               return (
//                 <div 
//                   key={day.key}
//                   className={`group flex items-center justify-between p-3 md:p-4 rounded-lg border transition-all duration-200 hover:shadow-sm ${
//                     isToday 
//                       ? 'bg-teal-50 border-teal-200' 
//                       : 'bg-slate-50/50 border-slate-200 hover:bg-slate-50'
//                   }`}
//                 >
//                   <div className="flex items-center space-x-3 md:space-x-4">
//                     {/* Day Badge */}
//                     <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center font-bold text-xs ${
//                       isToday 
//                         ? 'bg-teal-500 text-white' 
//                         : day.key === 'sunday' 
//                           ? 'bg-pink-100 text-pink-600' 
//                           : 'bg-white text-slate-600 border border-slate-200'
//                     }`}>
//                       {day.short}
//                     </div>
                    
//                     {/* Day Name */}
//                     <div>
//                       <div className="font-medium text-slate-900 text-sm md:text-base">
//                         {day.label}
//                         {isToday && (
//                           <span className="ml-2 text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
//                             Today
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Time Display */}
//                   <div className="flex items-center">
//                     <div className={`flex items-center space-x-1 md:space-x-2 px-2 md:px-3 py-1 md:py-2 rounded-lg font-medium text-xs md:text-sm ${
//                       isUnavailable 
//                         ? 'bg-red-50 text-red-600' 
//                         : 'bg-green-50 text-green-700'
//                     }`}>
//                       <Clock className="w-3 h-3 md:w-4 md:h-4" />
//                       <span className="truncate max-w-24 md:max-w-none">{scheduleTime}</span>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="bg-slate-50/50 border-t border-slate-200 rounded-b-xl md:rounded-b-2xl p-4 md:p-6">
//           <div className="space-y-4">
//             {/* Additional Info */}
//             <div className="grid grid-cols-1 gap-2 md:gap-3">
//               <div className="flex items-center justify-center text-slate-600 text-sm">
//                 <MapPin className="w-4 h-4 mr-2" />
//                 <span>{therapist?.location || 'Location not specified'}</span>
//               </div>
              
//               <div className="flex items-center justify-center text-slate-500 text-xs">
//                 <Clock className="w-3 h-3 mr-2" />
//                 <span>All times are in your local timezone</span>
//               </div>
//             </div>
            
//             {/* Action Buttons */}
//             <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
//               <button
//                 onClick={onClose}
//                 className="flex-1 px-4 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300"
//               >
//                 Close
//               </button>
//               <Link
//                 to={`/book-appointment/${therapist?.id}`}
//                 onClick={onClose}
//                 className="flex-1 px-4 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm text-center"
//               >
//                 Book Appointment
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Helper functions
// const formatTitle = (str) => {
//   return str
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// };

// const formatTherapistName = (name) => {
//   if (!name) return '';
//   return name.toLowerCase().startsWith('dr.') ? name.toUpperCase() : name.toUpperCase();
// };

// // Updated TherapistCard Component with Modal functionality
// const TherapistCard = ({ therapist }) => {
//   const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);

//   return (
//     <>
//       <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
//         {/* Recommend Badge - Top Right */}
//         <div className="absolute top-4 right-4 z-10">
//           <div className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-semibold">
//             <ThumbsUp className="w-5 h-4" />
//             Recommend
//           </div>
//         </div>

//         <div className="p-6">
//           {/* Doctor Photo and Brand Badge */}
//           <div className="flex justify-center mb-4">
//             <div className="relative">
//               <img 
//                 src={therapist.photoUrl || `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000) + 1500000000000}-${Math.floor(Math.random() * 1000) + 500000000000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80&crop=face`}
//                 alt={therapist.name}
//                 className="w-20 h-20 rounded-full object-cover border-4 border-pink-100"
//                 onError={(e) => {
//                   e.target.src = 'https://via.placeholder.com/80x80/EC4899/white?text=Dr';
//                 }}
//               />
//               {/* Brand Badge - Top Left */}
//               <div className="absolute -top-1 -left-1 w-6 h-6 bg-pink-200 rounded-full flex items-center justify-center">
//                 <span className="text-xs text-pink-600 font-bold">EA</span>
//               </div>
//             </div>
//           </div>

//           {/* Doctor Information */}
//           <div className="text-left mb-4">
//             <h3 className="text-teal-600 text-base font-bold uppercase mb-1">
//               {formatTherapistName(therapist.name)}
//             </h3>
            
//             <p className="text-gray-900 font-semibold text-sm mb-2">
//               {therapist.specialization || 'Counselling Psychologist'}
//             </p>
            
//             {/* Experience */}
//             <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
//               <Clock className="w-4 h-4" />
//               <span>{therapist.experience}</span>
//             </div>
            
//             {/* Education */}
//             <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
//               <GraduationCap className="w-4 h-4" />
//               <span>{therapist.education || 'B.Com,MA,PG Diploma'}</span>
//             </div>
            
//             {/* Rating */}
//             <div className="flex items-center gap-2 mb-3">
//               <span className="text-base font-bold text-gray-900">{therapist.rating}</span>
//               <div className="flex items-center gap-1">
//                 {[1,2,3,4,5].map((star) => (
//                   <Star 
//                     key={star}
//                     className={`w-4 h-4 ${star <= Math.floor(therapist.rating) ? 'text-pink-500 fill-current' : 'text-gray-300'}`}
//                   />
//                 ))}
//               </div>
//               <span className="text-sm text-gray-600">({therapist.reviews || '54'} Ratings)</span>
//             </div>
            
//             {/* See Availability - Professional Button Style */}
//             <div className="mb-4 flex justify-center">
//               <button 
//                 className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 shadow-sm"
//                 onClick={() => setShowAvailabilityModal(true)}
//               >
//                 <Calendar className="w-4 h-4 mr-2" />
//                 See Schedule
//               </button>
//             </div>
//           </div>

//           {/* Session Info */}
//           <div className="text-center border-t border-gray-100 pt-4 mb-4">
//             <div className="text-gray-900 font-semibold text-base mb-1">
//               {therapist.availability_mode === 'online' ? 'Online' : 
//                therapist.availability_mode === 'offline' ? 'In-Person' : 
//                therapist.availability_mode === 'both' ? 'Online & In-Person' : 'Online'}
//             </div>
//             <p className="text-gray-500 text-sm mb-2">Session beginning at</p>
//             <div className="text-teal-600 text-xl font-bold mb-4">₹{therapist.fee || '800'}</div>
//           </div>
          
//           {/* Action Buttons */}
//           <div className="space-y-3">
//             <Link
//               to={`/book-appointment/${therapist.id}`}
//               className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full text-center transition-colors text-sm"
//             >
//               Book a Session
//             </Link>
            
//             <Link
//               to={`/therapist/${therapist.id}`}
//               className="block w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-full text-center transition-colors text-sm"
//             >
//               View Profile
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Availability Modal */}
//       <AvailabilityModal 
//         therapist={therapist}
//         isOpen={showAvailabilityModal}
//         onClose={() => setShowAvailabilityModal(false)}
//       />
//     </>
//   );
// };

// // Main TherapistList Component (keeping your existing structure)
// const TherapistList = () => {
//   const [therapists, setTherapists] = useState([]);
//   const [filteredTherapists, setFilteredTherapists] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState('all');
//   const [specializationFilter, setSpecializationFilter] = useState('all');
//   const [showFilters, setShowFilters] = useState(false);

//   useEffect(() => {
//     fetchTherapists();
//   }, []);

//   useEffect(() => {
//     applyFilters();
//   }, [therapists, searchTerm, filter, specializationFilter]);

//   const fetchTherapists = async () => {
//     try {
//       const data = await therapistService.getAllTherapists();
//       setTherapists(data);
//     } catch (err) {
//       setError('Failed to load therapists. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const applyFilters = () => {
//     let filtered = [...therapists];
    
//     if (searchTerm) {
//       filtered = filtered.filter(therapist =>
//         [therapist.name, therapist.specialization, therapist.location].some(field =>
//           field && field.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       );
//     }
    
//     if (filter !== 'all') {
//       filtered = filtered.filter(therapist =>
//         therapist.availability_mode === filter || therapist.availability_mode === 'both'
//       );
//     }
    
//     if (specializationFilter !== 'all') {
//       filtered = filtered.filter(therapist =>
//         therapist.specialization && therapist.specialization.toLowerCase().includes(specializationFilter.toLowerCase())
//       );
//     }
    
//     setFilteredTherapists(filtered);
//   };

//   const getSpecializations = () => {
//     const specializations = [...new Set(therapists.map(t => t.specialization).filter(Boolean))];
//     return specializations.sort();
//   };

//   const clearFilters = () => {
//     setSearchTerm('');
//     setFilter('all');
//     setSpecializationFilter('all');
//     setShowFilters(false);
//   };

//   const hasActiveFilters = searchTerm || filter !== 'all' || specializationFilter !== 'all';

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 flex items-center justify-center">
//         <div className="text-center space-y-6">
//           <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
//             <Heart className="w-10 h-10 text-white animate-pulse" />
//           </div>
//           <LoadingSpinner size="lg" />
//           <div className="space-y-2">
//             <h3 className="text-xl font-semibold text-gray-800">Finding Mental Health Professionals</h3>
//             <p className="text-gray-500">Loading qualified therapists for you...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 p-4 flex items-center justify-center">
//         <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <X className="w-8 h-8 text-red-600" />
//           </div>
//           <h3 className="text-xl font-bold text-red-800 mb-2">Unable to Load Therapists</h3>
//           <p className="text-red-600 mb-6">{error}</p>
//           <button
//             onClick={fetchTherapists}
//             className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-200"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800">
//         <div className="absolute inset-0 bg-black/10"></div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
//           <div className="text-center max-w-4xl mx-auto">
//             <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl mb-6 md:mb-8">
//               <UserCheck className="w-8 h-8 md:w-10 md:h-10 text-white" />
//             </div>
            
//             <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
//               Find Your Perfect <span className="text-yellow-300">Therapist</span>
//             </h1>
            
//             <p className="text-base md:text-lg lg:text-xl text-violet-100 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
//               Connect with licensed, verified mental health professionals who understand your unique journey
//             </p>
            
//             <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white/90 px-4">
//               <div className="flex items-center space-x-2 md:space-x-3 bg-white/10 rounded-full px-4 md:px-6 py-2 md:py-3 backdrop-blur-sm">
//                 <BadgeCheck className="w-4 h-4 md:w-5 md:h-5 text-emerald-300" />
//                 <span className="font-medium text-sm md:text-base">Licensed & Verified</span>
//               </div>
//               <div className="flex items-center space-x-2 md:space-x-3 bg-white/10 rounded-full px-4 md:px-6 py-2 md:py-3 backdrop-blur-sm">
//                 <Heart className="w-4 h-4 md:w-5 md:h-5 text-pink-300" />
//                 <span className="font-medium text-sm md:text-base">Compassionate Care</span>
//               </div>
//               <div className="flex items-center space-x-2 md:space-x-3 bg-white/10 rounded-full px-4 md:px-6 py-2 md:py-3 backdrop-blur-sm">
//                 <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" />
//                 <span className="font-medium text-sm md:text-base">Personalized Match</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
//         {/* Search & Filters Bar */}
//         <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 mb-8 md:mb-12 -mt-8 md:-mt-12 relative z-10">
//           <div className="p-4 md:p-6 lg:p-8">
//             <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
//               {/* Search Input */}
//               <div className="flex-1 relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 md:pl-5 flex items-center pointer-events-none">
//                   <Search className="h-5 w-5 md:h-6 md:w-6 text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search by name, specialty, or location..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="block w-full pl-12 md:pl-14 pr-4 md:pr-6 py-4 md:py-5 text-base md:text-lg border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors shadow-sm"
//                 />
//               </div>
              
//               {/* Mobile Filter Toggle */}
//               <button
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="lg:hidden flex items-center justify-center px-4 py-4 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 font-medium"
//               >
//                 <Filter className="w-5 h-5 mr-2" />
//                 Filters
//                 {hasActiveFilters && (
//                   <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-full">
//                     {[searchTerm, filter !== 'all', specializationFilter !== 'all'].filter(Boolean).length}
//                   </span>
//                 )}
//               </button>
              
//               {/* Desktop Filter Dropdowns */}
//               <div className="hidden lg:flex gap-4">
//                 <select
//                   value={filter}
//                   onChange={(e) => setFilter(e.target.value)}
//                   className="px-4 md:px-6 py-4 md:py-5 text-base md:text-lg border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white min-w-[180px] md:min-w-[200px] shadow-sm font-medium"
//                 >
//                   <option value="all">All Session Types</option>
//                   <option value="online">Online Only</option>
//                   <option value="offline">In-Person Only</option>
//                 </select>
                
//                 <select
//                   value={specializationFilter}
//                   onChange={(e) => setSpecializationFilter(e.target.value)}
//                   className="px-4 md:px-6 py-4 md:py-5 text-base md:text-lg border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white min-w-[200px] md:min-w-[220px] shadow-sm font-medium"
//                 >
//                   <option value="all">All Specializations</option>
//                   {getSpecializations().map((spec) => (
//                     <option key={spec} value={spec}>{formatTitle(spec)}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
            
//             {/* Mobile Filters */}
//             {showFilters && (
//               <div className="lg:hidden mt-4 space-y-4 border-t border-gray-200 pt-4">
//                 <select
//                   value={filter}
//                   onChange={(e) => setFilter(e.target.value)}
//                   className="w-full px-4 py-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white shadow-sm font-medium"
//                 >
//                   <option value="all">All Session Types</option>
//                   <option value="online">Online Only</option>
//                   <option value="offline">In-Person Only</option>
//                 </select>
                
//                 <select
//                   value={specializationFilter}
//                   onChange={(e) => setSpecializationFilter(e.target.value)}
//                   className="w-full px-4 py-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white shadow-sm font-medium"
//                 >
//                   <option value="all">All Specializations</option>
//                   {getSpecializations().map((spec) => (
//                     <option key={spec} value={spec}>{formatTitle(spec)}</option>
//                   ))}
//                 </select>
                
//                 {hasActiveFilters && (
//                   <button
//                     onClick={clearFilters}
//                     className="w-full px-4 py-3 bg-red-500 text-white font-medium rounded-xl hover:bg-red-600 transition-colors"
//                   >
//                     Clear All Filters
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Results Header */}
//         <div className="mb-6 md:mb-10 px-2">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
//             {filteredTherapists.length} therapist{filteredTherapists.length !== 1 ? 's' : ''} available
//           </h2>
//           <p className="text-base md:text-lg text-gray-600">All licensed and verified professionals ready to help</p>
//         </div>

//         {/* Therapist Cards Grid */}
//         {filteredTherapists.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
//             {filteredTherapists.map((therapist) => (
//               <TherapistCard key={therapist.id} therapist={therapist} />
//             ))}
//           </div>
//         ) : (
//           /* Empty State */
//           <div className="text-center py-16 md:py-20 px-4">
//             <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl md:rounded-3xl mx-auto mb-4 md:mb-6 flex items-center justify-center">
//               <Users className="w-8 h-8 md:w-10 md:h-10 text-violet-400" />
//             </div>
//             <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
//               {hasActiveFilters ? 'No therapists match your criteria' : 'No therapists available'}
//             </h3>
//             <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-md mx-auto">
//               {hasActiveFilters 
//                 ? 'Try adjusting your search terms or filters to find more options.'
//                 : 'We\'re working to connect you with qualified professionals. Please check back soon.'
//               }
//             </p>
//             {hasActiveFilters && (
//               <button
//                 onClick={clearFilters}
//                 className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl md:rounded-2xl hover:from-violet-700 hover:to-purple-700 transition-all duration-200 shadow-sm text-sm md:text-base"
//               >
//                 <X className="w-4 h-4 md:w-5 md:h-5 mr-2" />
//                 Clear All Filters
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TherapistList;
// export default TherapistList;
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { therapistService } from '../services/therapistService';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import {
  Star,
  MapPin,
  Clock,
  Globe,
  Users,
  Filter,
  Search,
  Award,
  Calendar,
  Video,
  UserCheck,
  ChevronDown,
  X,
  Heart,
  Shield,
  CheckCircle,
  Verified,
  BadgeCheck,
  Timer,
  ArrowRight,
  ThumbsUp,
  GraduationCap,
  User
} from 'lucide-react';

// Professional AvailabilityModal Component
const AvailabilityModal = ({ therapist, isOpen, onClose }) => {
  const DAYS_OF_WEEK = [
    { key: 'monday', label: 'Monday', short: 'MON' },
    { key: 'tuesday', label: 'Tuesday', short: 'TUE' },
    { key: 'wednesday', label: 'Wednesday', short: 'WED' },
    { key: 'thursday', label: 'Thursday', short: 'THU' },
    { key: 'friday', label: 'Friday', short: 'FRI' },
    { key: 'saturday', label: 'Saturday', short: 'SAT' },
    { key: 'sunday', label: 'Sunday', short: 'SUN' }
  ];

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle keyboard interactions
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  // Handle overlay click to close modal
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Format schedule display
  const getScheduleTime = (day) => {
    if (!therapist?.schedule) return 'Not Available';
    
    const time = therapist.schedule[day.key];
    if (!time || time.toLowerCase().includes('unavailable') || time.toLowerCase().includes('closed')) {
      return 'Not Available';
    }
    return time;
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Container - Responsive */}
      <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl w-full max-w-md mx-4 relative transform transition-all duration-300">
        
        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-200 rounded-t-xl md:rounded-t-2xl p-4 md:p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 md:top-4 md:right-4 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 transition-all duration-200 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
            aria-label="Close availability schedule"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Therapist Header */}
          <div className="flex items-center space-x-3 md:space-x-4 pr-10">
            {/* Avatar */}
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
              <User className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            
            {/* Info */}
            <div className="flex-1 min-w-0">
              <h2 
                id="modal-title"
                className="text-lg md:text-xl font-bold text-slate-900 mb-1 truncate"
              >
                {therapist?.name || 'Therapist'}
              </h2>
              <div className="flex items-center text-slate-600 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Weekly Availability</span>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Content */}
        <div className="p-4 md:p-6 max-h-96 overflow-y-auto">
          <div className="space-y-2">
            {DAYS_OF_WEEK.map((day, index) => {
              const scheduleTime = getScheduleTime(day);
              const isUnavailable = scheduleTime === 'Not Available';
              const isToday = new Date().getDay() === (index + 1) % 7;
              
              return (
                <div 
                  key={day.key}
                  className={`group flex items-center justify-between p-3 md:p-4 rounded-lg border transition-all duration-200 hover:shadow-sm ${
                    isToday 
                      ? 'bg-teal-50 border-teal-200' 
                      : 'bg-slate-50/50 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center space-x-3 md:space-x-4">
                    {/* Day Badge */}
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center font-bold text-xs ${
                      isToday 
                        ? 'bg-teal-500 text-white' 
                        : day.key === 'sunday' 
                          ? 'bg-pink-100 text-pink-600' 
                          : 'bg-white text-slate-600 border border-slate-200'
                    }`}>
                      {day.short}
                    </div>
                    
                    {/* Day Name */}
                    <div>
                      <div className="font-medium text-slate-900 text-sm md:text-base">
                        {day.label}
                        {isToday && (
                          <span className="ml-2 text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                            Today
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Time Display */}
                  <div className="flex items-center">
                    <div className={`flex items-center space-x-1 md:space-x-2 px-2 md:px-3 py-1 md:py-2 rounded-lg font-medium text-xs md:text-sm ${
                      isUnavailable 
                        ? 'bg-red-50 text-red-600' 
                        : 'bg-green-50 text-green-700'
                    }`}>
                      <Clock className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="truncate max-w-24 md:max-w-none">{scheduleTime}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50/50 border-t border-slate-200 rounded-b-xl md:rounded-b-2xl p-4 md:p-6">
          <div className="space-y-4">
            {/* Additional Info */}
            <div className="grid grid-cols-1 gap-2 md:gap-3">
              <div className="flex items-center justify-center text-slate-600 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{therapist?.location || 'Location not specified'}</span>
              </div>
              
              <div className="flex items-center justify-center text-slate-500 text-xs">
                <Clock className="w-3 h-3 mr-2" />
                <span>All times are in your local timezone</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                Close
              </button>
              <Link
                to={`/book-appointment/${therapist?.id}`}
                onClick={onClose}
                className="flex-1 px-4 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm text-center"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper functions
const formatTitle = (str) => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const formatTherapistName = (name) => {
  if (!name) return '';
  return name.toLowerCase().startsWith('dr.') ? name.toUpperCase() : name.toUpperCase();
};

// Updated TherapistCard Component with EA badge removed
const TherapistCard = ({ therapist }) => {
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
        {/* Recommend Badge - Top Right */}
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-semibold">
            <ThumbsUp className="w-5 h-4" />
            Recommend
          </div>
        </div>

        <div className="p-6">
          {/* Doctor Photo - EA badge removed */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <img 
                src={therapist.photoUrl || `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000) + 1500000000000}-${Math.floor(Math.random() * 1000) + 500000000000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80&crop=face`}
                alt={therapist.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-pink-100"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/80x80/EC4899/white?text=Dr';
                }}
              />
              {/* EA Brand Badge removed - no badge here anymore */}
            </div>
          </div>

          {/* Doctor Information */}
          <div className="text-left mb-4">
            <h3 className="text-teal-600 text-base font-bold uppercase mb-1">
              {formatTherapistName(therapist.name)}
            </h3>
            
            <p className="text-gray-900 font-semibold text-sm mb-2">
              {therapist.specialization || 'Counselling Psychologist'}
            </p>
            
            {/* Experience */}
            <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
              <Clock className="w-4 h-4" />
              <span>{therapist.experience}</span>
            </div>
            
            {/* Education */}
            <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>{therapist.education || 'B.Com,MA,PG Diploma'}</span>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-base font-bold text-gray-900">{therapist.rating}</span>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((star) => (
                  <Star 
                    key={star}
                    className={`w-4 h-4 ${star <= Math.floor(therapist.rating) ? 'text-pink-500 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({therapist.reviews || '54'} Ratings)</span>
            </div>
            
            {/* See Availability - Professional Button Style */}
            <div className="mb-4 flex justify-center">
              <button 
                className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 shadow-sm"
                onClick={() => setShowAvailabilityModal(true)}
              >
                <Calendar className="w-4 h-4 mr-2" />
                See Schedule
              </button>
            </div>
          </div>

          {/* Session Info */}
          <div className="text-center border-t border-gray-100 pt-4 mb-4">
            <div className="text-gray-900 font-semibold text-base mb-1">
              {therapist.availability_mode === 'online' ? 'Online' : 
               therapist.availability_mode === 'offline' ? 'In-Person' : 
               therapist.availability_mode === 'both' ? 'Online & In-Person' : 'Online'}
            </div>
            <p className="text-gray-500 text-sm mb-2">Session beginning at</p>
            <div className="text-teal-600 text-xl font-bold mb-4">₹{therapist.fee || '800'}</div>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              to={`/book-appointment/${therapist.id}`}
              className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full text-center transition-colors text-sm"
            >
              Book a Session
            </Link>
            
            <Link
              to={`/therapist/${therapist.id}`}
              className="block w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-full text-center transition-colors text-sm"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>

      {/* Availability Modal */}
      <AvailabilityModal 
        therapist={therapist}
        isOpen={showAvailabilityModal}
        onClose={() => setShowAvailabilityModal(false)}
      />
    </>
  );
};

// Main TherapistList Component
const TherapistList = () => {
  const [therapists, setTherapists] = useState([]);
  const [filteredTherapists, setFilteredTherapists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [specializationFilter, setSpecializationFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchTherapists();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [therapists, searchTerm, filter, specializationFilter]);

  const fetchTherapists = async () => {
    try {
      const data = await therapistService.getAllTherapists();
      setTherapists(data);
    } catch (err) {
      setError('Failed to load therapists. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...therapists];
    
    if (searchTerm) {
      filtered = filtered.filter(therapist =>
        [therapist.name, therapist.specialization, therapist.location].some(field =>
          field && field.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    if (filter !== 'all') {
      filtered = filtered.filter(therapist =>
        therapist.availability_mode === filter || therapist.availability_mode === 'both'
      );
    }
    
    if (specializationFilter !== 'all') {
      filtered = filtered.filter(therapist =>
        therapist.specialization && therapist.specialization.toLowerCase().includes(specializationFilter.toLowerCase())
      );
    }
    
    setFilteredTherapists(filtered);
  };

  const getSpecializations = () => {
    const specializations = [...new Set(therapists.map(t => t.specialization).filter(Boolean))];
    return specializations.sort();
  };

  const clearFilters = () => {
    setSearchTerm('');
    setFilter('all');
    setSpecializationFilter('all');
    setShowFilters(false);
  };

  const hasActiveFilters = searchTerm || filter !== 'all' || specializationFilter !== 'all';

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
            <Heart className="w-10 h-10 text-white animate-pulse" />
          </div>
          <LoadingSpinner size="lg" />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">Finding Mental Health Professionals</h3>
            <p className="text-gray-500">Loading qualified therapists for you...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 p-4 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-bold text-red-800 mb-2">Unable to Load Therapists</h3>
          <p className="text-red-600 mb-6">{error}</p>
          <button
            onClick={fetchTherapists}
            className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800">
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl mb-6 md:mb-8">
              <UserCheck className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Find Your Perfect <span className="text-yellow-300">Therapist</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-violet-100 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
              Connect with licensed, verified mental health professionals who understand your unique journey
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white/90 px-4">
              <div className="flex items-center space-x-2 md:space-x-3 bg-white/10 rounded-full px-4 md:px-6 py-2 md:py-3 backdrop-blur-sm">
                <BadgeCheck className="w-4 h-4 md:w-5 md:h-5 text-emerald-300" />
                <span className="font-medium text-sm md:text-base">Licensed & Verified</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3 bg-white/10 rounded-full px-4 md:px-6 py-2 md:py-3 backdrop-blur-sm">
                <Heart className="w-4 h-4 md:w-5 md:h-5 text-pink-300" />
                <span className="font-medium text-sm md:text-base">Compassionate Care</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3 bg-white/10 rounded-full px-4 md:px-6 py-2 md:py-3 backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" />
                <span className="font-medium text-sm md:text-base">Personalized Match</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Search & Filters Bar */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 mb-8 md:mb-12 -mt-8 md:-mt-12 relative z-10">
          <div className="p-4 md:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
              {/* Search Input */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 md:pl-5 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 md:h-6 md:w-6 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by name, specialty, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-12 md:pl-14 pr-4 md:pr-6 py-4 md:py-5 text-base md:text-lg border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors shadow-sm"
                />
              </div>
              
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center justify-center px-4 py-4 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 font-medium"
              >
                <Filter className="w-5 h-5 mr-2" />
                Filters
                {hasActiveFilters && (
                  <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-full">
                    {[searchTerm, filter !== 'all', specializationFilter !== 'all'].filter(Boolean).length}
                  </span>
                )}
              </button>
              
              {/* Desktop Filter Dropdowns */}
              <div className="hidden lg:flex gap-4">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 md:px-6 py-4 md:py-5 text-base md:text-lg border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white min-w-[180px] md:min-w-[200px] shadow-sm font-medium"
                >
                  <option value="all">All Session Types</option>
                  <option value="online">Online Only</option>
                  <option value="offline">In-Person Only</option>
                </select>
                
                <select
                  value={specializationFilter}
                  onChange={(e) => setSpecializationFilter(e.target.value)}
                  className="px-4 md:px-6 py-4 md:py-5 text-base md:text-lg border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white min-w-[200px] md:min-w-[220px] shadow-sm font-medium"
                >
                  <option value="all">All Specializations</option>
                  {getSpecializations().map((spec) => (
                    <option key={spec} value={spec}>{formatTitle(spec)}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mt-4 space-y-4 border-t border-gray-200 pt-4">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full px-4 py-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white shadow-sm font-medium"
                >
                  <option value="all">All Session Types</option>
                  <option value="online">Online Only</option>
                  <option value="offline">In-Person Only</option>
                </select>
                
                <select
                  value={specializationFilter}
                  onChange={(e) => setSpecializationFilter(e.target.value)}
                  className="w-full px-4 py-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white shadow-sm font-medium"
                >
                  <option value="all">All Specializations</option>
                  {getSpecializations().map((spec) => (
                    <option key={spec} value={spec}>{formatTitle(spec)}</option>
                  ))}
                </select>
                
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="w-full px-4 py-3 bg-red-500 text-white font-medium rounded-xl hover:bg-red-600 transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Results Header */}
        <div className="mb-6 md:mb-10 px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
            {filteredTherapists.length} therapist{filteredTherapists.length !== 1 ? 's' : ''} available
          </h2>
          <p className="text-base md:text-lg text-gray-600">All licensed and verified professionals ready to help</p>
        </div>

        {/* Therapist Cards Grid */}
        {filteredTherapists.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {filteredTherapists.map((therapist) => (
              <TherapistCard key={therapist.id} therapist={therapist} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 md:py-20 px-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl md:rounded-3xl mx-auto mb-4 md:mb-6 flex items-center justify-center">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-violet-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              {hasActiveFilters ? 'No therapists match your criteria' : 'No therapists available'}
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-md mx-auto">
              {hasActiveFilters 
                ? 'Try adjusting your search terms or filters to find more options.'
                : 'We\'re working to connect you with qualified professionals. Please check back soon.'
              }
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl md:rounded-2xl hover:from-violet-700 hover:to-purple-700 transition-all duration-200 shadow-sm text-sm md:text-base"
              >
                <X className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Clear All Filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TherapistList;
