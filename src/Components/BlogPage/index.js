import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import './style.css';
import { Link } from "react-router-dom";

import * as bloglist from '../../data/blog.json';


console.log(bloglist.data);

const Listing = (props) => (
  bloglist.data.filter(list=>list.show)
  .map((data, i) => (
    <Link to={data.route}>
      <div className="listing_card">
        <h1>{data.name}</h1>
        <p>{data.desc}</p>
        <p><b>{data.date}</b></p>
      </div>
    </Link>
  )
  ));





class BlogPage extends React.Component {

  // componentDidMount() {
  //   }

  render() {

    return (
      <div className="blog_listing">
        <div className="intro">
          <h1>Blog page</h1>
          <h5>A collection page of experimental works, learnings and daily rough showcase</h5>
        </div>
        <Listing />
      </div>

    )
  }


}

export default BlogPage;
   // "fsevents": "^2.0.7",