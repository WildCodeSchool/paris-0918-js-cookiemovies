import React from 'react'
import Accueil from './Accueil'
import './Acceuil.css'


class AccueilApi extends React.Component{ 
    state = {
        results :[] 
    }

  getPoster = async () => {
     
      const api_key = "api_key=634dd449d69159e1d015a2f0febaaf61"
      const recup_data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?${api_key}&language=en-FR&page=1&region=FR&language=fr`)
      
      const api_data = await recup_data.json()
      console.log('coco',api_data.results);
      
      
      this.setState({
                  results: api_data.results
      })   
      }
      componentDidMount(){
          this.getPoster();     
      }
    render(){

        return(
            <div className="poster">
            <div className="box">
            {this.state.results.map((element, id) => 
                    <Accueil key={element.id}  
                             id={element.id}
                             image={element.poster_path} />)
                    } 
                </div>
            </div>
        )
    }
}
export default AccueilApi