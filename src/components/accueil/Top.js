import React, { Component } from 'react'
import banniere from '../imagesAccueil/banniereHeader.png'
import './Top.css'
import logo from '../imagesAccueil/logo.png'
import RouterPage from '../router-firebase/RouterPage'




class Top extends Component{
    render(){
        return(
            <div className="banniere">
                <RouterPage />
               
           
                <img  className="fond" src={banniere} alt="" />
               
                <img className="logo" src={logo} alt="" />
                <h3 className="titre">CookieMoovies</h3>


              
                

            </div>
        )
    }
}
export default Top