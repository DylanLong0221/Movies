import React from 'react';
import Cast from './cast'
//overlay to show cast and about movie when something is clicked

const overlayDetails = (props) => (
	<div>
		<div className="OverlayBackground" onClick={props.clicked}></div>
		<div className="Overlay">
			<span className="Ex" onClick={props.close}>X</span>
			<h1>{props.title}</h1>
			<h2>{props.date}</h2>
			<img src={props.img} alt="movie" />
			<Cast array={props.cast}/>
		</div>
	</div>
	);
	

export default overlayDetails;

//	<div>
	// 	<h1>{props.title}</h1>
	// 	<p>props.about</p>
	// 	<img>{moviepic}
	// 	cast 5 members li maybe?
	// </div>