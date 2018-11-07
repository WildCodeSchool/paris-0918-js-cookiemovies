import React from 'react';
import { NavLink } from 'react-router-dom';
import SignOutButton from './SignOut';
import * as Routes from '../constants/Routes';
import AuthUserContext from './AuthUserContext';

import { Button } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './Navigation.css';
import Accueil from '../accueil/Home'

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

     const NavigationAuth = () =>
    <div className="linksbuttons">
    <ul>
      {/* <li><NavLink to={Routes.ACCOUNT}> <Button size= "lg" color ="amber" className="btncolor"> Compte </Button></NavLink></li> */}
      <li> <SignOutButton /></li>
    </ul>
    </div> 

    const NavigationNonAuth = () =>
    <div>
      <Accueil />
    
    <div className="linksbuttons">
    
    <ul className="links">
    
     
      <li><NavLink to='/signin'> <Button size= "lg" color ="elegant" className="btncolor2 btn-deep-purple">Se connecter</Button></NavLink></li>
    </ul>
    </div> 
    </div>



export default Navigation;