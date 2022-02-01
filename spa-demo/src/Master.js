import React from "react";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import Pagethree from "./Pagethree";
import { BrowserRouter as Router, Route, NavLink,Routes } from "react-router-dom";
function Master(){
    return(
       <Router>
             <NavLink to="/">Pageone</NavLink>
              <NavLink to="/page_two">Pagetwo</NavLink>
              <NavLink to="/page_three">Pagethree</NavLink>
          <Routes>
            
              <Route path="" element={Pageone}></Route>
              <Route path="page_two" element={Pagetwo}></Route>
              <Route path="page_three" element={Pagethree}></Route>
          </Routes>
       </Router>
    )
}

export default Master;