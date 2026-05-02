// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { authService } from '../services/authService';

// const AuthContext = createContext();

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const currentUser = authService.getCurrentUser();
//     setUser(currentUser);
//     setLoading(false);
//   }, []);

//   const login = async (credentials) => {
//     try {
//       const response = await authService.login(credentials);
//       setUser(response.user);
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const signup = async (userData) => {
//     try {
//       const response = await authService.signup(userData);
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const logout = () => {
//     authService.logout();
//     setUser(null);
//   };

//   const value = {
//     user,
//     login,
//     signup,
//     logout,
//     isAuthenticated: authService.isAuthenticated(),
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };
import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      setUser(response.user);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const signup = async (userData) => {
    try {
      // Check if this is a Google user
      if (userData.googleId) {
        // Handle Google signup differently
        const googleUserData = {
          ...userData,
          provider: 'google',
          emailVerified: userData.emailVerified || true
        };
        
        // Store Google user data
        localStorage.setItem('user', JSON.stringify(googleUserData));
        localStorage.setItem('token', userData.googleId);
        
        setUser(googleUserData);
        return { user: googleUserData, token: userData.googleId };
      } else {
        // Handle regular email signup
        const response = await authService.signup(userData);
        return response;
      }
    } catch (error) {
      throw error;
    }
  };

  // NEW: Google Sign-up Handler
  const googleSignup = async (googleUserData) => {
    try {
      const userData = {
        username: googleUserData.username,
        email: googleUserData.email,
        avatar: googleUserData.avatar,
        googleId: googleUserData.googleId,
        provider: 'google',
        emailVerified: googleUserData.emailVerified || true
      };

      // Store user data
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', googleUserData.googleId);
      
      setUser(userData);
      return { user: userData, token: googleUserData.googleId };
    } catch (error) {
      throw error;
    }
  };

  // NEW: Login with Token (for Google OAuth callbacks)
  const loginWithToken = async (token) => {
    try {
      // Verify token and get user data
      const userData = authService.verifyToken(token);
      if (userData) {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', token);
      }
    } catch (error) {
      console.error('Token login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    googleSignup, // NEW: Added Google signup function
    loginWithToken, // NEW: Added token login function
    logout,
    isAuthenticated: authService.isAuthenticated(),
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
