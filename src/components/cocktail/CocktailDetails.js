import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

function CocktailDetails(props) {
	const [cocktailInfo, setCocktailInfo] = useState({image: '', name: '', ingredients: [], instructions: ''});

	useEffect(() => {
		Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`).then(res => {
			const cocktailData = res.data.drinks[0];
			const ingredientsList = [];

			for (let i = 1; i <= 15; i++) {
				const ingredient = cocktailData[`strIngredient${i}`];
				if (ingredient){
					ingredientsList.push(cocktailData[`strIngredient${i}`]);
				}
				else {
					break;
				}
			}

			setCocktailInfo({
				image: cocktailData.strDrinkThumb,
				name: cocktailData.strDrink, 
				ingredients: ingredientsList,
				instructions: cocktailData.strInstructions
			})
		});
	}, [props.match.params.id]);
		
  return (
  	<Container>
			<p>
				<NavLink to='/'>Back to cocktails</NavLink>
			</p>
			<img src={cocktailInfo.image} alt={cocktailInfo.strDrink} width="200" height="200"></img>
			<p>
				<strong>{cocktailInfo.name}</strong>
			</p>
			<ul>
        {cocktailInfo.ingredients.map(ingredient => 
          <li key={ingredient}>
						{ingredient}
					</li> 
        )}
      </ul>
			<p>{cocktailInfo.instructions}</p>
  	</Container>
  );
} 

export default CocktailDetails;