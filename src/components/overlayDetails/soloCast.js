import React from 'react';

const soloCast = (props) => {
	let imglink = "http://image.tmdb.org/t/p/w185//" + props.img;
	return(
	<span className="castMem">
		<img className="castPic" src={imglink} alt="actor" />
		<h1 className="castName">{props.name}</h1>
	</span>
	);
	}

export default soloCast;

//add img above h1 props is called img dunno link