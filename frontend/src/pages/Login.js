

// // // import React, { useState } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import { useAuth } from '../context/AuthContext';
// // // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // // import { Brain, Eye, EyeOff, ArrowLeft, Shield } from 'lucide-react';

// // // const Login = () => {
// // //   const [formData, setFormData] = useState({
// // //     username: '',
// // //     password: '',
// // //   });
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [error, setError] = useState('');
// // //   const [loading, setLoading] = useState(false);
// // //   const [rememberMe, setRememberMe] = useState(false);
  
// // //   const { login } = useAuth();
// // //   const navigate = useNavigate();

// // //   const handleChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value,
// // //     });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setError('');

// // //     try {
// // //       await login(formData);
// // //       navigate('/dashboard');
// // //     } catch (err) {
// // //       setError(err.response?.data?.error || 'Login failed. Please try again.');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleGoogleLogin = () => {
// // //     // Placeholder for Google OAuth implementation
// // //     console.log('Google login clicked');
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
// // //       {/* Header - Updated Layout */}
// // //       <div className="bg-violet-950 shadow-lg">
// // //         <div className="w-full px-4 sm:px-6 lg:px-8">
// // //           <div className="flex items-center justify-between h-16">
// // //             {/* LEFT CORNER - Logo */}
// // //             <div className="flex-shrink-0">
// // //               <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-all duration-300">
// // //                 <div className="bg-gradient-to-br from-violet-400 to-purple-500 p-2 rounded-xl shadow-lg">
// // //                   <Brain className="w-6 h-6 text-white" strokeWidth={2} />
// // //                 </div>
// // //                 <span className="text-xl font-bold text-violet-100">EmoTrack</span>
// // //               </Link>
// // //             </div>
            
// // //             {/* RIGHT CORNER - Back to Home */}
// // //             <div className="flex-shrink-0">
// // //               <Link 
// // //                 to="/" 
// // //                 className="flex items-center gap-2 text-violet-200 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-violet-800/50"
// // //               >
// // //                 <ArrowLeft className="w-4 h-4" />
// // //                 <span className="text-sm font-medium">Back to Home</span>
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Main Content - Rest remains the same */}
// // //       <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
// // //         <div className="max-w-md w-full">
// // //           {/* Logo and Header */}
// // //           <div className="text-center mb-8">
// // //             <div className="flex justify-center mb-6">
// // //               <div className="relative">
// // //                 <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg">
// // //                   <Brain className="w-12 h-12 text-white" strokeWidth={1.5} />
// // //                 </div>
// // //                 <div className="absolute -top-1 -right-1 bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
// // //                   <span className="text-white text-xs font-bold">✓</span>
// // //                 </div>
// // //               </div>
// // //             </div>
            
// // //             <h1 className="text-3xl font-bold text-gray-900 mb-2">
// // //               Welcome back to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EmoTrack</span>
// // //             </h1>
// // //             <p className="text-gray-600">
// // //               Sign in to continue your emotional wellness journey
// // //             </p>
// // //           </div>

// // //           {/* Form Container */}
// // //           <div className="bg-white rounded-2xl shadow-xl p-8">
// // //             {/* Tab Headers */}
// // //             <div className="flex mb-6">
// // //               <button className="flex-1 py-3 px-4 text-center font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-l-xl">
// // //                 Login
// // //               </button>
// // //               <Link 
// // //                 to="/signup"
// // //                 className="flex-1 py-3 px-4 text-center font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors rounded-r-xl"
// // //               >
// // //                 Sign Up
// // //               </Link>
// // //             </div>

// // //             {/* Google Button */}
// // //             <button
// // //               onClick={handleGoogleLogin}
// // //               className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-300 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 mb-4"
// // //             >
// // //               <svg className="w-5 h-5" viewBox="0 0 24 24">
// // //                 <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
// // //                 <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
// // //                 <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
// // //                 <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
// // //               </svg>
// // //               <span className="text-gray-700 font-medium">Continue with Google</span>
// // //             </button>

// // //             {/* Divider */}
// // //             <div className="relative mb-6">
// // //               <div className="absolute inset-0 flex items-center">
// // //                 <div className="w-full border-t border-gray-300" />
// // //               </div>
// // //               <div className="relative flex justify-center text-sm">
// // //                 <span className="px-2 bg-white text-gray-500">Or continue with email</span>
// // //               </div>
// // //             </div>

