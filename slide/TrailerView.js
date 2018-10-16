import React, { Component } from 'react';
import YouTube from 'react-youtube';

class TrailerView extends Component {
       


    render(){
        const youtube_url = 'https://www.youtube.com/embed/'
        const youtube_Api_key ='AIzaSyDH45KizTDULzAEqdFFe1jnFrLhVc8ft5c'






        return(
            <div id="ytplayer">
                <iframe  className= "framebox inherit-locale " title="Trailer" width="640" height="360"
                src={`${youtube_url}${this.props.youtubeKey}`} frameBorder="0">
                </iframe>
            </div>
        )
    }
}
export default TrailerView