import React, { Component } from 'react';
// import SlidesInTheater from './SlidesInTheater';
// import SlidesNotOut from './SlidesNotOut';
// import SlidesOutOfTheater from './SlidesOutOfTheater';
import TrailerApi from './TrailerApi'



class App extends Component {
  componentDidMount(){
    
    // if(!localStorage.getItem('myMoviesList')){
    //   localStorage.setItem('myMoviesList',JSON.stringify([]));
    // }
    // if(!localStorage.getItem('myMoviesAlert')){
    //   localStorage.setItem('myMoviesAlert',JSON.stringify([]));
    // }
}
  
  render() {
    return (
     <div>
      {/* <SlidesInTheater />
      <SlidesNotOut />
      <SlidesOutOfTheater /> */}
      <TrailerApi />

      
    </div>   
    );
  }
}

export default App;
