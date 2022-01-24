import React, {useContext, useEffect, useState} from "react";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel  from "@mui/material/StepLabel";
import "./App.css";
import globalData from "./context-api/global";



function App(){

   // const [num,setNum] = useState(0);


   const {step1} = useContext(globalData);
   console.log("current step....",step1);

   function showStep(step){
      switch(step){
         case 1:
               return <FirstStep></FirstStep>

         case 2:
               return <SecondStep></SecondStep>

         case 3:
               return <ThirdStep></ThirdStep>
      }
   }

   // useEffect(()=>{
   //    setNum(step);
   // },[]);


   return(
            <div className="App">
                 <div className="App-header">
                     <Stepper style={{width:'18%'}} alternativeLabel activeStep="1">
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

            {/* <div>{step}</div> */}

            {showStep({step1})}
            <FirstStep></FirstStep>
            <SecondStep></SecondStep>
            <ThirdStep></ThirdStep>

            </div>
      
   )
}

export default App;


