// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { therapistService } from '../services/therapistService';
// import LoadingSpinner from '../components/ui/LoadingSpinner';
// import { 
//   Shield, 
//   Lock, 
//   Key, 
//   Bell, 
//   Globe, 
//   Database, 
//   UserCheck, 
//   AlertTriangle,
//   CheckCircle,
//   Info,
//   Settings,
//   Save,
//   ArrowLeft,
//   Download,
//   Trash2,
//   Activity
// } from 'lucide-react';

// const PrivacySettings = () => {
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
  
//   // Dynamic state for all settings
//   const [settings, setSettings] = useState({});
//   const [activeDevices, setActiveDevices] = useState([]);
//   const [recentActivity, setRecentActivity] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchAllData();
//   }, []);

//   const fetchAllData = async () => {
//     try {
//       setLoading(true);
//       setError('');
      
//       console.log('🔄 Fetching all privacy data...');
      
//       // Fetch all data in parallel
//       const [privacySettings, devices, activity] = await Promise.all([
//         therapistService.getPrivacySettings(),
//         therapistService.getActiveDevices(),
//         therapistService.getRecentActivity()
//       ]);
      
//       console.log('✅ All data fetched successfully');
      
//       setSettings(privacySettings);
//       setActiveDevices(devices);
//       setRecentActivity(activity);
      
//     } catch (error) {
//       console.error('❌ Failed to fetch privacy data:', error);
//       setError('Failed to load privacy settings. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSettingChange = (key, value) => {
//     setSettings(prev => ({
//       ...prev,
//       [key]: value
//     }));
//   };

//   const handleSaveSettings = async () => {
//     try {
//       setSaving(true);
//       setError('');
      
//       await therapistService.updatePrivacySettings(settings);
      
//       setSuccess('Settings saved successfully!');
//       setTimeout(() => setSuccess(''), 3000);
      
