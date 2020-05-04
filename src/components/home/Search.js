import React, { useState } from 'react';

function Search(props) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchTermSubmit = (event) => {
    event.preventDefault();
    props.formSubmit(searchValue);
  }

  return (
    <div class="center">
      <form onSubmit={handleSearchTermSubmit}>
          <input 
            type="text" 
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
            placeholder="Enter a cocktail name"
            required 
          />
          <button class="btn btn-primary btn-search">
            <span class="glyphicon glyphicon-search"></span>
          </button>
      </form>
    </div>
  );
} 

export default Search;