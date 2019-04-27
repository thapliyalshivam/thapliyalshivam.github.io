import React, {Component} from "react";
import ReactDOM from "react-dom";
import {connect} from 'react-redux';
import "./style.css"
import song from './../../actions/index.js';

import { bindActionCreators } from 'redux';

let buttonClick = ()=>{
    alert("yo yo");
}

const Welcome = (props) => {
    return <h1>Hello, {props.name}</h1>;
   }




class Button extends Component{

constructor(props){
    super(props);
    console.log(props.dispatch);
    this.state = {
        ctr:22,
        enabled:true
    }
}


render(){

return(
    <div>
    <button type="submit" onClick={()=>this.props.song(2,33)}> {this.props.ctr} </button>
<button type="submit" onClick={()=>this.props.incr(1000)}> {this.props.ctr} </button>
</div>
);
}


}


const mapStatetoProp = state=>{
    return{
        ctr:state.ctr,
    };
};

const dispatchtoprop = dispatch=>{
    return{
        incr:(mm)=>{
            console.log("sksnjnsjnsk");
            dispatch({type:"INCR",value:mm})},
        song:bindActionCreators(song,dispatch) 
    };
};

export default connect(mapStatetoProp,dispatchtoprop)(Button);
