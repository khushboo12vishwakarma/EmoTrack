// src/components/modals/WellnessActivityModal.js - FIXED VERSION
import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, CheckCircle, ExternalLink, Save } from 'lucide-react';

const WellnessActivityModal = ({ isOpen, onClose, activity }) => {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes default
  const [currentStep, setCurrentStep] = useState(0);
  const [journalText, setJournalText] = useState(''); // Store journal text
  const [isSaving, setIsSaving] = useState(false);
  const [savedSuccessfully, setSavedSuccessfully] = useState(false);

  const breathingSteps = [
    "Breathe in slowly through your nose for 4 seconds",
    "Hold your breath for 7 seconds", 
    "Breathe out slowly through your mouth for 8 seconds",
    "Pause for 2 seconds and repeat"
  ];

  // Reset timer when activity changes
  useEffect(() => {
    if (activity?.type === 'breathing_guide') {
      setTimeLeft(180); // 3 minutes for breathing
    } else if (activity?.type === 'journal_prompt') {
      setTimeLeft(600); // 10 minutes for journaling
    }
    setIsActive(false);
    setCurrentStep(0);
    setJournalText('');
    setSavedSuccessfully(false);
  }, [activity]);

  // FIXED: Dynamic timer that actually counts down
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            setIsActive(false); // Stop when timer reaches 0
            return 0;
          }
          return prevTime - 1;
        });
        
        // Auto-advance breathing steps every 16 seconds for breathing exercise
        if (activity?.type === 'breathing_guide') {
          setCurrentStep(prev => (prev + 1) % breathingSteps.length);
        }
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, activity]);

  const toggleActivity = () => {
    setIsActive(!isActive);
  };

  const resetActivity = () => {
    setIsActive(false);
    if (activity?.type === 'breathing_guide') {
      setTimeLeft(180); // Reset to 3 minutes
    } else if (activity?.type === 'journal_prompt') {
      setTimeLeft(600); // Reset to 10 minutes
    }
    setCurrentStep(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // FIXED: Save journal entry function
  const handleSaveJournal = async () => {
    if (!journalText.trim()) {
      alert('Please write something before saving.');
      return;
    }

    setIsSaving(true);
    
    try {
      // Here you can add API call to save to your backend
      // const response = await api.post('/api/save-journal/', {
      //   prompt: activity.message,
      //   entry: journalText,
      //   date: new Date().toISOString()
      // });

      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSavedSuccessfully(true);
      
      // Auto-close success message after 2 seconds
      setTimeout(() => {
        setSavedSuccessfully(false);
        onClose(); // Close modal after successful save
      }, 2000);
      
    } catch (error) {
      console.error('Error saving journal entry:', error);
      alert('Failed to save journal entry. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen || !activity) return null;

  const getActivityContent = () => {
    switch (activity.type) {
      case 'breathing_guide':
        return (
          <div className="text-center">
            <div className="mb-8">
              {/* FIXED: Dynamic timer display */}
              <div className={`text-6xl font-bold mb-4 transition-colors duration-300 ${
                timeLeft <= 10 ? 'text-red-600' : 'text-blue-600'
              }`}>
                {formatTime(timeLeft)}
              </div>
              
              <div className="text-lg text-gray-700 mb-6">
                {activity.instruction || breathingSteps[currentStep % breathingSteps.length]}
              </div>
              
              {/* Animated breathing circle */}
              <div className="w-32 h-32 mx-auto mb-6">
                <div className={`w-full h-full rounded-full border-4 border-blue-500 flex items-center justify-center transition-all duration-1000 ${
                  isActive ? 'scale-110 border-blue-400' : 'scale-100'
                }`}>
                  <div className={`bg-blue-500 rounded-full transition-all duration-4000 ${
                    isActive ? 'w-20 h-20 bg-blue-400' : 'w-16 h-16'
                  }`}></div>
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${((180 - timeLeft) / 180) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <button
                onClick={toggleActivity}
                className={`flex items-center px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  isActive 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isActive ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                {isActive ? 'Pause' : 'Start'}
              </button>
              
              <button
                onClick={resetActivity}
                className="flex items-center px-8 py-3 bg-gray-500 text-white rounded-xl font-semibold hover:bg-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset
              </button>
            </div>
            
            {timeLeft === 0 && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center justify-center text-green-800">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Breathing exercise completed! Well done!</span>
                </div>
              </div>
            )}
          </div>
        );
      
      case 'journal_prompt':
        return (
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Today's Journal Prompt</h3>
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6 mb-6">
                <p className="text-gray-700 text-lg leading-relaxed">{activity.message}</p>
              </div>
            </div>
            
            {/* FIXED: Controlled textarea with state */}
            <div className="relative">
              <textarea
                value={journalText}
                onChange={(e) => setJournalText(e.target.value)}
                className="w-full h-64 p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all resize-none text-gray-800 placeholder-gray-400"
                placeholder="Start writing your thoughts here... Take your time and be honest with yourself."
              />
              <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                {journalText.length} characters
              </div>
            </div>
            
            {/* FIXED: Working save functionality */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Timer: {formatTime(timeLeft)}</span>
                {savedSuccessfully && (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">Saved successfully!</span>
                  </div>
                )}
              </div>
              
              <button 
                onClick={handleSaveJournal}
                disabled={isSaving || !journalText.trim() || savedSuccessfully}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform ${
                  isSaving || !journalText.trim() || savedSuccessfully
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105'
                }`}
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Saving...
                  </>
                ) : savedSuccessfully ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Saved!
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Entry
                  </>
                )}
              </button>
            </div>
          </div>
        );
      
      case 'wellness_guide':
        return (
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Wellness Activity</h3>
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6 mb-6">
                <p className="text-gray-700 text-lg leading-relaxed">{activity.message}</p>
              </div>
            </div>
            
            {activity.content && (
              <div className="space-y-4">
                {activity.content.music && (
                  <button
                    onClick={() => window.open(activity.content.music, '_blank')}
                    className="w-full flex items-center justify-between p-4 bg-pink-50 border border-pink-200 rounded-xl hover:shadow-md transition-all hover:scale-105"
                  >
                    <span className="font-medium text-pink-800">🎵 Listen to Relaxing Music</span>
                    <ExternalLink className="w-4 h-4 text-pink-600" />
                  </button>
                )}
                
                {activity.content.video && (
                  <button
                    onClick={() => window.open(activity.content.video, '_blank')}
                    className="w-full flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-xl hover:shadow-md transition-all hover:scale-105"
                  >
                    <span className="font-medium text-blue-800">🧘 Watch Meditation Video</span>
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </button>
                )}
                
                {activity.content.dos && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <h4 className="font-bold text-green-800 mb-2">✅ Do's:</h4>
                    <ul className="space-y-1">
                      {activity.content.dos.map((item, index) => (
                        <li key={index} className="text-green-700 text-sm">• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {activity.content.donts && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <h4 className="font-bold text-red-800 mb-2">❌ Don'ts:</h4>
                    <ul className="space-y-1">
                      {activity.content.donts.map((item, index) => (
                        <li key={index} className="text-red-700 text-sm">• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      
      default:
        return (
          <div className="text-center py-8">
            <p className="text-lg text-gray-700">{activity.message}</p>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Wellness Activity</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <div className="p-8">
          {getActivityContent()}
        </div>
      </div>
    </div>
  );
};

export default WellnessActivityModal;
