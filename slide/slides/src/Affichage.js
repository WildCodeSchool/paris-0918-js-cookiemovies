import React , { Component } from 'react';


class Affichage extends Component{
    
     render(){
        const image_key ="https://image.tmdb.org/t/p/w500";
         return(
           
             <div className="affichage">
                 
                 <h1>{this.props.title}</h1>
                 <img src={`${image_key}${this.props.image}`} />
                 
                 <p>{this.props.description}</p>


             </div>
             
             
         );
     }
}
export default Affichage