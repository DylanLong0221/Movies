import React from 'react';

const searchMovies = (props) => {


	return (
		<div>
			<ul>
				<li>
				<img style={{width: '50px', height: "50px"}} src={props.img} />
				{props.title}
				</li>
			</ul>
		</div>

		);
}

export default searchMovies;