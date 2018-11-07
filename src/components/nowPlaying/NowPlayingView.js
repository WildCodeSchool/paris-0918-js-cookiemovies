import React from 'react'
import './NowPlayingView.css';
import ImageNull from '../slides/imagesSlides/afficheNull.png'
import { Link } from 'react-router-dom';

class NowPlayingView extends React.Component{
    render(){
        const image_key ="https://image.tmdb.org/t/p/w500";
        const imageSrc = this.props.image ? `${image_key}${this.props.image}` : ImageNull

        return(
            <Link to={`/synop${this.props.id}`}>
            <div className="wrapper">
                <img src={`${image_key}${this.props.image}`}alt="" />
            </div>
            </Link>
        )
    }
}
export default NowPlayingView