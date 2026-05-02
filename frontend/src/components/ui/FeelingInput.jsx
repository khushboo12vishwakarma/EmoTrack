// // // import React, { useState, useRef, useEffect } from 'react';
// // // import { Mic, Video, FileText, Upload, Square, Play, Pause, Send, Heart, Sparkles, MessageCircle, CheckCircle, AlertCircle, RefreshCw, X } from 'lucide-react';

// // // const BeautifulFeelingInput = ({ onAnalysisComplete }) => {
// // //   const [selectedMode, setSelectedMode] = useState('text');
// // //   const [textInput, setTextInput] = useState('');
// // //   const [isRecording, setIsRecording] = useState(false);
// // //   const [audioURL, setAudioURL] = useState('');
// // //   const [videoURL, setVideoURL] = useState('');
// // //   const [isPlaying, setIsPlaying] = useState(false);
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [error, setError] = useState('');
// // //   const [successMessage, setSuccessMessage] = useState('');
// // //   const [connectionStatus, setConnectionStatus] = useState('checking');
// // //   const [recordingTime, setRecordingTime] = useState(0);
// // //   const [isProcessing, setIsProcessing] = useState(false);

// // //   const mediaRecorder = useRef(null);
// // //   const mediaStream = useRef(null);
// // //   const audioChunks = useRef([]);
// // //   const videoChunks = useRef([]);
// // //   const audioRef = useRef(null);
// // //   const videoRef = useRef(null);
// // //   const fileInputRef = useRef(null);
// // //   const recordedAudioBlob = useRef(null);
// // //   const recordedVideoBlob = useRef(null);
// // //   const uploadedFile = useRef(null);
// // //   const recordingTimer = useRef(null);

// // //   // All your existing useEffect and helper functions (FIXED HTML ENTITIES)
// // //   useEffect(() => {
// // //     checkServerConnection();
// // //     return () => {
// // //       forceCleanupRecording();
// // //     };
// // //   }, []);

// // //   useEffect(() => {
// // //     if (successMessage) {
// // //       const timer = setTimeout(() => setSuccessMessage(''), 5000);
// // //       return () => clearTimeout(timer);
// // //     }
// // //   }, [successMessage]);

// // //   const checkServerConnection = async () => {
// // //     try {
// // //       const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
// // //       const response = await fetch(`${apiUrl}/api/`, { method: 'HEAD' });
// // //       setConnectionStatus('connected');
// // //       setError('');
// // //     } catch (error) {
// // //       setConnectionStatus('disconnected');
// // //       setError('Cannot connect to Django server. Please ensure your backend is running on http://127.0.0.1:8000');
// // //     }
// // //   };

// // //   const retryConnection = () => {
// // //     setConnectionStatus('checking');
// // //     checkServerConnection();
// // //   };

// // //   const getAuthToken = () => {
// // //     return localStorage.getItem('access_token') || 'dummy-token-for-development';
// // //   };

// // //   const startRecordingTimer = () => {
// // //     setRecordingTime(0);
// // //     recordingTimer.current = setInterval(() => {
// // //       setRecordingTime(prev => prev + 1);
// // //     }, 1000);
// // //   };

// // //   const stopRecordingTimer = () => {
// // //     if (recordingTimer.current) {
// // //       clearInterval(recordingTimer.current);
// // //       recordingTimer.current = null;
// // //     }
// // //   };

// // //   const formatTime = (seconds) => {
// // //     const mins = Math.floor(seconds / 60);
// // //     const secs = seconds % 60;
// // //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// // //   };

// // //   const forceCleanupRecording = () => {
// // //     console.log('🧹 Force cleanup initiated');
// // //     try {
// // //       if (mediaStream.current) {
// // //         mediaStream.current.getTracks().forEach(track => {
// // //           console.log('🔌 Force stopping track:', track.kind, track.label);
// // //           track.stop();
// // //         });
// // //         mediaStream.current = null;
// // //       }
      
// // //       if (mediaRecorder.current) {
// // //         try {
// // //           if (mediaRecorder.current.state !== 'inactive') {
// // //             mediaRecorder.current.stop();
// // //           }
// // //         } catch (e) {
// // //           console.log('MediaRecorder already stopped or invalid');
// // //         }
// // //         mediaRecorder.current = null;
// // //       }
      
// // //       setIsRecording(false);
// // //       stopRecordingTimer();
      
// // //       console.log('✅ Force cleanup completed');
// // //     } catch (error) {
// // //       console.error('❌ Error during force cleanup:', error);
// // //       setIsRecording(false);
// // //       stopRecordingTimer();
// // //     }
// // //   };

// // //   const emergencyStop = () => {
// // //     console.log('🚨 Emergency stop activated');
// // //     forceCleanupRecording();
// // //     setError('Recording was force stopped. You can try recording again.');
// // //     setIsProcessing(false);
// // //   };

// // //   const stopRecording = () => {
// // //     console.log('🛑 Universal stop button clicked - Current mode:', selectedMode);
    
// // //     if (selectedMode === 'audio') {
// // //       stopAudioRecording();
// // //     } else if (selectedMode === 'video') {
// // //       stopVideoRecording();
// // //     }
// // //   };

// // //   // Your recording functions (FIXED HTML ENTITIES)
// // //   const startAudioRecording = async () => {
// // //     try {
// // //       setError('');
// // //       console.log('🎤 Starting audio recording...');
      
// // //       if (mediaRecorder.current) {
// // //         if (mediaRecorder.current.state === 'recording') {
// // //           console.log('⚠️ Stopping existing recording first');
// // //           mediaRecorder.current.stop();
// // //         }
// // //         mediaRecorder.current = null;
// // //       }
      
// // //       if (mediaStream.current) {
// // //         console.log('⚠️ Stopping existing stream first');
// // //         mediaStream.current.getTracks().forEach(track => track.stop());
// // //         mediaStream.current = null;
// // //       }

// // //       const stream = await navigator.mediaDevices.getUserMedia({ 
// // //         audio: {
// // //           echoCancellation: true,
// // //           noiseSuppression: true,
// // //           sampleRate: 44100
// // //         }
// // //       });
      
// // //       console.log('✅ Got media stream:', stream);
// // //       mediaStream.current = stream;
      
// // //       let mimeType = 'audio/webm;codecs=opus';
// // //       if (!MediaRecorder.isTypeSupported(mimeType)) {
// // //         mimeType = 'audio/webm';
// // //         if (!MediaRecorder.isTypeSupported(mimeType)) {
// // //           mimeType = '';
// // //         }
// // //       }
      
// // //       console.log('📝 Using MIME type:', mimeType || 'default');
      
// // //       mediaRecorder.current = new MediaRecorder(stream, 
// // //         mimeType ? { mimeType } : undefined
// // //       );
// // //       audioChunks.current = [];

// // //       mediaRecorder.current.ondataavailable = (event) => {
// // //         console.log('📊 Data available:', event.data.size, 'bytes');
// // //         if (event.data.size > 0) {
// // //           audioChunks.current.push(event.data);
// // //         }
// // //       };

// // //       mediaRecorder.current.onstop = () => {
// // //         console.log('🛑 Recording STOPPED - Processing data...');
        
// // //         try {
// // //           if (audioChunks.current.length === 0) {
// // //             console.warn('⚠️ No audio data recorded');
// // //             setError('No audio data was recorded. Please try again.');
// // //             forceCleanupRecording();
// // //             return;
// // //           }
          
// // //           const audioBlob = new Blob(audioChunks.current, { 
// // //             type: mimeType || 'audio/webm' 
// // //           });
          
// // //           console.log('🎵 Created audio blob:', audioBlob.size, 'bytes');
          
// // //           const audioUrl = URL.createObjectURL(audioBlob);
// // //           setAudioURL(audioUrl);
// // //           recordedAudioBlob.current = audioBlob;
          
// // //           console.log('✅ Audio recording completed successfully');
          
// // //         } catch (error) {
// // //           console.error('❌ Error processing audio data:', error);
// // //           setError('Error processing recorded audio');
// // //         } finally {
// // //           forceCleanupRecording();
// // //         }
// // //       };

// // //       mediaRecorder.current.onerror = (event) => {
// // //         console.error('❌ MediaRecorder error:', event.error);
// // //         setError(`Recording error: ${event.error?.name || 'Unknown error'}`);
// // //         forceCleanupRecording();
// // //       };

// // //       mediaRecorder.current.onstart = () => {
// // //         console.log('🟢 MediaRecorder started - State:', mediaRecorder.current.state);
// // //       };

// // //       console.log('▶️ Starting MediaRecorder...');
// // //       mediaRecorder.current.start(1000);
      
// // //       setIsRecording(true);
// // //       startRecordingTimer();
      
// // //       console.log('✅ Audio recording started successfully');
      
// // //     } catch (error) {
// // //       console.error('❌ Error starting audio recording:', error);
// // //       setError(`Unable to access microphone: ${error.message}`);
// // //       setIsRecording(false);
// // //       forceCleanupRecording();
// // //     }
// // //   };

// // //   const stopAudioRecording = () => {
// // //     console.log('🛑 Stop button clicked - Current recording state:', isRecording);
// // //     console.log('🛑 MediaRecorder exists:', !!mediaRecorder.current);
// // //     console.log('🛑 MediaRecorder state:', mediaRecorder.current?.state);
    
// // //     setIsRecording(false);
// // //     stopRecordingTimer();
    
// // //     if (!mediaRecorder.current) {
// // //       console.warn('⚠️ No MediaRecorder instance found');
// // //       return;
// // //     }
    
// // //     try {
// // //       if (mediaRecorder.current.state === 'recording') {
// // //         console.log('🛑 Calling MediaRecorder.stop()...');
// // //         mediaRecorder.current.stop();
// // //       } else {
// // //         console.log('ℹ️ MediaRecorder not in recording state, cleaning up manually');
// // //         forceCleanupRecording();
// // //       }
// // //     } catch (error) {
// // //       console.error('❌ Error in stop process:', error);
// // //       forceCleanupRecording();
// // //     }
// // //   };

// // //   // Similar video recording functions (FIXED HTML ENTITIES)
// // //   const startVideoRecording = async () => {
// // //     try {
// // //       setError('');
// // //       console.log('📹 Starting video recording...');
      
// // //       if (mediaRecorder.current) {
// // //         if (mediaRecorder.current.state === 'recording') {
// // //           mediaRecorder.current.stop();
// // //         }
// // //         mediaRecorder.current = null;
// // //       }
      
// // //       if (mediaStream.current) {
// // //         mediaStream.current.getTracks().forEach(track => track.stop());
// // //         mediaStream.current = null;
// // //       }

// // //       const stream = await navigator.mediaDevices.getUserMedia({ 
// // //         video: { width: { ideal: 1280 }, height: { ideal: 720 } },
// // //         audio: { echoCancellation: true, noiseSuppression: true }
// // //       });
      
// // //       mediaStream.current = stream;
      
// // //       let mimeType = 'video/webm;codecs=vp9,opus';
// // //       if (!MediaRecorder.isTypeSupported(mimeType)) {
// // //         mimeType = 'video/webm';
// // //         if (!MediaRecorder.isTypeSupported(mimeType)) {
// // //           mimeType = '';
// // //         }
// // //       }

// // //       mediaRecorder.current = new MediaRecorder(stream, 
// // //         mimeType ? { mimeType } : undefined
// // //       );
// // //       videoChunks.current = [];

// // //       mediaRecorder.current.ondataavailable = (event) => {
// // //         console.log('📊 Video data available:', event.data.size, 'bytes');
// // //         if (event.data.size > 0) {
// // //           videoChunks.current.push(event.data);
// // //         }
// // //       };

// // //       mediaRecorder.current.onstop = () => {
// // //         console.log('🛑 Video recording stopped');
        
// // //         try {
// // //           if (videoChunks.current.length === 0) {
// // //             console.warn('⚠️ No video data recorded');
// // //             setError('No video data was recorded. Please try again.');
// // //             forceCleanupRecording();
// // //             return;
// // //           }
          
// // //           const videoBlob = new Blob(videoChunks.current, { 
// // //             type: mimeType || 'video/webm' 
// // //           });
// // //           const videoUrl = URL.createObjectURL(videoBlob);
// // //           setVideoURL(videoUrl);
// // //           recordedVideoBlob.current = videoBlob;
          
// // //           console.log('✅ Video recording completed successfully');
          
// // //         } catch (error) {
// // //           console.error('❌ Error processing video data:', error);
// // //           setError('Error processing recorded video');
// // //         } finally {
// // //           forceCleanupRecording();
// // //         }
// // //       };

// // //       mediaRecorder.current.onerror = (event) => {
// // //         console.error('❌ Video recording error:', event.error);
// // //         setError(`Recording error: ${event.error?.name || 'Unknown error'}`);
// // //         forceCleanupRecording();
// // //       };

