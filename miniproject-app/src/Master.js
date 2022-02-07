import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
function Master(){
    return(
        
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route index element={<Login></Login>}></Route>
                        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
       
    )
}
export default Master;