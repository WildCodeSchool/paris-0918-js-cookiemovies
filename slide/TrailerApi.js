import React, { Component } from 'react';
import TrailerView from './TrailerView'


class TrailerApi extends Component {

    state = {
        youtubeKey: undefined
    }

    getKeyForYoutube = async () =>{
    const api_key = "api_key=634dd449d69159e1d015a2f0febaaf61"
    const movie_id = 439079
    const recup_data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?${api_key}&language=en-FR`)
    const api_data = await recup_data.json()
    console.log(api_data.results[0].key);
    

    this.setState({
        youtubeKey: api_data.results[0].key
    })
    }

    componentDidMount(){
        this.getKeyForYoutube();
    }


    render(){
        return(
            <div>
                <TrailerView youtubeKey = {this.state.youtubeKey}/>

            </div>
        )
    }
}
export default TrailerApi