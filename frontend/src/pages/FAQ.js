// import React, { useState } from 'react';
// import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
// import Navbar from '../components/Layout/Navbar';
// import Footer from '../components/Layout/Footer';

// const faqData = [
//   {
//     question: "What is EmoTrack and how does it work?",
//     answer: "EmoTrack is an AI-powered emotional wellness platform that analyzes your thoughts and emotions through text, voice, or video input. Our advanced AI provides personalized insights and recommendations to help improve your mental wellbeing."
//   },
//   {
//     question: "Is my data secure and private?",
//     answer: "Yes, absolutely. We use end-to-end encryption and follow strict privacy protocols. Your emotional data is never shared with third parties and is stored securely on our servers with multiple layers of protection."
//   },
//   {
//     question: "How accurate is the emotion analysis?",
//     answer: "Our AI model has been trained on millions of data points and achieves over 90% accuracy in emotion detection. However, it's designed to supplement, not replace, professional mental health care."
//   },
//   {
//     question: "Can I use EmoTrack on mobile devices?",
//     answer: "Yes! EmoTrack is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktop computers."
//   },
//   {
//     question: "What types of input does EmoTrack accept?",
//     answer: "EmoTrack can analyze text entries (journal entries, messages), voice recordings, and video input to understand your emotional state and provide personalized insights."
//   },
//   {
//     question: "Is there a free trial available?",
//     answer: "Yes, we offer a 7-day free trial with full access to all features. No credit card required to get started."
//   },
//   {
//     question: "How often should I use EmoTrack?",
//     answer: "For best results, we recommend daily check-ins. Even 5-10 minutes per day can provide valuable insights into your emotional patterns and trends."
//   },
//   {
//     question: "Can EmoTrack replace therapy or counseling?",
//     answer: "No, EmoTrack is designed to supplement professional mental health care, not replace it. We encourage users to work with licensed therapists for comprehensive mental health support."
//   }
// ];

// const FAQPage = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
//       <Navbar />
      
//       <main className="flex-1 py-12 sm:py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* Header */}
//           <div className="text-center mb-12">
//             <div className="flex justify-center mb-6">
//               <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg">
//                 <HelpCircle className="w-12 h-12 text-white" strokeWidth={1.5} />
//               </div>
//             </div>
//             <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//               Frequently Asked Questions
//             </h1>
//             <p className="text-xl text-gray-700 max-w-2xl mx-auto">
//               Find answers to common questions about EmoTrack and how it can help improve your mental wellbeing.
//             </p>
//           </div>

//           {/* FAQ Items */}
//           <div className="space-y-4">
//             {faqData.map((item, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
//                 >
//                   <h3 className="text-lg font-semibold text-gray-900 pr-4">
//                     {item.question}
//                   </h3>
//                   {openIndex === index ? (
//                     <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
//                   ) : (
//                     <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
//                   )}
//                 </button>
                
//                 {openIndex === index && (
//                   <div className="px-6 pb-6 pt-2">
//                     <p className="text-gray-700 leading-relaxed">
//                       {item.answer}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Contact CTA */}
//           <div className="mt-12 text-center">
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
//               <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
//               <p className="text-blue-100 mb-6">
//                 Can't find what you're looking for? Our support team is here to help.
//               </p>
//               <a 
//                 href="mailto:support@emotracker.com"
//                 className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
//               >
//                 Contact Support
//               </a>
//             </div>
//           </div>
//         </div>
//       </main>
      
//       <Footer />
//     </div>
//   );
// };

// export default FAQPage;
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import Footer from '../components/Layout/Footer';

const faqData = [
  {
    question: "What is EmoTrack and how does it work?",
    answer: "EmoTrack is an AI-powered emotional wellness platform that analyzes your thoughts and emotions through text, voice, or video input. Our advanced AI provides personalized insights and recommendations to help improve your mental wellbeing."
  },
  {
    question: "Is my data secure and private?",
    answer: "Yes, absolutely. We use end-to-end encryption and follow strict privacy protocols. Your emotional data is never shared with third parties and is stored securely on our servers with multiple layers of protection."
  },
  {
    question: "How accurate is the emotion analysis?",
    answer: "Our AI model has been trained on millions of data points and achieves over 90% accuracy in emotion detection. However, it's designed to supplement, not replace, professional mental health care."
  },
  {
    question: "Can I use EmoTrack on mobile devices?",
    answer: "Yes! EmoTrack is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktop computers."
  },
  {
    question: "What types of input does EmoTrack accept?",
    answer: "EmoTrack can analyze text entries (journal entries, messages), voice recordings, and video input to understand your emotional state and provide personalized insights."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 7-day free trial with full access to all features. No credit card required to get started."
  },
  {
    question: "How often should I use EmoTrack?",
    answer: "For best results, we recommend daily check-ins. Even 5-10 minutes per day can provide valuable insights into your emotional patterns and trends."
  },
  {
    question: "Can EmoTrack replace therapy or counseling?",
    answer: "No, EmoTrack is designed to supplement professional mental health care, not replace it. We encourage users to work with licensed therapists for comprehensive mental health support."
  }
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
      {/* Removed <Navbar /> from here */}
      
      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg">
                <HelpCircle className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Find answers to common questions about EmoTrack and how it can help improve your mental wellbeing.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-blue-100 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <a 
                href="mailto:support@emotracker.com"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
