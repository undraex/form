import React, { useState } from "react";

import { PineconeLogoIcon } from "./assets/icons/PineconeLogoIcon";

export function Step2({ increaseStep, reduceStep }) {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]*$/;

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      setEmail(value);
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleErrors = () => {
    const errors = {};

    if (!emailRegex.test(email) || email.length === 0) {
      errors.email = "Please provide a valid email address.";
    }

    if (!phoneRegex.test(phoneNumber) || phoneNumber.length === 0) {
      errors.phoneNumber = "Please enter a valid phone number.";
    }

    // if (password.length >= 8) {
    //   errors.password = "Password must be at least 8 characters";
    // }
    if (password.length >= 8) {
      // Proceed with next checks or submit
    } else {
      errors.password = "Password must be at least 8 characters";
    }

    if (confirmPassword !== password || confirmPassword.length === 0) {
      errors.confirmPassword = "Passwords do not match. Please try again";
    }

    setEmailError(errors.email || "");
    setPhoneNumberError(errors.phoneNumber || "");
    setPasswordError(errors.password || "");
    setConfirmPasswordError(errors.confirmPassword || "");

    return errors;
  };

  const increaseStep2 = () => {
    const errors = handleErrors();
    if (Object.keys(errors).length > 0) {
      return;
    } else {
      increaseStep();
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div>
            <PineconeLogoIcon />
            <div className="join inter">Join Us! 😎</div>
            <p className="desc inter">
              Please provide all current information accurately.
            </p>
            <div className="first-name inter">
              <p className="name">Email</p>
              <p className="star">*</p>
            </div>

            <input
              type="text"
              name="email"
              value={email}
              className="input"
              placeholder="Email"
              onChange={handleInputChange}
            />
            {emailError && <div className="errorText inter">{emailError}</div>}

            <div className="last-name inter">
              <p className="name">Phone number</p>
              <p className="star">*</p>
            </div>

            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              className="input"
              placeholder="Phone number"
              onChange={handleInputChange}
            />
            {phoneNumberError && (
              <div className="errorText inter">{phoneNumberError}</div>
            )}

            <div className="username inter">
              <p className="name">Password</p>
              <p className="star">*</p>
            </div>

            <input
              type="password"
              name="password"
              value={password}
              className="input"
              placeholder="Password"
              onChange={handleInputChange}
            />
            {passwordError && (
              <div className="errorText inter">{passwordError}</div>
            )}

            <div className="first-name inter">
              <p className="name">Confirm password</p>
              <p className="star">*</p>
            </div>

            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              className="input"
              placeholder="Confirm password"
              onChange={handleInputChange}
            />
            {phoneNumberError && (
              <div className="errorText inter">{confirmPasswordError}</div>
            )}
          </div>

          <div className="buttonContainer">
            <button className="back inter" onClick={reduceStep}>
              Back
            </button>
            <button className="continue2-3 inter" onClick={increaseStep2}>
              Continue 2/3
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
