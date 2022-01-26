import React from "react";
import Input from "./Input";
import RadioButtons from "./RadioButtons";

function HelperController(props){
    const { control,...rest } = props;
    switch(control){
        case "input":
            return <Input {...rest}></Input>
        case "radio":
            return <RadioButtons {...rest}></RadioButtons>
        default:
            return null;
    }
}

export default HelperController;