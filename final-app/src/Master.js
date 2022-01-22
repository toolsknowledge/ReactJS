import React, { useState } from "react";
import { globalData } from "./global";
import App from "./App";

function Master(){

    const [currentStep,setCurrentStep] = useState(1);
    const [userData,setUserData] = useState([]);
    const [finalData,setFinalData] = useState([]);


    function formData(){
        console.log("final data");
    }

    return(
        <React.Fragment>
             <globalData.Provider value={{currentStep,setCurrentStep,userData,setUserData,finalData,setFinalData,formData}}>
                 <App></App>
             </globalData.Provider>
        </React.Fragment>
    )
}

export default Master;
