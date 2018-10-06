import React from 'react';

//overlay to show cast and about movie when something is clicked

const overlayDetails = (props) => (
	<div>
		<div className="OverlayBackground" onClick={props.clicked}></div>
		<div className="Overlay"></div>
	</div>
	);
	

export default overlayDetails;

//	<div>
	// 	<h1>{props.title}</h1>
	// 	<p>props.about</p>
	// 	<img>{moviepic}
	// 	cast 5 members li maybe?
	// </div>