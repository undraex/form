import React, { useState } from "react";
import { PineconeLogoIcon } from "./assets/icons/PineconeLogoIcon";

export function Step1({ increaseStep1 }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");

  const nameRegex = /^[a-zA-Z]+$/;

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else {
      setUserName(value);
    }
  };

  const handleErrors = () => {
    const errors = {};
    console.log(errors, "first");

    if (!nameRegex.test(firstName) || firstName.length === 0) {
      errors.firstName =
        "First name cannot contain special characters or numbers.";
    }
    if (!nameRegex.test(lastName) || lastName.length === 0) {
      errors.lastName =
        "Last name cannot contain special characters or numbers.";
    }
    if (!nameRegex.test(userName) || userName.length === 0) {
      errors.userName =
        "This username is already taken. Please choose another one.";
    }
    setFirstNameError(errors.firstName || "");
    setLastNameError(errors.lastName || "");
    setUserNameError(errors.userName || "");

    return errors;
  };

  const increaseStep = () => {
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
              <p className="first">First name</p>
              <p className="star">*</p>
            </div>

            <input
              type="text"
              value={firstName}
              name="firstName"
              className="input"
              placeholder="First name"
              onChange={handleInputChange}
            />
            {firstNameError && (
              <div className="text-red-600">{firstNameError}</div>
            )}

            <div className="last-name inter">
              <p className="last">Last name</p>
              <p className="star">*</p>
            </div>
            <div>
              <input
                type="text"
                value={lastName}
                name="lastName"
                className="input"
                placeholder="Last name"
                onChange={handleInputChange}
              />
              {lastNameError && (
                <div className="text-red-600">{lastNameError}</div>
              )}
            </div>
            <div className="username inter">
              <p className="user">Username</p>
              <p className="star">*</p>
            </div>
            <div>
              <input
                type="text"
                value={userName}
                name="userName"
                className="input"
                placeholder="Username"
                onChange={handleInputChange}
              />
              {userNameError && (
                <div className="text-red-600">{userNameError}</div>
              )}
            </div>
          </div>

          <div className="btn-container">
            <button className="continue inter" onClick={increaseStep1}>
              Continue 1/3{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
