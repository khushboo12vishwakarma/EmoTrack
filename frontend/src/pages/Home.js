import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Heart, Users, Sparkles, Zap, ArrowRight, Shield } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  const handleLearnMore = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
      
      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            {/* Logo Section - Responsive */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 sm:p-6 rounded-2xl shadow-2xl">
                  <Brain className="w-12 h-12 sm:w-16 sm:h-16 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-green-500 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
              </div>
            </div>
            
            {/* RESPONSIVE TITLE */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
              Welcome to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EmoTrack</span>
            </h1>
            
            {/* Responsive Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-medium mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Your AI-powered emotional companion that helps you track, understand, 
              and improve your mental wellbeing through advanced emotion analysis.
            </p>
            
            {/* Responsive Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 px-4">
              <button
                onClick={handleGetStarted}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                Get Started
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleLearnMore}
                className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="group text-center p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50">
              <div className="relative mb-4 sm:mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 sm:p-4 rounded-2xl w-fit mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">AI Emotion Analysis</h3>
              <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                Advanced AI analyzes your thoughts and emotions through text, voice, or video input
              </p>
            </div>

            <div className="group text-center p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50">
              <div className="relative mb-4 sm:mb-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 sm:p-4 rounded-2xl w-fit mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Personal Wellness</h3>
              <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                Get personalized tips, breathing exercises, and daily content for your mental health
              </p>
            </div>

            <div className="group text-center p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50">
              <div className="relative mb-4 sm:mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 sm:p-4 rounded-2xl w-fit mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Professional Support</h3>
              <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                Connect with licensed therapists for online and offline consultations
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center px-4">
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-12 text-white overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-4 left-4 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="mb-4 sm:mb-6">
                  <Zap className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-yellow-300 animate-pulse" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 leading-tight">
                  Ready to Transform Your Emotional Wellbeing?
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 font-medium max-w-3xl mx-auto">
                  Join thousands of users who are already improving their mental health with EmoTrack
                </p>
                <button
                  onClick={handleGetStarted}
                  className="group bg-white text-blue-600 px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 border-4 border-transparent hover:border-blue-200 flex items-center justify-center gap-2 sm:gap-3 mx-auto"
                >
                  Start Your Journey Today
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Privacy Badge */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-green-50 border-2 border-green-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg">
              <Shield className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-green-800 font-bold text-base sm:text-lg">100% Secure & Private</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
