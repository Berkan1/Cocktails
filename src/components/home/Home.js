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
  const [firstLetter, setFirstLetter] = useState('A');
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
    <div>
      <Container>
        <div className="center">
          <h1>Discover new cocktails!</h1>
        </div>
        <div className="center">
          <div>
          <Search formSubmit={cocktailsBySearch}/>
          <Random />
          </div>
          {alphabet.map(letter => 
            <Letter 
              key={letter} 
              searchLetter={letter} 
              searchedLetter={firstLetter}
              usingLetter={useLetter}
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
      
    </div>
  );
}

export default Home;