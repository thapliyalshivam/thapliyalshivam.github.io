import React, { Component } from "react";
import ReactDOM from "react-dom";

import { connect } from 'react-redux';
import "./style.css";
import * as projects from '../../data/data.json';
import updateCarousel from '../../actions'
import { bindActionCreators } from "../../../../../Library/Caches/typescript/3.4.3/node_modules/redux";
console.log(projects.data);


let endpoint = "https://dog.ceo/api/breeds/image/random/6"


let a = [1, 2, 3, 4]

class Card extends Component {


    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.populate(projects.data.map(i=>i.img))
    }


    basket = (a) => {
        console.log(a);
    }


    render() {
        return (
            // <h1>sd</h1>
            this.props.images.map((c, idt) =>
                <div className="fill" key={idt.toString()} onClick={() => this.props.updateCarousel(idt)}>
                    <img key={idt} src={c}></img>
                    <h2 className="titles"> Verola Patterns</h2>
                    <h3 className="captions"> An interactive art installation using nodejs for
                        a realtime experience of the visuals.</h3>
                </div>
            )
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