// // //       mediaRecorder.current.onstart = () => {
// // //         console.log('🟢 Video MediaRecorder started - State:', mediaRecorder.current.state);
// // //       };

// // //       mediaRecorder.current.start(1000);
// // //       setIsRecording(true);
// // //       startRecordingTimer();
      
// // //     } catch (error) {
// // //       console.error('❌ Error starting video recording:', error);
// // //       setError(`Unable to access camera: ${error.message}`);
// // //       setIsRecording(false);
// // //       forceCleanupRecording();
// // //     }
// // //   };

// // //   const stopVideoRecording = () => {
// // //     console.log('🛑 Stop video button clicked - Current recording state:', isRecording);
    
// // //     setIsRecording(false);
// // //     stopRecordingTimer();
    
// // //     if (!mediaRecorder.current) {
// // //       console.warn('⚠️ No video MediaRecorder instance found');
// // //       return;
// // //     }
    
// // //     try {
// // //       if (mediaRecorder.current.state === 'recording') {
// // //         console.log('🛑 Calling Video MediaRecorder.stop()...');
// // //         mediaRecorder.current.stop();
// // //       } else {
// // //         console.log('ℹ️ Video MediaRecorder not recording, cleaning up manually');
// // //         forceCleanupRecording();
// // //       }
// // //     } catch (error) {
// // //       console.error('❌ Error stopping video:', error);
// // //       forceCleanupRecording();
// // //     }
// // //   };

// // //   const handleRecordingClick = async (mode) => {
// // //     if (isProcessing) {
// // //       console.log('🚫 Already processing, ignoring click');
// // //       return;
// // //     }
    
// // //     setIsProcessing(true);
    
// // //     try {
// // //       if (isRecording) {
// // //         if (mode === 'audio') {
// // //           stopAudioRecording();
// // //         } else {
// // //           stopVideoRecording();
// // //         }
// // //       } else {
// // //         if (mode === 'audio') {
// // //           await startAudioRecording();
// // //         } else {
// // //           await startVideoRecording();
// // //         }
// // //       }
// // //     } finally {
// // //       setTimeout(() => {
// // //         setIsProcessing(false);
// // //       }, 1000);
// // //     }
// // //   };

// // //   const handleFileUpload = (event) => {
// // //     const file = event.target.files[0];
// // //     if (file) {
// // //       setError('');
      
// // //       if (file.size > 50 * 1024 * 1024) {
// // //         setError('File size too large. Please choose a file smaller than 50MB.');
// // //         return;
// // //       }

// // //       if (selectedMode === 'audio' && file.type.startsWith('audio/')) {
// // //         const url = URL.createObjectURL(file);
// // //         setAudioURL(url);
// // //         uploadedFile.current = file;
// // //         recordedAudioBlob.current = null;
// // //       } else if (selectedMode === 'video' && file.type.startsWith('video/')) {
// // //         const url = URL.createObjectURL(file);
// // //         setVideoURL(url);
// // //         uploadedFile.current = file;
// // //         recordedVideoBlob.current = null;
// // //       } else {
// // //         setError('Please select the correct file type for the selected mode.');
// // //         return;
// // //       }
// // //     }
// // //   };

// // //   const toggleAudioPlayback = () => {
// // //     if (audioRef.current) {
// // //       if (isPlaying) {
// // //         audioRef.current.pause();
// // //       } else {
// // //         audioRef.current.play();
// // //       }
// // //       setIsPlaying(!isPlaying);
// // //     }
// // //   };

// // //   // Your existing handleSubmit, resetForm, isReadyToSubmit functions (FIXED HTML ENTITIES)
// // //   const handleSubmit = async () => {
// // //     if (isSubmitting) return;
    
// // //     if (connectionStatus === 'disconnected') {
// // //       setError('Cannot connect to server. Please check if your Django backend is running.');
// // //       return;
// // //     }
    
// // //     setIsSubmitting(true);
// // //     setError('');
// // //     setSuccessMessage('');
    
// // //     try {
// // //       const formData = new FormData();
      
// // //       switch (selectedMode) {
// // //         case 'text':
// // //           if (!textInput.trim()) {
// // //             throw new Error('Please enter some text.');
// // //           }
// // //           formData.append('text_input', textInput.trim());
// // //           break;
          
// // //         case 'audio':
// // //           const audioFile = recordedAudioBlob.current || uploadedFile.current;
// // //           if (!audioFile) {
// // //             throw new Error('Please record audio or upload an audio file.');
// // //           }
          
// // //           const audioFileToSend = new File(
// // //             [audioFile], 
// // //             recordedAudioBlob.current ? 'recorded_audio.webm' : uploadedFile.current.name,
// // //             { type: audioFile.type || 'audio/webm' }
// // //           );
// // //           formData.append('audio_file', audioFileToSend);
// // //           break;
          
// // //         case 'video':
// // //           const videoFile = recordedVideoBlob.current || uploadedFile.current;
// // //           if (!videoFile) {
// // //             throw new Error('Please record video or upload a video file.');
// // //           }
          
// // //           const videoFileToSend = new File(
// // //             [videoFile], 
// // //             recordedVideoBlob.current ? 'recorded_video.webm' : uploadedFile.current.name,
// // //             { type: videoFile.type || 'video/webm' }
// // //           );
// // //           formData.append('video_file', videoFileToSend);
// // //           break;
// // //       }
      
// // //       const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
// // //       const response = await fetch(`${apiUrl}/api/submit-thought/`, {
// // //         method: 'POST',
// // //         headers: {
// // //           'Authorization': `Bearer ${getAuthToken()}`,
// // //         },
// // //         body: formData,
// // //       });
      
// // //       const contentType = response.headers.get('content-type');
      
// // //       if (!response.ok) {
// // //         if (response.status === 404) {
// // //           throw new Error('API endpoint not found. Please check if your Django server is running and the endpoint /api/submit-thought/ exists.');
// // //         } else if (response.status === 401) {
// // //           throw new Error('Authentication failed. Please log in again.');
// // //         } else if (response.status === 403) {
// // //           throw new Error('Permission denied. Please check your authentication token.');
// // //         } else if (contentType && contentType.includes('application/json')) {
// // //           const errorData = await response.json();
// // //           throw new Error(errorData.error || `Server error: ${response.status}`);
// // //         } else {
// // //           const errorText = await response.text();
// // //           if (errorText.includes('<!DOCTYPE')) {
// // //             throw new Error(`Server returned HTML error page (Status: ${response.status}). Check Django server logs.`);
// // //           }
// // //           throw new Error(`Server error: ${response.status}`);
// // //         }
// // //       }
      
// // //       if (contentType && contentType.includes('application/json')) {
// // //         const result = await response.json();
        
// // //         console.log('Analysis result:', result);
        
// // //         if (onAnalysisComplete) {
// // //           onAnalysisComplete(result);
// // //         }
        
// // //         resetForm();
// // //         setSuccessMessage('Your feelings have been analyzed successfully! 🎉');
        
// // //       } else {
// // //         throw new Error('Server did not return JSON response');
// // //       }
      
// // //     } catch (error) {
// // //       console.error('Error submitting feeling:', error);
// // //       setError(error.message);
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   const resetForm = () => {
// // //     setTextInput('');
// // //     setAudioURL('');
// // //     setVideoURL('');
// // //     setIsPlaying(false);
// // //     setRecordingTime(0);
// // //     recordedAudioBlob.current = null;
// // //     recordedVideoBlob.current = null;
// // //     uploadedFile.current = null;
// // //     if (fileInputRef.current) {
// // //       fileInputRef.current.value = '';
// // //     }
// // //   };

// // //   const isReadyToSubmit = () => {
// // //     if (connectionStatus === 'disconnected' || isRecording || isProcessing) return false;
    
// // //     switch (selectedMode) {
// // //       case 'text':
// // //         return textInput.trim().length > 0;
// // //       case 'audio':
// // //         return audioURL && (recordedAudioBlob.current || uploadedFile.current);
// // //       case 'video':
// // //         return videoURL && (recordedVideoBlob.current || uploadedFile.current);
// // //       default:
// // //         return false;
// // //     }
// // //   };

// // //   // PROFESSIONAL STYLED COMPONENT WITH MODERN ANIMATIONS AND TYPOGRAPHY
// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 font-['Inter','system-ui','-apple-system','BlinkMacSystemFont','Segoe_UI','Roboto','sans-serif'] antialiased">
// // //       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
// // //         {/* PROFESSIONAL ANIMATED HEADER */}
// // //         <header className="text-center mb-20 animate-fade-in-down">
// // //           <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
// // //             <Heart className="w-12 h-12 text-white animate-bounce" />
// // //           </div>
          
// // //           <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 mb-6 tracking-tight leading-tight animate-gradient-x">
// // //             EmoTrack Feelings Input
// // //           </h1>
// // //           <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4 font-medium">
// // //             Express yourself through text, voice, or video
// // //           </p>
// // //           <p className="text-lg text-gray-500 font-medium">
// // //             Your emotional wellness journey starts here ✨
// // //           </p>
// // //         </header>

// // //         {/* ANIMATED CONNECTION STATUS */}
// // //         <div className="flex justify-center mb-12 animate-fade-in">
// // //           <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-300 ${
// // //             connectionStatus === 'connected' 
// // //               ? 'bg-emerald-50 text-emerald-700 border-emerald-200 shadow-emerald-100' 
// // //               : connectionStatus === 'disconnected' 
// // //               ? 'bg-red-50 text-red-700 border-red-200 shadow-red-100'
// // //               : 'bg-amber-50 text-amber-700 border-amber-200 shadow-amber-100'
// // //           } shadow-lg hover:shadow-xl transform hover:scale-105`}>
// // //             {connectionStatus === 'connected' ? (
// // //               <>
// // //                 <CheckCircle className="w-5 h-5 animate-pulse" />
// // //                 <span>Server Connected</span>
// // //               </>
// // //             ) : connectionStatus === 'disconnected' ? (
// // //               <>
// // //                 <AlertCircle className="w-5 h-5 animate-bounce" />
// // //                 <span>Server Disconnected</span>
// // //                 <button 
// // //                   onClick={retryConnection}
// // //                   className="ml-2 p-1 hover:bg-red-100 rounded-full transition-colors hover:scale-110 transform"
// // //                   title="Retry connection"
// // //                 >
// // //                   <RefreshCw className="w-4 h-4 animate-spin" />
// // //                 </button>
// // //               </>
// // //             ) : (
// // //               <>
// // //                 <div className="w-5 h-5 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
// // //                 <span>Checking Connection...</span>
// // //               </>
// // //             )}
// // //           </div>
// // //         </div>

// // //         {/* MODERN AI ASSISTANT CARD */}
// // //         <section className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 mb-16 relative overflow-hidden animate-fade-in-up hover:shadow-3xl transition-all duration-300">
// // //           <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-30 -mr-20 -mt-20 animate-pulse"></div>
          
// // //           <div className="flex items-start space-x-6 relative z-10">
// // //             <div className="flex-shrink-0">
// // //               <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300">
// // //                 <MessageCircle className="w-7 h-7 text-white animate-pulse" />
// // //               </div>
// // //             </div>
            
// // //             <div className="flex-1">
// // //               <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
// // //                 <p className="text-gray-800 leading-relaxed text-lg mb-4 font-medium">
// // //                   Hello! I'm here to help you understand and manage your emotions. 
// // //                   You can share your feelings through text, voice, or video. 
// // //                   <strong className="text-indigo-700 font-bold"> How are you feeling today?</strong>
// // //                 </p>
// // //                 <div className="flex items-center justify-between text-sm">
// // //                   <span className="text-gray-500 font-medium">
// // //                     {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
// // //                   </span>
// // //                   <div className="flex items-center space-x-2">
// // //                     <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
// // //                     <span className="text-emerald-600 font-bold">AI Assistant Active</span>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ANIMATED SUCCESS MESSAGE */}
// // //         {successMessage && (
// // //           <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 mb-12 shadow-lg animate-bounce">
// // //             <div className="flex items-center">
// // //               <CheckCircle className="w-7 h-7 text-emerald-500 mr-4 flex-shrink-0 animate-pulse" />
// // //               <p className="text-emerald-800 font-bold text-lg">{successMessage}</p>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* ANIMATED ERROR DISPLAY */}
// // //         {error && (
// // //           <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-12 shadow-lg animate-shake">
// // //             <div className="flex items-start">
// // //               <AlertCircle className="w-7 h-7 text-red-500 mr-4 flex-shrink-0 mt-0.5 animate-bounce" />
// // //               <p className="text-red-800 font-semibold text-lg leading-relaxed">{error}</p>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* PROFESSIONAL MODE SELECTION WITH ANIMATIONS */}
// // //         <div className="flex justify-center mb-16 animate-fade-in-up">
// // //           <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-3 shadow-2xl border border-white/50">
// // //             <div className="flex space-x-3">
// // //               {[
// // //                 { mode: 'text', icon: FileText, label: 'Text Input', color: 'from-emerald-500 to-green-600' },
// // //                 { mode: 'audio', icon: Mic, label: 'Voice Recording', color: 'from-blue-500 to-indigo-600' },
// // //                 { mode: 'video', icon: Video, label: 'Video Message', color: 'from-purple-500 to-pink-600' }
// // //               ].map(({ mode, icon: Icon, label, color }) => (
// // //                 <button
// // //                   key={mode}
// // //                   onClick={() => {
// // //                     setSelectedMode(mode);
// // //                     setError('');
// // //                   }}
// // //                   disabled={isSubmitting || isRecording || isProcessing}
// // //                   className={`group flex items-center gap-4 px-8 py-5 rounded-2xl transition-all duration-300 font-bold text-lg transform hover:scale-105 ${
// // //                     selectedMode === mode
// // //                       ? `bg-gradient-to-r ${color} text-white shadow-2xl scale-105`
// // //                       : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:shadow-lg'
// // //                   } ${(isSubmitting || isRecording || isProcessing) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
// // //                 >
// // //                   <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
// // //                   <span>{label}</span>
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* MAIN PROFESSIONAL INPUT CARD WITH ANIMATIONS */}
// // //         <main className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden animate-fade-in-up hover:shadow-3xl transition-all duration-500">
// // //           <div className="p-12 lg:p-16">
            
