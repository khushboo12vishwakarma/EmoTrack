// import React from 'react';
// import { Shield, Lock, Eye, Database } from 'lucide-react';
// import Navbar from '../components/Layout/Navbar';
// import Footer from '../components/Layout/Footer';

// const PrivacyPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
//       <Navbar />
      
//       <main className="flex-1 py-12 sm:py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* Header */}
//           <div className="text-center mb-12">
//             <div className="flex justify-center mb-6">
//               <div className="bg-gradient-to-br from-green-600 to-blue-600 p-4 rounded-2xl shadow-lg">
//                 <Shield className="w-12 h-12 text-white" strokeWidth={1.5} />
//               </div>
//             </div>
//             <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//               Privacy Policy
//             </h1>
//             <p className="text-xl text-gray-700 max-w-2xl mx-auto">
//               Your privacy and data security are our top priorities. Learn how we protect and handle your information.
//             </p>
//             <p className="text-sm text-gray-500 mt-4">
//               Last updated: August 30, 2025
//             </p>
//           </div>

//           {/* Privacy Highlights */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//             <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
//               <Lock className="w-10 h-10 text-green-600 mx-auto mb-4" />
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">End-to-End Encryption</h3>
//               <p className="text-gray-600 text-sm">All your data is encrypted both in transit and at rest</p>
//             </div>
//             <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
//               <Eye className="w-10 h-10 text-blue-600 mx-auto mb-4" />
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">No Third-Party Sharing</h3>
//               <p className="text-gray-600 text-sm">We never sell or share your personal data with anyone</p>
//             </div>
//             <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
//               <Database className="w-10 h-10 text-purple-600 mx-auto mb-4" />
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Data, Your Control</h3>
//               <p className="text-gray-600 text-sm">Delete your account and all data anytime you want</p>
//             </div>
//           </div>

//           {/* Policy Content */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            
//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
//               <div className="prose prose-gray max-w-none">
//                 <p className="text-gray-700 leading-relaxed mb-4">
//                   We collect information you provide directly to us, such as when you create an account, 
//                   use our services, or contact us for support.
//                 </p>
//                 <ul className="list-disc list-inside text-gray-700 space-y-2">
//                   <li>Account information (email, username)</li>
//                   <li>Emotional data you choose to share (text, voice, video)</li>
//                   <li>Usage patterns and preferences</li>
//                   <li>Technical information (device type, browser, IP address)</li>
//                 </ul>
//               </div>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
//               <div className="prose prose-gray max-w-none">
//                 <p className="text-gray-700 leading-relaxed mb-4">
//                   We use the information we collect to provide, maintain, and improve our services:
//                 </p>
//                 <ul className="list-disc list-inside text-gray-700 space-y-2">
//                   <li>Provide personalized emotional insights and recommendations</li>
//                   <li>Improve our AI models and algorithms</li>
//                   <li>Send important service updates and notifications</li>
//                   <li>Provide customer support</li>
//                   <li>Ensure security and prevent fraud</li>
//                 </ul>
//               </div>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 We implement appropriate technical and organizational measures to protect your personal 
//                 information against unauthorized access, alteration, disclosure, or destruction. All 
//                 sensitive data is encrypted using industry-standard protocols.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
//               <div className="prose prose-gray max-w-none">
//                 <p className="text-gray-700 leading-relaxed mb-4">
//                   You have the right to:
//                 </p>
//                 <ul className="list-disc list-inside text-gray-700 space-y-2">
//                   <li>Access your personal information</li>
//                   <li>Correct or update your information</li>
//                   <li>Delete your account and all associated data</li>
//                   <li>Export your data</li>
//                   <li>Opt out of non-essential communications</li>
//                 </ul>
//               </div>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 We retain your personal information for as long as your account is active or as needed to provide you services. 
//                 If you wish to cancel your account or request that we no longer use your information to provide you services, 
//                 contact us and we will delete your data within 30 days.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 EmoTrack is not intended for use by children under 13. We do not knowingly collect personal 
//                 information from children under 13. If you are a parent or guardian and believe your child 
//                 has provided us with personal information, please contact us so we can delete such information.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Privacy Policy</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 We may update this Privacy Policy from time to time. We will notify you of any changes by 
//                 posting the new Privacy Policy on this page and updating the "Last updated" date. You are 
//                 advised to review this Privacy Policy periodically for any changes.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 If you have any questions about this Privacy Policy, please contact us at{' '}
//                 <a 
//                   href="mailto:privacy@emotracker.com" 
//                   className="text-blue-600 hover:text-blue-800 underline"
//                 >
//                   privacy@emotracker.com
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

// export default PrivacyPage;
import React from 'react';
import { Shield, Lock, Eye, Database } from 'lucide-react';
import Footer from '../components/Layout/Footer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
      {/* Removed <Navbar /> from here */}
      
      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-green-600 to-blue-600 p-4 rounded-2xl shadow-lg">
                <Shield className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Your privacy and data security are our top priorities. Learn how we protect and handle your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: August 30, 2025
            </p>
          </div>

          {/* Privacy Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <Lock className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600 text-sm">All your data is encrypted both in transit and at rest</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <Eye className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Third-Party Sharing</h3>
              <p className="text-gray-600 text-sm">We never sell or share your personal data with anyone</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <Database className="w-10 h-10 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Data, Your Control</h3>
              <p className="text-gray-600 text-sm">Delete your account and all data anytime you want</p>
            </div>
          </div>

          {/* Policy Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Account information (email, username)</li>
                  <li>Emotional data you choose to share (text, voice, video)</li>
                  <li>Usage patterns and preferences</li>
                  <li>Technical information (device type, browser, IP address)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to provide, maintain, and improve our services:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide personalized emotional insights and recommendations</li>
                  <li>Improve our AI models and algorithms</li>
                  <li>Send important service updates and notifications</li>
                  <li>Provide customer support</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. All 
                sensitive data is encrypted using industry-standard protocols.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct or update your information</li>
                  <li>Delete your account and all associated data</li>
                  <li>Export your data</li>
                  <li>Opt out of non-essential communications</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information for as long as your account is active or as needed to provide you services. 
                If you wish to cancel your account or request that we no longer use your information to provide you services, 
                contact us and we will delete your data within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                EmoTrack is not intended for use by children under 13. We do not knowingly collect personal 
                information from children under 13. If you are a parent or guardian and believe your child 
                has provided us with personal information, please contact us so we can delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date. You are 
                advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a 
                  href="mailto:privacy@emotracker.com" 
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  privacy@emotracker.com
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

export default PrivacyPage;
