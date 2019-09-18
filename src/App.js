import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./Components/Header";
import Card from './Components/Card';
import Footer from './Components/footer';
import Gallery from './Components/Gallery';
import { Route, Router } from 'react-router-dom';

const hello = ({match}) => { return "helloooooo!!"+match.params.project_name };



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="Tech Portfolio" />

        <Route path='/:project_name' component={Gallery} />    
        <div className="container"><Card /> </div>

        <Footer />
        <Route path='/mapi/:project_name' component={hello} />
      </div>
    );
  }
}

export default App;
