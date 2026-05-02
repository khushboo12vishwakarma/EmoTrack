

// // // // import React, { useState } from 'react';
// // // // import { Link, useNavigate } from 'react-router-dom';
// // // // import { useAuth } from '../../context/AuthContext';
// // // // import { Menu, X, User, LogOut, Brain, Home } from 'lucide-react';

// // // // const Navbar = () => {
// // // //   const { user, logout, isAuthenticated } = useAuth();
// // // //   const navigate = useNavigate();
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// // // //   const handleLogout = () => {
// // // //     logout();
// // // //     navigate('/');
// // // //   };

// // // //   const toggleMobileMenu = () => {
// // // //     setIsMobileMenuOpen(!isMobileMenuOpen);
// // // //   };

// // // //   return (
// // // //     <nav className="bg-violet-950 shadow-2xl border-b border-violet-800 sticky top-0 z-50">
// // // //       <div className="w-full px-4 sm:px-6 lg:px-8">
// // // //         <div className="flex items-center justify-between h-16">
          
// // // //           {/* LEFT - Logo Section */}
// // // //           <div className="flex items-center flex-shrink-0">
// // // //             <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-all duration-300">
// // // //               <div className="bg-gradient-to-br from-violet-400 to-purple-500 p-2 rounded-xl shadow-lg">
// // // //                 <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
// // // //               </div>
// // // //               <span className="text-base sm:text-lg md:text-xl font-bold text-violet-100">
// // // //                 EmoTrack
// // // //               </span>
// // // //             </Link>
// // // //           </div>

// // // //           {/* RIGHT - Desktop Menu */}
// // // //           <div className="hidden md:block">
// // // //             <div className="ml-10 flex items-baseline space-x-4">
// // // //               {isAuthenticated ? (
// // // //                 <>
// // // //                   {/* HOME LINK ADDED */}
// // // //                   <Link to="/" className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
// // // //                     <Home className="w-4 h-4" />
// // // //                     Home
// // // //                   </Link>
                  
// // // //                   <Link to="/dashboard" className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
// // // //                     Dashboard
// // // //                   </Link>
// // // //                   <Link to="/emotion-input" className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
// // // //                     Share Feelings
// // // //                   </Link>
// // // //                   <Link to="/therapists" className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
// // // //                     Therapists
// // // //                   </Link>
// // // //                   <Link to="/progress" className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
// // // //                     Progress
// // // //                   </Link>
// // // //                   <Link to="/recovery-tracker" className="block px-3 py-2 text-violet-200 hover:text-white">
// // // //                   Recovery Tracker
// // // //                   </Link>


// // // //                   <div className="relative ml-3">
// // // //                     <button
// // // //                       onClick={() => setIsOpen(!isOpen)}
// // // //                       className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-violet-400 text-violet-200 hover:text-white transition-colors"
// // // //                     >
// // // //                       <User className="h-6 w-6" />
// // // //                       <span className="ml-2">{user?.username}</span>
// // // //                     </button>
// // // //                     {isOpen && (
// // // //                       <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
// // // //                         <div className="py-1">
// // // //                           <Link
// // // //                             to="/profile"
// // // //                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// // // //                             onClick={() => setIsOpen(false)}
// // // //                           >
// // // //                             Profile
// // // //                           </Link>
// // // //                           <button
// // // //                             onClick={handleLogout}
// // // //                             className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// // // //                           >
// // // //                             <LogOut className="h-4 w-4 mr-2" />
// // // //                             Logout
// // // //                           </button>
// // // //                         </div>
// // // //                       </div>
// // // //                     )}
// // // //                   </div>
// // // //                 </>
// // // //               ) : (
// // // //                 <>
// // // //                   <Link 
// // // //                     to="/login" 
// // // //                     className="text-violet-200 hover:text-white font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-violet-800/50 text-sm md:text-base"
// // // //                   >
// // // //                     Login
// // // //                   </Link>
// // // //                   <Link 
// // // //                     to="/signup" 
// // // //                     className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base"
// // // //                   >
// // // //                     Sign Up
// // // //                   </Link>
// // // //                 </>
// // // //               )}
// // // //             </div>
// // // //           </div>