// // //             {/* Error Message */}
// // //             {error && (
// // //               <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
// // //                 {error}
// // //               </div>
// // //             )}

// // //             {/* Login Form */}
// // //             <form onSubmit={handleSubmit} className="space-y-6">
// // //               <div>
// // //                 <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
// // //                   Email Address
// // //                 </label>
// // //                 <div className="relative">
// // //                   <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
// // //                     <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
// // //                     </svg>
// // //                   </div>
// // //                   <input
// // //                     id="username"
// // //                     name="username"
// // //                     type="text"
// // //                     required
// // //                     className="pl-12 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
// // //                     placeholder="Enter your email address"
// // //                     value={formData.username}
// // //                     onChange={handleChange}
// // //                   />
// // //                 </div>
// // //               </div>

// // //               <div>
// // //                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
// // //                   Password
// // //                 </label>
// // //                 <div className="relative">
// // //                   <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
// // //                     <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// // //                     </svg>
// // //                   </div>
// // //                   <input
// // //                     id="password"
// // //                     name="password"
// // //                     type={showPassword ? 'text' : 'password'}
// // //                     required
// // //                     className="pl-12 pr-12 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
// // //                     placeholder="Enter your password"
// // //                     value={formData.password}
// // //                     onChange={handleChange}
// // //                   />
// // //                   <button
// // //                     type="button"
// // //                     className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
// // //                     onClick={() => setShowPassword(!showPassword)}
// // //                   >
// // //                     {showPassword ? (
// // //                       <EyeOff className="h-5 w-5" />
// // //                     ) : (
// // //                       <Eye className="h-5 w-5" />
// // //                     )}
// // //                   </button>
// // //                 </div>
// // //               </div>

// // //               {/* Remember Me & Forgot Password */}
// // //               <div className="flex items-center justify-between">
// // //                 <div className="flex items-center">
// // //                   <input
// // //                     id="remember-me"
// // //                     name="remember-me"
// // //                     type="checkbox"
// // //                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // //                     checked={rememberMe}
// // //                     onChange={(e) => setRememberMe(e.target.checked)}
// // //                   />
// // //                   <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
// // //                     Remember me
// // //                   </label>
// // //                 </div>

// // //                 <div className="text-sm">
// // //                   <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
// // //                     Forgot password?
// // //                   </a>
// // //                 </div>
// // //               </div>

// // //               {/* Submit Button */}
// // //               <button
// // //                 type="submit"
// // //                 disabled={loading}
// // //                 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
// // //               >
// // //                 {loading ? (
// // //                   <LoadingSpinner size="sm" />
// // //                 ) : (
// // //                   'Sign In'
// // //                 )}
// // //               </button>
// // //             </form>

// // //             {/* Security Badge */}
// // //             <div className="mt-6 flex items-center justify-center">
// // //               <div className="flex items-center gap-2 text-green-600">
// // //                 <Shield className="w-4 h-4" />
// // //                 <span className="text-sm font-medium">100% Secure & Private</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // export default Login;
// // // import React, { useState } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import { useAuth } from '../context/AuthContext';
// // // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // // import { Brain, Eye, EyeOff, Shield } from 'lucide-react';

// // // const Login = () => {
// // //   const [formData, setFormData] = useState({
// // //     email: '',
// // //     password: '',
// // //   });
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [error, setError] = useState('');
// // //   const [loading, setLoading] = useState(false);
// // //   const [rememberMe, setRememberMe] = useState(false);
  
// // //   const { login } = useAuth();
// // //   const navigate = useNavigate();

// // //   const handleChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value,
// // //     });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setError('');

// // //     try {
// // //       await login(formData);
// // //       navigate('/dashboard');
// // //     } catch (err) {
// // //       setError(err.response?.data?.error || 'Login failed. Please try again.');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleGoogleLogin = () => {
// // //     // Placeholder for Google OAuth implementation
// // //     console.log('Google login clicked');
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
// // //       {/* REMOVED HEADER SECTION COMPLETELY */}
      
