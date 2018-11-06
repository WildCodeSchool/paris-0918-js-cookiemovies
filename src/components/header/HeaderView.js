import React, { Component } from 'react';
import './headerView.css'


class HeaderView extends Component{
    render(){
        const image_key ="https://image.tmdb.org/t/p/w500";
        return(
            <div className="headerView">
              <h1>{this.props.title}</h1>
              <div className="degrade"></div>
              <img src={`${image_key}${this.props.image}`} alt="" />
              
            </div>
        )
    }
}
export default HeaderView