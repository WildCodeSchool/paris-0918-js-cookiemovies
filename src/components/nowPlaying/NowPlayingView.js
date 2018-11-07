import React from 'react'
import './NowPlayingView.css';
import ImageNull from '../slides/imagesSlides/afficheNull.png'
import { Link } from 'react-router-dom';

// import ajout from '../slides/imagesSlides/ajout.png'
// import check from '../slides/imagesSlides/check.png'
// import check_coul from '../slides/imagesSlides/check-coul.png'
// import cloche from '../slides/imagesSlides/cloche.png'
// import cloche_coul from '../slides/imagesSlides/cloche-coul.png'

class NowPlayingView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            on: props.on,
            white: props.white,
            unchecked: props.unchecked,
            id: undefined,
            movieOn: false,
            //   slidesOn: true,
        };
    }

    testIDimage = () => {
        this.setState({ id: this.props.id })
        this.setState({
            movieOn: true,
            // slidesOn: false
        })
        console.log(this.props.id);

    }

    handClick = () => {
        this.setState({ on: !this.state.on });
    };

    handleClick_1 = () => {

        this.setState({ white: !this.state.white });

        var myMoviesAlert = []
        myMoviesAlert = JSON.parse(localStorage.getItem('myMoviesAlert'));
        let add = this.props.id

        if (myMoviesAlert.indexOf(add) === -1) {
            myMoviesAlert.push(add);
            localStorage.setItem('myMoviesAlert', JSON.stringify(myMoviesAlert));
            console.log(localStorage);
        } else {
            myMoviesAlert.splice(myMoviesAlert.indexOf(add), 1)
            localStorage.setItem('myMoviesAlert', JSON.stringify(myMoviesAlert));
            console.log(localStorage);
        }
    };

    handleClick_2 = () => {
        this.setState({ unchecked: !this.state.unchecked })

        var myMoviesList = []
        myMoviesList = JSON.parse(localStorage.getItem('myMoviesList'));
        let add = this.props.id

        if (myMoviesList.indexOf(add) === -1) {
            myMoviesList.push(add);
            localStorage.setItem('myMoviesList', JSON.stringify(myMoviesList));
            console.log(localStorage);
        } else {
            myMoviesList.splice(myMoviesList.indexOf(add), 1)
            localStorage.setItem('myMoviesList', JSON.stringify(myMoviesList));
            console.log(localStorage);
        }
    }
    render(){
        const image_key = "https://image.tmdb.org/t/p/w500";
        const imageSrc = this.props.image ? `${image_key}${this.props.image}` : ImageNull

        const showIcon = this.state.on ? 'on' : 'off';
        const boutonClo = this.state.white ? 'white' : 'yellow';
        const boutonChe = this.state.unchecked ? 'unchecked' : 'checked';

        return(
            <div className="nowPlay">
            <Link to={`/synop${this.props.id}`}>
            <div className="wrapper">

                                {/* <button onClick={this.handClick} className={showIcon} className={alert} className="boutonAjout"></button>
                                <img className="ajout" src={ajout} alt="" />
                                <figure className={showIcon} >
                                    <img className="cloche" src={cloche} alt="" />
                                    <img className="check" src={check} alt="" />
                                </figure>


                                <button onClick={this.handleClick_1} className={boutonClo} id="alert" className="boutonCloche" ></button>

                                <figure className={boutonClo}>
                                    <img className="cloche_coul" src={cloche_coul} alt="" />
                                </figure>

                                <button onClick={this.handleClick_2} className={boutonChe} className="boutonChecked" ></button>
                                <figure className={boutonChe}>
                                    <img className="check_coul" src={check_coul} alt="" />
                                </figure>
             */}
                <img src={imageSrc}alt="" />
            </div>
            </Link>
            </div>
        )
    }
}
export default NowPlayingView