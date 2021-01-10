import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./Components/Header";
import Card from './Components/Card';
import Footer from './Components/footer';
import Gallery from './Components/Gallery';
import About from './Components/About';
import {Switch,  Route, Router, Link } from 'react-router-dom';
import Blog from './Components/Blog';
import BlogPage from './Components/BlogPage';


const hello = ({match}) => { return "helloooooo!!"+match.params.project_name };



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="Tech Portfolio" />
        <Switch> 
        <Route path='/about' component={About} />   
        <Route path='/blog/:article' component={Blog} />   
        <Route path='/blog/' component={BlogPage} />   
        <Route path='/:project_name' component={Gallery} />    
        <Card /> 
        </Switch> 
        <Footer about_visibile={true}/>

      </div>
    );
  }
}

export default App;
