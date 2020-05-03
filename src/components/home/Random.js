import React from 'react';
import Axios from 'axios';

function getRandomCocktail() {
	let drinkId = '';
  Axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(res => {
		drinkId = res.data.drinks[0].idDrink;
		window.location=`/${drinkId}`;
	});
}

function Random() {
  return (
  	<button onClick={getRandomCocktail} class="btn btn-primary">Surprise me!</button>
  );
} 

export default Random;