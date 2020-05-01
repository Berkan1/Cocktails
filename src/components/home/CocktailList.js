import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ErrorPage from './ErrorPage';

function CocktailList(props) {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${props.letter}`).then(res => {
			if(res.data.drinks) {
				setCocktails(res.data.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink)));
			}
			else {
				setCocktails([]);
			}
    });
  }, [props.letter]);
  
  if (cocktails.length > 0) {
    return (
      <div> 
        <ul>
          {cocktails.map(cocktail => 
            <Cocktail key={cocktail.idDrink} id={cocktail.idDrink} name={cocktail.strDrink} image={cocktail.strDrinkThumb}/>
          )}
        </ul>
      </div>
    );
  }
  else {
    return (
      <ErrorPage letter={props.letter}/>
    );
  }
}	

function Cocktail(props) {
  return (
  	<li>
      {props.name}
      <a href="/cocktaildetails">
        <img src={props.image} alt={props.name} width="50" height="60"></img>
      </a>
    </li>
  );
}

export default CocktailList;