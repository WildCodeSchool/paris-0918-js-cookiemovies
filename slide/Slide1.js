import React from 'react'
import './Slide.css';
import ajout from './ajout.png'
import check from './check.png'
import check_coul from './check-coul.png'
import cloche from './cloche.png'
import cloche_coul from './cloche-coul.png' 

class Slide1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          on: props.on,
          white: props.white
        };
      }
      
      handleClick = () => {
        this.setState({ on: !this.state.on });
      };
      handleClick_1 = () => {
        this.setState({ white: !this.state.white });
      };

    render(){
        const image_key ="https://image.tmdb.org/t/p/w500";
        const showIcon = this.state.on ? 'on' : 'off';
        const clo_coul = this.state.on ? 'white' : 'yellow';


     


        return(
                       
                <div className="row_inner">
                    
                        <div className="tile">
                        <div className="coul">
                            
                            
                            <a class="ajout" id = "ajout" >
                            <button onClick={this.handleClick} className={showIcon} className="boutonAjout"></button>
                                <img className="ajout" src={ajout}/>
                                    <figure className={showIcon} >
                                        <img className="cloche" src={cloche}/>
                                        <img className="check" src={check}/>
                                        </figure>

                            <button onClick={this.handleClick_1} className={clo_coul} className="boutonCloche" ></button>
                                        <figure className={clo_coul}>
                                             <img className="cloche_coul" src={cloche_coul}/> 
                                        </figure>
                                        
                                       {/* <img className="check_coul" src={check_coul}/> */}
                                    
                                        
                            </a>
                        </div>
                            <div className="tile_media">
                                <img className="tile_img" src={`${image_key}${this.props.image}`} />
                            </div>
                            <div className="tile_details">  
                                <div class="tile_title">                  
                                    <p>{this.props.description.substr(0, 140)} ...</p>
                                    <h4>{this.props.title}</h4>
                                </div>                                            
                            </div>
                        </div>
                   
                </div>

           
        );
    }
}
export default Slide1