
// // // // // import React from 'react';
// // // // // import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // // // // import { AuthProvider, useAuth } from './context/AuthContext';
// // // // // import Navbar from './components/Layout/Navbar';
// // // // // import Footer from './components/Layout/Footer';
// // // // // import ProtectedRoute from './components/ProtectedRoute';

// // // // // // Pages
// // // // // import HomePage from './pages/Home';
// // // // // import Login from './pages/Login';
// // // // // import Signup from './pages/Signup';
// // // // // import Dashboard from './pages/Dashboard';
// // // // // import EmotionInput from './pages/EmotionInput';
// // // // // import TherapistList from './pages/TherapistList';
// // // // // import TherapistDetail from './pages/TherapistDetail';
// // // // // import BookAppointment from './pages/BookAppointment';
// // // // // import Progress from './pages/Progress';
// // // // // import Profile from './pages/Profile';
// // // // // import FAQPage from './pages/FAQ';
// // // // // import PrivacyPage from './pages/Privacy';
// // // // // import TermsPage from './pages/Terms';

// // // // // const AppContent = () => {
// // // // //   const { isAuthenticated } = useAuth();

// // // // //   return (
// // // // //     <div className="App flex flex-col min-h-screen">
// // // // //       {/* Navbar - Shows on most pages */}
// // // // //       <Navbar />
      
// // // // //       {/* Main Content - Takes up remaining space */}
// // // // //       <main className="flex-grow">
// // // // //         <Routes>
// // // // //           {/* Public Routes */}
// // // // //           <Route path="/" element={<HomePage />} />
          
// // // // //           <Route path="/login" element={
// // // // //             <div className="min-h-screen">
// // // // //               <Login />
// // // // //             </div>
// // // // //           } />
          
// // // // //           <Route path="/signup" element={
// // // // //             <div className="min-h-screen">
// // // // //               <Signup />
// // // // //             </div>
// // // // //           } />
          
// // // // //           <Route path="/faq" element={<FAQPage />} />
// // // // //           <Route path="/privacy" element={<PrivacyPage />} />
// // // // //           <Route path="/terms" element={<TermsPage />} />
          
// // // // //           {/* Protected Routes */}
// // // // //           <Route 
// // // // //             path="/dashboard" 
// // // // //             element={
// // // // //               <ProtectedRoute>
// // // // //                 <Dashboard />
// // // // //               </ProtectedRoute>
// // // // //             } 
// // // // //           />
// // // // //           <Route 
// // // // //             path="/emotion-input" 
// // // // //             element={
// // // // //               <ProtectedRoute>
// // // // //                 <EmotionInput />
// // // // //               </ProtectedRoute>
// // // // //             } 
// // // // //           />
// // // // //           <Route 
// // // // //             path="/therapists" 
// // // // //             element={
// // // // //               <ProtectedRoute>
// // // // //                 <TherapistList />
// // // // //               </ProtectedRoute>
// // // // //             } 
// // // // //           />
// // // // //           <Route 
// // // // //             path="/therapist/:therapistId" 
// // // // //             element={
// // // // //               <ProtectedRoute>
// // // // //                 <TherapistDetail />
// // // // //               </ProtectedRoute>
// // // // //             } 
// // // // //           />
// // // // //           <Route 
// // // // //             path="/book-appointment/:therapistId" 
// // // // //             element={
// // // // //               <ProtectedRoute>
// // // // //                 <BookAppointment />
// // // // //               </ProtectedRoute>
// // // // //             } 
// // // // //           />
// // // // //           <Route 
// // // // //             path="/progress" 
// // // // //             element={
// // // // //               <ProtectedRoute>
// // // // //                 <Progress />
// // // // //               </ProtectedRoute>
// // // // //             } 
// // // // //           />
// // // // //           <Route 
// // // // //             path="/profile" 
// // // // //             element={
// // // // //               <ProtectedRoute>
// // // // //                 <Profile />
// // // // //               </ProtectedRoute>
// // // // //             } 
// // // // //           />

// // // // //           {/* Catch all route */}
// // // // //           <Route path="*" element={<Navigate to="/" replace />} />
// // // // //         </Routes>
// // // // //       </main>
      
