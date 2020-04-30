import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function Letter(props) {
  return (
  	<button className="row" onClick={props.buttonClick}>{props.searchLetter}</button>
  );
} 

function Cocktail(props) {
  return (
  	<li>
      {props.name}
      <img src={props.image} alt={props.name} width="50" height="60"></img>
    </li>
  );
}

function CocktailsList(props) {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${props.letter}`).then(res => {
      setCocktails(res.data.drinks);
    });
  }, [props.letter]);

  if (cocktails) {
    return (
      <div> 
        <ul>
          {cocktails.map(cocktail => 
            <Cocktail key={cocktail.idDrink} name={cocktail.strDrink} image={cocktail.strDrinkThumb}/>
          )}
        </ul>
      </div>
    );
  }
  else {
    return (
      <div> 
        No results
      </div>
    );
  }
}	

function App() {
  const [firstLetter, setFirstLetter] = useState('a');

  return (
  	<div>
      <div className="center">
        {alphabet.map(letter => <Letter key={letter} searchLetter={letter} buttonClick={() => setFirstLetter(letter)}/>)}
      </div>
      <CocktailsList letter={firstLetter}/>
    </div>
  );
}

export default App;