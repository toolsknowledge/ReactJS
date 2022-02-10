import React, { useEffect, useState } from "react";
import axios from "axios";

function Products(){

    const [products,setProducts] = useState([]);



    useEffect(()=>{
         let str = window.localStorage.getItem("login_status");
         let obj = JSON.parse(str);
         let token = obj.token;
         axios.get(`http://localhost:8080/products`,{headers:{"token":token}}).then((posRes)=>{
            const {data} = posRes;
            setProducts(data);
         },(errRes)=>{
             console.log(errRes);
         });
    },[]);
    
    return(
        <React.Fragment>
                {JSON.stringify(products)}
        </React.Fragment>
    )
};
export default Products;