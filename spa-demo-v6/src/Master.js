import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Pageone from "./pages/Pageone";
import Pagetwo from "./pages/Pagetwo";
import Pagethree from "./pages/Pagethree";
function Master(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Pageone />}></Route>
                    <Route path="/page_two" element={<Pagetwo />}></Route>
                    <Route path="/page_three" element={<Pagethree />}></Route>
                </Route> 
            </Routes>
        </BrowserRouter>
    )
}
export default Master;