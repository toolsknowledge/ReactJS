import React from "react";
import TextError from "./TextError";
import { Field,ErrorMessage } from "formik";
function Input(props){
    const { label, name, ...rest } = props;
    return(
        <React.Fragment>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest}></Field>
            <ErrorMessage component={TextError} name={name}></ErrorMessage>
        </React.Fragment>
    )
}
export default Input;