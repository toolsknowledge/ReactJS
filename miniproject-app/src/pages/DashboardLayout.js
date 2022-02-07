import React from "react";
import { Link,Outlet } from "react-router-dom";
function DashboardLayout(){
    return(
        <React.Fragment>
            <Link to="/" style={{marginRight:100}}>Products</Link>
            <Link to="/employees" style={{marginRight:100}}>Employees</Link>
            <Link to="/list" style={{marginRight:100}}>List</Link>
            <button>Logout</button>
            <br></br><br></br>
            <Outlet />
        </React.Fragment>
    )
}
export default DashboardLayout;