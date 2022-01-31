import React,{useContext} from "react";
import { globalData } from "./global";
import { Formik,Form,FieldArray } from "formik";
import HelperController from "./HelperController";
import * as Yup from "yup";

function FirstStep(){

    const { setCurrentStep,setFinalData,finalData } = useContext(globalData);

    const initialValues = {
        "fname" : "",
        "lname" : "",
        "email" : "",
        "phoneNumbers" : [""]
    }

    const validationSchema = Yup.object({
        "fname" : Yup.string().required("Required !").min(3,"Minimum 3 Characters are Required").max(6,"Maximum 6 Characters Are Allowed"),
        "lname" : Yup.string().required("Required !").min(3,"Minimum 3 Characters are Required").max(6,"maximum 6 characters are allowed"),
        "email" : Yup.string().required("Required !").email("Please enter valid email").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"invalid email format")
       
    })

    const onSubmit = values=>{
        setFinalData({...finalData,values})
        setCurrentStep(2);
    }

    return(
        <React.Fragment>
            
              <Formik initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={onSubmit}>
                      {
                          formik=>{
                              return(
                                  <Form>
                                        <HelperController control="input" name="fname" label="First Name"></HelperController>
                                        <HelperController control="input" name="lname" label="Last Name"></HelperController>
                                        <HelperController control="input" name="email" label="Email"></HelperController>
                                        <label htmlFor="Contact Numbers">Contact Numbers</label>
                                        <FieldArray name="phoneNumbers">
                                            {
                                                (my_obj)=>{
                                                    const {form,push,remove} = my_obj;
                                                    const { values,errors } = form;
                                                    const { phoneNumbers } = values;
                                                    
                                                    return <div>
                                                        {
                                                            phoneNumbers.map((element,index)=>(
                                                                <div key={index}>
                                                                    <HelperController name={`phoneNumbers[${index}]`} control="input"></HelperController>
                                                                    {
                                                                        index>0?null:<button onClick={()=>push("")}>+</button>
                                                                    }
                                                                    {
                                                                        index<1?null:<button onClick={()=>remove(index)}>-</button>
                                                                    }
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                }
                                            }
                                        </FieldArray>

                                       
                                       
                                        {/*
                                            onClick={()=>setCurrentStep(2)}
                                        */}
                                        <br></br><br></br>
                                        <button  disabled={!formik.isValid} type="submit" className="my-button">Next</button>
                                  </Form>
                              )
                          }
                      }
                        
                    
              </Formik>



        </React.Fragment>
    )
}

export default FirstStep;