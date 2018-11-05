import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../folder/Navigation';
import * as Routes from '../constants/Routes';
import SignUpPage from '../folder/SignUp';
import SignInPage from '../folder/SignIn';
import PasswordForgetPage from '../password/PasswordForget';
import HomePage from '../folder/Home';
import AccountPage from '../folder/Account';
import { firebase } from '../../firebase';
import WithAuthentication from '../folder/WithAuthentication';


class RouterPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    }
  };

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser }) : this.setState({ authUser: null });
    });
  }

  render() { 

    return ( 


  <Router>
      <div>
      <Navigation authUser = {this.state.authUser} />


        <Route exact path={Routes.SIGN_UP} component={SignUpPage} />
        <Route exact path={Routes.SIGN_IN} component={SignInPage} />
        <Route exact path={Routes.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route exact path={Routes.HOME} component={HomePage} />
        <Route exact path={Routes.ACCOUNT} component={AccountPage} />

       </div>
    </Router>
    );
  }
} 

export default WithAuthentication(RouterPage);