// // //       <div className="max-w-md w-full">
// // //         {/* Logo and Header */}
// // //         <div className="text-center mb-8">
// // //           <div className="flex justify-center mb-6">
// // //             <div className="relative">
// // //               <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg">
// // //                 <Brain className="w-12 h-12 text-white" strokeWidth={1.5} />
// // //               </div>
// // //               <div className="absolute -top-1 -right-1 bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
// // //                 <span className="text-white text-xs font-bold">✓</span>
// // //               </div>
// // //             </div>
// // //           </div>
          
// // //           <h1 className="text-3xl font-bold text-gray-900 mb-2">
// // //             Welcome back to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EmoTrack</span>
// // //           </h1>
// // //           <p className="text-gray-600">
// // //             Sign in to continue your emotional wellness journey
// // //           </p>
          
// // //           {/* ADD BACK TO HOME LINK HERE IF NEEDED */}
// // //           <Link 
// // //             to="/" 
// // //             className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors mt-4 text-sm font-medium"
// // //           >
// // //             ← Back to Home
// // //           </Link>
// // //         </div>

// // //         {/* Form Container - Rest of your existing code stays the same */}
// // //         <div className="bg-white rounded-2xl shadow-xl p-8">
// // //           {/* All your existing form code here... */}
          
// // //           {/* Tab Headers */}
// // //           <div className="flex mb-6">
// // //             <button className="flex-1 py-3 px-4 text-center font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-l-xl">
// // //               Login
// // //             </button>
// // //             <Link 
// // //               to="/signup"
// // //               className="flex-1 py-3 px-4 text-center font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors rounded-r-xl"
// // //             >
// // //               Sign Up
// // //             </Link>
// // //           </div>

// // //           {/* Google Button */}
// // //           <button
// // //             onClick={handleGoogleLogin}
// // //             className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-300 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 mb-4"
// // //           >
// // //             <svg className="w-5 h-5" viewBox="0 0 24 24">
// // //               <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
// // //               <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
// // //               <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
// // //               <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
// // //             </svg>
// // //             <span className="text-gray-700 font-medium">Continue with Google</span>
// // //           </button>

// // //           {/* Divider */}
// // //           <div className="relative mb-6">
// // //             <div className="absolute inset-0 flex items-center">
// // //               <div className="w-full border-t border-gray-300" />
// // //             </div>
// // //             <div className="relative flex justify-center text-sm">
// // //               <span className="px-2 bg-white text-gray-500">Or continue with email</span>
// // //             </div>
// // //           </div>

// // //           {/* Error Message */}
// // //           {error && (
// // //             <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
// // //               {error}
// // //             </div>
// // //           )}

// // //           {/* Login Form */}
// // //           <form onSubmit={handleSubmit} className="space-y-6">
// // //             <div>
// // //               <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
// // //                 Email Address
// // //               </label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
// // //                   <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
// // //                   </svg>
// // //                 </div>
// // //                 <input
// // //                   id="username"
// // //                   name="email"
// // //                   type="text"
// // //                   required
// // //                   className="pl-12 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
// // //                   placeholder="Enter your email address"
// // //                   value={formData.email} 
// // //                   onChange={handleChange}
// // //                 />
// // //               </div>
// // //             </div>

// // //             <div>
// // //               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
// // //                 Password
// // //               </label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
// // //                   <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// // //                   </svg>
// // //                 </div>
// // //                 <input
// // //                   id="password"
// // //                   name="email" 
// // //                   type={showPassword ? 'text' : 'password'}
// // //                   required
// // //                   className="pl-12 pr-12 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
// // //                   placeholder="Enter your password"
// // //                   value={formData.email} 
// // //                   onChange={handleChange}
// // //                 />
// // //                 <button
// // //                   type="button"
// // //                   className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
// // //                   onClick={() => setShowPassword(!showPassword)}
// // //                 >
// // //                   {showPassword ? (
// // //                     <EyeOff className="h-5 w-5" />
// // //                   ) : (
// // //                     <Eye className="h-5 w-5" />
// // //                   )}
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             {/* Remember Me & Forgot Password */}
// // //             <div className="flex items-center justify-between">
// // //               <div className="flex items-center">
// // //                 <input
// // //                   id="remember-me"
// // //                   name="remember-me"
// // //                   type="checkbox"
// // //                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // //                   checked={rememberMe}
// // //                   onChange={(e) => setRememberMe(e.target.checked)}
// // //                 />
// // //                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
// // //                   Remember me
// // //                 </label>
// // //               </div>

