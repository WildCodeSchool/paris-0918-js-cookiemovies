import React from 'react';
import { auth } from '../../firebase';
// import { Button } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const SignOutButton = () =>
<button className="testButt"onClick={auth.doSignOut}>Se déconnecter</button>
  // <Button type="button" onClick={auth.doSignOut} size= "lg" color ="amber" className="btncolor"> 
  //   Se déconnecter
  // </Button>

export default SignOutButton;