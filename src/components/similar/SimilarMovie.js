// import React from 'react';
// import DisplaySimilar from './DisplaySimilar';
// import "./DisplaySimilar.css";

// class Similar extends React.Component {
    
//         state ={
//             result :[],
//             idMovie: 550
//         }

//     getsimilar = async () => {
//         await this.setState({
//             idMovie: this.props.idMovie,
//         })
//     const API_KEY = "2eda3279b136755e70112c03536cdd22";
//     const api_call = await fetch (`https://api.themoviedb.org/3/movie/${this.state.idMovie}/similar?api_key=${API_KEY}&language=fr-FR&page=1`);
//     const data = await api_call.json();
//     console.log('data',data)

//     this.setState({
//         result : data.results
//         })
//     }
    
//     componentDidMount(){
//         this.getsimilar();
        
//     }
    
//     render () {
//         if(true )
//          return (<p style = color: 'white'>Loading...</p>)
//         return (this.state.results &&
//             <div>
//                 {this.state.result.slice(0, 3).map((element,id) =>
//                 <DisplaySimilar 
//                     key={id}
//                     affiche = {element.poster_path}
//                     titre = {element.title} />
//               )}  
                 
//             </div>
//         );
//     }
// };

// export default Similar;