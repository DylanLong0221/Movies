import React from 'react';
import SoloCast from './soloCast';


const cast = (props) => {
	let actors
    if(props.array){
    	console.log(props.array);
    actors = props.array.cast.slice(0,5).map(actor => {
    	return <SoloCast key={actor.id} name={actor.name} />
    })
  }

	return (
		<div>
			{actors}
		</div>
		);
}

export default cast;
// need to add 