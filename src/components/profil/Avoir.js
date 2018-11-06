import React, { Component } from 'react'; 
import SideBar from '../menu/SideBar';
import AffichageAvoir from "./AffichageAvoir";
import "./Avoir.css";

class Avoir extends Component{
    state = {
        tableauFilms:[]
    }
    

    getMovieAlert = async () => {
        const api_key = "f43e81e7b5860bfeb6d036dd3dd602e1";

        const filmsDeMerde = localStorage.getItem("myMoviesAlert")
        const filmsALaCon = filmsDeMerde.slice(1,(filmsDeMerde.length-1))
        const filmsDecoupes = filmsALaCon.split(",")
        console.log(filmsDecoupes);

        // filmsDecoupes.map(element=>{
        //     console.log(element)
        for(let i = 0 ; i < filmsDecoupes.length ; i++){

        const recup_data = await fetch(`https://api.themoviedb.org/3/movie/${filmsDecoupes[i]}?api_key=${api_key}&language=fr-FR`)
        const api_data = await recup_data.json();
        console.log(api_data);
        
        
        this.setState({
            tableauFilms:api_data})
       }
       console.log(this.state.tableauFilms);
       
    }

    componentDidMount(){
        this.getMovieAlert()
    }

    render(){
        console.log(this.state.tableauFilms)
    return(
        
        <div className="merde" >
            <SideBar/>
            <h1>A voir</h1>

            {this.state.tableauFilms.map((element,id)=>
            <AffichageAvoir
                key={id}
                title={element.title}
            />)}
        }

        </div>
    )
    }
}
export default Avoir










































































































































































































