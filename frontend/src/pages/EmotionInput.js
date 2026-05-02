
// // // export default EmotionInput;
// // import React, { useState, useRef } from 'react';
// // import { emotionService } from '../services/emotionService';
// // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // import ProfessionalSuggestion from '../components/ui/ProfessionalSuggestion';
// // import { 
// //   MessageCircle, 
// //   Mic, 
// //   Video, 
// //   Upload, 
// //   CheckCircle,
// //   X
// // } from 'lucide-react';

// // const EmotionInput = () => {
// //   const [inputType, setInputType] = useState('text');
// //   const [textInput, setTextInput] = useState('');
// //   const [audioFile, setAudioFile] = useState(null);
// //   const [videoFile, setVideoFile] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [result, setResult] = useState(null);
// //   const [error, setError] = useState('');
  
// //   const audioInputRef = useRef(null);
// //   const videoInputRef = useRef(null);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError('');
// //     setResult(null);

// //     try {
// //       const formData = {};
      
// //       if (inputType === 'text' && textInput) {
// //         formData.text_input = textInput;
// //       } else if (inputType === 'audio' && audioFile) {
// //         formData.audio_file = audioFile;
// //       } else if (inputType === 'video' && videoFile) {
// //         formData.video_file = videoFile;
// //       } else {
// //         setError('Please provide input in the selected format');
// //         setLoading(false);
// //         return;
// //       }

// //       const response = await emotionService.submitThought(formData);
// //       setResult(response);
      
// //       // Reset form
// //       setTextInput('');
// //       setAudioFile(null);
// //       setVideoFile(null);
// //       if (audioInputRef.current) audioInputRef.current.value = '';
// //       if (videoInputRef.current) videoInputRef.current.value = '';
      
// //     } catch (err) {
// //       setError(err.response?.data?.error || 'Failed to process your input');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleFileChange = (e, type) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       if (type === 'audio') {
// //         setAudioFile(file);
// //       } else if (type === 'video') {
// //         setVideoFile(file);
// //       }
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-8">
// //       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-8">
// //           <h1 className="text-3xl font-bold text-gray-900">Share Your Feelings</h1>
// //           <p className="mt-2 text-gray-600">
// //             Express how you're feeling through text, voice, or video
// //           </p>
// //         </div>

// //         {/* Input Type Selection */}
// //         <div className="card mb-8">
// //           <h2 className="text-xl font-semibold mb-4">Choose Input Method</h2>
// //           <div className="flex flex-wrap gap-4">
// //             <button
// //               onClick={() => setInputType('text')}
// //               className={`flex items-center px-4 py-2 rounded-lg border-2 transition-colors ${
// //                 inputType === 'text'
// //                   ? 'border-primary bg-blue-50 text-primary'
// //                   : 'border-gray-300 hover:border-primary'
// //               }`}
// //             >
// //               <MessageCircle className="h-5 w-5 mr-2" />
// //               Text
// //             </button>
// //             <button
// //               onClick={() => setInputType('audio')}
// //               className={`flex items-center px-4 py-2 rounded-lg border-2 transition-colors ${
// //                 inputType === 'audio'
// //                   ? 'border-primary bg-blue-50 text-primary'
// //                   : 'border-gray-300 hover:border-primary'
// //               }`}
// //             >
// //               <Mic className="h-5 w-5 mr-2" />
// //               Audio
// //             </button>
// //             <button
// //               onClick={() => setInputType('video')}
// //               className={`flex items-center px-4 py-2 rounded-lg border-2 transition-colors ${
// //                 inputType === 'video'
// //                   ? 'border-primary bg-blue-50 text-primary'
// //                   : 'border-gray-300 hover:border-primary'
// //               }`}
// //             >
// //               <Video className="h-5 w-5 mr-2" />
// //               Video
// //             </button>
// //           </div>
// //         </div>

// //         {/* Input Form */}
// //         <form onSubmit={handleSubmit} className="card mb-8">
// //           {error && (
// //             <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
// //               {error}
// //             </div>
// //           )}

// //           {inputType === 'text' && (
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Tell us how you're feeling
// //               </label>
// //               <textarea
// //                 value={textInput}
// //                 onChange={(e) => setTextInput(e.target.value)}
// //                 rows={6}
// //                 className="input-field resize-none"
// //                 placeholder="Express your thoughts and feelings here..."
// //                 required
// //               />
// //             </div>
// //           )}

// //           {inputType === 'audio' && (
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Upload Audio File
// //               </label>
// //               <div className="flex items-center space-x-4">
// //                 <input
// //                   ref={audioInputRef}
// //                   type="file"
// //                   accept="audio/*"
// //                   onChange={(e) => handleFileChange(e, 'audio')}
// //                   className="hidden"
// //                   id="audio-upload"
// //                   required
// //                 />
// //                 <label
// //                   htmlFor="audio-upload"
// //                   className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
// //                 >
// //                   <Upload className="h-5 w-5 mr-2" />
// //                   Choose Audio File
// //                 </label>
// //                 {audioFile && (
// //                   <div className="flex items-center text-green-600">
// //                     <CheckCircle className="h-5 w-5 mr-2" />
// //                     {audioFile.name}
// //                     <button
// //                       type="button"
// //                       onClick={() => {
// //                         setAudioFile(null);
// //                         audioInputRef.current.value = '';
// //                       }}
// //                       className="ml-2 text-red-500 hover:text-red-700"
// //                     >
// //                       <X className="h-4 w-4" />
// //                     </button>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           )}

