import React from 'react';
import WithAuthorization from './WithAuthorization';
import './Home.css';


const Home = () =>
  <div>
    <h1 className="home"> Home </h1>
    
   </div>

const authCondition = (authUser) => !!authUser;
export default WithAuthorization(authCondition)(Home);
