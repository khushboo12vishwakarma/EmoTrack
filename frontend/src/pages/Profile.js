// // // // import React, { useState, useEffect } from 'react';
// // // // import { therapistService } from '../services/therapistService';
// // // // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // // // import { 
// // // //   User, 
// // // //   Mail, 
// // // //   Calendar, 
// // // //   Activity, 
// // // //   BookOpen, 
// // // //   MessageCircle,
// // // //   Edit
// // // // } from 'lucide-react';

// // // // const Profile = () => {
// // // //   const [profile, setProfile] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState('');

// // // //   useEffect(() => {
// // // //     fetchProfile();
// // // //   }, []);

// // // //   const fetchProfile = async () => {
// // // //     try {
// // // //       const data = await therapistService.getUserProfile();
// // // //       setProfile(data);
// // // //     } catch (err) {
// // // //       setError('Failed to load profile data');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
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
// // // //       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         {/* Header */}
// // // //         <div className="text-center mb-8">
// // // //           <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
// // // //           <p className="mt-2 text-gray-600">
// // // //             View your account information and activity summary
// // // //           </p>
// // // //         </div>

// // // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // //           {/* Profile Information */}
// // // //           <div className="lg:col-span-1">
// // // //             <div className="card">
// // // //               <div className="text-center mb-6">
// // // //                 <div className="bg-primary text-white rounded-full h-20 w-20 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
// // // //                   {profile.username.charAt(0).toUpperCase()}
// // // //                 </div>
// // // //                 <h2 className="text-xl font-semibold text-gray-900">{profile.username}</h2>
// // // //                 <p className="text-gray-600">{profile.email}</p>
// // // //               </div>

// // // //               <div className="space-y-4">
// // // //                 <div className="flex items-center text-gray-600">
// // // //                   <User className="h-5 w-5 mr-3" />
// // // //                   <div>
// // // //                     <p className="text-sm font-medium">Username</p>
// // // //                     <p className="text-sm">{profile.username}</p>
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="flex items-center text-gray-600">
// // // //                   <Mail className="h-5 w-5 mr-3" />
// // // //                   <div>
// // // //                     <p className="text-sm font-medium">Email</p>
// // // //                     <p className="text-sm">{profile.email}</p>
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="flex items-center text-gray-600">
// // // //                   <Calendar className="h-5 w-5 mr-3" />
// // // //                   <div>
// // // //                     <p className="text-sm font-medium">Member Since</p>
// // // //                     <p className="text-sm">{profile.joined}</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               <button className="w-full btn-secondary mt-6">
// // // //                 <Edit className="h-4 w-4 mr-2" />
// // // //                 Edit Profile
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           {/* Activity Summary */}
// // // //           <div className="lg:col-span-2">
// // // //             <div className="card">
// // // //               <h2 className="text-xl font-semibold mb-6">Activity Summary</h2>
              
// // // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // // //                 <div className="text-center p-4 bg-blue-50 rounded-lg">
// // // //                   <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
// // // //                   <h3 className="text-2xl font-bold text-gray-900">{profile.mood_history_count}</h3>
// // // //                   <p className="text-sm text-gray-600">Mood Entries</p>
// // // //                 </div>

// // // //                 <div className="text-center p-4 bg-green-50 rounded-lg">
// // // //                   <BookOpen className="h-8 w-8 text-secondary mx-auto mb-2" />
// // // //                   <h3 className="text-2xl font-bold text-gray-900">{profile.journal_entries_count}</h3>
// // // //                   <p className="text-sm text-gray-600">Journal Entries</p>
// // // //                 </div>

// // // //                 <div className="text-center p-4 bg-purple-50 rounded-lg">
// // // //                   <MessageCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
// // // //                   <h3 className="text-2xl font-bold text-gray-900">{profile.therapy_sessions_count}</h3>
// // // //                   <p className="text-sm text-gray-600">Therapy Sessions</p>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Recent Activity */}
// // // //               <div className="border-t border-gray-200 pt-6">
// // // //                 <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                
// // // //                 <div className="space-y-4">
// // // //                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
// // // //                     <div className="flex items-center">
// // // //                       <Activity className="h-5 w-5 text-primary mr-3" />
// // // //                       <div>
// // // //                         <p className="text-sm font-medium">Mood tracking streak</p>
// // // //                         <p className="text-xs text-gray-600">Keep up the great work!</p>
// // // //                       </div>
// // // //                     </div>
// // // //                     <span className="text-sm font-medium text-primary">Active</span>
// // // //                   </div>

// // // //                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
// // // //                     <div className="flex items-center">
// // // //                       <BookOpen className="h-5 w-5 text-secondary mr-3" />
// // // //                       <div>
// // // //                         <p className="text-sm font-medium">Recovery tracker</p>
// // // //                         <p className="text-xs text-gray-600">Monitor your progress daily</p>
// // // //                       </div>
// // // //                     </div>
// // // //                     <span className="text-sm font-medium text-secondary">
// // // //                       {profile.journal_entries_count > 0 ? 'Active' : 'Start tracking'}
// // // //                     </span>
// // // //                   </div>

// // // //                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
// // // //                     <div className="flex items-center">
// // // //                       <MessageCircle className="h-5 w-5 text-purple-600 mr-3" />
// // // //                       <div>
// // // //                         <p className="text-sm font-medium">Therapy sessions</p>
// // // //                         <p className="text-xs text-gray-600">Connect with professionals</p>
// // // //                       </div>
// // // //                     </div>
// // // //                     <span className="text-sm font-medium text-purple-600">
// // // //                       {profile.therapy_sessions_count} booked
// // // //                     </span>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Account Actions */}
// // // //               <div className="border-t border-gray-200 pt-6 mt-6">
// // // //                 <h3 className="text-lg font-semibold mb-4">Account Actions</h3>
                
// // // //                 <div className="space-y-3">
// // // //                   <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
// // // //                     <div className="flex items-center justify-between">
// // // //                       <span className="font-medium">Download My Data</span>
// // // //                       <span className="text-sm text-gray-600">Export your information</span>
// // // //                     </div>
// // // //                   </button>

// // // //                   <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
// // // //                     <div className="flex items-center justify-between">
// // // //                       <span className="font-medium">Privacy Settings</span>
// // // //                       <span className="text-sm text-gray-600">Manage your privacy</span>
// // // //                     </div>
// // // //                   </button>

// // // //                   <button className="w-full text-left px-4 py-3 border border-red-300 rounded-lg hover:bg-red-50 transition-colors text-red-600">
// // // //                     <div className="flex items-center justify-between">
// // // //                       <span className="font-medium">Delete Account</span>
// // // //                       <span className="text-sm text-red-500">Permanently delete your account</span>
// // // //                     </div>
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // export default Profile;
// // // // import React, { useState, useEffect } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import { therapistService } from '../services/therapistService';
// // // // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // // // import { 
// // // //   User, 
// // // //   Mail, 
// // // //   Calendar, 
// // // //   Activity, 
// // // //   BookOpen, 
// // // //   MessageCircle,
// // // //   Edit,
// // // //   Save,
// // // //   X,
// // // //   Download,
// // // //   Shield,
// // // //   Trash2
// // // // } from 'lucide-react';

// // // // const Profile = () => {
// // // //   const [profile, setProfile] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState('');
// // // //   const [isEditing, setIsEditing] = useState(false);
// // // //   const [editedProfile, setEditedProfile] = useState({});
  
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     fetchProfile();
// // // //   }, []);

// // // //   const fetchProfile = async () => {
// // // //     try {
// // // //       const data = await therapistService.getUserProfile();
// // // //       setProfile(data);
// // // //       setEditedProfile(data);
// // // //     } catch (err) {
// // // //       setError('Failed to load profile data');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   // Edit Profile handlers
// // // //   const handleEditProfile = () => {
// // // //     setIsEditing(true);
// // // //     setEditedProfile(profile);
// // // //   };

// // // //   const handleCancelEdit = () => {
// // // //     setIsEditing(false);
// // // //     setEditedProfile(profile);
// // // //   };

// // // //   const handleSaveProfile = async () => {
// // // //     try {
// // // //       // Here you would make an API call to update the profile
// // // //       // const updatedProfile = await therapistService.updateUserProfile(editedProfile);
      
// // // //       setProfile(editedProfile);
// // // //       setIsEditing(false);
// // // //       alert('Profile updated successfully!');
// // // //     } catch (err) {
// // // //       console.error('Failed to update profile:', err);
// // // //       setError('Failed to update profile');
// // // //     }
// // // //   };

// // // //   const handleInputChange = (field, value) => {
// // // //     setEditedProfile(prev => ({
// // // //       ...prev,
// // // //       [field]: value
// // // //     }));
// // // //   };

// // // //   // Account Actions handlers
// // // //   const handleDownloadData = async () => {
// // // //     try {
// // // //       // Show loading state
// // // //       const originalButtonText = 'Downloading...';
      
// // // //       // Create user data object
// // // //       const userData = {
// // // //         profile: profile,
// // // //         mood_entries: profile.mood_history_count,
// // // //         journal_entries: profile.journal_entries_count,
// // // //         therapy_sessions: profile.therapy_sessions_count,
// // // //         member_since: profile.joined,
// // // //         export_date: new Date().toISOString()
// // // //       };

// // // //       // Convert to JSON string
// // // //       const dataStr = JSON.stringify(userData, null, 2);
      
// // // //       // Create blob
// // // //       const dataBlob = new Blob([dataStr], { type: 'application/json' });
      
// // // //       // Create download link
// // // //       const url = URL.createObjectURL(dataBlob);
// // // //       const link = document.createElement('a');
// // // //       link.href = url;
// // // //       link.download = `emotrack-data-${profile.username}-${new Date().toISOString().split('T')[0]}.json`;
      
// // // //       // Trigger download
// // // //       document.body.appendChild(link);
// // // //       link.click();
// // // //       document.body.removeChild(link);
      
// // // //       // Cleanup
// // // //       URL.revokeObjectURL(url);
      
// // // //       alert('Your data has been downloaded successfully!');
// // // //     } catch (error) {
// // // //       console.error('Failed to download data:', error);
// // // //       alert('Failed to download data. Please try again.');
// // // //     }
// // // //   };

// // // //   const handlePrivacySettings = () => {
// // // //     // You can either navigate to a privacy settings page or show a modal
// // // //     // Option 1: Navigate to privacy page
// // // //     // navigate('/privacy-settings');
    
// // // //     // Option 2: Show alert for now (implement modal later)
// // // //     alert('Privacy Settings functionality will be available soon!');
    
// // // //     // Option 3: Navigate to general settings page
// // // //     // navigate('/settings');
// // // //   };

// // // //   const handleDeleteAccount = () => {
// // // //     // Show confirmation dialog
// // // //     const isConfirmed = window.confirm(
// // // //       'Are you sure you want to delete your account?\n\n' +
// // // //       'This action cannot be undone and will permanently remove:\n' +
// // // //       '• All your mood entries and progress data\n' +
// // // //       '• Your journal entries and recovery tracker\n' +
// // // //       '• All therapy session history\n' +
// // // //       '• Your profile information\n\n' +
// // // //       'Type "DELETE" to confirm this action.'
// // // //     );

// // // //     if (isConfirmed) {
// // // //       // Second confirmation with text input
// // // //       const confirmationText = prompt(
// // // //         'Please type "DELETE" to confirm account deletion:'
// // // //       );

