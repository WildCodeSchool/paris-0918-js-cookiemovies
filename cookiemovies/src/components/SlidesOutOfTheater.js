/* debut liens pour images https://image.tmdb.org/t/p/w500/ */
import React, {Component} from "react";
import fleche_g from '../images_slides/fleche_gauche_bl.png'
import fleche_d from '../images_slides/fleche_droite_bl.png'
import Slides from './Slides'

class  SlidesOutOfTheater extends Component {

    state = {
        results :[]
    }

  getDescription = async () => {
     
      const api_key = "api_key=634dd449d69159e1d015a2f0febaaf61"
      const recup_data = await fetch(`https://api.themoviedb.org/3/movie/popular?${api_key}&language=en-FR&page=1&region=FR&language=fr`)
      const api_data = await recup_data.json()

      this.setState({
          results : api_data.results
      })   
      }
      componentDidMount(){
          this.getDescription();
      }
    render() {

        document.addEventListener('DOMContentLoaded', function () {   
            var next_2 = document.getElementById('next_2');
            var prev_2 = document.getElementById('prev_2');
            next_2.onclick = function () {
                document.getElementById('contain_2').scrollLeft += 400;
            };
            prev_2.onclick = function () {
                document.getElementById('contain_2').scrollLeft -= 400;
            };
        }, false);
       
   return(
        <div className="contain2" id="moveAll_2">
        <h2>Déjà Sortis</h2>
        <div className="group1-Wrapper">
            <a className="arrow arrow-prev" id = "prev_2" >
                <img  className="gauche_2" src={fleche_g} alt=""/></a>           
            <a className="arrow arrow-next" id = "next_2" >    
                <img className="droite_2" src={fleche_d} alt=""/></a>
        </div>    
        <div className="ro"id="contain_2">
                {this.state.results.map((element, id) => 
                
                    <Slides key={element.id} title = {element.title} 
                        id={element.id}
                        image={element.poster_path} 
                        description={element.overview}/>)
                    } 
            </div> 
       </div>
   );
}

}



export default  SlidesOutOfTheater;
