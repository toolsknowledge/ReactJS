import React from "react";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import Pagethree from "./Pagethree";
import { BrowserRouter as Router, Route, NavLink,Routes } from "react-router-dom";
function Master(){
    return(
       <Router>
           <NavLink to="/page_one" activeStyle={{color:"green"}} exact={true} strict style={{marginRight:100}}>Page_One</NavLink>
           <NavLink to="/page_two" activeStyle={{color:"green"}} exact={true} strict style={{marginRight:100}}>Page_Two</NavLink>
           <NavLink to="/page_three" activeStyle={{color:"green"}} exact={true} strict style={{marginRight:100}}>Page_Three</NavLink>
           <br></br><br></br>
           <Route to="/page_one" component={Pageone} exact={true} strict></Route>
           <Route to="/page_two" component={Pagetwo} exact={true} strict></Route>
           <Route to="/page_three" component={Pagethree} exact={true} strict></Route>
       </Router>
    )
}

export default Master;