import React from 'react';

function Letter(props) {
  return (
  	<button onClick={props.buttonClick} class="letter-links">{props.searchLetter}</button>
  );
} 

export default Letter;