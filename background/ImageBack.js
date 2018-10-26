import React, { Component } from 'react';

class ImageBack extends Component {
  render() {
    const debut = 'https://image.tmdb.org/t/p/w500/';
    return (
      <div>
        <img src={`${debut}${this.props.image}`} />
      </div>
    );
  }
}
export default ImageBack;
