import React, {Component} from "react";
import ReactDOM from "react-dom";


let buttonClick = ()=>{
    alert("yo yo");
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
return(<button onClick={()=> this.basket()}> Change </button>);
}


}

export default Button;