// // //             {/* TEXT MODE */}
// // //             {selectedMode === 'text' && (
// // //               <div className="text-center space-y-10 animate-fade-in">
// // //                 <div>
// // //                   <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl mb-8 shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse">
// // //                     <FileText className="w-10 h-10 text-white" />
// // //                   </div>
// // //                   <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Share Your Thoughts</h2>
// // //                   <p className="text-gray-600 text-xl font-medium">Express your feelings in your own words</p>
// // //                 </div>
                
// // //                 <div className="relative max-w-5xl mx-auto">
// // //                   <textarea
// // //                     value={textInput}
// // //                     onChange={(e) => setTextInput(e.target.value)}
// // //                     placeholder="What's on your mind today? Share your feelings, thoughts, or experiences... There's no judgment here, just support and understanding."
// // //                     disabled={isSubmitting}
// // //                     maxLength={1000}
// // //                     className="w-full h-56 p-8 border-2 border-gray-300 rounded-3xl resize-none focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-gray-50 text-gray-800 text-lg leading-relaxed transition-all duration-300 placeholder:text-gray-400 hover:border-gray-400 hover:shadow-lg"
// // //                   />
// // //                   <div className="absolute bottom-6 right-6 text-sm text-gray-400 bg-white px-4 py-2 rounded-full border border-gray-200 font-semibold">
// // //                     {textInput.length}/1000
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {/* AUDIO MODE WITH PROFESSIONAL ANIMATIONS */}
// // //             {selectedMode === 'audio' && (
// // //               <div className="text-center space-y-12 animate-fade-in">
// // //                 <div>
// // //                   <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl mb-8 shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse">
// // //                     <Mic className="w-10 h-10 text-white" />
// // //                   </div>
// // //                   <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Voice Your Feelings</h2>
// // //                   <p className="text-gray-600 text-xl font-medium">Sometimes it's easier to speak than write</p>
// // //                 </div>
                
// // //                 {/* ANIMATED RECORDING BUTTON */}
// // //                 <div className="relative">
// // //                   <button
// // //                     onClick={() => handleRecordingClick('audio')}
// // //                     disabled={isSubmitting || isProcessing}
// // //                     className={`w-40 h-40 rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-110 disabled:opacity-50 shadow-2xl relative ${
// // //                       isRecording
// // //                         ? 'bg-gradient-to-br from-red-500 to-pink-600 animate-pulse cursor-pointer shadow-red-300'
// // //                         : 'bg-gradient-to-br from-blue-500 to-indigo-600 hover:shadow-blue-300 hover:shadow-2xl'
// // //                     } ${isProcessing ? 'opacity-50' : ''}`}
// // //                   >
// // //                     {isRecording ? (
// // //                       <Square className="w-16 h-16 text-white animate-pulse" />
// // //                     ) : (
// // //                       <Mic className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
// // //                     )}
// // //                   </button>
                  
// // //                   {isRecording && (
// // //                     <>
// // //                       <div className="absolute -inset-6 rounded-full border-4 border-red-300 animate-ping"></div>
// // //                       <div className="absolute -inset-12 rounded-full border-2 border-red-200 animate-ping animation-delay-200"></div>
// // //                       <div className="absolute top-full mt-8 text-center">
// // //                         <div className="bg-red-500 text-white px-6 py-3 rounded-full font-bold text-lg animate-bounce shadow-lg">
// // //                           {formatTime(recordingTime)}
// // //                         </div>
// // //                       </div>
// // //                     </>
// // //                   )}
// // //                 </div>
                
// // //                 <p className="text-xl font-bold text-gray-700">
// // //                   {isProcessing ? (
// // //                     <span className="text-amber-600 animate-pulse">⏳ Processing...</span>
// // //                   ) : isRecording ? (
// // //                     <span className="text-red-600 animate-bounce">🔴 Recording... Click to stop</span>
// // //                   ) : (
// // //                     'Click to start recording your voice'
// // //                   )}
// // //                 </p>
                
// // //                 {/* ANIMATED AUDIO PLAYBACK */}
// // //                 {audioURL && (
// // //                   <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-10 border-2 border-blue-200 animate-fade-in-up shadow-xl">
// // //                     <div className="flex items-center justify-center space-x-8">
// // //                       <button
// // //                         onClick={toggleAudioPlayback}
// // //                         disabled={isSubmitting}
// // //                         className="p-5 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 transform hover:scale-110"
// // //                       >
// // //                         {isPlaying ? (
// // //                           <Pause className="w-8 h-8 text-blue-600 animate-pulse" />
// // //                         ) : (
// // //                           <Play className="w-8 h-8 text-blue-600" />
// // //                         )}
// // //                       </button>
// // //                       <audio
// // //                         ref={audioRef}
// // //                         src={audioURL}
// // //                         onEnded={() => setIsPlaying(false)}
// // //                         className="hidden"
// // //                       />
// // //                       <div className="flex items-center space-x-4">
// // //                         <CheckCircle className="w-6 h-6 text-emerald-500 animate-pulse" />
// // //                         <span className="text-blue-800 font-bold text-xl">Audio ready to submit</span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 )}
                
// // //                 <div className="flex items-center justify-center space-x-8">
// // //                   <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
// // //                   <span className="text-gray-500 font-bold text-xl">or</span>
// // //                   <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
// // //                 </div>
                
// // //                 <button
// // //                   onClick={() => fileInputRef.current?.click()}
// // //                   disabled={isSubmitting || isRecording}
// // //                   className="inline-flex items-center gap-4 px-10 py-6 bg-white border-3 border-dashed border-blue-300 rounded-3xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 disabled:opacity-50 shadow-xl hover:shadow-2xl transform hover:scale-105"
// // //                 >
// // //                   <Upload className="w-6 h-6 text-blue-500" />
// // //                   <span className="font-bold text-blue-700 text-lg">Upload Audio File</span>
// // //                 </button>
                
// // //                 <input
// // //                   ref={fileInputRef}
// // //                   type="file"
// // //                   accept="audio/*,.m4a,.mp3,.wav,.ogg"
// // //                   onChange={handleFileUpload}
// // //                   className="hidden"
// // //                 />
// // //               </div>
// // //             )}

// // //             {/* VIDEO MODE WITH PROFESSIONAL ANIMATIONS */}
// // //             {selectedMode === 'video' && (
// // //               <div className="text-center space-y-12 animate-fade-in">
// // //                 <div>
// // //                   <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl mb-8 shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse">
// // //                     <Video className="w-10 h-10 text-white" />
// // //                   </div>
// // //                   <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Record Your Message</h2>
// // //                   <p className="text-gray-600 text-xl font-medium">Sometimes visual expression helps us connect better</p>
// // //                 </div>
                
// // //                 <div className="relative">
// // //                   <button
// // //                     onClick={() => handleRecordingClick('video')}
// // //                     disabled={isSubmitting || isProcessing}
// // //                     className={`w-40 h-40 rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-110 disabled:opacity-50 shadow-2xl ${
// // //                       isRecording
// // //                         ? 'bg-gradient-to-br from-red-500 to-pink-600 animate-pulse cursor-pointer shadow-red-300'
// // //                         : 'bg-gradient-to-br from-purple-500 to-pink-600 hover:shadow-purple-300 hover:shadow-2xl'
// // //                     } ${isProcessing ? 'opacity-50' : ''}`}
// // //                   >
// // //                     {isRecording ? (
// // //                       <Square className="w-16 h-16 text-white animate-pulse" />
// // //                     ) : (
// // //                       <Video className="w-16 h-16 text-white" />
// // //                     )}
// // //                   </button>
                  
// // //                   {isRecording && (
// // //                     <>
// // //                       <div className="absolute -inset-6 rounded-full border-4 border-red-300 animate-ping"></div>
// // //                       <div className="absolute -inset-12 rounded-full border-2 border-red-200 animate-ping animation-delay-200"></div>
// // //                       <div className="absolute top-full mt-8 text-center">
// // //                         <div className="bg-red-500 text-white px-6 py-3 rounded-full font-bold text-lg animate-bounce shadow-lg">
// // //                           {formatTime(recordingTime)}
// // //                         </div>
// // //                       </div>
// // //                     </>
// // //                   )}
// // //                 </div>
                
// // //                 <p className="text-xl font-bold text-gray-700">
// // //                   {isProcessing ? (
// // //                     <span className="text-amber-600 animate-pulse">⏳ Processing...</span>
// // //                   ) : isRecording ? (
// // //                     <span className="text-red-600 animate-bounce">🔴 Recording video... Click to stop</span>
// // //                   ) : (
// // //                     'Click to start video recording'
// // //                   )}
// // //                 </p>
                
// // //                 {/* ANIMATED VIDEO PREVIEW */}
// // //                 {videoURL && (
// // //                   <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-10 border-2 border-purple-200 animate-fade-in-up shadow-xl">
// // //                     <video
// // //                       ref={videoRef}
// // //                       src={videoURL}
// // //                       controls
// // //                       className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
// // //                     />
// // //                     <div className="mt-8 flex items-center justify-center space-x-4">
// // //                       <CheckCircle className="w-6 h-6 text-emerald-500 animate-pulse" />
// // //                       <span className="text-purple-800 font-bold text-xl">Video ready to submit</span>
// // //                     </div>
// // //                   </div>
// // //                 )}
                
// // //                 <div className="flex items-center justify-center space-x-8">
// // //                   <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
// // //                   <span className="text-gray-500 font-bold text-xl">or</span>
// // //                   <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
// // //                 </div>
                
// // //                 <button
// // //                   onClick={() => fileInputRef.current?.click()}
// // //                   disabled={isSubmitting || isRecording}
// // //                   className="inline-flex items-center gap-4 px-10 py-6 bg-white border-3 border-dashed border-purple-300 rounded-3xl hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 disabled:opacity-50 shadow-xl hover:shadow-2xl transform hover:scale-105"
// // //                 >
// // //                   <Upload className="w-6 h-6 text-purple-500" />
// // //                   <span className="font-bold text-purple-700 text-lg">Upload Video File</span>
// // //                 </button>
                
// // //                 <input
// // //                   ref={fileInputRef}
// // //                   type="file"
// // //                   accept="video/*,.mp4,.mov,.avi,.wmv"
// // //                   onChange={handleFileUpload}
// // //                   className="hidden"
// // //                 />
// // //               </div>
// // //             )}
// // //           </div>
// // //         </main>

// // //         {/* PROFESSIONAL ANIMATED SUBMIT BUTTON */}
// // //         <div className="text-center mt-16 animate-fade-in-up">
// // //           <button
// // //             onClick={handleSubmit}
// // //             disabled={!isReadyToSubmit() || isSubmitting}
// // //             className="group relative inline-flex items-center gap-5 px-16 py-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-black text-xl rounded-3xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105 disabled:transform-none animate-gradient-x"
// // //           >
// // //             {isSubmitting ? (
// // //               <>
// // //                 <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
// // //                 <span>Analyzing Your Feelings...</span>
// // //                 <Sparkles className="w-6 h-6 animate-pulse" />
// // //               </>
// // //             ) : (
// // //               <>
// // //                 <Send className="w-6 h-6 transition-transform group-hover:translate-x-2 duration-300" />
// // //                 <span>Submit Feeling</span>
// // //                 <Heart className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
// // //               </>
// // //             )}
            
