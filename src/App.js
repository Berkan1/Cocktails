import React, { useState } from 'react';
import './App.css';
import Letter from '../src/components/home/Letter';
import CocktailList from '../src/components/home/CocktailList';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function App() {
  const [firstLetter, setFirstLetter] = useState('a');

  return (
  	<div>
      <div>
        {alphabet.map(letter => <Letter key={letter} searchLetter={letter} buttonClick={() => setFirstLetter(letter)}/>)}
      </div>
      <CocktailList letter={firstLetter}/>
    </div>
  );
}

export default App;