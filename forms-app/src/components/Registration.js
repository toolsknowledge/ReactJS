import React,{useContext} from "react";
import HelperController from "./HelperController";
import { Formik,Form,FieldArray,Field } from "formik";
import * as Yup from "yup";
import { contextData } from "../context/context";
function Registration(){
    const {formData,setFormData} = useContext(contextData);
    const initialValues = {
        "fname":"",
        "lname":"",
        "email":"",
        "phoneNumbers":[""]
    };
    const validationSchema = Yup.object({
        "fname":Yup.string().required("Can't Left Empty !").max(8,"Reached Max Limit !").min(5,"Minimum 5 Characters Are Required"),
        "lname":Yup.string().required("Can't Left Empty !").max(8,"Reached Max Limit !").min(2,"Minimum 2 Characters Are Required"),
        "email":Yup.string().required("Can't Left Empty !").email("Enter Valid Email").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"invalid email format")
    })
    const onSubmit = values=>{
        //console.log(values);
        setFormData({values})
    }

    return(
        <div className="master-form">
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {
                formik=>{
                    return(
                        <Form>
                            <HelperController control="input"
                                              type="text"
                                              name="fname"
                                              label="First Name"></HelperController>

                            <HelperController control="input"
                                              type="text"
                                              name="lname"
                                              label="Last Name"></HelperController>

                            <HelperController control="input"
                                              type="email"
                                              name="email"
                                              label="Email"></HelperController>

                            <br></br>

                            <label htmlFor="Phone Numbers">Phone Numbers</label>
                            <FieldArray name="phoneNumbers">
                                {
                                    (obj)=>{
                                        const { form,push,remove } = obj;
                                        const { values } = form;
                                        const { phoneNumbers } = values;
                                        console.log( phoneNumbers );
                                        return <div>
                                            {
                                                phoneNumbers.map((element,index)=>(
                                                    <div key={index}>
                                                        <Field name={`phoneNumbers[${index}]`} type="text" className="array-styles"></Field>
                                                        {
                                                            index>0?(<button onClick={()=>remove(index)} 
                                                                     className="btn btn-danger btn-sm">-</button>):null
                                                        }
                                                        {
                                                            index>0?null:<button onClick={()=>push("")} className="btn btn-success btn-sm">+</button>
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    }
                                }
                            </FieldArray>
                           
                          
                           
                            <button type="submit" disabled={!formik.isValid} className="btn btn-primary btn-sm">Next</button>
                        </Form>
                    )
                }
            }
        </Formik>
        </div>
    )
}
export default Registration;