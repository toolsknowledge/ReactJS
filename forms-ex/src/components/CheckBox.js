import React from "react";
import {Field,ErrorMessage} from "formik";
import TextError from "./TextError";
function CheckBox(props){
    const {label,name,options,...rest} = props;
    return(
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({field})=>{
                        return options.map((option)=>{
                            return(
                                <React.Fragment key={option.key}>
                                    <input type="checkbox"
                                           id={option.value}
                                           {...field}
                                           {...rest}
                                           value={option.value}
                                           checked={field.value.includes(option.value)}></input>
                                    <label htmlFor={name}>{option.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </div>
    )
}
export default CheckBox;