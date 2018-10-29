/* debut liens pour images https://image.tmdb.org/t/p/w500/ */
import React, {Component} from "react";
import Slide1 from './Slide1'
import './Slide.css';
import fleche_g from './fleche_gauche_bl.png'
import fleche_d from './fleche_droite_bl.png'

class  Slide_2 extends Component {

    state = {
        results :[]
    }

  getDescription = async () => {
     
      const api_key = "api_key=634dd449d69159e1d015a2f0febaaf61"
      const recup_data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?${api_key}&language=en-FR&page=1&region=FR&language=fr`)
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
            var next_1 = document.getElementById('next_1');
            var prev_1 = document.getElementById('prev_1');
            next_1.onclick = function () {
                document.getElementById('contain_1').scrollLeft += 400;
            };
            prev_1.onclick = function () {
                document.getElementById('contain_1').scrollLeft -= 400;
            };
        }, false);
       
   return(
        <div className="contain" >
        <h2>Prochainement</h2>
        <div class="group1-Wrapper">
            <a class="arrow arrow-prev" id = "prev_1" >
                <img  className="gauche_1" src={fleche_g} alt=""/></a>           
            <a class="arrow arrow-next" id = "next_1" >    
                <img className="droite_1" src={fleche_d} alt=""/></a>
        </div>    
        <div className="row"id="contain_1">
                {this.state.results.map((element, id) => 
                
                    <Slide1 title = {element.title} 
                        id={id}
                        image={element.poster_path} 
                        description={element.overview}/>)
                    } 
            </div> 
       </div>
   );
}

}



export default  Slide_2;
