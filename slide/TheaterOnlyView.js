import React from 'react'
import './TheaterOnlyView.css';

class TheaterOnlyView extends React.Component{
    render(){
        const image_key ="https://image.tmdb.org/t/p/w500";
        return(
            <div className="wrapper">
                <img src={`${image_key}${this.props.image}`}alt="" />
            </div>
        )
    }
}
export default TheaterOnlyView