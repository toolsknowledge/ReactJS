import React,{useState} from "react";
import Second from "./Second";
function First(){
    const [msg,setMsg] = useState("Hello_1");
    const [num,setNum] = useState(100);
    const [flag,setFlag] = useState(true);
    const [arr,setArr] = useState(["Hello_1","Hello_2","Hello_3","Hello_4","Hello_5"]);
    const [obj,setObj] = useState({"sub_one":"ReactJS","sub_two":"NodeJS","sub_three":"MongoDB"});
    const [products,setProducts] = useState([{"p_id":111,"p_name":"p_one","p_cost":10000},
                                             {"p_id":222,"p_name":"p_two","p_cost":20000},
                                             {"p_id":333,"p_name":"p_three","p_cost":30000},
                                             {"p_id":444,"p_name":"p_four","p_cost":40000},
                                             {"p_id":555,"p_name":"p_five","p_cost":50000}])
    const myFun = ()=>{
        setMsg("Welcome");
        setNum(200);
        setFlag(false);
    };

    return(
        <React.Fragment>
             <Second msg={msg}
                     num={num}
                     flag={flag}
                     arr={arr}
                     obj={obj}
                     products={products}></Second>
            <br></br>
            <button onClick={myFun}>Click Me</button>
        </React.Fragment>
    )
}
export default First;