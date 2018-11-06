import React from 'react'
import './UpcomingView.css';
import ImageNull from '../slides/imagesSlides/afficheNull.png'

class UpcomingView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          on: props.on,
          white: props.white,
          unchecked : props.unchecked,
          id:undefined
           
    
        };
      }

      testIDimage = () =>{
          this.setState({id : this.props.id})
          console.log(this.state.id);
          
          
      }
      
      handClick = () => {
        this.setState({ on: !this.state.on });                  
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
        const imageSrc = this.props.image ? `${image_key}${this.props.image}` : ImageNull

        
        return(
            <div className="wrapper">
                <img src={imageSrc} alt="" />
            </div>
        )
    }
}
export default UpcomingView