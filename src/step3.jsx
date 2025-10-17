// // import React from "react";
// import React, { useState } from "react";
// import { PineconeLogoIcon } from "./assets/icons/PineconeLogoIcon";
// import { ImgIcon } from "./assets/icons/ImgIcon";

// export function Step3({ increaseStep, reduceStep }) {
//   const [url, setUrl] = useState("");

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const newUrl = URL.createObjectURL(file);
//       setUrl(newUrl);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <div>
//           <PineconeLogoIcon />
//           <div className="join inter">Join Us! 😎</div>
//           <p className="desc inter">
//             Please provide all current information accurately.
//           </p>
//           <div className="first-name inter">
//             <p className="name">Date of birth</p>
//             <p className="star">*</p>
//           </div>
//           <input type="date" className=" input" />

//           <div className="first-name inter">
//             <p className="name">Profile image</p>
//             <p className="star">*</p>
//           </div>

//           {!url && (
//             <>
//               <label htmlFor="fileUpload" className="customUploadButton">
//                 <ImgIcon />
//                 Add image
//               </label>

//               <input
//                 id="fileUpload"
//                 className="hiddenFileInput"
//                 type="file"
//                 name="profileImage"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//             </>
//           )}
//           {url && (
//             <div>
//               <img
//                 src={url}
//                 alt="Uploaded Preview"
//                 style={{ maxWidth: "100%", height: "auto" }}
//               />
//             </div>
//           )}
//         </div>

//         <div className="buttonContainer">
//           <button className="back  inter" onClick={reduceStep}>
//             Back
//           </button>
//           <button className="continue2-3 inter" onClick={increaseStep}>
//             Submit 3/3{" "}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { PineconeLogoIcon } from "./assets/icons/PineconeLogoIcon";
import { ImgIcon } from "./assets/icons/ImgIcon";

export function Step3({ increaseStep, reduceStep }) {
  const [url, setUrl] = useState("");
  const [dob, setDob] = useState("");
  const [errors, setErrors] = useState({
    dob: false,
    image: false,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setUrl(newUrl);
      setErrors((prev) => ({ ...prev, image: false })); // clear image error
    }
  };

  const handleRemoveImage = () => {
    setUrl("");
    setErrors((prev) => ({ ...prev, image: true }));
  };

  const handleSubmit = () => {
    const dobError = dob.trim() === "";
    const imageError = url === "";

    if (dobError || imageError) {
      setErrors({ dob: dobError, image: imageError });
      return;
    }

    // Proceed to next step
    increaseStep();
  };

  return (
    <div className="container">
      <div className="card">
        <div id="gap1">
          <div id="gap">
            <PineconeLogoIcon />
            <div className="join inter">Join Us! 😎</div>
            <p className="desc inter">
              Please provide all current information accurately.
            </p>
          </div>

          <div id="gap">
            <div className="first-name inter">
              <p className="name">Date of birth</p>
              <p className="star">*</p>
            </div>
            <input
              type="date"
              className={`input ${errors.dob ? "inputError" : ""}`}
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
                setErrors((prev) => ({ ...prev, dob: false }));
              }}
            />
            {errors.dob && (
              <p className="errorText inter">Date of birth is required.</p>
            )}
          </div>
          <div id="gap">
            <div className="first-name inter">
              <p className="name">Profile image</p>
              <p className="star">*</p>
            </div>

            {!url && (
              <>
                <label
                  htmlFor="fileUpload"
                  className="customUploadButton inter"
                >
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
                {errors.image && (
                  <p className="errorText inter">Image can't be blank.</p>
                )}
              </>
            )}

            {url && (
              <div className="imagePreviewContainer">
                <img src={url} style={{ width: "416px", height: "180px" }} />
                <button
                  className="removeImageButton"
                  onClick={handleRemoveImage}
                >
                  ×
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="buttonContainer">
          <button className="back inter" onClick={reduceStep}>
            Back
          </button>
          <button className="continue2-3 inter" onClick={handleSubmit}>
            Submit 3/3
          </button>
        </div>
      </div>
    </div>
  );
}