// // //             <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
// // //           </button>
          
// // //           <p className="text-gray-500 text-lg mt-8 font-semibold">
// // //             Your feelings are safe and secure with us 🔒
// // //           </p>
// // //         </div>
        
// // //         {/* ANIMATED TRUST INDICATORS */}
// // //         <footer className="flex items-center justify-center space-x-10 mt-16 text-gray-500 animate-fade-in-up">
// // //           {[
// // //             { color: 'bg-emerald-400', text: 'AI-Powered Analysis' },
// // //             { color: 'bg-blue-400', text: '100% Confidential' },
// // //             { color: 'bg-purple-400', text: 'Professional Support' }
// // //           ].map((item, index) => (
// // //             <div key={index} className="flex items-center space-x-3 group hover:scale-110 transition-transform duration-300">
// // //               <div className={`w-4 h-4 ${item.color} rounded-full animate-pulse group-hover:animate-bounce`}></div>
// // //               <span className="font-bold text-sm group-hover:text-gray-700 transition-colors duration-300">{item.text}</span>
// // //             </div>
// // //           ))}
// // //         </footer>

// // //         {/* FLOATING STOP BUTTON WITH ANIMATIONS */}
// // //         {isRecording && (
// // //           <div className="fixed bottom-8 right-8 z-50 animate-bounce">
// // //             <button
// // //               onClick={stopRecording}
// // //               className="bg-red-600 hover:bg-red-700 text-white rounded-full p-5 shadow-2xl flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-300 transform hover:scale-110 animate-pulse"
// // //               aria-label="Stop recording"
// // //             >
// // //               <Square className="w-7 h-7" />
// // //             </button>
// // //           </div>
// // //         )}

// // //       </div>
      
// // //       {/* CUSTOM CSS FOR ADDITIONAL ANIMATIONS */}
// // //       <style jsx>{`
// // //         @keyframes gradient-x {
// // //           0%, 100% {
// // //             background-size: 200% 200%;
// // //             background-position: left center;
// // //           }
// // //           50% {
// // //             background-size: 200% 200%;
// // //             background-position: right center;
// // //           }
// // //         }
        
// // //         .animate-gradient-x {
// // //           animation: gradient-x 3s ease infinite;
// // //         }
        
// // //         @keyframes fade-in-down {
// // //           0% {
// // //             opacity: 0;
// // //             transform: translateY(-20px);
// // //           }
// // //           100% {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }
        
// // //         .animate-fade-in-down {
// // //           animation: fade-in-down 0.8s ease-out forwards;
// // //         }
        
// // //         @keyframes fade-in-up {
// // //           0% {
// // //             opacity: 0;
// // //             transform: translateY(20px);
// // //           }
// // //           100% {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }
        
// // //         .animate-fade-in-up {
// // //           animation: fade-in-up 0.8s ease-out forwards;
// // //         }
        
// // //         @keyframes fade-in {
// // //           0% {
// // //             opacity: 0;
// // //           }
// // //           100% {
// // //             opacity: 1;
// // //           }
// // //         }
        
// // //         .animate-fade-in {
// // //           animation: fade-in 0.6s ease-out forwards;
// // //         }
        
// // //         @keyframes shake {
// // //           0%, 100% { transform: translateX(0); }
// // //           25% { transform: translateX(-5px); }
// // //           75% { transform: translateX(5px); }
// // //         }
        
// // //         .animate-shake {
// // //           animation: shake 0.5s ease-in-out;
// // //         }
        
// // //         .animation-delay-200 {
// // //           animation-delay: 200ms;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default BeautifulFeelingInput;






// // import React, { useState, useRef, useEffect } from 'react';
// // import { Mic, Video, FileText, Upload, Square, Play, Pause, Send, Heart, Sparkles, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

// // const BeautifulFeelingInput = ({ onAnalysisComplete }) => {
// //   const [selectedMode, setSelectedMode] = useState('audio');
// //   const [textInput, setTextInput] = useState('');
// //   const [isRecording, setIsRecording] = useState(false);
// //   const [audioURL, setAudioURL] = useState('');
// //   const [videoURL, setVideoURL] = useState('');
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [error, setError] = useState('');
// //   const [successMessage, setSuccessMessage] = useState('');
// //   const [connectionStatus, setConnectionStatus] = useState('checking');
// //   const [recordingTime, setRecordingTime] = useState(0);

// //   const mediaRecorder = useRef(null);
// //   const mediaStream = useRef(null);
// //   const chunks = useRef([]);
// //   const audioRef = useRef(null);
// //   const videoRef = useRef(null);
// //   const fileInputRef = useRef(null);
// //   const recordedBlob = useRef(null);
// //   const uploadedFile = useRef(null);
// //   const recordingTimer = useRef(null);
// //   const isRecordingRef = useRef(false); // Track recording state

// //   useEffect(() => {
// //     checkServerConnection();
// //     return () => {
// //       cleanup();
// //     };
// //   }, []);

// //   const checkServerConnection = async () => {
// //     try {
// //       const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
// //       const response = await fetch(`${apiUrl}/api/`, { method: 'HEAD' });
// //       setConnectionStatus('connected');
// //       setError('');
// //     } catch (error) {
// //       setConnectionStatus('disconnected');
// //       setError('Cannot connect to Django server. Please ensure your backend is running on http://127.0.0.1:8000');
// //     }
// //   };

// //   const getAuthToken = () => {
// //     return localStorage.getItem('access_token') || 'dummy-token-for-development';
// //   };

// //   const startTimer = () => {
// //     setRecordingTime(0);
// //     recordingTimer.current = setInterval(() => {
// //       setRecordingTime(prev => prev + 1);
// //     }, 1000);
// //   };

// //   const stopTimer = () => {
// //     if (recordingTimer.current) {
// //       clearInterval(recordingTimer.current);
// //       recordingTimer.current = null;
// //     }
// //   };

// //   const formatTime = (seconds) => {
// //     const mins = Math.floor(seconds / 60);
// //     const secs = seconds % 60;
// //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// //   };

// //   // COMPLETE CLEANUP FUNCTION
// //   const cleanup = () => {
// //     console.log('🧹 Cleanup started');
    
// //     // Stop timer
// //     stopTimer();
    
// //     // Stop media stream
// //     if (mediaStream.current) {
// //       mediaStream.current.getTracks().forEach(track => {
// //         console.log('🔌 Stopping track:', track.kind);
// //         track.stop();
// //       });
// //       mediaStream.current = null;
// //     }
    
// //     // Reset recorder
// //     if (mediaRecorder.current) {
// //       mediaRecorder.current = null;
// //     }
    
// //     // Reset states
// //     isRecordingRef.current = false;
// //     setIsRecording(false);
// //     chunks.current = [];
    
// //     console.log('✅ Cleanup completed');
// //   };

// //   // SIMPLE START RECORDING
// //   const startRecording = async () => {
// //     try {
// //       console.log('🎤 Starting recording...');
// //       setError('');
// //       cleanup(); // Clean first
      
// //       const constraints = selectedMode === 'audio' 
// //         ? { audio: true }
// //         : { video: true, audio: true };

// //       // Get media stream
// //       const stream = await navigator.mediaDevices.getUserMedia(constraints);
// //       mediaStream.current = stream;
      
// //       // Create recorder
// //       mediaRecorder.current = new MediaRecorder(stream);
// //       chunks.current = [];
      
// //       // Set up events BEFORE starting
// //       mediaRecorder.current.ondataavailable = (event) => {
// //         if (event.data.size > 0) {
// //           console.log('📊 Data chunk received:', event.data.size);
// //           chunks.current.push(event.data);
// //         }
// //       };
      
// //       mediaRecorder.current.onstop = () => {
// //         console.log('🛑 Recording stopped event');
// //         handleRecordingComplete();
// //       };
      
// //       mediaRecorder.current.onerror = (event) => {
// //         console.error('❌ Recording error:', event.error);
// //         setError('Recording error occurred');
// //         cleanup();
// //       };
      
// //       // Start recording
// //       mediaRecorder.current.start();
// //       isRecordingRef.current = true;
// //       setIsRecording(true);
// //       startTimer();
      
// //       console.log('✅ Recording started successfully');
      
// //     } catch (error) {
// //       console.error('❌ Failed to start recording:', error);
// //       setError(`Cannot access ${selectedMode === 'audio' ? 'microphone' : 'camera'}: ${error.message}`);
// //       cleanup();
// //     }
// //   };

// //   // SIMPLE STOP RECORDING
// //   const stopRecording = () => {
// //     console.log('🛑 Stopping recording...');
    
// //     if (!mediaRecorder.current || !isRecordingRef.current) {
// //       console.log('⚠️ No active recording to stop');
// //       cleanup();
// //       return;
// //     }
    
// //     try {
// //       if (mediaRecorder.current.state === 'recording') {
// //         console.log('🛑 Calling recorder.stop()');
// //         mediaRecorder.current.stop();
// //         isRecordingRef.current = false;
// //         setIsRecording(false);
// //         stopTimer();
        
// //         // Force stop after 3 seconds if needed
// //         setTimeout(() => {
// //           if (mediaRecorder.current && mediaRecorder.current.state !== 'inactive') {
// //             console.log('⏰ Force stopping recording');
// //             cleanup();
// //             handleRecordingComplete();
// //           }
// //         }, 3000);
// //       } else {
// //         console.log('ℹ️ Recorder not in recording state');
// //         cleanup();
// //       }
// //     } catch (error) {
// //       console.error('❌ Error stopping recording:', error);
// //       cleanup();
// //       handleRecordingComplete();
// //     }
// //   };

// //   // HANDLE RECORDING COMPLETION
// //   const handleRecordingComplete = () => {
// //     console.log('✅ Processing recorded data...');
    
// //     try {
// //       if (chunks.current.length === 0) {
// //         setError('No data was recorded. Please try again.');
// //         cleanup();
// //         return;
// //       }
      
// //       const mimeType = selectedMode === 'audio' ? 'audio/webm' : 'video/webm';
// //       const blob = new Blob(chunks.current, { type: mimeType });
// //       recordedBlob.current = blob;
      
// //       const url = URL.createObjectURL(blob);
      
// //       if (selectedMode === 'audio') {
// //         setAudioURL(url);
// //       } else {
// //         setVideoURL(url);
// //       }
      
// //       setSuccessMessage(`${selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)} recorded successfully! 🎉`);
// //       console.log('✅ Recording processing completed');
      
// //     } catch (error) {
// //       console.error('❌ Error processing recording:', error);
// //       setError('Error processing recorded data');
// //     } finally {
// //       cleanup();
// //     }
// //   };

// //   // MAIN BUTTON HANDLER
// //   const handleRecordingClick = () => {
// //     console.log('🎯 Recording button clicked - Current state:', isRecordingRef.current);
    
// //     if (isRecordingRef.current) {
// //       stopRecording();
// //     } else {
// //       startRecording();
// //     }
// //   };

// //   const handleFileUpload = (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       setError('');
      
// //       if (file.size > 50 * 1024 * 1024) {
// //         setError('File size too large. Please choose a file smaller than 50MB.');
// //         return;
// //       }

// //       if (selectedMode === 'audio' && file.type.startsWith('audio/')) {
// //         const url = URL.createObjectURL(file);
// //         setAudioURL(url);
// //         uploadedFile.current = file;
// //         recordedBlob.current = null;
// //       } else if (selectedMode === 'video' && file.type.startsWith('video/')) {
// //         const url = URL.createObjectURL(file);
// //         setVideoURL(url);
// //         uploadedFile.current = file;
// //         recordedBlob.current = null;
// //       } else {
// //         setError('Please select the correct file type for the selected mode.');
// //         return;
// //       }
// //     }
// //   };

// //   const toggleAudioPlayback = () => {
// //     if (audioRef.current) {
// //       if (isPlaying) {
// //         audioRef.current.pause();
// //       } else {
// //         audioRef.current.play();
// //       }
// //       setIsPlaying(!isPlaying);
// //     }
// //   };

// //   const handleSubmit = async () => {
// //     if (isSubmitting) return;
    
// //     if (connectionStatus === 'disconnected') {
// //       setError('Cannot connect to server. Please check if your Django backend is running.');
// //       return;
// //     }
    
// //     setIsSubmitting(true);
// //     setError('');
// //     setSuccessMessage('');
    
// //     try {
// //       const formData = new FormData();
      
// //       switch (selectedMode) {
// //         case 'text':
// //           if (!textInput.trim()) {
// //             throw new Error('Please enter some text.');
// //           }
// //           formData.append('text_input', textInput.trim());
// //           break;
          
// //         case 'audio':
// //           const audioFile = recordedBlob.current || uploadedFile.current;
// //           if (!audioFile) {
// //             throw new Error('Please record audio or upload an audio file.');
// //           }
          
