import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
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