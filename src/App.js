import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/header';
import Movie from './components/movies';
import Search from './components/searchQue/searchQuery';
import OverlayDetails from './components/overlayDetails/overlayDetails';

class App extends Component {

  state={
    movies: [],
    //for overlay should be changed to true when onclick is fired so 
    // the overlay is popped up with specefic id
    movieClicked: false,
    movieId: '',
    creditsResults: null,
    image: "",
    title: "",
    date: ""
  }

  //getting movies playing now + putting into movies state
  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3b444fbb10b743aa99e6a4f27af457d9&language=en-US&page=1')
    .then(response => {
      this.setState({movies: response.data.results});
    }); 
  }
  // movie overlay cast etc...
  componentDidUpdate(prevState) {
      let searchQue = "https://api.themoviedb.org/3/movie/" + this.state.movieId + "/credits?api_key=3b444fbb10b743aa99e6a4f27af457d9";
      if(this.state.movieClicked){
        axios.get(searchQue)
        .then(response => {
          if(this.state.creditsResults){
            return
           }
          else{
            this.setState({creditsResults: response.data});
           }
        })
      }
   }

  //getting id from movie when clicked so overlay will be the right id set previos state--overlay settings 
    showOverlay = (e) => {
    this.setState({
      movieId: e.id,
      image: e.img,
      title: e.title,
      movieClicked: true,
      date: e.date
    });
  }

   hideOverlay = (e) => {
    this.setState({
      movieClicked: false,
      movieId: '',
      title: '',
      image: '',
      creditsResults: null,
      date: ''
    });
   }

  render() {
    //maping through the movies and displaying them as a list item with multiple props for imgs etc.
    const movies = this.state.movies.map(movie => {
      return (<Movie title={movie.title} 
      id={movie.id}
      key={movie.id} 
      img={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} 
      date={movie.release_date}
      clicked={this.showOverlay}
       />
       )
    });
    //actors that we will pass as props

    //if state of overlay is true then overlay is true
    let overlay
    if(this.state.movieClicked){
      overlay = <OverlayDetails 
      clicked={this.hideOverlay} 
      img={this.state.image}
      title={this.state.title}
      cast={this.state.creditsResults}
      close={this.hideOverlay}
      date={this.state.date}
      />
    }

    //trying to break everything up as much as possible without creating to many stateful components
    return (
      <div className="App">
      <header>
        <Header/>
      </header>
      <hr/>
        <main>
            {overlay}
            <Search clicked={this.showOverlay}/>
            <h1>Now Playing</h1>
            {movies}
        </main>
      </div>
    );
  }
}

export default App;
