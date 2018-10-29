import React, { Component } from 'react';

class ImageBack extends Component {
  render() {
    const debutURL =
      'https://image.tmdb.org/t/p/w500/'; /*debut adresse url api pour fusionner l'image*/
    return (
      <div>
        <img src={`${debutURL}${this.props.image}`} />
      </div> /*fusion de adresse url avec l'argument image dans affiche.js*/
    );
  }
}
export default ImageBack;