// // // //           {/* RIGHT - Mobile Menu Button */}
// // // //           <div className="md:hidden">
// // // //             <button
// // // //               onClick={toggleMobileMenu}
// // // //               className="text-violet-200 hover:text-white p-2 rounded-lg transition-all duration-200"
// // // //               aria-label="Toggle mobile menu"
// // // //             >
// // // //               {isMobileMenuOpen ? (
// // // //                 <X className="w-6 h-6" strokeWidth={2} />
// // // //               ) : (
// // // //                 <Menu className="w-6 h-6" strokeWidth={2} />
// // // //               )}
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Mobile Menu Dropdown */}
// // // //         {isMobileMenuOpen && (
// // // //           <div className="md:hidden border-t border-violet-800 py-4">
// // // //             <div className="space-y-3">
// // // //               {isAuthenticated ? (
// // // //                 <>
// // // //                   {/* HOME LINK ADDED FOR MOBILE */}
// // // //                   <Link 
// // // //                     to="/" 
// // // //                     className="block px-3 py-2 text-violet-200 hover:text-white flex items-center gap-2" 
// // // //                     onClick={() => setIsMobileMenuOpen(false)}
// // // //                   >
// // // //                     <Home className="w-4 h-4" />
// // // //                     Home
// // // //                   </Link>
                  
// // // //                   <Link to="/dashboard" className="block px-3 py-2 text-violet-200 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
// // // //                     Dashboard
// // // //                   </Link>
// // // //                   <Link to="/emotion-input" className="block px-3 py-2 text-violet-200 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
// // // //                     Share Feelings
// // // //                   </Link>
// // // //                   <Link to="/therapists" className="block px-3 py-2 text-violet-200 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
// // // //                     Therapists
// // // //                   </Link>
// // // //                   <Link to="/progress" className="block px-3 py-2 text-violet-200 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
// // // //                     Progress
// // // //                   </Link>
// // // //                   <Link to="/profile" className="block px-3 py-2 text-violet-200 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
// // // //                     Profile
// // // //                   </Link>
// // // //                   <Link to="/recovery-tracker" className="block px-3 py-2 text-violet-200 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
// // // //                     Recovery Tracker


// // // //                   </Link>

// // // //                   <button
// // // //                     onClick={() => {
// // // //                       handleLogout();
// // // //                       setIsMobileMenuOpen(false);
// // // //                     }}
// // // //                     className="block w-full text-left px-3 py-2 text-violet-200 hover:text-white"
// // // //                   >
// // // //                     Logout
// // // //                   </button>
// // // //                 </>
// // // //               ) : (
// // // //                 <>
// // // //                   <Link 
// // // //                     to="/login" 
// // // //                     className="block bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg text-center"
// // // //                     onClick={() => setIsMobileMenuOpen(false)}
// // // //                   >
// // // //                     Login
// // // //                   </Link>
// // // //                   <Link 
// // // //                     to="/signup" 
// // // //                     className="block bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg text-center"
// // // //                     onClick={() => setIsMobileMenuOpen(false)}
// // // //                   >
// // // //                     Sign Up
// // // //                   </Link>
// // // //                 </>
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;
// // // import React, { useState, useCallback } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import { useAuth } from '../../context/AuthContext';
// // // import { Menu, X, User, LogOut, Brain, Home } from 'lucide-react';

// // // const Navbar = () => {
// // //   const { user, logout, isAuthenticated } = useAuth();
// // //   const navigate = useNavigate();
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// // //   const handleLogout = useCallback(() => {
// // //     logout();
// // //     navigate('/');
// // //   }, [logout, navigate]);

// // //   const toggleMobileMenu = useCallback(() => {
// // //     setIsMobileMenuOpen(!isMobileMenuOpen);
// // //   }, [isMobileMenuOpen]);

// // //   const closeMobileMenu = useCallback(() => {
// // //     setIsMobileMenuOpen(false);
// // //   }, []);

// // //   const closeDropdown = useCallback(() => {
// // //     setIsOpen(false);
// // //   }, []);

// // //   return (
// // //     <nav className="bg-violet-950 shadow-2xl border-b border-violet-800 sticky top-0 z-50">
// // //       <div className="w-full px-4 sm:px-6 lg:px-8">
// // //         <div className="flex items-center justify-between h-16">
          