// // // // //       {/* Footer - Shows on all pages */}
// // // // //       <Footer />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // function App() {
// // // // //   return (
// // // // //     <AuthProvider>
// // // // //       <Router>
// // // // //         <AppContent />
// // // // //       </Router>
// // // // //     </AuthProvider>
// // // // //   );
// // // // // }

// // // // // export default App;
// // // // import React from 'react';
// // // // import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// // // // import { AuthProvider, useAuth } from './context/AuthContext';
// // // // import Navbar from './components/Layout/Navbar';
// // // // import Footer from './components/Layout/Footer';
// // // // import ProtectedRoute from './components/ProtectedRoute';

// // // // // Pages
// // // // import HomePage from './pages/Home';
// // // // import Login from './pages/Login';
// // // // import Signup from './pages/Signup';
// // // // import Dashboard from './pages/Dashboard';
// // // // import EmotionInput from './pages/EmotionInput';
// // // // import TherapistList from './pages/TherapistList';
// // // // import TherapistDetail from './pages/TherapistDetail';
// // // // import BookAppointment from './pages/BookAppointment';
// // // // import Progress from './pages/Progress';
// // // // import Profile from './pages/Profile';
// // // // import FAQPage from './pages/FAQ';
// // // // import PrivacyPage from './pages/Privacy';
// // // // import TermsPage from './pages/Terms';
// // // // import BookingConfirmation from './pages/BookingConfirmation';
// // // // import MyAppointments from './pages/MyAppointments';

// // // // const AppContent = () => {
// // // //   const { isAuthenticated } = useAuth();
// // // //   const location = useLocation();

// // // //   // Show footer only on home page
// // // //   const showFooter = location.pathname === '/';

// // // //   return (
// // // //     <div className="App flex flex-col min-h-screen">
// // // //       {/* Navbar - Shows on most pages */}
// // // //       <Navbar />
      
// // // //       {/* Main Content - Takes up remaining space */}
// // // //       <main className="flex-grow">
// // // //         <Routes>
// // // //           {/* Public Routes */}
// // // //           <Route path="/" element={<HomePage />} />
          
// // // //           <Route path="/login" element={
// // // //             <div className="min-h-screen">
// // // //               <Login />
// // // //             </div>
// // // //           } />
          
// // // //           <Route path="/signup" element={
// // // //             <div className="min-h-screen">
// // // //               <Signup />
// // // //             </div>
// // // //           } />


// // // //           <Route 
// // // //   path="/book-session" 
// // // //   element={
// // // //     <ProtectedRoute>
// // // //       <BookSession />  {/* Create this new component or use existing BookAppointment */}
// // // //     </ProtectedRoute>
// // // //   } 
// // // // />

// // // // // Keep the therapist-specific booking route for when users select a specific therapist
// // // // <Route 
// // // //   path="/book-appointment/:therapistId" 
// // // //   element={
// // // //     <ProtectedRoute>
// // // //       <BookAppointment />
// // // //     </ProtectedRoute>
// // // //   } 
// // // // />
          

// // // //           <Route path="/book-session" element={<ProtectedRoute> <BookAppointment /> </ProtectedRoute> } />
// // // //           <Route path="/appointments" element={<MyAppointments />} />
// // // //           <Route path="/booking-confirmation" element={<BookingConfirmation />} />
// // // //           <Route path="/faq" element={<FAQPage />} />
// // // //           <Route path="/privacy" element={<PrivacyPage />} />
// // // //           <Route path="/terms" element={<TermsPage />} />
          
