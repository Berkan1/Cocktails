import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function CocktailList(props) {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${props.letter}`).then(res => {
      setCocktails(res.data.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink)));
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

function Cocktail(props) {
  return (
  	<li>
      {props.name}
      <img src={props.image} alt={props.name} width="50" height="60"></img>
    </li>
  );
}

export default CocktailList;