import React from "react";

function MyForm(){

    const myFun = (event)=>{
        event.preventDefault();
        console.log(event.target);
    }


    return(
       <React.Fragment>
           <form onSubmit={myFun} name="myForm">
               <div className="form-control">
                   <label>First Name</label>
                   <input type="text" id="fname" name="fname" placeholder="First Name"></input>
               </div>

               <div className="form-control">
                   <label>Last Name</label>
                   <input type="text" id="lname" name="lname" placeholder="Last Name"></input>
               </div>

               <div className="form-control">
                   <label>Email</label>
                   <input type="email" id="email" name="email" placeholder="Email"></input>
               </div>

               <div className="form-control">
                   <button type="submit">Submit</button>
               </div>
           </form>
       </React.Fragment> 
    )
}

export default MyForm;