// // // //       if (confirmationText === 'DELETE') {
// // // //         // Here you would make an API call to delete the account
// // // //         handleAccountDeletion();
// // // //       } else if (confirmationText !== null) {
// // // //         alert('Account deletion cancelled. Please type "DELETE" exactly to confirm.');
// // // //       }
// // // //     }
// // // //   };

// // // //   const handleAccountDeletion = async () => {
// // // //     try {
// // // //       // Show loading state
// // // //       alert('Deleting account...');
      
// // // //       // Here you would make the actual API call
// // // //       // await therapistService.deleteUserAccount();
      
// // // //       // For now, just simulate the deletion
// // // //       setTimeout(() => {
// // // //         alert('Account deleted successfully. You will be redirected to the home page.');
// // // //         // Clear local storage/session
// // // //         localStorage.clear();
// // // //         sessionStorage.clear();
// // // //         // Redirect to home page
// // // //         navigate('/', { replace: true });
// // // //       }, 2000);
      
// // // //     } catch (error) {
// // // //       console.error('Failed to delete account:', error);
// // // //       alert('Failed to delete account. Please try again or contact support.');
// // // //     }
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
// // // //       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         {/* Header */}
// // // //         <div className="text-center mb-8">
// // // //           <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
// // // //           <p className="mt-2 text-gray-600">
// // // //             View your account information and activity summary
// // // //           </p>
// // // //         </div>

// // // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // //           {/* Profile Information */}
// // // //           <div className="lg:col-span-1">
// // // //             <div className="bg-white rounded-lg shadow p-6">
// // // //               <div className="text-center mb-6">
// // // //                 <div className="bg-violet-600 text-white rounded-full h-20 w-20 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
// // // //                   {profile?.username?.charAt(0).toUpperCase()}
// // // //                 </div>
// // // //                 <h2 className="text-xl font-semibold text-gray-900">{profile?.username}</h2>
// // // //                 <p className="text-gray-600">{profile?.email}</p>
// // // //               </div>

// // // //               <div className="space-y-4">
// // // //                 <div className="flex items-center text-gray-600">
// // // //                   <User className="h-5 w-5 mr-3" />
// // // //                   <div className="flex-1">
// // // //                     <p className="text-sm font-medium">Username</p>
// // // //                     {isEditing ? (
// // // //                       <input
// // // //                         type="text"
// // // //                         value={editedProfile.username || ''}
// // // //                         onChange={(e) => handleInputChange('username', e.target.value)}
// // // //                         className="text-sm border border-gray-300 rounded px-2 py-1 w-full mt-1"
// // // //                       />
// // // //                     ) : (
// // // //                       <p className="text-sm">{profile?.username}</p>
// // // //                     )}
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="flex items-center text-gray-600">
// // // //                   <Mail className="h-5 w-5 mr-3" />
// // // //                   <div className="flex-1">
// // // //                     <p className="text-sm font-medium">Email</p>
// // // //                     {isEditing ? (
// // // //                       <input
// // // //                         type="email"
// // // //                         value={editedProfile.email || ''}
// // // //                         onChange={(e) => handleInputChange('email', e.target.value)}
// // // //                         className="text-sm border border-gray-300 rounded px-2 py-1 w-full mt-1"
// // // //                       />
// // // //                     ) : (
// // // //                       <p className="text-sm">{profile?.email}</p>
// // // //                     )}
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="flex items-center text-gray-600">
// // // //                   <Calendar className="h-5 w-5 mr-3" />
// // // //                   <div>
// // // //                     <p className="text-sm font-medium">Member Since</p>
// // // //                     <p className="text-sm">{profile?.joined}</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Edit/Save/Cancel Buttons */}
// // // //               <div className="mt-6 space-y-2">
// // // //                 {isEditing ? (
// // // //                   <>
// // // //                     <button 
// // // //                       onClick={handleSaveProfile}
// // // //                       className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
// // // //                     >
// // // //                       <Save className="h-4 w-4 mr-2" />
// // // //                       Save Changes
// // // //                     </button>
// // // //                     <button 
// // // //                       onClick={handleCancelEdit}
// // // //                       className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
// // // //                     >
// // // //                       <X className="h-4 w-4 mr-2" />
// // // //                       Cancel
// // // //                     </button>
// // // //                   </>
// // // //                 ) : (
// // // //                   <button 
// // // //                     onClick={handleEditProfile}
// // // //                     className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
// // // //                   >
// // // //                     <Edit className="h-4 w-4 mr-2" />
// // // //                     Edit Profile
// // // //                   </button>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Activity Summary */}
// // // //           <div className="lg:col-span-2">
// // // //             <div className="bg-white rounded-lg shadow p-6">
// // // //               <h2 className="text-xl font-semibold mb-6">Activity Summary</h2>
              
// // // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // // //                 <div className="text-center p-4 bg-blue-50 rounded-lg">
// // // //                   <Activity className="h-8 w-8 text-violet-600 mx-auto mb-2" />
// // // //                   <h3 className="text-2xl font-bold text-gray-900">{profile?.mood_history_count || 0}</h3>
// // // //                   <p className="text-sm text-gray-600">Mood Entries</p>
// // // //                 </div>

// // // //                 <div className="text-center p-4 bg-green-50 rounded-lg">
// // // //                   <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
// // // //                   <h3 className="text-2xl font-bold text-gray-900">{profile?.journal_entries_count || 0}</h3>
// // // //                   <p className="text-sm text-gray-600">Journal Entries</p>
// // // //                 </div>

// // // //                 <div className="text-center p-4 bg-purple-50 rounded-lg">
// // // //                   <MessageCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
// // // //                   <h3 className="text-2xl font-bold text-gray-900">{profile?.therapy_sessions_count || 0}</h3>
// // // //                   <p className="text-sm text-gray-600">Therapy Sessions</p>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Recent Activity */}
// // // //               <div className="border-t border-gray-200 pt-6">
// // // //                 <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                
// // // //                 <div className="space-y-4">
// // // //                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
// // // //                     <div className="flex items-center">
// // // //                       <Activity className="h-5 w-5 text-violet-600 mr-3" />
// // // //                       <div>
// // // //                         <p className="text-sm font-medium">Mood tracking streak</p>
// // // //                         <p className="text-xs text-gray-600">Keep up the great work!</p>
// // // //                       </div>
// // // //                     </div>
// // // //                     <span className="text-sm font-medium text-violet-600">Active</span>
// // // //                   </div>

// // // //                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
// // // //                     <div className="flex items-center">
// // // //                       <BookOpen className="h-5 w-5 text-green-600 mr-3" />
// // // //                       <div>
// // // //                         <p className="text-sm font-medium">Recovery tracker</p>
// // // //                         <p className="text-xs text-gray-600">Monitor your progress daily</p>
// // // //                       </div>
// // // //                     </div>
// // // //                     <span className="text-sm font-medium text-green-600">
// // // //                       {(profile?.journal_entries_count || 0) > 0 ? 'Active' : 'Start tracking'}
// // // //                     </span>
// // // //                   </div>

// // // //                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
// // // //                     <div className="flex items-center">
// // // //                       <MessageCircle className="h-5 w-5 text-purple-600 mr-3" />
// // // //                       <div>
// // // //                         <p className="text-sm font-medium">Therapy sessions</p>
// // // //                         <p className="text-xs text-gray-600">Connect with professionals</p>
// // // //                       </div>
// // // //                     </div>
// // // //                     <span className="text-sm font-medium text-purple-600">
// // // //                       {profile?.therapy_sessions_count || 0} booked
// // // //                     </span>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Account Actions - NOW WITH WORKING BUTTONS */}
// // // //               <div className="border-t border-gray-200 pt-6 mt-6">
// // // //                 <h3 className="text-lg font-semibold mb-4">Account Actions</h3>
                
// // // //                 <div className="space-y-3">
// // // //                   {/* Download My Data Button */}
// // // //                   <button 
// // // //                     onClick={handleDownloadData}
// // // //                     className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group"
// // // //                   >
// // // //                     <div className="flex items-center justify-between">
// // // //                       <div className="flex items-center">
// // // //                         <Download className="h-5 w-5 text-blue-600 mr-3" />
// // // //                         <span className="font-medium">Download My Data</span>
// // // //                       </div>
// // // //                       <span className="text-sm text-gray-600">Export your information</span>
// // // //                     </div>
// // // //                   </button>

// // // //                   {/* Privacy Settings Button */}
// // // //                   <button 
// // // //                     onClick={handlePrivacySettings}
// // // //                     className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group"
// // // //                   >
// // // //                     <div className="flex items-center justify-between">
// // // //                       <div className="flex items-center">
// // // //                         <Shield className="h-5 w-5 text-green-600 mr-3" />
// // // //                         <span className="font-medium">Privacy Settings</span>
// // // //                       </div>
// // // //                       <span className="text-sm text-gray-600">Manage your privacy</span>
// // // //                     </div>
// // // //                   </button>

// // // //                   {/* Delete Account Button */}
// // // //                   <button 
// // // //                     onClick={handleDeleteAccount}
// // // //                     className="w-full text-left px-4 py-3 border border-red-300 rounded-lg hover:bg-red-50 transition-colors text-red-600 group"
// // // //                   >
// // // //                     <div className="flex items-center justify-between">
// // // //                       <div className="flex items-center">
// // // //                         <Trash2 className="h-5 w-5 text-red-600 mr-3" />
// // // //                         <span className="font-medium">Delete Account</span>
// // // //                       </div>
// // // //                       <span className="text-sm text-red-500">Permanently delete your account</span>
// // // //                     </div>
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Profile;
// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { therapistService } from '../services/therapistService';
// // // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // // import { 
// // //   User, 
// // //   Mail, 
// // //   Calendar, 
// // //   Activity, 
// // //   BookOpen, 
// // //   MessageCircle,
// // //   Edit,
// // //   Save,
// // //   X,
// // //   Download,
// // //   Shield,
// // //   Trash2
// // // } from 'lucide-react';
// // // import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// // // // PDF styles
// // // const pdfStyles = StyleSheet.create({
// // //   page: {
// // //     padding: 40,
// // //     fontSize: 11,
// // //     fontFamily: 'Helvetica',
// // //     lineHeight: 1.6,
// // //   },
// // //   header: {
// // //     fontSize: 24,
// // //     textAlign: 'center',
// // //     marginBottom: 30,
// // //     color: '#4c1d95', // violet-950
// // //     fontWeight: 'bold',
// // //   },
// // //   subHeader: {
// // //     fontSize: 16,
// // //     marginTop: 20,
// // //     marginBottom: 15,
// // //     color: '#4c1d95',
// // //     fontWeight: 'bold',
// // //     borderBottom: '2px solid #4c1d95',
// // //     paddingBottom: 5,
// // //   },
// // //   section: {
// // //     marginBottom: 15,
// // //     padding: 10,
// // //     backgroundColor: '#f8fafc',
// // //     borderRadius: 5,
// // //   },
// // //   row: {
// // //     flexDirection: 'row',
// // //     marginBottom: 8,
// // //   },
// // //   label: {
// // //     fontWeight: 'bold',
// // //     color: '#374151',
// // //     width: '30%',
// // //   },
// // //   value: {
// // //     color: '#6b7280',
// // //     width: '70%',
// // //   },
// // //   statsContainer: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-around',
// // //     marginVertical: 20,
// // //     padding: 15,
// // //     backgroundColor: '#f3f4f6',
// // //     borderRadius: 8,
// // //   },
// // //   statBox: {
// // //     alignItems: 'center',
// // //     padding: 10,
// // //   },
// // //   statNumber: {
// // //     fontSize: 20,
// // //     fontWeight: 'bold',
// // //     color: '#4c1d95',
// // //     marginBottom: 5,
// // //   },
// // //   statLabel: {
// // //     fontSize: 10,
// // //     color: '#6b7280',
// // //     textAlign: 'center',
// // //   },
// // //   footer: {
// // //     position: 'absolute',
// // //     bottom: 30,
// // //     left: 40,
// // //     right: 40,
// // //     textAlign: 'center',
// // //     fontSize: 10,
// // //     color: '#9ca3af',
// // //     borderTop: '1px solid #e5e7eb',
// // //     paddingTop: 10,
// // //   },
// // // });

