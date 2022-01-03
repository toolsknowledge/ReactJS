import React, { useEffect, useState } from "react";
import Child from "./Child";
function Parent(){
    const [num,setNum] = useState(100);

    //useEffect() is the hook
    //this hook will execucte after component rendering
    //in general, we will make rest api calls here
    //Ex. GET,POST,PUT,DELETE,......
    useEffect(()=>{
       setInterval(()=>{
           setNum(num+1);
       },1000);
    },[]);


    return(
        <React.Fragment>
            <Child key1={num}></Child>
        </React.Fragment>
    )
}
export default Parent;