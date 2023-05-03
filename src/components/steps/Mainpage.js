import React, { useState } from "react";
import Stepper from "../Stepper";
import StepperControl from "../StepperControl";
import { UseContextProvider } from "../../contexts/StepperContext";

import Account from "./Account";
import Details from "./Details";
import Payment from "./Payment";
import Seminars from "./Seminars";
import Final from "./Final";
import Header from "./Header";

function Mainpage() {

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Account Information",
    "Personal Details",
    "Payment",
    "Seminars",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Payment />;
      case 4:
        return <Seminars />;  
      case 5:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-4/4">
      <Header />
      <section class="multi_step_form">  <div id="msform" >
      {/* Stepper */}
      <div className="horizontal container mt-5 " >
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
      </div></section>
    </div>
  );
}

export default Mainpage;
