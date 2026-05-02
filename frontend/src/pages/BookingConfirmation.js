

// // // // export default BookingConfirmation;
// // // import React, { useState, useEffect, useRef } from 'react';
// // // import { useNavigate, useLocation } from 'react-router-dom';
// // // import { jsPDF } from 'jspdf';
// // // import { 
// // //   CheckCircle, 
// // //   Calendar, 
// // //   Clock, 
// // //   User, 
// // //   MapPin, 
// // //   Video, 
// // //   Phone, 
// // //   MessageCircle,
// // //   Download,
// // //   Share2,
// // //   Home,
// // //   FileText,
// // //   Mail,
// // //   Bell,
// // //   Heart,
// // //   Award,
// // //   X,
// // //   Copy,
// // //   ExternalLink,
// // //   Send,
// // //   AlertCircle
// // // } from 'lucide-react';

// // // const BookingConfirmation = () => {
// // //   const navigate = useNavigate();
// // //   const location = useLocation();
// // //   const [animationComplete, setAnimationComplete] = useState(false);
// // //   const [showShareModal, setShowShareModal] = useState(false);
// // //   const [showSupportModal, setShowSupportModal] = useState(false);
// // //   const [isDownloading, setIsDownloading] = useState(false);
// // //   const [isSharing, setIsSharing] = useState(false);
// // //   const [isSending, setIsSending] = useState(false);
// // //   const [pdfFile, setPdfFile] = useState(null);
// // //   const [supportForm, setSupportForm] = useState({
// // //     name: '',
// // //     email: '',
// // //     issue: '',
// // //     priority: 'medium'
// // //   });
  
// // //   const bookingData = location.state?.bookingData || {
// // //     therapistName: "Dr. Asha Verma",
// // //     date: "12 July 2025",
// // //     time: "2:00 PM",
// // //     mode: "Video Call",
// // //     confirmationId: "BK" + Math.random().toString(36).substr(2, 9).toUpperCase(),
// // //     therapistSpecialty: "Stress Management",
// // //     sessionDuration: "50 minutes",
// // //     location: "Mumbai"
// // //   };

// // //   useEffect(() => {
// // //     const timer = setTimeout(() => {
// // //       setAnimationComplete(true);
// // //     }, 600);
// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   // PRE-GENERATE PDF FILE FOR SHARING
// // //   useEffect(() => {
// // //     const createPDFFile = async () => {
// // //       try {
// // //         const doc = generatePDF();
// // //         const pdfBlob = doc.output('blob');
// // //         const fileName = `EmoTrack-Confirmation-${bookingData.confirmationId}.pdf`;
// // //         const file = new File([pdfBlob], fileName, { type: 'application/pdf' });
// // //         setPdfFile(file);
// // //       } catch (error) {
// // //         console.error('Error creating PDF file:', error);
// // //       }
// // //     };
    
// // //     createPDFFile();
// // //   }, [bookingData]);

// // //   // PROFESSIONAL CONTACT SUPPORT OPTIONS
// // //   const handleContactSupport = () => {
// // //     setShowSupportModal(true);
// // //   };

// // //   // METHOD 1: DIRECT EMAIL WITH PRE-FILLED CONTENT
// // //   const handleEmailSupport = () => {
// // //     const subject = encodeURIComponent(`🏥 EmoTrack Support Request - ${bookingData.confirmationId}`);
// // //     const body = encodeURIComponent(`Hello EmoTrack Support Team,

// // // I need assistance with my appointment booking.

// // // 📋 APPOINTMENT DETAILS:
// // // • Confirmation ID: ${bookingData.confirmationId}
// // // • Healthcare Provider: ${bookingData.therapistName}
// // // • Appointment Date: ${bookingData.date}
// // // • Appointment Time: ${bookingData.time}
// // // • Session Format: ${bookingData.mode}

// // // 🔍 ISSUE DESCRIPTION:
// // // [Please describe your issue below]


// // // 📞 PREFERRED CONTACT METHOD:
// // // [ ] Email Response
// // // [ ] Phone Call

// // // Thank you for your prompt assistance.

// // // Best regards,
// // // [Your Name]

// // // ---
// // // EmoTrack Professional Mental Health Services
// // // Generated: ${new Date().toLocaleString()}`);
    
// // //     try {
// // //       window.location.href = `mailto:support@emotrack.com?subject=${subject}&body=${body}`;
// // //       setShowSupportModal(false);
// // //     } catch (error) {
// // //       alert('Unable to open email client. Please copy the support email: support@emotrack.com');
// // //     }
// // //   };

// // //   // METHOD 2: PHONE SUPPORT
// // //   const handlePhoneSupport = () => {
// // //     try {
// // //       window.location.href = 'tel:+1-800-EMOTRACK';
// // //       setShowSupportModal(false);
// // //     } catch (error) {
// // //       alert('📞 Call Support: +1-800-EMOTRACK (1-800-366-8722)\n\nAvailable 24/7 for immediate assistance');
// // //     }
// // //   };

// // //   // METHOD 3: PROFESSIONAL SUPPORT FORM (ADVANCED)
// // //   const handleSupportFormSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setIsSending(true);

// // //     // Simulate form submission (replace with actual backend call)
// // //     try {
// // //       // Here you would typically send to your backend API
// // //       // For now, we'll create a comprehensive email
      
// // //       const subject = encodeURIComponent(`🚨 ${supportForm.priority.toUpperCase()} PRIORITY - Support Request ${bookingData.confirmationId}`);
// // //       const body = encodeURIComponent(`EMOTRACK SUPPORT REQUEST

// // // 📋 APPOINTMENT INFORMATION:
// // // • Confirmation ID: ${bookingData.confirmationId}
// // // • Healthcare Provider: ${bookingData.therapistName}
// // // • Date: ${bookingData.date}
// // // • Time: ${bookingData.time}
// // // • Format: ${bookingData.mode}

// // // 👤 CUSTOMER INFORMATION:
// // // • Name: ${supportForm.name}
// // // • Email: ${supportForm.email}
// // // • Priority Level: ${supportForm.priority.toUpperCase()}

// // // 🔍 ISSUE DESCRIPTION:
// // // ${supportForm.issue}

// // // ⏰ SUBMITTED: ${new Date().toLocaleString()}

// // // ---
// // // This is an automated support request from EmoTrack Professional Mental Health Services.`);

// // //       window.location.href = `mailto:support@emotrack.com?subject=${subject}&body=${body}`;
      
// // //       // Reset form
// // //       setSupportForm({
// // //         name: '',
// // //         email: '',
// // //         issue: '',
// // //         priority: 'medium'
// // //       });
      
// // //       setTimeout(() => {
// // //         alert('✅ Support request submitted successfully!\n\nOur team will respond within 2-4 hours during business hours.');
// // //         setShowSupportModal(false);
// // //       }, 1000);
      
// // //     } catch (error) {
// // //       alert('❌ Error submitting request. Please try calling our support line: +1-800-EMOTRACK');
// // //     } finally {
// // //       setIsSending(false);
// // //     }
// // //   };

// // //   const generatePDF = () => {
// // //     const doc = new jsPDF();
    
// // //     // Header
// // //     doc.setFillColor(59, 130, 246);
// // //     doc.rect(0, 0, 210, 40, 'F');
// // //     doc.setTextColor(255, 255, 255);
// // //     doc.setFontSize(24);
// // //     doc.setFont('helvetica', 'bold');
// // //     doc.text('EmoTrack', 20, 25);
// // //     doc.setFontSize(12);
// // //     doc.setFont('helvetica', 'normal');
// // //     doc.text('Professional Mental Health Services', 20, 35);
    
// // //     // Title
// // //     doc.setTextColor(59, 130, 246);
// // //     doc.setFontSize(20);
// // //     doc.setFont('helvetica', 'bold');
// // //     doc.text('APPOINTMENT CONFIRMATION', 20, 55);
    
// // //     // Confirmation Box
// // //     doc.setFillColor(239, 246, 255);
// // //     doc.roundedRect(20, 65, 170, 20, 3, 3, 'F');
// // //     doc.setTextColor(37, 99, 235);
// // //     doc.setFontSize(12);
// // //     doc.setFont('helvetica', 'bold');
// // //     doc.text(`Confirmation ID: ${bookingData.confirmationId}`, 25, 73);
// // //     doc.text(`Generated: ${new Date().toLocaleString()}`, 25, 81);
    
// // //     // Provider Details
// // //     doc.setTextColor(17, 24, 39);
// // //     doc.setFontSize(16);
// // //     doc.setFont('helvetica', 'bold');
// // //     doc.text('HEALTHCARE PROVIDER', 20, 100);
// // //     doc.setDrawColor(156, 163, 175);
// // //     doc.line(20, 103, 190, 103);
    
// // //     doc.setFontSize(11);
// // //     doc.setFont('helvetica', 'normal');
// // //     doc.text(`Provider: ${bookingData.therapistName}`, 25, 113);
// // //     doc.text(`Specialty: ${bookingData.therapistSpecialty}`, 25, 123);
// // //     doc.text(`Location: ${bookingData.location}`, 25, 133);
    
// // //     // Session Details
// // //     doc.setFontSize(16);
// // //     doc.setFont('helvetica', 'bold');
// // //     doc.text('SESSION DETAILS', 20, 150);
// // //     doc.line(20, 153, 190, 153);
    
// // //     doc.setFontSize(11);
// // //     doc.setFont('helvetica', 'normal');
// // //     doc.text(`Date: ${bookingData.date}`, 25, 163);
// // //     doc.text(`Time: ${bookingData.time}`, 25, 173);
// // //     doc.text(`Format: ${bookingData.mode}`, 25, 183);
// // //     doc.text(`Duration: ${bookingData.sessionDuration}`, 25, 193);
    
// // //     // Instructions
// // //     doc.setFontSize(16);
// // //     doc.setFont('helvetica', 'bold');
// // //     doc.text('IMPORTANT INSTRUCTIONS', 20, 210);
// // //     doc.line(20, 213, 190, 213);
    
// // //     doc.setFontSize(10);
// // //     doc.setFont('helvetica', 'normal');
// // //     doc.text('• Arrive 5 minutes early for your appointment', 25, 223);
// // //     doc.text('• Email confirmation will be sent within 10 minutes', 25, 233);
// // //     doc.text('• Reminders will be sent 24 hours and 1 hour before', 25, 243);
// // //     doc.text('• Session access link provided 15 minutes before start time', 25, 253);
    
// // //     // Footer
// // //     doc.setTextColor(107, 114, 128);
// // //     doc.setFontSize(9);
// // //     doc.text('EmoTrack Professional Mental Health Services | support@emotrack.com', 20, 280);
    
// // //     return doc;
// // //   };

// // //   // DOWNLOAD PDF
// // //   const handleDownloadPDF = () => {
// // //     setIsDownloading(true);
    
// // //     try {
// // //       if (pdfFile) {
// // //         const url = URL.createObjectURL(pdfFile);
// // //         const link = document.createElement('a');
// // //         link.href = url;
// // //         link.download = pdfFile.name;
// // //         link.style.display = 'none';
        
// // //         document.body.appendChild(link);
// // //         link.click();
// // //         document.body.removeChild(link);
// // //         URL.revokeObjectURL(url);
// // //       } else {
// // //         const doc = generatePDF();
// // //         doc.save(`EmoTrack-Confirmation-${bookingData.confirmationId}.pdf`);
// // //       }
// // //     } catch (error) {
// // //       alert('Error downloading PDF. Please try again.');
// // //     } finally {
// // //       setIsDownloading(false);
// // //     }
// // //   };

// // //   // SHARE HANDLER
// // //   const handleShare = async () => {
// // //     setIsSharing(true);
    