// // //               <div className="text-sm">
// // //                 <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
// // //                   Forgot password?
// // //                 </a>
// // //               </div>
// // //             </div>

// // //             {/* Submit Button */}
// // //             <button
// // //               type="submit"
// // //               disabled={loading}
// // //               className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
// // //             >
// // //               {loading ? (
// // //                 <LoadingSpinner size="sm" />
// // //               ) : (
// // //                 'Sign In'
// // //               )}
// // //             </button>
// // //           </form>

// // //           {/* Security Badge */}
// // //           <div className="mt-6 flex items-center justify-center">
// // //             <div className="flex items-center gap-2 text-green-600">
// // //               <Shield className="w-4 h-4" />
// // //               <span className="text-sm font-medium">100% Secure & Private</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;




// // // const [formData, setFormData] = useState({
// // //   email: '',  // Changed from 'username' to 'email'
// // //   password: '',
// // // });

// // // // Update the input field name
// // // <input
// // //   id="email"
// // //   name="email"  // Changed from 'username' to 'email'
// // //   type="email"
// // //   required
// // //   className="pl-12 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
// // //   placeholder="Enter your email address"
// // //   value={formData.email}  // Changed from formData.username
// // //   onChange={handleChange}
// // // />
// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../context/AuthContext';
// // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // import { Brain, Eye, EyeOff, Shield } from 'lucide-react';

// // const Login = () => {
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: '',
// //   });
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [rememberMe, setRememberMe] = useState(false);
  
// //   const { login } = useAuth();
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError('');

// //     try {
// //       await login(formData);
// //       navigate('/dashboard');
// //     } catch (err) {
// //       setError(err.response?.data?.error || 'Login failed. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleGoogleLogin = () => {
// //     // Placeholder for Google OAuth implementation
// //     console.log('Google login clicked');
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-md w-full">
// //         {/* Logo and Header */}
// //         <div className="text-center mb-8">
// //           <div className="flex justify-center mb-6">
// //             <div className="relative">
// //               <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg">
// //                 <Brain className="w-12 h-12 text-white" strokeWidth={1.5} />
// //               </div>
// //               <div className="absolute -top-1 -right-1 bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
// //                 <span className="text-white text-xs font-bold">✓</span>
// //               </div>
// //             </div>
// //           </div>
          
// //           <h1 className="text-3xl font-bold text-gray-900 mb-2">
// //             Welcome back to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EmoTrack</span>
// //           </h1>
// //           <p className="text-gray-600">
// //             Sign in to continue your emotional wellness journey
// //           </p>
          
// //           <Link 
// //             to="/" 
// //             className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors mt-4 text-sm font-medium"
// //           >
// //             ← Back to Home
// //           </Link>
// //         </div>

// //         {/* Form Container */}
// //         <div className="bg-white rounded-2xl shadow-xl p-8">
// //           {/* Tab Headers */}
// //           <div className="flex mb-6">
// //             <button className="flex-1 py-3 px-4 text-center font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-l-xl">
// //               Login
// //             </button>
// //             <Link 
// //               to="/signup"
// //               className="flex-1 py-3 px-4 text-center font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors rounded-r-xl"
// //             >
// //               Sign Up
// //             </Link>
// //           </div>

// //           {/* Google Button */}
// //           <button
// //             onClick={handleGoogleLogin}
// //             className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-300 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 mb-4"
// //           >
// //             <svg className="w-5 h-5" viewBox="0 0 24 24">
// //               <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
// //               <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
// //               <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
// //               <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
// //             </svg>
// //             <span className="text-gray-700 font-medium">Continue with Google</span>
// //           </button>

// //           {/* Divider */}
// //           <div className="relative mb-6">
// //             <div className="absolute inset-0 flex items-center">
// //               <div className="w-full border-t border-gray-300" />
// //             </div>
// //             <div className="relative flex justify-center text-sm">
// //               <span className="px-2 bg-white text-gray-500">Or continue with email</span>
// //             </div>
// //           </div>

