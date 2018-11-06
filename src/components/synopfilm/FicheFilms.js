import React, { Component } from "react";

import Affichagebis from "./Affichagebis.js";
import Acteurs from "./Acteurs.js";
import AffichGenres from "./AffichGenres.js";
import "./FicheFilms.css"
import DisplaySimilar from '../similar/DisplaySimilar'
import TrailerView from '../trailer/TrailerView'
import SideBar from "../menu/SideBar.js";



const api_key = "f43e81e7b5860bfeb6d036dd3dd602e1";



class FicheFilms extends Component {

    state = {
        title: undefined,
        image: undefined,
        description: undefined,
        realisateur: undefined,
        temps: undefined,
        imageFond: undefined,
        genres: [],
        acteurs: [],
        date: undefined,
        result : [],
        youtubeKey:0
    }

    // Récupération de l'api pour le titre, l'image, le synopsis, l'id, la durée, l'image de fond et les genres
    getInfo = async () => {
        const recup_data = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${api_key}&language=fr-FR`)
        const api_data = await recup_data.json();

        this.setState({
            title: api_data.title,
            image: api_data.poster_path,
            description: api_data.overview,
            idMovie: api_data.id,
            temps: api_data.runtime,
            imageFond: api_data.backdrop_path,
            genres: api_data.genres
        })
    }

    // Récupération de l'api pour le casting, le realisateur
    getCrew = async () => {
        const recup_crew = await fetch(`https://api.themoviedb.org/3/movie/${this.state.idMovie}/credits?api_key=${api_key}`)
        const api_bis = await recup_crew.json();
        this.setState({
            realisateur: api_bis.crew[0].name,
            acteurs: api_bis.cast
        })
    }

    // Récupération de l'api pour la date de sortie
    getLaDate = async () => {
        const recup_date = await fetch(`https://api.themoviedb.org/3/movie/${this.state.idMovie}/release_dates?api_key=${api_key}`)
        const api_date = await recup_date.json();
        const map_data = await api_date.results.filter(element => {
            if (element.iso_3166_1 === "FR") {
                return element.release_dates[0].release_date
            }
        })
        const release = map_data[0].release_dates[0].release_date
        this.setState({
            date: release
        })
    }

    //recuperation de l'api pour les films similaires
    getsimilar = async () => {
    const API_KEY = "2eda3279b136755e70112c03536cdd22";
    const api_call = await fetch (`https://api.themoviedb.org/3/movie/${this.state.idMovie}/similar?api_key=${API_KEY}&language=fr-FR&page=1`);
    const data = await api_call.json();

    this.setState({
        result : data.results
        })
    }

    getKeyForYoutube = async () =>{
        const api_key = "api_key=634dd449d69159e1d015a2f0febaaf61"
        // const movie_id = 439079
        const recup_data = await fetch(`https://api.themoviedb.org/3/movie/${this.state.idMovie}/videos?${api_key}&language=en-FR`)
        const api_data = await recup_data.json()
        this.setState({
            youtubeKey: api_data.results[0].key
        })
        }






    // On lui dit de charger d'abord, une api puis l'autre pour ne pas qu'il fasse tout en même temps 
    componentDidMount = async () => {
        await this.getInfo();
        await this.getKeyForYoutube();
        this.getCrew();
        this.getsimilar();
        this.getLaDate();
        
    }

    render() {
        return (
            <div>
                <SideBar />

                <Affichagebis
                    imageFond={this.state.imageFond}
                    title={this.state.title}
                    image={this.state.image}
                    description={this.state.description}
                    realisateur={this.state.realisateur}
                    temps={this.state.temps}
                    date={this.state.date}
                />
                <div className="containerGenreActeur">
                    <div className="containerGenres">
                        {this.state.genres.map((elem, index) =>
                            <AffichGenres
                                key={index}
                                genres={elem.name}
                            />
                        )}
                    </div>
                    <div className="containerActors">
                        {/* Je lui demande d'afficher que les 4 premiers acteurs */}
                        {this.state.acteurs.slice(0, 4).map((element, id) =>
                            <Acteurs
                                key={id}
                                acteurName={element.name}
                                photographie={element.profile_path} />
                        )}
                    </div>
                </div> 
                <div className="test">
                {this.state.result.slice(0, 3).map((element,id) =>
                <DisplaySimilar 
                    key={id}
                    affiche = {element.poster_path}
                    titre = {element.title} />
              )}
                <TrailerView youtubeKey = {this.state.youtubeKey}/>
                
                
                </div>

            </div>
        )
    }
}
export default FicheFilms;