// // //     try {
// // //       if (navigator.canShare && pdfFile && navigator.canShare({ files: [pdfFile] })) {
// // //         await navigator.share({
// // //           title: 'EmoTrack Appointment Confirmation',
// // //           text: `My appointment with ${bookingData.therapistName} on ${bookingData.date} at ${bookingData.time}`,
// // //           files: [pdfFile]
// // //         });
// // //         return;
// // //       }
      
// // //       setShowShareModal(true);
      
// // //     } catch (error) {
// // //       console.error('Share error:', error);
      
// // //       if (error.name === 'AbortError') {
// // //         console.log('User cancelled share');
// // //       } else {
// // //         setShowShareModal(true);
// // //       }
// // //     } finally {
// // //       setIsSharing(false);
// // //     }
// // //   };

// // //   // SHARE PDF FILE DIRECTLY
// // //   const sharePDFFileDirectly = async () => {
// // //     if (!pdfFile) {
// // //       alert('PDF file is not ready. Please try again.');
// // //       return;
// // //     }

// // //     try {
// // //       if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
// // //         await navigator.share({
// // //           title: 'EmoTrack Appointment Confirmation PDF',
// // //           text: `Appointment confirmation for ${bookingData.therapistName} on ${bookingData.date}`,
// // //           files: [pdfFile]
// // //         });
// // //         setShowShareModal(false);
// // //       } else {
// // //         alert('Your browser doesn\'t support PDF file sharing. The PDF will be downloaded instead.');
// // //         handleDownloadPDF();
// // //         setShowShareModal(false);
// // //       }
// // //     } catch (error) {
// // //       if (error.name !== 'AbortError') {
// // //         alert('Error sharing PDF file. Please try downloading instead.');
// // //       }
// // //     }
// // //   };

// // //   // WHATSAPP SHARE
// // //   const shareToWhatsApp = () => {
// // //     const message = `Hello,

// // // I've scheduled a mental health appointment:

// // // Provider: ${bookingData.therapistName}
// // // Date: ${bookingData.date}
// // // Time: ${bookingData.time}
// // // Format: ${bookingData.mode}
// // // ID: ${bookingData.confirmationId}

// // // EmoTrack Professional Services
// // // ${window.location.origin}

// // // 📄 I'll attach the PDF confirmation separately.`;

// // //     const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    
// // //     if (pdfFile) {
// // //       handleDownloadPDF();
// // //       setTimeout(() => {
// // //         const popup = window.open(
// // //           url, 
// // //           'whatsapp-share',
// // //           'width=500,height=600,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no,left=' + 
// // //           (window.screen.width / 2 - 250) + ',top=' + (window.screen.height / 2 - 300)
// // //         );
        
// // //         if (popup) {
// // //           popup.focus();
// // //           setShowShareModal(false);
// // //         } else {
// // //           alert('Please allow popups to share via WhatsApp');
// // //         }
// // //       }, 1000);
// // //     } else {
// // //       alert('PDF is not ready. Please try again in a moment.');
// // //     }
// // //   };

// // //   // COPY TO CLIPBOARD
// // //   const copyToClipboard = async () => {
// // //     const text = `EmoTrack Appointment Confirmation

// // // Provider: ${bookingData.therapistName}
// // // Date: ${bookingData.date}
// // // Time: ${bookingData.time}
// // // Format: ${bookingData.mode}
// // // Confirmation ID: ${bookingData.confirmationId}

// // // EmoTrack Professional Mental Health Services
// // // ${window.location.origin}`;

// // //     try {
// // //       await navigator.clipboard.writeText(text);
// // //       alert('✓ Appointment details copied to clipboard!');
// // //       setShowShareModal(false);
// // //     } catch (error) {
// // //       const textArea = document.createElement('textarea');
// // //       textArea.value = text;
// // //       textArea.style.position = 'fixed';
// // //       textArea.style.opacity = '0';
// // //       document.body.appendChild(textArea);
// // //       textArea.select();
// // //       document.execCommand('copy');
// // //       document.body.removeChild(textArea);
// // //       alert('✓ Appointment details copied to clipboard!');
// // //       setShowShareModal(false);
// // //     }
// // //   };

// // //   const getSessionIcon = (mode) => {
// // //     switch (mode.toLowerCase()) {
// // //       case 'video call':
// // //         return <Video className="w-5 h-5 text-blue-600" />;
// // //       case 'voice call':
// // //         return <Phone className="w-5 h-5 text-green-600" />;
// // //       case 'live chat':
// // //         return <MessageCircle className="w-5 h-5 text-purple-600" />;
// // //       default:
// // //         return <MapPin className="w-5 h-5 text-gray-600" />;
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      
// // //       {/* Loading Animation */}
// // //       <div className={`fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-50 transition-all duration-700 ${animationComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
// // //         <div className="flex items-center justify-center h-full">
// // //           <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
// // //             <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
// // //               <CheckCircle className="w-10 h-10 text-white" />
// // //             </div>
// // //             <p className="text-gray-700 font-medium">Processing confirmation...</p>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* PROFESSIONAL SUPPORT MODAL (NO LIVE CHAT) */}
// // //       {showSupportModal && (
// // //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-4">
// // //           <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl border max-h-[90vh] overflow-y-auto">
// // //             <div className="flex items-center justify-between mb-6">
// // //               <div className="flex items-center">
// // //                 <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
// // //                   <Heart className="w-5 h-5 text-red-600" />
// // //                 </div>
// // //                 <h3 className="text-xl font-bold text-gray-900">Professional Support</h3>
// // //               </div>
// // //               <button 
// // //                 onClick={() => setShowSupportModal(false)} 
// // //                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
// // //               >
// // //                 <X className="w-5 h-5 text-gray-500" />
// // //               </button>
// // //             </div>
            
// // //             <p className="text-gray-600 mb-6">
// // //               Choose your preferred support method. Our team is available 24/7 to assist you.
// // //             </p>

// // //             {/* Quick Contact Options (NO LIVE CHAT) */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
// // //               <button 
// // //                 onClick={handleEmailSupport}
// // //                 className="flex flex-col items-center p-4 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors"
// // //               >
// // //                 <Mail className="w-6 h-6 text-blue-600 mb-2" />
// // //                 <span className="text-sm font-medium text-gray-900">Email Support</span>
// // //                 <span className="text-xs text-gray-500">2-4 hours response</span>
// // //               </button>

// // //               <button 
// // //                 onClick={handlePhoneSupport}
// // //                 className="flex flex-col items-center p-4 border-2 border-green-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors"
// // //               >
// // //                 <Phone className="w-6 h-6 text-green-600 mb-2" />
// // //                 <span className="text-sm font-medium text-gray-900">Call Support</span>
// // //                 <span className="text-xs text-gray-500">Immediate assistance</span>
// // //               </button>
// // //             </div>

// // //             {/* Professional Support Form */}
// // //             <div className="border-t pt-6">
// // //               <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
// // //                 <Send className="w-5 h-5 text-gray-700 mr-2" />
// // //                 Submit Support Request
// // //               </h4>
              
// // //               <form onSubmit={handleSupportFormSubmit} className="space-y-4">
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
// // //                     <input
// // //                       type="text"
// // //                       value={supportForm.name}
// // //                       onChange={(e) => setSupportForm({...supportForm, name: e.target.value})}
// // //                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //                       required
// // //                     />
// // //                   </div>
                  
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
// // //                     <input
// // //                       type="email"
// // //                       value={supportForm.email}
// // //                       onChange={(e) => setSupportForm({...supportForm, email: e.target.value})}
// // //                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //                       required
// // //                     />
// // //                   </div>
// // //                 </div>

// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Priority Level</label>
// // //                   <select
// // //                     value={supportForm.priority}
// // //                     onChange={(e) => setSupportForm({...supportForm, priority: e.target.value})}
// // //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //                   >
// // //                     <option value="low">Low - General inquiry</option>
// // //                     <option value="medium">Medium - Appointment related</option>
// // //                     <option value="high">High - Urgent assistance needed</option>
// // //                     <option value="critical">Critical - Emergency support</option>
// // //                   </select>
// // //                 </div>

// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Describe Your Issue</label>
// // //                   <textarea
// // //                     value={supportForm.issue}
// // //                     onChange={(e) => setSupportForm({...supportForm, issue: e.target.value})}
// // //                     rows={4}
// // //                     placeholder="Please provide details about your issue, including any error messages or specific problems you're experiencing..."
// // //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
// // //                     required
// // //                   />
// // //                 </div>

// // //                 <div className="bg-blue-50 p-4 rounded-lg">
// // //                   <div className="flex items-start">
// // //                     <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
// // //                     <div className="text-sm text-blue-800">
// // //                       <p className="font-medium">Your appointment details will be automatically included:</p>
// // //                       <p>• Confirmation ID: {bookingData.confirmationId}</p>
// // //                       <p>• Provider: {bookingData.therapistName}</p>
// // //                       <p>• Date: {bookingData.date} at {bookingData.time}</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 <button
// // //                   type="submit"
// // //                   disabled={isSending}
// // //                   className={`w-full flex items-center justify-center px-4 py-3 ${
// // //                     isSending 
// // //                       ? 'bg-gray-400 cursor-not-allowed' 
// // //                       : 'bg-blue-600 hover:bg-blue-700'
// // //                   } text-white font-medium rounded-lg transition-colors`}
// // //                 >
// // //                   <Send className={`w-4 h-4 mr-2 ${isSending ? 'animate-spin' : ''}`} />
// // //                   {isSending ? 'Submitting Request...' : 'Submit Support Request'}
// // //                 </button>
// // //               </form>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* SHARE MODAL */}
// // //       {showShareModal && (
// // //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-4">
// // //           <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl border">
// // //             <div className="flex items-center justify-between mb-6">
// // //               <h3 className="text-xl font-bold text-gray-900">Share Appointment</h3>
// // //               <button 
// // //                 onClick={() => setShowShareModal(false)} 
// // //                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
// // //               >
// // //                 <X className="w-5 h-5 text-gray-500" />
// // //               </button>
// // //             </div>
            
// // //             <p className="text-gray-600 mb-6 text-sm">
// // //               Choose how to share your appointment:
// // //             </p>
            
// // //             <div className="space-y-3">
// // //               {navigator.canShare && pdfFile && (
// // //                 <button 
// // //                   onClick={sharePDFFileDirectly} 
// // //                   className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors shadow-sm"
// // //                 >
// // //                   <FileText className="w-5 h-5" />
// // //                   Share PDF File
// // //                 </button>
// // //               )}
              
// // //               <button 
// // //                 onClick={shareToWhatsApp} 
// // //                 className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-sm"
// // //               >
// // //                 <MessageCircle className="w-5 h-5" />
// // //                 WhatsApp + PDF
// // //               </button>
              
// // //               <button 
// // //                 onClick={copyToClipboard} 
// // //                 className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
// // //               >
// // //                 <Copy className="w-5 h-5" />
// // //                 Copy Details
// // //               </button>
              
// // //               <button 
// // //                 onClick={() => { handleDownloadPDF(); setShowShareModal(false); }} 
// // //                 className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors shadow-sm"
// // //               >
// // //                 <Download className="w-5 h-5" />
// // //                 Download PDF
// // //               </button>
// // //             </div>
            
// // //             <div className="mt-6 pt-4 border-t border-gray-200">
// // //               <p className="text-xs text-gray-500 text-center">
// // //                 {navigator.canShare && pdfFile ? 
// // //                   'Your browser supports PDF file sharing!' : 
// // //                   'PDF will be downloaded for manual sharing'
// // //                 }
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       <div className="max-w-4xl mx-auto px-6 py-12">
        
