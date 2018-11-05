import React from "react";
import "./SideBar.css"
import { bubble as Menu } from 'react-burger-menu'
import salle from './icons/salle.png'
import proch from './icons/prochainement.png'
import sorti from './icons/dejasorti2.png'
import logo from "./icons/logo.png"
import cloche from "./icons/cloche-coul.png"
import avatar from "./icons/avatar.png"


class SideBar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }


  render() {


    return (

      <Menu id={"sidebar"} className={"my-menu"} customBurgerIcon={<img src={logo} />}>
        <img src={logo} className="logo_cookie" alt="" />

        <div className="enSalle">
          <img src={salle} className="cookie_enSalle" alt="" />
          <a id="home" className="menu-enSalle" href="/">En Salle</a>

          


          
             {/* <div className="borderCercle"></div> */}

           
        </div>

        <div className="proch">
          <img src={proch} className="cookie_proch" alt="" />
          <a id="about" className="menu-proch" href="/about">Prochainement</a>
        </div>

        <div className="sorti">
          <img src={sorti} className="cookie_sorti" alt="" />
          <a onClick={this.showSettings} className="menu-sorti" href="">Déja Sortis</a>
        </div>
        <div className="ligne"></div>
        <div className="notif">
       
        <p> <img src={cloche} className="cloche" alt="" />{this.props.count}</p>
        </div>
        <img src={avatar} className="logoAvatar" alt=""/>
      </Menu>
      
    );
  }
}

export default SideBar;