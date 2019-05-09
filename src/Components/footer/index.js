import React, { Component } from "react";

import ReactDOM from "react-dom";
import Card from "../Card";
import "./style.css";

class Footer extends Component {


    render() {

        return (
            <div className="footer">
            <a href="mailto:thapliyalshivam@gmail.com"><i>mail</i></a>
            <a href="https://www.twitter.com/coffee_caffine"><i>twitter</i></a>
            <a href="https://www.medium.com/@thapliyalshivam"><i>medium</i></a>
            <a href="https://www.codepen.com/thapliyalshivam"><i>codepen</i></a>
            </div>
        );

    }


}

export default Footer;