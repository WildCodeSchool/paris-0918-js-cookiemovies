import React , { Component } from 'react';

import ImageNull from './test3.png';


class Acteurs extends Component{
    

     render(){
        const image_key ="https://image.tmdb.org/t/p/w500";
        const imageSrc = this.props.image ? `${image_key}${this.props.photographie}` : ImageNull

         return(
           
            <div className="containerActeurs">
                <img className= "actorProfile" src={`${image_key}${this.props.photographie}`} alt="photographie de l'acteur"/>
                <p className="actorName">{this.props.acteurName}</p>
            </div>
             
             
         );
     }
}
export default Acteurs;

