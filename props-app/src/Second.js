import React from "react";
function Second(props){
    return(
        <React.Fragment>
            <h1>{props.key1}</h1>
            <h1>{props.key2}</h1>
            <h1>{JSON.stringify(props.key3)}</h1>
        </React.Fragment>
    )
}; 
export default Second; 