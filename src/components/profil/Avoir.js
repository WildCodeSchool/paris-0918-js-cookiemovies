import React, { Component } from 'react'; 
import SideBar from '../menu/SideBar';
import "./Avoir.css";

class Avoir extends Component{
    render(){
        console.log(localStorage.getItem("myMoviesAlert"));
        
    return(
        <div className="merde">
            <SideBar/>
            <h1>Avoir</h1>

        </div>
    )
    }
}
export default Avoir