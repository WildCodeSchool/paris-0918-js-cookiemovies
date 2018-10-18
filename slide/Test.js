import React from "react";
import TestView from "./TestView"

class Test extends React.Component {

    state = {
        tab :[]
    }

    getMovie = async () => {
        const api = await fetch ("https://api.themoviedb.org/3/movie/now_playing?api_key=634dd449d69159e1d015a2f0febaaf61&language=fr-FR&page=1&region=FR")
        const data = await api.json()
        console.log(data)
        this.setState({
            tab : data.results
        })

    }
    componentDidMount(){
        this.getMovie()
    }


    render(){
        return (
            <div>
                {this.state.tab.map((element,id) =>
                   <TestView key={id}
                   title = {element.title}
                   image ={element.poster_path}
                   description ={element.overview}
                   
                   
                   />)}
                
            </div>
        )
    }

}

export default Test;