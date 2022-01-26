import React from "react";
import { Field,ErrorMessage } from "formik";
import TextError from "./TextError";

function RadioButtons(props){
    const {name,label,options,...rest} = props;
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                 {
                     (obj)=>{
                         const { field } = obj;
                         return options.map(option=>{
                             return(
                                 <React.Fragment key={option.key}>
                                     <input type="radio"
                                            id={option.value}
                                            {...field}
                                            {...rest}
                                            value={option.value}
                                            checked={field.value === option.value}></input>
                                    <label htmlFor={option.name}>{option.key}</label>
                                    <ErrorMessage name={name} component={TextError}></ErrorMessage>
                                 </React.Fragment>
                             )
                         })
                     }
                 }
            </Field>
        </div>
    )
}

export default RadioButtons;