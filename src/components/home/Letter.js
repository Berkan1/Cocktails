import React from 'react';

function Letter(props) {
  return (
  	<button onClick={props.buttonClick}>{props.searchLetter}</button>
  );
} 

export default Letter;