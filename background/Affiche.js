import React, { Component } from 'react';
import ImageBack from './ImageBack';
import './Affiche.css';

class Affiche extends Component {
  state = {
    tabStream: [] /* creation tableau vide pour pouvoir afficher les objets(img) dans le composant*/,
    tabStream_2: [],
  };

  getAffiche = async () => {
    const api_key =
      '01e9bc62175f5c7905cce953865a930f'; /*cle perso du site dbmovie*/

    const recup_data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
    ); /* demande api pour 20img*/
    const recup_data_2 = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=2`,
    ); /* demande api pour 20 img supplementaire*/

    const api_data = await recup_data.json(); /*transforme les donnees json pour le composant*/
    const api_data_2 = await recup_data_2.json(); /*transforme les donnees des 20 img sup pour le composant*/
    console.log(api_data);

    this.setState({
      tabStream:
        api_data.results /*insere, stocks les donnees dans un tableau*/,
      tabStream_2:
        api_data_2.results /* stock les donnees des 20img sup dans un autre tableau*/,
    });
  };

  componentDidMount() {
    this.getAffiche();
  }

  render() {
    return (
      <div className="backimg">
        <div className="tabStream1">
          {this.state.tabStream.map(
            element => (
              <ImageBack image={element.poster_path} />
            ) /*appel du composant ImageBack pour afficher l'adresse url api du debut*/,
          )}
          {this.state.tabStream_2.map(element => (
            <ImageBack
              image={element.poster_path}
            /> /*suite des images deuxieme page pour appel du composant ImageBack pour afficher l'adresse url api du debut*/
          ))}
        </div>
      </div>
    );
  }
}

export default Affiche;
