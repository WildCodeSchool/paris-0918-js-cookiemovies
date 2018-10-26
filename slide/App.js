import React, { Component } from 'react';

// import Header from './Header';
// import SlidesInTheater from './SlidesInTheater';
// import SlidesNotOut from './SlidesNotOut';
// import SlidesOutOfTheater from './SlidesOutOfTheater';
// import NowPlaying from './NowPlaying'
// import Upcoming from './Upcoming'
import Top from './Top'
import AccueilApi from './AccueilApi'
import Corps from './Corps'
import TrailerApi from './TrailerApi'

import './App.css'



class App extends Component {
  componentDidMount(){
    
    if(!localStorage.getItem('myMoviesList')){
      localStorage.setItem('myMoviesList',JSON.stringify([]));
    }
    if(!localStorage.getItem('myMoviesAlert')){
      localStorage.setItem('myMoviesAlert',JSON.stringify([]));
    }
}
  
  render() {
    return (
     <div className="body">
      {/* <Header />
      <SlidesInTheater />
      <SlidesNotOut />
      <SlidesOutOfTheater /> 
      <NowPlaying />
      <Upcoming />
      <TrailerApi/> */}
      <Top />
      <AccueilApi />
      <Corps />

      

    

      
     </div>   
    );
  }
}

export default App;
