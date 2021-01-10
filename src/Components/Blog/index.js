import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import './style.css';
import { connect } from 'react-redux';

import { bindActionCreators } from "redux";

import Readme from '../../data/posts/readme.md';
import marked from "marked";
import { $CombinedState } from "redux";



// Override function to process image tags to take intenal image
const renderer = {
    image(href, title, text) {
        console.log(href);
        console.log(title);
        console.log(text);

        if (href.slice(0, 4) == "http")
            return false

        return `
    <img src=${require(`../../public/${href}`)}></img>
    `
    }
};

marked.use({ renderer });

class Blog extends React.Component {

    componentDidMount() {
        let blogpage = this.props.match.params.article;
        this.props.setBlogPage(blogpage);

        const readmePath = require(`../../data/posts/${blogpage}.md`);
        fetch(readmePath)
            .then(response => {
                console.log(response);
                return response.text()
            })
            .then(text => {
                this.setState({
                    markdown: marked(text)
                })
            })
    }

    constructor(props) {
        super(props);
        this.state = {
        	markdown: " "
        };
    }


    render() {
        //  const { markdown } = this.state;
        // const markdown = this.state.markdown;
        const { markdown } = this.state;
        //    var markdown = marked( textFetch(blogpage));
        return (
          
            <div className="blog_wrapper" dangerouslySetInnerHTML={{ __html: markdown }}></div>

        )
    }


}




const mapStateToProps = state => {
    return {
        blognumber: state.blog,
    };
};

const dispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        setBlogPage: (blogpage) => dispatch({ type: 'BLOGSET', blog: blogpage }),
    }
}



export default connect(mapStateToProps, dispatchToProps)(Blog);
