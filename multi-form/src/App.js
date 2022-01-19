import React from "react";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";

import Stepper from "@mui/material/Stepper";
import Step  from "@mui/material/Step";
import StepLabel  from "@mui/material/StepLabel";


function App() {
  return (
    <div>
        <Stepper activeStep={1} alternativeLabel>
            <Step>
               <StepLabel>1</StepLabel>
            </Step>

            <Step>
               <StepLabel>2</StepLabel>
            </Step>

            <Step>
               <StepLabel>3</StepLabel>
            </Step>
        </Stepper>

        <FirstStep />
        <SecondStep />
        <ThirdStep />
    </div>
  );
}

export default App;
