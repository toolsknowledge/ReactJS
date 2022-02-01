// import React from "react";
// import {Link,Outlet,NavLink} from "react-router-dom";
// function Layout(){
//     return(
//         <React.Fragment>
//             <NavLink to="/" style={{marginRight:100}}>Pageone</NavLink>
//             <NavLink to="/page_two" style={{marginRight:100}}>Pagetwo</NavLink>
//             <NavLink to="/page_three" style={{marginRight:100}}>Pagethree</NavLink>
            
//             <Outlet />
//         </React.Fragment>
//     )
// }
// export default Layout;





import { Outlet, Link,NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeStyle={{color:"red"}}>Pageone</NavLink>
          </li>
          <li>
            <NavLink to="/page_two" activeStyle={{color:"red"}}>Pagetwo</NavLink>
          </li>
          <li>
            <NavLink to="/page_three" activeStyle={{color:"red"}}>Pagethree</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;