import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase';
import * as Routes from '../constants/Routes';
import './PasswordForget.css'

const PasswordForgetPage = () =>
  <div className="forgetPass">
    <h1 className="titlePf">Réinitialisation du mot de passe</h1>
    <PasswordForgetForm />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
     <div  >
      <p className="mdp">Vous allez recevoir un mail afin de réinitialiser votre mot de passe.<br/>
      Merci d'entrer votre mail associée à votre compte</p>
      <form className="PasswordForget" onSubmit={this.onSubmit}>
        <input className="inputPf"
          value={this.state.email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Adresse email"
        />
        <button className="buttonPf" disabled={isInvalid} type="submit">
          Nouveau Mot de Passe
        </button>

        { error && <p>{error.message}</p> }
      </form>
      </div>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to='/pw-forget'>Mot de passe oublié ?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};