import React from "react";
import Products from "./Products";
import Employees from "./Employees";
import Lists from "./Lists";
import { Routes,Route,Link } from "react-router-dom";

function Dashboard(){
    
    const logout = ()=>{
        console.log("Logout");
    }
    
    return(
        
            <Routes>
                <Link to="products" style={{marginRight:100}}>Products</Link>
                <Link to="employees" style={{marginRight:100}}>Employees</Link>
                <Link to="lists" style={{marginRight:100}}>Lists</Link>
                <button onClick={logout}>Logout</button>

                <Route path="products" element={<Products></Products>}></Route>
                <Route path="employees" element={<Employees></Employees>}></Route>
                <Route path="lists" element={<Lists></Lists>}></Route>
            </Routes>
        
    )
}
export default Dashboard;