// // // //           {/* Protected Routes */}
// // // //           <Route 
// // // //             path="/dashboard" 
// // // //             element={
// // // //               <ProtectedRoute>
// // // //                 <Dashboard />
// // // //               </ProtectedRoute>
// // // //             } 
// // // //           />
// // // //           <Route 
// // // //             path="/emotion-input" 
// // // //             element={
// // // //               <ProtectedRoute>
// // // //                 <EmotionInput />
// // // //               </ProtectedRoute>
// // // //             } 
// // // //           />
// // // //           <Route 
// // // //             path="/therapists" 
// // // //             element={
// // // //               <ProtectedRoute>
// // // //                 <TherapistList />
// // // //               </ProtectedRoute>
// // // //             } 
// // // //           />
          
          
// // // //           <Route 
// // // //             path="/therapist/:therapistId" 
// // // //             element={
// // // //               <ProtectedRoute>
// // // //                 <TherapistDetail />
// // // //               </ProtectedRoute>
// // // //             } 
// // // //           />
// // // //           <Route 
// // // //             path="/book-appointment/:therapistId" 
// // // //             element={
// // // //               <ProtectedRoute>
// // // //                 <BookAppointment />
// // // //               </ProtectedRoute>
// // // //             } 
// // // //           />
// // // //           <Route 
// // // //             path="/progress" 
// // // //             element={
// // // //               <ProtectedRoute>
// // // //                 <Progress />
// // // //               </ProtectedRoute>
// // // //             } 
// // // //           />
// // // //           <Route 
// // // //             path="/profile" 
// // // //             element={
// // // //               <ProtectedRoute>
// // // //                 <Profile />
// // // //               </ProtectedRoute>
// // // //             } 
// // // //           />

// // // //           {/* Catch all route */}
// // // //           <Route path="*" element={<Navigate to="/" replace />} />
// // // //         </Routes>
// // // //       </main>
      
// // // //       {/* Footer - Shows ONLY on home page */}
// // // //       {showFooter && <Footer />}
// // // //     </div>
// // // //   );
// // // // };

// // // // function App() {
// // // //   return (
// // // //     <AuthProvider>
// // // //       <Router>
// // // //         <AppContent />
// // // //       </Router>
// // // //     </AuthProvider>
// // // //   );
// // // // }

// // // // export default App;
// // // import React from 'react';
// // // import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// // // import { AuthProvider, useAuth } from './context/AuthContext';
// // // import Navbar from './components/Layout/Navbar';
// // // import Footer from './components/Layout/Footer';
// // // import ProtectedRoute from './components/ProtectedRoute';

// // // // Pages
// // // import HomePage from './pages/Home';
// // // import Login from './pages/Login';
// // // import Signup from './pages/Signup';
// // // import Dashboard from './pages/Dashboard';
// // // import EmotionInput from './pages/EmotionInput';
// // // import TherapistList from './pages/TherapistList';
// // // import TherapistDetail from './pages/TherapistDetail';
// // // import BookAppointment from './pages/BookAppointment';
// // // import Progress from './pages/Progress';
// // // import Profile from './pages/Profile';
// // // import FAQPage from './pages/FAQ';
// // // import PrivacyPage from './pages/Privacy';
// // // import TermsPage from './pages/Terms';
// // // import BookingConfirmation from './pages/BookingConfirmation';
// // // import MyAppointments from './pages/MyAppointments';
// // // import PrivacySettings from './pages/PrivacySettings';


// // // const AppContent = () => {
// // //   const { isAuthenticated } = useAuth();
// // //   const location = useLocation();

// // //   // Show footer only on home page
// // //   const showFooter = location.pathname === '/';

// // //   return (
// // //     <div className="App flex flex-col min-h-screen">
// // //       {/* Navbar - Shows on most pages */}
// // //       <Navbar />
      
// // //       {/* Main Content - Takes up remaining space */}
// // //       <main className="flex-grow">
// // //         <Routes>
// // //           {/* Public Routes */}
// // //           <Route path="/" element={<HomePage />} />
          
// // //           <Route path="/login" element={
// // //             <div className="min-h-screen">
// // //               <Login />
// // //             </div>
// // //           } />
          
// // //           <Route path="/signup" element={
// // //             <div className="min-h-screen">
// // //               <Signup />
// // //             </div>
// // //           } />

// // //           {/* Public/General Routes */}
// // //           <Route path="/privacy-settings" element={<PrivacySettings />} />
// // //           <Route path="/appointments" element={<MyAppointments />} />
// // //           <Route path="/booking-confirmation" element={<BookingConfirmation />} />
// // //           <Route path="/faq" element={<FAQPage />} />
// // //           <Route path="/privacy" element={<PrivacyPage />} />
// // //           <Route path="/terms" element={<TermsPage />} />
          
// // //           {/* Protected Routes */}
// // //           <Route 
// // //             path="/dashboard" 
// // //             element={
// // //               <ProtectedRoute>
// // //                 <Dashboard />
// // //               </ProtectedRoute>
// // //             } 
// // //           />
          