// // // // PDF Document Component
// // // const ProfilePDF = ({ profile }) => (
// // //   <Document>
// // //     <Page size="A4" style={pdfStyles.page}>
// // //       {/* Header */}
// // //       <Text style={pdfStyles.header}>EmoTrack Profile Report</Text>
      
// // //       {/* Profile Information Section */}
// // //       <Text style={pdfStyles.subHeader}>Profile Information</Text>
// // //       <View style={pdfStyles.section}>
// // //         <View style={pdfStyles.row}>
// // //           <Text style={pdfStyles.label}>Username:</Text>
// // //           <Text style={pdfStyles.value}>{profile?.username || 'N/A'}</Text>
// // //         </View>
// // //         <View style={pdfStyles.row}>
// // //           <Text style={pdfStyles.label}>Email Address:</Text>
// // //           <Text style={pdfStyles.value}>{profile?.email || 'N/A'}</Text>
// // //         </View>
// // //         <View style={pdfStyles.row}>
// // //           <Text style={pdfStyles.label}>Member Since:</Text>
// // //           <Text style={pdfStyles.value}>{profile?.joined || 'N/A'}</Text>
// // //         </View>
// // //         <View style={pdfStyles.row}>
// // //           <Text style={pdfStyles.label}>Report Generated:</Text>
// // //           <Text style={pdfStyles.value}>{new Date().toLocaleDateString('en-US', { 
// // //             year: 'numeric', 
// // //             month: 'long', 
// // //             day: 'numeric',
// // //             hour: '2-digit',
// // //             minute: '2-digit'
// // //           })}</Text>
// // //         </View>
// // //       </View>

// // //       {/* Activity Statistics Section */}
// // //       <Text style={pdfStyles.subHeader}>Wellness Journey Statistics</Text>
// // //       <View style={pdfStyles.statsContainer}>
// // //         <View style={pdfStyles.statBox}>
// // //           <Text style={pdfStyles.statNumber}>{profile?.mood_history_count || 0}</Text>
// // //           <Text style={pdfStyles.statLabel}>Mood Entries</Text>
// // //         </View>
// // //         <View style={pdfStyles.statBox}>
// // //           <Text style={pdfStyles.statNumber}>{profile?.journal_entries_count || 0}</Text>
// // //           <Text style={pdfStyles.statLabel}>Journal Entries</Text>
// // //         </View>
// // //         <View style={pdfStyles.statBox}>
// // //           <Text style={pdfStyles.statNumber}>{profile?.therapy_sessions_count || 0}</Text>
// // //           <Text style={pdfStyles.statLabel}>Therapy Sessions</Text>
// // //         </View>
// // //       </View>

// // //       {/* Activity Summary Section */}
// // //       <Text style={pdfStyles.subHeader}>Activity Summary</Text>
// // //       <View style={pdfStyles.section}>
// // //         <View style={pdfStyles.row}>
// // //           <Text style={pdfStyles.label}>Mood Tracking:</Text>
// // //           <Text style={pdfStyles.value}>
// // //             {(profile?.mood_history_count || 0) > 0 ? 'Active - Regular emotional wellness monitoring' : 'Get started with mood tracking'}
// // //           </Text>
// // //         </View>
// // //         <View style={pdfStyles.row}>
// // //           <Text style={pdfStyles.label}>Recovery Tracker:</Text>
// // //           <Text style={pdfStyles.value}>
// // //             {(profile?.journal_entries_count || 0) > 0 ? 'Active - Daily progress monitoring in place' : 'Ready to begin your recovery journey'}
// // //           </Text>
// // //         </View>
// // //         <View style={pdfStyles.row}>
// // //           <Text style={pdfStyles.label}>Professional Support:</Text>
// // //           <Text style={pdfStyles.value}>
// // //             {(profile?.therapy_sessions_count || 0) > 0 
// // //               ? `${profile.therapy_sessions_count} therapy sessions completed` 
// // //               : 'Connect with professional therapists when ready'}
// // //           </Text>
// // //         </View>
// // //       </View>

// // //       {/* Additional Information */}
// // //       <Text style={pdfStyles.subHeader}>About This Report</Text>
// // //       <View style={pdfStyles.section}>
// // //         <Text style={{ marginBottom: 8, lineHeight: 1.5 }}>
// // //           This report contains your personal wellness journey data from EmoTrack. 
// // //           Your privacy is important to us, and this information is confidential.
// // //         </Text>
// // //         <Text style={{ marginBottom: 8, lineHeight: 1.5 }}>
// // //           Continue your mental wellness journey by regularly tracking your mood, 
// // //           engaging with recovery tools, and connecting with professional support when needed.
// // //         </Text>
// // //       </View>

// // //       {/* Footer */}
// // //       <Text style={pdfStyles.footer}>
// // //         EmoTrack - Your Mental Wellness Companion | Generated on {new Date().toLocaleDateString()}
// // //       </Text>
// // //     </Page>
// // //   </Document>
// // // );

// // // const Profile = () => {
// // //   const [profile, setProfile] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState('');
// // //   const [isEditing, setIsEditing] = useState(false);
// // //   const [editedProfile, setEditedProfile] = useState({});
  
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     fetchProfile();
// // //   }, []);

// // //   const fetchProfile = async () => {
// // //     try {
// // //       const data = await therapistService.getUserProfile();
// // //       setProfile(data);
// // //       setEditedProfile(data);
// // //     } catch (err) {
// // //       setError('Failed to load profile data');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Edit Profile handlers
// // //   const handleEditProfile = () => {
// // //     setIsEditing(true);
// // //     setEditedProfile(profile);
// // //   };

// // //   const handleCancelEdit = () => {
// // //     setIsEditing(false);
// // //     setEditedProfile(profile);
// // //   };

// // //   const handleSaveProfile = async () => {
// // //     try {
// // //       // Here you would make an API call to update the profile
// // //       // const updatedProfile = await therapistService.updateUserProfile(editedProfile);
      
// // //       setProfile(editedProfile);
// // //       setIsEditing(false);
// // //       alert('Profile updated successfully!');
// // //     } catch (err) {
// // //       console.error('Failed to update profile:', err);
// // //       setError('Failed to update profile');
// // //     }
// // //   };

// // //   const handleInputChange = (field, value) => {
// // //     setEditedProfile(prev => ({
// // //       ...prev,
// // //       [field]: value
// // //     }));
// // //   };

// // //   // Account Actions handlers - PDF Download now instead of JSON
// // //   const handleDownloadData = () => {
// // //     // This is now handled by the PDFDownloadLink component
// // //     console.log('PDF download initiated');
// // //   };

// // //   const handlePrivacySettings = () => {
// // //     alert('Privacy Settings functionality will be available soon!');
// // //   };

// // //   const handleDeleteAccount = () => {
// // //     // Your existing delete account logic
// // //     const isConfirmed = window.confirm(
// // //       'Are you sure you want to delete your account?\n\n' +
// // //       'This action cannot be undone and will permanently remove:\n' +
// // //       '• All your mood entries and progress data\n' +
// // //       '• Your journal entries and recovery tracker\n' +
// // //       '• All therapy session history\n' +
// // //       '• Your profile information\n\n' +
// // //       'Type "DELETE" to confirm this action.'
// // //     );

// // //     if (isConfirmed) {
// // //       const confirmationText = prompt('Please type "DELETE" to confirm account deletion:');
// // //       if (confirmationText === 'DELETE') {
// // //         handleAccountDeletion();
// // //       } else if (confirmationText !== null) {
// // //         alert('Account deletion cancelled. Please type "DELETE" exactly to confirm.');
// // //       }
// // //     }
// // //   };

// // //   const handleAccountDeletion = async () => {
// // //     try {
// // //       alert('Deleting account...');
// // //       setTimeout(() => {
// // //         alert('Account deleted successfully. You will be redirected to the home page.');
// // //         localStorage.clear();
// // //         sessionStorage.clear();
// // //         navigate('/', { replace: true });
// // //       }, 2000);
// // //     } catch (error) {
// // //       console.error('Failed to delete account:', error);
// // //       alert('Failed to delete account. Please try again or contact support.');
// // //     }
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="flex justify-center items-center min-h-screen">
// // //         <LoadingSpinner size="lg" />
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="min-h-screen bg-gray-50 p-4">
// // //         <div className="max-w-4xl mx-auto">
// // //           <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
// // //             {error}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 py-8">
// // //       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         {/* Header */}
// // //         <div className="text-center mb-8">
// // //           <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
// // //           <p className="mt-2 text-gray-600">
// // //             View your account information and activity summary
// // //           </p>
// // //         </div>

// // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //           {/* Profile Information */}
// // //           <div className="lg:col-span-1">
// // //             <div className="bg-white rounded-lg shadow p-6">
// // //               <div className="text-center mb-6">
// // //                 <div className="bg-violet-600 text-white rounded-full h-20 w-20 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
// // //                   {profile?.username?.charAt(0).toUpperCase()}
// // //                 </div>
// // //                 <h2 className="text-xl font-semibold text-gray-900">{profile?.username}</h2>
// // //                 <p className="text-gray-600">{profile?.email}</p>
// // //               </div>

// // //               <div className="space-y-4">
// // //                 <div className="flex items-center text-gray-600">
// // //                   <User className="h-5 w-5 mr-3" />
// // //                   <div className="flex-1">
// // //                     <p className="text-sm font-medium">Username</p>
// // //                     {isEditing ? (
// // //                       <input
// // //                         type="text"
// // //                         value={editedProfile.username || ''}
// // //                         onChange={(e) => handleInputChange('username', e.target.value)}
// // //                         className="text-sm border border-gray-300 rounded px-2 py-1 w-full mt-1"
// // //                       />
// // //                     ) : (
// // //                       <p className="text-sm">{profile?.username}</p>
// // //                     )}
// // //                   </div>
// // //                 </div>

// // //                 <div className="flex items-center text-gray-600">
// // //                   <Mail className="h-5 w-5 mr-3" />
// // //                   <div className="flex-1">
// // //                     <p className="text-sm font-medium">Email</p>
// // //                     {isEditing ? (
// // //                       <input
// // //                         type="email"
// // //                         value={editedProfile.email || ''}
// // //                         onChange={(e) => handleInputChange('email', e.target.value)}
// // //                         className="text-sm border border-gray-300 rounded px-2 py-1 w-full mt-1"
// // //                       />
// // //                     ) : (
// // //                       <p className="text-sm">{profile?.email}</p>
// // //                     )}
// // //                   </div>
// // //                 </div>

