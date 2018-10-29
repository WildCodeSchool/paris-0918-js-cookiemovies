import React from 'react'
import '../css/NowPlayingView.css';

class NowPlayingView extends React.Component{
    render(){
        const image_key ="https://image.tmdb.org/t/p/w500";
        return(
            <div className="wrapper">
                <img src={`${image_key}${this.props.image}`}alt="" />
            </div>
        )
    }
}
export default NowPlayingView