// // //           {/* LEFT - Logo Section */}
// // //           <div className="flex items-center flex-shrink-0">
// // //             <Link 
// // //               to="/" 
// // //               className="flex items-center gap-2 hover:opacity-90 transition-all duration-300"
// // //             >
// // //               <div className="bg-gradient-to-br from-violet-400 to-purple-500 p-2 rounded-xl shadow-lg">
// // //                 <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
// // //               </div>
// // //               <span className="text-base sm:text-lg md:text-xl font-bold text-violet-100">
// // //                 EmoTrack
// // //               </span>
// // //             </Link>
// // //           </div>

// // //           {/* RIGHT - Desktop Menu */}
// // //           <div className="hidden md:block">
// // //             <div className="ml-10 flex items-baseline space-x-4">
// // //               {isAuthenticated ? (
// // //                 <>
// // //                   <Link 
// // //                     to="/" 
// // //                     className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
// // //                   >
// // //                     <Home className="w-4 h-4" />
// // //                     Home
// // //                   </Link>
                  
// // //                   <Link 
// // //                     to="/dashboard" 
// // //                     className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
// // //                   >
// // //                     Dashboard
// // //                   </Link>
                  
// // //                   <Link 
// // //                     to="/emotion-input" 
// // //                     className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
// // //                   >
// // //                     Share Feelings
// // //                   </Link>
                  
// // //                   <Link 
// // //                     to="/therapists" 
// // //                     className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
// // //                   >
// // //                     Therapists
// // //                   </Link>
                  
// // //                   <Link 
// // //                     to="/progress" 
// // //                     className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
// // //                   >
// // //                     Progress
// // //                   </Link>
                  
        

// // //                   <div className="relative ml-3">
// // //                     <button
// // //                       onClick={() => setIsOpen(!isOpen)}
// // //                       className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-violet-400 text-violet-200 hover:text-white transition-colors"
// // //                       aria-expanded={isOpen}
// // //                       aria-haspopup="true"
// // //                     >
// // //                       <User className="h-6 w-6" />
// // //                       <span className="ml-2">{user?.username}</span>
// // //                     </button>
                    
// // //                     {isOpen && (
// // //                       <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
// // //                         <div className="py-1" role="menu">
// // //                           <Link
// // //                             to="/profile"
// // //                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// // //                             onClick={closeDropdown}
// // //                             role="menuitem"
// // //                           >
// // //                             Profile
// // //                           </Link>
// // //                           <button
// // //                             onClick={() => {
// // //                               handleLogout();
// // //                               closeDropdown();
// // //                             }}
// // //                             className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// // //                             role="menuitem"
// // //                           >
// // //                             <LogOut className="h-4 w-4 mr-2" />
// // //                             Logout
// // //                           </button>
// // //                         </div>
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 </>
// // //               ) : (
// // //                 <>
// // //                   <Link 
// // //                     to="/login" 
// // //                     className="text-violet-200 hover:text-white font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-violet-800/50 text-sm md:text-base"
// // //                   >
// // //                     Login
// // //                   </Link>
// // //                   <Link 
// // //                     to="/signup" 
// // //                     className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base"
// // //                   >
// // //                     Sign Up
// // //                   </Link>
// // //                 </>
// // //               )}
// // //             </div>
// // //           </div>

// // //           {/* RIGHT - Mobile Menu Button */}
// // //           <div className="md:hidden">
// // //             <button
// // //               onClick={toggleMobileMenu}
// // //               className="text-violet-200 hover:text-white p-2 rounded-lg transition-all duration-200"
// // //               aria-label="Toggle mobile menu"
// // //               aria-expanded={isMobileMenuOpen}
// // //             >
// // //               {isMobileMenuOpen ? (
// // //                 <X className="w-6 h-6" strokeWidth={2} />
// // //               ) : (
// // //                 <Menu className="w-6 h-6" strokeWidth={2} />
// // //               )}
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Mobile Menu Dropdown */}
// // //         {isMobileMenuOpen && (
// // //           <div className="md:hidden border-t border-violet-800 py-4">
// // //             <div className="space-y-3">
// // //               {isAuthenticated ? (
// // //                 <>
// // //                   <Link 
// // //                     to="/" 
// // //                     className="block px-3 py-2 text-violet-200 hover:text-white flex items-center gap-2" 
// // //                     onClick={closeMobileMenu}
// // //                   >
// // //                     <Home className="w-4 h-4" />
// // //                     Home
// // //                   </Link>
                  