// // //         {/* Main Card */}
// // //         <div className="bg-white rounded-2xl shadow-xl border overflow-hidden mb-8">
          
// // //           {/* Header */}
// // //           <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white text-center">
// // //             <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
// // //               <CheckCircle className="w-10 h-10 text-white" />
// // //             </div>
            
// // //             <h1 className="text-3xl font-bold mb-2">Appointment Confirmed</h1>
// // //             <p className="text-blue-100 text-lg">Your therapy session has been successfully scheduled</p>
            
// // //             <div className="mt-4 inline-flex items-center px-4 py-2 bg-white/10 rounded-lg">
// // //               <FileText className="w-4 h-4 mr-2" />
// // //               <span className="font-medium">ID: {bookingData.confirmationId}</span>
// // //             </div>
// // //           </div>

// // //           {/* Content */}
// // //           <div className="p-8">
            
// // //             <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Appointment Details</h2>
            
// // //             {/* Details Grid */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
// // //               {/* Therapist Card */}
// // //               <div className="bg-gray-50 rounded-xl p-6 border">
// // //                 <div className="flex items-center mb-4">
// // //                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
// // //                     <User className="w-6 h-6 text-blue-600" />
// // //                   </div>
// // //                   <div>
// // //                     <h3 className="text-lg font-bold text-gray-900">Healthcare Provider</h3>
// // //                     <p className="text-sm text-gray-600">Licensed Professional</p>
// // //                   </div>
// // //                 </div>
                
// // //                 <div className="space-y-2">
// // //                   <p className="text-xl font-bold text-gray-900">{bookingData.therapistName}</p>
// // //                   <div className="inline-flex items-center px-2 py-1 bg-blue-100 rounded-md text-sm">
// // //                     <Award className="w-3 h-3 text-blue-600 mr-1" />
// // //                     <span className="text-blue-800 font-medium">{bookingData.therapistSpecialty}</span>
// // //                   </div>
// // //                   <div className="flex items-center text-gray-600 text-sm">
// // //                     <MapPin className="w-4 h-4 mr-2" />
// // //                     {bookingData.location}
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Session Card */}
// // //               <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
// // //                 <div className="flex items-center mb-4">
// // //                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
// // //                     <Clock className="w-6 h-6 text-blue-600" />
// // //                   </div>
// // //                   <div>
// // //                     <h3 className="text-lg font-bold text-gray-900">Session Information</h3>
// // //                     <p className="text-sm text-blue-700">Your appointment details</p>
// // //                   </div>
// // //                 </div>
                
// // //                 <div className="space-y-3">
// // //                   <div className="flex items-center">
// // //                     <Calendar className="w-4 h-4 text-blue-600 mr-3" />
// // //                     <div>
// // //                       <p className="text-xs text-gray-500 uppercase font-medium">Date</p>
// // //                       <p className="text-lg font-bold text-gray-900">{bookingData.date}</p>
// // //                     </div>
// // //                   </div>
                  
// // //                   <div className="flex items-center">
// // //                     <Clock className="w-4 h-4 text-blue-600 mr-3" />
// // //                     <div>
// // //                       <p className="text-xs text-gray-500 uppercase font-medium">Time</p>
// // //                       <p className="text-lg font-bold text-gray-900">{bookingData.time}</p>
// // //                     </div>
// // //                   </div>
                  
// // //                   <div className="flex items-center">
// // //                     {getSessionIcon(bookingData.mode)}
// // //                     <div className="ml-3">
// // //                       <p className="text-xs text-gray-500 uppercase font-medium">Format</p>
// // //                       <p className="text-lg font-bold text-gray-900">{bookingData.mode}</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Next Steps */}
// // //             <div className="bg-gray-50 rounded-xl p-6 border mb-8">
// // //               <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
// // //                 <Bell className="w-5 h-5 text-blue-600 mr-2" />
// // //                 What Happens Next
// // //               </h3>
// // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
// // //                 <div className="flex items-start space-x-3">
// // //                   <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
// // //                     <Mail className="w-4 h-4 text-blue-600" />
// // //                   </div>
// // //                   <div>
// // //                     <p className="font-semibold text-gray-900">Email Confirmation</p>
// // //                     <p className="text-gray-600">Sent within 10 minutes</p>
// // //                   </div>
// // //                 </div>
                
// // //                 <div className="flex items-start space-x-3">
// // //                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
// // //                     <Bell className="w-4 h-4 text-green-600" />
// // //                   </div>
// // //                   <div>
// // //                     <p className="font-semibold text-gray-900">Reminders</p>
// // //                     <p className="text-gray-600">24hrs & 1hr before</p>
// // //                   </div>
// // //                 </div>
                
// // //                 <div className="flex items-start space-x-3">
// // //                   <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
// // //                     <ExternalLink className="w-4 h-4 text-purple-600" />
// // //                   </div>
// // //                   <div>
// // //                     <p className="font-semibold text-gray-900">Session Access</p>
// // //                     <p className="text-gray-600">Link sent 15 min before</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Action Buttons */}
// // //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              
// // //               <button 
// // //                 onClick={handleDownloadPDF} 
// // //                 disabled={isDownloading} 
// // //                 className={`flex items-center justify-center px-4 py-3 ${isDownloading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-900'} text-white font-medium rounded-lg transition-colors`}
// // //               >
// // //                 <Download className={`w-4 h-4 mr-2 ${isDownloading ? 'animate-spin' : ''}`} />
// // //                 {isDownloading ? 'Generating...' : 'Download PDF'}
// // //               </button>
              
// // //               <button 
// // //                 onClick={handleShare} 
// // //                 disabled={isSharing} 
// // //                 className={`flex items-center justify-center px-4 py-3 ${isSharing ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium rounded-lg transition-colors`}
// // //               >
// // //                 <Share2 className={`w-4 h-4 mr-2 ${isSharing ? 'animate-spin' : ''}`} />
// // //                 {isSharing ? 'Preparing...' : 'Share'}
// // //               </button>
              
// // //               <button 
// // //                 onClick={() => navigate('/appointments')} 
// // //                 className="flex items-center justify-center px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
// // //               >
// // //                 <Calendar className="w-4 h-4 mr-2" />
// // //                 Appointments
// // //               </button>
              
// // //               <button 
// // //                 onClick={() => navigate('/dashboard')} 
// // //                 className="flex items-center justify-center px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
// // //               >
// // //                 <Home className="w-4 h-4 mr-2" />
// // //                 Dashboard
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* UPDATED PROFESSIONAL SUPPORT CARD (NO LIVE CHAT) */}
// // //         <div className="bg-white rounded-2xl shadow-lg border p-8 text-center">
// // //           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
// // //             <Heart className="w-8 h-8 text-red-600" />
// // //           </div>
// // //           <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Professional Support</h3>
// // //           <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
// // //             Our dedicated healthcare support specialists are available around the clock to assist with any questions about your appointment, technical requirements, or our mental health services.
// // //           </p>
          
// // //           {/* ONLY EMAIL AND PHONE SUPPORT (NO LIVE CHAT) */}
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
// // //             <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
// // //               <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
// // //               <h4 className="font-semibold text-gray-900 mb-1">Email Support</h4>
// // //               <p className="text-sm text-gray-600">support@emotrack.com</p>
// // //               <p className="text-xs text-blue-600 font-medium">2-4 hour response</p>
// // //             </div>
            
// // //             <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
// // //               <Phone className="w-8 h-8 text-green-600 mx-auto mb-2" />
// // //               <h4 className="font-semibold text-gray-900 mb-1">Phone Support</h4>
// // //               <p className="text-sm text-gray-600">+1-800-EMOTRACK</p>
// // //               <p className="text-xs text-green-600 font-medium">Immediate assistance</p>
// // //             </div>
// // //           </div>

// // //           <button 
// // //             onClick={handleContactSupport} 
// // //             className="px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
// // //           >
// // //             Get Professional Support
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BookingConfirmation;
// // import React, { useState, useEffect, useRef } from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';
// // import { jsPDF } from 'jspdf';
// // import { 
// //   CheckCircle, 
// //   Calendar, 
// //   Clock, 
// //   User, 
// //   MapPin, 
// //   Video, 
// //   Phone, 
// //   MessageCircle,
// //   Download,
// //   Share2,
// //   Home,
// //   FileText,
// //   Mail,
// //   Bell,
// //   Heart,
// //   Award,
// //   X,
// //   Copy,
// //   ExternalLink,
// //   Send,
// //   AlertCircle
// // } from 'lucide-react';

// // const BookingConfirmation = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const [animationComplete, setAnimationComplete] = useState(false);
// //   const [showShareModal, setShowShareModal] = useState(false);
// //   const [showSupportModal, setShowSupportModal] = useState(false);
// //   const [isDownloading, setIsDownloading] = useState(false);
// //   const [isSharing, setIsSharing] = useState(false);
// //   const [isSending, setIsSending] = useState(false);
// //   const [pdfFile, setPdfFile] = useState(null);
// //   const [supportForm, setSupportForm] = useState({
// //     name: '',
// //     email: '',
// //     issue: '',
// //     priority: 'medium'
// //   });
  
// //   const bookingData = location.state?.bookingData || {
// //     therapistName: "Dr. Asha Verma",
// //     date: "12 July 2025",
// //     time: "2:00 PM",
// //     mode: "Video Call",
// //     confirmationId: "BK" + Math.random().toString(36).substr(2, 9).toUpperCase(),
// //     therapistSpecialty: "Stress Management",
// //     sessionDuration: "50 minutes",
// //     location: "Mumbai"
// //   };

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setAnimationComplete(true);
// //     }, 600);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   // PRE-GENERATE PDF FILE FOR SHARING
// //   useEffect(() => {
// //     const createPDFFile = async () => {
// //       try {
// //         const doc = generatePDF();
// //         const pdfBlob = doc.output('blob');
// //         const fileName = `EmoTrack-Confirmation-${bookingData.confirmationId}.pdf`;
// //         const file = new File([pdfBlob], fileName, { type: 'application/pdf' });
// //         setPdfFile(file);
// //       } catch (error) {
// //         console.error('Error creating PDF file:', error);
// //       }
// //     };
    
// //     createPDFFile();
// //   }, [bookingData]);

// //   // PROFESSIONAL CONTACT SUPPORT OPTIONS
// //   const handleContactSupport = () => {
// //     setShowSupportModal(true);
// //   };

// //   // METHOD 1: DIRECT EMAIL WITH PRE-FILLED CONTENT
// //   const handleEmailSupport = () => {
// //     const subject = encodeURIComponent(`🏥 EmoTrack Support Request - ${bookingData.confirmationId}`);
// //     const body = encodeURIComponent(`Hello EmoTrack Support Team,

// // I need assistance with my appointment booking.

// // 📋 APPOINTMENT DETAILS:
// // • Confirmation ID: ${bookingData.confirmationId}
// // • Healthcare Provider: ${bookingData.therapistName}
// // • Appointment Date: ${bookingData.date}
// // • Appointment Time: ${bookingData.time}
// // • Session Format: ${bookingData.mode}

// // 🔍 ISSUE DESCRIPTION:
// // [Please describe your issue below]

// // 📞 PREFERRED CONTACT METHOD:
// // [ ] Email Response
// // [ ] Phone Call

// // Thank you for your prompt assistance.

// // Best regards,
// // [Your Name]

// // ---
// // EmoTrack Professional Mental Health Services
// // Generated: ${new Date().toLocaleString()}`);
    
// //     try {
// //       window.location.href = `mailto:support@emotrack.com?subject=${subject}&body=${body}`;
// //       setShowSupportModal(false);
// //     } catch (error) {
// //       alert('Unable to open email client. Please copy the support email: support@emotrack.com');
// //     }
// //   };

