/* debut liens pour images https://image.tmdb.org/t/p/w500/ */
import React, {Component} from "react";
import Synop from './Synop'
import Affichage from './Affichage'
import './Affichage.css'

class  Search extends Component {

    state = {
        description: undefined,
        image: undefined,
        title: undefined 
    }

  getDescription = async (e) => {
      e.preventDefault()
      const query = e.target.elements.userSearchInput.value
      const api_key = "api_key=634dd449d69159e1d015a2f0febaaf61"
      const recup_data = await fetch(`https://api.themoviedb.org/3/search/movie?${api_key}&language=en-US&query=${query}&page=1&include_adult=false&language=fr`)
      const api_data = await recup_data.json()
      
      
   

      this.setState({
          description: api_data.results[0].overview,
          image: api_data.results[0].poster_path,
          title: api_data.results[0].title
          
      })
      
          
      }
  
  

    render() {
        
   return(
       <div>
           <Synop getDescription={this.getDescription}/>
           <Affichage   description={this.state.description} 
                        image={this.state.image}
                        title={this.state.title}/>
       </div>
   );
}

}



export default  Search;
