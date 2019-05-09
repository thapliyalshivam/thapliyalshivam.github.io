import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./Components/Header";
import Card from './Components/Card';
import Footer from'./Components/footer';
import Gallery from './Components/Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
 <Header name="Tech Portfolio"/>
      <Gallery/>
      <div className="container"><Card/> </div>
      <Footer/>
       
      </div>
    );
  }
}

export default App;
