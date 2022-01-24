import React,{useEffect,useState} from "react";
import axios from "axios";

function App() {

  const [arr,setArr] = useState([]);



  useEffect(()=>{
    axios.get("https://www.w3schools.com/angular/customers.php").then((posRes)=>{
        const {data} = posRes;
        const {records} = data;
        setArr(records);
    },(errRes)=>{
      console.log(errRes);
    })
  },[]);
  

  
  return (
    <React.Fragment>
          <table border="1"
                 cellPadding="10"
                 cellSpacing="10"
                 align="center">
              <tr>
                <th>NAME</th>
                <th>CITY</th>
                <th>COUNTRY</th>
              </tr>
              {arr.map((element,index)=>(
                 <tr>
                    <td>{element.Name}</td>
                    <td>{element.City}</td>
                    <td>{element.Country}</td>
                 </tr>
              ))}


          </table>
    </React.Fragment>
  );
}

export default App;
