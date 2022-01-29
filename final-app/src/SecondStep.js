import React,{useContext} from "react";
import { globalData } from "./global";
import { Formik,Form } from "formik";
import * as Yup from "yup";
import HelperController from "./HelperController";


function SecondStep(){

    const {setCurrentStep} = useContext(globalData);

    const gender_options = [{key:"male",value:"Male"},
                            {key:"female",value:"Female"}];

    const checkbox_options = [
        {"key":"reactjs","value":"reactjs"},
        {"key":"angular","value":"angular"},
        {"key":"vuejs","value":"vuejs"},
        {"key":"nodejs","value":"nodejs"}
    ];


    const countries = [
        {"key":"select country","value":""},
        {"key":"india","value":"India"},
        {"key":"usa","value":"USA"},
        {"key":"canada","value":"Canada"},
        {"key":"uk","value":"London"},
        {"key":"japan","value":"Japan"}
    ];


    const initialValues={
        "gender":"",
        "skills":[],
        "country":"",
        "address":""
    }

    const validationSchema = Yup.object({
        "gender":Yup.string().required("Required !"),
        "country":Yup.string().required("Required !"),
        "address":Yup.string().required("Required !")
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

                            <HelperController control="checkbox"
                                               name="skills"
                                               label="Choose Course"
                                               options={checkbox_options}></HelperController>

                            <HelperController control="select"
                                              name="country"
                                              label="country"
                                              options={countries}></HelperController>

                            <HelperController control="textarea"
                                              name="address"
                                              label="address"></HelperController>
                            
                            
                            <button onClick={()=>setCurrentStep(3)}>Next</button>
                            {/* <button type="submit">Next</button> */}
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