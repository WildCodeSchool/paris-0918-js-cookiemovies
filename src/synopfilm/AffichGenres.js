import React , { Component } from 'react';



class AffichGenres extends Component{
    

     render(){

         return(
           
            <div className="genres">
                <p>{this.props.genres}</p>
            </div>
             
             
         );
     }
}
export default AffichGenres;

