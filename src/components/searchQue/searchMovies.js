import React from 'react';

const searchMovies = (props) => {

// for the movies that are searched displays a list item with img title etc.. onclick sends id of movie for api to 
// app
	return (
		<div>
			<ul className="listItems" onClick={() => props.clicked(props)}>
				<li>
				<img className="moviePictures" src={props.img} alt="Movie background   "/>
				{props.title}
				</li>
			</ul>
		</div>

		);
}

export default searchMovies;