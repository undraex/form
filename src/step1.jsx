import React, { useState } from "react";
import { PineconeLogoIcon } from "./assets/icons/PineconeLogoIcon";

export function Step1({ increaseStep }) {
  // const { increaseStep, step } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");

  const [firstNameHasError, setFirstNameHasError] = useState(false);
  const [lastNameHasError, setLastNameHasError] = useState(false);
  const [userNameHasError, setUserNameHasError] = useState(false);
  const getLocalStorageData = () => {
    localStorage.getItem("data");
  };
  console.log(getLocalStorageData());
  const nameRegex = /^[a-zA-Z]+$/;

  const validateField = (name, value) => {
    if (!nameRegex.test(value) || value.length === 0) {
      if (name === "firstName") {
        setFirstNameError(
          "First name cannot contain special characters or numbers."
        );
        setFirstNameHasError(true);
      }
      if (name === "lastName") {
        setLastNameError(
          "Last name cannot contain special characters or numbers."
        );
        setLastNameHasError(true);
      }
      if (name === "userName") {
        setUserNameError(
          "Username cannot contain special characters or numbers."
        );
        setUserNameHasError(true);
      }
    } else {
      if (name === "firstName") {
        setFirstNameError("");
        setFirstNameHasError(false);
      }
      if (name === "lastName") {
        setLastNameError("");
        setLastNameHasError(false);
      }
      if (name === "userName") {
        setUserNameError("");
        setUserNameHasError(false);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName") {
      setFirstName(value);
      validateField(name, value);
    } else if (name === "lastName") {
      setLastName(value);
      validateField(name, value);
    } else if (name === "userName") {
      setUserName(value);
      validateField(name, value);
    }
  };

  const handleErrors = () => {
    const errors = {};

    if (!nameRegex.test(firstName) || firstName.length === 0) {
      errors.firstName =
        "First name cannot contain special characters or numbers.";
      setFirstNameHasError(true);
      setFirstNameError(errors.firstName);
    }
    if (!nameRegex.test(lastName) || lastName.length === 0) {
      errors.lastName =
        "Last name cannot contain special characters or numbers.";
      setLastNameHasError(true);
      setLastNameError(errors.lastName);
    }
    if (!nameRegex.test(userName) || userName.length === 0) {
      errors.userName =
        "Username cannot contain special characters or numbers.";
      setUserNameHasError(true);
      setUserNameError(errors.userName);
    }

    return errors;
  };

  const increaseStep1 = () => {
    const errors = handleErrors();
    if (Object.keys(errors).length > 0) {
      return;
    }

    increaseStep();
    localStorage.setItem(
      "data",
      JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
      })
    );
    localStorage.setItem("currentStep", step + 1);
  };

  return (
    <div className="container">
      <div className="card">
        <div id="gap1">
          <div id="gap">
            <PineconeLogoIcon />
            <div className="join shadow inter">Join Us! 😎</div>
            <p className="desc inter">
              Please provide all current information accurately.
            </p>
          </div>
          <div id="names">
            <div id="gap">
              <div className="first-name inter">
                <p className="name">First name</p>
                <p className="star">*</p>
              </div>
              <input
                type="text"
                value={firstName}
                name="firstName"
                className={`input ${firstNameHasError ? "input-error" : ""}`}
                placeholder="First name"
                onChange={handleInputChange}
              />
              {firstNameError && (
                <div className="errorText inter">{firstNameError}</div>
              )}
            </div>
            <div id="gap">
              <div className="last-name inter">
                <p className="name">Last name</p>
                <p className="star">*</p>
              </div>
              <input
                type="text"
                value={lastName}
                name="lastName"
                className={`input ${lastNameHasError ? "input-error" : ""}`}
                placeholder="Last name"
                onChange={handleInputChange}
              />
              {lastNameError && (
                <div className="errorText inter">{lastNameError}</div>
              )}
            </div>
            <div id="gap">
              <div className="username inter">
                <p className="name">Username</p>
                <p className="star">*</p>
              </div>
              <input
                type="text"
                value={userName}
                name="userName"
                className={`input ${userNameHasError ? "input-error" : ""}`}
                placeholder="Username"
                onChange={handleInputChange}
              />
              {userNameError && (
                <div className="errorText inter">{userNameError}</div>
              )}
            </div>
          </div>
        </div>

        <div className="buttonContainer">
          <button className="continue inter" onClick={increaseStep1}>
            Continue 1/3{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
