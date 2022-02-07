import React,{useRef} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){

    const user_email = useRef(null);
    const user_password = useRef(null);

    const navigate = useNavigate();


    const login = ()=>{
        axios.post("http://localhost:8080/login",{"email":user_email.current.value,"password":user_password.current.value}).then((posRes)=>{
            const {data} = posRes;
            if(data.login == "success"){
                window.localStorage.setItem("login_status",JSON.stringify(data));
                navigate("/dashboard");
            }else{
                alert("Login Fail");
            }
            
        },(errRes)=>{
            console.log(errRes);
        });
    }
    return(
        <React.Fragment>
            <input type="email" ref={user_email} placeholder="enter email"></input>

            <input type="password" ref={user_password} placeholder="enter password"></input>

            <button onClick={login}>Login</button>
        </React.Fragment>
    )
}

export default Login;