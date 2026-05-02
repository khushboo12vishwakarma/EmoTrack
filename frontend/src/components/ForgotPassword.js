// ForgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      // API call to Django backend
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:8000'}/api/auth/forgot-password/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Password reset instructions have been sent to your email address.');
        setEmailSent(true);
      } else {
        setError(data.error || 'Email not found. Please check your email address.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (emailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Check Your Email
            </h1>
            <p className="text-gray-600 mb-6">
              We've sent password reset instructions to <strong>{email}</strong>
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 text-left">
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  <strong>Didn't receive the email?</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>Check your spam or junk folder</li>
                  <li>Make sure you entered the correct email address</li>
                  <li>Wait a few minutes for the email to arrive</li>
                </ul>
                
                <div className="pt-4 space-y-3">
                  <button
                    onClick={() => {
                      setEmailSent(false);
                      setEmail('');
                      setMessage('');
                    }}
                    className="w-full py-3 px-4 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Try Different Email
                  </button>
                  
                  <Link
                    to="/login"
                    className="w-full flex justify-center py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    Back to Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Forgot Your Password?
          </h1>
          <p className="text-gray-600 mb-4">
            No worries! Enter your email address and we'll send you instructions to reset your password.
          </p>
          
          <Link 
            to="/login" 
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Link>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="pl-12 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Enter the email address associated with your EmoTrack account.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || !email}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? (
                <LoadingSpinner size="sm" />
              ) : (
                'Send Reset Instructions'
              )}
            </button>
          </form>

          {/* Help Text */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Remember your password?{' '}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
