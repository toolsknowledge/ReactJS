import React from "react";
import Child from "./Child";

function Parent(){
    const myFun = (arg1,arg2,arg3)=>{
        console.log(arg1, arg2, arg3);
    };
    return(
        <React.Fragment>
            <Child key1={myFun}></Child>
        </React.Fragment>
    )
}

export default Parent;