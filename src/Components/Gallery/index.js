import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";

let endpoint = "https://dog.ceo/api/breeds/image/random/6"


let a = [1, 2, 3, 4]

class Card extends Component {


    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }


    componentDidMount() {

        fetch(endpoint)
            .then(data => {
                return data.json();
            })
            .then(data => {
                this.setState({ images: data.message });
                console.log(this.state.images)
            });

    }


    basket() {
        console.log("dickkkkk");
        this.props.nameUpdation("sc")
    }


    render() {
        return (
            // <h1>sd</h1>
            this.state.images.map((c, idt) =>
                <div class="fill">
                    <img key={idt} src={c}></img>
                </div>
            )
        );
    }


}

export default Card;