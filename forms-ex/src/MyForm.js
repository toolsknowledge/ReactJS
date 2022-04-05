import React from "react";
import {Formik,Form} from "formik";
import FormController from "./components/FormController";
import * as Yup from "yup";
function MyForm(){
    const initialValues = {
        "fname":"",
        "lname":"",
        "email":"",
        "country":"",
        "address":"",
        "gender":"",
        "skills":[]
    };
    const validationSchema = Yup.object({
        "fname":Yup.string().required("Required !").min(3,"Minimum 3 characters are Required !").max(6,"Maximum 6 characters are allowed"),
        "lname":Yup.string().required("Required !").min(2,"Minumum 2 characters are Required !").max(5,"Maximum 5 characters are allowed"),
        "email":Yup.string().required("Required !").email("Please Enter Valid Format"),
        "country":Yup.string().required("Required !"),
        "address":Yup.string().required("Required !")
    });
    const onSubmit = values =>{
        console.log(values);
    }

    const dropdownOptions = [{key:"choose country",value:""},
                             {key:"India", value:"India"},
                             {key:"Russia", value:"Russia"},
                             {key:"Ukraine",value:"Ukraine"},
                             {key:"USA",value:"USA"}];

    const gender_options = [{key:"male",value:"Male"},
                            {key:"female",value:"Female"}];

    const checkbox_options = [{key:"Angular14",value:"Angular14"},
                              {key:"ReactJS",value:"ReactJS"},
                              {key:"VueJS",value:"VueJS"},
                              {key:"NodeJS",value:"NodeJS"},
                              {key:"MongoDB",value:"MongoDB"}];


    return(
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {formik=>{
                    return(
                        <Form>
                            <FormController control="input" 
                                            label="First Name" 
                                            name="fname" 
                                            type="text"></FormController>

                            <FormController control="input"
                                            label="Last Name"
                                            name="lname"
                                            type="text"></FormController>

                            <FormController control="input"
                                            label="Email"
                                            name="email"
                                            type="email"></FormController>
                            
                            <FormController control="select"
                                            name="country"
                                            label="Country"
                                            options={dropdownOptions}></FormController>

                            <FormController control="textarea"
                                            name="address"
                                            label="Address"></FormController>

                            <FormController control="radiobuttons"
                                            name="gender"
                                            label="Gender"
                                            options={gender_options}></FormController>

                            <FormController control="checkbox"
                                            name="skills"
                                            label="Choose Courses"
                                            options={checkbox_options}></FormController>
                            

                            <button type="submit" disabled={!formik.isValid}>Register</button>

                        </Form>
                    )
                }}
        </Formik>
    )
}
export default MyForm;