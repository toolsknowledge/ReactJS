import React,{useContext} from "react";
import { globalData } from "./global";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import HelperController from "./HelperController";
import axios from "axios";

function ThirdStep(){

    
    const { setCurrentStep,setFinalData,finalData,formData } = useContext(globalData);

    const initialValues = {
        "dob":null
    };

    const validationSchema = Yup.object({
        "dob":Yup.string().required("Required !").nullable()
    }); 

    const onSubmit = values=>{
        console.log("Hello");
        
        setFinalData({...finalData,values});
        console.log(finalData);
        axios.post("http://localhost:8080/register",finalData).then((posRes)=>{
            console.log(posRes);
        },(errRes)=>{
            console.log(errRes);
        })
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

                                <button onClick={()=>setCurrentStep(2)}>Previous</button>
                                <button type="submit">Submit</button>
                            </Form>
                        )
                    }
                }

            </Formik>


        </React.Fragment>
    )
}

export default ThirdStep;