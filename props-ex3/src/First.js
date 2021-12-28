import React from "react";
import Second from "./Second";
function First(){
    return(
        <React.Fragment>
            <Second key1="Hello_1">
                Hello_2
            </Second>
        </React.Fragment>
    )
}
export default First;