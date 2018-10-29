import React, { Component } from 'react';
import HeaderView from './HeaderView'


class Header extends Component {

    state = {
        image : undefined,
        title : undefined,
        id : undefined
    }
   
    getPosterTitle = async () => {
     
        const api_key = "api_key=634dd449d69159e1d015a2f0febaaf61"
        const recup_data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?${api_key}&language=en-FR&page=1&region=FR&language=fr`)
        const api_data = await recup_data.json()

        let num = Math.floor(Math.random() * Math.floor(20));
        
          
        this.setState({
            image :api_data.results[num].backdrop_path,
            title : api_data.results[num].title,
            id : api_data.results[num].id,
        })   
        }
        componentDidMount(){
            this.getPosterTitle();
        }

    render(){
        return(
            <div>
                <HeaderView 
                    key="" 
                    title={this.state.title} 
                    id={this.state.id}
                    image={this.state.image} 
                    />
            </div>
        )
    }
}
export default Header