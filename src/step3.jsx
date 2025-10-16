// import React from "react";
import React, { useState } from "react";
import { PineconeLogoIcon } from "./assets/icons/PineconeLogoIcon";
import { ImgIcon } from "./assets/icons/ImgIcon";

export function Step3({ increaseStep, reduceStep }) {
  const [url, setUrl] = useState("");

  const handleImageChange = (e) => {
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
            <p className="name">Date of birth</p>
            <p className="star">*</p>
          </div>
          <input type="date" className=" input" />

          <div className="first-name inter">
            <p className="name">Profile image</p>
            <p className="star">*</p>
          </div>
          {/* 
          <div>
            <input
              id={!url && "imageBg"}
              type="file"
              onChange={handleImageChange}
            />

            <ImgIcon />
            <img src={url} />
          </div> */}
          {!url && (
            <>
              <label htmlFor="fileUpload" className="customUploadButton">
                <ImgIcon />
                Add image
              </label>

              <input
                id="fileUpload"
                className="hiddenFileInput"
                type="file"
                name="profileImage"
                accept="image/*"
                onChange={handleImageChange}
              />
            </>
          )}
          {url && (
            <div>
              <img
                src={url}
                alt="Uploaded Preview"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          )}
        </div>

        <div className="buttonContainer">
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