// // //                 <div className="flex items-center text-gray-600">
// // //                   <Calendar className="h-5 w-5 mr-3" />
// // //                   <div>
// // //                     <p className="text-sm font-medium">Member Since</p>
// // //                     <p className="text-sm">{profile?.joined}</p>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Edit/Save/Cancel Buttons */}
// // //               <div className="mt-6 space-y-2">
// // //                 {isEditing ? (
// // //                   <>
// // //                     <button 
// // //                       onClick={handleSaveProfile}
// // //                       className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
// // //                     >
// // //                       <Save className="h-4 w-4 mr-2" />
// // //                       Save Changes
// // //                     </button>
// // //                     <button 
// // //                       onClick={handleCancelEdit}
// // //                       className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
// // //                     >
// // //                       <X className="h-4 w-4 mr-2" />
// // //                       Cancel
// // //                     </button>
// // //                   </>
// // //                 ) : (
// // //                   <button 
// // //                     onClick={handleEditProfile}
// // //                     className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
// // //                   >
// // //                     <Edit className="h-4 w-4 mr-2" />
// // //                     Edit Profile
// // //                   </button>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Activity Summary */}
// // //           <div className="lg:col-span-2">
// // //             <div className="bg-white rounded-lg shadow p-6">
// // //               <h2 className="text-xl font-semibold mb-6">Activity Summary</h2>
              
// // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // //                 <div className="text-center p-4 bg-blue-50 rounded-lg">
// // //                   <Activity className="h-8 w-8 text-violet-600 mx-auto mb-2" />
// // //                   <h3 className="text-2xl font-bold text-gray-900">{profile?.mood_history_count || 0}</h3>
// // //                   <p className="text-sm text-gray-600">Mood Entries</p>
// // //                 </div>

// // //                 <div className="text-center p-4 bg-green-50 rounded-lg">
// // //                   <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
// // //                   <h3 className="text-2xl font-bold text-gray-900">{profile?.journal_entries_count || 0}</h3>
// // //                   <p className="text-sm text-gray-600">Journal Entries</p>
// // //                 </div>

// // //                 <div className="text-center p-4 bg-purple-50 rounded-lg">
// // //                   <MessageCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
// // //                   <h3 className="text-2xl font-bold text-gray-900">{profile?.therapy_sessions_count || 0}</h3>
// // //                   <p className="text-sm text-gray-600">Therapy Sessions</p>
// // //                 </div>
// // //               </div>

// // //               {/* Recent Activity */}
// // //               <div className="border-t border-gray-200 pt-6">
// // //                 <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                
// // //                 <div className="space-y-4">
// // //                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
// // //                     <div className="flex items-center">
// // //                       <Activity className="h-5 w-5 text-violet-600 mr-3" />
// // //                       <div>
// // //                         <p className="text-sm font-medium">Mood tracking streak</p>
// // //                         <p className="text-xs text-gray-600">Keep up the great work!</p>
// // //                       </div>
// // //                     </div>
// // //                     <span className="text-sm font-medium text-violet-600">Active</span>
// // //                   </div>

// // //                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
// // //                     <div className="flex items-center">
// // //                       <BookOpen className="h-5 w-5 text-green-600 mr-3" />
// // //                       <div>
// // //                         <p className="text-sm font-medium">Recovery tracker</p>
// // //                         <p className="text-xs text-gray-600">Monitor your progress daily</p>
// // //                       </div>
// // //                     </div>
// // //                     <span className="text-sm font-medium text-green-600">
// // //                       {(profile?.journal_entries_count || 0) > 0 ? 'Active' : 'Start tracking'}
// // //                     </span>
// // //                   </div>

// // //                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
// // //                     <div className="flex items-center">
// // //                       <MessageCircle className="h-5 w-5 text-purple-600 mr-3" />
// // //                       <div>
// // //                         <p className="text-sm font-medium">Therapy sessions</p>
// // //                         <p className="text-xs text-gray-600">Connect with professionals</p>
// // //                       </div>
// // //                     </div>
// // //                     <span className="text-sm font-medium text-purple-600">
// // //                       {profile?.therapy_sessions_count || 0} booked
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Account Actions - NOW WITH PDF DOWNLOAD */}
// // //               <div className="border-t border-gray-200 pt-6 mt-6">
// // //                 <h3 className="text-lg font-semibold mb-4">Account Actions</h3>
                
// // //                 <div className="space-y-3">
// // //                   {/* Download PDF Button - UPDATED */}
// // //                   <PDFDownloadLink 
// // //                     document={<ProfilePDF profile={profile} />} 
// // //                     fileName={`EmoTrack-Profile-${profile?.username}-${new Date().toISOString().split('T')[0]}.pdf`}
// // //                     className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group block"
// // //                   >
// // //                     {({ loading }) => (
// // //                       <div className="flex items-center justify-between">
// // //                         <div className="flex items-center">
// // //                           <Download className="h-5 w-5 text-blue-600 mr-3" />
// // //                           <span className="font-medium">
// // //                             {loading ? 'Generating PDF...' : 'Download My Data'}
// // //                           </span>
// // //                         </div>
// // //                         <span className="text-sm text-gray-600">
// // //                           {loading ? 'Please wait...' : 'Export your information as PDF'}
// // //                         </span>
// // //                       </div>
// // //                     )}
// // //                   </PDFDownloadLink>

// // //                   {/* Privacy Settings Button */}
// // //                   <button 
// // //                     onClick={handlePrivacySettings}
// // //                     className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group"
// // //                   >
// // //                     <div className="flex items-center justify-between">
// // //                       <div className="flex items-center">
// // //                         <Shield className="h-5 w-5 text-green-600 mr-3" />
// // //                         <span className="font-medium">Privacy Settings</span>
// // //                       </div>
// // //                       <span className="text-sm text-gray-600">Manage your privacy</span>
// // //                     </div>
// // //                   </button>

// // //                   {/* Delete Account Button */}
// // //                   <button 
// // //                     onClick={handleDeleteAccount}
// // //                     className="w-full text-left px-4 py-3 border border-red-300 rounded-lg hover:bg-red-50 transition-colors text-red-600 group"
// // //                   >
// // //                     <div className="flex items-center justify-between">
// // //                       <div className="flex items-center">
// // //                         <Trash2 className="h-5 w-5 text-red-600 mr-3" />
// // //                         <span className="font-medium">Delete Account</span>
// // //                       </div>
// // //                       <span className="text-sm text-red-500">Permanently delete your account</span>
// // //                     </div>
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Profile;
// // // export default Profile;
// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { therapistService } from '../services/therapistService';
// // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // import { 
// //   User, 
// //   Mail, 
// //   Calendar, 
// //   Activity, 
// //   BookOpen, 
// //   MessageCircle,
// //   Edit,
// //   Save,
// //   X,
// //   Download,
// //   Shield,
// //   Trash2,
// //   Phone,
// //   Award,
// //   TrendingUp,
// //   Heart,
// //   Lock,
// //   Settings
// // } from 'lucide-react';
// // import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
// // // Professional PDF styles
// // const pdfStyles = StyleSheet.create({
// //   page: {
// //     padding: 40,
// //     fontSize: 11,
// //     fontFamily: 'Helvetica',
// //     lineHeight: 1.6,
// //     backgroundColor: '#ffffff',
// //   },
// //   header: {
// //     fontSize: 28,
// //     textAlign: 'center',
// //     marginBottom: 30,
// //     color: '#1e40af',
// //     fontWeight: 'bold',
// //   },
// //   subHeader: {
// //     fontSize: 18,
// //     marginTop: 25,
// //     marginBottom: 15,
// //     color: '#1e40af',
// //     fontWeight: 'bold',
// //     borderBottom: '2px solid #1e40af',
// //     paddingBottom: 8,
// //   },
// //   section: {
// //     marginBottom: 20,
// //     padding: 15,
// //     backgroundColor: '#f8fafc',
// //     borderRadius: 8,
// //     border: '1px solid #e2e8f0',
// //   },
// //   row: {
// //     flexDirection: 'row',
// //     marginBottom: 10,
// //   },
// //   label: {
// //     fontWeight: 'bold',
// //     color: '#374151',
// //     width: '35%',
// //   },
// //   value: {
// //     color: '#6b7280',
// //     width: '65%',
// //   },
// //   statsContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     marginVertical: 25,
// //     padding: 20,
// //     backgroundColor: '#f1f5f9',
// //     borderRadius: 12,
// //   },
// //   statBox: {
// //     alignItems: 'center',
// //     padding: 15,
// //   },
// //   statNumber: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#1e40af',
// //     marginBottom: 8,
// //   },
// //   statLabel: {
// //     fontSize: 11,
// //     color: '#6b7280',
// //     textAlign: 'center',
// //   },
// //   footer: {
// //     position: 'absolute',
// //     bottom: 30,
// //     left: 40,
// //     right: 40,
// //     textAlign: 'center',
// //     fontSize: 10,
// //     color: '#9ca3af',
// //     borderTop: '1px solid #e5e7eb',
// //     paddingTop: 15,
// //   },
// // });
// // // Professional PDF Document Component
// // const ProfilePDF = ({ profile }) => (
// //   <Document>
// //     <Page size="A4" style={pdfStyles.page}>
// //       <Text style={pdfStyles.header}>EmoTrack Professional Profile Report</Text>
      