// //           {/* Error Message */}
// //           {error && (
// //             <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
// //               {error}
// //             </div>
// //           )}

// //           {/* Login Form */}
// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             <div>
// //               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
// //                 Email Address
// //               </label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
// //                   <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
// //                   </svg>
// //                 </div>
// //                 <input
// //                   id="email"
// //                   name="email"
// //                   type="email"
// //                   required
// //                   className="pl-12 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
// //                   placeholder="Enter your email address"
// //                   value={formData.email} 
// //                   onChange={handleChange}
// //                 />
// //               </div>
// //             </div>

// //             <div>
// //               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
// //                 Password
// //               </label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
// //                   <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// //                   </svg>
// //                 </div>
// //                 <input
// //                   id="password"
// //                   name="password"
// //                   type={showPassword ? 'text' : 'password'}
// //                   required
// //                   className="pl-12 pr-12 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
// //                   placeholder="Enter your password"
// //                   value={formData.password}
// //                   onChange={handleChange}
// //                 />
// //                 <button
// //                   type="button"
// //                   className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
// //                   onClick={() => setShowPassword(!showPassword)}
// //                 >
// //                   {showPassword ? (
// //                     <EyeOff className="h-5 w-5" />
// //                   ) : (
// //                     <Eye className="h-5 w-5" />
// //                   )}
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Remember Me & Forgot Password */}
// //             <div className="flex items-center justify-between">
// //               <div className="flex items-center">
// //                 <input
// //                   id="remember-me"
// //                   name="remember-me"
// //                   type="checkbox"
// //                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// //                   checked={rememberMe}
// //                   onChange={(e) => setRememberMe(e.target.checked)}
// //                 />
// //                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
// //                   Remember me
// //                 </label>
// //               </div>

// //               <div className="text-sm">
// //                 <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
// //                   Forgot password?
// //                 </a>
// //               </div>
// //             </div>

// //             {/* Submit Button */}
// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
// //             >
// //               {loading ? (
// //                 <LoadingSpinner size="sm" />
// //               ) : (
// //                 'Sign In'
// //               )}
// //             </button>
// //           </form>

// //           {/* Security Badge */}
// //           <div className="mt-6 flex items-center justify-center">
// //             <div className="flex items-center gap-2 text-green-600">
// //               <Shield className="w-4 h-4" />
// //               <span className="text-sm font-medium">100% Secure & Private</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
// // Login.js
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import LoadingSpinner from '../components/ui/LoadingSpinner';
// import { Brain, Eye, EyeOff, Shield } from 'lucide-react';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
  
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       await login(formData);
//       navigate('/dashboard');
//     } catch (err) {
//       setError(err.response?.data?.error || 'Login failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full">
//         {/* Logo and Header */}
//         <div className="text-center mb-8">
//           <div className="flex justify-center mb-6">
//             <div className="relative">
//               <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg">
//                 <Brain className="w-12 h-12 text-white" strokeWidth={1.5} />
//               </div>
//               <div className="absolute -top-1 -right-1 bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
//                 <span className="text-white text-xs font-bold">✓</span>
//               </div>
//             </div>
//           </div>
          
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             Welcome back to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EmoTrack</span>
//           </h1>
//           <p className="text-gray-600">
//             Sign in to continue your emotional wellness journey
//           </p>
          
//           <Link 
//             to="/" 
//             className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors mt-4 text-sm font-medium"
//           >
//             ← Back to Home
//           </Link>
//         </div>

//         {/* Form Container */}
//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           {/* Tab Headers */}
//           <div className="flex mb-6">
//             <button className="flex-1 py-3 px-4 text-center font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-l-xl">
//               Login
//             </button>
//             <Link 
//               to="/signup"
//               className="flex-1 py-3 px-4 text-center font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors rounded-r-xl"
//             >
//               Sign Up
//             </Link>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
//               {error}
//             </div>
//           )}

//           {/* Login Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//                   <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
//                   </svg>
//                 </div>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   className="pl-12 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                   placeholder="Enter your email address"
//                   value={formData.email} 
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//                   <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                   </svg>
//                 </div>
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   required
//                   className="pl-12 pr-12 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                   placeholder="Enter your password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5" />
//                   ) : (
//                     <Eye className="h-5 w-5" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Remember Me & Forgot Password */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <Link 
//                   to="/forgot-password" 
//                   className="font-medium text-blue-600 hover:text-blue-500"
//                 >
//                   Forgot password?
//                 </Link>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
//             >
//               {loading ? (
//                 <LoadingSpinner size="sm" />
//               ) : (
//                 'Sign In'
//               )}
//             </button>
//           </form>

