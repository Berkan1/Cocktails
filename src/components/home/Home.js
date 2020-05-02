import React, { useState } from 'react';
import '../../../src/App.css';
import Letter from './Letter';
import Random from './Random';
import Search from './Search';
import CocktailList from './CocktailList';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function Home() {
  const [firstLetter, setFirstLetter] = useState('a');
  const [searchText, setSearchText] = useState('');

  const searchSubmit = (params) => {
    setSearchText(params);
  }

  return (
  	<div>
      <div className="center">
        <h1>Find a cocktail</h1>
      </div>
      <div className="center">
        {alphabet.map(letter => 
          <Letter 
            key={letter} 
            searchLetter={letter} 
            buttonClick={() => setFirstLetter(letter)}
          />
        )}
      </div>
      <Random />
      <Search formSubmit={searchSubmit}/>
      <CocktailList letter={firstLetter} search={searchText}/>
    </div>
  );
}

export default Home;