import React from "react";

export function Step2({ increaseStep, reduceStep }) {
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
              <p className="first">Email</p>
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
              <p className="last">Phone number</p>
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
              <p className="user">Password</p>
              <p className="star">*</p>
            </div>
            <div>
              <input
                type="text"
                className="input"
                placeholder="Placeholder"
              ></input>
            </div>
            <div className="first-name inter">
              <p className="first">Confirm password</p>
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
            <button className="back inter" onClick={reduceStep}>
              Back
            </button>
            <button className="continue2-3 inter" onClick={increaseStep}>
              Continue 2/3
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