// //           const audioFileToSend = new File(
// //             [audioFile], 
// //             recordedBlob.current ? 'recorded_audio.webm' : uploadedFile.current.name,
// //             { type: audioFile.type || 'audio/webm' }
// //           );
// //           formData.append('audio_file', audioFileToSend);
// //           break;
          
// //         case 'video':
// //           const videoFile = recordedBlob.current || uploadedFile.current;
// //           if (!videoFile) {
// //             throw new Error('Please record video or upload a video file.');
// //           }
          
// //           const videoFileToSend = new File(
// //             [videoFile], 
// //             recordedBlob.current ? 'recorded_video.webm' : uploadedFile.current.name,
// //             { type: videoFile.type || 'video/webm' }
// //           );
// //           formData.append('video_file', videoFileToSend);
// //           break;
// //       }
      
// //       const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
// //       const response = await fetch(`${apiUrl}/api/submit-thought/`, {
// //         method: 'POST',
// //         headers: {
// //           'Authorization': `Bearer ${getAuthToken()}`,
// //         },
// //         body: formData,
// //       });
      
// //       if (!response.ok) {
// //         throw new Error(`Server error: ${response.status}`);
// //       }
      
// //       const result = await response.json();
      
// //       if (onAnalysisComplete) {
// //         onAnalysisComplete(result);
// //       }
      
// //       resetForm();
// //       setSuccessMessage('Your feelings have been analyzed successfully! 🎉');
      
// //     } catch (error) {
// //       console.error('Error submitting feeling:', error);
// //       setError(error.message);
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const resetForm = () => {
// //     setTextInput('');
// //     setAudioURL('');
// //     setVideoURL('');
// //     setIsPlaying(false);
// //     setRecordingTime(0);
// //     recordedBlob.current = null;
// //     uploadedFile.current = null;
// //     if (fileInputRef.current) {
// //       fileInputRef.current.value = '';
// //     }
// //   };

// //   const isReadyToSubmit = () => {
// //     if (connectionStatus === 'disconnected' || isRecording) return false;
    
// //     switch (selectedMode) {
// //       case 'text':
// //         return textInput.trim().length > 0;
// //       case 'audio':
// //         return audioURL && (recordedBlob.current || uploadedFile.current);
// //       case 'video':
// //         return videoURL && (recordedBlob.current || uploadedFile.current);
// //       default:
// //         return false;
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 p-8">
// //       <div className="max-w-4xl mx-auto">
        
// //         {/* HEADER */}
// //         <header className="text-center mb-12">
// //           <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 mb-4">
// //             EmoTrack Feelings Input
// //           </h1>
// //           <p className="text-xl text-gray-600 mb-8">Express yourself through text, voice, or video</p>
// //         </header>

// //         {/* CONNECTION STATUS */}
// //         <div className="flex justify-center mb-8">
// //           <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold ${
// //             connectionStatus === 'connected' 
// //               ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-200' 
// //               : 'bg-red-50 text-red-700 border-2 border-red-200'
// //           }`}>
// //             {connectionStatus === 'connected' ? (
// //               <>
// //                 <CheckCircle className="w-5 h-5" />
// //                 <span>Server Connected</span>
// //               </>
// //             ) : (
// //               <>
// //                 <AlertCircle className="w-5 h-5" />
// //                 <span>Server Disconnected</span>
// //                 <button onClick={checkServerConnection} className="ml-2 p-1 hover:bg-red-100 rounded-full">
// //                   <RefreshCw className="w-4 h-4" />
// //                 </button>
// //               </>
// //             )}
// //           </div>
// //         </div>

// //         {/* SUCCESS/ERROR MESSAGES */}
// //         {successMessage && (
// //           <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4 mb-8">
// //             <div className="flex items-center">
// //               <CheckCircle className="w-6 h-6 text-emerald-500 mr-3" />
// //               <p className="text-emerald-800 font-bold">{successMessage}</p>
// //             </div>
// //           </div>
// //         )}

// //         {error && (
// //           <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-8">
// //             <div className="flex items-start">
// //               <AlertCircle className="w-6 h-6 text-red-500 mr-3 mt-0.5" />
// //               <p className="text-red-800 font-semibold">{error}</p>
// //             </div>
// //           </div>
// //         )}

// //         {/* MODE SELECTION */}
// //         <div className="flex justify-center mb-12">
// //           <div className="bg-white rounded-2xl p-3 shadow-lg">
// //             <div className="flex space-x-3">
// //               {[
// //                 { mode: 'text', icon: FileText, label: 'Text' },
// //                 { mode: 'audio', icon: Mic, label: 'Audio' },
// //                 { mode: 'video', icon: Video, label: 'Video' }
// //               ].map(({ mode, icon: Icon, label }) => (
// //                 <button
// //                   key={mode}
// //                   onClick={() => {
// //                     setSelectedMode(mode);
// //                     setError('');
// //                     cleanup();
// //                   }}
// //                   disabled={isRecording}
// //                   className={`flex items-center gap-3 px-6 py-3 rounded-xl font-bold transition-all ${
// //                     selectedMode === mode
// //                       ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
// //                       : 'text-gray-700 hover:bg-gray-50'
// //                   } ${isRecording ? 'opacity-50 cursor-not-allowed' : ''}`}
// //                 >
// //                   <Icon className="w-5 h-5" />
// //                   <span>{label}</span>
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* MAIN CONTENT */}
// //         <main className="bg-white rounded-3xl shadow-xl p-12">
          
// //           {/* TEXT MODE */}
// //           {selectedMode === 'text' && (
// //             <div className="text-center space-y-8">
// //               <h2 className="text-3xl font-black text-gray-900">Share Your Thoughts</h2>
// //               <textarea
// //                 value={textInput}
// //                 onChange={(e) => setTextInput(e.target.value)}
// //                 placeholder="What's on your mind today?"
// //                 disabled={isSubmitting}
// //                 maxLength={1000}
// //                 className="w-full h-48 p-6 border-2 border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
// //               />
// //               <div className="text-sm text-gray-500">{textInput.length}/1000</div>
// //             </div>
// //           )}

// //           {/* AUDIO MODE */}
// //           {selectedMode === 'audio' && (
// //             <div className="text-center space-y-8">
// //               <h2 className="text-3xl font-black text-gray-900">Voice Your Feelings</h2>
              
// //               <div className="relative">
// //                 <button
// //                   onClick={handleRecordingClick}
// //                   disabled={isSubmitting}
// //                   className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
// //                     isRecording
// //                       ? 'bg-red-500 animate-pulse'
// //                       : 'bg-blue-500 hover:bg-blue-600 hover:scale-110'
// //                   }`}
// //                 >
// //                   {isRecording ? (
// //                     <Square className="w-12 h-12 text-white" />
// //                   ) : (
// //                     <Mic className="w-12 h-12 text-white" />
// //                   )}
// //                 </button>
                
// //                 {isRecording && (
// //                   <div className="mt-4">
// //                     <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold inline-block">
// //                       {formatTime(recordingTime)}
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
              
// //               <p className="text-lg font-bold text-gray-700">
// //                 {isRecording ? (
// //                   <span className="text-red-600">🔴 Recording... Click to stop</span>
// //                 ) : (
// //                   'Click to start recording'
// //                 )}
// //               </p>
              
// //               {audioURL && (
// //                 <div className="bg-blue-50 rounded-2xl p-6">
// //                   <div className="flex items-center justify-center space-x-6">
// //                     <button
// //                       onClick={toggleAudioPlayback}
// //                       className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
// //                     >
// //                       {isPlaying ? (
// //                         <Pause className="w-6 h-6 text-blue-600" />
// //                       ) : (
// //                         <Play className="w-6 h-6 text-blue-600" />
// //                       )}
// //                     </button>
// //                     <audio
// //                       ref={audioRef}
// //                       src={audioURL}
// //                       onEnded={() => setIsPlaying(false)}
// //                       className="hidden"
// //                     />
// //                     <span className="text-blue-800 font-bold">Audio ready to submit</span>
// //                   </div>
// //                 </div>
// //               )}
              
// //               <div className="pt-4">
// //                 <button
// //                   onClick={() => fileInputRef.current?.click()}
// //                   disabled={isSubmitting || isRecording}
// //                   className="inline-flex items-center gap-3 px-6 py-4 border-2 border-dashed border-blue-300 rounded-2xl hover:border-blue-400 hover:bg-blue-50 transition-all"
// //                 >
// //                   <Upload className="w-5 h-5 text-blue-500" />
// //                   <span className="font-bold text-blue-700">Upload Audio File</span>
// //                 </button>
// //               </div>
// //             </div>
// //           )}

// //           {/* VIDEO MODE */}
// //           {selectedMode === 'video' && (
// //             <div className="text-center space-y-8">
// //               <h2 className="text-3xl font-black text-gray-900">Record Your Message</h2>
              
// //               <div className="relative">
// //                 <button
// //                   onClick={handleRecordingClick}
// //                   disabled={isSubmitting}
// //                   className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
// //                     isRecording
// //                       ? 'bg-red-500 animate-pulse'
// //                       : 'bg-purple-500 hover:bg-purple-600 hover:scale-110'
// //                   }`}
// //                 >
// //                   {isRecording ? (
// //                     <Square className="w-12 h-12 text-white" />
// //                   ) : (
// //                     <Video className="w-12 h-12 text-white" />
// //                   )}
// //                 </button>
                
// //                 {isRecording && (
// //                   <div className="mt-4">
// //                     <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold inline-block">
// //                       {formatTime(recordingTime)}
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
              
// //               <p className="text-lg font-bold text-gray-700">
// //                 {isRecording ? (
// //                   <span className="text-red-600">🔴 Recording... Click to stop</span>
// //                 ) : (
// //                   'Click to start recording'
// //                 )}
// //               </p>
              
// //               {videoURL && (
// //                 <div className="bg-purple-50 rounded-2xl p-6">
// //                   <video
// //                     ref={videoRef}
// //                     src={videoURL}
// //                     controls
// //                     className="w-full max-w-lg mx-auto rounded-xl shadow-lg"
// //                   />
// //                   <div className="mt-4">
// //                     <span className="text-purple-800 font-bold">Video ready to submit</span>
// //                   </div>
// //                 </div>
// //               )}
              
// //               <div className="pt-4">
// //                 <button
// //                   onClick={() => fileInputRef.current?.click()}
// //                   disabled={isSubmitting || isRecording}
// //                   className="inline-flex items-center gap-3 px-6 py-4 border-2 border-dashed border-purple-300 rounded-2xl hover:border-purple-400 hover:bg-purple-50 transition-all"
// //                 >
// //                   <Upload className="w-5 h-5 text-purple-500" />
// //                   <span className="font-bold text-purple-700">Upload Video File</span>
// //                 </button>
// //               </div>
// //             </div>
// //           )}
          
// //           <input
// //             ref={fileInputRef}
// //             type="file"
// //             accept={selectedMode === 'audio' ? 'audio/*' : 'video/*'}
// //             onChange={handleFileUpload}
// //             className="hidden"
// //           />
// //         </main>

// //         {/* SUBMIT BUTTON */}
// //         <div className="text-center mt-12">
// //           <button
// //             onClick={handleSubmit}
// //             disabled={!isReadyToSubmit() || isSubmitting}
// //             className="inline-flex items-center gap-4 px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black text-lg rounded-2xl hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
// //           >
// //             {isSubmitting ? (
// //               <>
// //                 <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
// //                 <span>Analyzing...</span>
// //               </>
// //             ) : (
// //               <>
// //                 <Send className="w-5 h-5" />
// //                 <span>Submit Feeling</span>
// //                 <Heart className="w-5 h-5" />
// //               </>
// //             )}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BeautifulFeelingInput;




// import React, { useState, useRef, useEffect } from 'react';
// import { Mic, Video, FileText, Upload, Square, Play, Pause, Send, Heart, Sparkles, CheckCircle, AlertCircle, RefreshCw, MessageCircle } from 'lucide-react';

// const BeautifulFeelingInput = ({ onAnalysisComplete }) => {
//   const [selectedMode, setSelectedMode] = useState('audio');
//   const [textInput, setTextInput] = useState('');
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioURL, setAudioURL] = useState('');
//   const [videoURL, setVideoURL] = useState('');
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [connectionStatus, setConnectionStatus] = useState('checking');
//   const [recordingTime, setRecordingTime] = useState(0);

//   const mediaRecorder = useRef(null);
//   const mediaStream = useRef(null);
//   const chunks = useRef([]);
//   const audioRef = useRef(null);
//   const videoRef = useRef(null);
//   const fileInputRef = useRef(null);
//   const recordedBlob = useRef(null);
//   const uploadedFile = useRef(null);
//   const recordingTimer = useRef(null);
//   const isRecordingRef = useRef(false);

