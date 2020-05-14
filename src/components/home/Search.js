import React, { useState } from 'react';

function Search(props) {
  const [searchValue, setSearchValue] = useState(props.defaultValue || '');

  const handleSearchTermSubmit = (event) => {
    event.preventDefault();
    props.formSubmit(searchValue);
  }

  return (
    <div>
      <form onSubmit={handleSearchTermSubmit}>
          <input 
            id="searchCocktail"
            type="text" 
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
            placeholder="Enter a cocktail name"
            required 
          />
          <label for="searchCocktail">Enter a cocktail name to search for</label>
          <button className="btn btn-primary btn-search" aria-label="Search">
            <i className="glyphicon glyphicon-search"></i>
          </button>
      </form>
    </div>
  );
} 

export default Search;