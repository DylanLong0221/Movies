import React from 'react';

const movies = (props) => {

	return(
		<div className="Movies">
			<div className="Hovered">
				<a href="/"><img src={props.img} alt="movie" /></a>
				<p>{props.title}</p>
				<p>{props.date}</p>
			</div>
		</div>
	);

}

export default movies;