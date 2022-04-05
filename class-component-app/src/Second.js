import React,{ Component } from "react";
class Second extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                {this.props.key1}
                {this.props.key2}
                {JSON.stringify(this.props.key3)}
                <table border="1"
                       align="center"
                       cellPadding={10}
                       cellSpacing={10}>
                    <tr>
                        <th>SNO</th>
                        <th>P_ID</th>
                        <th>P_NAME</th>
                        <th>P_COST</th>
                    </tr>
                
                
                {this.props.key4.map((element,index)=>(
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
}
export default Second;