// //   // METHOD 2: PHONE SUPPORT
// //   const handlePhoneSupport = () => {
// //     try {
// //       window.location.href = 'tel:+1-800-EMOTRACK';
// //       setShowSupportModal(false);
// //     } catch (error) {
// //       alert('📞 Call Support: +1-800-EMOTRACK (1-800-366-8722)\n\nAvailable 24/7 for immediate assistance');
// //     }
// //   };

// //   // METHOD 3: PROFESSIONAL SUPPORT FORM (ADVANCED)
// //   const handleSupportFormSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsSending(true);

// //     try {
// //       const subject = encodeURIComponent(`🚨 ${supportForm.priority.toUpperCase()} PRIORITY - Support Request ${bookingData.confirmationId}`);
// //       const body = encodeURIComponent(`EMOTRACK SUPPORT REQUEST

// // 📋 APPOINTMENT INFORMATION:
// // • Confirmation ID: ${bookingData.confirmationId}
// // • Healthcare Provider: ${bookingData.therapistName}
// // • Date: ${bookingData.date}
// // • Time: ${bookingData.time}
// // • Format: ${bookingData.mode}

// // 👤 CUSTOMER INFORMATION:
// // • Name: ${supportForm.name}
// // • Email: ${supportForm.email}
// // • Priority Level: ${supportForm.priority.toUpperCase()}

// // 🔍 ISSUE DESCRIPTION:
// // ${supportForm.issue}

// // ⏰ SUBMITTED: ${new Date().toLocaleString()}

// // ---
// // This is an automated support request from EmoTrack Professional Mental Health Services.`);

// //       window.location.href = `mailto:support@emotrack.com?subject=${subject}&body=${body}`;
      
// //       // Reset form
// //       setSupportForm({
// //         name: '',
// //         email: '',
// //         issue: '',
// //         priority: 'medium'
// //       });
      
// //       setTimeout(() => {
// //         alert('✅ Support request submitted successfully!\n\nOur team will respond within 2-4 hours during business hours.');
// //         setShowSupportModal(false);
// //       }, 1000);
      
// //     } catch (error) {
// //       alert('❌ Error submitting request. Please try calling our support line: +1-800-EMOTRACK');
// //     } finally {
// //       setIsSending(false);
// //     }
// //   };

// //   const generatePDF = () => {
// //     const doc = new jsPDF();
    
// //     // Header with Blue Theme
// //     doc.setFillColor(37, 99, 235); // blue-600
// //     doc.rect(0, 0, 210, 40, 'F');
// //     doc.setTextColor(255, 255, 255);
// //     doc.setFontSize(24);
// //     doc.setFont('helvetica', 'bold');
// //     doc.text('EmoTrack', 20, 25);
// //     doc.setFontSize(12);
// //     doc.setFont('helvetica', 'normal');
// //     doc.text('Professional Mental Health Services', 20, 35);
    
// //     // Title
// //     doc.setTextColor(37, 99, 235);
// //     doc.setFontSize(20);
// //     doc.setFont('helvetica', 'bold');
// //     doc.text('APPOINTMENT CONFIRMATION', 20, 55);
    
// //     // Confirmation Box
// //     doc.setFillColor(239, 246, 255);
// //     doc.roundedRect(20, 65, 170, 20, 3, 3, 'F');
// //     doc.setTextColor(29, 78, 216);
// //     doc.setFontSize(12);
// //     doc.setFont('helvetica', 'bold');
// //     doc.text(`Confirmation ID: ${bookingData.confirmationId}`, 25, 73);
// //     doc.text(`Generated: ${new Date().toLocaleString()}`, 25, 81);
    
// //     // Provider Details
// //     doc.setTextColor(17, 24, 39);
// //     doc.setFontSize(16);
// //     doc.setFont('helvetica', 'bold');
// //     doc.text('HEALTHCARE PROVIDER', 20, 100);
// //     doc.setDrawColor(147, 197, 253);
// //     doc.line(20, 103, 190, 103);
    
// //     doc.setFontSize(11);
// //     doc.setFont('helvetica', 'normal');
// //     doc.text(`Provider: ${bookingData.therapistName}`, 25, 113);
// //     doc.text(`Specialty: ${bookingData.therapistSpecialty}`, 25, 123);
// //     doc.text(`Location: ${bookingData.location}`, 25, 133);
    
// //     // Session Details
// //     doc.setFontSize(16);
// //     doc.setFont('helvetica', 'bold');
// //     doc.text('SESSION DETAILS', 20, 150);
// //     doc.line(20, 153, 190, 153);
    
// //     doc.setFontSize(11);
// //     doc.setFont('helvetica', 'normal');
// //     doc.text(`Date: ${bookingData.date}`, 25, 163);
// //     doc.text(`Time: ${bookingData.time}`, 25, 173);
// //     doc.text(`Format: ${bookingData.mode}`, 25, 183);
// //     doc.text(`Duration: ${bookingData.sessionDuration}`, 25, 193);
    
// //     // Instructions
// //     doc.setFontSize(16);
// //     doc.setFont('helvetica', 'bold');
// //     doc.text('IMPORTANT INSTRUCTIONS', 20, 210);
// //     doc.line(20, 213, 190, 213);
    
// //     doc.setFontSize(10);
// //     doc.setFont('helvetica', 'normal');
// //     doc.text('• Arrive 5 minutes early for your appointment', 25, 223);
// //     doc.text('• Email confirmation will be sent within 10 minutes', 25, 233);
// //     doc.text('• Reminders will be sent 24 hours and 1 hour before', 25, 243);
// //     doc.text('• Session access link provided 15 minutes before start time', 25, 253);
    
// //     // Footer
// //     doc.setTextColor(107, 114, 128);
// //     doc.setFontSize(9);
// //     doc.text('EmoTrack Professional Mental Health Services | support@emotrack.com', 20, 280);
    
// //     return doc;
// //   };

// //   // DOWNLOAD PDF
// //   const handleDownloadPDF = () => {
// //     setIsDownloading(true);
    
// //     try {
// //       if (pdfFile) {
// //         const url = URL.createObjectURL(pdfFile);
// //         const link = document.createElement('a');
// //         link.href = url;
// //         link.download = pdfFile.name;
// //         link.style.display = 'none';
        
// //         document.body.appendChild(link);
// //         link.click();
// //         document.body.removeChild(link);
// //         URL.revokeObjectURL(url);
// //       } else {
// //         const doc = generatePDF();
// //         doc.save(`EmoTrack-Confirmation-${bookingData.confirmationId}.pdf`);
// //       }
// //     } catch (error) {
// //       alert('Error downloading PDF. Please try again.');
// //     } finally {
// //       setIsDownloading(false);
// //     }
// //   };

// //   // SHARE HANDLER
// //   const handleShare = async () => {
// //     setIsSharing(true);
    
// //     try {
// //       if (navigator.canShare && pdfFile && navigator.canShare({ files: [pdfFile] })) {
// //         await navigator.share({
// //           title: 'EmoTrack Appointment Confirmation',
// //           text: `My appointment with ${bookingData.therapistName} on ${bookingData.date} at ${bookingData.time}`,
// //           files: [pdfFile]
// //         });
// //         return;
// //       }
      
// //       setShowShareModal(true);
      
// //     } catch (error) {
// //       console.error('Share error:', error);
      
// //       if (error.name === 'AbortError') {
// //         console.log('User cancelled share');
// //       } else {
// //         setShowShareModal(true);
// //       }
// //     } finally {
// //       setIsSharing(false);
// //     }
// //   };

// //   // SHARE PDF FILE DIRECTLY
// //   const sharePDFFileDirectly = async () => {
// //     if (!pdfFile) {
// //       alert('PDF file is not ready. Please try again.');
// //       return;
// //     }

// //     try {
// //       if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
// //         await navigator.share({
// //           title: 'EmoTrack Appointment Confirmation PDF',
// //           text: `Appointment confirmation for ${bookingData.therapistName} on ${bookingData.date}`,
// //           files: [pdfFile]
// //         });
// //         setShowShareModal(false);
// //       } else {
// //         alert('Your browser doesn\'t support PDF file sharing. The PDF will be downloaded instead.');
// //         handleDownloadPDF();
// //         setShowShareModal(false);
// //       }
// //     } catch (error) {
// //       if (error.name !== 'AbortError') {
// //         alert('Error sharing PDF file. Please try downloading instead.');
// //       }
// //     }
// //   };

// //   // WHATSAPP SHARE
// //   const shareToWhatsApp = () => {
// //     const message = `Hello,

// // I've scheduled a mental health appointment:

// // Provider: ${bookingData.therapistName}
// // Date: ${bookingData.date}
// // Time: ${bookingData.time}
// // Format: ${bookingData.mode}
// // ID: ${bookingData.confirmationId}

// // EmoTrack Professional Services
// // ${window.location.origin}

// // 📄 I'll attach the PDF confirmation separately.`;

// //     const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    
// //     if (pdfFile) {
// //       handleDownloadPDF();
// //       setTimeout(() => {
// //         const popup = window.open(
// //           url, 
// //           'whatsapp-share',
// //           'width=500,height=600,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no,left=' + 
// //           (window.screen.width / 2 - 250) + ',top=' + (window.screen.height / 2 - 300)
// //         );
        
// //         if (popup) {
// //           popup.focus();
// //           setShowShareModal(false);
// //         } else {
// //           alert('Please allow popups to share via WhatsApp');
// //         }
// //       }, 1000);
// //     } else {
// //       alert('PDF is not ready. Please try again in a moment.');
// //     }
// //   };

// //   // COPY TO CLIPBOARD
// //   const copyToClipboard = async () => {
// //     const text = `EmoTrack Appointment Confirmation

// // Provider: ${bookingData.therapistName}
// // Date: ${bookingData.date}
// // Time: ${bookingData.time}
// // Format: ${bookingData.mode}
// // Confirmation ID: ${bookingData.confirmationId}

// // EmoTrack Professional Mental Health Services
// // ${window.location.origin}`;

// //     try {
// //       await navigator.clipboard.writeText(text);
// //       alert('✓ Appointment details copied to clipboard!');
// //       setShowShareModal(false);
// //     } catch (error) {
// //       const textArea = document.createElement('textarea');
// //       textArea.value = text;
// //       textArea.style.position = 'fixed';
// //       textArea.style.opacity = '0';
// //       document.body.appendChild(textArea);
// //       textArea.select();
// //       document.execCommand('copy');
// //       document.body.removeChild(textArea);
// //       alert('✓ Appointment details copied to clipboard!');
// //       setShowShareModal(false);
// //     }
// //   };

// //   const getSessionIcon = (mode) => {
// //     switch (mode.toLowerCase()) {
// //       case 'video call':
// //         return <Video className="w-5 h-5 text-blue-600" />;
// //       case 'voice call':
// //         return <Phone className="w-5 h-5 text-green-600" />;
// //       case 'live chat':
// //         return <MessageCircle className="w-5 h-5 text-purple-600" />;
// //       default:
// //         return <MapPin className="w-5 h-5 text-gray-600" />;
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      
// //       {/* Loading Animation */}
// //       <div className={`fixed inset-0 bg-blue-900/20 backdrop-blur-sm z-50 transition-all duration-700 ${animationComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
// //         <div className="flex items-center justify-center h-full">
// //           <div className="bg-white rounded-2xl p-8 shadow-xl text-center border border-blue-200">
// //             <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
// //               <CheckCircle className="w-10 h-10 text-white" />
// //             </div>
// //             <p className="text-blue-700 font-medium">Processing confirmation...</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* PROFESSIONAL SUPPORT MODAL */}
// //       {showSupportModal && (
// //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-4">
// //           <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl border max-h-[90vh] overflow-y-auto">
// //             <div className="flex items-center justify-between mb-6">
// //               <div className="flex items-center">
// //                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
// //                   <Heart className="w-5 h-5 text-blue-600" />
// //                 </div>
// //                 <h3 className="text-xl font-bold text-gray-900">Professional Support</h3>
// //               </div>
// //               <button 
// //                 onClick={() => setShowSupportModal(false)} 
// //                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
// //               >
// //                 <X className="w-5 h-5 text-gray-500" />
// //               </button>
// //             </div>
            
