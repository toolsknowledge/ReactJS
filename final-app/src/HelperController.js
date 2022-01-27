import React from "react";
import Input from "./Input";
import RadioButtons from "./RadioButtons";
import CheckBoxGroup from "./CheckBoxGroup";
import Select from "./Select";
import TextArea from "./TextArea";

function HelperController(props){
    const { control,...rest } = props;
    switch(control){
        case "input":
            return <Input {...rest}></Input>
        case "radio":
            return <RadioButtons {...rest}></RadioButtons>
        case "checkbox":
            return <CheckBoxGroup {...rest}></CheckBoxGroup>

        case "select":
            return <Select {...rest}></Select>

        case "textarea":
            return <TextArea {...rest}></TextArea>
        default:
            return null;
    }
}

export default HelperController;