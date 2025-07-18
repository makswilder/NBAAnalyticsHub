import React, { useState, useEffect } from 'react';
import authService from '../services/authService';
import { AuthContext } from './AuthContextProvider';

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated on app load
    const checkAuth = () => {
      const authenticated = authService.isAuthenticated();
      setIsAuthenticated(authenticated);
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (credentials) => {
    const response = await authService.login(credentials);
    setIsAuthenticated(true);
    return response;
  };

  const register = async (userData) => {
    const response = await authService.register(userData);
    return response;
  };

  const logout = () => {
    authService.logout();
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    login,
    register,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
