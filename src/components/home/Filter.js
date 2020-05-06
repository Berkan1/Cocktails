import React from 'react';

function Filter(props) {
  return (
		<div>
    	<label for="cars">Drink type:</label>
			<select id="cars">
  			<option value="volvo">All</option>
				<option value="saab" >Alcoholic</option>
				<option value="opel">Non-alcoholic</option>
			</select>
		</div>
  );
} 

export default Filter;
