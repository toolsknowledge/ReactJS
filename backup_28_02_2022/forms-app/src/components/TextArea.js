//create the reusable textarea (address)
import React from "react";
import {Field,ErrorMessage} from "formik";
import TextError from "./TextError";
function TextArea(props){
    const {name,label,...rest} = props;
    return(
        <React.Fragment>
             <label htmlFor={name} className="my-label">{label}</label>
             <Field as="textarea" id={name} name={name} {...rest} className="my-input-field"></Field>
             <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </React.Fragment>
    )
}
export default TextArea;
