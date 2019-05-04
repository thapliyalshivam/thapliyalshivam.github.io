import React, { Component } from "react";
import {connect} from 'react-redux';
import ReactDOM from "react-dom";
import "./style.css";

class Gallery extends Component {


    constructor(props) {
        super(props);
    }



    render() {
        return (<div>
            (2==2?<p>{this.props.carousel.title}pixxa</p>:null)
            <img src={this.props.carousel.img}/>
            </div>
        )
    }


}

const mapStateToProps = state =>{
    return{
        carousel:state.carousel
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