import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const verifyOtp = () => {
    setIsOtpVerified(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsOtpVerified(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isOtpVerified, login, verifyOtp, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
