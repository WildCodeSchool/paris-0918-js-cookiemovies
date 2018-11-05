import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import * as Routes from '../constants/Routes';
import { Container, Row, Input, Button, Card, CardBody, ModalFooter } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import "./SignIn.css";


const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} /> 
  </div>


const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {

  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE};
  }
  
  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(Routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (

      <Container fluid>
         <Row> 
            <div className="col-4 md-4">
              <Card className="cardsignin">
                <CardBody>
                  <form onSubmit={this.onSubmit}>
                    <div className="text-center">
                      <h3 color="rgba-black-strong"><strong>Se connecter</strong></h3>                   
                    </div>
                    <div>
                    <Input value={email} onChange={event => this.setState(byPropKey('email', event.target.value))}  label="Email" group type="email" validate error="wrong" success="right"/>
                    <Input value={password} onChange={event => this.setState(byPropKey('password', event.target.value))}  label="Mot de passe" group type="password" validate containerClass="mb-0"/>
                    <p className="font-small white-text d-flex justify-content-end"> <a href="http://localhost:3000/pw-forget" className="black-text ml-1"> Mot de passe oublié ?</a></p>
                    </div>
                    <div className="text-center mb-3">
                    <Button disabled={isInvalid} type="submit" color="red lighten-5"  >Se connecter</Button>
                    { error && <p>{error.message}</p> }
                    </div>
                    <p className="font-small text-right d-flex justify-content-center mb-3 pt-2" color="rgba-black-strong"> Se connecter avec :</p>
                    <div> 
                      <ul className="list-unstyled list-inline">
                      <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb" href="https://www.facebook.com/" target="blank"> <i className="fa fa-facebook-square"></i> </a></li>
                      <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb" href="https://www.google.com/" target="blank"> <i className="fa fa-google"> </i> </a> </li>
                      <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw" href="https://www.twitter.com/" target="blank"> <i className="fa fa-twitter-square"></i> </a></li>
                      </ul>
                  </div>
                 </form> 
                </CardBody>
                <ModalFooter>
                  <p className="font-small justify-content-end" color="rgba-black-strong" > Pas de compte ? <a href="http://localhost:3000/signup"> Inscrivez-vous</a></p>
                </ModalFooter>
                
                </Card>
            </div>
          </Row>
      </Container>
      
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm
};