// // //           <Route 
// // //             path="/emotion-input" 
// // //             element={
// // //               <ProtectedRoute>
// // //                 <EmotionInput />
// // //               </ProtectedRoute>
// // //             } 
// // //           />
          
// // //           <Route 
// // //             path="/therapists" 
// // //             element={
// // //               <ProtectedRoute>
// // //                 <TherapistList />
// // //               </ProtectedRoute>
// // //             } 
// // //           />
          
// // //           <Route 
// // //             path="/therapist/:therapistId" 
// // //             element={
// // //               <ProtectedRoute>
// // //                 <TherapistDetail />
// // //               </ProtectedRoute>
// // //             } 
// // //           />
        

          
// // //           {/* Book Session Route - Direct booking page */}
// // //           <Route 
// // //             path="/book-session" 
// // //             element={
// // //               <ProtectedRoute>
// // //                 <BookAppointment />
// // //               </ProtectedRoute>
// // //             } 
// // //           />
          
// // //           {/* Book Appointment Route - Therapist-specific booking */}
// // //           <Route 
// // //             path="/book-appointment/:therapistId" 
// // //             element={
// // //               <ProtectedRoute>
// // //                 <BookAppointment />
// // //               </ProtectedRoute>
// // //             } 
// // //           />
          
// // //           <Route 
// // //             path="/progress" 
// // //             element={
// // //               <ProtectedRoute>
// // //                 <Progress />
// // //               </ProtectedRoute>
// // //             } 
// // //           />
          
// // //           <Route 
// // //             path="/profile" 
// // //             element={
// // //               <ProtectedRoute>
// // //                 <Profile />
// // //               </ProtectedRoute>
// // //             } 
// // //           />

// // //           {/* Catch all route */}
// // //           <Route path="*" element={<Navigate to="/" replace />} />
// // //         </Routes>
// // //       </main>
      
// // //       {/* Footer - Shows ONLY on home page */}
// // //       {showFooter && <Footer />}
// // //     </div>
// // //   );
// // // };

// // // function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <Router>
// // //         <AppContent />
// // //       </Router>
// // //     </AuthProvider>
// // //   );
// // // }

// // // export default App;
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// // import { AuthProvider, useAuth } from './context/AuthContext';
// // import { ThemeProvider } from './context/ThemeContext';
// // import Navbar from './components/Layout/Navbar';
// // import Footer from './components/Layout/Footer';
// // import ProtectedRoute from './components/ProtectedRoute';

// // // Import theme styles
// // import './styles/themes.css';

// // // Pages
// // import HomePage from './pages/Home';
// // import Login from './pages/Login';
// // import Signup from './pages/Signup';
// // import Dashboard from './pages/Dashboard';
// // import EmotionInput from './pages/EmotionInput';
// // import TherapistList from './pages/TherapistList';
// // import TherapistDetail from './pages/TherapistDetail';
// // import BookAppointment from './pages/BookAppointment';
// // import Progress from './pages/Progress';
// // import Profile from './pages/Profile';
// // import FAQPage from './pages/FAQ';
// // import PrivacyPage from './pages/Privacy';
// // import TermsPage from './pages/Terms';
// // import BookingConfirmation from './pages/BookingConfirmation';
// // import MyAppointments from './pages/MyAppointments';
// // import PrivacySettings from './pages/PrivacySettings';

// // const AppContent = () => {
// //   const { isAuthenticated } = useAuth();
// //   const location = useLocation();

// //   // Show footer only on home page
// //   const showFooter = location.pathname === '/';

// //   return (
// //     <div className="App flex flex-col min-h-screen">
// //       {/* Navbar - Shows on most pages */}
// //       <Navbar />
      
// //       {/* Main Content - Takes up remaining space */}
// //       <main className="flex-grow">
// //         <Routes>
// //           {/* Public Routes */}
// //           <Route path="/" element={<HomePage />} />
          
// //           {/* FIXED: Remove div wrapper and use element prop directly */}
// //           <Route 
// //             path="/login" 
// //             element={<Login />} 
// //           />
          
// //           <Route 
// //             path="/signup" 
// //             element={<Signup />} 
// //           />

