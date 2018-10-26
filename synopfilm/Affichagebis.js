import React , { Component } from 'react';

import imageNull from './test3.png';


class Affichagebis extends Component{
    

     render(){

        //  Debut de l'url de l'image
        const image_key ="https://image.tmdb.org/t/p/w500";

        //Fonction qui dit que: tu m'affiches l'affiche si elle existe, si elle est nulle, tu m'affiches l'image nulle
        const imageSrc = this.props.image ? `${image_key}${this.props.image}` : imageNull

        //Fonction qui dit tu me divises la valeur reçue par 60 puis tu remplaces le point par h et n'affiche que deux chiffres après la virgule
        const time = (`${this.props.temps / 60}`).substring(0, 4)
        const moinsPoint = time.split('.').join("h")

        //Changement du format de la date 
        const dateFrance = `${this.props.date}`
        const annee = (dateFrance[0] + dateFrance[1] + dateFrance[2] + dateFrance[3])
        const mois = (dateFrance[5] + dateFrance[6])
        const jour = (dateFrance[8] + dateFrance[9])
        const month = ["Janv", "Fev", "Mars", "Avr", "Mai", "Juin", "Juil", "Aout", "Sept", "Oct", "Nov", "Dec"]
        const leBonMois = (month[mois-1])
        const newDate = (`${jour} ${leBonMois} ${annee}`)

            
         return(
           
            <div className="pageFilm">

                <img className="imageFond" src={`${image_key}${this.props.imageFond}`} alt="background du film"/>
                <h1 className="titleTitre">{this.props.title}</h1>
                <p className="descri">{this.props.description}</p>
                <img className="affichette" src={imageSrc} alt="affiche du film"/>
                <div className="containerDateReal">
                    <p className="titreDate">Date</p>
                    <p className="date">{newDate}</p>
                    <p className="realisateur">Realisateur<br/>{this.props.realisateur}</p>
                    <p className="duree">Durée<br/>{moinsPoint}</p>
                </div>
            </div>
             
             
         );
     }
}
export default Affichagebis;

