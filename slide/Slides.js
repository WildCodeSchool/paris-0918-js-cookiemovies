import React from 'react'
import './Slides.css';
import ajout from './ajout.png'
import check from './check.png'
import check_coul from './check-coul.png'
import cloche from './cloche.png'
import cloche_coul from './cloche-coul.png' 
import { element } from 'prop-types';

class Slides extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          on: props.on,
          white: props.white,
          unchecked : props.unchecked,
    
        };
      }
      
      handClick = () => {
        this.setState({ on: !this.state.on }); 
        //localStorage.clear()
        console.log(localStorage);
        
         
      };
      
      handleClick_1 = () => {
        this.setState({ white: !this.state.white });
  
        var myMoviesAlert = []
        myMoviesAlert = JSON.parse(localStorage.getItem('myMoviesAlert'));
        let add = this.props.id

               if(myMoviesAlert.indexOf(add) === -1 ){
                myMoviesAlert.push(add);
                    localStorage.setItem('myMoviesAlert', JSON.stringify(myMoviesAlert));
                    console.log(localStorage);          
                }else{
                    myMoviesAlert.splice(myMoviesAlert.indexOf(add),1)
                    localStorage.setItem('myMoviesAlert', JSON.stringify(myMoviesAlert));                   
                    console.log(localStorage);
                }
       
            
        
      };
      handleClick_2 = () => {
          this.setState({ unchecked: !this.state.unchecked})  


          var myMoviesList = []
          myMoviesList = JSON.parse(localStorage.getItem('myMoviesList'));
          let add = this.props.id
  
                 if(myMoviesList.indexOf(add) === -1 ){
                    myMoviesList.push(add);
                      localStorage.setItem('myMoviesList', JSON.stringify(myMoviesList));
                      console.log(localStorage);          
                  }else{
                    myMoviesList.splice(myMoviesList.indexOf(add),1)
                      localStorage.setItem('myMoviesList', JSON.stringify(myMoviesList));                   
                      console.log(localStorage);
                  }
          


      } 
      
    render(){
        const image_key ="https://image.tmdb.org/t/p/w500";
        
        const showIcon = this.state.on ? 'on' : 'off';
        const boutonClo = this.state.white ? 'white' : 'yellow';
        const boutonChe = this.state.unchecked ? 'unchecked' : 'checked';
        
     

        return(
                       
                <div className="row_inner">
                    <p>{this.props.alert}</p>
                        <div className="tile">
                        <div className="coul">
                        
                                                     
                            
                            <button onClick={this.handClick} className={showIcon} className ={alert} className="boutonAjout"></button>
                                <img className="ajout" src={ajout} alt=""/>
                                    <figure className={showIcon} >
                                        <img className="cloche" src={cloche}alt=""/>
                                        <img className="check" src={check}alt=""/>
                                        </figure>
                            
                            
                                <button onClick={this.handleClick_1} className={boutonClo} id= "alert" className="boutonCloche" ></button>

                                <figure className={boutonClo}>
                                    <img className="cloche_coul" src={cloche_coul}alt=""/>
                                </figure>
                                
                            <button onClick={this.handleClick_2} className={boutonChe}  className="boutonChecked" ></button>
                                <figure className={boutonChe}>
                                    <img className="check_coul" src={check_coul}alt=""/>
                                </figure>
                           
                        
                        </div>
                            <div className="tile_media">
                                <img className="tile_img" src={`${image_key}${this.props.image}`}alt="" />
                            </div>
                            <div className="tile_details">  
                                <div className="tile_title">                  
                                    <p>{this.props.description.substr(0, 140)} ...</p>
                                    <h4>{this.props.title}</h4>
                                </div>                                            
                            </div>
                        </div>
                   
                </div>

           
        );
    }
}
export default Slides