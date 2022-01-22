import React,{useContext} from "react";
import { globalData } from "./global";

function SecondStep(){

    const {setCurrentStep} = useContext(globalData);



    return(
        <React.Fragment>
            {
                /**
                 * radio buttons
                 * 
                 * check boxes
                 * 
                 * dropdowns
                 */

                
            }

            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <button onClick={()=>setCurrentStep(3)}>Next</button>
            <button onClick={()=>setCurrentStep(1)}>Previous</button>
        </React.Fragment>
    )
}

export default SecondStep;