import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn, isOtpVerified } = useAuth();

  
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  
  if (!isOtpVerified && window.location.pathname !== "/otp") {
    return <Navigate to="/otp" />;
  }

  return children;
};

export default PrivateRoute;
