import React, { Component } from "react";
import "./Corps.css";
import photo_1 from "../imagesAccueil/photo_1.png";
import photo_3 from "../imagesAccueil/photo_3.png";
import photo_2 from "../imagesAccueil/photo_2.png";
import photo_4 from "../imagesAccueil/photo_4.png";
import cloche_coul from "../imagesAccueil/cloche-coul.png";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Corps extends Component {
  render() {
    return (
      <div className="corps">
        <div className="bubble_1">
          <p>
            Notez les films que vous voulez voir et ceux que vous avez déja vus{" "}
          </p>
        </div>
        <div className="photo_demo">
          <img src={photo_1} alt="" />
          <img src={photo_2} alt="" />
          <img src={photo_3} alt="" />
          <img src={photo_4} alt="" />
        </div>
        <div className="bubble_2">
          <p>
            Soyez au courant dès qu'un film que vous avez envie de voir sort au
            cinéma
          </p>
        </div>
        <div className="cloche-coul">
          <img className="cloche" src={cloche_coul} alt="" />
        </div>
        <div className="bubble_3">
          <p>Retrouver tous vos films sur plateformes préfées</p>
        </div>
        {/* <Link className='linkTo' to={'/connexion'}>Cliquez ici</Link> */}

      </div>
    );
  }
}
export default Corps;
