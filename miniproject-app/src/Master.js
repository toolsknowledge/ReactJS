import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
function Master(){
    return(
                <Routes>
                    <Route path="/" element={<Login></Login>}></Route>
                    <Route path="dashboard/*" element={<Dashboard></Dashboard>}></Route>
                </Routes>
         
    )
}
export default Master;