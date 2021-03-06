import React, {Component} from 'react';
import axios from 'axios';

import SearchBar from './searchbar';
import SearchMovies from './searchMovies';

class SearchQuery extends Component {
	//state for the input/results of input/if the results have loaded
	state = {
		searchQue: "",
		results: null,
		isLoaded: false
    }
    //using the api to search the input string and then setting state without inifinite loop with componentDidUpdate
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
	  			}
	  		})
     	}
	 }
	 //grabbing the input and then setting state + returning isLoaded to false so everytime its updated isLoaded goes to false
	 //so when componentdidupdate is called above it changes it to true after the content is loaded. Trying to steer away from errors
	searchBarQue = (event) => {
		this.setState({searchQue: event.target.value});
		this.setState({isLoaded: false});
	}



	render(){
		//Checking if the movies are loaded we searched for and if they are then we map them in a ul with multiple props
		let searchedMovies
		if(this.state.isLoaded){
		searchedMovies = this.state.results.results.map(movie => {
			return <SearchMovies  clicked={this.props.clicked} title={movie.title} id={movie.id} key={movie.id} img={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}/>
		})
		}
		else{
			searchedMovies = null;
		}

		//not a lot to return on this one
		return(
			<div>
				<SearchBar search={this.searchBarQue} name={this.state.searchQue}/>
				{searchedMovies}
			</div>
			);
	}

}

export default SearchQuery;
