import React, { Component } from 'react';

import Suggestions from './Suggestions';
import Affichage from './Affichage';
import './SearchBar.css';
import SideBar from '../menu/SideBar'

class SearchBar extends Component {
    state = {
        query: '',
        results: []
      }

    // Récupération de l'api  
    getInfo = async () => {
        const api_key = "api_key=f43e81e7b5860bfeb6d036dd3dd602e1"
        const recup_data = await fetch(`https://api.themoviedb.org/3/search/movie?${api_key}&language=en-US&query=${this.state.query}&page=1&include_adult=false&language=fr`)
        const api_data = await recup_data.json()
        console.log(api_data)
        this.setState({
            results: api_data.results
        })
    }

    // Fonction qui dit que toutes les deux lettres, il relance l'api pour proposer des films au fur et à mesure 
    handleInputChange = () => {
        this.setState({
          query: this.search.value
        }, () => {
          if (this.state.query && this.state.query.length > 1) {
            if (this.state.query.length % 2 === 0) {
              this.getInfo()
            }
        } 
      })
    }

    // Il ne doit pas recharger la page lors de la soumission
    handleSubmit = (e) => {
        e.preventDefault();
    }


    render() {
        return (
            <div className="input">
            <SideBar />

                <form onSubmit = {this.handleSubmit} >
                    <input
                        list="movieSuggest"
                        placeholder=" "
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />
                    <Suggestions results={this.state.results} />
                </form>

                {this.state.results.map((element,id)=>
                    <Affichage
                        key={id}
                        title={element.title} 
                        image={element.poster_path}/> 
                    )}
          </div>
        )
      }
    }

export default SearchBar; 
