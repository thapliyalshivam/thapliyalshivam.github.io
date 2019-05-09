import React, { Component } from "react";
import { connect } from 'react-redux';
import ReactDOM from "react-dom";
import "./style.css";

const Passages = (props) => {
    return (
        <div>
            <h3>{props.heading}</h3>
            {props.text.map((data, i) =>
                <p>{data}</p>)}
        </div>
    )
};

const GalleryBody = (props) => (
    props.name.map((data, i) => (
        data.type === "TEXT" ?
            <Passages heading={data.heading} text={data.paragraphs} /> :
            <img src={require(`../../../public/thumbnails/${data.URL}.jpeg`)} />
    )
    ));


const InfoCard = (props) =>
    (<div>
        <h2>{props.links.title}</h2>
        <h5>{props.links.desc}</h5>
        <div className="links">
            <a href={props.links.git_link}><i>view code</i></a>
            <a href={props.links.live_link}><i>live demo</i></a>
        </div>
    </div>
    );



class Gallery extends Component {


    constructor(props) {
        super(props);
    }


    render() {

        if (this.props.iscarouselon)
            return (
                <div className="gallery">
                    <img src={ require(`../../../public/thumbnails/${this.props.carousel.img}.jpeg`)  } />
                    <InfoCard links={this.props.carousel} />
                    <GalleryBody name={this.props.carousel.content} />
                </div>
            )
        else
            return null
    }


}

const mapStateToProps = state => {
    return {
        carousel: state.carousel,
        iscarouselon: state.iscarouselon
    }
}

const dispatchToProps = dispatch => {
    return {
        incr: (mm) => {
            console.log("sksnjnsjnsk");
            dispatch({ type: "INCR", value: mm })
        },
    }
}




export default connect(mapStateToProps, dispatchToProps)(Gallery);