import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "../Card";
import "./style.css";

import { Link } from "react-router-dom";

class Header extends Component {

    constructor() {
        super();
        this.state = {
            project: "project"
        }
        this.stateFixer = this.stateFixer.bind(this);
    }

    stateFixer(newName) {
        this.setState({
            project: newName || "Shivam Thapliyal"
        });
    }


    render() {

        return (
            <div className="spacer">
                 <div className="header">
                     <Link to="/">
                    <h2>Shivam Thapliyal</h2></Link>
                </div> 
               
            </div>
        );

    }


}

export default Header;