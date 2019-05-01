import React, { Component } from "react";
import {connect} from 'react-redux';
import ReactDOM from "react-dom";
import "./style.css";

class Gallery extends Component {


    constructor(props) {
        super(props);
    }



    render() {
        return (
            (2==2?<p>{this.props.heading}pixxa</p>:null)
        )
    }


}

const mapStateToProps = state =>{
    return{
        heading:state.heading
    }
}

const dispatchToProps = dispatch=>{
    return{
        incr:(mm)=>{
            console.log("sksnjnsjnsk");
            dispatch({type:"INCR",value:mm})},
    }
}




export default connect(mapStateToProps,dispatchToProps)(Gallery);