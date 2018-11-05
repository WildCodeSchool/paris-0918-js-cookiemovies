import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../accueil/Home'
import Connexion from '../connexion/Connexion'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';



class Routing extends Component{
render(){
    return(
        <Router>
            <div>
            <Route exact path="/" component={Home} ></Route>
            <Route exact path="/connexion" component={Connexion} ></Route>
            </div>

            
            
        </Router>
    )
}
}
export default Routing