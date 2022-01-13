import React from "react";
import {Field,ErrorMessage} from "formik";
import TextError from "./TextError";
function RadioButtons(props){
    const {name,label,options,...rest} = props;
    return(
        <div>
            <label htmlFor={name} className="my-label">{label}</label>
            <Field name={name} className="my-input-field">
                {
                    (obj)=>{
                        const { field } = obj;
                        //console.log(field);
                        return options.map(option=>{
                            
                            return <React.Fragment key={option.key}>
                                <input
                                    type='radio'
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value === option.value}
                                />
                                <label>{option.key}</label>
                            </React.Fragment>
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </div>
    )
};
export default RadioButtons;
