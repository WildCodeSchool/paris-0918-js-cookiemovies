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
    console.log("routerpage",this.props.handleClick);
    
    return ( 


  
      <div>
      <Navigation authUser = {this.state.authUser} />
      <Switch>
        <Route path="./accueil" component={Accueil} />
        <Route  path="/signup" component={SignUpPage} />
        <Route path='/signin' component={SignInPage}  />
        <Route  path='/pw-forget' component={PasswordForgetPage} />
        <Route path='/home' component={Home}  />
        <Route path='/account' component={AccountPage} />
        </Switch>

       </div>
    
    );
  }
} 

export default WithAuthentication(RouterPage);

