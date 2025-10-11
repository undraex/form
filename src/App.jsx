import { StrictMode, useState } from "react";
import "./App.css";
import { Step } from "./step1.jsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/step1" element={<step1 />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [user, setUser] = useState("");

  return (
    <div className="container">
      <div className="card">
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
          <input className="input"></input>
        </div>
        <div className="last-name inter">
          <p className="last">Last name</p>
          <p className="star">*</p>
        </div>
        <div>
          <input className="input"></input>
        </div>
        <div className="username inter">
          <p className="user">Username</p>
          <p className="star">*</p>
        </div>
        <div>
          <input className="input"></input>
        </div>
        <div>
          <button className="continue1 inter">Continue 1/3 </button>
        </div>
      </div>
    </div>
  );
}

export default App;
