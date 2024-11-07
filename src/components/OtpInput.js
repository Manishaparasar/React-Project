import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../button/Button";
import { useAuth } from "../context/AuthContext";
import styles from "./otpInput.module.css";
import Auth from "../pages/auth/AuthPage";

const OtpInput = () => {
  const location = useLocation();
  const { phoneNumber } = location.state;
  const { verifyOtp } = useAuth();
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const isOtpComplete = otp.every((digit) => digit !== "");

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Prevent entering more than one character
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move to the next input if the current one is filled
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to the previous input if backspace is pressed
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    if (isOtpComplete) {
      verifyOtp(); // Call the verify function
      navigate("/home"); // Navigate to home after verification
    } else {
      alert("Please enter the complete OTP.");
    }
  };

  return (
    <>
      <Auth />
      <div className={styles.header}></div>
      <div className={styles.main}>
        <h2>OTP Verification</h2>
        <p>
          We’ve sent an OTP to <strong>{phoneNumber}</strong>!
        </p>
        <div className={styles["otp-input-container"]}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              className={styles["otp-box"]}
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>
        <div className={styles.button}>
          <button onClick={handleVerify} disabled={!isOtpComplete}>
            Verify
          </button>
        </div>
      </div>
    </>
  );
};

export default OtpInput;
// import React, { useState, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios"; // Import Axios
// import Button from "../button/Button";
// import { useAuth } from "../context/AuthContext";
// import styles from "./otpInput.module.css";
// import Auth from "../pages/auth/AuthPage";

// const OtpInput = () => {
//   const location = useLocation();
//   const { phoneNumber } = location.state; // Extract the phone number from state
//   const { token } = useAuth(); // Assuming token is needed for authorization
//   const navigate = useNavigate();

//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const inputRefs = useRef([]);
//   const isOtpComplete = otp.every((digit) => digit !== "");

//   const handleOtpChange = (index, value) => {
//     if (value.length > 1) return; // Prevent entering more than one character
//     const updatedOtp = [...otp];
//     updatedOtp[index] = value;
//     setOtp(updatedOtp);

//     // Move to the next input if the current one is filled
//     if (value && index < otp.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     // Move to the previous input if backspace is pressed
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   // Function to verify OTP using Axios
//   const verifyOtp = async () => {
//     try {
//       const response = await axios.post(
//         "https://dev.backend.mobigarage.com/v1/mp/accounts/verify_otp",
//         {
//           phone: phoneNumber, // Send the phone number
//           otp: otp.join(""), // Send OTP as a single string
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Pass the token in the Authorization header if needed
//             "Content-Type": "application/json", // Set content type to JSON
//           },
//         }
//       );

//       if (response.status === 200) {
//         console.log("OTP verified successfully:", response.data);
//         navigate("/home"); // Navigate to home after successful verification
//       } else {
//         console.error("Error verifying OTP:", response.data.message);
//         alert(`Error: ${response.data.message}`);
//       }
//     } catch (error) {
//       console.error("Network error:", error);
//       alert("Network error. Please try again later.");
//     }
//   };

//   const handleVerify = () => {
//     if (isOtpComplete) {
//       verifyOtp(); // Call the verify function
//     } else {
//       alert("Please enter the complete OTP.");
//     }
//   };

//   return (
//     <>
//       <Auth />
//       <div className={styles.header}></div>
//       <div className={styles.main}>
//         <h2>OTP Verification</h2>
//         <p>
//           We’ve sent an OTP to <strong>{phoneNumber}</strong>!
//         </p>
//         <div className={styles["otp-input-container"]}>
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               type="text"
//               className={styles["otp-box"]}
//               maxLength={1}
//               value={digit}
//               onChange={(e) => handleOtpChange(index, e.target.value)}
//               onKeyDown={(e) => handleKeyDown(e, index)}
//               ref={(el) => (inputRefs.current[index] = el)}
//             />
//           ))}
//         </div>
//         <div className={styles.button}>
//           <button onClick={handleVerify} disabled={!isOtpComplete}>
//             Verify
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OtpInput;
