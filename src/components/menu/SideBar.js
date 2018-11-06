import React from "react";
import "./SideBar.css"
import { bubble as Menu } from 'react-burger-menu'
import salle from './icons/salle.png'
import proch from './icons/prochainement.png'
import sorti from './icons/dejasorti2.png'
import logo from "./icons/logo.png"
import cloche from "./icons/cloche-coul.png"
import avatar from "./icons/avatar.png"
import { NavLink } from 'react-router-dom';




class SideBar extends React.Component {
  showSettings(event) {
    event.preventDefault();        
  }


  render() {
   
    document.addEventListener('DOMContentLoaded', function () {   
      var open = document.getElementById('move');
      console.log('logo',open);
      open.onclick = function () {
        document.getElementById('moveAll').scrollLeft += 400;
    };
      var prev = document.getElementById('prev');   
  }, false);


    return (

      <Menu id="sidebar" className={"my-menu"} customBurgerIcon={<img src={logo} />}>
        <img src={logo} className="logo_cookie" alt="" />

        < div className="accueil">
        <a id="about" className="menu-accueil" href="/Home">Accueil</a>

        </div>
        <div className="enSalle">
          <img src={salle} className="cookie_enSalle" alt="" />
          <NavLink to='/ensalle'><a id="home" className="menu-enSalle" >En Salle</a></NavLink>

           
        </div>
        

        <div className="proch">
          <img src={proch} className="cookie_proch" alt="" />
          <NavLink to='/upcoming'><a id="about" className="menu-proch" >Prochainement</a></NavLink>
        </div>

        <div className="sorti">
          <img src={sorti} className="cookie_sorti" alt="" />
          <NavLink to='/synop'><a className="menu-sorti" >Déja Sortis</a></NavLink>
        </div>
        
        <div className="ligne"></div>
        <div className="notif">
       
        <p> <img src={cloche} className="cloche" alt="" />{this.props.count}</p>
        </div>
        <div className="profile">
        <img src={avatar} className="logoAvatar" alt=""/>
        <a onClick={this.showSettings} className="profile" href="">Profile</a>
        </div>
      </Menu>
      
    );
  }
}

export default SideBar;