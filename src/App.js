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
  }

  //getting movies playing now + putting into movies state
  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3b444fbb10b743aa99e6a4f27af457d9&language=en-US&page=1')
    .then(response => {
      this.setState({movies: response.data.results});
    }); 
  }

  //getting id from movie when clicked so overlay will be the right id set previos state
    showOverlay = (e) => {
    console.log(e);
    this.setState({movieId: e.id})
    this.setState({movieClicked: true});
  }

    hideOverlay = (e) => {
      this.setState({movieClicked: false});
      this.setState({movieId: ''});
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
    let overlay
    if(this.state.movieClicked){
      overlay = <OverlayDetails clicked={this.hideOverlay}/>
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
