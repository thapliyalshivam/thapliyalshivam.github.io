import React, { Component } from "react";
import ReactDOM from "react-dom";

import { connect } from 'react-redux';
import "./style.css";
import * as projects from '../../data/data.json';
import updateCarousel from '../../actions'
import { bindActionCreators } from "redux";

import { Link } from "react-router-dom";


console.log(projects.data);


let endpoint = "https://dog.ceo/api/breeds/image/random/6"


let a = [1, 2, 3, 4]

class Card extends Component {


    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.populate(projects.data);
    }


    basket = (a) => {
        console.log(a);
    }


    render() {
        return (

            
            // <h1>sd</h1>


            // this.props.images.map((c, idt) =>
            //     <div className="fill" key={c.id} onClick={() => this.props.updateCarousel(c.id)}>
            //         <img  src={require(`../../../public/thumbnails/${c.img}.jpeg`)}></img>
            //         <h2 className="titles"> {c.title}</h2>
            //         <h3 className="captions"> {c.desc}</h3>
            //     </div>


            <div className="container">

           { this.props.images.map((c, idt) =>
                 <Link to={ c.route}>
                    <div className="fill" key={c.id} /*onClick={() => this.props.updateCarousel(c.id)}*/>
                        <img src={require(`../../public/${c.img}`)}></img>
                        <h2 className="titles"> {c.title}</h2>
                        <h3 className="captions"> {c.desc}</h3>
                    </div>
                 </Link>
            )}
            </div>
            
        );
    }


}

const mapStatetoProp = state => {
    return {
        images: state.images
    };
}


const dispatchtoProp = dispatch => {
    return {
        populate: (images) => {
            dispatch({ type: "DATAPOPULATE", images: images })
        },
        incr: (mm) => {
            console.log("sksnjnsjnsk");
            dispatch({ type: "INCR", value: mm })
        },
        updateCarousel: bindActionCreators(updateCarousel, dispatch)
    };
};
export default connect(mapStatetoProp, dispatchtoProp)(Card);