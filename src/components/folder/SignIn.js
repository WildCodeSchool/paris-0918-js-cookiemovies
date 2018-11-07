import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
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
    console.log("signIn",this.props.handleClick);
    
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (

      <Container fluid className="inscription">
         <Row> 
            <div className="col-4 md-4">
              <Card className="cardsignin">
                <CardBody>
                  <form onSubmit={this.onSubmit}>
                    <div className="text-center">
                      <h3  color="rgba-black-strong"><strong>Se connecter</strong></h3>                   
                    </div>
                    <div>
                    <Input value={email} onChange={event => this.setState(byPropKey('email', event.target.value))}  label="Email" group type="email" validate error="wrong" success="right"/>
                    <Input  value={password} onChange={event => this.setState(byPropKey('password', event.target.value))}  label="Mot de passe" group type="password" validate containerClass="mb-0"/>
                    <p className="font-small white-text d-flex justify-content-end"> <a href="http://localhost:3000/pw-forget" className="black-text ml-1"> Mot de passe oublié ?</a></p>
                    </div>
                    <div className="text-center mb-3">
                    <Button className="connect" disabled={isInvalid} type="submit" color="red lighten-5"  >Se connecter</Button>
                    { error && <p>{error.message}</p> }
                    </div>
                 </form> 
                </CardBody>
                <ModalFooter>
                  <p className="font-small justify-content-end" color="rgba-black-strong" > Pas de compte ? <Link to="/signup">Inscrivez-vous</Link></p>
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