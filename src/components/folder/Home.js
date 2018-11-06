import React from 'react';
import WithAuthorization from './WithAuthorization';
import './Home.css';
import Page1 from '../page1/Page1'


const Home = () =>
  <div>
    <Page1 />
    
   </div>

const authCondition = (authUser) => !!authUser;
export default WithAuthorization(authCondition)(Home);