// //             <p className="text-gray-600 mb-6">
// //               Choose your preferred support method. Our team is available 24/7 to assist you.
// //             </p>

// //             {/* Quick Contact Options */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
// //               <button 
// //                 onClick={handleEmailSupport}
// //                 className="flex flex-col items-center p-4 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors"
// //               >
// //                 <Mail className="w-6 h-6 text-blue-600 mb-2" />
// //                 <span className="text-sm font-medium text-gray-900">Email Support</span>
// //                 <span className="text-xs text-gray-500">2-4 hours response</span>
// //               </button>

// //               <button 
// //                 onClick={handlePhoneSupport}
// //                 className="flex flex-col items-center p-4 border-2 border-green-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors"
// //               >
// //                 <Phone className="w-6 h-6 text-green-600 mb-2" />
// //                 <span className="text-sm font-medium text-gray-900">Call Support</span>
// //                 <span className="text-xs text-gray-500">Immediate assistance</span>
// //               </button>
// //             </div>

// //             {/* Professional Support Form */}
// //             <div className="border-t pt-6">
// //               <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
// //                 <Send className="w-5 h-5 text-gray-700 mr-2" />
// //                 Submit Support Request
// //               </h4>
              
// //               <form onSubmit={handleSupportFormSubmit} className="space-y-4">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
// //                     <input
// //                       type="text"
// //                       value={supportForm.name}
// //                       onChange={(e) => setSupportForm({...supportForm, name: e.target.value})}
// //                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                       required
// //                     />
// //                   </div>
                  
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
// //                     <input
// //                       type="email"
// //                       value={supportForm.email}
// //                       onChange={(e) => setSupportForm({...supportForm, email: e.target.value})}
// //                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                       required
// //                     />
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Priority Level</label>
// //                   <select
// //                     value={supportForm.priority}
// //                     onChange={(e) => setSupportForm({...supportForm, priority: e.target.value})}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   >
// //                     <option value="low">Low - General inquiry</option>
// //                     <option value="medium">Medium - Appointment related</option>
// //                     <option value="high">High - Urgent assistance needed</option>
// //                     <option value="critical">Critical - Emergency support</option>
// //                   </select>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Describe Your Issue</label>
// //                   <textarea
// //                     value={supportForm.issue}
// //                     onChange={(e) => setSupportForm({...supportForm, issue: e.target.value})}
// //                     rows={4}
// //                     placeholder="Please provide details about your issue, including any error messages or specific problems you're experiencing..."
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
// //                     required
// //                   />
// //                 </div>

// //                 <div className="bg-blue-50 p-4 rounded-lg">
// //                   <div className="flex items-start">
// //                     <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
// //                     <div className="text-sm text-blue-800">
// //                       <p className="font-medium">Your appointment details will be automatically included:</p>
// //                       <p>• Confirmation ID: {bookingData.confirmationId}</p>
// //                       <p>• Provider: {bookingData.therapistName}</p>
// //                       <p>• Date: {bookingData.date} at {bookingData.time}</p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <button
// //                   type="submit"
// //                   disabled={isSending}
// //                   className={`w-full flex items-center justify-center px-4 py-3 ${
// //                     isSending 
// //                       ? 'bg-gray-400 cursor-not-allowed' 
// //                       : 'bg-blue-600 hover:bg-blue-700'
// //                   } text-white font-medium rounded-lg transition-colors`}
// //                 >
// //                   <Send className={`w-4 h-4 mr-2 ${isSending ? 'animate-spin' : ''}`} />
// //                   {isSending ? 'Submitting Request...' : 'Submit Support Request'}
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* SHARE MODAL */}
// //       {showShareModal && (
// //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-4">
// //           <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl border">
// //             <div className="flex items-center justify-between mb-6">
// //               <h3 className="text-xl font-bold text-gray-900">Share Appointment</h3>
// //               <button 
// //                 onClick={() => setShowShareModal(false)} 
// //                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
// //               >
// //                 <X className="w-5 h-5 text-gray-500" />
// //               </button>
// //             </div>
            
// //             <p className="text-gray-600 mb-6 text-sm">
// //               Choose how to share your appointment:
// //             </p>
            
// //             <div className="space-y-3">
// //               {navigator.canShare && pdfFile && (
// //                 <button 
// //                   onClick={sharePDFFileDirectly} 
// //                   className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors shadow-sm"
// //                 >
// //                   <FileText className="w-5 h-5" />
// //                   Share PDF File
// //                 </button>
// //               )}
              
// //               <button 
// //                 onClick={shareToWhatsApp} 
// //                 className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-sm"
// //               >
// //                 <MessageCircle className="w-5 h-5" />
// //                 WhatsApp + PDF
// //               </button>
              
// //               <button 
// //                 onClick={copyToClipboard} 
// //                 className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
// //               >
// //                 <Copy className="w-5 h-5" />
// //                 Copy Details
// //               </button>
              
// //               <button 
// //                 onClick={() => { handleDownloadPDF(); setShowShareModal(false); }} 
// //                 className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors shadow-sm"
// //               >
// //                 <Download className="w-5 h-5" />
// //                 Download PDF
// //               </button>
// //             </div>
            
// //             <div className="mt-6 pt-4 border-t border-gray-200">
// //               <p className="text-xs text-gray-500 text-center">
// //                 {navigator.canShare && pdfFile ? 
// //                   'Your browser supports PDF file sharing!' : 
// //                   'PDF will be downloaded for manual sharing'
// //                 }
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <div className="max-w-4xl mx-auto px-6 py-12">
        
// //         {/* Main Card */}
// //         <div className="bg-white rounded-2xl shadow-xl border overflow-hidden mb-8">
          
// //           {/* Header with Professional Blue Gradient */}
// //           <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white text-center shadow-lg">
// //             <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm shadow-md">
// //               <CheckCircle className="w-10 h-10 text-white" />
// //             </div>
            
// //             <h1 className="text-3xl font-bold mb-2">Appointment Confirmed</h1>
// //             <p className="text-blue-100 text-lg">Your therapy session has been successfully scheduled</p>
            
// //             <div className="mt-4 inline-flex items-center px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 shadow-sm">
// //               <FileText className="w-4 h-4 mr-2" />
// //               <span className="font-medium">ID: {bookingData.confirmationId}</span>
// //             </div>
// //           </div>

// //           {/* Content */}
// //           <div className="p-8">
            
// //             <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Appointment Details</h2>
            
// //             {/* Details Grid */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
// //               {/* Therapist Card */}
// //               <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
// //                 <div className="flex items-center mb-4">
// //                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
// //                     <User className="w-6 h-6 text-blue-600" />
// //                   </div>
// //                   <div>
// //                     <h3 className="text-lg font-bold text-gray-900">Healthcare Provider</h3>
// //                     <p className="text-sm text-blue-600">Licensed Professional</p>
// //                   </div>
// //                 </div>
                
// //                 <div className="space-y-2">
// //                   <p className="text-xl font-bold text-gray-900">{bookingData.therapistName}</p>
// //                   <div className="inline-flex items-center px-2 py-1 bg-blue-100 rounded-md text-sm">
// //                     <Award className="w-3 h-3 text-blue-600 mr-1" />
// //                     <span className="text-blue-800 font-medium">{bookingData.therapistSpecialty}</span>
// //                   </div>
// //                   <div className="flex items-center text-gray-600 text-sm">
// //                     <MapPin className="w-4 h-4 mr-2" />
// //                     {bookingData.location}
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Session Card */}
// //               <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
// //                 <div className="flex items-center mb-4">
// //                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
// //                     <Clock className="w-6 h-6 text-blue-600" />
// //                   </div>
// //                   <div>
// //                     <h3 className="text-lg font-bold text-gray-900">Session Information</h3>
// //                     <p className="text-sm text-blue-600">Your appointment details</p>
// //                   </div>
// //                 </div>
                
// //                 <div className="space-y-3">
// //                   <div className="flex items-center">
// //                     <Calendar className="w-4 h-4 text-blue-600 mr-3" />
// //                     <div>
// //                       <p className="text-xs text-gray-500 uppercase font-medium">Date</p>
// //                       <p className="text-lg font-bold text-gray-900">{bookingData.date}</p>
// //                     </div>
// //                   </div>
                  
// //                   <div className="flex items-center">
// //                     <Clock className="w-4 h-4 text-blue-600 mr-3" />
// //                     <div>
// //                       <p className="text-xs text-gray-500 uppercase font-medium">Time</p>
// //                       <p className="text-lg font-bold text-gray-900">{bookingData.time}</p>
// //                     </div>
// //                   </div>
                  
// //                   <div className="flex items-center">
// //                     {getSessionIcon(bookingData.mode)}
// //                     <div className="ml-3">
// //                       <p className="text-xs text-gray-500 uppercase font-medium">Format</p>
// //                       <p className="text-lg font-bold text-gray-900">{bookingData.mode}</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Next Steps */}
// //             <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-8">
// //               <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
// //                 <Bell className="w-5 h-5 text-blue-600 mr-2" />
// //                 What Happens Next
// //               </h3>
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
// //                 <div className="flex items-start space-x-3">
// //                   <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
// //                     <Mail className="w-4 h-4 text-blue-600" />
// //                   </div>
// //                   <div>
// //                     <p className="font-semibold text-gray-900">Email Confirmation</p>
// //                     <p className="text-gray-600">Sent within 10 minutes</p>
// //                   </div>
// //                 </div>
                
// //                 <div className="flex items-start space-x-3">
// //                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
// //                     <Bell className="w-4 h-4 text-green-600" />
// //                   </div>
// //                   <div>
// //                     <p className="font-semibold text-gray-900">Reminders</p>
// //                     <p className="text-gray-600">24hrs & 1hr before</p>
// //                   </div>
// //                 </div>
                
// //                 <div className="flex items-start space-x-3">
// //                   <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
// //                     <ExternalLink className="w-4 h-4 text-purple-600" />
// //                   </div>
// //                   <div>
// //                     <p className="font-semibold text-gray-900">Session Access</p>
// //                     <p className="text-gray-600">Link sent 15 min before</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Action Buttons with Matching Blue Theme */}
// //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              
// //               <button 
// //                 onClick={handleDownloadPDF} 
// //                 disabled={isDownloading} 
// //                 className={`flex items-center justify-center px-4 py-3 ${
// //                   isDownloading 
// //                     ? 'bg-gray-400 cursor-not-allowed' 
// //                     : 'bg-blue-700 hover:bg-blue-800'
// //                 } text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg`}
// //               >
// //                 <Download className={`w-4 h-4 mr-2 ${isDownloading ? 'animate-spin' : ''}`} />
// //                 {isDownloading ? 'Generating...' : 'Download PDF'}
// //               </button>
              
// //               <button 
// //                 onClick={handleShare} 
// //                 disabled={isSharing} 
// //                 className={`flex items-center justify-center px-4 py-3 ${
// //                   isSharing 
// //                     ? 'bg-blue-400 cursor-not-allowed' 
// //                     : 'bg-blue-600 hover:bg-blue-700'
// //                 } text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg`}
// //               >
// //                 <Share2 className={`w-4 h-4 mr-2 ${isSharing ? 'animate-spin' : ''}`} />
// //                 {isSharing ? 'Preparing...' : 'Share'}
// //               </button>
              
