import React, { Component } from "react";
import { connect } from 'react-redux';
import ReactDOM from "react-dom";

import * as projects from '../../data/data.json';

import { bindActionCreators } from "redux";
import "./style.css";

console.log(projects);
console.log("saa")
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
            <img src={require(`../../public/thumbnails/${data.URL}.jpeg`)} />
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

    componentDidMount() {
        this.props.populate(projects.data);
        window.scrollTo(0, 0);
    }

    render() {

      //  this.props.populate(projects.data);
        let item = this.props.match.params.project_name;
        //console.log(item);
      //  console.log(this.props.images);
        let project = this.props.images.filter((a) => a.route == item)[0];
        console.log(JSON.stringify(this.props) + "cdcdcdcd");

        if (this.props.images.length && project!=undefined)
            return (
                <div className="gallery">
                    <div>
                        <img src={require(`../../public/thumbnails/${project.img}.jpeg`)} />
                        <InfoCard links={project} />
                        <GalleryBody name={project.content} />
                        <h4>More Projects</h4>

                    </div>
                </div>
            )
        else
            return (
                <div className="gallery"></div>)
    }


}

const mapStateToProps = state => {
    return {
        carousel: state.carousel,
        images: state.images,
        iscarouselon: state.iscarouselon
    };
};

const dispatchToProps = dispatch => {
    return {
        incr: (mm) => {
            console.log("sksnjnsjnsk");
            dispatch({ type: "INCR", value: mm })
        },
        populate: (images) => {
            dispatch({ type: "DATAPOPULATE", images: images })
        }
    }
}




//export default Gallery;
export default connect(mapStateToProps, dispatchToProps)(Gallery);
