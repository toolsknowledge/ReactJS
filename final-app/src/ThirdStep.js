import React,{useContext} from "react";
import { globalData } from "./global";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import HelperController from "./HelperController";

function ThirdStep(){

    const {setCurrentStep,formData} = useContext(globalData);

    const initialValues = {
        "dob":null
    };

    const validationSchema = Yup.object({
        "dob":Yup.string().required("Required !").nullable()
    }); 

    const onSubmit = values=>{
        console.log(values);
    }



    return(
        <React.Fragment>
            <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                { 
                    (formik)=>{
                        return(
                            <Form>
                                <HelperController control="date"
                                                  name="dob"
                                                  label="Date Of Birth"></HelperController>
                            </Form>
                        )
                    }
                }

            </Formik>


            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <button onClick={()=>setCurrentStep(2)}>Previous</button>
            <button onClick={formData}>Submit</button>
        </React.Fragment>
    )
}

export default ThirdStep;