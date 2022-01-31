import './App.css';
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import React,{useContext} from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel  from '@mui/material/StepLabel';
import { globalData } from "./global";



function App() {

  const {currentStep,setCurrentStep} = useContext(globalData);


  function showStep(step){
      switch(step.currentStep){
        case 1:
              return <FirstStep></FirstStep>
        case 2:
              return <SecondStep></SecondStep>
        case 3:
              return <ThirdStep></ThirdStep>
      }
  }




  return (
    <div className="App">
      <div className="App-header">
        <Stepper activeStep={currentStep-1} alternativeLabel style={{width:'60%'}}>
           <Step>
              <StepLabel></StepLabel>
           </Step>

           <Step>
              <StepLabel></StepLabel>
           </Step>

           <Step>
              <StepLabel></StepLabel>
           </Step>
        </Stepper>

         
      </div>

      {showStep({currentStep})}


    </div>
  );
}

export default App;
