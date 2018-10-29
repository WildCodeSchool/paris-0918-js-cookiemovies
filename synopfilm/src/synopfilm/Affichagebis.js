import React , { Component } from 'react';

import imageNull from './test3.png';


class Affichagebis extends Component{
    
convertHours = (min) => {
            const h = Math.trunc(min/60)
            const m = Math.ceil((min/60 - h)*60)
            if (m>9) return h + 'h' + m
            return h + 'h0' + m
            }
     render(){

        //  Debut de l'url de l'image
        const image_key ="https://image.tmdb.org/t/p/w500";

        //Fonction qui dit que: tu m'affiches l'affiche si elle existe, si elle est nulle, tu m'affiches l'image nulle
        const imageSrc = this.props.image ? `${image_key}${this.props.image}` : imageNull

        //Fonction qui dit tu me divises la valeur reçue par 60 puis tu remplaces le point par h et n'affiche que deux chiffres après la virgule
        
        const time = this.convertHours(`${this.props.temps}`)
        // const time = (`${this.props.temps / 60}`).substring(0, 4)
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

                <div className="enTeteFF">
                    <img className="affichette" src={imageSrc} alt="affiche du film"/>
                    <div className="test">
                        <p className="descri">{this.props.description}</p>   

                        <div className="containerDateReal">
                        
                            <div className="containerDate">
                                <p className="titreDate">Date </p>
                                <p className="date">{newDate}</p>
                            </div>

                            <div className="containerReal">
                                <p className="titreReal">Realisateur</p>
                                <p className="real">{this.props.realisateur}</p>
                            </div>

                            <div className="containerDuree">
                                <p className="titreDuree">Durée</p>
                                <p className="duree">{moinsPoint}</p>
                            </div>
                        </div>
                    </div>    
                </div>

            </div>
             
             
         );
     }
}
export default Affichagebis;