// // //                   <Link 
// // //                     to="/dashboard" 
// // //                     className="block px-3 py-2 text-violet-200 hover:text-white" 
// // //                     onClick={closeMobileMenu}
// // //                   >
// // //                     Dashboard
// // //                   </Link>
                  
// // //                   <Link 
// // //                     to="/emotion-input" 
// // //                     className="block px-3 py-2 text-violet-200 hover:text-white" 
// // //                     onClick={closeMobileMenu}
// // //                   >
// // //                     Share Feelings
// // //                   </Link>
                  
// // //                   <Link 
// // //                     to="/therapists" 
// // //                     className="block px-3 py-2 text-violet-200 hover:text-white" 
// // //                     onClick={closeMobileMenu}
// // //                   >
// // //                     Therapists
// // //                   </Link>
                  
// // //                   <Link 
// // //                     to="/progress" 
// // //                     className="block px-3 py-2 text-violet-200 hover:text-white" 
// // //                     onClick={closeMobileMenu}
// // //                   >
// // //                     Progress
// // //                   </Link>
                  
// // //                   <Link 
// // //                     to="/profile" 
// // //                     className="block px-3 py-2 text-violet-200 hover:text-white" 
// // //                     onClick={closeMobileMenu}
// // //                   >
// // //                     Profile
// // //                   </Link>
              

// // //                   <button
// // //                     onClick={() => {
// // //                       handleLogout();
// // //                       closeMobileMenu();
// // //                     }}
// // //                     className="block w-full text-left px-3 py-2 text-violet-200 hover:text-white"
// // //                   >
// // //                     Logout
// // //                   </button>
// // //                 </>
// // //               ) : (
// // //                 <>
// // //                   <Link 
// // //                     to="/login" 
// // //                     className="block bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg text-center"
// // //                     onClick={closeMobileMenu}
// // //                   >
// // //                     Login
// // //                   </Link>
// // //                   <Link 
// // //                     to="/signup" 
// // //                     className="block bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg text-center"
// // //                     onClick={closeMobileMenu}
// // //                   >
// // //                     Sign Up
// // //                   </Link>
// // //                 </>
// // //               )}
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;
// // // Navbar.js
// // import React, { useState, useCallback } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../../context/AuthContext';
// // import { Menu, X, User, LogOut, Brain, Home, Calendar } from 'lucide-react'; // Added Calendar icon

