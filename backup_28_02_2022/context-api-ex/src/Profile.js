import React, { useContext } from "react";
import { globalData } from "./global/global";
function Profile(){
    const {userName} = useContext(globalData);
    return(
        <React.Fragment>
            <h1>{userName}</h1>
        </React.Fragment>
    )
}
export default Profile;