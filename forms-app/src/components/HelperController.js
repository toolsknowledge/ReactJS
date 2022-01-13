import React from "react";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import RadioButtons from "./RadioButtons";
import CheckBoxGroup from "./CheckBoxGroup";

function HelperController(props){
    const {control,...rest} = props;
    switch(control){
        case "input":
                return <Input {...rest}></Input>
        case "textarea":
                return <TextArea {...rest}></TextArea>
        case "select":
                return <Select {...rest}></Select>
        case "radio":
                return <RadioButtons {...rest}></RadioButtons>
        case "checkbox":
                return <CheckBoxGroup {...rest}></CheckBoxGroup>
       default:
                return null;
    }
}
export default HelperController;