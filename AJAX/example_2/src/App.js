import React,{useEffect,useState} from "react";

function App() {
  const [arr,setArr] = useState([]);
  useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((posRes)=>{
          setArr(posRes);
     },(errRes)=>{
       console.log(errRes);
     })
  },[]);



  return (
    <React.Fragment>
        <h1>{JSON.stringify(arr)}</h1>
    </React.Fragment>
  );
}

export default App;