//   useEffect(() => {
//     checkServerConnection();
//     return () => {
//       cleanup();
//     };
//   }, []);

//   const checkServerConnection = async () => {
//     try {
//       const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
//       const response = await fetch(`${apiUrl}/api/`, { method: 'HEAD' });
//       setConnectionStatus('connected');
//       setError('');
//     } catch (error) {
//       setConnectionStatus('disconnected');
//       setError('Cannot connect to Django server. Please ensure your backend is running on http://127.0.0.1:8000');
//     }
//   };

//   const getAuthToken = () => {
//     return localStorage.getItem('access_token') || 'dummy-token-for-development';
//   };

//   const startTimer = () => {
//     setRecordingTime(0);
//     recordingTimer.current = setInterval(() => {
//       setRecordingTime(prev => prev + 1);
//     }, 1000);
//   };

//   const stopTimer = () => {
//     if (recordingTimer.current) {
//       clearInterval(recordingTimer.current);
//       recordingTimer.current = null;
//     }
//   };

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   const cleanup = () => {
//     console.log('🧹 Cleanup started');
    
//     stopTimer();
    
//     if (mediaStream.current) {
//       mediaStream.current.getTracks().forEach(track => {
//         console.log('🔌 Stopping track:', track.kind);
//         track.stop();
//       });
//       mediaStream.current = null;
//     }
    
//     if (mediaRecorder.current) {
//       mediaRecorder.current = null;
//     }
    
//     isRecordingRef.current = false;
//     setIsRecording(false);
//     chunks.current = [];
    
//     console.log('✅ Cleanup completed');
//   };

//   const startRecording = async () => {
//     try {
//       console.log('🎤 Starting recording...');
//       setError('');
//       cleanup();
      
//       const constraints = selectedMode === 'audio' 
//         ? { audio: true }
//         : { video: true, audio: true };

//       const stream = await navigator.mediaDevices.getUserMedia(constraints);
//       mediaStream.current = stream;
      
//       mediaRecorder.current = new MediaRecorder(stream);
//       chunks.current = [];
      
//       mediaRecorder.current.ondataavailable = (event) => {
//         if (event.data.size > 0) {
//           console.log('📊 Data chunk received:', event.data.size);
//           chunks.current.push(event.data);
//         }
//       };
      
//       mediaRecorder.current.onstop = () => {
//         console.log('🛑 Recording stopped event');
//         handleRecordingComplete();
//       };
      
//       mediaRecorder.current.onerror = (event) => {
//         console.error('❌ Recording error:', event.error);
//         setError('Recording error occurred');
//         cleanup();
//       };
      
//       mediaRecorder.current.start();
//       isRecordingRef.current = true;
//       setIsRecording(true);
//       startTimer();
      
//       console.log('✅ Recording started successfully');
      
//     } catch (error) {
//       console.error('❌ Failed to start recording:', error);
//       setError(`Cannot access ${selectedMode === 'audio' ? 'microphone' : 'camera'}: ${error.message}`);
//       cleanup();
//     }
//   };

//   const stopRecording = () => {
//     console.log('🛑 Stopping recording...');
    
//     if (!mediaRecorder.current || !isRecordingRef.current) {
//       console.log('⚠️ No active recording to stop');
//       cleanup();
//       return;
//     }
    
//     try {
//       if (mediaRecorder.current.state === 'recording') {
//         console.log('🛑 Calling recorder.stop()');
//         mediaRecorder.current.stop();
//         isRecordingRef.current = false;
//         setIsRecording(false);
//         stopTimer();
        
//         setTimeout(() => {
//           if (mediaRecorder.current && mediaRecorder.current.state !== 'inactive') {
//             console.log('⏰ Force stopping recording');
//             cleanup();
//             handleRecordingComplete();
//           }
//         }, 3000);
//       } else {
//         console.log('ℹ️ Recorder not in recording state');
//         cleanup();
//       }
//     } catch (error) {
//       console.error('❌ Error stopping recording:', error);
//       cleanup();
//       handleRecordingComplete();
//     }
//   };

//   const handleRecordingComplete = () => {
//     console.log('✅ Processing recorded data...');
    
//     try {
//       if (chunks.current.length === 0) {
//         setError('No data was recorded. Please try again.');
//         cleanup();
//         return;
//       }
      
//       const mimeType = selectedMode === 'audio' ? 'audio/webm' : 'video/webm';
//       const blob = new Blob(chunks.current, { type: mimeType });
//       recordedBlob.current = blob;
      
//       const url = URL.createObjectURL(blob);
      
//       if (selectedMode === 'audio') {
//         setAudioURL(url);
//       } else {
//         setVideoURL(url);
//       }
      
//       setSuccessMessage(`${selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)} recorded successfully! 🎉`);
//       console.log('✅ Recording processing completed');
      
//     } catch (error) {
//       console.error('❌ Error processing recording:', error);
//       setError('Error processing recorded data');
//     } finally {
//       cleanup();
//     }
//   };

//   const handleRecordingClick = () => {
//     console.log('🎯 Recording button clicked - Current state:', isRecordingRef.current);
    
//     if (isRecordingRef.current) {
//       stopRecording();
//     } else {
//       startRecording();
//     }
//   };

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setError('');
      
//       if (file.size > 50 * 1024 * 1024) {
//         setError('File size too large. Please choose a file smaller than 50MB.');
//         return;
//       }

//       if (selectedMode === 'audio' && file.type.startsWith('audio/')) {
//         const url = URL.createObjectURL(file);
//         setAudioURL(url);
//         uploadedFile.current = file;
//         recordedBlob.current = null;
//       } else if (selectedMode === 'video' && file.type.startsWith('video/')) {
//         const url = URL.createObjectURL(file);
//         setVideoURL(url);
//         uploadedFile.current = file;
//         recordedBlob.current = null;
//       } else {
//         setError('Please select the correct file type for the selected mode.');
//         return;
//       }
//     }
//   };

//   const toggleAudioPlayback = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleSubmit = async () => {
//     if (isSubmitting) return;
    
//     if (connectionStatus === 'disconnected') {
//       setError('Cannot connect to server. Please check if your Django backend is running.');
//       return;
//     }
    
//     setIsSubmitting(true);
//     setError('');
//     setSuccessMessage('');
    
//     try {
//       const formData = new FormData();
      
//       switch (selectedMode) {
//         case 'text':
//           if (!textInput.trim()) {
//             throw new Error('Please enter some text.');
//           }
//           formData.append('text_input', textInput.trim());
//           break;
          
//         case 'audio':
//           const audioFile = recordedBlob.current || uploadedFile.current;
//           if (!audioFile) {
//             throw new Error('Please record audio or upload an audio file.');
//           }
          
//           const audioFileToSend = new File(
//             [audioFile], 
//             recordedBlob.current ? 'recorded_audio.webm' : uploadedFile.current.name,
//             { type: audioFile.type || 'audio/webm' }
//           );
//           formData.append('audio_file', audioFileToSend);
//           break;
          
//         case 'video':
//           const videoFile = recordedBlob.current || uploadedFile.current;
//           if (!videoFile) {
//             throw new Error('Please record video or upload a video file.');
//           }
          
//           const videoFileToSend = new File(
//             [videoFile], 
//             recordedBlob.current ? 'recorded_video.webm' : uploadedFile.current.name,
//             { type: videoFile.type || 'video/webm' }
//           );
//           formData.append('video_file', videoFileToSend);
//           break;
//       }
      
//       const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
//       const response = await fetch(`${apiUrl}/api/submit-thought/`, {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${getAuthToken()}`,
//         },
//         body: formData,
//       });
      
//       if (!response.ok) {
//         throw new Error(`Server error: ${response.status}`);
//       }
      
//       const result = await response.json();
      
//       if (onAnalysisComplete) {
//         onAnalysisComplete(result);
//       }
      
//       resetForm();
//       setSuccessMessage('Your feelings have been analyzed successfully! 🎉');
      
//     } catch (error) {
//       console.error('Error submitting feeling:', error);
//       setError(error.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const resetForm = () => {
//     setTextInput('');
//     setAudioURL('');
//     setVideoURL('');
//     setIsPlaying(false);
//     setRecordingTime(0);
//     recordedBlob.current = null;
//     uploadedFile.current = null;
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   const isReadyToSubmit = () => {
//     if (connectionStatus === 'disconnected' || isRecording) return false;
    
//     switch (selectedMode) {
//       case 'text':
//         return textInput.trim().length > 0;
//       case 'audio':
//         return audioURL && (recordedBlob.current || uploadedFile.current);
//       case 'video':
//         return videoURL && (recordedBlob.current || uploadedFile.current);
//       default:
//         return false;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 p-8">
//       <div className="max-w-4xl mx-auto">
        
//         {/* HEADER */}
//         <header className="text-center mb-12">
//           <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 mb-4">
//             EmoTrack Feelings Input
//           </h1>
//           <p className="text-xl text-gray-500 mb-8">Express yourself through text, voice, or video</p>
//           <p className="text-lg text-gray-500 font-medium">
//             Your emotional wellness journey starts here ✨
//           </p>
//         </header>

//         {/* AI ASSISTANT CHAT INTERFACE */}
//         <section className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 mb-16 relative overflow-hidden animate-fade-in-up hover:shadow-3xl transition-all duration-300">
//           <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-30 -mr-20 -mt-20 animate-pulse"></div>
          
//           <div className="flex items-start space-x-6 relative z-10">
//             <div className="flex-shrink-0">
//               <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300">
//                 <MessageCircle className="w-7 h-7 text-white animate-pulse" />
//               </div>
//             </div>
            
//             <div className="flex-1">
//               <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
//                 <p className="text-gray-800 leading-relaxed text-lg mb-4 font-medium">
//                   Hello! I'm here to help you understand and manage your emotions. 
//                   You can share your feelings through text, voice, or video. 
//                   <strong className="text-indigo-700 font-bold"> How are you feeling today?</strong>
//                 </p>
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-gray-500 font-medium">
//                     {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                   </span>
//                   <div className="flex items-center space-x-2">
//                     <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
//                     <span className="text-emerald-600 font-bold">AI Assistant Active</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CONNECTION STATUS */}
//         <div className="flex justify-center mb-8">
//           <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold ${
//             connectionStatus === 'connected' 
//               ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-200' 
//               : 'bg-red-50 text-red-700 border-2 border-red-200'
//           }`}>
//             {connectionStatus === 'connected' ? (
//               <>
//                 <CheckCircle className="w-5 h-5" />
//                 <span>Server Connected</span>
//               </>
//             ) : (
//               <>
//                 <AlertCircle className="w-5 h-5" />
//                 <span>Server Disconnected</span>
//                 <button onClick={checkServerConnection} className="ml-2 p-1 hover:bg-red-100 rounded-full">
//                   <RefreshCw className="w-4 h-4" />
//                 </button>
//               </>
//             )}
//           </div>
//         </div>

//         {/* SUCCESS/ERROR MESSAGES */}
//         {successMessage && (
//           <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4 mb-8">
//             <div className="flex items-center">
//               <CheckCircle className="w-6 h-6 text-emerald-500 mr-3" />
//               <p className="text-emerald-800 font-bold">{successMessage}</p>
//             </div>
//           </div>
//         )}

//         {error && (
//           <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-8">
//             <div className="flex items-start">
//               <AlertCircle className="w-6 h-6 text-red-500 mr-3 mt-0.5" />
//               <p className="text-red-800 font-semibold">{error}</p>
//             </div>
//           </div>
//         )}

//         {/* MODE SELECTION */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white rounded-2xl p-3 shadow-lg">
//             <div className="flex space-x-3">
//               {[
//                 { mode: 'text', icon: FileText, label: 'Text' },
//                 { mode: 'audio', icon: Mic, label: 'Audio' },
//                 { mode: 'video', icon: Video, label: 'Video' }
//               ].map(({ mode, icon: Icon, label }) => (
//                 <button
//                   key={mode}
//                   onClick={() => {
//                     setSelectedMode(mode);
//                     setError('');
//                     cleanup();
//                   }}
//                   disabled={isRecording}
//                   className={`flex items-center gap-3 px-6 py-3 rounded-xl font-bold transition-all ${
//                     selectedMode === mode
//                       ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
//                       : 'text-gray-700 hover:bg-gray-50'
//                   } ${isRecording ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 >
//                   <Icon className="w-5 h-5" />
//                   <span>{label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* MAIN CONTENT */}
//         <main className="bg-white rounded-3xl shadow-xl p-12">
          
//           {/* TEXT MODE */}
//           {selectedMode === 'text' && (
//             <div className="text-center space-y-8">
//               <h2 className="text-3xl font-black text-gray-900">Share Your Thoughts</h2>
//               <textarea
//                 value={textInput}
//                 onChange={(e) => setTextInput(e.target.value)}
//                 placeholder="What's on your mind today? Share your feelings, thoughts, or experiences. There's no judgment here, just support and understanding."
//                 disabled={isSubmitting}
//                 maxLength={1000}
//                 className="w-full h-48 p-6 border-2 border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
//               />
//               <div className="text-sm text-gray-500">{textInput.length}/1000</div>
//             </div>
//           )}

//           {/* AUDIO MODE */}
//           {selectedMode === 'audio' && (
//             <div className="text-center space-y-8">
//               <h2 className="text-3xl font-black text-gray-900">Voice Your Feelings</h2>
              
//               <div className="relative">
//                 <button
//                   onClick={handleRecordingClick}
//                   disabled={isSubmitting}
//                   className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
//                     isRecording
//                       ? 'bg-red-500 animate-pulse'
//                       : 'bg-blue-500 hover:bg-blue-600 hover:scale-110'
//                   }`}
//                 >
//                   {isRecording ? (
//                     <Square className="w-12 h-12 text-white" />
//                   ) : (
//                     <Mic className="w-12 h-12 text-white" />
//                   )}
//                 </button>
                
//                 {isRecording && (
//                   <div className="mt-4">
//                     <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold inline-block">
//                       {formatTime(recordingTime)}
//                     </div>
//                   </div>
//                 )}
//               </div>
              
//               <p className="text-lg font-bold text-gray-700">
//                 {isRecording ? (
//                   <span className="text-red-600">🔴 Recording... Click to stop</span>
//                 ) : (
//                   'Click to start recording'
//                 )}
//               </p>
              
//               {audioURL && (
//                 <div className="bg-blue-50 rounded-2xl p-6">
//                   <div className="flex items-center justify-center space-x-6">
//                     <button
//                       onClick={toggleAudioPlayback}
//                       className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
//                     >
//                       {isPlaying ? (
//                         <Pause className="w-6 h-6 text-blue-600" />
//                       ) : (
//                         <Play className="w-6 h-6 text-blue-600" />
//                       )}
//                     </button>
//                     <audio
//                       ref={audioRef}
//                       src={audioURL}
//                       onEnded={() => setIsPlaying(false)}
//                       className="hidden"
//                     />
//                     <span className="text-blue-800 font-bold">Audio ready to submit</span>
//                   </div>
//                 </div>
//               )}
              
//               <div className="pt-4">
//                 <button
//                   onClick={() => fileInputRef.current?.click()}
//                   disabled={isSubmitting || isRecording}
//                   className="inline-flex items-center gap-3 px-6 py-4 border-2 border-dashed border-blue-300 rounded-2xl hover:border-blue-400 hover:bg-blue-50 transition-all"
//                 >
//                   <Upload className="w-5 h-5 text-blue-500" />
//                   <span className="font-bold text-blue-700">Upload Audio File</span>
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* VIDEO MODE */}
//           {selectedMode === 'video' && (
//             <div className="text-center space-y-8">
//               <h2 className="text-3xl font-black text-gray-900">Record Your Message</h2>
              
//               <div className="relative">
//                 <button
//                   onClick={handleRecordingClick}
//                   disabled={isSubmitting}
//                   className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
//                     isRecording
//                       ? 'bg-red-500 animate-pulse'
//                       : 'bg-purple-500 hover:bg-purple-600 hover:scale-110'
//                   }`}
//                 >
//                   {isRecording ? (
//                     <Square className="w-12 h-12 text-white" />
//                   ) : (
//                     <Video className="w-12 h-12 text-white" />
//                   )}
//                 </button>
                
//                 {isRecording && (
//                   <div className="mt-4">
//                     <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold inline-block">
//                       {formatTime(recordingTime)}
//                     </div>
//                   </div>
//                 )}
//               </div>
              
//               <p className="text-lg font-bold text-gray-700">
//                 {isRecording ? (
//                   <span className="text-red-600">🔴 Recording... Click to stop</span>
//                 ) : (
//                   'Click to start recording'
//                 )}
//               </p>
              
//               {videoURL && (
//                 <div className="bg-purple-50 rounded-2xl p-6">
//                   <video
//                     ref={videoRef}
//                     src={videoURL}
//                     controls
//                     className="w-full max-w-lg mx-auto rounded-xl shadow-lg"
//                   />
//                   <div className="mt-4">
//                     <span className="text-purple-800 font-bold">Video ready to submit</span>
//                   </div>
//                 </div>
//               )}
              
//               <div className="pt-4">
//                 <button
//                   onClick={() => fileInputRef.current?.click()}
//                   disabled={isSubmitting || isRecording}
//                   className="inline-flex items-center gap-3 px-6 py-4 border-2 border-dashed border-purple-300 rounded-2xl hover:border-purple-400 hover:bg-purple-50 transition-all"
//                 >
//                   <Upload className="w-5 h-5 text-purple-500" />
//                   <span className="font-bold text-purple-700">Upload Video File</span>
//                 </button>
//               </div>
//             </div>
//           )}
          
//           <input
//             ref={fileInputRef}
//             type="file"
//             accept={selectedMode === 'audio' ? 'audio/*' : 'video/*'}
//             onChange={handleFileUpload}
//             className="hidden"
//           />
//         </main>

//         {/* SUBMIT BUTTON */}
//         <div className="text-center mt-12">
//           <button
//             onClick={handleSubmit}
//             disabled={!isReadyToSubmit() || isSubmitting}
//             className="inline-flex items-center gap-4 px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black text-lg rounded-2xl hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
//           >
//             {isSubmitting ? (
//               <>
//                 <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                 <span>Analyzing...</span>
//               </>
//             ) : (
//               <>
//                 <Send className="w-5 h-5" />
//                 <span>Submit Feeling</span>
//                 <Heart className="w-5 h-5" />
//               </>
//             )}
//           </button>
//         </div>

//         {/* FOOTER INFO */}
//         <footer className="text-center mt-12">
//           <p className="text-gray-500 text-lg font-semibold mb-8">
//             Your feelings are safe and secure with us 🔒
//           </p>
          
//           <div className="flex items-center justify-center space-x-8 text-gray-500">
//             {[
//               { color: 'bg-emerald-400', text: 'AI-Powered Analysis' },
//               { color: 'bg-blue-400', text: '100% Confidential' },
//               { color: 'bg-purple-400', text: 'Professional Support' }
//             ].map((item, index) => (
//               <div key={index} className="flex items-center space-x-3">
//                 <div className={`w-4 h-4 ${item.color} rounded-full animate-pulse`}></div>
//                 <span className="font-bold text-sm">{item.text}</span>
//               </div>
//             ))}
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default BeautifulFeelingInput;



import React, { useState, useRef, useEffect, useContext } from 'react';
import { 
  Mic, 
  Video, 
  FileText, 
  Upload, 
  Square, 
  Play, 
  Pause, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  RefreshCw, 
  MessageCircle,
  Clock,
  Shield,
  Brain,
  Heart
} from 'lucide-react';

// Theme Context (you can create this separately)
const ThemeContext = React.createContext({ theme: 'light', toggleTheme: () => {} });

const BeautifulFeelingInput = ({ onAnalysisComplete }) => {
  const { theme } = useContext(ThemeContext) || { theme: 'light' };
  
  // State Management
  const [selectedMode, setSelectedMode] = useState('text');
  const [textInput, setTextInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('checking');
  const [recordingTime, setRecordingTime] = useState(0);

  // Refs
  const mediaRecorder = useRef(null);
  const mediaStream = useRef(null);
  const chunks = useRef([]);
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);
  const recordedBlob = useRef(null);
  const uploadedFile = useRef(null);
  const recordingTimer = useRef(null);
  const isRecordingRef = useRef(false);

  // Theme-based styles
  const themeStyles = {
    light: {
      bg: 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50',
      cardBg: 'bg-white/95 backdrop-blur-xl',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      textMuted: 'text-gray-500',
      border: 'border-gray-200',
      hover: 'hover:bg-gray-50',
      accent: 'from-blue-600 to-indigo-600',
      success: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      error: 'bg-red-50 border-red-200 text-red-800'
    },
    dark: {
      bg: 'bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900',
      cardBg: 'bg-gray-800/95 backdrop-blur-xl',
      textPrimary: 'text-white',
      textSecondary: 'text-gray-200',
      textMuted: 'text-gray-400',
      border: 'border-gray-700',
      hover: 'hover:bg-gray-700',
      accent: 'from-blue-500 to-indigo-500',
      success: 'bg-emerald-900/50 border-emerald-700 text-emerald-300',
      error: 'bg-red-900/50 border-red-700 text-red-300'
    }
  };

  const currentTheme = themeStyles[theme];

  useEffect(() => {
    checkServerConnection();
    return () => cleanup();
  }, []);

  const checkServerConnection = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
      const response = await fetch(`${apiUrl}/api/`, { method: 'HEAD' });
      setConnectionStatus('connected');
      setError('');
    } catch (error) {
      setConnectionStatus('disconnected');
      setError('Cannot connect to Django server. Please ensure your backend is running on http://127.0.0.1:8000');
    }
  };

  const getAuthToken = () => {
    return localStorage.getItem('access_token') || 'dummy-token-for-development';
  };

  const startTimer = () => {
    setRecordingTime(0);
    recordingTimer.current = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (recordingTimer.current) {
      clearInterval(recordingTimer.current);
      recordingTimer.current = null;
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const cleanup = () => {
    stopTimer();
    
    if (mediaStream.current) {
      mediaStream.current.getTracks().forEach(track => track.stop());
      mediaStream.current = null;
    }
    
    if (mediaRecorder.current) {
      mediaRecorder.current = null;
    }
    
    isRecordingRef.current = false;
    setIsRecording(false);
    chunks.current = [];
  };

  const startRecording = async () => {
    try {
      setError('');
      cleanup();
      
      const constraints = selectedMode === 'audio' 
        ? { audio: { echoCancellation: true, noiseSuppression: true } }
        : { video: { width: 1280, height: 720 }, audio: true };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      mediaStream.current = stream;
      
      mediaRecorder.current = new MediaRecorder(stream, {
        mimeType: selectedMode === 'audio' 
          ? 'audio/webm;codecs=opus' 
          : 'video/webm;codecs=vp8,opus'
      });
      
      chunks.current = [];
      
      mediaRecorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.current.push(event.data);
        }
      };
      
      mediaRecorder.current.onstop = handleRecordingComplete;
      mediaRecorder.current.onerror = (event) => {
        setError('Recording error occurred');
        cleanup();
      };
      
      mediaRecorder.current.start();
      isRecordingRef.current = true;
      setIsRecording(true);
      startTimer();
      
    } catch (error) {
      setError(`Cannot access ${selectedMode === 'audio' ? 'microphone' : 'camera'}: ${error.message}`);
      cleanup();
    }
  };

  const stopRecording = () => {
    if (!mediaRecorder.current || !isRecordingRef.current) {
      cleanup();
      return;
    }
    
    try {
      if (mediaRecorder.current.state === 'recording') {
        mediaRecorder.current.stop();
        isRecordingRef.current = false;
        setIsRecording(false);
        stopTimer();
      } else {
        cleanup();
      }
    } catch (error) {
      cleanup();
      handleRecordingComplete();
    }
  };

  const handleRecordingComplete = () => {
    try {
      if (chunks.current.length === 0) {
        setError('No data was recorded. Please try again.');
        cleanup();
        return;
      }
      
      const mimeType = selectedMode === 'audio' ? 'audio/webm' : 'video/webm';
      const blob = new Blob(chunks.current, { type: mimeType });
      recordedBlob.current = blob;
      
      const url = URL.createObjectURL(blob);
      
      if (selectedMode === 'audio') {
        setAudioURL(url);
      } else {
        setVideoURL(url);
      }
      
      setSuccessMessage(`${selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)} recorded successfully`);
      
    } catch (error) {
      setError('Error processing recorded data');
    } finally {
      cleanup();
    }
  };

  const handleRecordingClick = () => {
    if (isRecordingRef.current) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setError('');
      
      if (file.size > 50 * 1024 * 1024) {
        setError('File size too large. Please choose a file smaller than 50MB.');
        return;
      }

      const isValidType = selectedMode === 'audio' 
        ? file.type.startsWith('audio/') 
        : file.type.startsWith('video/');

      if (!isValidType) {
        setError('Please select the correct file type for the selected mode.');
        return;
      }

      const url = URL.createObjectURL(file);
      
      if (selectedMode === 'audio') {
        setAudioURL(url);
      } else {
        setVideoURL(url);
      }
      
      uploadedFile.current = file;
      recordedBlob.current = null;
      setSuccessMessage('File uploaded successfully');
    }
  };

  const toggleAudioPlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting || connectionStatus === 'disconnected') return;
    
    setIsSubmitting(true);
    setError('');
    setSuccessMessage('');
    
    try {
      const formData = new FormData();
      
      switch (selectedMode) {
        case 'text':
          if (!textInput.trim()) {
            throw new Error('Please enter some text.');
          }
          formData.append('text_input', textInput.trim());
          break;
          
        case 'audio':
          const audioFile = recordedBlob.current || uploadedFile.current;
          if (!audioFile) {
            throw new Error('Please record audio or upload an audio file.');
          }
          
          const audioFileToSend = new File(
            [audioFile], 
            recordedBlob.current ? 'recorded_audio.webm' : uploadedFile.current.name,
            { type: audioFile.type || 'audio/webm' }
          );
          formData.append('audio_file', audioFileToSend);
          break;
          
        case 'video':
          const videoFile = recordedBlob.current || uploadedFile.current;
          if (!videoFile) {
            throw new Error('Please record video or upload a video file.');
          }
          
          const videoFileToSend = new File(
            [videoFile], 
            recordedBlob.current ? 'recorded_video.webm' : uploadedFile.current.name,
            { type: videoFile.type || 'video/webm' }
          );
          formData.append('video_file', videoFileToSend);
          break;
      }
      
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
      const response = await fetch(`${apiUrl}/api/submit-thought/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${getAuthToken()}`,
        },
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (onAnalysisComplete) {
        onAnalysisComplete(result);
      }
      
      resetForm();
      setSuccessMessage('Your feelings have been analyzed successfully');
      
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setTextInput('');
    setAudioURL('');
    setVideoURL('');
    setIsPlaying(false);
    setRecordingTime(0);
    recordedBlob.current = null;
    uploadedFile.current = null;
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const isReadyToSubmit = () => {
    if (connectionStatus === 'disconnected' || isRecording) return false;
    
    switch (selectedMode) {
      case 'text':
        return textInput.trim().length > 0;
      case 'audio':
        return audioURL && (recordedBlob.current || uploadedFile.current);
      case 'video':
        return videoURL && (recordedBlob.current || uploadedFile.current);
      default:
        return false;
    }
  };

  const modeConfig = {
    text: { 
      icon: FileText, 
      label: 'Text Input', 
      color: 'from-blue-500 to-blue-600',
      description: 'Share your thoughts through writing'
    },
    audio: { 
      icon: Mic, 
      label: 'Voice Recording', 
      color: 'from-green-500 to-green-600',
      description: 'Express yourself with your voice'
    },
    video: { 
      icon: Video, 
      label: 'Video Message', 
      color: 'from-purple-500 to-purple-600',
      description: 'Record a video message'
    }
  };

  return (
    <div className={`min-h-screen ${currentTheme.bg} transition-all duration-300`}>
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 max-w-6xl">
        
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 bg-gradient-to-r ${currentTheme.accent} rounded-xl flex items-center justify-center shadow-lg`}>
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${currentTheme.textPrimary}`}>
              EmoTrack
            </h1>
          </div>
          <p className={`text-lg sm:text-xl ${currentTheme.textSecondary} max-w-2xl mx-auto`}>
            Professional emotional wellness platform for tracking and analyzing your mental health
          </p>
        </header>

        {/* AI Assistant Interface */}
        <section className={`${currentTheme.cardBg} rounded-2xl shadow-xl border ${currentTheme.border} p-4 sm:p-6 lg:p-8 mb-8 relative overflow-hidden`}>
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 relative z-10">
            <div className="flex-shrink-0">
              <div className={`w-12 h-12 bg-gradient-to-r ${currentTheme.accent} rounded-xl flex items-center justify-center shadow-md`}>
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className={`${theme === 'dark' ? 'bg-gray-700/50' : 'bg-blue-50/50'} rounded-xl p-4 sm:p-6 border ${currentTheme.border}`}>
                <p className={`${currentTheme.textPrimary} leading-relaxed text-base sm:text-lg mb-4`}>
                  Welcome to your emotional wellness companion. Share your thoughts, feelings, or experiences through text, voice, or video. 
                  <span className="font-semibold"> How are you feeling today?</span>
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
                  <span className={`${currentTheme.textMuted}`}>
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-emerald-600 font-medium">AI Assistant Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connection Status */}
        <div className="flex justify-center mb-6">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
            connectionStatus === 'connected' 
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {connectionStatus === 'connected' ? (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>Server Connected</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-4 h-4" />
                <span>Server Disconnected</span>
                <button 
                  onClick={checkServerConnection} 
                  className="ml-1 p-1 hover:bg-red-100 rounded-full transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Messages */}
        {successMessage && (
          <div className={`${currentTheme.success} border rounded-xl p-4 mb-6`}>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <p className="font-medium">{successMessage}</p>
            </div>
          </div>
        )}

        {error && (
          <div className={`${currentTheme.error} border rounded-xl p-4 mb-6`}>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="font-medium">{error}</p>
            </div>
          </div>
        )}

        {/* Mode Selection */}
        <div className="flex justify-center mb-8">
          <div className={`${currentTheme.cardBg} rounded-xl p-2 shadow-lg border ${currentTheme.border}`}>
            <div className="flex flex-col sm:flex-row gap-2">
              {Object.entries(modeConfig).map(([mode, config]) => {
                const Icon = config.icon;
                return (
                  <button
                    key={mode}
                    onClick={() => {
                      setSelectedMode(mode);
                      setError('');
                      cleanup();
                    }}
                    disabled={isRecording}
                    className={`flex items-center justify-center sm:justify-start gap-3 px-4 py-3 rounded-lg font-medium transition-all min-w-[140px] ${
                      selectedMode === mode
                        ? `bg-gradient-to-r ${config.color} text-white shadow-md`
                        : `${currentTheme.textSecondary} ${currentTheme.hover}`
                    } ${isRecording ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{config.label}</span>
                    <span className="sm:hidden">{mode.charAt(0).toUpperCase() + mode.slice(1)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className={`${currentTheme.cardBg} rounded-2xl shadow-xl border ${currentTheme.border} p-6 sm:p-8 lg:p-12`}>
          
          {/* Text Mode */}
          {selectedMode === 'text' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className={`text-2xl sm:text-3xl font-bold ${currentTheme.textPrimary} mb-2`}>
                  {modeConfig.text.label}
                </h2>
                <p className={`${currentTheme.textSecondary}`}>
                  {modeConfig.text.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <textarea
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Share your thoughts, feelings, or experiences. There's no judgment here, just understanding and support."
                  disabled={isSubmitting}
                  maxLength={1000}
                  className={`w-full h-40 sm:h-48 p-4 sm:p-6 border-2 ${currentTheme.border} rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-700/50 text-white placeholder-gray-400' 
                      : 'bg-white text-gray-900 placeholder-gray-500'
                  } transition-all`}
                />
                <div className={`text-right text-sm ${currentTheme.textMuted}`}>
                  {textInput.length}/1000 characters
                </div>
              </div>
            </div>
          )}

          {/* Audio Mode */}
          {selectedMode === 'audio' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className={`text-2xl sm:text-3xl font-bold ${currentTheme.textPrimary} mb-2`}>
                  {modeConfig.audio.label}
                </h2>
                <p className={`${currentTheme.textSecondary}`}>
                  {modeConfig.audio.description}
                </p>
              </div>
              
              <div className="text-center space-y-6">
                <div className="relative inline-block">
                  <button
                    onClick={handleRecordingClick}
                    disabled={isSubmitting}
                    className={`w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                      isRecording
                        ? 'bg-red-500 animate-pulse hover:bg-red-600'
                        : 'bg-green-500 hover:bg-green-600 hover:scale-105'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isRecording ? (
                      <Square className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    ) : (
                      <Mic className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    )}
                  </button>
                  
                  {isRecording && (
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full font-medium text-sm flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {formatTime(recordingTime)}
                      </div>
                    </div>
                  )}
                </div>
                
                <p className={`text-base sm:text-lg font-medium ${currentTheme.textSecondary}`}>
                  {isRecording ? (
                    <>
                  <br/>
                    <span className="text-red-600">🔴 Recording in progress... Tap to stop</span>
                    </>
                  ) : (
                    'Tap the microphone to start recording'
                  )}
                </p>
                
                {audioURL && (
                  <div className={`${theme === 'dark' ? 'bg-gray-700/50' : 'bg-green-50'} rounded-xl p-4 sm:p-6 border ${currentTheme.border}`}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={toggleAudioPlayback}
                        className={`p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all ${
                          theme === 'dark' ? 'bg-gray-600' : 'bg-white'
                        }`}
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-green-600" />
                        ) : (
                          <Play className="w-5 h-5 text-green-600" />
                        )}
                      </button>
                      <span className="text-green-800 font-medium">
                        Audio ready for analysis
                      </span>
                    </div>
                    <audio
                      ref={audioRef}
                      src={audioURL}
                      onEnded={() => setIsPlaying(false)}
                      className="hidden"
                    />
                  </div>
                )}
                
                <div className="pt-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isSubmitting || isRecording}
                    className={`inline-flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 border-2 border-dashed border-green-300 rounded-xl hover:border-green-400 hover:bg-green-50 transition-all font-medium ${
                      theme === 'dark' 
                        ? 'hover:bg-gray-700/50 border-green-600 hover:border-green-500' 
                        : ''
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    <Upload className="w-5 h-5 text-green-500" />
                    <span className="text-green-700">Upload Audio File</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Video Mode */}
          {selectedMode === 'video' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className={`text-2xl sm:text-3xl font-bold ${currentTheme.textPrimary} mb-2`}>
                  {modeConfig.video.label}
                </h2>
                <p className={`${currentTheme.textSecondary}`}>
                  {modeConfig.video.description}
                </p>
              </div>
              
              <div className="text-center space-y-6">
                <div className="relative inline-block">
                  <button
                    onClick={handleRecordingClick}
                    disabled={isSubmitting}
                    className={`w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                      isRecording
                        ? 'bg-red-500 animate-pulse hover:bg-red-600'
                        : 'bg-purple-500 hover:bg-purple-600 hover:scale-105'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isRecording ? (
                      <Square className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    ) : (
                      <Video className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    )}
                  </button>
                  
                  {isRecording && (
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full font-medium text-sm flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {formatTime(recordingTime)}
                      </div>
                    </div>
                  )}
                </div>
                
                <p className={`text-base sm:text-lg font-medium ${currentTheme.textSecondary}`}>
                 {isRecording ? (
                    <>
                  <br />
                  <span className="text-red-600">🔴 Recording in progress... Tap to stop</span>
                  </>
                 ) : (
                'Tap the camera to start recording'
                  )}
               </p>

                
                {videoURL && (
                  <div className={`${theme === 'dark' ? 'bg-gray-700/50' : 'bg-purple-50'} rounded-xl p-4 sm:p-6 border ${currentTheme.border}`}>
                    <video
                      ref={videoRef}
                      src={videoURL}
                      controls
                      className="w-full max-w-md sm:max-w-lg mx-auto rounded-lg shadow-md"
                    />
                    <div className="mt-4">
                      <span className="text-purple-800 font-medium">
                        Video ready for analysis
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="pt-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isSubmitting || isRecording}
                    className={`inline-flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 border-2 border-dashed border-purple-300 rounded-xl hover:border-purple-400 hover:bg-purple-50 transition-all font-medium ${
                      theme === 'dark' 
                        ? 'hover:bg-gray-700/50 border-purple-600 hover:border-purple-500' 
                        : ''
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    <Upload className="w-5 h-5 text-purple-500" />
                    <span className="text-purple-700">Upload Video File</span>
                  </button>
                </div>
              </div>
            </div>
          )}
          
          <input
            ref={fileInputRef}
            type="file"
            accept={selectedMode === 'audio' ? 'audio/*' : 'video/*'}
            onChange={handleFileUpload}
            className="hidden"
          />
        </main>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleSubmit}
            disabled={!isReadyToSubmit() || isSubmitting}
            className={`inline-flex items-center gap-3 px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r ${currentTheme.accent} text-white font-bold text-base sm:text-lg rounded-xl hover:shadow-lg disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit for Analysis</span>
                <Heart className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 sm:mt-12 space-y-4">
          <p className={`${currentTheme.textMuted} text-base sm:text-lg font-medium`}>
            Your privacy and emotional wellbeing are our top priorities
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
            {[
              { icon: Brain, color: 'bg-blue-400', text: 'AI-Powered Analysis' },
              { icon: Shield, color: 'bg-emerald-400', text: 'Secure & Confidential' },
              { icon: Heart, color: 'bg-purple-400', text: 'Professional Support' }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <div className={`w-3 h-3 ${item.color} rounded-full animate-pulse`}></div>
                  <IconComponent className="w-4 h-4 text-gray-500" />
                  <span className={`${currentTheme.textMuted} font-medium`}>{item.text}</span>
                </div>
              );
            })}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BeautifulFeelingInput;