//     } catch (error) {
//       setError('Failed to save settings. Please try again.');
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleRevokeDevice = async (deviceId) => {
//     try {
//       await therapistService.revokeDeviceAccess(deviceId);
      
//       // Update local state
//       setActiveDevices(prev => prev.filter(device => device.id !== deviceId));
      
//       setSuccess('Device access revoked successfully.');
//       setTimeout(() => setSuccess(''), 3000);
      
//     } catch (error) {
//       setError('Failed to revoke device access.');
//     }
//   };

//   const handleClearActivity = async () => {
//     try {
//       const confirm = window.confirm('Clear all activity history? This cannot be undone.');
//       if (!confirm) return;
      
//       await therapistService.clearActivityHistory();
      
//       // Update local state
//       setRecentActivity([]);
      
//       setSuccess('Activity history cleared.');
//       setTimeout(() => setSuccess(''), 3000);
      
//     } catch (error) {
//       setError('Failed to clear activity history.');
//     }
//   };

//   const handleChangePassword = async () => {
//     try {
//       const currentPassword = prompt('Enter your current password:');
//       if (!currentPassword) return;
      
//       const newPassword = prompt('Enter your new password:');
//       if (!newPassword) return;
      
//       await therapistService.changePassword({ 
//         currentPassword, 
//         newPassword 
//       });
      
//       setSuccess('Password changed successfully!');
//       setTimeout(() => setSuccess(''), 3000);
      
//     } catch (error) {
//       setError('Failed to change password. Please check your current password.');
//     }
//   };

//   const handleToggle2FA = async () => {
//     try {
//       if (settings.twoFactorAuth) {
//         await therapistService.disable2FA();
//         setSettings(prev => ({ ...prev, twoFactorAuth: false }));
//         setSuccess('2FA disabled.');
//       } else {
//         await therapistService.enable2FA();
//         setSettings(prev => ({ ...prev, twoFactorAuth: true }));
//         setSuccess('2FA enabled.');
//       }
      
//       setTimeout(() => setSuccess(''), 3000);
      
//     } catch (error) {
//       setError('Failed to update 2FA settings.');
//     }
//   };

//   const handleDataExport = async () => {
//     try {
//       await therapistService.requestDataExport();
//       setSuccess('Data export requested. You will receive an email with instructions.');
//       setTimeout(() => setSuccess(''), 5000);
//     } catch (error) {
//       setError('Failed to request data export.');
//     }
//   };

//   const handleDeleteAllData = async () => {
//     try {
//       const confirm = window.confirm(
//         'Delete ALL your data? This will permanently remove everything and cannot be undone!'
//       );
//       if (!confirm) return;
      
//       const finalConfirm = prompt('Type "DELETE ALL DATA" to confirm:');
//       if (finalConfirm !== 'DELETE ALL DATA') {
//         alert('Deletion cancelled.');
//         return;
//       }
      
//       await therapistService.deleteAllUserData();
      
//       alert('All data deleted. You will be logged out.');
//       localStorage.clear();
//       navigate('/', { replace: true });
      
//     } catch (error) {
//       setError('Failed to delete data.');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
//         <div className="text-center space-y-6">
//           <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
//             <Shield className="w-8 h-8 text-white animate-pulse" />
//           </div>
//           <LoadingSpinner size="lg" />
//           <p className="text-gray-600 font-medium">Loading privacy settings...</p>
//         </div>
//       </div>
//     );
//   }

//   const ToggleSwitch = ({ enabled, onChange, disabled = false }) => (
//     <button
//       onClick={() => !disabled && onChange(!enabled)}
//       disabled={disabled}
//       className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
//         enabled ? 'bg-blue-600' : 'bg-gray-300'
//       } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//     >
//       <span
//         className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//           enabled ? 'translate-x-6' : 'translate-x-1'
//         }`}
//       />
//     </button>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
//         {/* Header */}
//         <div className="mb-12">
//           <div className="flex items-center mb-6">
//             <button
//               onClick={() => navigate(-1)}
//               className="mr-4 p-2 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
//             >
//               <ArrowLeft className="w-5 h-5 text-gray-600" />
//             </button>
//             <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl mr-4">
//               <Shield className="w-6 h-6 text-blue-700" />
//             </div>
//             <div>
//               <h1 className="text-3xl font-bold text-gray-800">Privacy & Security</h1>
//               <p className="text-gray-600 mt-1">Manage your data privacy and account security</p>
//             </div>
//           </div>

//           {/* Messages */}
//           {success && (
//             <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-4 mb-4">
//               <div className="flex items-center">
//                 <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
//                 <p className="font-bold text-emerald-800">{success}</p>
//               </div>
//             </div>
//           )}

//           {error && (
//             <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-4 mb-4">
//               <div className="flex items-center">
//                 <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
//                 <p className="font-bold text-red-800">{error}</p>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
//           {/* Main Settings Panel */}
//           <div className="lg:col-span-2 space-y-8">
            
//             {/* Privacy Controls */}
//             <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">Privacy Controls</h2>

//               <div className="space-y-6">
//                 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
//                   <div className="flex items-center">
//                     <UserCheck className="w-5 h-5 text-blue-600 mr-3" />
//                     <div>
//                       <p className="font-semibold text-gray-800">Profile Visibility</p>
//                       <p className="text-sm text-gray-600">Control who can view your profile</p>
//                     </div>
//                   </div>
//                   <select
//                     value={settings.profileVisibility || 'private'}
//                     onChange={(e) => handleSettingChange('profileVisibility', e.target.value)}
//                     className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="private">Private</option>
//                     <option value="therapists">Therapists Only</option>
//                     <option value="public">Public</option>
//                   </select>
//                 </div>

//                 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
//                   <div className="flex items-center">
//                     <Database className="w-5 h-5 text-purple-600 mr-3" />
//                     <div>
//                       <p className="font-semibold text-gray-800">Data Sharing for Research</p>
//                       <p className="text-sm text-gray-600">Help improve mental health care</p>
//                     </div>
//                   </div>
//                   <ToggleSwitch
//                     enabled={settings.dataSharing || false}
//                     onChange={(value) => handleSettingChange('dataSharing', value)}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Security Settings */}
//             <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">Security Settings</h2>

//               <div className="space-y-6">
//                 <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <Key className="w-5 h-5 text-blue-600 mr-3" />
//                       <div>
//                         <p className="font-semibold text-gray-800">Password</p>
//                         <p className="text-sm text-blue-600">Last changed: {settings.passwordLastChanged}</p>
//                       </div>
//                     </div>
//                     <button
//                       onClick={handleChangePassword}
//                       className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold"
//                     >
//                       Change Password
//                     </button>
//                   </div>
//                 </div>

//                 <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <Shield className="w-5 h-5 text-emerald-600 mr-3" />
//                       <div>
//                         <p className="font-semibold text-gray-800">Two-Factor Authentication</p>
//                         <p className="text-sm text-emerald-600">
//                           {settings.twoFactorAuth ? 'Enabled' : 'Add extra security'}
//                         </p>
//                       </div>
//                     </div>
//                     <button
//                       onClick={handleToggle2FA}
//                       className={`px-4 py-2 rounded-xl font-semibold ${
//                         settings.twoFactorAuth
//                           ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
//                           : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
//                       }`}
//                     >
//                       {settings.twoFactorAuth ? 'Disable' : 'Enable'}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Save Button */}
//             <div className="flex justify-center">
//               <button
//                 onClick={handleSaveSettings}
//                 disabled={saving}
//                 className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 disabled:from-gray-400 disabled:to-gray-500 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center"
//               >
//                 {saving ? (
//                   <>
//                     <LoadingSpinner size="sm" />
//                     <span className="ml-3">Saving...</span>
//                   </>
//                 ) : (
//                   <>
//                     <Save className="w-6 h-6 mr-3" />
//                     Save All Settings
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-8">
            
//             {/* Active Devices */}
//             <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                   <Globe className="w-5 h-5 text-blue-600 mr-3" />
//                   <h3 className="text-lg font-bold text-gray-800">Active Devices</h3>
//                 </div>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">
//                   {activeDevices.length}
//                 </span>
//               </div>
              
//               <div className="space-y-4">
//                 {activeDevices.length === 0 ? (
//                   <p className="text-gray-500 text-center py-4">No active devices</p>
//                 ) : (
//                   activeDevices.map((device) => (
//                     <div key={device.id} className="p-4 bg-gray-50 rounded-xl">
//                       <div className="flex items-center justify-between mb-2">
//                         <p className="font-semibold text-gray-800">{device.device}</p>
//                         <button
//                           onClick={() => handleRevokeDevice(device.id)}
//                           className="text-red-600 hover:text-red-700 text-sm font-medium px-3 py-1 rounded-lg hover:bg-red-50"
//                         >
//                           Revoke
//                         </button>
//                       </div>
//                       <p className="text-sm text-gray-600">{device.location}</p>
//                       <p className="text-xs text-gray-500">Last active: {device.lastActive}</p>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>

//             {/* Recent Activity */}
//             <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                   <Activity className="w-5 h-5 text-green-600 mr-3" />
//                   <h3 className="text-lg font-bold text-gray-800">Recent Activity</h3>
//                 </div>
//                 {recentActivity.length > 0 && (
//                   <button
//                     onClick={handleClearActivity}
//                     className="text-red-600 hover:text-red-700 text-sm font-medium"
//                   >
//                     Clear
//                   </button>
//                 )}
//               </div>
              
//               <div className="space-y-3">
//                 {recentActivity.length === 0 ? (
//                   <p className="text-gray-500 text-center py-4">No recent activity</p>
//                 ) : (
//                   recentActivity.map((activity) => (
//                     <div key={activity.id} className="p-3 bg-gray-50 rounded-xl">
//                       <p className="font-medium text-gray-800 text-sm">{activity.action}</p>
//                       <p className="text-xs text-gray-500">{activity.timestamp}</p>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>

//             {/* Data Management */}
//             <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6">
//               <div className="flex items-center mb-6">
//                 <Database className="w-5 h-5 text-purple-600 mr-3" />
//                 <h3 className="text-lg font-bold text-gray-800">Data Management</h3>
//               </div>
              
//               <div className="space-y-4">
//                 <button
//                   onClick={handleDataExport}
//                   className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 hover:shadow-md transition-all duration-300 text-left"
//                 >
//                   <div className="flex items-center">
//                     <Download className="w-5 h-5 text-blue-600 mr-3" />
//                     <div>
//                       <p className="font-semibold text-gray-800">Download My Data</p>
//                       <p className="text-sm text-blue-600">Export all your information</p>
//                     </div>
//                   </div>
//                 </button>

//                 <button
//                   onClick={handleDeleteAllData}
//                   className="w-full bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-4 hover:shadow-md transition-all duration-300 text-left"
//                 >
//                   <div className="flex items-center">
//                     <Trash2 className="w-5 h-5 text-red-600 mr-3" />
//                     <div>
//                       <p className="font-semibold text-red-800">Delete All Data</p>
//                       <p className="text-sm text-red-600">Permanently remove everything</p>
//                     </div>
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivacySettings;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { therapistService } from '../services/therapistService';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { 
  Shield, 
  Lock, 
  Key, 
  Bell, 
  Globe, 
  Database, 
  UserCheck, 
  AlertTriangle,
  CheckCircle,
  Info,
  Settings,
  Save,
  ArrowLeft,
  Download,
  Trash2,
  Activity,
  RefreshCw
} from 'lucide-react';

const PrivacySettings = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // State for all settings
  const [settings, setSettings] = useState({
    profileVisibility: 'private',
    dataSharing: false,
    analyticsTracking: true,
    marketingEmails: false,
    twoFactorAuth: false,
    loginNotifications: true,
    sessionTimeout: '30',
    passwordLastChanged: null,
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    therapistCommunication: true,
  });
  
  const [activeDevices, setActiveDevices] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError('');
      
      console.log('🔄 Fetching all privacy data...');
      
      // Fetch privacy settings
      try {
        const privacySettings = await therapistService.getPrivacySettings();
        console.log('✅ Privacy settings fetched:', privacySettings);
        setSettings(prevSettings => ({
          ...prevSettings,
          ...privacySettings
        }));
      } catch (privacyError) {
        console.error('❌ Privacy settings error:', privacyError);
        setError('Failed to load privacy settings. Using default values.');
      }
      
      // Fetch devices (don't fail if this fails)
      try {
        const devices = await therapistService.getActiveDevices();
        console.log('✅ Devices fetched:', devices);
        setActiveDevices(devices || []);
      } catch (deviceError) {
        console.error('❌ Devices error:', deviceError);
        setActiveDevices([]);
      }
      
      // Fetch activity (don't fail if this fails)
      try {
        const activity = await therapistService.getRecentActivity();
        console.log('✅ Activity fetched:', activity);
        setRecentActivity(activity || []);
      } catch (activityError) {
        console.error('❌ Activity error:', activityError);
        setRecentActivity([]);
      }
      
    } catch (error) {
      console.error('❌ Fatal error fetching privacy data:', error);
      setError('Failed to load privacy settings. Please check your internet connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setError('');
    fetchAllData();
  };

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveSettings = async () => {
    try {
      setSaving(true);
      setError('');
      
      console.log('💾 Saving settings:', settings);
      await therapistService.updatePrivacySettings(settings);
      
      setSuccess('Settings saved successfully!');
      setTimeout(() => setSuccess(''), 3000);
      
    } catch (error) {
      console.error('❌ Save error:', error);
      setError('Failed to save settings. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleRevokeDevice = async (deviceId) => {
    try {
      await therapistService.revokeDeviceAccess(deviceId);
      
      // Update local state
      setActiveDevices(prev => prev.filter(device => device.id !== deviceId));
      
      setSuccess('Device access revoked successfully.');
      setTimeout(() => setSuccess(''), 3000);
      
    } catch (error) {
      setError('Failed to revoke device access.');
    }
  };

  const handleClearActivity = async () => {
    try {
      const confirm = window.confirm('Clear all activity history? This cannot be undone.');
      if (!confirm) return;
      
      await therapistService.clearActivityHistory();
      
      // Update local state
      setRecentActivity([]);
      
      setSuccess('Activity history cleared.');
      setTimeout(() => setSuccess(''), 3000);
      
    } catch (error) {
      setError('Failed to clear activity history.');
    }
  };

  const handleChangePassword = async () => {
    try {
      const currentPassword = prompt('Enter your current password:');
      if (!currentPassword) return;
      
      const newPassword = prompt('Enter your new password:');
      if (!newPassword) return;
      
      if (newPassword.length < 6) {
        setError('New password must be at least 6 characters long.');
        return;
      }
      
      await therapistService.changePassword({ 
        currentPassword, 
        newPassword 
      });
      
      setSuccess('Password changed successfully!');
      setTimeout(() => setSuccess(''), 3000);
      
    } catch (error) {
      setError('Failed to change password. Please check your current password.');
    }
  };

  const handleToggle2FA = async () => {
    try {
      if (settings.twoFactorAuth) {
        await therapistService.disable2FA();
        setSettings(prev => ({ ...prev, twoFactorAuth: false }));
        setSuccess('2FA disabled.');
      } else {
        await therapistService.enable2FA();
        setSettings(prev => ({ ...prev, twoFactorAuth: true }));
        setSuccess('2FA enabled.');
      }
      
      setTimeout(() => setSuccess(''), 3000);
      
    } catch (error) {
      setError('Failed to update 2FA settings.');
    }
  };

  const handleDataExport = async () => {
    try {
      await therapistService.requestDataExport();
      setSuccess('Data export requested. You will receive an email with instructions.');
      setTimeout(() => setSuccess(''), 5000);
    } catch (error) {
      setError('Failed to request data export.');
    }
  };

  const handleDeleteAllData = async () => {
    try {
      const confirm = window.confirm(
        'Delete ALL your data? This will permanently remove everything and cannot be undone!'
      );
      if (!confirm) return;
      
      const finalConfirm = prompt('Type "DELETE ALL DATA" to confirm:');
      if (finalConfirm !== 'DELETE ALL DATA') {
        alert('Deletion cancelled.');
        return;
      }
      
      await therapistService.deleteAllUserData();
      
      alert('All data deleted. You will be logged out.');
      localStorage.clear();
      navigate('/', { replace: true });
      
    } catch (error) {
      setError('Failed to delete data.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
            <Shield className="w-8 h-8 text-white animate-pulse" />
          </div>
          <LoadingSpinner size="lg" />
          <div className="space-y-2">
            <p className="text-gray-600 font-medium">Loading privacy settings...</p>
            <p className="text-gray-500 text-sm">Setting up your security dashboard</p>
          </div>
        </div>
      </div>
    );
  }

  const ToggleSwitch = ({ enabled, onChange, disabled = false }) => (
    <button
      onClick={() => !disabled && onChange(!enabled)}
      disabled={disabled}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        enabled ? 'bg-blue-600' : 'bg-gray-300'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <button
              onClick={() => navigate(-1)}
              className="mr-4 p-2 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl mr-4">
              <Shield className="w-6 h-6 text-blue-700" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Privacy & Security</h1>
              <p className="text-gray-600 mt-1">Manage your data privacy and account security</p>
            </div>
          </div>

          {/* Messages */}
          {success && (
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-4 mb-4">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                <p className="font-bold text-emerald-800">{success}</p>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                  <p className="font-bold text-red-800">{error}</p>
                </div>
                <button
                  onClick={handleRetry}
                  className="flex items-center text-red-600 hover:text-red-700 font-medium"
                >
                  <RefreshCw className="w-4 h-4 mr-1" />
                  Retry
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Settings Panel */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Privacy Controls */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl flex items-center justify-center mr-4">
                  <UserCheck className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Privacy Controls</h2>
                  <p className="text-gray-600">Control who can see your information</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center">
                    <UserCheck className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">Profile Visibility</p>
                      <p className="text-sm text-gray-600">Control who can view your profile</p>
                    </div>
                  </div>
                  <select
                    value={settings.profileVisibility}
                    onChange={(e) => handleSettingChange('profileVisibility', e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="private">Private</option>
                    <option value="therapists">Therapists Only</option>
                    <option value="public">Public</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center">
                    <Database className="w-5 h-5 text-purple-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">Data Sharing for Research</p>
                      <p className="text-sm text-gray-600">Help improve mental health care</p>
                    </div>
                  </div>
                  <ToggleSwitch
                    enabled={settings.dataSharing}
                    onChange={(value) => handleSettingChange('dataSharing', value)}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center">
                    <Activity className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">Analytics & Performance</p>
                      <p className="text-sm text-gray-600">Allow usage analytics</p>
                    </div>
                  </div>
                  <ToggleSwitch
                    enabled={settings.analyticsTracking}
                    onChange={(value) => handleSettingChange('analyticsTracking', value)}
                  />
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-pink-200 rounded-2xl flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Security Settings</h2>
                  <p className="text-gray-600">Protect your account</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Key className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-800">Password</p>
                        <p className="text-sm text-blue-600">Last changed: {settings.passwordLastChanged}</p>
                      </div>
                    </div>
                    <button
                      onClick={handleChangePassword}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition-colors"
                    >
                      Change Password
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-emerald-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-800">Two-Factor Authentication</p>
                        <p className="text-sm text-emerald-600">
                          {settings.twoFactorAuth ? 'Enabled - Extra secure' : 'Add extra security'}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleToggle2FA}
                      className={`px-4 py-2 rounded-xl font-semibold transition-colors ${
                        settings.twoFactorAuth
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                      }`}
                    >
                      {settings.twoFactorAuth ? 'Disable' : 'Enable'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-center">
              <button
                onClick={handleSaveSettings}
                disabled={saving}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 disabled:from-gray-400 disabled:to-gray-500 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center"
              >
                {saving ? (
                  <>
                    <LoadingSpinner size="sm" />
                    <span className="ml-3">Saving...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-6 h-6 mr-3" />
                    Save All Settings
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Active Devices */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-blue-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-800">Active Devices</h3>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">
                  {activeDevices.length}
                </span>
              </div>
              
              <div className="space-y-4">
                {activeDevices.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No active devices</p>
                ) : (
                  activeDevices.map((device) => (
                    <div key={device.id} className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-gray-800">{device.device}</p>
                        <button
                          onClick={() => handleRevokeDevice(device.id)}
                          className="text-red-600 hover:text-red-700 text-sm font-medium px-3 py-1 rounded-lg hover:bg-red-50"
                        >
                          Revoke
                        </button>
                      </div>
                      <p className="text-sm text-gray-600">{device.location}</p>
                      <p className="text-xs text-gray-500">Last active: {device.lastActive}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-green-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-800">Recent Activity</h3>
                </div>
                {recentActivity.length > 0 && (
                  <button
                    onClick={handleClearActivity}
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Clear
                  </button>
                )}
              </div>
              
              <div className="space-y-3">
                {recentActivity.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No recent activity</p>
                ) : (
                  recentActivity.map((activity) => (
                    <div key={activity.id} className="p-3 bg-gray-50 rounded-xl">
                      <p className="font-medium text-gray-800 text-sm">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.timestamp}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Data Management */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6">
              <div className="flex items-center mb-6">
                <Database className="w-5 h-5 text-purple-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-800">Data Management</h3>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={handleDataExport}
                  className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 hover:shadow-md transition-all duration-300 text-left"
                >
                  <div className="flex items-center">
                    <Download className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">Download My Data</p>
                      <p className="text-sm text-blue-600">Export all your information</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={handleDeleteAllData}
                  className="w-full bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-4 hover:shadow-md transition-all duration-300 text-left"
                >
                  <div className="flex items-center">
                    <Trash2 className="w-5 h-5 text-red-600 mr-3" />
                    <div>
                      <p className="font-semibold text-red-800">Delete All Data</p>
                      <p className="text-sm text-red-600">Permanently remove everything</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;
