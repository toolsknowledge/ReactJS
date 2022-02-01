import React from "react";
import Pageone from "./pages/Pageone";
import Pagetwo from "./pages/Pagetwo";
import Pagethree from "./pages/Pagethree";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App(){
  return(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />} />
              <Route index element={<Pageone />} />
          </Routes>
      </BrowserRouter>
  )
}
export default App;


/*
        SPA
        ***
    V3                  V4         V5       V6

*/

