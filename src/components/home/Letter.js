import React from 'react';

function Letter(props) {
  const addStyle = (props.searchedLetter===props.searchLetter) && props.usingLetter;

  return (
    <button
      onClick={props.buttonClick} 
      className={'letter-links' + (addStyle ? ' letter-selected' : '')}>
        {props.searchLetter}
      </button>
  );
} 

export default Letter;