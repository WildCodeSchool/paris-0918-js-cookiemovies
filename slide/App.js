import React, { Component } from 'react';
import Slide_1 from './Slide_1';
import Slide_2 from './Slide_2';
import Slide_3 from './Slide_3';

class App extends Component {
  render() {
    return (
     <div>
      <Slide_1 />
      <Slide_2 />
      <Slide_3 />
    </div>   
    );
  }
}

export default App;
