import React from 'react';

function Letter(props) {
  return (
  	<button className="row" onClick={props.buttonClick}>{props.searchLetter}</button>
  );
} 

export default Letter;