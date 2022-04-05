import React from "react";

/*
    1) Form State (Form Data)

    2) Form Submission

    3) Error
*/
import { useFormik } from "formik";




function MyForm(){

    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            channel:""
        },
        onSubmit : values=>{
            console.log(values);
        },
        validate : values=>{
            let errors={};

            if(!values.name){
                errors.name = "Name Required !";
            }

            if(!values.email){
                errors.email = "Email Required !";
            }

            if(!values.channel){
                errors.channel = "Channel Required !";
            }

            return errors;
        }
    });


    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
                {formik.errors.name ? <div className="err">{formik.errors.name}</div> : null}



                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
                {formik.errors.email ? <div className="err">{formik.errors.email}</div> : null}



                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel}/>
                {formik.errors.channel ? <div className="err">{formik.errors.channel}</div> : null}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default MyForm;