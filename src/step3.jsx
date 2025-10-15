// import React from "react";
import React, { useState } from "react";
import { PineconeLogoIcon } from "./assets/icons/PineconeLogoIcon";

export function Step3({ increaseStep, reduceStep }) {
  const [url, setUrl] = useState("");

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setUrl(newUrl);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div>
          <PineconeLogoIcon />
          <div className="join inter">Join Us! 😎</div>
          <p className="desc inter">
            Please provide all current information accurately.
          </p>
          <div className="first-name inter">
            <p className="first">Date of birth</p>
            <p className="star">*</p>
          </div>
          <input type="date" className="input"></input>

          <div className="first-name inter">
            <p className="first">Profile image</p>
            <p className="star">*</p>
          </div>
          <input className="imageBg" type="file" onChange={handleInputChange} />
          <img src={url} />
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
