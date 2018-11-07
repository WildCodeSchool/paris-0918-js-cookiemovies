import React, { Component } from 'react';
import ImageNull from '../slides/imagesSlides/afficheNull.png' 

import "./Avoir.css";

class AffichageDejaVu extends Component{
    

    render(){
        const image_key = "https://image.tmdb.org/t/p/w500";
        const imageSrc = this.props.image ? `${image_key}${this.props.image}` : ImageNull
    return(
        
        <div className="wrap" >
            <div className="wrappeur">
                <h2>{this.props.title}</h2>
                <img className="" src={imageSrc} alt="" />
                <p>{this.props.description}</p>
                <h3>{this.props.release}</h3>
            </div>
        </div>
    )
    }
}
export default AffichageDejaVu;

