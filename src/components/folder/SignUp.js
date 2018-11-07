import React, { Component } from 'react';
import { Link,  withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import * as Routes from '../constants/Routes';
import "./SignUp.css";
import { Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';


const SignUpPage = ({ history }) =>
  <div>
    <SignUpForm history={history}/>
  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE};
  }

  onSubmit = (event) => {
    
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        history.push(Routes.HOME);
      })
      
      .catch(error => {
        this.setState(byPropKey('error', error));
      })

      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();

  }

  render() {
    console.log('signup page loaded');
    

    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';

    return (
      <Container className="inscription">
         <Row>
           <Col md="6">
            <Card className="cardsignup">
              <CardBody>
                <form onSubmit={this.onSubmit}>
                  <p className="h4 text-center py-4">Inscrivez-vous</p>
                    <div className="grey-text">
                      <Input value={username} onChange={event => this.setState(byPropKey('username', event.target.value))} label="Ton nom et prénom" icon="user" group type="text" validate error="wrong" success="right"/>
                      <Input value={email} onChange={event => this.setState(byPropKey('email', event.target.value))} label="Ton email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                      <Input value={passwordOne} onChange={event => this.setState(byPropKey('passwordOne', event.target.value))} label="Ton mot de passe" icon="lock" group type="password" validate/>
                      <Input value={passwordTwo} onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))} label="Confirme ton mot de passe" icon="exclamation-triangle" group type="password" validate/>
                    </div>
                    <div className="text-center py-4 mt-3">
                      <Button disabled={isInvalid} className="btn purple-gradient"color="red lighten-5" type="submit">S'inscrire</Button>
                    { error && <p>{error.message}</p> }
                    </div>
                  </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const SignUpLink = () =>
  <p>
    Pas de compte ?
    {' '}
    <Link to="/signup">Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};