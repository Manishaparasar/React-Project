import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { useAuth } from "../context/AuthContext";
import classes from "./login.module.css";
import AuthPage from "../pages/auth/AuthPage";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handlePhoneSubmit = () => {
    if (phoneNumber.length === 10) {
      login();
      navigate("/otp", { state: { phoneNumber } });
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  return (
    <>
      <AuthPage />
      <div className={classes.main}>
        <p>Welcome to</p>
        <h2>Login</h2>
        <label htmlFor="number" className={classes.label}></label>
        <input
          type="tel"
          id="number"
          name="phone number"
          className={classes["phone-input"]}
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Button
          buttonText="Get OTP"
          onClick={handlePhoneSubmit}
          disabled={phoneNumber.length !== 10} // Disable button if phone number is not valid
        />
      </div>
    </>
  );
};

export default Login;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../button/Button";
// import { useAuth } from "../context/AuthContext";
// import classes from "./login.module.css";
// import AuthPage from "../pages/auth/AuthPage";

// const Login = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   // Function to send OTP via the POST request
//   const sendOtp = async () => {
//     const requestBody = { phone: phoneNumber };
//     ss
