import React from "react";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";

function HelperController(props){
    const {control,...rest} = props;
    switch(control){
        case "input":
                return <Input {...rest}></Input>
        case "textarea":
                return <TextArea {...rest}></TextArea>
        case "select":
                return <Select {...rest}></Select>
       default:
                return null;
    }
}
export default HelperController;