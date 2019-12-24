import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "../Card";
import  Footer from "../footer";
import * as details from '../../data/about.json';
import "./style.css";

const List = (props) => {
    return (

        <ul className="listing">
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
                        <h3> {Object.keys(element)[0]}</h3>
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
                <div>
                <h1>About me</h1>
                <div className="horizontal">
              <div className="img_wrap"> <img src={require(`../../public/thumbnails/about.jpg`)}></img></div>
                    <div className = "bio_wrap">
                        <p>{details.data.bio}</p>
                        <p>Contact: <b>+91-8859185606</b></p>
                        <p>Mail: <b>thapliyalshivam@gmail.com</b></p>
                        <Section data={details.data.data} />
                    </div>
                </div>
             <Footer/>

             </div>
            </div>




        );
    } 2


}

export default About;