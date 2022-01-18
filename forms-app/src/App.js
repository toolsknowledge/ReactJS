import './App.css';
import Registration from "./components/Registration";
import rocket  from "./assets/images/rocket.png";
import { contextData } from "./context/context";
import { useState } from 'react';

function App() {
  const [formData,setFormData] = useState({});
  console.log("form data....",formData);
  return (

    <contextData.Provider value={{formData,setFormData}}>
      <div className="row">
          <div className="col-md-5">
              <Registration></Registration>
          </div>
          {/* <div className="col-md-7">
              <img src={rocket} className='img-fluid w-100'></img>
          </div> */}
      </div>
    </contextData.Provider>
  );
}

export default App;
