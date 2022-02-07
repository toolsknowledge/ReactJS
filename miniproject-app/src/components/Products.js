import React, { useEffect } from "react";
import axios from "axios";

function Products(){
    useEffect(()=>{
         let str = window.localStorage.getItem("login_status");
         let obj = JSON.parse(str);
         let token = obj.token;
         axios.get(`http://localhost:8080/products`,{headers:{"token":token}}).then((posRes)=>{
            console.log(posRes);
         },(errRes)=>{
             console.log(errRes);
         });
    },[]);
    
    return(
        <React.Fragment>
            
        </React.Fragment>
    )
};
export default Products;