// // const Navbar = () => {
// //   const { user, logout, isAuthenticated } = useAuth();
// //   const navigate = useNavigate();
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const handleLogout = useCallback(() => {
// //     logout();
// //     navigate('/');
// //   }, [logout, navigate]);

// //   const toggleMobileMenu = useCallback(() => {
// //     setIsMobileMenuOpen(!isMobileMenuOpen);
// //   }, [isMobileMenuOpen]);

// //   const closeMobileMenu = useCallback(() => {
// //     setIsMobileMenuOpen(false);
// //   }, []);

// //   const closeDropdown = useCallback(() => {
// //     setIsOpen(false);
// //   }, []);

// //   return (
// //     <nav className="bg-violet-950 shadow-2xl border-b border-violet-800 sticky top-0 z-50">
// //       <div className="w-full px-4 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-16">
          
// //           {/* LEFT - Logo Section */}
// //           <div className="flex items-center flex-shrink-0">
// //             <Link 
// //               to="/" 
// //               className="flex items-center gap-2 hover:opacity-90 transition-all duration-300"
// //             >
// //               <div className="bg-gradient-to-br from-violet-400 to-purple-500 p-2 rounded-xl shadow-lg">
// //                 <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
// //               </div>
// //               <span className="text-base sm:text-lg md:text-xl font-bold text-violet-100">
// //                 EmoTrack
// //               </span>
// //             </Link>
// //           </div>

// //           {/* RIGHT - Desktop Menu */}
// //           <div className="hidden md:block">
// //             <div className="ml-10 flex items-baseline space-x-4">
// //               {isAuthenticated ? (
// //                 <>
// //                   <Link 
// //                     to="/" 
// //                     className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
// //                   >
// //                     <Home className="w-4 h-4" />
// //                     Home
// //                   </Link>
                  
// //                   <Link 
// //                     to="/dashboard" 
// //                     className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
// //                   >
// //                     Dashboard
// //                   </Link>
                  
// //                   <Link 
// //                     to="/emotion-input" 
// //                     className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
// //                   >
// //                     Share Feelings
// //                   </Link>

// //                   {/* UPDATED - Book Session Link to match navbar theme */}
               
                  
// //                   <Link 
// //                     to="/therapists" 
// //                     className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
// //                   >
// //                     Therapists
// //                   </Link>



// //                   <Link 
// //   to="/book-session"  // ✅ No trailing slash
// //   className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
// // >
// // Book Session
// // </Link>


                   
                  



// //                   <Link 
// //                     to="/progress" 
// //                     className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
// //                   >
// //                     Progress
// //                   </Link>
                  
// //                   <div className="relative ml-3">
// //                     <button
// //                       onClick={() => setIsOpen(!isOpen)}
// //                       className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-violet-400 text-violet-200 hover:text-white transition-colors"
// //                       aria-expanded={isOpen}
// //                       aria-haspopup="true"
// //                     >
// //                       <User className="h-6 w-6" />
// //                       <span className="ml-2">{user?.username}</span>
// //                     </button>
                    
// //                     {isOpen && (
// //                       <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
// //                         <div className="py-1" role="menu">
// //                           <Link
// //                             to="/profile"
// //                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// //                             onClick={closeDropdown}
// //                             role="menuitem"
// //                           >
// //                             Profile
// //                           </Link>
// //                           <button
// //                             onClick={() => {
// //                               handleLogout();
// //                               closeDropdown();
// //                             }}
// //                             className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// //                             role="menuitem"
// //                           >
// //                             <LogOut className="h-4 w-4 mr-2" />
// //                             Logout
// //                           </button>
// //                         </div>
// //                       </div>
// //                     )}
// //                   </div>
// //                 </>
// //               ) : (
// //                 <>
// //                   <Link 
// //                     to="/login" 
// //                     className="text-violet-200 hover:text-white font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-violet-800/50 text-sm md:text-base"
// //                   >
// //                     Login
// //                   </Link>
// //                   <Link 
// //                     to="/signup" 
// //                     className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base"
// //                   >
// //                     Sign Up
// //                   </Link>
// //                 </>
// //               )}
// //             </div>
// //           </div>

// //           {/* RIGHT - Mobile Menu Button */}
// //           <div className="md:hidden">
// //             <button
// //               onClick={toggleMobileMenu}
// //               className="text-violet-200 hover:text-white p-2 rounded-lg transition-all duration-200"
// //               aria-label="Toggle mobile menu"
// //               aria-expanded={isMobileMenuOpen}
// //             >
// //               {isMobileMenuOpen ? (
// //                 <X className="w-6 h-6" strokeWidth={2} />
// //               ) : (
// //                 <Menu className="w-6 h-6" strokeWidth={2} />
// //               )}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Menu Dropdown */}
// //         {isMobileMenuOpen && (
// //           <div className="md:hidden border-t border-violet-800 py-4">
// //             <div className="space-y-3">
// //               {isAuthenticated ? (
// //                 <>
// //                   <Link 
// //                     to="/" 
// //                     className="block px-3 py-2 text-violet-200 hover:text-white flex items-center gap-2" 
// //                     onClick={closeMobileMenu}
// //                   >
// //                     <Home className="w-4 h-4" />
// //                     Home
// //                   </Link>
                  
// //                   <Link 
// //                     to="/dashboard" 
// //                     className="block px-3 py-2 text-violet-200 hover:text-white" 
// //                     onClick={closeMobileMenu}
// //                   >
// //                     Dashboard
// //                   </Link>
                  
// //                   <Link 
// //                     to="/emotion-input" 
// //                     className="block px-3 py-2 text-violet-200 hover:text-white" 
// //                     onClick={closeMobileMenu}
// //                   >
// //                     Share Feelings
// //                   </Link>

// //                   {/* UPDATED - Book Session Link for Mobile to match theme */}
// //                  <Link 
// //   to="/book-session"  // ✅ No trailing slash
// //   className="block px-3 py-2 text-violet-200 hover:text-white"
// //   onClick={closeMobileMenu}
// // >
// // Book Session
// // </Link>
// // <Link 
// //                   to="/book-appointment/1" 
// //                    className="block px-3 py-2 text-violet-200 hover:text-white"
// //                     onClick={closeMobileMenu}
// //                     >
// //                     Book Session
// //                     </Link>
                  
// //                   <Link 
// //                     to="/therapists" 
// //                     className="block px-3 py-2 text-violet-200 hover:text-white" 
// //                     onClick={closeMobileMenu}
// //                   >
// //                     Therapists
// //                   </Link>
                  
// //                   <Link 
// //                     to="/progress" 
// //                     className="block px-3 py-2 text-violet-200 hover:text-white" 
// //                     onClick={closeMobileMenu}
// //                   >
// //                     Progress
// //                   </Link>
                  
// //                   <Link 
// //                     to="/profile" 
// //                     className="block px-3 py-2 text-violet-200 hover:text-white" 
// //                     onClick={closeMobileMenu}
// //                   >
// //                     Profile
// //                   </Link>
              
// //                   <button
// //                     onClick={() => {
// //                       handleLogout();
// //                       closeMobileMenu();
// //                     }}
// //                     className="block w-full text-left px-3 py-2 text-violet-200 hover:text-white"
// //                   >
// //                     Logout
// //                   </button>
// //                 </>
// //               ) : (
// //                 <>
// //                   <Link 
// //                     to="/login" 
// //                     className="block bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg text-center"
// //                     onClick={closeMobileMenu}
// //                   >
// //                     Login
// //                   </Link>
// //                   <Link 
// //                     to="/signup" 
// //                     className="block bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg text-center"
// //                     onClick={closeMobileMenu}
// //                   >
// //                     Sign Up
// //                   </Link>
// //                 </>
// //               )}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import React, { useState, useCallback } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import { Menu, X, User, LogOut, Brain, Home } from 'lucide-react';

// const Navbar = () => {
//   const { user, logout, isAuthenticated } = useAuth();
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleLogout = useCallback(() => {
//     logout();
//     navigate('/');
//   }, [logout, navigate]);

//   const toggleMobileMenu = useCallback(() => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   }, [isMobileMenuOpen]);

//   const closeMobileMenu = useCallback(() => {
//     setIsMobileMenuOpen(false);
//   }, []);

//   const closeDropdown = useCallback(() => {
//     setIsOpen(false);
//   }, []);

//   return (
//     <nav className="bg-violet-950 shadow-2xl border-b border-violet-800 sticky top-0 z-50">
//       <div className="w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
          
//           {/* LEFT - Logo Section */}
//           <div className="flex items-center flex-shrink-0">
//             <Link 
//               to="/" 
//               className="flex items-center gap-2 hover:opacity-90 transition-all duration-300"
//             >
//               <div className="bg-gradient-to-br from-violet-400 to-purple-500 p-2 rounded-xl shadow-lg">
//                 <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
//               </div>
//               <span className="text-base sm:text-lg md:text-xl font-bold text-violet-100">
//                 EmoTrack
//               </span>
//             </Link>
//           </div>

//           {/* RIGHT - Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {isAuthenticated ? (
//                 <>
//                   <Link 
//                     to="/" 
//                     className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
//                   >
//                     <Home className="w-4 h-4" />
//                     Home
//                   </Link>
                  
//                   <Link 
//                     to="/dashboard" 
//                     className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
//                   >
//                     Dashboard
//                   </Link>
                  
//                   <Link 
//                     to="/emotion-input" 
//                     className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
//                   >
//                     Share Feelings
//                   </Link>
                  
//                   {/* Updated Book Session Link */}
//                   <Link 
//                     to="/book-session" 
//                     className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
//                   >
//                     Book Session
//                   </Link>
                  
//                   <Link 
//                     to="/therapists" 
//                     className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
//                   >
//                     Therapists
//                   </Link>
                  
//                   <Link 
//                     to="/progress" 
//                     className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
//                   >
//                     Progress
//                   </Link>
                  
//                   <div className="relative ml-3">
//                     <button
//                       onClick={() => setIsOpen(!isOpen)}
//                       className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-violet-400 text-violet-200 hover:text-white transition-colors"
//                       aria-expanded={isOpen}
//                       aria-haspopup="true"
//                     >
//                       <User className="h-6 w-6" />
//                       <span className="ml-2">{user?.username}</span>
//                     </button>
                    
//                     {isOpen && (
//                       <>
//                         <div 
//                           className="fixed inset-0 z-10" 
//                           onClick={closeDropdown}
//                         ></div>
                        
//                         <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
//                           <div className="py-1" role="menu">
//                             <Link
//                               to="/profile"
//                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                               onClick={closeDropdown}
//                               role="menuitem"
//                             >
//                               Profile
//                             </Link>
//                             <button
//                               onClick={() => {
//                                 handleLogout();
//                                 closeDropdown();
//                               }}
//                               className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                               role="menuitem"
//                             >
//                               <LogOut className="h-4 w-4 mr-2" />
//                               Logout
//                             </button>
//                           </div>
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <Link 
//                     to="/login" 
//                     className="text-violet-200 hover:text-white font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-violet-800/50 text-sm md:text-base"
//                   >
//                     Login
//                   </Link>
//                   <Link 
//                     to="/signup" 
//                     className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base"
//                   >
//                     Sign Up
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* RIGHT - Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMobileMenu}
//               className="text-violet-200 hover:text-white p-2 rounded-lg transition-all duration-200"
//               aria-label="Toggle mobile menu"
//               aria-expanded={isMobileMenuOpen}
//             >
//               {isMobileMenuOpen ? (
//                 <X className="w-6 h-6" strokeWidth={2} />
//               ) : (
//                 <Menu className="w-6 h-6" strokeWidth={2} />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden border-t border-violet-800 py-4">
//             <div className="space-y-3">
//               {isAuthenticated ? (
//                 <>
//                   <Link 
//                     to="/" 
//                     className="block px-3 py-2 text-violet-200 hover:text-white flex items-center gap-2" 
//                     onClick={closeMobileMenu}
//                   >
//                     <Home className="w-4 h-4" />
//                     Home
//                   </Link>
                  
//                   <Link 
//                     to="/dashboard" 
//                     className="block px-3 py-2 text-violet-200 hover:text-white" 
//                     onClick={closeMobileMenu}
//                   >
//                     Dashboard
//                   </Link>
                  
//                   <Link 
//                     to="/emotion-input" 
//                     className="block px-3 py-2 text-violet-200 hover:text-white" 
//                     onClick={closeMobileMenu}
//                   >
//                     Share Feelings
//                   </Link>
                  
//                   {/* Updated Mobile Book Session Link */}
//                   <Link 
//                     to="/book-session" 
//                     className="block px-3 py-2 text-violet-200 hover:text-white"
//                     onClick={closeMobileMenu}
//                   >
//                     Book Session
//                   </Link>
                  
//                   <Link 
//                     to="/therapists" 
//                     className="block px-3 py-2 text-violet-200 hover:text-white" 
//                     onClick={closeMobileMenu}
//                   >
//                     Therapists
//                   </Link>
                  
//                   <Link 
//                     to="/progress" 
//                     className="block px-3 py-2 text-violet-200 hover:text-white" 
//                     onClick={closeMobileMenu}
//                   >
//                     Progress
//                   </Link>
                  
//                   <Link 
//                     to="/profile" 
//                     className="block px-3 py-2 text-violet-200 hover:text-white" 
//                     onClick={closeMobileMenu}
//                   >
//                     Profile
//                   </Link>
              
//                   <button
//                     onClick={() => {
//                       handleLogout();
//                       closeMobileMenu();
//                     }}
//                     className="block w-full text-left px-3 py-2 text-violet-200 hover:text-white"
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <Link 
//                     to="/login" 
//                     className="block bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg text-center"
//                     onClick={closeMobileMenu}
//                   >
//                     Login
//                   </Link>
//                   <Link 
//                     to="/signup" 
//                     className="block bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg text-center"
//                     onClick={closeMobileMenu}
//                   >
//                     Sign Up
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Menu, X, User, LogOut, Brain, Home } from 'lucide-react';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = useCallback(() => {
    logout();
    navigate('/');
  }, [logout, navigate]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Fixed navbar styling (no theme changes)
  return (
    <nav className="bg-violet-950 shadow-2xl border-b border-violet-800 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LEFT - Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center gap-2 hover:opacity-90 transition-all duration-300"
            >
              <div className="p-2 rounded-xl shadow-lg bg-gradient-to-br from-violet-400 to-purple-500">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
              </div>
              <span className="text-base sm:text-lg md:text-xl font-bold text-violet-100">
                EmoTrack
              </span>
            </Link>
          </div>

          {/* RIGHT - Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/" 
                    className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
                  >
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                  
                  <Link 
                    to="/dashboard" 
                    className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Dashboard
                  </Link>
                  
                  <Link 
                    to="/emotion-input" 
                    className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Share Feelings
                  </Link>
                  
                  <Link 
                    to="/book-session" 
                    className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Book Session
                  </Link>
                  
                  <Link 
                    to="/therapists" 
                    className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Therapists
                  </Link>
                  
                  <Link 
                    to="/progress" 
                    className="text-violet-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Progress
                  </Link>
                  
                  <div className="relative ml-3">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-violet-400 text-violet-200 hover:text-white transition-colors"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      <User className="h-4 w-4" />
                      <span className="ml-2">{user?.username}</span>
                    </button>
                    
                    {isOpen && (
                      <>
                        <div 
                          className="fixed inset-0 z-10" 
                          onClick={closeDropdown}
                        ></div>
                        
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                          <div className="py-1" role="menu">
                            <Link
                              to="/profile"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={closeDropdown}
                              role="menuitem"
                            >
                              Profile
                            </Link>
                            <button
                              onClick={() => {
                                handleLogout();
                                closeDropdown();
                              }}
                              className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              <LogOut className="h-4 w-4 mr-2" />
                              Logout
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="text-violet-200 hover:text-white font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-violet-800/50 text-sm md:text-base"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* RIGHT - Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-violet-200 hover:text-white p-2 rounded-lg transition-all duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={2} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-violet-800 py-4">
            <div className="space-y-3">
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/" 
                    className="block px-3 py-2 text-violet-200 hover:text-white flex items-center gap-2" 
                    onClick={closeMobileMenu}
                  >
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                  
                  <Link 
                    to="/dashboard" 
                    className="block px-3 py-2 text-violet-200 hover:text-white" 
                    onClick={closeMobileMenu}
                  >
                    Dashboard
                  </Link>
                  
                  <Link 
                    to="/emotion-input" 
                    className="block px-3 py-2 text-violet-200 hover:text-white" 
                    onClick={closeMobileMenu}
                  >
                    Share Feelings
                  </Link>
                  
                  <Link 
                    to="/book-session" 
                    className="block px-3 py-2 text-violet-200 hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    Book Session
                  </Link>
                  
                  <Link 
                    to="/therapists" 
                    className="block px-3 py-2 text-violet-200 hover:text-white" 
                    onClick={closeMobileMenu}
                  >
                    Therapists
                  </Link>
                  
                  <Link 
                    to="/progress" 
                    className="block px-3 py-2 text-violet-200 hover:text-white" 
                    onClick={closeMobileMenu}
                  >
                    Progress
                  </Link>
                  
                  <Link 
                    to="/profile" 
                    className="block px-3 py-2 text-violet-200 hover:text-white" 
                    onClick={closeMobileMenu}
                  >
                    Profile
                  </Link>
              
                  <button
                    onClick={() => {
                      handleLogout();
                      closeMobileMenu();
                    }}
                    className="block w-full text-left px-3 py-2 text-violet-200 hover:text-white"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="block bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg text-center"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="block bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg text-center"
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
