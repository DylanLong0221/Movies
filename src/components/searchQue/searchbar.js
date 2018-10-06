import React from 'react';
//just the input for the search bar input is passed to search query then query is passed to app
const searchbar = (props) => (
	<input type="text" placeholder="Search A Movie or Show" style={{height: "40px", width: "50%"}} onChange={props.search} />
	);

export default searchbar;