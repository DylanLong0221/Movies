import React, {Component} from 'react';
import axios from 'axios';
import SearchBar from './searchbar';

class SearchQuery extends Component {
	state = {
		searchQue: ""
	}

	componentDidMount(){
		console.log("test");
	}


	searchBarQue = (event) => {
		this.setState({searchQue: event.target.value});
	}

	render(){


		return(
			<div>
				<SearchBar search={this.searchBarQue} name={this.state.searchQue}/>
			</div>
			);
	}

}

export default SearchQuery;

  //  const searched = this.state.results.map(movie => {
   //   return (
   //     <SearchMovies 
   //     img={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
  //      title={movie.title}
  //      key={movie.id}
  //      />
 //      )
 //   });


//  searchBarQue = (event) => {
 //   this.setState({searchQue: event.target.value});
  //  let searchQue = "https://api.themoviedb.org/3/search/multi?api_key=3b444fbb10b743aa99e6a4f27af457d9&language=en-US&query=" + this.state.searchQue + "&page=1&include_adult=false";

  //  axios.get(searchQue)
  //  .then(response => {
 //     this.setState({results: response.data.results});
 //     console.log(this.state.results);
 //   })
  
 // }