// //       <Text style={pdfStyles.subHeader}>Profile Information</Text>
// //       <View style={pdfStyles.section}>
// //         <View style={pdfStyles.row}>
// //           <Text style={pdfStyles.label}>Username:</Text>
// //           <Text style={pdfStyles.value}>{profile?.username || 'N/A'}</Text>
// //         </View>
// //         <View style={pdfStyles.row}>
// //           <Text style={pdfStyles.label}>Email Address:</Text>
// //           <Text style={pdfStyles.value}>{profile?.email || 'N/A'}</Text>
// //         </View>
// //         <View style={pdfStyles.row}>
// //           <Text style={pdfStyles.label}>Member Since:</Text>
// //           <Text style={pdfStyles.value}>{profile?.joined || 'N/A'}</Text>
// //         </View>
// //         <View style={pdfStyles.row}>
// //           <Text style={pdfStyles.label}>Report Generated:</Text>
// //           <Text style={pdfStyles.value}>{new Date().toLocaleDateString('en-US', { 
// //             year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
// //           })}</Text>
// //         </View>
// //       </View>
// //       <Text style={pdfStyles.subHeader}>Wellness Journey Statistics</Text>
// //       <View style={pdfStyles.statsContainer}>
// //         <View style={pdfStyles.statBox}>
// //           <Text style={pdfStyles.statNumber}>{profile?.mood_history_count || 0}</Text>
// //           <Text style={pdfStyles.statLabel}>Mood Entries</Text>
// //         </View>
// //         <View style={pdfStyles.statBox}>
// //           <Text style={pdfStyles.statNumber}>{profile?.journal_entries_count || 0}</Text>
// //           <Text style={pdfStyles.statLabel}>Journal Entries</Text>
// //         </View>
// //         <View style={pdfStyles.statBox}>
// //           <Text style={pdfStyles.statNumber}>{profile?.therapy_sessions_count || 0}</Text>
// //           <Text style={pdfStyles.statLabel}>Therapy Sessions</Text>
// //         </View>
// //       </View>
// //       <Text style={pdfStyles.footer}>
// //         EmoTrack - Your Mental Wellness Companion | Generated on {new Date().toLocaleDateString()}
// //       </Text>
// //     </Page>
// //   </Document>
// // );
// // const Profile = () => {
// //   const [profile, setProfile] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editedProfile, setEditedProfile] = useState({});
// //   const navigate = useNavigate();
// //   useEffect(() => {
// //     fetchProfile();
// //   }, []);
// //   const fetchProfile = async () => {
// //     try {
// //       const data = await therapistService.getUserProfile();
// //       setProfile(data);
// //       setEditedProfile(data);
// //     } catch (err) {
// //       setError('Failed to load profile data');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };
// //   const handleEditProfile = () => {
// //     setIsEditing(true);
// //     setEditedProfile(profile);
// //   };
// //   const handleCancelEdit = () => {
// //     setIsEditing(false);
// //     setEditedProfile(profile);
// //   };
// //   const handleSaveProfile = async () => {
// //     try {
// //       setProfile(editedProfile);
// //       setIsEditing(false);
// //       alert('Profile updated successfully!');
// //     } catch (err) {
// //       console.error('Failed to update profile:', err);
// //       setError('Failed to update profile');
// //     }
// //   };
// //   const handleInputChange = (field, value) => {
// //     setEditedProfile(prev => ({
// //       ...prev,
// //       [field]: value
// //     }));
// //   };
// //   const handlePrivacySettings = () => {
// //     navigate('/privacy-settings');
// //   };
// //   const handleDeleteAccount = () => {
// //     const isConfirmed = window.confirm(
// //       'Are you sure you want to delete your account?\n\n' +
// //       'This action cannot be undone and will permanently remove:\n' +
// //       '• All your mood entries and progress data\n' +
// //       '• Your journal entries and recovery tracker\n' +
// //       '• All therapy session history\n' +
// //       '• Your profile information\n\n' +
// //       'Type "DELETE" to confirm this action.'
// //     );
// //     if (isConfirmed) {
// //       const confirmationText = prompt('Please type "DELETE" to confirm account deletion:');
// //       if (confirmationText === 'DELETE') {
// //         handleAccountDeletion();
// //       } else if (confirmationText !== null) {
// //         alert('Account deletion cancelled. Please type "DELETE" exactly to confirm.');
// //       }
// //     }
// //   };
// //   const handleAccountDeletion = async () => {
// //     try {
// //       alert('Deleting account...');
// //       setTimeout(() => {
// //         alert('Account deleted successfully. You will be redirected to the home page.');
// //         localStorage.clear();
// //         sessionStorage.clear();
// //         navigate('/', { replace: true });
// //       }, 2000);
// //     } catch (error) {
// //       console.error('Failed to delete account:', error);
// //       alert('Failed to delete account. Please try again or contact support.');
// //     }
// //   };
// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
// //         <div className="text-center space-y-6">
// //           <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
// //             <User className="w-8 h-8 text-white animate-pulse" />
// //           </div>
// //           <LoadingSpinner size="lg" />
// //           <p className="text-gray-600 font-medium">Loading your profile...</p>
// //         </div>
// //       </div>
// //     );
// //   }
// //   if (error) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
// //         <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
// //           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
// //             <X className="w-8 h-8 text-red-600" />
// //           </div>
// //           <h3 className="text-xl font-bold text-red-800 mb-2">Unable to Load Profile</h3>
// //           <p className="text-red-600 mb-6">{error}</p>
// //           <button
// //             onClick={fetchProfile}
// //             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
// //           >
// //             Try Again
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }
// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
// //         {/* Professional Header */}
// //         <div className="text-center mb-12">
// //           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl mb-6 shadow-lg">
// //             <User className="w-8 h-8 text-blue-700" />
// //           </div>
// //           <h1 className="text-4xl font-bold text-gray-800 mb-4">My Profile</h1>
// //           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// //             Manage your account information and view your wellness journey progress
// //           </p>
// //         </div>
// //         <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          
// //           {/* Profile Information Card */}
// //           <div className="xl:col-span-2">
// //             <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              
// //               {/* Profile Header */}
// //               <div className="bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 p-8 text-white relative overflow-hidden">
// //                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
// //                 <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
// //                 <div className="relative z-10 text-center">
// //                   <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold backdrop-blur-sm border-2 border-white/30">
// //                     {profile?.username?.charAt(0)?.toUpperCase() || 'U'}
// //                   </div>
// //                   <h2 className="text-2xl font-bold mb-2">{profile?.username}</h2>
// //                   <p className="text-blue-100 font-medium">{profile?.email}</p>
// //                   <div className="mt-4 inline-flex items-center px-3 py-1 bg-emerald-500/20 rounded-full border border-emerald-400/30">
// //                     <Award className="w-4 h-4 text-emerald-300 mr-2" />
// //                     <span className="text-emerald-200 text-sm font-medium">Active Member</span>
// //                   </div>
// //                 </div>
// //               </div>
// //               {/* Profile Details */}
// //               <div className="p-8 space-y-6">
                
// //                 {/* Username Field */}
// //                 <div className="space-y-3">
// //                   <div className="flex items-center">
// //                     <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
// //                       <User className="w-5 h-5 text-blue-600" />
// //                     </div>
// //                     <div className="flex-1">
// //                       <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-1">
// //                         Username
// //                       </label>
// //                       {isEditing ? (
// //                         <input
// //                           type="text"
// //                           value={editedProfile.username || ''}
// //                           onChange={(e) => handleInputChange('username', e.target.value)}
// //                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 transition-all duration-300 font-medium"
// //                         />
// //                       ) : (
// //                         <p className="text-lg font-semibold text-gray-800">{profile?.username}</p>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //                 {/* Email Field */}
// //                 <div className="space-y-3">
// //                   <div className="flex items-center">
// //                     <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
// //                       <Mail className="w-5 h-5 text-emerald-600" />
// //                     </div>
// //                     <div className="flex-1">
// //                       <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-1">
// //                         Email Address
// //                       </label>
// //                       {isEditing ? (
// //                         <input
// //                           type="email"
// //                           value={editedProfile.email || ''}
// //                           onChange={(e) => handleInputChange('email', e.target.value)}
// //                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 transition-all duration-300 font-medium"
// //                         />
// //                       ) : (
// //                         <p className="text-lg font-semibold text-gray-800">{profile?.email}</p>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //                 {/* Member Since Field */}
// //                 <div className="space-y-3">
// //                   <div className="flex items-center">
// //                     <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
// //                       <Calendar className="w-5 h-5 text-purple-600" />
// //                     </div>
// //                     <div className="flex-1">
// //                       <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-1">
// //                         Member Since
// //                       </label>
// //                       <p className="text-lg font-semibold text-gray-800">{profile?.joined || 'Recently joined'}</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 {/* Action Buttons */}
// //                 <div className="pt-6 space-y-3">
// //                   {isEditing ? (
// //                     <div className="flex space-x-3">
// //                       <button 
// //                         onClick={handleSaveProfile}
// //                         className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
// //                       >
// //                         <Save className="w-5 h-5 mr-2" />
// //                         Save Changes
// //                       </button>
// //                       <button 
// //                         onClick={handleCancelEdit}
// //                         className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
// //                       >
// //                         <X className="w-5 h-5 mr-2" />
// //                         Cancel
// //                       </button>
// //                     </div>
// //                   ) : (
// //                     <button 
// //                       onClick={handleEditProfile}
// //                       className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
// //                     >
// //                       <Edit className="w-5 h-5 mr-2" />
// //                       Edit Profile
// //                     </button>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           {/* Activity & Settings Panel */}
// //           <div className="xl:col-span-3">
// //             <div className="space-y-8">
              
// //               {/* Activity Summary Card */}
// //               <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
// //                 <div className="flex items-center mb-8">
// //                   <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-2xl flex items-center justify-center mr-4">
// //                     <TrendingUp className="w-6 h-6 text-indigo-700" />
// //                   </div>
// //                   <div>
// //                     <h2 className="text-2xl font-bold text-gray-800">Wellness Journey</h2>
// //                     <p className="text-gray-600">Track your mental health progress</p>
// //                   </div>
// //                 </div>
                
// //                 {/* Statistics Grid */}
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// //                   <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
// //                     <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
// //                       <Activity className="w-6 h-6 text-white" />
// //                     </div>
// //                     <h3 className="text-3xl font-bold text-gray-800 mb-2">{profile?.mood_history_count || 0}</h3>
// //                     <p className="text-blue-700 font-semibold">Mood Entries</p>
// //                   </div>
// //                   <div className="bg-gradient-to-br from-emerald-50 to-green-100 border border-emerald-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
// //                     <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
// //                       <BookOpen className="w-6 h-6 text-white" />
// //                     </div>
// //                     <h3 className="text-3xl font-bold text-gray-800 mb-2">{profile?.journal_entries_count || 0}</h3>
// //                     <p className="text-emerald-700 font-semibold">Journal Entries</p>
// //                   </div>
// //                   <div className="bg-gradient-to-br from-purple-50 to-indigo-100 border border-purple-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
// //                     <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
// //                       <MessageCircle className="w-6 h-6 text-white" />
// //                     </div>
// //                     <h3 className="text-3xl font-bold text-gray-800 mb-2">{profile?.therapy_sessions_count || 0}</h3>
// //                     <p className="text-purple-700 font-semibold">Therapy Sessions</p>
// //                   </div>
// //                 </div>
// //                 {/* Recent Activity */}
// //                 <div className="border-t border-gray-200 pt-8">
// //                   <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h3>
                  
// //                   <div className="space-y-4">
// //                     <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 hover:shadow-md transition-all duration-300">
// //                       <div className="flex items-center">
// //                         <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
// //                           <Heart className="w-5 h-5 text-white" />
// //                         </div>
// //                         <div>
// //                           <p className="font-semibold text-gray-800">Mood tracking streak</p>
// //                           <p className="text-sm text-blue-600">Keep up the great work!</p>
// //                         </div>
// //                       </div>
// //                       <span className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold text-sm">Active</span>
// //                     </div>
// //                     <div className="flex items-center justify-between bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-4 hover:shadow-md transition-all duration-300">
// //                       <div className="flex items-center">
// //                         <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center mr-4">
// //                           <BookOpen className="w-5 h-5 text-white" />
// //                         </div>
// //                         <div>
// //                           <p className="font-semibold text-gray-800">Recovery tracker</p>
// //                           <p className="text-sm text-emerald-600">Monitor your progress daily</p>
// //                         </div>
// //                       </div>
// //                       <span className={`px-4 py-2 rounded-xl font-semibold text-sm ${
// //                         (profile?.journal_entries_count || 0) > 0 
// //                           ? 'bg-emerald-600 text-white' 
// //                           : 'bg-gray-200 text-gray-600'
// //                       }`}>
// //                         {(profile?.journal_entries_count || 0) > 0 ? 'Active' : 'Start tracking'}
// //                       </span>
// //                     </div>
// //                     <div className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-4 hover:shadow-md transition-all duration-300">
// //                       <div className="flex items-center">
// //                         <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
// //                           <MessageCircle className="w-5 h-5 text-white" />
// //                         </div>
// //                         <div>
// //                           <p className="font-semibold text-gray-800">Therapy sessions</p>
// //                           <p className="text-sm text-purple-600">Connect with professionals</p>
// //                         </div>
// //                       </div>
// //                       <span className="bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold text-sm">
// //                         {profile?.therapy_sessions_count || 0} booked
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //               {/* Account Management Card */}
// //               <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
// //                 <div className="flex items-center mb-8">
// //                   <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mr-4">
// //                     <Settings className="w-6 h-6 text-gray-700" />
// //                   </div>
// //                   <div>
// //                     <h2 className="text-2xl font-bold text-gray-800">Account Management</h2>
// //                     <p className="text-gray-600">Manage your data and privacy settings</p>
// //                   </div>
// //                 </div>
                
