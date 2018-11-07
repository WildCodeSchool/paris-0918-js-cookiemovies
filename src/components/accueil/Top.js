import React, { Component } from 'react'
import banniere from '../imagesAccueil/banniereHeader.png'
import './Top.css'
import logo from '../imagesAccueil/logo.png'




class Top extends Component{
    render(){
        return(
            <div className="banniere">
               
           
                <img  className="fond" src={banniere} alt="" />
               
                <img className="logo" src={logo} alt="" />
                <h3 className="titre">CookieMovies</h3>


              
                

            </div>
        )
    }
}
export default Top