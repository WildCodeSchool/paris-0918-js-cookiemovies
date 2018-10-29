/* debut liens pour images https://image.tmdb.org/t/p/w500/ */
import React, {Component} from "react";
import Slides from './Slides'
import fleche_g from '../images_slides/fleche_gauche_bl.png'
import fleche_d from '../images_slides/fleche_droite_bl.png'

class  SlidesNotOut extends Component {

    state = {
        results :[]
    }

  getDescription = async () => {
     
      const api_key = "api_key=634dd449d69159e1d015a2f0febaaf61"
      const recup_data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?${api_key}&language=en-FR&page=1&region=FR&language=fr`)
      const api_data = await recup_data.json()
      console.log(api_data);
      

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
        <div className="contain1" id="moveAll_1">
        <h2>Prochainement</h2>
        <div className="group1-Wrapper">
            <a className="arrow arrow-prev" id = "prev_1" >
                <img  className="gauche_1" src={fleche_g} alt=""/></a>           
            <a className="arrow arrow-next" id = "next_1" >    
                <img className="droite_1" src={fleche_d} alt=""/></a>
        </div>    
        <div className="ro"id="contain_1">
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



export default  SlidesNotOut;
