import React,{useContext} from "react";
import { globalData } from "./global";
import { Formik,Form } from "formik";
import * as Yup from "yup";
import HelperController from "./HelperController";


function SecondStep(){

    const {setCurrentStep} = useContext(globalData);

    const gender_options = [{key:"male",value:"Male"},
                            {key:"female",value:"Female"}];


    const initialValues={
        "gender":""
    }

    const validationSchema = Yup.object({
        "gender":Yup.string().required("Required !")
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
                            <HelperController control="radio"
                                              name="gender"
                                              label="gender"
                                              options={gender_options}></HelperController>

                            {/* <button onClick={()=>setCurrentStep(3)}>Next</button> */}
                            <button type="submit">Next</button>
                            <button onClick={()=>setCurrentStep(1)}>Previous</button>                  
                        </Form>
                        )
                    }
                }

            </Formik>


          
        </React.Fragment>
    )
}

export default SecondStep;