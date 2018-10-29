import React, { Component } from 'react'
import banniere from '../images_slides/banniereHeader.png'
import '../css/Top.css'
import logo from '../images_slides/logo.png'


class Top extends Component{
    render(){
        return(
            <div className="banniere">
                <img className="logo" src={logo} alt="" />
                <h3 className="titre">CookieMoovies</h3>
                <img  className="fond" src={banniere} alt="" />

            </div>
        )
    }
}
export default Top