import React from "react";
function Second(props){
    return(
        <React.Fragment>
            <p>String Data....{props.msg}</p>
            <hr></hr>
            <p>Number Data....{props.num}</p>
            <hr></hr>
            <p>Boolean Data....{JSON.stringify(props.flag)}</p>
            <hr></hr>
            {props.arr.map((element,index)=>(
                <p key={index}>{element}</p>
            ))}
            <hr></hr>
            <p>{JSON.stringify(props.obj)}</p>
            <hr></hr>
            <table>
                <tr>
                    <th>SNO</th>
                    <th>P_ID</th>
                    <th>P_NAME</th>
                    <th>P_COST</th>
                </tr>
                {props.products.map((element,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{element.p_id}</td>
                        <td>{element.p_name}</td>
                        <td>{element.p_cost}</td>
                    </tr>
                ))}
            </table>
        </React.Fragment>
    )
}
export default Second;