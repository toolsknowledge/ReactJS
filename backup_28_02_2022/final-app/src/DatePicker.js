import React from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field,ErrorMessage } from "formik";
import TextError from "./TextError";

function DatePicker(props){
    const {name,label,...rest} = props;
    return(
        <React.Fragment>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    (obj)=>{
                        const { field,form } = obj;
                        const { value } = field;
                        const { setFieldValue } = form

                       
                        return (
                            <DateView id={name}
                                      {...field}
                                      {...rest}
                                      selected={value}
                                      onChange={val => setFieldValue(name, val)}>

                            </DateView>
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </React.Fragment>
    )
}

export default DatePicker;