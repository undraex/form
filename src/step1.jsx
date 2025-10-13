import React from "react";

export function Step1({ increaseStep }) {
  return (
    <>
      <div className="container">
        <div className="card">
          <div>
            <img src="./logo.svg" className="logo"></img>
            <div className="join inter">Join Us! 😎</div>
            <p className="desc inter">
              Please provide all current information accurately.
            </p>
            <div className="first-name inter">
              <p className="first">First name</p>
              <p className="star">*</p>
            </div>
            <div>
              <input
                type="text"
                className="input"
                placeholder="Placeholder"
              ></input>
            </div>
            <div className="last-name inter">
              <p className="last">Last name</p>
              <p className="star">*</p>
            </div>
            <div>
              <input
                type="text"
                className="input"
                placeholder="Placeholder"
              ></input>
            </div>
            <div className="username inter">
              <p className="user">Username</p>
              <p className="star">*</p>
            </div>
            <div>
              <input
                type="text"
                className="input"
                placeholder="Placeholder"
              ></input>
            </div>
          </div>

          <div className="btn-container">
            <button className="continue inter" onClick={increaseStep}>
              Continue 1/3{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
