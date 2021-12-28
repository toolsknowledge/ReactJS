import React,{useState} from "react";

function App() {
  const [x,setX] = useState("Hello");
  const [y,setY] = useState(100);
  const [z,setZ] = useState(true);

  const myFun = ()=>{
    setX("Welcome");
    setY(1000);
    setZ(false);
  }


  return (
     <React.Fragment>
        <h1>{x}</h1>
        <h1>{y}</h1>
        <h1>{JSON.stringify(z)}</h1>

        <br></br>

        <button onClick={myFun}>Click Me</button>
     </React.Fragment>
  );
}

export default App;





