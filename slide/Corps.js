import React, { Component } from 'react'
import './Corps.css'

class Corps extends Component{
    render(){
        return(
            <div className="corps">
                <div className="bubble_1">
                <p>Notez les films que vous voulez voir et ceux que vous avez déja vus </p>
                </div>
                <div className="bubble_2">
                <p>Soyez au courant dès qu'un film que vous avez envie de voir sort au cinéma</p>
                </div>
                <div className="bubble_3">
                <p>Retrouver tous vos films sur plateformes préfées</p>
                </div>
            </div>
        )
    }
}
export default Corps