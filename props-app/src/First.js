import React from "react";
import Second from "./Second";
function First(){
    return(
        <React.Fragment>
            <Second key1={"Hello_1"}
                    key2={100}
                    key3={true}></Second>
        </React.Fragment>
    )
}
export default First;
