import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import './style.css';
import { Link } from "react-router-dom";

import * as bloglist from '../../data/blog.json';


console.log(bloglist.data);

const Listing = (props) => (
  bloglist.data.map((data, i) => (
    <Link to={data.route}>
      <div>
        <h1>{data.name}</h1>
      </div>
    </Link>
  )
  ));





class BlogPage extends React.Component {

  // componentDidMount() {
  //   }


  render() {

    return (
      // <h1>bwhbfjhdb</h1>     
      <Listing />
    )
  }


}

export default BlogPage;