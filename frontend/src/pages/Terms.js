// import React from 'react';
// import { FileText, AlertTriangle } from 'lucide-react';  // Removed 'Users' import
// import Navbar from '../components/Layout/Navbar';
// import Footer from '../components/Layout/Footer';

// const TermsPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
//       <Navbar />
      
//       <main className="flex-1 py-12 sm:py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* Header */}
//           <div className="text-center mb-12">
//             <div className="flex justify-center mb-6">
//               <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-4 rounded-2xl shadow-lg">
//                 <FileText className="w-12 h-12 text-white" strokeWidth={1.5} />
//               </div>
//             </div>
//             <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//               Terms of Service
//             </h1>
//             <p className="text-xl text-gray-700 max-w-2xl mx-auto">
//               Please read these terms carefully before using EmoTrack's services.
//             </p>
//             <p className="text-sm text-gray-500 mt-4">
//               Last updated: August 30, 2025
//             </p>
//           </div>

//           {/* Important Notice */}
//           <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
//             <div className="flex items-start gap-4">
//               <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
//               <div>
//                 <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Notice</h3>
//                 <p className="text-amber-700 text-sm leading-relaxed">
//                   EmoTrack is designed to supplement, not replace, professional mental health care. 
//                   If you're experiencing a mental health crisis, please contact a mental health professional 
//                   or crisis hotline immediately.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Terms Content */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            
//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 By accessing and using EmoTrack, you accept and agree to be bound by the terms and 
//                 provision of this agreement. If you do not agree to abide by the above, please do not 
//                 use this service.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
//               <div className="prose prose-gray max-w-none">
//                 <p className="text-gray-700 leading-relaxed mb-4">
//                   Permission is granted to temporarily use EmoTrack for personal, non-commercial 
//                   transitory viewing only. This is the grant of a license, not a transfer of title, and under 
//                   this license you may not:
//                 </p>
//                 <ul className="list-disc list-inside text-gray-700 space-y-2">
//                   <li>Modify or copy the materials</li>
//                   <li>Use the materials for any commercial purpose or for any public display</li>
//                   <li>Attempt to reverse engineer any software contained on the platform</li>
//                   <li>Remove any copyright or other proprietary notations from the materials</li>
//                 </ul>
//               </div>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 You are responsible for maintaining the confidentiality of your account and password. 
//                 You agree to accept responsibility for all activities that occur under your account or password.
//                 You must notify us immediately of any unauthorized use of your account.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Conduct</h2>
//               <div className="prose prose-gray max-w-none">
//                 <p className="text-gray-700 leading-relaxed mb-4">
//                   You agree not to use EmoTrack to:
//                 </p>
//                 <ul className="list-disc list-inside text-gray-700 space-y-2">
//                   <li>Violate any local, state, national, or international law</li>
//                   <li>Share inappropriate, harmful, or offensive content</li>
//                   <li>Impersonate another person or entity</li>
//                   <li>Interfere with or disrupt the service or servers</li>
//                   <li>Attempt to gain unauthorized access to other accounts</li>
//                 </ul>
//               </div>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy Policy</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 Your privacy is important to us. Please review our Privacy Policy, which also governs 
//                 your use of the service, to understand our practices regarding the collection, use, 
//                 and disclosure of your personal information.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Service Limitations</h2>
//               <div className="prose prose-gray max-w-none">
//                 <p className="text-gray-700 leading-relaxed mb-4">
//                   EmoTrack provides AI-powered emotional analysis and is not a substitute for professional 
//                   mental health care. We make no warranties about:
//                 </p>
//                 <ul className="list-disc list-inside text-gray-700 space-y-2">
//                   <li>The accuracy of emotional analysis results</li>
//                   <li>The effectiveness of recommendations provided</li>
//                   <li>The continuous availability of the service</li>
//                   <li>The suitability of the service for your specific needs</li>
//                 </ul>
//               </div>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 The service and its original content, features, and functionality are and will remain the 
//                 exclusive property of EmoTrack and its licensors. The service is protected by copyright, 
//                 trademark, and other laws.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 We may terminate or suspend your account and bar access to the service immediately, 
//                 without prior notice or liability, under our sole discretion, for any reason whatsoever 
//                 and without limitation, including but not limited to a breach of the Terms.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 In no event shall EmoTrack or its suppliers be liable for any damages (including, without 
//                 limitation, damages for loss of data or profit, or due to business interruption) arising out 
//                 of the use or inability to use EmoTrack, even if EmoTrack has been notified of the possibility 
//                 of such damage.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimer</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 The information on this service is provided on an "as is" basis. To the fullest extent 
//                 permitted by law, EmoTrack excludes all representations, warranties, conditions and terms 
//                 whether express or implied.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 EmoTrack may revise these terms of service at any time without notice. By using this 
//                 service, you are agreeing to be bound by the then current version of these terms of service. 
//                 Continued use of the service after any such changes constitutes your consent to such changes.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 These Terms shall be interpreted and governed by the laws of the State of California, 
//                 without regard to conflict of law provisions. Any disputes arising from these Terms 
//                 will be resolved in the courts of California.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 If you have any questions about these Terms of Service, please contact us at{' '}
//                 <a 
//                   href="mailto:legal@emotracker.com" 
//                   className="text-blue-600 hover:text-blue-800 underline"
//                 >
//                   legal@emotracker.com
//                 </a>
//               </p>
//             </section>
//           </div>
//         </div>
//       </main>
      
