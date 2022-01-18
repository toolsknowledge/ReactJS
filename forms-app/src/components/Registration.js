import React,{useContext} from "react";
import HelperController from "./HelperController";
import { Formik,Form,FieldArray,Field } from "formik";
import * as Yup from "yup";
import { contextData } from "../context/context";
function Registration(){

    const country = [
        {key:"--- select country ---",value:""},
        {key:"india",value:"India"},
        {key:"usa",value:"USA"},
        {key:"uk",value:"London"},
        {key:"japan",value:"Japan"}
    ]

    const gender_options = [
        {"key":"male","value":"male"},
        {"key":"female","value":"female"}
    ];

    const checkbox_options = [
        {"key":"angular","value":"angular"},
        {"key":"reactjs","value":"reactjs"},
        {"key":"vuejs","value":"vuejs"},
        {"key":"nodejs","value":"nodejs"}
    ];    




    const {formData,setFormData} = useContext(contextData);
    const initialValues = {
        "fname":"",
        "lname":"",
        "email":"",
        "phoneNumbers":[""],
        "address":"",
        "country":"",
        "gender":"",
        "skills":[],
        "courseDate":null
    };
    const validationSchema = Yup.object({
        "fname":Yup.string().required("Can't Left Empty !").max(8,"Reached Max Limit !").min(5,"Minimum 5 Characters Are Required"),
        "lname":Yup.string().required("Can't Left Empty !").max(8,"Reached Max Limit !").min(2,"Minimum 2 Characters Are Required"),
        "email":Yup.string().required("Can't Left Empty !").email("Enter Valid Email").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"invalid email format"),
        "address":Yup.string().required("Required !"),
        "country":Yup.string().required("Required !"),
        "gender":Yup.string().required("Required !"),
        "courseDate": Yup.date().required('Required').nullable()
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
                           
                            

                            <HelperController control="textarea"
                                              name="address"
                                              label="Address"></HelperController>
                            

                            <HelperController control="select"
                                              name="country"
                                              label="country"
                                              options={country}></HelperController>

                            <HelperController control="radio"
                                              name="gender"
                                              label="gender"
                                              options={gender_options}></HelperController>

                            <HelperController control="checkbox"
                                              name="skills"
                                              label="select subjects"
                                              options={checkbox_options}></HelperController>

                                
            <HelperController
              control='date'
              label='Course date'
              name='courseDate'
            />



                            <br></br>

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