import { useState } from 'react';
import './App.css';
import { globalData } from "./global/global";
import Login from "./Login";
import Profile from "./Profile";
function App() {
  const [userName,setUserName] = useState("");
  const [showProfile,setShowProfile] = useState(false);
  return (
    <div className="App">
        <globalData.Provider value={{userName,setUserName,showProfile,setShowProfile}}>
            {showProfile?<Profile></Profile>:<Login></Login>}
        </globalData.Provider>
    </div>
  );
}

export default App;
