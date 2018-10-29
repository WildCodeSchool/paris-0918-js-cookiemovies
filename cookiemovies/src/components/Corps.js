import React, { Component } from "react";
import "../css/Corps.css";
import photo_1 from "../images_slides/photo_1.png";
import photo_3 from "../images_slides/photo_3.png";
import photo_2 from "../images_slides/photo_2.png";
import photo_4 from "../images_slides/photo_4.png";
import cloche_coul from "../images_slides/cloche-coul.png";

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
          <img src={cloche_coul} alt="" />
        </div>
        <div className="bubble_3">
          <p>Retrouver tous vos films sur plateformes préfées</p>
        </div>
      </div>
    );
  }
}
export default Corps;
