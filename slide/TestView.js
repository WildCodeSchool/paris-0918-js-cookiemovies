import React from "react";

class TestView extends React.Component{

    render(){
        const affiche = "https://image.tmdb.org/t/p/w500"
        return(
            <div>
                <p>{this.props.title}</p>
                <img src ={`${affiche}${this.props.image}`}alt=""/>
                <p>{this.props.description}</p>


            </div>
        )
    }
}

export default TestView;