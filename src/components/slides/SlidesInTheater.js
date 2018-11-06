/* debut liens pour images https://image.tmdb.org/t/p/w500/ */
import React, {Component} from "react";
import Slides from './Slides'
import fleche_g from './imagesSlides/fleche_gauche_bl.png'
import fleche_d from './imagesSlides/fleche_droite_bl.png'


class  SlidesInTheater extends Component {

    state = {
        results :[]
       
    }

  getDescription = async () => {
     
      const api_key = "api_key=634dd449d69159e1d015a2f0febaaf61"
      const recup_data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?${api_key}&language=en-FR&page=1&region=FR&language=fr`)
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
            var next = document.getElementById('next');
            var prev = document.getElementById('prev');
            next.onclick = function () {
                document.getElementById('contain').scrollLeft += 400;
            };
            prev.onclick = function () {
                document.getElementById('contain').scrollLeft -= 400;
            };
        }, false);
        

   
   return(
    

    
        <div className="contain" id="moveAll">
        <h2>En Salle</h2>
        <div className="group1-Wrapper">
            <a className="arrow arrow-prev" id = "prev" >
                <img  className="gauche" src={fleche_g} alt=""/></a>           
            <a className="arrow arrow-next" id = "next" >    
                <img className="droite" src={fleche_d} alt="" /></a>
        </div>    
        <div className="ro" id="contain">
                {this.state.results.map((element, index) => 
                    <Slides
                        key={index}
                        title = {element.title} 
                        id={element.id}
                        image={element.poster_path} 
                        description={element.overview}/>)
                    }
            </div> 
       </div>
   
   );
}

}



export default  SlidesInTheater;
