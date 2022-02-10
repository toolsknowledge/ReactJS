import React from "react";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import Pagethree from "./Pagethree";
import { Routes,Route,Link} from "react-router-dom";
function Portfolio(){
    return(
        <React.Fragment>
            <Link to="portfolio">Pageone</Link>
            <Link to="page_two">Pageone</Link>
            <Link to="page_three">Pageone</Link>

            <Routes>
                <Route path="portfolio" element={<Pageone />}></Route>
                <Route path="page_two" element={<Pagetwo />}></Route>
                <Route path="page_three" element={<Pagethree />}></Route>
            </Routes>
        </React.Fragment>
    )
}
export default Portfolio;