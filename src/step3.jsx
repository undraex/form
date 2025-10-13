import React from "react";

export function Step3({ increaseStep, reduceStep }) {
  return (
    <div className="container">
      <div className="card">
        <div>
          <img src="./logo.svg" className="logo"></img>
          <div className="join inter">Join Us! 😎</div>
          <p className="desc inter">
            Please provide all current information accurately.
          </p>
          <div className="first-name inter">
            <p className="first">Date of birth</p>
            <p className="star">*</p>
          </div>
          <div>
            <input type="date" className="input"></input>
          </div>
          <div className="first-name inter">
            <p className="first">Profile image</p>
            <p className="star">*</p>
          </div>

          <div className="imageBg">
            <input type="file" />
          </div>
        </div>

        <div className="btn-container">
          <button className="back  inter" onClick={reduceStep}>
            Back
          </button>
          <button className="continue2-3 inter" onClick={increaseStep}>
            Submit 3/3{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
