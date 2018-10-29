import React, { Component } from 'react';
import logo from './logo.svg';

import Header from "./components/Header";
import SlidesInTheater from "./components/SlidesInTheater";
import SlidesNotOut from "./components/SlidesNotOut";
import SlidesOutOfTheater from "./components/SlidesOutOfTheater";
import NowPlaying from "./components/NowPlaying";
import Upcoming from "./components/Upcoming";
import Top from "./components/Top";
import AccueilApi from "./components/AccueilApi";
import Corps from "./components/Corps";
import TrailerApi from "./components/TrailerApi";

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
        <Header />
        <SlidesInTheater />
        <SlidesNotOut />
        <SlidesOutOfTheater />
        <NowPlaying />
        <Upcoming />
        <TrailerApi />
        <Top />
        <AccueilApi />
        <Corps />
      </div>
    );
  }
}

export default App;
