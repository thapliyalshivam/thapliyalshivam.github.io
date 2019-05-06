import React, { Component } from "react";
import {connect} from 'react-redux';
import ReactDOM from "react-dom";
import "./style.css";

const Passages = (props) => {return(
    <div>
    <h3>{props.heading}</h3>
   { props.text.map((data,i) =>
   <p>{data}</p>)}
    </div>
    )};

 const GalleryBody = (props) => (
    props.name.map((data,i) =>(
       data.type==="TEXT" ?  
       <Passages  heading={data.heading}text={data.paragraphs}/>:
       <img  src={data.URL}/>
    )
    ));
class Gallery extends Component {


    constructor(props) {
        super(props);
    }


    render() {

        if (this.props.iscarouselon)
        return (
        <div className="gallery">
            (2==2?{<p>{this.props.carousel.title}pixxa</p>}:Null)
            <img src={this.props.carousel.img}/>

            <GalleryBody name={this.props.carousel.content} />
            </div>
        )
        else
        return null
    }


}

const mapStateToProps = state =>{
    return{
        carousel:state.carousel,
        iscarouselon: state.iscarouselon
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