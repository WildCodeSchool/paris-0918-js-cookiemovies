import React, { Component } from 'react';

import './Home.css'

import Top from "./Top";
import Corps from "./Corps";
import Bulle from '../logoBulle/Logobulle'
import Footer from '../footer/Footer'
import Background from '../background/Affiche'
import Apiback from './AccueilApi'


import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';





class App extends Component {
  componentDidMount() {
    if (!localStorage.getItem("myMoviesList")) {
      localStorage.setItem("myMoviesList", JSON.stringify([]));
    }
    if (!localStorage.getItem("myMoviesAlert")) {
      localStorage.setItem("myMoviesAlert", JSON.stringify([]));
    }
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
