import React, { useState } from 'react';
import '../../../src/App.css';
import Letter from './Letter';
import CocktailList from './CocktailList';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function Home() {
  const [firstLetter, setFirstLetter] = useState('a');

  return (
  	<div>
      <div className="center">
        {alphabet.map(letter => 
          <Letter key={letter} searchLetter={letter} buttonClick={() => setFirstLetter(letter)}/>
        )}
      </div>
      <CocktailList letter={firstLetter}/>
    </div>
  );
}

export default Home;