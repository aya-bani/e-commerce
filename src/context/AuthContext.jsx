// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create AuthProvider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Example: Simulate authentication check
  useEffect(() => {
    const user = localStorage.getItem('user'); // Simulate a user check
    if (user) {
      setCurrentUser(JSON.parse(user)); // If user exists, set user data
    }
    setLoading(false);
  }, []);

  // Function to login (simulate setting user in local storage)
  const login = (user) => {
    setCurrentUser(user);
    localStorage.setItem('user', JSON.stringify(user)); // Save user in local storage
  };

  // Function to logout (remove user from local storage)
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user'); // Remove user from local storage
  };

  const value = {
    currentUser,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
