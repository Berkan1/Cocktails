import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

function CocktailList(props) {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    if (props.searchByLetter){
      Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${props.letter}`).then(res => {
			  if(res.data.drinks) {
			  	setCocktails(res.data.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink)));
			  }
			  else {
			  	setCocktails([]);
			  }
      });
    }
    else {
      Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props.search}`).then(res => {
			  if (res.data.drinks) {
			  	setCocktails(res.data.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink)));
			  }
			  else {
			  	setCocktails([]);
			  }
      });
    }
  }, [props.letter, props.search, props.searchByLetter]);
  
  return (
    <div> 
      <ul>
        {cocktails.map(cocktail => 
          <Cocktail 
            key={cocktail.idDrink} 
            id={cocktail.idDrink} 
            name={cocktail.strDrink} 
            image={cocktail.strDrinkThumb}
          />
        )}
      </ul>
    </div>
  );
}	

function Cocktail(props) {
  return (
  	<li>
      <NavLink to={`/${props.id}`}>
        <p>{props.name}</p>
        <img 
          src={props.image}
          alt={props.name} 
          width="50" 
          height="60">
        </img>
      </NavLink>
    </li>
  );
}

export default CocktailList;