// //               <button 
// //                 onClick={() => navigate('/appointments')} 
// //                 className="flex items-center justify-center px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
// //               >
// //                 <Calendar className="w-4 h-4 mr-2" />
// //                 Appointments
// //               </button>
              
// //               <button 
// //                 onClick={() => navigate('/dashboard')} 
// //                 className="flex items-center justify-center px-4 py-3 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
// //               >
// //                 <Home className="w-4 h-4 mr-2" />
// //                 Dashboard
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* PROFESSIONAL SUPPORT CARD */}
// //         <div className="bg-white rounded-2xl shadow-lg border p-8 text-center">
// //           <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
// //             <Heart className="w-8 h-8 text-blue-600" />
// //           </div>
// //           <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Professional Support</h3>
// //           <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
// //             Our dedicated healthcare support specialists are available around the clock to assist with any questions about your appointment, technical requirements, or our mental health services.
// //           </p>
          
// //           {/* ONLY EMAIL AND PHONE SUPPORT */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
// //             <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
// //               <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
// //               <h4 className="font-semibold text-gray-900 mb-1">Email Support</h4>
// //               <p className="text-sm text-gray-600">support@emotrack.com</p>
// //               <p className="text-xs text-blue-600 font-medium">2-4 hour response</p>
// //             </div>
            
// //             <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
// //               <Phone className="w-8 h-8 text-green-600 mx-auto mb-2" />
// //               <h4 className="font-semibold text-gray-900 mb-1">Phone Support</h4>
// //               <p className="text-sm text-gray-600">+1-800-EMOTRACK</p>
// //               <p className="text-xs text-green-600 font-medium">Immediate assistance</p>
// //             </div>
// //           </div>

// //           <button 
// //             onClick={handleContactSupport} 
// //             className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
// //           >
// //             Get Professional Support
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BookingConfirmation;
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { jsPDF } from 'jspdf';
// import { 
//   CheckCircle, 
//   Calendar, 
//   Clock, 
//   User, 
//   MapPin, 
//   Video, 
//   Phone, 
//   MessageCircle,
//   Download,
//   Home,
//   FileText,
//   Mail,
//   Bell,
//   Heart,
//   Award,
//   X,
//   Send,
//   AlertCircle,
//   ExternalLink
// } from 'lucide-react';


// const BookingConfirmation = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [animationComplete, setAnimationComplete] = useState(false);
//   const [showSupportModal, setShowSupportModal] = useState(false);
//   const [isDownloading, setIsDownloading] = useState(false);
//   const [isSending, setIsSending] = useState(false);
//   const [supportForm, setSupportForm] = useState({
//     name: '',
//     email: '',
//     issue: '',
//     priority: 'medium'
//   });
  
//   const bookingData = location.state?.bookingData || {
//     therapistName: "Dr. Asha Verma",
//     date: "12 July 2025",
//     time: "2:00 PM",
//     mode: "Video Call",
//     confirmationId: "BK" + Math.random().toString(36).substr(2, 9).toUpperCase(),
//     therapistSpecialty: "Stress Management",
//     sessionDuration: "50 minutes",
//     location: "Mumbai"
//   };


//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setAnimationComplete(true);
//     }, 600);
//     return () => clearTimeout(timer);
//   }, []);


//   // PROFESSIONAL CONTACT SUPPORT OPTIONS
//   const handleContactSupport = () => {
//     setShowSupportModal(true);
//   };


//   // METHOD 1: DIRECT EMAIL WITH PRE-FILLED CONTENT
//   const handleEmailSupport = () => {
//     const subject = encodeURIComponent(`🏥 EmoTrack Support Request - ${bookingData.confirmationId}`);
//     const body = encodeURIComponent(`Hello EmoTrack Support Team,


// I need assistance with my appointment booking.


// 📋 APPOINTMENT DETAILS:
// • Confirmation ID: ${bookingData.confirmationId}
// • Healthcare Provider: ${bookingData.therapistName}
// • Appointment Date: ${bookingData.date}
// • Appointment Time: ${bookingData.time}
// • Session Format: ${bookingData.mode}


// 🔍 ISSUE DESCRIPTION:
// [Please describe your issue below]


// 📞 PREFERRED CONTACT METHOD:
// [ ] Email Response
// [ ] Phone Call


// Thank you for your prompt assistance.


// Best regards,
// [Your Name]


// ---
// EmoTrack Professional Mental Health Services
// Generated: ${new Date().toLocaleString()}`);
    
//     try {
//       window.location.href = `mailto:support@emotrack.com?subject=${subject}&body=${body}`;
//       setShowSupportModal(false);
//     } catch (error) {
//       alert('Unable to open email client. Please copy the support email: support@emotrack.com');
//     }
//   };


//   // METHOD 2: PHONE SUPPORT
//   const handlePhoneSupport = () => {
//     try {
//       window.location.href = 'tel:+1-800-EMOTRACK';
//       setShowSupportModal(false);
//     } catch (error) {
//       alert('📞 Call Support: +1-800-EMOTRACK (1-800-366-8722)\n\nAvailable 24/7 for immediate assistance');
//     }
//   };


//   // METHOD 3: PROFESSIONAL SUPPORT FORM (ADVANCED)
//   const handleSupportFormSubmit = async (e) => {
//     e.preventDefault();
//     setIsSending(true);


//     try {
//       const subject = encodeURIComponent(`🚨 ${supportForm.priority.toUpperCase()} PRIORITY - Support Request ${bookingData.confirmationId}`);
//       const body = encodeURIComponent(`EMOTRACK SUPPORT REQUEST


// 📋 APPOINTMENT INFORMATION:
// • Confirmation ID: ${bookingData.confirmationId}
// • Healthcare Provider: ${bookingData.therapistName}
// • Date: ${bookingData.date}
// • Time: ${bookingData.time}
// • Format: ${bookingData.mode}


// 👤 CUSTOMER INFORMATION:
// • Name: ${supportForm.name}
// • Email: ${supportForm.email}
// • Priority Level: ${supportForm.priority.toUpperCase()}


// 🔍 ISSUE DESCRIPTION:
// ${supportForm.issue}


// ⏰ SUBMITTED: ${new Date().toLocaleString()}


// ---
// This is an automated support request from EmoTrack Professional Mental Health Services.`);


//       window.location.href = `mailto:support@emotrack.com?subject=${subject}&body=${body}`;
      
//       // Reset form
//       setSupportForm({
//         name: '',
//         email: '',
//         issue: '',
//         priority: 'medium'
//       });
      
//       setTimeout(() => {
//         alert('✅ Support request submitted successfully!\n\nOur team will respond within 2-4 hours during business hours.');
//         setShowSupportModal(false);
//       }, 1000);
      
//     } catch (error) {
//       alert('❌ Error submitting request. Please try calling our support line: +1-800-EMOTRACK');
//     } finally {
//       setIsSending(false);
//     }
//   };


//   const generatePDF = () => {
//     const doc = new jsPDF();
    
//     // Header with Blue Theme
//     doc.setFillColor(37, 99, 235); // blue-600
//     doc.rect(0, 0, 210, 40, 'F');
//     doc.setTextColor(255, 255, 255);
//     doc.setFontSize(24);
//     doc.setFont('helvetica', 'bold');
//     doc.text('EmoTrack', 20, 25);
//     doc.setFontSize(12);
//     doc.setFont('helvetica', 'normal');
//     doc.text('Professional Mental Health Services', 20, 35);
    
//     // Title
//     doc.setTextColor(37, 99, 235);
//     doc.setFontSize(20);
//     doc.setFont('helvetica', 'bold');
//     doc.text('APPOINTMENT CONFIRMATION', 20, 55);
    
//     // Confirmation Box
//     doc.setFillColor(239, 246, 255);
//     doc.roundedRect(20, 65, 170, 20, 3, 3, 'F');
//     doc.setTextColor(29, 78, 216);
//     doc.setFontSize(12);
//     doc.setFont('helvetica', 'bold');
//     doc.text(`Confirmation ID: ${bookingData.confirmationId}`, 25, 73);
//     doc.text(`Generated: ${new Date().toLocaleString()}`, 25, 81);
    
//     // Provider Details
//     doc.setTextColor(17, 24, 39);
//     doc.setFontSize(16);
//     doc.setFont('helvetica', 'bold');
//     doc.text('HEALTHCARE PROVIDER', 20, 100);
//     doc.setDrawColor(147, 197, 253);
//     doc.line(20, 103, 190, 103);
    
//     doc.setFontSize(11);
//     doc.setFont('helvetica', 'normal');
//     doc.text(`Provider: ${bookingData.therapistName}`, 25, 113);
//     doc.text(`Specialty: ${bookingData.therapistSpecialty}`, 25, 123);
//     doc.text(`Location: ${bookingData.location}`, 25, 133);
    
//     // Session Details
//     doc.setFontSize(16);
//     doc.setFont('helvetica', 'bold');
//     doc.text('SESSION DETAILS', 20, 150);
//     doc.line(20, 153, 190, 153);
    
//     doc.setFontSize(11);
//     doc.setFont('helvetica', 'normal');
//     doc.text(`Date: ${bookingData.date}`, 25, 163);
//     doc.text(`Time: ${bookingData.time}`, 25, 173);
//     doc.text(`Format: ${bookingData.mode}`, 25, 183);
//     doc.text(`Duration: ${bookingData.sessionDuration}`, 25, 193);
    
//     // Instructions
//     doc.setFontSize(16);
//     doc.setFont('helvetica', 'bold');
//     doc.text('IMPORTANT INSTRUCTIONS', 20, 210);
//     doc.line(20, 213, 190, 213);
    
//     doc.setFontSize(10);
//     doc.setFont('helvetica', 'normal');
//     doc.text('• Arrive 5 minutes early for your appointment', 25, 223);
//     doc.text('• Email confirmation will be sent within 10 minutes', 25, 233);
//     doc.text('• Reminders will be sent 24 hours and 1 hour before', 25, 243);
//     doc.text('• Session access link provided 15 minutes before start time', 25, 253);
    
//     // Footer
//     doc.setTextColor(107, 114, 128);
//     doc.setFontSize(9);
//     doc.text('EmoTrack Professional Mental Health Services | support@emotrack.com', 20, 280);
    
//     return doc;
//   };


//   // DOWNLOAD PDF
//   const handleDownloadPDF = () => {
//     setIsDownloading(true);
    
//     try {
//       const doc = generatePDF();
//       doc.save(`EmoTrack-Confirmation-${bookingData.confirmationId}.pdf`);
//     } catch (error) {
//       alert('Error downloading PDF. Please try again.');
//     } finally {
//       setIsDownloading(false);
//     }
//   };


//   const getSessionIcon = (mode) => {
//     switch (mode.toLowerCase()) {
//       case 'video call':
//         return <Video className="w-5 h-5 text-blue-600" />;
//       case 'voice call':
//         return <Phone className="w-5 h-5 text-green-600" />;
//       case 'live chat':
//         return <MessageCircle className="w-5 h-5 text-purple-600" />;
//       default:
//         return <MapPin className="w-5 h-5 text-gray-600" />;
//     }
//   };


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      
//       {/* Loading Animation */}
//       <div className={`fixed inset-0 bg-blue-900/20 backdrop-blur-sm z-50 transition-all duration-700 ${animationComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
//         <div className="flex items-center justify-center h-full">
//           <div className="bg-white rounded-2xl p-8 shadow-xl text-center border border-blue-200">
//             <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
//               <CheckCircle className="w-10 h-10 text-white" />
//             </div>
//             <p className="text-blue-700 font-medium">Processing confirmation...</p>
//           </div>
//         </div>
//       </div>


