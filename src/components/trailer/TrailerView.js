import React, { Component } from 'react';
import YouTube from 'react-youtube';

class TrailerView extends Component {
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();   
    }      
     

    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 0
            }
          };
        const youtube_url = 'https://www.youtube.com/watch?v='

        
        return(
            <div>
                <YouTube
                    videoId={this.props.youtubeKey}
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        ) 
    }
}
export default TrailerView;