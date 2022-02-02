import React from "react";
import { Link, Outlet } from "react-router-dom";
function Layout(){
    return(
        <React.Fragment>
            <Link to="/" style={{marginRight:100}}>Pageone</Link>
            <Link to="/page_two" style={{marginRight:100}}>Pagetwo</Link>
            <Link to="/page_three">Pagethree</Link>
            <br></br><br></br>
            <Outlet />
        </React.Fragment>
    )
}
export default Layout;