// //                 <div className="space-y-4">
// //                   {/* Download Data */}
// //                   <PDFDownloadLink 
// //                     document={<ProfilePDF profile={profile} />} 
// //                     fileName={`EmoTrack-Profile-${profile?.username}-${new Date().toISOString().split('T')[0]}.pdf`}
// //                     className="w-full"
// //                   >
// //                     {({ loading }) => (
// //                       <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
// //                         <div className="flex items-center justify-between">
// //                           <div className="flex items-center">
// //                             <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
// //                               <Download className="w-6 h-6 text-white" />
// //                             </div>
// //                             <div>
// //                               <p className="font-bold text-gray-800 text-lg">Download Profile Data</p>
// //                               <p className="text-blue-600 font-medium">
// //                                 {loading ? 'Generating PDF...' : 'Export your wellness data as PDF'}
// //                               </p>
// //                             </div>
// //                           </div>
// //                           <span className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold">
// //                             {loading ? 'Processing...' : 'Download'}
// //                           </span>
// //                         </div>
// //                       </div>
// //                     )}
// //                   </PDFDownloadLink>
// //                   {/* Privacy Settings */}
// //                   <button 
// //                     onClick={handlePrivacySettings}
// //                     className="w-full bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
// //                   >
// //                     <div className="flex items-center justify-between">
// //                       <div className="flex items-center">
// //                         <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
// //                           <Lock className="w-6 h-6 text-white" />
// //                         </div>
// //                         <div className="text-left">
// //                           <p className="font-bold text-gray-800 text-lg">Privacy & Security</p>
// //                           <p className="text-emerald-600 font-medium">Manage your privacy preferences</p>
// //                         </div>
// //                       </div>
// //                       <span className="bg-emerald-600 text-white px-4 py-2 rounded-xl font-semibold">
// //                         Settings
// //                       </span>
// //                     </div>
// //                   </button>
// //                   {/* Delete Account */}
// //                   <button 
// //                     onClick={handleDeleteAccount}
// //                     className="w-full bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
// //                   >
// //                     <div className="flex items-center justify-between">
// //                       <div className="flex items-center">
// //                         <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
// //                           <Trash2 className="w-6 h-6 text-white" />
// //                         </div>
// //                         <div className="text-left">
// //                           <p className="font-bold text-red-800 text-lg">Delete Account</p>
// //                           <p className="text-red-600 font-medium">Permanently remove your account and data</p>
// //                         </div>
// //                       </div>
// //                       <span className="bg-red-600 text-white px-4 py-2 rounded-xl font-semibold">
// //                         Delete
// //                       </span>
// //                     </div>
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // export default Profile;
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { therapistService } from '../services/therapistService';
// import LoadingSpinner from '../components/ui/LoadingSpinner';
// import { 
//   User, 
//   Mail, 
//   Calendar, 
//   Activity, 
//   BookOpen, 
//   MessageCircle,
//   Edit,
//   Save,
//   X,
//   Download,
//   Shield,
//   Trash2,
//   Phone,
//   Award,
//   TrendingUp,
//   Heart,
//   Lock,
//   Settings,
//   CheckCircle
// } from 'lucide-react';
// import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// // Professional PDF styles
// const pdfStyles = StyleSheet.create({
//   page: {
//     padding: 40,
//     fontSize: 11,
//     fontFamily: 'Helvetica',
//     lineHeight: 1.6,
//     backgroundColor: '#ffffff',
//   },
//   header: {
//     fontSize: 28,
//     textAlign: 'center',
//     marginBottom: 30,
//     color: '#1e40af',
//     fontWeight: 'bold',
//   },
//   subHeader: {
//     fontSize: 18,
//     marginTop: 25,
//     marginBottom: 15,
//     color: '#1e40af',
//     fontWeight: 'bold',
//     borderBottom: '2px solid #1e40af',
//     paddingBottom: 8,
//   },
//   section: {
//     marginBottom: 20,
//     padding: 15,
//     backgroundColor: '#f8fafc',
//     borderRadius: 8,
//     border: '1px solid #e2e8f0',
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   label: {
//     fontWeight: 'bold',
//     color: '#374151',
//     width: '35%',
//   },
//   value: {
//     color: '#6b7280',
//     width: '65%',
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 25,
//     padding: 20,
//     backgroundColor: '#f1f5f9',
//     borderRadius: 12,
//   },
//   statBox: {
//     alignItems: 'center',
//     padding: 15,
//   },
//   statNumber: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#1e40af',
//     marginBottom: 8,
//   },
//   statLabel: {
//     fontSize: 11,
//     color: '#6b7280',
//     textAlign: 'center',
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 30,
//     left: 40,
//     right: 40,
//     textAlign: 'center',
//     fontSize: 10,
//     color: '#9ca3af',
//     borderTop: '1px solid #e5e7eb',
//     paddingTop: 15,
//   },
// });

// // Professional PDF Document Component
// const ProfilePDF = ({ profile }) => (
//   <Document>
//     <Page size="A4" style={pdfStyles.page}>
//       <Text style={pdfStyles.header}>EmoTrack Professional Profile Report</Text>
      
//       <Text style={pdfStyles.subHeader}>Profile Information</Text>
//       <View style={pdfStyles.section}>
//         <View style={pdfStyles.row}>
//           <Text style={pdfStyles.label}>Username:</Text>
//           <Text style={pdfStyles.value}>{profile?.username || 'N/A'}</Text>
//         </View>
//         <View style={pdfStyles.row}>
//           <Text style={pdfStyles.label}>Email Address:</Text>
//           <Text style={pdfStyles.value}>{profile?.email || 'N/A'}</Text>
//         </View>
//         <View style={pdfStyles.row}>
//           <Text style={pdfStyles.label}>Member Since:</Text>
//           <Text style={pdfStyles.value}>{profile?.joined || 'N/A'}</Text>
//         </View>
//         <View style={pdfStyles.row}>
//           <Text style={pdfStyles.label}>Report Generated:</Text>
//           <Text style={pdfStyles.value}>{new Date().toLocaleDateString('en-US', { 
//             year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
//           })}</Text>
//         </View>
//       </View>

//       <Text style={pdfStyles.subHeader}>Wellness Journey Statistics</Text>
//       <View style={pdfStyles.statsContainer}>
//         <View style={pdfStyles.statBox}>
//           <Text style={pdfStyles.statNumber}>{profile?.mood_history_count || 0}</Text>
//           <Text style={pdfStyles.statLabel}>Mood Entries</Text>
//         </View>
//         <View style={pdfStyles.statBox}>
//           <Text style={pdfStyles.statNumber}>{profile?.journal_entries_count || 0}</Text>
//           <Text style={pdfStyles.statLabel}>Journal Entries</Text>
//         </View>
//         <View style={pdfStyles.statBox}>
//           <Text style={pdfStyles.statNumber}>{profile?.therapy_sessions_count || 0}</Text>
//           <Text style={pdfStyles.statLabel}>Therapy Sessions</Text>
//         </View>
//       </View>

//       <Text style={pdfStyles.footer}>
//         EmoTrack - Your Mental Wellness Companion | Generated on {new Date().toLocaleDateString()}
//       </Text>
//     </Page>
//   </Document>
// );

// const Profile = () => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProfile, setEditedProfile] = useState({});
  
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   // Fetch profile data from backend
//   const fetchProfile = async () => {
//     try {
//       setLoading(true);
//       setError('');
//       console.log('🔄 Fetching profile data...');
      
//       const data = await therapistService.getUserProfile();
//       console.log('✅ Profile data received:', data);
      
//       setProfile(data);
//       setEditedProfile(data); // Initialize edit form with current data
//     } catch (err) {
//       console.error('❌ Failed to fetch profile:', err);
//       setError('Failed to load profile data. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEditProfile = () => {
//     setIsEditing(true);
//     setEditedProfile(profile); // Reset edited profile to current profile data
//     setError('');
//     setSuccess('');
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false);
//     setEditedProfile(profile); // Reset changes
//     setError('');
//     setSuccess('');
//   };

//   // Save profile changes to backend and refresh data
//   const handleSaveProfile = async () => {
//     try {
//       setSaving(true);
//       setError('');
//       setSuccess('');
      
//       console.log('💾 Saving profile changes:', editedProfile);
      
//       // Validate required fields
//       if (!editedProfile.username || !editedProfile.email) {
//         throw new Error('Username and email are required');
//       }
      
//       // Call API to update profile in backend
//       const updatedProfile = await therapistService.updateUserProfile(editedProfile);
//       console.log('✅ Profile updated successfully:', updatedProfile);
      
//       // Update local state with the response from backend
//       setProfile(updatedProfile);
//       setEditedProfile(updatedProfile);
//       setIsEditing(false);
//       setSuccess('Profile updated successfully!');
      
//       // Auto-hide success message after 3 seconds
//       setTimeout(() => setSuccess(''), 3000);
      
