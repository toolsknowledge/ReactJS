import React,{ Component } from "react";
class RestAPIEx extends Component{
    constructor(){
        super();
        this.state = {
            result:{}
        }
    }


    componentDidMount(){
        fetch("https://www.w3schools.com/angular/customers.php").then(res=>res.json()).then((posRes)=>{
            console.log(posRes);
            this.setState({
                result : posRes
            })
        },(errRes)=>{
            console.log(errRes);
        })       
    }


    render(){
        return(
            <React.Fragment>
                {JSON.stringify(this.state.result)}
            </React.Fragment>
        )
    }
}
export default RestAPIEx;