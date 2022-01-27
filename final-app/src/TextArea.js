import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function TextArea(props){
    const { name,label,...rest } = props;
    return(
        <React.Fragment>
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" name={name} id={name} {...rest}></Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </React.Fragment>
    )
}

export default TextArea;