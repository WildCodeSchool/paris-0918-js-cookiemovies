import React, { Component } from 'react';
import SlidesInTheater from './SlidesInTheater';
import SlidesNotOut from './SlidesNotOut';
import SlidesOutOfTheater from './SlidesOutOfTheater';


class App extends Component {
  render() {
    return (
     <div>
      <SlidesInTheater />
      <SlidesNotOut />
      <SlidesOutOfTheater />
      
    </div>   
    );
  }
}

export default App;
