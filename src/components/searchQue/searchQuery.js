import React, {Component} from 'react';
import axios from 'axios';

import SearchBar from './searchbar';
import SearchMovies from './searchMovies';

class SearchQuery extends Component {
	state = {
		searchQue: "",
		results: null,
		isLoaded: false
    }

	 componentDidUpdate(prevState) {
	  	let searchQue = "https://api.themoviedb.org/3/search/movie?api_key=3b444fbb10b743aa99e6a4f27af457d9&language=en-US&query=" + this.state.searchQue + "&page=1&include_adult=false";
	  	if(this.state.searchQue.length > 0){
	  		axios.get(searchQue)
	  		.then(response => {
	  			if(this.state.results && this.state.results.total_results === response.data.total_results){
	  				return
	  			}
	  			else{
	  			this.setState({results: response.data});
	 			this.setState({isLoaded: true});
	  			console.log(this.state.results);
	  			}
	  		})
     	}
	 }

	searchBarQue = (event) => {
		this.setState({searchQue: event.target.value});
		this.setState({isLoaded: false});
	}



	render(){
		let searchedMovies
		if(this.state.isLoaded){
		searchedMovies = this.state.results.results.map(movie => {
			return <SearchMovies title={movie.title} key={movie.id} img={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}/>
		})
		}
		else{
			searchedMovies = null;
		}

		return(
			<div>
				<SearchBar search={this.searchBarQue} name={this.state.searchQue}/>
				{searchedMovies}
			</div>
			);
	}

}

export default SearchQuery;
