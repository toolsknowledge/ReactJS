import React from "react";
import { Field,ErrorMessage } from "formik";
import TextError from "./TextError";

function CheckBoxGroup(props){
    const {label,name,options,...rest} = props;
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    (obj)=>{
                        const {field} = obj;
                        return options.map(option=>{
                            return(
                                <React.Fragment key={option.key}>
                                    <input type="checkbox"
                                           id={option.value}
                                           {...field}
                                           {...rest}
                                           value={option.value}
                                           checked={field.value.includes(option.value)}></input>
                                    <label htmlFor={options.key}>{option.key}</label>
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
export default CheckBoxGroup;