import React, { Component } from 'react';
import logo from './logo.png'

class Accueil extends Component{
    render(){
        const image_key ="https://image.tmdb.org/t/p/w500";
        return(
            <div className="wrapper">
                
                <img src={`${image_key}${this.props.image}`} alt=""/>
            
            </div>
        )
    }
}
export default Accueil