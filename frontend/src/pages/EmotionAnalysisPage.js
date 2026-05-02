// src/pages/EmotionAnalysisPage.js
import React from 'react';
import EmotionAnalysisDisplay from '../components/ui/EmotionAnalysisDisplay';
import { Brain, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EmotionAnalysisPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Emotion Analysis</h1>
              <p className="text-gray-600 text-lg">Your personalized emotional insights and AI guidance</p>
            </div>
          </div>
        </div>
        
        {/* Dynamic Emotion Analysis */}
        <EmotionAnalysisDisplay showLatestOnly={true} />
        
      </div>
    </div>
  );
};

export default EmotionAnalysisPage;
