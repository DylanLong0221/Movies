import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/header';
import Movie from './components/movies';
import Search from './components/searchQue/searchQuery';

class App extends Component {

  state={
    movies: [],
  }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3b444fbb10b743aa99e6a4f27af457d9&language=en-US&page=1')
    .then(response => {
      this.setState({movies: response.data.results});
    }); 
  }

  render() {
    const movies = this.state.movies.map(movie => {
      return (<Movie title={movie.title} 
      key={movie.id} 
      img={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} 
      date={movie.release_date}
       />
       )
    });

    return (
    <div className="App">
    <header>
      <Header/>
    </header>
    <hr/>
      <main>
          <Search/>
          <h1>Now Playing</h1>
          {movies}
      </main>
    </div>
    );
  }
}

export default App;
