import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function Letter(props) {
  return (
    <div style={{ display: 'inline-block' }}>
  	  <button onClick={props.buttonClick}>{props.searchLetter}</button>
	  </div>
  );
} 

function CocktailsList(props) {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${props.letter}`).then(res => {
      setCocktails(res.data.drinks);
    });
  }, [props.letter]);

  return (
    <div> 
    	<ul>
        {(cocktails || []).map(cocktail => 
          <li key={cocktail.idDrink}>
            {cocktail.strDrink}
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width="50" height="60"></img>
          </li>
        )}
      </ul>
    </div>
  );
}	

function App() {
  const [firstLetter, setFirstLetter] = useState('a');

  return (
  	<div>
      {alphabet.map(letter => <Letter key={letter} searchLetter={letter} buttonClick={() => setFirstLetter(letter)}/>)}
      <CocktailsList letter={firstLetter}/>
    </div>
  );
}

export default App;