// //           {/* Public/General Routes */}
// //           <Route path="/privacy-settings" element={<PrivacySettings />} />
// //           <Route path="/appointments" element={<MyAppointments />} />
// //           <Route path="/booking-confirmation" element={<BookingConfirmation />} />
// //           <Route path="/faq" element={<FAQPage />} />
// //           <Route path="/privacy" element={<PrivacyPage />} />
// //           <Route path="/terms" element={<TermsPage />} />
          
// //           {/* Protected Routes */}
// //           <Route 
// //             path="/dashboard" 
// //             element={
// //               <ProtectedRoute>
// //                 <Dashboard />
// //               </ProtectedRoute>
// //             } 
// //           />
          
// //           <Route 
// //             path="/emotion-input" 
// //             element={
// //               <ProtectedRoute>
// //                 <EmotionInput />
// //               </ProtectedRoute>
// //             } 
// //           />
          
// //           <Route 
// //             path="/therapists" 
// //             element={
// //               <ProtectedRoute>
// //                 <TherapistList />
// //               </ProtectedRoute>
// //             } 
// //           />
          
// //           <Route 
// //             path="/therapist/:therapistId" 
// //             element={
// //               <ProtectedRoute>
// //                 <TherapistDetail />
// //               </ProtectedRoute>
// //             } 
// //           />
          
// //           {/* Book Session Route - Direct booking page */}
// //           <Route 
// //             path="/book-session" 
// //             element={
// //               <ProtectedRoute>
// //                 <BookAppointment />
// //               </ProtectedRoute>
// //             } 
// //           />
          
// //           {/* Book Appointment Route - Therapist-specific booking */}
// //           <Route 
// //             path="/book-appointment/:therapistId" 
// //             element={
// //               <ProtectedRoute>
// //                 <BookAppointment />
// //               </ProtectedRoute>
// //             } 
// //           />
          
// //           <Route 
// //             path="/progress" 
// //             element={
// //               <ProtectedRoute>
// //                 <Progress />
// //               </ProtectedRoute>
// //             } 
// //           />
          
// //           <Route 
// //             path="/profile" 
// //             element={
// //               <ProtectedRoute>
// //                 <Profile />
// //               </ProtectedRoute>
// //             } 
// //           />

// //           {/* Catch all route */}
// //           <Route path="*" element={<Navigate to="/" replace />} />
// //         </Routes>
// //       </main>
      
// //       {/* Footer - Shows ONLY on home page */}
// //       {showFooter && <Footer />}
// //     </div>
// //   );
// // };

// // function App() {
// //   return (
// //     <AuthProvider>
// //       <ThemeProvider>
// //         <Router>
// //           <AppContent />
// //         </Router>
// //       </ThemeProvider>
// //     </AuthProvider>
// //   );
// // }

// // export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import { ThemeProvider } from './context/ThemeContext';
// import Navbar from './components/Layout/Navbar';
// import Footer from './components/Layout/Footer';
// import ProtectedRoute from './components/ProtectedRoute';
// import { ThemeProvider } from './context/ThemeContext'; 

// // Import theme styles
// import './styles/themes.css';

// // Pages
// import HomePage from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Dashboard from './pages/Dashboard';
// import EmotionInput from './pages/EmotionInput';
// import TherapistList from './pages/TherapistList';
// import TherapistDetail from './pages/TherapistDetail';
// import BookAppointment from './pages/BookAppointment';
// import Progress from './pages/Progress';
// import Profile from './pages/Profile';
// import FAQPage from './pages/FAQ';
// import PrivacyPage from './pages/Privacy';
// import TermsPage from './pages/Terms';
// import BookingConfirmation from './pages/BookingConfirmation';
// import MyAppointments from './pages/MyAppointments';
// import PrivacySettings from './pages/PrivacySettings';

// const AppContent = () => {
//   const { isAuthenticated } = useAuth();
//   const location = useLocation();

//   // Show footer only on home page
//   const showFooter = location.pathname === '/';

//   return (
//     <div className="App flex flex-col min-h-screen">
//       {/* Navbar - Shows on most pages */}
//       <Navbar />
      
//       {/* Main Content - Takes up remaining space */}
//       <main className="flex-grow">
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<HomePage />} />
          
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />

