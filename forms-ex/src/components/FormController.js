import React from "react";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import RadioButtons from "./RadioButtons";
import CheckBox from "./CheckBox";
function FormController(props){
    const {control,...rest} = props;
    switch(control){
        case "input":
            return <Input {...rest} />
        case "select":
            return <Select {...rest} />
        case "textarea":
            return <TextArea {...rest}></TextArea>
        case "radiobuttons":
            return <RadioButtons {...rest}></RadioButtons>
        case "checkbox":
            return <CheckBox {...rest}></CheckBox>
        default:
            return null;
    }
}
export default FormController;