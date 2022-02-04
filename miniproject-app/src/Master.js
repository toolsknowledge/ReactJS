import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./components/Login";
function Master(){
    return(
        
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route index element={<Login></Login>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
       
    )
}
export default Master;