import React from "react";

const memoEx = React.memo(function Child(props){
    console.log("child rendering");
    return(
        <React.Fragment>
            <h1>{props.key1}</h1>
        </React.Fragment>
    )
})
export default memoEx;