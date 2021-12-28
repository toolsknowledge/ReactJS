import React,{useState} from "react";

function App() {

  const [arr,setArr] = useState(["hello_1","hello_2","hello_3","hello_4","hello_5"]);

  const myFun = ()=>{
    setArr( [...arr,"hello"] );
  }

  const [arr1,setArr1] = useState([{"p_id":111,"p_name":"p_one","p_cost":10000},
                                   {"p_id":222,"p_name":"p_two","p_cost":20000},
                                   {"p_id":333,"p_name":"p_three","p_cost":30000},
                                   {"p_id":444,"p_name":"p_four","p_cost":40000},
                                   {"p_id":555,"p_name":"p_five","p_cost":50000}])


  return (
      <React.Fragment>
          {
              arr.map( (a,b)=>(
                  <h1 key={b}>{a}</h1>
              ) )
          }

          <table border="1px"
                 cellPadding={10}
                 cellSpacing={10}
                 align="center">
              <tr>
                <th>SNO</th>
                <th>P_ID</th>
                <th>P_NAME</th>
                <th>P_COST</th>
              </tr>
              {arr1.map((element,index)=>(
                  <tr key={index}>
                      <td>{index+1}</td>
                      <td>{element.p_id}</td>
                      <td>{element.p_name}</td>
                      <td>{element.p_cost}</td>
                  </tr>
              ))}
          </table>


          <button onClick={myFun}>Click Me</button>
      </React.Fragment>
  );
}

export default App;
