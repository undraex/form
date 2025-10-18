import { StrictMode, useState } from "react";
import "./App.css";

import { Step1 } from "./step1.jsx";
import { Step2 } from "./step2.jsx";
import { Step3 } from "./step3.jsx";
import { Step4 } from "./step4.jsx";

export function App() {
  const getCurrentStep = () => {
    return Number(localStorage.getItem("currentStep"));
  };
  const [step, setStep] = useState(getCurrentStep());
  function increaseStep() {
    setStep(step + 1);
  }
  function reduceStep() {
    localStorage.setItem("currenStep", step - 1);
    setStep(step - 1);
  }
  return (
    <div>
      {step === 1 && <Step1 increaseStep={increaseStep} />}
      {step === 2 && (
        <Step2 increaseStep={increaseStep} reduceStep={reduceStep} />
      )}
      {step === 3 && (
        <Step3 increaseStep={increaseStep} reduceStep={reduceStep} />
      )}
      {step === 4 && <Step4 />}
    </div>
  );
}
