import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "../Card";
import "./style.css";

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

                    <p>Hi, my name is Shivam Thapliyal. I am a  Graphic Designer/Illustrator based in Bangalore working for Flipkart as a product illustrator.
                        I am a Computer Science Engineering graduate who after working as a Nodejs developer for 7 months switched to persue Design and Illustrations. My work ranges from simple geometric composition to 3d renderings. From vintage posters to even coding in CSS and Javascript! I also make tech art projects as well.
                    Wanna say hi?</p>
                </div>

                <div className="horizontal">
                  <div>
                   <h3>Featured</h3>
                    <p>Hi, my name is Shivam Thapliyal. I am a  Graphic Designer/Illustrator based in Bangalore working for Flipkart as a product illustrator.
                        I am a Computer Science Engineering graduate who after working as a Nodejs developer for 7 months switched to persue Design and Illustrations. My work ranges from simple geometric composition to 3d renderings. From vintage posters to even coding in CSS and Javascript! I also make tech art projects as well.
                    Wanna say hi?</p>
                    </div> 
                    <div>
                   <h3>Featured</h3>
                    <p>Hi, my name is Shivam Thapliyal. I am a  Graphic Designer/Illustrator based in Bangalore working for Flipkart as a product illustrator.
                        I am a Computer Science Engineering graduate who after working as a Nodejs developer for 7 months switched to persue Design and Illustrations. My work ranges from simple geometric composition to 3d renderings. From vintage posters to even coding in CSS and Javascript! I also make tech art projects as well.
                    Wanna say hi?</p>
                    </div> 
                    <div>
                   <h3>Featured</h3>
                    <p>Hi, my name is Shivam Thapliyal. I am a  Graphic Designer/Illustrator based in Bangalore working for Flipkart as a product illustrator.
                        I am a Computer Science Engineering graduate who after working as a Nodejs developer for 7 months switched to persue Design and Illustrations. My work ranges from simple geometric composition to 3d renderings. From vintage posters to even coding in CSS and Javascript! I also make tech art projects as well.
                    Wanna say hi?</p>
                    </div> 
                </div>


            </div>




        );
    } 2


}

export default About;