import React, { useState } from 'react';

function Search(props) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchTermSubmit = (event) => {
    event.preventDefault();
    props.formSubmit(searchValue);
  }

  return (
    <form onSubmit={handleSearchTermSubmit}>
    	  <input 
          type="text" 
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
          placeholder="Enter a cocktail name" 
          required 
        />
        <button>Search</button>
    	</form>
  );
} 

export default Search;