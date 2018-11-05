import React from "react";
import SideBar from "./SideBar";
import moment from 'moment';

class Date extends React.Component {
    state = {
        count:  0,
        date: undefined
    }

    getLocalStorageId = async  () => {
        const tab = [346910, 4244139, 332562, 439079]
    
        let compteur = []
        
        await localStorage.setItem('myMoviesAlert', JSON.stringify(tab))
        
        const tab2 = JSON.parse( localStorage.getItem('myMoviesAlert'))
        const id = await tab2.map(async (element, index) => {
            this.getNotification(element,compteur)
        })
        return id
    }



    
    getNotification = async (movie_id,compteur) => {
        const recup_data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/release_dates?api_key=634dd449d69159e1d015a2f0febaaf61`)
        const api_data = await recup_data.json()
        const map_data = await api_data.results.filter(element => {
            if (element.iso_3166_1 === "FR") {
                return element.release_dates[0].release_date.substr(0, 10)
            }
        })
        const release = map_data[0].release_dates[0].release_date.substr(0, 10)
        const date_today = moment().format('YYYY-MM-DD');
        
        if (release !== date_today) {
            compteur.push(1)            
        }

        this.setState({
            date: release,
            count :compteur.length
        })
    }

    componentDidMount() {

        this.getLocalStorageId()
    }
    render() {
  
        return (
            <div>
                < SideBar count={this.state.count}/>


            </div>
        )

    }
}
export default Date;