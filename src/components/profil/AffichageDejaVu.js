import React, { Component } from 'react';
import ImageNull from '../slides/imagesSlides/afficheNull.png' 

import "./Avoir.css";

class AffichageDejaVu extends Component{
    

    render(){
        const image_key = "https://image.tmdb.org/t/p/w500";
        const imageSrc = this.props.image ? `${image_key}${this.props.image}` : ImageNull

        const dateFrance = `${this.props.release}`
        const annee = (dateFrance[0] + dateFrance[1] + dateFrance[2] + dateFrance[3])
        const mois = (dateFrance[5] + dateFrance[6])
        const jour = (dateFrance[8] + dateFrance[9])
        const month = ["Janv", "Fev", "Mars", "Avr", "Mai", "Juin", "Juil", "Aout", "Sept", "Oct", "Nov", "Dec"]
        const leBonMois = (month[mois-1])
        const newDate = (`${jour} ${leBonMois} ${annee}`)

    return(
        
        <div className="wrap" >
            <div className="wrappeur">
                <h2>{this.props.title}</h2>
                <img className="" src={imageSrc} alt="affiche du film à voir" />
                <p>{this.props.description}</p>
                <h3>Sorti le {newDate}</h3>
            </div>
        </div>
    )
    }
}
export default AffichageDejaVu;

