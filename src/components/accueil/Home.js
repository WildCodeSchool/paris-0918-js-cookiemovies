import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';


import './Home.css'

import Top from "./Top";
import Corps from "./Corps";
import Bulle from '../logoBulle/Logobulle'
import Footer from '../footer/Footer'
import Apiback from './AccueilApi'









class App extends Component {
  state={
    register: true,
  }
  
  componentDidMount() {
    if (!localStorage.getItem("myMoviesList")) {
      localStorage.setItem("myMoviesList", JSON.stringify([]));
    }
    if (!localStorage.getItem("myMoviesAlert")) {
      localStorage.setItem("myMoviesAlert", JSON.stringify([]));
    }
  }
  handleClick = () =>{
    this.setState({
      register: false,
    })
  }

  render() {
    return (
      <div className="body">
   
      <Top />
      <Apiback />
      <Corps />
      <Bulle />
      <Footer />
      
      </div>
    );
  }
}

export default App;
