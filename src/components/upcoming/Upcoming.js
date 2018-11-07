import React from 'react'
import UpcomingView from './UpcomingView'
import Sidebar from '../menu/SideBar'
import Footer from '../footer/Footer'


class Upcoming extends React.Component{ 
    state = {
        results :[],
        results1 : [],
        results2 :[]  
    }

  getDescription = async () => {
     
      const api_key = "api_key=634dd449d69159e1d015a2f0febaaf61"
      const recup_data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?${api_key}&language=en-FR&page=1&region=FR&language=fr`)
      const recup_data1 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?${api_key}&language=en-FR&page=2&region=FR&language=fr`)
      const recup_data2 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?${api_key}&language=en-FR&page=3&region=FR&language=fr`)
    
      const api_data = await recup_data.json()
      const api_data1 = await recup_data1.json()
      const api_data2 = await recup_data2.json()
      console.log(api_data.results,api_data1.results,api_data2.results);

      this.setState({
                  results: api_data.results,
                  results1: api_data1.results,
                  results2: api_data2.results
    
      })   
      }
      componentDidMount(){
          this.getDescription();
          
      }
    render(){
        return(
            <div className="Upcoming">
            <Sidebar />
            <h1>Prochainement en salle</h1>
            <div className="box">
            {this.state.results.map((element, id) => 
                    <UpcomingView key={element.id} title = {element.title} 
                        id={element.id}
                        image={element.poster_path} 
                        description={element.overview}/>)
                    }
                    {this.state.results1.map((element, id) => 
                    <UpcomingView key={element.id} title = {element.title} 
                        id={element.id}
                        image={element.poster_path} 
                        description={element.overview}/>)
                    }
                    {this.state.results2.map((element, id) => 
                    <UpcomingView key={element.id} title = {element.title} 
                        id={element.id}
                        image={element.poster_path} 
                        description={element.overview}/>)
                    }      
                </div>
                <Footer />
            </div>
        )
    }
}
export default Upcoming