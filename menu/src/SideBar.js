import React from "react";
import "./SideBar.css"
import { bubble as Menu } from 'react-burger-menu'
import salle from './icons/salle.png'
import proch from './icons/prochainement.png'
import cookie from './icons/cookies.svg'
import logo from "./icons/logo.png"


class SideBar extends React.Component {
  showSettings(event) {
    event.preventDefault();

  }





  render() {
    return (
      <Menu id={"sidebar"} className={"my-menu"} customBurgerIcon={ <img src={logo} /> }>
        <img src={logo} className="logo_cookie" alt="" />

        
        <div className="enSalle">
          <img src={salle} className="cookie_enSalle" alt="" />
          <a id="home" className="menu-enSalle" href="/">En Salle</a>
        </div>

        <div className="proch">
          <img src={proch} className="cookie_proch" alt="" />
          <a id="about" className="menu-proch" href="/about">Prochainement</a>

        </div>
        <div className="sorti">
          <img src={cookie} className="cookie_sorti" alt="" />
          <a onClick={this.showSettings} className="menu-sorti" href="">Déja Sortis</a>

        </div>
      </Menu>
    );
  }
}

export default SideBar;