//     } catch (err) {
//       console.error('❌ Failed to update profile:', err);
//       setError(err.message || 'Failed to update profile. Please try again.');
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setEditedProfile(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handlePrivacySettings = () => {
//     navigate('/privacy-settings');
//   };

//   const handleDeleteAccount = () => {
//     const isConfirmed = window.confirm(
//       'Are you sure you want to delete your account?\n\n' +
//       'This action cannot be undone and will permanently remove:\n' +
//       '• All your mood entries and progress data\n' +
//       '• Your journal entries and recovery tracker\n' +
//       '• All therapy session history\n' +
//       '• Your profile information\n\n' +
//       'Type "DELETE" to confirm this action.'
//     );

//     if (isConfirmed) {
//       const confirmationText = prompt('Please type "DELETE" to confirm account deletion:');
//       if (confirmationText === 'DELETE') {
//         handleAccountDeletion();
//       } else if (confirmationText !== null) {
//         alert('Account deletion cancelled. Please type "DELETE" exactly to confirm.');
//       }
//     }
//   };

//   const handleAccountDeletion = async () => {
//     try {
//       console.log('🗑️ Initiating account deletion...');
      
//       // Call API to delete account
//       await therapistService.deleteUserAccount();
      
//       alert('Account deleted successfully. You will be redirected to the home page.');
      
//       // Clear all local storage
//       localStorage.clear();
//       sessionStorage.clear();
      
//       // Redirect to home page
//       navigate('/', { replace: true });
      
//     } catch (error) {
//       console.error('❌ Failed to delete account:', error);
//       alert('Failed to delete account. Please try again or contact support.');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
//         <div className="text-center space-y-6">
//           <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
//             <User className="w-8 h-8 text-white animate-pulse" />
//           </div>
//           <LoadingSpinner size="lg" />
//           <div className="space-y-2">
//             <p className="text-gray-600 font-medium">Loading your profile...</p>
//             <p className="text-gray-500 text-sm">Please wait while we fetch your data</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error && !profile) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
//         <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
//             <X className="w-8 h-8 text-red-600" />
//           </div>
//           <h3 className="text-xl font-bold text-red-800 mb-2">Unable to Load Profile</h3>
//           <p className="text-red-600 mb-6">{error}</p>
//           <button
//             onClick={fetchProfile}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
//         {/* Professional Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl mb-6 shadow-lg">
//             <User className="w-8 h-8 text-blue-700" />
//           </div>
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Professional Profile</h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Manage your account information and view your wellness journey progress
//           </p>
//         </div>

//         {/* Success/Error Messages */}
//         {success && (
//           <div className="max-w-4xl mx-auto mb-8">
//             <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-4">
//               <div className="flex items-center">
//                 <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
//                 <p className="font-semibold text-emerald-800">{success}</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {error && (
//           <div className="max-w-4xl mx-auto mb-8">
//             <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-4">
//               <div className="flex items-center">
//                 <X className="w-6 h-6 text-red-600 mr-3" />
//                 <p className="font-semibold text-red-800">{error}</p>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          
//           {/* Profile Information Card */}
//           <div className="xl:col-span-2">
//             <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              
//               {/* Profile Header */}
//               <div className="bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 p-8 text-white relative overflow-hidden">
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
//                 <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
//                 <div className="relative z-10 text-center">
//                   <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold backdrop-blur-sm border-2 border-white/30">
//                     {profile?.username?.charAt(0)?.toUpperCase() || 'U'}
//                   </div>
//                   <h2 className="text-2xl font-bold mb-2">{profile?.username}</h2>
//                   <p className="text-blue-100 font-medium">{profile?.email}</p>
//                   <div className="mt-4 inline-flex items-center px-3 py-1 bg-emerald-500/20 rounded-full border border-emerald-400/30">
//                     <Award className="w-4 h-4 text-emerald-300 mr-2" />
//                     <span className="text-emerald-200 text-sm font-medium">Active Member</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Profile Details */}
//               <div className="p-8 space-y-6">
                
//                 {/* Username Field */}
//                 <div className="space-y-3">
//                   <div className="flex items-center">
//                     <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
//                       <User className="w-5 h-5 text-blue-600" />
//                     </div>
//                     <div className="flex-1">
//                       <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-1">
//                         Username
//                       </label>
//                       {isEditing ? (
//                         <input
//                           type="text"
//                           value={editedProfile.username || ''}
//                           onChange={(e) => handleInputChange('username', e.target.value)}
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 transition-all duration-300 font-medium"
//                           placeholder="Enter your username"
//                         />
//                       ) : (
//                         <p className="text-lg font-semibold text-gray-800">{profile?.username}</p>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Email Field */}
//                 <div className="space-y-3">
//                   <div className="flex items-center">
//                     <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
//                       <Mail className="w-5 h-5 text-emerald-600" />
//                     </div>
//                     <div className="flex-1">
//                       <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-1">
//                         Email Address
//                       </label>
//                       {isEditing ? (
//                         <input
//                           type="email"
//                           value={editedProfile.email || ''}
//                           onChange={(e) => handleInputChange('email', e.target.value)}
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 transition-all duration-300 font-medium"
//                           placeholder="Enter your email address"
//                         />
//                       ) : (
//                         <p className="text-lg font-semibold text-gray-800">{profile?.email}</p>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Member Since Field */}
//                 <div className="space-y-3">
//                   <div className="flex items-center">
//                     <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
//                       <Calendar className="w-5 h-5 text-purple-600" />
//                     </div>
//                     <div className="flex-1">
//                       <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-1">
//                         Member Since
//                       </label>
//                       <p className="text-lg font-semibold text-gray-800">{profile?.joined || 'Recently joined'}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="pt-6 space-y-3">
//                   {isEditing ? (
//                     <div className="flex space-x-3">
//                       <button 
//                         onClick={handleSaveProfile}
//                         disabled={saving}
//                         className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
//                       >
//                         {saving ? (
//                           <>
//                             <LoadingSpinner size="sm" />
//                             <span className="ml-2">Saving...</span>
//                           </>
//                         ) : (
//                           <>
//                             <Save className="w-5 h-5 mr-2" />
//                             Save Changes
//                           </>
//                         )}
//                       </button>
//                       <button 
//                         onClick={handleCancelEdit}
//                         disabled={saving}
//                         className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 disabled:from-gray-300 disabled:to-gray-400 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
//                       >
//                         <X className="w-5 h-5 mr-2" />
//                         Cancel
//                       </button>
//                     </div>
//                   ) : (
//                     <button 
//                       onClick={handleEditProfile}
//                       className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
//                     >
//                       <Edit className="w-5 h-5 mr-2" />
//                       Edit Profile
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Activity & Settings Panel */}
//           <div className="xl:col-span-3">
//             <div className="space-y-8">
              
//               {/* Activity Summary Card */}
//               <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
//                 <div className="flex items-center mb-8">
//                   <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-2xl flex items-center justify-center mr-4">
//                     <TrendingUp className="w-6 h-6 text-indigo-700" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-800">Wellness Journey</h2>
//                     <p className="text-gray-600">Track your mental health progress</p>
//                   </div>
//                 </div>
                
//                 {/* Statistics Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                   <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
//                     <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
//                       <Activity className="w-6 h-6 text-white" />
//                     </div>
//                     <h3 className="text-3xl font-bold text-gray-800 mb-2">{profile?.mood_history_count || 0}</h3>
//                     <p className="text-blue-700 font-semibold">Mood Entries</p>
//                   </div>

//                   <div className="bg-gradient-to-br from-emerald-50 to-green-100 border border-emerald-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
//                     <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
//                       <BookOpen className="w-6 h-6 text-white" />
//                     </div>
//                     <h3 className="text-3xl font-bold text-gray-800 mb-2">{profile?.journal_entries_count || 0}</h3>
//                     <p className="text-emerald-700 font-semibold">Journal Entries</p>
//                   </div>

//                   <div className="bg-gradient-to-br from-purple-50 to-indigo-100 border border-purple-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
//                     <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
//                       <MessageCircle className="w-6 h-6 text-white" />
//                     </div>
//                     <h3 className="text-3xl font-bold text-gray-800 mb-2">{profile?.therapy_sessions_count || 0}</h3>
//                     <p className="text-purple-700 font-semibold">Therapy Sessions</p>
//                   </div>
//                 </div>

//                 {/* Recent Activity */}
//                 <div className="border-t border-gray-200 pt-8">
//                   <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h3>
                  
//                   <div className="space-y-4">
//                     <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 hover:shadow-md transition-all duration-300">
//                       <div className="flex items-center">
//                         <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
//                           <Heart className="w-5 h-5 text-white" />
//                         </div>
//                         <div>
//                           <p className="font-semibold text-gray-800">Mood tracking streak</p>
//                           <p className="text-sm text-blue-600">Keep up the great work!</p>
//                         </div>
//                       </div>
//                       <span className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold text-sm">Active</span>
//                     </div>

//                     <div className="flex items-center justify-between bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-4 hover:shadow-md transition-all duration-300">
//                       <div className="flex items-center">
//                         <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center mr-4">
//                           <BookOpen className="w-5 h-5 text-white" />
//                         </div>
//                         <div>
//                           <p className="font-semibold text-gray-800">Recovery tracker</p>
//                           <p className="text-sm text-emerald-600">Monitor your progress daily</p>
//                         </div>
//                       </div>
//                       <span className={`px-4 py-2 rounded-xl font-semibold text-sm ${
//                         (profile?.journal_entries_count || 0) > 0 
//                           ? 'bg-emerald-600 text-white' 
//                           : 'bg-gray-200 text-gray-600'
//                       }`}>
//                         {(profile?.journal_entries_count || 0) > 0 ? 'Active' : 'Start tracking'}
//                       </span>
//                     </div>

//                     <div className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-4 hover:shadow-md transition-all duration-300">
//                       <div className="flex items-center">
//                         <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
//                           <MessageCircle className="w-5 h-5 text-white" />
//                         </div>
//                         <div>
//                           <p className="font-semibold text-gray-800">Therapy sessions</p>
//                           <p className="text-sm text-purple-600">Connect with professionals</p>
//                         </div>
//                       </div>
//                       <span className="bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold text-sm">
//                         {profile?.therapy_sessions_count || 0} booked
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Account Management Card */}
//               <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
//                 <div className="flex items-center mb-8">
//                   <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mr-4">
//                     <Settings className="w-6 h-6 text-gray-700" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-800">Account Management</h2>
//                     <p className="text-gray-600">Manage your data and privacy settings</p>
//                   </div>
//                 </div>
                
//                 <div className="space-y-4">
//                   {/* Download Data */}
//                   <PDFDownloadLink 
//                     document={<ProfilePDF profile={profile} />} 
//                     fileName={`EmoTrack-Profile-${profile?.username}-${new Date().toISOString().split('T')[0]}.pdf`}
//                     className="w-full"
//                   >
//                     {({ loading }) => (
//                       <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center">
//                             <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
//                               <Download className="w-6 h-6 text-white" />
//                             </div>
//                             <div>
//                               <p className="font-bold text-gray-800 text-lg">Download Profile Data</p>
//                               <p className="text-blue-600 font-medium">
//                                 {loading ? 'Generating PDF...' : 'Export your wellness data as PDF'}
//                               </p>
//                             </div>
//                           </div>
//                           <span className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold">
//                             {loading ? 'Processing...' : 'Download'}
//                           </span>
//                         </div>
//                       </div>
//                     )}
//                   </PDFDownloadLink>

//                   {/* Privacy Settings */}
//                   <button 
//                     onClick={handlePrivacySettings}
//                     className="w-full bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
//                   >
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center">
//                         <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
//                           <Lock className="w-6 h-6 text-white" />
//                         </div>
//                         <div className="text-left">
//                           <p className="font-bold text-gray-800 text-lg">Privacy & Security</p>
//                           <p className="text-emerald-600 font-medium">Manage your privacy preferences</p>
//                         </div>
//                       </div>
//                       <span className="bg-emerald-600 text-white px-4 py-2 rounded-xl font-semibold">
//                         Settings
//                       </span>
//                     </div>
//                   </button>

//                   {/* Delete Account */}
//                   <button 
//                     onClick={handleDeleteAccount}
//                     className="w-full bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
//                   >
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center">
//                         <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
//                           <Trash2 className="w-6 h-6 text-white" />
//                         </div>
//                         <div className="text-left">
//                           <p className="font-bold text-red-800 text-lg">Delete Account</p>
//                           <p className="text-red-600 font-medium">Permanently remove your account and data</p>
//                         </div>
//                       </div>
//                       <span className="bg-red-600 text-white px-4 py-2 rounded-xl font-semibold">
//                         Delete
//                       </span>
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

//  Profile.js code;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { therapistService } from '../services/therapistService';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { 
  User, 
  Mail, 
  Calendar, 
  Activity, 
  BookOpen, 
  MessageCircle,
  Edit,
  Save,
  X,
  Download,
  Shield,
  Trash2,
  Phone,
  Award,
  TrendingUp,
  Heart,
  Lock,
  Settings,
  CheckCircle
} from 'lucide-react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Professional PDF styles
const pdfStyles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: 'Helvetica',
    lineHeight: 1.6,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
    color: '#1e40af',
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 18,
    marginTop: 25,
    marginBottom: 15,
    color: '#1e40af',
    fontWeight: 'bold',
    borderBottom: '2px solid #1e40af',
    paddingBottom: 8,
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    border: '1px solid #e2e8f0',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#374151',
    width: '35%',
  },
  value: {
    color: '#6b7280',
    width: '65%',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 25,
    padding: 20,
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
  },
  statBox: {
    alignItems: 'center',
    padding: 15,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 11,
    color: '#6b7280',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 10,
    color: '#9ca3af',
    borderTop: '1px solid #e5e7eb',
    paddingTop: 15,
  },
});

