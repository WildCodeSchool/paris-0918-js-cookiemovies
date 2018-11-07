import React, { Component } from 'react';

import './App.css'

// import Top from "./components/accueil/Top";
// import AccueilApi from "./components/accueil/AccueilApi";
// import Corps from "./components/accueil/Corps";
// import Bulle from './components/logoBulle/Logobulle';
// import Footer from './components/footer/Footer';

// import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css'; 
// import 'mdbreact/dist/css/mdb.css';

import FicheFilms from "./components/synopfilm/FicheFilms";

// import Header from "./components/header/Header";
import SlidesInTheater from "./components//slides/SlidesInTheater";
import SlidesNotOut from "./components//slides/SlidesNotOut";
import SlidesOutOfTheater from "./components/slides/SlidesOutOfTheater";


// import NowPlaying from "./components/NowPlaying";
// import Upcoming from "./components/Upcoming";
// import TrailerApi from "./components/TrailerApi";


import './App.css';

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
      {/* <FicheFilms /> */}

      {/* <Top />
      <AccueilApi />
      <Corps />
      <Bulle />
      <Footer /> */}

        {/* <Header />*/}
        {/* <SlidesInTheater /> */}
        <SlidesNotOut />
        <SlidesOutOfTheater /> 

        {/* <NowPlaying />
        <Upcoming />
        <TrailerApi /> */}
       
      </div>
    );
  }
}

export default App;