//           {/* Security Badge */}
//           <div className="mt-6 flex items-center justify-center">
//             <div className="flex items-center gap-2 text-green-600">
//               <Shield className="w-4 h-4" />
//               <span className="text-sm font-medium">100% Secure & Private</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
// Login.js - Complete Enhanced Version with Validation
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { Brain, Eye, EyeOff, Shield, AlertCircle, CheckCircle } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [touched, setTouched] = useState({});
  
  const { login } = useAuth();
  const navigate = useNavigate();

  // Validation functions
  const validateEmail = (email) => {
    if (!email.trim()) {
      return 'Email is required';
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    newErrors.email = validateEmail(formData.email);
    newErrors.password = validatePassword(formData.password);
    
    // Remove empty error messages
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key]) delete newErrors[key];
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Real-time validation
    if (touched[name]) {
      const newErrors = { ...errors };
      if (name === 'email') {
        const emailError = validateEmail(value);
        if (emailError) {
          newErrors.email = emailError;
        } else {
          delete newErrors.email;
        }
      }
      if (name === 'password') {
        const passwordError = validatePassword(value);
        if (passwordError) {
          newErrors.password = passwordError;
        } else {
          delete newErrors.password;
        }
      }
      setErrors(newErrors);
    }

    // Clear general error when user starts typing
    if (error) {
      setError('');
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    // Validate field on blur
    const newErrors = { ...errors };
    if (name === 'email') {
      const emailError = validateEmail(formData.email);
      if (emailError) {
        newErrors.email = emailError;
      } else {
        delete newErrors.email;
      }
    }
    if (name === 'password') {
      const passwordError = validatePassword(formData.password);
      if (passwordError) {
        newErrors.password = passwordError;
      } else {
        delete newErrors.password;
      }
    }
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      email: true,
      password: true,
    });

    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      await login(formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const getFieldClassName = (fieldName) => {
    const baseClasses = "w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-colors";
    const hasError = errors[fieldName] && touched[fieldName];
    const hasValue = formData[fieldName] && !hasError;
    
    if (hasError) {
      return `${baseClasses} border-red-300 focus:ring-red-500 focus:border-red-500`;
    }
    if (hasValue) {
      return `${baseClasses} border-green-300 focus:ring-green-500 focus:border-green-500`;
    }
    return `${baseClasses} border-gray-300 focus:ring-blue-500`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg">
                <Brain className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <div className="absolute -top-1 -right-1 bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EmoTrack</span>
          </h1>
          <p className="text-gray-600">
            Sign in to continue your emotional wellness journey
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors mt-4 text-sm font-medium"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Tab Headers */}
          <div className="flex mb-6">
            <button className="flex-1 py-3 px-4 text-center font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-l-xl">
              Login
            </button>
            <Link 
              to="/signup"
              className="flex-1 py-3 px-4 text-center font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors rounded-r-xl"
            >
              Sign Up
            </Link>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={`pl-12 pr-10 ${getFieldClassName('email')}`}
                  placeholder="Enter your email address"
                  value={formData.email} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* Validation Icon */}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  {touched.email && !errors.email && formData.email && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                  {errors.email && touched.email && (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              </div>
              {/* Error Message */}
              {errors.email && touched.email && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className={`pl-12 pr-20 ${getFieldClassName('password')}`}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* Icons Container */}
                <div className="absolute inset-y-0 right-3 flex items-center gap-2">
                  {/* Validation Icon */}
                  {touched.password && !errors.password && formData.password && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                  {errors.password && touched.password && (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  )}
                  {/* Password Toggle */}
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              {/* Error Message */}
              {errors.password && touched.password && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link 
                  to="/forgot-password" 
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? (
                <LoadingSpinner size="sm" />
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Security Badge */}
          <div className="mt-6 flex items-center justify-center">
            <div className="flex items-center gap-2 text-green-600">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">100% Secure & Private</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
