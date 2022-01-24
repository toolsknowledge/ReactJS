import React, { useState } from "react";
import App from "./App";
import globalData from "./context-api/global";

function Master(){

    const [step1,setStep] = useState(2);


    return(
        <React.Fragment>
            <globalData.Provider value={{step1,setStep}}>
                <App/>
            </globalData.Provider>
        </React.Fragment>
    )
}

export default Master;