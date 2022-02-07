import React from "react";
import DashboardLayout from "../pages/DashboardLayout";
import Products from "./Products";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function Dashboard(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardLayout/>}>
                    <Route index element={<Products />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Dashboard;