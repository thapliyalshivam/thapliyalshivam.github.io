import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./style.css"

let buttonClick = ()=>{
    alert("yo yo");
}

const Welcome = (props) => {
    return <h1>Hello, {props.name}</h1>;
   }



class Button extends Component{

constructor(props){
    super(props);
    this.state = {
        enabled:true
    }
}

basket(){
    console.log("dickkkkk");
    this.props.nameUpdation("sc")
}


render(){
   
return(
    <div>
<button onClick={()=> this.basket()}> Change </button>
</div>
);
}


}

export default Button;