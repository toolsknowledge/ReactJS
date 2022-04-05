import React from "react";
import { Field,ErrorMessage } from "formik";
import TextError from "./TextError";
function Input(props){
    const { label,name, ...rest } = props;
    return(
        <div className="input-class">
            <label htmlFor={name} className="my-label">{label}</label>
            <Field id={name} name={name} {...rest} className="my-input-field"></Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </div>
    )
}
export default Input;