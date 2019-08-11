import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "../Card";
import "./style.css";

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
            <div>
                 <div className="header">
                    <h2>Shivam Thapliyal</h2>
                </div> 
               
            </div>
        );

    }


}

export default Header;