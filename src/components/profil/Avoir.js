import React, { Component } from 'react'; 
import SideBar from '../menu/SideBar';
import AffichageAvoir from "./AffichageAvoir";
import "./Avoir.css";
import Footer from '../footer/Footer'

class Avoir extends Component{
    state = {
        tableauFilms:[]
    }
    

    getMovieAlert = async () => {
        let tab =[]
        const api_key = "f43e81e7b5860bfeb6d036dd3dd602e1";

        const filmsDeMerde = localStorage.getItem("myMoviesAlert")
        const filmsALaCon = filmsDeMerde.slice(1,(filmsDeMerde.length-1))
        const filmsDecoupes = filmsALaCon.split(",")
        console.log(filmsDecoupes);

   
        for(let i = 0 ; i < filmsDecoupes.length ; i++){
        
        let recup_data = await fetch(`https://api.themoviedb.org/3/movie/${filmsDecoupes[i]}?api_key=${api_key}&language=fr-FR`)
        let api_data = await recup_data.json();
         await tab.push(api_data)
        
        
        this.setState({
            tableauFilms:tab})
       }
       
    }
    

    componentDidMount= async () =>{
         this.getMovieAlert()
        // this.tilteLength()
    }

    render(){
        
    return(
        <div className="basFoot">
            <div className="testSidBar">
                <SideBar/>
            </div>
            <div className="Avoir" >
                <h1 className="titreAvoir">Ma liste de films à voir</h1>
                <div className="ro" >
                {this.state.tableauFilms.map((element,id)=>
                <AffichageAvoir
                    key={id}
                    title={element.title}
                    image={element.poster_path}
                    release={element.release_date}
                    description={element.overview}
                />)}
                </div>
            </div>
            <Footer/>
        </div>
    )
    }
}
export default Avoir










































































































































































































