import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../../../src/App.css';
import Letter from './Letter';
import Random from './Random';
import Search from './Search';
import CocktailList from './CocktailList';
import 'bootstrap/dist/css/bootstrap.min.css';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function Home() {
  const [firstLetter, setFirstLetter] = useState('a');
  const [searchText, setSearchText] = useState('');
  const [useLetter, setUseLetter] = useState(true);

  const cocktailsByLetter = (letterValue) => {
    setFirstLetter(letterValue);
    setUseLetter(true);
  }

  const cocktailsBySearch = (searchValue) => {
    setSearchText(searchValue);
    setUseLetter(false);
  }

  return (
  	<Container>
      <div className="center">
        <h1>Find a cocktail</h1>
      </div>
      <div className="center">
        <Random />
        <Search formSubmit={cocktailsBySearch}/>
        {alphabet.map(letter => 
          <Letter 
            key={letter} 
            searchLetter={letter} 
            buttonClick={() => cocktailsByLetter(letter)}
          />
        )}
      </div>
      <CocktailList 
        letter={firstLetter} 
        search={searchText}
        searchByLetter={useLetter}
      />
    </Container>
  );
}

export default Home;