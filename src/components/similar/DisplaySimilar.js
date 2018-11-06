import React from 'react'; 
import "./DisplaySimilar.css";


class DisplaySimilar extends React.Component {
    render() {
        const image_key = "https://image.tmdb.org/t/p/w500";
        return (
            <div className = "container">
                <figure>
                    <img className = "imageSimilar" src={`${image_key}${this.props.affiche}`} alt="affiche"/>
                    <figcaption className = "affichageDS">{this.props.titre}</figcaption>
                </figure>
                
            </div>
        )
    }

}

export default DisplaySimilar;