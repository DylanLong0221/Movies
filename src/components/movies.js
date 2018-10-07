import React from 'react';

const movies = (props) => {
	//Movies for now playing just with a img prop title and date and onclick to pass id for overlay screen
	return(
		<div className="Movies" onClick={() => props.clicked(props)}>
			<div className="Hovered">
				<span><img src={props.img} alt="movie" /></span>
				<p>{props.title}</p>
				<p>{props.date}</p>
			</div>
		</div>
	);

}

export default movies;
//change a to div or something else  span