// Professional PDF Document Component
const ProfilePDF = ({ profile }) => (
  <Document>
    <Page size="A4" style={pdfStyles.page}>
      <Text style={pdfStyles.header}>EmoTrack Professional Profile Report</Text>
      
      <Text style={pdfStyles.subHeader}>Profile Information</Text>
      <View style={pdfStyles.section}>
        <View style={pdfStyles.row}>
          <Text style={pdfStyles.label}>Username:</Text>
          <Text style={pdfStyles.value}>{profile?.username || 'N/A'}</Text>
        </View>
        <View style={pdfStyles.row}>
          <Text style={pdfStyles.label}>Email Address:</Text>
          <Text style={pdfStyles.value}>{profile?.email || 'N/A'}</Text>
        </View>
        <View style={pdfStyles.row}>
          <Text style={pdfStyles.label}>Member Since:</Text>
          <Text style={pdfStyles.value}>{profile?.joined || 'N/A'}</Text>
        </View>
        <View style={pdfStyles.row}>
          <Text style={pdfStyles.label}>Report Generated:</Text>
          <Text style={pdfStyles.value}>{new Date().toLocaleDateString('en-US', { 
            year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
          })}</Text>
        </View>
      </View>

      <Text style={pdfStyles.subHeader}>Wellness Journey Statistics</Text>
      <View style={pdfStyles.statsContainer}>
        <View style={pdfStyles.statBox}>
          <Text style={pdfStyles.statNumber}>{profile?.mood_history_count || 0}</Text>
          <Text style={pdfStyles.statLabel}>Mood Entries</Text>
        </View>
        <View style={pdfStyles.statBox}>
          <Text style={pdfStyles.statNumber}>{profile?.journal_entries_count || 0}</Text>
          <Text style={pdfStyles.statLabel}>Journal Entries</Text>
        </View>
        <View style={pdfStyles.statBox}>
          <Text style={pdfStyles.statNumber}>{profile?.therapy_sessions_count || 0}</Text>
          <Text style={pdfStyles.statLabel}>Therapy Sessions</Text>
        </View>
      </View>

      <Text style={pdfStyles.footer}>
        EmoTrack - Your Mental Wellness Companion | Generated on {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({});
  
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, []);

  // Fetch profile data from backend
  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError('');
      console.log('🔄 Fetching profile data...');
      
      const data = await therapistService.getUserProfile();
      console.log('✅ Profile data received:', data);
      
      setProfile(data);
      setEditedProfile(data); // Initialize edit form with current data
    } catch (err) {
      console.error('❌ Failed to fetch profile:', err);
      setError('Failed to load profile data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditProfile = () => {
    setIsEditing(true);
    setEditedProfile(profile); // Reset edited profile to current profile data
    setError('');
    setSuccess('');
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedProfile(profile); // Reset changes
    setError('');
    setSuccess('');
  };

  // Save profile changes to backend and refresh data
  const handleSaveProfile = async () => {
    try {
      setSaving(true);
      setError('');
      setSuccess('');
      
      console.log('💾 Saving profile changes:', editedProfile);
      
      // Validate required fields
      if (!editedProfile.username || !editedProfile.email) {
        throw new Error('Username and email are required');
      }
      
      // Call API to update profile in backend
      const updatedProfile = await therapistService.updateUserProfile(editedProfile);
      console.log('✅ Profile updated successfully:', updatedProfile);
      
      // Update local state with the response from backend
      setProfile(updatedProfile);
      setEditedProfile(updatedProfile);
      setIsEditing(false);
      setSuccess('Profile updated successfully!');
      
      // Auto-hide success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
      
    } catch (err) {
      console.error('❌ Failed to update profile:', err);
      setError(err.message || 'Failed to update profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePrivacySettings = () => {
    navigate('/privacy-settings');
  };

  const handleDeleteAccount = async () => {
    try {
      const isConfirmed = window.confirm(
        'Are you sure you want to delete your account?\n\n' +
        'This action cannot be undone and will permanently remove:\n' +
        '• All your mood entries and progress data\n' +
        '• Your journal entries and recovery tracker\n' +
        '• All therapy session history\n' +
        '• Your profile information\n\n' +
        'Type "DELETE" to confirm this action.'
      );
      if (!isConfirmed) return;
      const confirmationText = prompt('Please type "DELETE" to confirm account deletion:');
      
      if (confirmationText === null) return; // User cancelled
      
      if (confirmationText !== 'DELETE') {
        alert('Account deletion cancelled. Please type "DELETE" exactly to confirm.');
        return;
      }
      // Show loading state
      setLoading(true);
      setError('');
      
      console.log('🗑️ Initiating account deletion...');
      
      // Call the actual delete API
      await therapistService.deleteUserAccount();
      
      console.log('✅ Account deleted successfully');
      
      // Clear all local data
      localStorage.clear();
      sessionStorage.clear();
      
      // Show success message
      alert('Account deleted successfully. You will be redirected to the home page.');
      
      // Redirect to home page
      navigate('/', { replace: true });
      
    } catch (error) {
      console.error('❌ Failed to delete account:', error);
      setLoading(false);
      
      let errorMessage = 'Failed to delete account. ';
      
      if (error.response?.status === 401) {
        errorMessage += 'Please log in again and try.';
      } else if (error.response?.status === 403) {
        errorMessage += 'You do not have permission to delete this account.';
      } else if (error.response?.status === 404) {
        errorMessage += 'Account not found.';
      } else {
        errorMessage += 'Please try again or contact support.';
      }
      
      setError(errorMessage);
      alert(errorMessage);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
            <User className="w-8 h-8 text-white animate-pulse" />
          </div>
          <LoadingSpinner size="lg" />
          <div className="space-y-2">
            <p className="text-gray-600 font-medium">Loading your profile...</p>
            <p className="text-gray-500 text-sm">Please wait while we fetch your data</p>
          </div>
        </div>
      </div>
    );
  }

  if (error && !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <X className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-bold text-red-800 mb-2">Unable to Load Profile</h3>
          <p className="text-red-600 mb-6">{error}</p>
          <button
            onClick={fetchProfile}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Professional Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl mb-6 shadow-lg">
            <User className="w-8 h-8 text-blue-700" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Profile</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manage your account information and view your wellness journey progress
          </p>
        </div>

        {/* Success/Error Messages */}
        {success && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-4">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                <p className="font-semibold text-emerald-800">{success}</p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-4">
              <div className="flex items-center">
                <X className="w-6 h-6 text-red-600 mr-3" />
                <p className="font-semibold text-red-800">{error}</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          
          {/* Profile Information Card */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              
              {/* Profile Header */}
              <div className="bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold backdrop-blur-sm border-2 border-white/30">
                    {profile?.username?.charAt(0)?.toUpperCase() || 'U'}
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{profile?.username}</h2>
                  <p className="text-blue-100 font-medium">{profile?.email}</p>
                  <div className="mt-4 inline-flex items-center px-3 py-1 bg-emerald-500/20 rounded-full border border-emerald-400/30">
                    <Award className="w-4 h-4 text-emerald-300 mr-2" />
                    <span className="text-emerald-200 text-sm font-medium">Active Member</span>
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="p-8 space-y-6">
                
                {/* Username Field */}
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-1">
                        Username
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={editedProfile.username || ''}
                          onChange={(e) => handleInputChange('username', e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 transition-all duration-300 font-medium"
                          placeholder="Enter your username"
                        />
                      ) : (
                        <p className="text-lg font-semibold text-gray-800">{profile?.username}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-1">
                        Email Address
                      </label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={editedProfile.email || ''}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 transition-all duration-300 font-medium"
                          placeholder="Enter your email address"
                        />
                      ) : (
                        <p className="text-lg font-semibold text-gray-800">{profile?.email}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Member Since Field */}
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-1">
                        Member Since
                      </label>
                      <p className="text-lg font-semibold text-gray-800">{profile?.joined || 'Recently joined'}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 space-y-3">
                  {isEditing ? (
                    <div className="flex space-x-3">
                      <button 
                        onClick={handleSaveProfile}
                        disabled={saving}
                        className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                      >
                        {saving ? (
                          <>
                            <LoadingSpinner size="sm" />
                            <span className="ml-2">Saving...</span>
                          </>
                        ) : (
                          <>
                            <Save className="w-5 h-5 mr-2" />
                            Save Changes
                          </>
                        )}
                      </button>
                      <button 
                        onClick={handleCancelEdit}
                        disabled={saving}
                        className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 disabled:from-gray-300 disabled:to-gray-400 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                      >
                        <X className="w-5 h-5 mr-2" />
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={handleEditProfile}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                    >
                      <Edit className="w-5 h-5 mr-2" />
                      Edit Profile
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Activity & Settings Panel */}
          <div className="xl:col-span-3">
            <div className="space-y-8">
              
              {/* Activity Summary Card */}
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-2xl flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-indigo-700" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Wellness Journey</h2>
                    <p className="text-gray-600">Track your mental health progress</p>
                  </div>
                </div>
                
                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{profile?.mood_history_count || 0}</h3>
                    <p className="text-blue-700 font-semibold">Mood Entries</p>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-green-100 border border-emerald-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{profile?.journal_entries_count || 0}</h3>
                    <p className="text-emerald-700 font-semibold">Journal Entries</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-indigo-100 border border-purple-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{profile?.therapy_sessions_count || 0}</h3>
                    <p className="text-purple-700 font-semibold">Therapy Sessions</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                          <Heart className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Mood tracking streak</p>
                          <p className="text-sm text-blue-600">Keep up the great work!</p>
                        </div>
                      </div>
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold text-sm">Active</span>
                    </div>

                    <div className="flex items-center justify-between bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-4 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center mr-4">
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Recovery tracker</p>
                          <p className="text-sm text-emerald-600">Monitor your progress daily</p>
                        </div>
                      </div>
                      <span className={`px-4 py-2 rounded-xl font-semibold text-sm ${
                        (profile?.journal_entries_count || 0) > 0 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {(profile?.journal_entries_count || 0) > 0 ? 'Active' : 'Start tracking'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-4 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                          <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Therapy sessions</p>
                          <p className="text-sm text-purple-600">Connect with professionals</p>
                        </div>
                      </div>
                      <span className="bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold text-sm">
                        {profile?.therapy_sessions_count || 0} booked
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Management Card */}
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mr-4">
                    <Settings className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Account Management</h2>
                    <p className="text-gray-600">Manage your data and privacy settings</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Download Data */}
                  <PDFDownloadLink 
                    document={<ProfilePDF profile={profile} />} 
                    fileName={`EmoTrack-Profile-${profile?.username}-${new Date().toISOString().split('T')[0]}.pdf`}
                    className="w-full"
                  >
                    {({ loading }) => (
                      <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                              <Download className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-800 text-lg">Download Profile Data</p>
                              <p className="text-blue-600 font-medium">
                                {loading ? 'Generating PDF...' : 'Export your wellness data as PDF'}
                              </p>
                            </div>
                          </div>
                          <span className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold">
                            {loading ? 'Processing...' : 'Download'}
                          </span>
                        </div>
                      </div>
                    )}
                  </PDFDownloadLink>

                  {/* Privacy Settings */}
                  <button 
                    onClick={handlePrivacySettings}
                    className="w-full bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <Lock className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-gray-800 text-lg">Privacy & Security</p>
                          <p className="text-emerald-600 font-medium">Manage your privacy preferences</p>
                        </div>
                      </div>
                      <span className="bg-emerald-600 text-white px-4 py-2 rounded-xl font-semibold">
                        Settings
                      </span>
                    </div>
                  </button>

                  {/* Delete Account */}
                  <button 
                    onClick={handleDeleteAccount}
                    className="w-full bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <Trash2 className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-red-800 text-lg">Delete Account</p>
                          <p className="text-red-600 font-medium">Permanently remove your account and data</p>
                        </div>
                      </div>
                      <span className="bg-red-600 text-white px-4 py-2 rounded-xl font-semibold">
                        Delete
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
