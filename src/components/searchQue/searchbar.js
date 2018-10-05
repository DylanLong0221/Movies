import React from 'react';

const searchbar = (props) => (
	<input type="text" placeholder="Search A Movie or Show" style={{height: "40px", width: "50%"}} onChange={props.search} />
	);

export default searchbar;