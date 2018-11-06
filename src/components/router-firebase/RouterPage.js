import React from 'react';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Navigation from '../folder/Navigation';
import SignUpPage from '../folder/SignUp';
import SignInPage from '../folder/SignIn';
import Home from '../folder/Home'
import Accueil from '../accueil/Home'
import PasswordForgetPage from '../password/PasswordForget';
import AccountPage from '../folder/Account';
import { firebase } from '../../firebase';
import WithAuthentication from '../folder/WithAuthentication';
import Ensalle from '../nowPlaying/NowPlaying'
import Upcoming from '../upcoming/Upcoming'
import Synop from '../synopfilm/FicheFilms'
import Avoir from '../profil/Avoir'
import Vu from '../profil/DejaVu'
// import Background from '../background/Affiche'


class RouterPage extends React.Component {

  state = {
      authUser: null,
    }


  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser }) : this.setState({ authUser: null });
    });
  }

  render() { 
    
    return ( 


  
      <div>
        {/* <Background /> */}
      <Navigation authUser = {this.state.authUser} />
      <Switch>
        <Route path="./accueil" component={Accueil} />
        <Route path="/signup" component={SignUpPage} />
        <Route path='/signin' component={SignInPage}  />
        <Route path='/pw-forget' component={PasswordForgetPage} />
        <Route path='/home' component={Home}  />
        <Route path='/account' component={AccountPage} />
        <Route path='/ensalle' component={Ensalle} />
        <Route path='/upcoming' component={Upcoming} />
        <Route path='/synop:id(\d+)' component={Synop} />
        <Route path='./avoir' component={Avoir}/>
        <Route path='./vu' component={Vu}/>
        </Switch>

       </div>
    
    );
  }
} 

export default WithAuthentication(RouterPage);

