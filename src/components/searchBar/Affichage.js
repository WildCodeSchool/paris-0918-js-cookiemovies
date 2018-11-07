import React , { Component } from 'react';

import './SearchBar.css';
import ImageNull from './test3.png';
import { Link } from 'react-router-dom';



class Affichage extends Component{
    
    

     render(){
        // Début de l'url de l'affiche
        const image_key ="https://image.tmdb.org/t/p/w500";

        //Fonction qui dit que: tu m'affiches l'affiche si elle existe, si elle est nulle, tu m'affiches l'image nulle 
        const imageSrc = this.props.image ? `${image_key}${this.props.image}` : ImageNull
 

         return(
           
            <div className="affichageSB">
        <Link to={`/synop${this.props.id}`}>

            <a className="lienSB" href="" >
            <figure>
                
                    <figcaption className="titleSB">{this.props.title}</figcaption>
                    <img className="affiche" src={imageSrc} alt="affiche du film"/>
                
            </figure>
            </a>
            </Link>
            </div>
             
             
         );
     }
}
export default Affichage

