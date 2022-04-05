import React from "react";
import {Field,ErrorMessage} from "formik";
import TextError from "./TextError";

function Select(props){
    const {label,name,options,...rest} = props;
    return(
        <React.Fragment>
            <div className="form-control">
                <label htmlFor={name}>{label}</label>
                <Field as="select" name={name} id={name} {...rest}>
                    {options.map(option=>{
                        return (<option key={option.key} value={option.value}>
                                {option.key}
                        </option>)
                    })}
                </Field>
                <ErrorMessage name={name} component={TextError}></ErrorMessage>
            </div>
        </React.Fragment>
    )
}
export default Select;