//       {/* PROFESSIONAL SUPPORT MODAL */}
//       {showSupportModal && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl border max-h-[90vh] overflow-y-auto">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center">
//                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
//                   <Heart className="w-5 h-5 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">Professional Support</h3>
//               </div>
//               <button 
//                 onClick={() => setShowSupportModal(false)} 
//                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//               >
//                 <X className="w-5 h-5 text-gray-500" />
//               </button>
//             </div>
            
//             <p className="text-gray-600 mb-6">
//               Choose your preferred support method. Our team is available 24/7 to assist you.
//             </p>


//             {/* Quick Contact Options */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
//               <button 
//                 onClick={handleEmailSupport}
//                 className="flex flex-col items-center p-4 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors"
//               >
//                 <Mail className="w-6 h-6 text-blue-600 mb-2" />
//                 <span className="text-sm font-medium text-gray-900">Email Support</span>
//                 <span className="text-xs text-gray-500">2-4 hours response</span>
//               </button>


//               <button 
//                 onClick={handlePhoneSupport}
//                 className="flex flex-col items-center p-4 border-2 border-green-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors"
//               >
//                 <Phone className="w-6 h-6 text-green-600 mb-2" />
//                 <span className="text-sm font-medium text-gray-900">Call Support</span>
//                 <span className="text-xs text-gray-500">Immediate assistance</span>
//               </button>
//             </div>


//             {/* Professional Support Form */}
//             <div className="border-t pt-6">
//               <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                 <Send className="w-5 h-5 text-gray-700 mr-2" />
//                 Submit Support Request
//               </h4>
              
//               <form onSubmit={handleSupportFormSubmit} className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
//                     <input
//                       type="text"
//                       value={supportForm.name}
//                       onChange={(e) => setSupportForm({...supportForm, name: e.target.value})}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//                     <input
//                       type="email"
//                       value={supportForm.email}
//                       onChange={(e) => setSupportForm({...supportForm, email: e.target.value})}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                     />
//                   </div>
//                 </div>


//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Priority Level</label>
//                   <select
//                     value={supportForm.priority}
//                     onChange={(e) => setSupportForm({...supportForm, priority: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     <option value="low">Low - General inquiry</option>
//                     <option value="medium">Medium - Appointment related</option>
//                     <option value="high">High - Urgent assistance needed</option>
//                     <option value="critical">Critical - Emergency support</option>
//                   </select>
//                 </div>


//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Describe Your Issue</label>
//                   <textarea
//                     value={supportForm.issue}
//                     onChange={(e) => setSupportForm({...supportForm, issue: e.target.value})}
//                     rows={4}
//                     placeholder="Please provide details about your issue, including any error messages or specific problems you're experiencing..."
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                     required
//                   />
//                 </div>


//                 <div className="bg-blue-50 p-4 rounded-lg">
//                   <div className="flex items-start">
//                     <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
//                     <div className="text-sm text-blue-800">
//                       <p className="font-medium">Your appointment details will be automatically included:</p>
//                       <p>• Confirmation ID: {bookingData.confirmationId}</p>
//                       <p>• Provider: {bookingData.therapistName}</p>
//                       <p>• Date: {bookingData.date} at {bookingData.time}</p>
//                     </div>
//                   </div>
//                 </div>


//                 <button
//                   type="submit"
//                   disabled={isSending}
//                   className={`w-full flex items-center justify-center px-4 py-3 ${
//                     isSending 
//                       ? 'bg-gray-400 cursor-not-allowed' 
//                       : 'bg-blue-600 hover:bg-blue-700'
//                   } text-white font-medium rounded-lg transition-colors`}
//                 >
//                   <Send className={`w-4 h-4 mr-2 ${isSending ? 'animate-spin' : ''}`} />
//                   {isSending ? 'Submitting Request...' : 'Submit Support Request'}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}


//       <div className="max-w-4xl mx-auto px-6 py-12">
        
//         {/* Main Card */}
//         <div className="bg-white rounded-2xl shadow-xl border overflow-hidden mb-8">
          
//           {/* Header with Professional Blue Gradient */}
//           <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white text-center shadow-lg">
//             <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm shadow-md">
//               <CheckCircle className="w-10 h-10 text-white" />
//             </div>
            
//             <h1 className="text-3xl font-bold mb-2">Appointment Confirmed</h1>
//             <p className="text-blue-100 text-lg">Your therapy session has been successfully scheduled</p>
            
//             <div className="mt-4 inline-flex items-center px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 shadow-sm">
//               <FileText className="w-4 h-4 mr-2" />
//               <span className="font-medium">ID: {bookingData.confirmationId}</span>
//             </div>
//           </div>


//           {/* Content */}
//           <div className="p-8">
            
//             <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Appointment Details</h2>
            
//             {/* Details Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
//               {/* Therapist Card */}
//               <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
//                     <User className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-gray-900">Healthcare Provider</h3>
//                     <p className="text-sm text-blue-600">Licensed Professional</p>
//                   </div>
//                 </div>
                
//                 <div className="space-y-2">
//                   <p className="text-xl font-bold text-gray-900">{bookingData.therapistName}</p>
//                   <div className="inline-flex items-center px-2 py-1 bg-blue-100 rounded-md text-sm">
//                     <Award className="w-3 h-3 text-blue-600 mr-1" />
//                     <span className="text-blue-800 font-medium">{bookingData.therapistSpecialty}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600 text-sm">
//                     <MapPin className="w-4 h-4 mr-2" />
//                     {bookingData.location}
//                   </div>
//                 </div>
//               </div>


//               {/* Session Card */}
//               <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
//                     <Clock className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-gray-900">Session Information</h3>
//                     <p className="text-sm text-blue-600">Your appointment details</p>
//                   </div>
//                 </div>
                
//                 <div className="space-y-3">
//                   <div className="flex items-center">
//                     <Calendar className="w-4 h-4 text-blue-600 mr-3" />
//                     <div>
//                       <p className="text-xs text-gray-500 uppercase font-medium">Date</p>
//                       <p className="text-lg font-bold text-gray-900">{bookingData.date}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center">
//                     <Clock className="w-4 h-4 text-blue-600 mr-3" />
//                     <div>
//                       <p className="text-xs text-gray-500 uppercase font-medium">Time</p>
//                       <p className="text-lg font-bold text-gray-900">{bookingData.time}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center">
//                     {getSessionIcon(bookingData.mode)}
//                     <div className="ml-3">
//                       <p className="text-xs text-gray-500 uppercase font-medium">Format</p>
//                       <p className="text-lg font-bold text-gray-900">{bookingData.mode}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>


//             {/* Next Steps */}
//             <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-8">
//               <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//                 <Bell className="w-5 h-5 text-blue-600 mr-2" />
//                 What Happens Next
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
//                 <div className="flex items-start space-x-3">
//                   <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <Mail className="w-4 h-4 text-blue-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Email Confirmation</p>
//                     <p className="text-gray-600">Sent within 10 minutes</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-3">
//                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <Bell className="w-4 h-4 text-green-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Reminders</p>
//                     <p className="text-gray-600">24hrs & 1hr before</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-3">
//                   <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <ExternalLink className="w-4 h-4 text-purple-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Session Access</p>
//                     <p className="text-gray-600">Link sent 15 min before</p>
//                   </div>
//                 </div>
//               </div>
//             </div>


//             {/* Action Buttons with Matching Blue Theme - Share button removed */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
//               <button 
//                 onClick={handleDownloadPDF} 
//                 disabled={isDownloading} 
//                 className={`flex items-center justify-center px-4 py-3 ${
//                   isDownloading 
//                     ? 'bg-gray-400 cursor-not-allowed' 
//                     : 'bg-blue-700 hover:bg-blue-800'
//                 } text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg`}
//               >
//                 <Download className={`w-4 h-4 mr-2 ${isDownloading ? 'animate-spin' : ''}`} />
//                 {isDownloading ? 'Generating...' : 'Download PDF'}
//               </button>
              
//               <button 
//                 onClick={() => navigate('/appointments')} 
//                 className="flex items-center justify-center px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
//               >
//                 <Calendar className="w-4 h-4 mr-2" />
//                 Appointments
//               </button>
              
//               <button 
//                 onClick={() => navigate('/dashboard')} 
//                 className="flex items-center justify-center px-4 py-3 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
//               >
//                 <Home className="w-4 h-4 mr-2" />
//                 Dashboard
//               </button>
//             </div>
//           </div>
//         </div>


//         {/* PROFESSIONAL SUPPORT CARD */}
//         <div className="bg-white rounded-2xl shadow-lg border p-8 text-center">
//           <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
//             <Heart className="w-8 h-8 text-blue-600" />
//           </div>
//           <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Professional Support</h3>
//           <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
//             Our dedicated healthcare support specialists are available around the clock to assist with any questions about your appointment, technical requirements, or our mental health services.
//           </p>
          
//           {/* ONLY EMAIL AND PHONE SUPPORT */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//             <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
//               <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//               <h4 className="font-semibold text-gray-900 mb-1">Email Support</h4>
//               <p className="text-sm text-gray-600">support@emotrack.com</p>
//               <p className="text-xs text-blue-600 font-medium">2-4 hour response</p>
//             </div>
            
//             <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
//               <Phone className="w-8 h-8 text-green-600 mx-auto mb-2" />
//               <h4 className="font-semibold text-gray-900 mb-1">Phone Support</h4>
//               <p className="text-sm text-gray-600">+1-800-EMOTRACK</p>
//               <p className="text-xs text-green-600 font-medium">Immediate assistance</p>
//             </div>
//           </div>


//           <button 
//             onClick={handleContactSupport} 
//             className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
//           >
//             Get Professional Support
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default BookingConfirmation;
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import { 
  CheckCircle, 
  Calendar, 
  Clock, 
  User, 
  MapPin, 
  Video, 
  Phone, 
  MessageCircle,
  Download,
  Home,
  FileText,
  Mail,
  Bell,
  Heart,
  Award,
  X,
  Send,
  AlertCircle,
  ExternalLink
} from 'lucide-react';


