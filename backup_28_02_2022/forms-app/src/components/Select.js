import React from "react";
import {Field,ErrorMessage} from "formik";
import TextError from "./TextError";
function Select(props){
    const {name,label,options,...rest} = props;
    return(
        <React.Fragment>
            <label htmlFor={name} className="my-label">{label}</label>
            <Field as="select" className="my-input-field" name={name} id={name} {...rest}>
                {
                    options.map(op=>{
                        return(
                            <option key={op.key} value={op.value}>{op.key}</option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </React.Fragment>
    )
}
export default Select;