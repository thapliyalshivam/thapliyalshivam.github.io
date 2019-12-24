import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "../Card";
import * as details from '../../data/about.json';
import "./style.css";

const List = (props) => {
    return (

            <ul>
                {props.listItem.map(element => (
                    <li><p>{element.title}</p></li>
                ))}
            </ul>
    )
};


const Section = (props) => {
    return (

        <div className="horizontal">
            {props.data.map(element => (
                <React.Fragment>
                     <div>
                    <h5> {Object.keys(element)[0]}</h5>
                    <List listItem={element[Object.keys(element)[0]]} />
                    </div>
                </React.Fragment>
            ))}
 </div>

    )
};


class About extends Component {



    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div className="about_wrapper">
                <h1>About me</h1>
                <div className="horizontal">
                    <img src={require(`../../public/thumbnails/about.jpg`)}></img>
                    <p>{details.data.bio}</p>
                </div>

                    <Section data={details.data.data} />
            </div>




        );
    } 2


}

export default About;