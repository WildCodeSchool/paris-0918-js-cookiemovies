import React from 'react'
import './Slides.css';
import ajout from './ajout.png'
import check from './check.png'
import check_coul from './check-coul.png'
import cloche from './cloche.png'
import cloche_coul from './cloche-coul.png' 

class Slides extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          on: props.on,
          white: props.white,
          unchecked : props.unchecked,
          unAlert : props.unAlert,
          notSeen : props.notSeen
        };
      }
      
      handClick = () => {
        this.setState({ on: !this.state.on });
    
      };
      handleClick_1 = () => {
        this.setState({ white: !this.state.white });
        this.setState({unAlert: !this.state.unAlert});
        alert = this.props.title
        console.log(alert);
        
        
      };
      handleClick_2 = () => {
          this.setState({ unchecked: !this.state.unchecked})
          this.setState({notSeen: !this.state.notSeen});
          let alreadySeen = this.props.title
          console.log(alreadySeen);
          
          
      } 

    render(){
        const image_key ="https://image.tmdb.org/t/p/w500";
        
        const showIcon = this.state.on ? 'on' : 'off';
        const boutonClo = this.state.white ? 'white' : 'yellow';
        const alert = this.state.unAlert ? 'unAlert' : 'alert';
        const boutonChe = this.state.unchecked ? 'unchecked' : 'checked';
        const seen = this.state.notSeen ? 'notSeen' : 'alreadySeen';

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
                            
                            
                                <button onClick={this.handleClick_1} className={boutonClo} className={alert} className="boutonCloche" ></button>

                                <figure className={boutonClo}>
                                    <img className="cloche_coul" src={cloche_coul}alt=""/>
                                </figure>
                                
                            <button onClick={this.handleClick_2} className={boutonChe} className={seen} className="boutonChecked" ></button>
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