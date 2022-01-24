import React,{useContext} from "react";
import { globalData } from "./global";
import { Formik,Form } from "formik";
import HelperController from "./HelperController";
import * as Yup from "yup";

function FirstStep(){

    const { setCurrentStep } = useContext(globalData);

    const initialValues = {
        "fname" : ""
    }

    const validationSchema = Yup.object({
        "fname" : Yup.string().required("Required !").min(3,"Minimum 3 Characters are Required").max(6,"Maximum 6 Characters Are Allowed")
    })

    const onSubmit = values=>{
        console.log(values);
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


                                        <br></br><br></br>
                                        <button onClick={()=>setCurrentStep(2)} disabled={!formik.isValid}>Next</button>
                                  </Form>
                              )
                          }
                      }
                        
                    
              </Formik>



        </React.Fragment>
    )
}

export default FirstStep;