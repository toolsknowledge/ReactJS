import React from "react";
import Third from "./Third";
function Second(props){
    console.log(props.key1);
    return(
        
        <React.Fragment>
            {/* <h1>{props.key1}</h1> */}
            <h1>{props.children}</h1>

            <Third {...props} key2="Welcome"></Third>
        </React.Fragment>
    )
}
export default Second;