//       <Footer />
//     </div>
//   );
// };

// export default TermsPage;
import React from 'react';
import { FileText, AlertTriangle } from 'lucide-react';
import Footer from '../components/Layout/Footer';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
      {/* Removed <Navbar /> from here */}
      
      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-4 rounded-2xl shadow-lg">
                <FileText className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Please read these terms carefully before using EmoTrack's services.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: August 30, 2025
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Notice</h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  EmoTrack is designed to supplement, not replace, professional mental health care. 
                  If you're experiencing a mental health crisis, please contact a mental health professional 
                  or crisis hotline immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using EmoTrack, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Permission is granted to temporarily use EmoTrack for personal, non-commercial 
                  transitory viewing only. This is the grant of a license, not a transfer of title, and under 
                  this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the platform</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account and password. 
                You agree to accept responsibility for all activities that occur under your account or password.
                You must notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Conduct</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree not to use EmoTrack to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Violate any local, state, national, or international law</li>
                  <li>Share inappropriate, harmful, or offensive content</li>
                  <li>Impersonate another person or entity</li>
                  <li>Interfere with or disrupt the service or servers</li>
                  <li>Attempt to gain unauthorized access to other accounts</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs 
                your use of the service, to understand our practices regarding the collection, use, 
                and disclosure of your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Service Limitations</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  EmoTrack provides AI-powered emotional analysis and is not a substitute for professional 
                  mental health care. We make no warranties about:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>The accuracy of emotional analysis results</li>
                  <li>The effectiveness of recommendations provided</li>
                  <li>The continuous availability of the service</li>
                  <li>The suitability of the service for your specific needs</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                The service and its original content, features, and functionality are and will remain the 
                exclusive property of EmoTrack and its licensors. The service is protected by copyright, 
                trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We may terminate or suspend your account and bar access to the service immediately, 
                without prior notice or liability, under our sole discretion, for any reason whatsoever 
                and without limitation, including but not limited to a breach of the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall EmoTrack or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising out 
                of the use or inability to use EmoTrack, even if EmoTrack has been notified of the possibility 
                of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                The information on this service is provided on an "as is" basis. To the fullest extent 
                permitted by law, EmoTrack excludes all representations, warranties, conditions and terms 
                whether express or implied.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                EmoTrack may revise these terms of service at any time without notice. By using this 
                service, you are agreeing to be bound by the then current version of these terms of service. 
                Continued use of the service after any such changes constitutes your consent to such changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the State of California, 
                without regard to conflict of law provisions. Any disputes arising from these Terms 
                will be resolved in the courts of California.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a 
                  href="mailto:legal@emotracker.com" 
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  legal@emotracker.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsPage;
