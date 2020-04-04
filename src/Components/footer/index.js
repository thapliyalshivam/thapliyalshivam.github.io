import React, { Component } from "react";

import ReactDOM from "react-dom";
import Card from "../Card";
import "./style.css";
import { Link } from "react-router-dom";
class Footer extends Component {


    render() {
        return (
            <div className="footer">
            <a href="mailto:thapliyalshivam@gmail.com"><i>mail</i></a>
            <a href="https://www.twitter.com/coffee_caffine"><i>twitter</i></a>
            <a href="https://www.medium.com/@thapliyalshivam"><i>medium</i></a>
            <a href="https://www.codepen.com/thapliyalshivam"><i>codepen</i></a>
            {   this.props.about_visibile ?   <Link to="/about"><i>About me</i></Link>:null }
            </div>
        );
    }
}

export default Footer;