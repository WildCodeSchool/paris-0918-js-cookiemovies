import React, { Component } from 'react'
import banniere from './banniereHeader.png'
import './Top.css'
import logo from './logo.png'


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