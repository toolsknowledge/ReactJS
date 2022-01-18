import React from "react";
import { Field,ErrorMessage } from "formik";
import TextError from "./TextError";

function CheckBoxGroup(props){
    const {label,name,options,...rest} = props;
    return(
        <div>
            <label htmlFor={name} className="my-label">{label}</label>
            <Field name={name} className="my-input-field">
                {
                    (obj)=>{
                        const { field } = obj;
                        return options.map(option=>{
                            return(
                                <React.Fragment key={option.key}>
                                <input
                                    type='checkbox'
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value.includes(option.value)}
                                ></input>
                                <label htmlFor={option.value}>{option.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage component={TextError} name={name} />
        </div>
    )
}
export default CheckBoxGroup;