const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    issue: '',
    priority: 'medium'
  });
  
  const bookingData = location.state?.bookingData || {
    therapistName: "Dr. Asha Verma",
    date: "12 July 2025",
    time: "2:00 PM",
    mode: "Video Call",
    confirmationId: "BK" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    therapistSpecialty: "Stress Management",
    sessionDuration: "50 minutes",
    location: "Mumbai"
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);


  // PROFESSIONAL CONTACT SUPPORT OPTIONS
  const handleContactSupport = () => {
    setShowSupportModal(true);
  };


  // METHOD 1: DIRECT EMAIL WITH PRE-FILLED CONTENT
  const handleEmailSupport = () => {
    const subject = encodeURIComponent(`🏥 EmoTrack Support Request - ${bookingData.confirmationId}`);
    const body = encodeURIComponent(`Hello EmoTrack Support Team,


I need assistance with my appointment booking.


📋 APPOINTMENT DETAILS:
• Confirmation ID: ${bookingData.confirmationId}
• Healthcare Provider: ${bookingData.therapistName}
• Appointment Date: ${bookingData.date}
• Appointment Time: ${bookingData.time}
• Session Format: ${bookingData.mode}


🔍 ISSUE DESCRIPTION:
[Please describe your issue below]


📞 PREFERRED CONTACT METHOD:
[ ] Email Response
[ ] Phone Call


Thank you for your prompt assistance.


Best regards,
[Your Name]


---
EmoTrack Professional Mental Health Services
Generated: ${new Date().toLocaleString()}`);
    
    try {
      window.location.href = `mailto:support@emotrack.com?subject=${subject}&body=${body}`;
      setShowSupportModal(false);
    } catch (error) {
      alert('Unable to open email client. Please copy the support email: support@emotrack.com');
    }
  };


  // METHOD 2: PHONE SUPPORT
  const handlePhoneSupport = () => {
    try {
      window.location.href = 'tel:+1-800-EMOTRACK';
      setShowSupportModal(false);
    } catch (error) {
      alert('📞 Call Support: +1-800-EMOTRACK (1-800-366-8722)\n\nAvailable 24/7 for immediate assistance');
    }
  };


  // METHOD 3: PROFESSIONAL SUPPORT FORM (ADVANCED)
  const handleSupportFormSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);


    try {
      const subject = encodeURIComponent(`🚨 ${supportForm.priority.toUpperCase()} PRIORITY - Support Request ${bookingData.confirmationId}`);
      const body = encodeURIComponent(`EMOTRACK SUPPORT REQUEST


📋 APPOINTMENT INFORMATION:
• Confirmation ID: ${bookingData.confirmationId}
• Healthcare Provider: ${bookingData.therapistName}
• Date: ${bookingData.date}
• Time: ${bookingData.time}
• Format: ${bookingData.mode}


👤 CUSTOMER INFORMATION:
• Name: ${supportForm.name}
• Email: ${supportForm.email}
• Priority Level: ${supportForm.priority.toUpperCase()}


🔍 ISSUE DESCRIPTION:
${supportForm.issue}


⏰ SUBMITTED: ${new Date().toLocaleString()}


---
This is an automated support request from EmoTrack Professional Mental Health Services.`);


      window.location.href = `mailto:support@emotrack.com?subject=${subject}&body=${body}`;
      
      // Reset form
      setSupportForm({
        name: '',
        email: '',
        issue: '',
        priority: 'medium'
      });
      
      setTimeout(() => {
        alert('✅ Support request submitted successfully!\n\nOur team will respond within 2-4 hours during business hours.');
        setShowSupportModal(false);
      }, 1000);
      
    } catch (error) {
      alert('❌ Error submitting request. Please try calling our support line: +1-800-EMOTRACK');
    } finally {
      setIsSending(false);
    }
  };


  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Header with Blue Theme
    doc.setFillColor(37, 99, 235); // blue-600
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('EmoTrack', 20, 25);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Professional Mental Health Services', 20, 35);
    
    // Title
    doc.setTextColor(37, 99, 235);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('APPOINTMENT CONFIRMATION', 20, 55);
    
    // Confirmation Box
    doc.setFillColor(239, 246, 255);
    doc.roundedRect(20, 65, 170, 20, 3, 3, 'F');
    doc.setTextColor(29, 78, 216);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`Confirmation ID: ${bookingData.confirmationId}`, 25, 73);
    doc.text(`Generated: ${new Date().toLocaleString()}`, 25, 81);
    
    // Provider Details
    doc.setTextColor(17, 24, 39);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('HEALTHCARE PROVIDER', 20, 100);
    doc.setDrawColor(147, 197, 253);
    doc.line(20, 103, 190, 103);
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(`Provider: ${bookingData.therapistName}`, 25, 113);
    doc.text(`Specialty: ${bookingData.therapistSpecialty}`, 25, 123);
    doc.text(`Location: ${bookingData.location}`, 25, 133);
    
    // Session Details
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('SESSION DETAILS', 20, 150);
    doc.line(20, 153, 190, 153);
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(`Date: ${bookingData.date}`, 25, 163);
    doc.text(`Time: ${bookingData.time}`, 25, 173);
    doc.text(`Format: ${bookingData.mode}`, 25, 183);
    doc.text(`Duration: ${bookingData.sessionDuration}`, 25, 193);
    
    // Instructions
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('IMPORTANT INSTRUCTIONS', 20, 210);
    doc.line(20, 213, 190, 213);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('• Arrive 5 minutes early for your appointment', 25, 223);
    doc.text('• Email confirmation will be sent within 10 minutes', 25, 233);
    doc.text('• Reminders will be sent 24 hours and 1 hour before', 25, 243);
    doc.text('• Session access link provided 15 minutes before start time', 25, 253);
    
    // Footer
    doc.setTextColor(107, 114, 128);
    doc.setFontSize(9);
    doc.text('EmoTrack Professional Mental Health Services | support@emotrack.com', 20, 280);
    
    return doc;
  };


  // DOWNLOAD PDF
  const handleDownloadPDF = () => {
    setIsDownloading(true);
    
    try {
      const doc = generatePDF();
      doc.save(`EmoTrack-Confirmation-${bookingData.confirmationId}.pdf`);
    } catch (error) {
      alert('Error downloading PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };


  const getSessionIcon = (mode) => {
    switch (mode.toLowerCase()) {
      case 'video call':
        return <Video className="w-5 h-5 text-blue-600" />;
      case 'voice call':
        return <Phone className="w-5 h-5 text-green-600" />;
      case 'live chat':
        return <MessageCircle className="w-5 h-5 text-purple-600" />;
      default:
        return <MapPin className="w-5 h-5 text-gray-600" />;
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      
      {/* Loading Animation */}
      <div className={`fixed inset-0 bg-blue-900/20 backdrop-blur-sm z-50 transition-all duration-700 ${animationComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex items-center justify-center h-full">
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center border border-blue-200">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <p className="text-blue-700 font-medium">Processing confirmation...</p>
          </div>
        </div>
      </div>


      {/* PROFESSIONAL SUPPORT MODAL */}
      {showSupportModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl border max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Professional Support</h3>
              </div>
              <button 
                onClick={() => setShowSupportModal(false)} 
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">
              Choose your preferred support method. Our team is available 24/7 to assist you.
            </p>


            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <button 
                onClick={handleEmailSupport}
                className="flex flex-col items-center p-4 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors"
              >
                <Mail className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">Email Support</span>
                <span className="text-xs text-gray-500">2-4 hours response</span>
              </button>


              <button 
                onClick={handlePhoneSupport}
                className="flex flex-col items-center p-4 border-2 border-green-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors"
              >
                <Phone className="w-6 h-6 text-green-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">Call Support</span>
                <span className="text-xs text-gray-500">Immediate assistance</span>
              </button>
            </div>


            {/* Professional Support Form */}
            <div className="border-t pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Send className="w-5 h-5 text-gray-700 mr-2" />
                Submit Support Request
              </h4>
              
              <form onSubmit={handleSupportFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      value={supportForm.name}
                      onChange={(e) => setSupportForm({...supportForm, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={supportForm.email}
                      onChange={(e) => setSupportForm({...supportForm, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>


                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority Level</label>
                  <select
                    value={supportForm.priority}
                    onChange={(e) => setSupportForm({...supportForm, priority: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="low">Low - General inquiry</option>
                    <option value="medium">Medium - Appointment related</option>
                    <option value="high">High - Urgent assistance needed</option>
                    <option value="critical">Critical - Emergency support</option>
                  </select>
                </div>


                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Describe Your Issue</label>
                  <textarea
                    value={supportForm.issue}
                    onChange={(e) => setSupportForm({...supportForm, issue: e.target.value})}
                    rows={4}
                    placeholder="Please provide details about your issue, including any error messages or specific problems you're experiencing..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    required
                  />
                </div>


                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <div className="text-sm text-blue-800">
                      <p className="font-medium">Your appointment details will be automatically included:</p>
                      <p>• Confirmation ID: {bookingData.confirmationId}</p>
                      <p>• Provider: {bookingData.therapistName}</p>
                      <p>• Date: {bookingData.date} at {bookingData.time}</p>
                    </div>
                  </div>
                </div>


                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full flex items-center justify-center px-4 py-3 ${
                    isSending 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white font-medium rounded-lg transition-colors`}
                >
                  <Send className={`w-4 h-4 mr-2 ${isSending ? 'animate-spin' : ''}`} />
                  {isSending ? 'Submitting Request...' : 'Submit Support Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}


      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl border overflow-hidden mb-8">
          
          {/* Header with Professional Blue Gradient */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white text-center shadow-lg">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm shadow-md">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl font-bold mb-2">Appointment Confirmed</h1>
            <p className="text-blue-100 text-lg">Your therapy session has been successfully scheduled</p>
            
            <div className="mt-4 inline-flex items-center px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 shadow-sm">
              <FileText className="w-4 h-4 mr-2" />
              <span className="font-medium">ID: {bookingData.confirmationId}</span>
            </div>
          </div>


          {/* Content */}
          <div className="p-8">
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Appointment Details</h2>
            
            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
              {/* Therapist Card */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Healthcare Provider</h3>
                    <p className="text-sm text-blue-600">Licensed Professional</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-xl font-bold text-gray-900">{bookingData.therapistName}</p>
                  <div className="inline-flex items-center px-2 py-1 bg-blue-100 rounded-md text-sm">
                    <Award className="w-3 h-3 text-blue-600 mr-1" />
                    <span className="text-blue-800 font-medium">{bookingData.therapistSpecialty}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {bookingData.location}
                  </div>
                </div>
              </div>


              {/* Session Card */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Session Information</h3>
                    <p className="text-sm text-blue-600">Your appointment details</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-blue-600 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-medium">Date</p>
                      <p className="text-lg font-bold text-gray-900">{bookingData.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-blue-600 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-medium">Time</p>
                      <p className="text-lg font-bold text-gray-900">{bookingData.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    {getSessionIcon(bookingData.mode)}
                    <div className="ml-3">
                      <p className="text-xs text-gray-500 uppercase font-medium">Format</p>
                      <p className="text-lg font-bold text-gray-900">{bookingData.mode}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Next Steps */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Bell className="w-5 h-5 text-blue-600 mr-2" />
                What Happens Next
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Confirmation</p>
                    <p className="text-gray-600">Sent within 10 minutes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bell className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Reminders</p>
                    <p className="text-gray-600">24hrs & 1hr before</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ExternalLink className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Session Access</p>
                    <p className="text-gray-600">Link sent 15 min before</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Action Buttons - Appointments button removed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <button 
                onClick={handleDownloadPDF} 
                disabled={isDownloading} 
                className={`flex items-center justify-center px-4 py-3 ${
                  isDownloading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-700 hover:bg-blue-800'
                } text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg`}
              >
                <Download className={`w-4 h-4 mr-2 ${isDownloading ? 'animate-spin' : ''}`} />
                {isDownloading ? 'Generating...' : 'Download PDF'}
              </button>
              
              <button 
                onClick={() => navigate('/dashboard')} 
                className="flex items-center justify-center px-4 py-3 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <Home className="w-4 h-4 mr-2" />
                Dashboard
              </button>
            </div>
          </div>
        </div>


        {/* PROFESSIONAL SUPPORT CARD */}
        <div className="bg-white rounded-2xl shadow-lg border p-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Professional Support</h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Our dedicated healthcare support specialists are available around the clock to assist with any questions about your appointment, technical requirements, or our mental health services.
          </p>
          
          {/* ONLY EMAIL AND PHONE SUPPORT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Email Support</h4>
              <p className="text-sm text-gray-600">support@emotrack.com</p>
              <p className="text-xs text-blue-600 font-medium">2-4 hour response</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
              <Phone className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Phone Support</h4>
              <p className="text-sm text-gray-600">+1-800-EMOTRACK</p>
              <p className="text-xs text-green-600 font-medium">Immediate assistance</p>
            </div>
          </div>


          <button 
            onClick={handleContactSupport} 
            className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            Get Professional Support
          </button>
        </div>
      </div>
    </div>
  );
};


export default BookingConfirmation;
