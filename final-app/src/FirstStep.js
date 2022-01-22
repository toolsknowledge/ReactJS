import React,{useContext} from "react";
import { globalData } from "./global";


function FirstStep(){

    const { setCurrentStep } = useContext(globalData);

    return(
        <React.Fragment>
             {/**
              * First Name
              * 
              * Last Name
              * 
              * Email
              * 
              * Phone
              */}
              <br></br><br></br>
              <br></br><br></br>
              <br></br><br></br>
              <br></br><br></br>
              <button onClick={()=>setCurrentStep(2)}>Next</button>
        </React.Fragment>
    )
}

export default FirstStep;