// //           {inputType === 'video' && (
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Upload Video File
// //               </label>
// //               <div className="flex items-center space-x-4">
// //                 <input
// //                   ref={videoInputRef}
// //                   type="file"
// //                   accept="video/*"
// //                   onChange={(e) => handleFileChange(e, 'video')}
// //                   className="hidden"
// //                   id="video-upload"
// //                   required
// //                 />
// //                 <label
// //                   htmlFor="video-upload"
// //                   className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
// //                 >
// //                   <Upload className="h-5 w-5 mr-2" />
// //                   Choose Video File
// //                 </label>
// //                 {videoFile && (
// //                   <div className="flex items-center text-green-600">
// //                     <CheckCircle className="h-5 w-5 mr-2" />
// //                     {videoFile.name}
// //                     <button
// //                       type="button"
// //                       onClick={() => {
// //                         setVideoFile(null);
// //                         videoInputRef.current.value = '';
// //                       }}
// //                       className="ml-2 text-red-500 hover:text-red-700"
// //                     >
// //                       <X className="h-4 w-4" />
// //                     </button>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           )}

// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="w-full btn-primary mt-6"
// //           >
// //             {loading ? (
// //               <div className="flex items-center justify-center">
// //                 <LoadingSpinner size="sm" />
// //                 <span className="ml-2">Processing...</span>
// //               </div>
// //             ) : (
// //               'Analyze My Feelings'
// //             )}
// //           </button>
// //         </form>

// //         {/* Results - ONLY AI THERAPIST SUGGESTION */}
// //         {result && (
// //           <div className="space-y-6">
// //             {/* Emotion Analysis */}
// //             <div className="card">
// //               <h2 className="text-xl font-semibold mb-4">Emotion Analysis</h2>
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                 <div className="text-center p-4 bg-blue-50 rounded-lg">
// //                   <h3 className="font-medium text-gray-700">Detected Emotion</h3>
// //                   <p className="text-xl font-bold text-primary">{result.emotion}</p>
// //                 </div>
// //                 <div className="text-center p-4 bg-yellow-50 rounded-lg">
// //                   <h3 className="font-medium text-gray-700">Stress Level</h3>
// //                   <p className="text-xl font-bold text-accent">{result.stress_level}</p>
// //                 </div>
// //                 <div className="text-center p-4 bg-green-50 rounded-lg">
// //                   <h3 className="font-medium text-gray-700">Severity</h3>
// //                   <p className="text-xl font-bold text-secondary">{result.emotion_severity}</p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* ONLY AI Therapist Suggestion - Other sections removed */}
// //             {result.suggestion && (
// //               <ProfessionalSuggestion suggestion={result.suggestion} />
// //             )}

// //             {/* REMOVED SECTIONS: */}
// //             {/* 
// //             - Motivational Quote section
// //             - Relaxation Music section  
// //             - Meditation Video section
// //             */}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default EmotionInput;
// import FeelingInput from '../components/ui/FeelingInput';
// import ProfessionalSuggestion from '../components/ui/ProfessionalSuggestion';
// import { useState } from 'react';

// export default function EmotionInput() {
//   const [analysisResult, setAnalysisResult] = useState(null);

//   const handleAnalysisComplete = (result) => {
//     console.log('Analysis completed:', result);
//     setAnalysisResult(result);
//   };
  

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <FeelingInput onAnalysisComplete={handleAnalysisComplete} />
      
//       {/* Show analysis results */}
//       {analysisResult && (
//         <div className="mt-8">
//           <ProfessionalSuggestion suggestion={analysisResult.suggestion} />
//         </div>
//       )}
//     </div>
//   );
// }
// EmotionInput.js - Updated version
import FeelingInput from '../components/ui/FeelingInput';
import ProfessionalSuggestion from '../components/ui/ProfessionalSuggestion';
import { useState } from 'react';

export default function EmotionInput() {
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalysisComplete = (result) => {
    console.log('Analysis completed:', result);
    setAnalysisResult(result);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <FeelingInput onAnalysisComplete={handleAnalysisComplete} />
      
      {/* Show analysis results with emotion data */}
      {analysisResult && (
        <div className="mt-8">
          <ProfessionalSuggestion 
            suggestion={analysisResult.suggestion}
            // Pass the emotion analysis data
            emotionData={{
              emotion: analysisResult.emotion,
              stress_level: analysisResult.stress_level,
              time_of_analysis: analysisResult.time_of_analysis,
              date: analysisResult.date,
              emotion_severity: analysisResult.emotion_severity
            }}
          />
        </div>
      )}
    </div>
  );
}