//           {/* Public/General Routes */}
//           <Route path="/privacy-settings" element={<PrivacySettings />} />
//           <Route path="/appointments" element={<MyAppointments />} />
//           <Route path="/booking-confirmation" element={<BookingConfirmation />} />
//           <Route path="/faq" element={<FAQPage />} />
//           <Route path="/privacy" element={<PrivacyPage />} />
//           <Route path="/terms" element={<TermsPage />} />
          
//           {/* Protected Routes */}
//           <Route 
//             path="/dashboard" 
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             } 
//           />
          
//           <Route 
//             path="/emotion-input" 
//             element={
//               <ProtectedRoute>
//                 <EmotionInput />
//               </ProtectedRoute>
//             } 
//           />
          
//           <Route 
//             path="/therapists" 
//             element={
//               <ProtectedRoute>
//                 <TherapistList />
//               </ProtectedRoute>
//             } 
//           />
          
//           <Route 
//             path="/therapist/:therapistId" 
//             element={
//               <ProtectedRoute>
//                 <TherapistDetail />
//               </ProtectedRoute>
//             } 
//           />
          
//           {/* Book Session Route - Direct booking page */}
//           <Route 
//             path="/book-session" 
//             element={
//               <ProtectedRoute>
//                 <BookAppointment />
//               </ProtectedRoute>
//             } 
//           />
          
//           {/* Book Appointment Route - Therapist-specific booking */}
//           <Route 
//             path="/book-appointment/:therapistId" 
//             element={
//               <ProtectedRoute>
//                 <BookAppointment />
//               </ProtectedRoute>
//             } 
//           />
          
//           <Route 
//             path="/progress" 
//             element={
//               <ProtectedRoute>
//                 <Progress />
//               </ProtectedRoute>
//             } 
//           />
          
//           <Route 
//             path="/profile" 
//             element={
//               <ProtectedRoute>
//                 <Profile />
//               </ProtectedRoute>
//             } 
//           />

//           {/* Catch all route */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </main>
      
//       {/* Footer - Shows ONLY on home page */}
//       {showFooter && <Footer />}
//     </div>
//   );
// };

// function App() {
//   return (
//     <AuthProvider>
//       <ThemeProvider>
//         <Router>
//           <AppContent />
//         </Router>
//       </ThemeProvider>
//     </AuthProvider>
//   );
// }

// export default App;
import React from 'react';
import ResetPassword from './components/ResetPassword';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider, useAuth } from './context/AuthContext';
// Import theme styles


// Pages
import HomePage from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import EmotionInput from './pages/EmotionInput';
import TherapistList from './pages/TherapistList';
import TherapistDetail from './pages/TherapistDetail';
import BookAppointment from './pages/BookAppointment';
import Progress from './pages/Progress';
import Profile from './pages/Profile';
import FAQPage from './pages/FAQ';
import PrivacyPage from './pages/Privacy';
import TermsPage from './pages/Terms';
import BookingConfirmation from './pages/BookingConfirmation';
import MyAppointments from './pages/MyAppointments';
import PrivacySettings from './pages/PrivacySettings';
import ForgotPassword from './components/ForgotPassword';


const AppContent = () => {
  const location = useLocation();

  // Show footer only on home page
  const showFooter = location.pathname === '/';

  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
           <Route path="/login" element={<Login />} />
           <Route path="/forgot-password" element={<ForgotPassword />} />
           <Route path="/reset-password/:uid/:token" element={<ResetPassword />} />  {/* NEW */}
          <Route path="/signup" element={<Signup />} />

          {/* Public/General Routes */}
          <Route path="/privacy-settings" element={<PrivacySettings />} />
          <Route path="/appointments" element={<MyAppointments />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          
          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/emotion-input" 
            element={
              <ProtectedRoute>
                <EmotionInput />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/therapists" 
            element={
              <ProtectedRoute>
                <TherapistList />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/therapist/:therapistId" 
            element={
              <ProtectedRoute>
                <TherapistDetail />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/book-session" 
            element={
              <ProtectedRoute>
                <BookAppointment />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/book-appointment/:therapistId" 
            element={
              <ProtectedRoute>
                <BookAppointment />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/progress" 
            element={
              <ProtectedRoute>
                <Progress />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      
      {/* Footer - Shows ONLY on home page */}
      {showFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
        <Router>
          <AppContent />
        </Router>
    </AuthProvider>
  );
}

export default App;
