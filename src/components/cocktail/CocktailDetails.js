import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import Axios from 'axios';

function CocktailDetails(props) {
	const [cocktailInfo, setCocktailInfo] = useState({
		image: '', 
		name: '', 
		ingredients: [],
		instructions: '',
		alcoholic: '',
		glass: ''
	});

	useEffect(() => {
		Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`).then(res => {
			const cocktailData = res.data.drinks[0];
			const ingredientsList = [];

			for (let i = 1; i <= 15; i++) {
				const ingredient = cocktailData[`strIngredient${i}`];
				let measurement = cocktailData[`strMeasure${i}`];
				if (measurement) {
					measurement = ` (${measurement.substring(0, measurement.length - 1)}) `;
				}
				else {
					measurement = '';
				}

				if (ingredient){
					ingredientsList.push(cocktailData[`strIngredient${i}`] + measurement);
				}
				else {
					break;
				}
			}

			setCocktailInfo({
				image: cocktailData.strDrinkThumb,
				name: cocktailData.strDrink, 
				ingredients: ingredientsList,
				instructions: cocktailData.strInstructions,
				alcoholic: cocktailData.strAlcoholic,
				glass: cocktailData.strGlass
			});

			window.scrollTo(0, 0);
		});
	}, [props.match.params.id]);
		
  return (
  	<Container>
			<Row>
				<Col>
				  <br/>
					<NavLink to='/'>
						<AwesomeButton type="primary">
							<i className="glyphicon glyphicon-arrow-left back-icon"/>Back to cocktails
						</AwesomeButton>
					</NavLink>
				</Col>
			</Row>
			<Row>
				<Col md={5}>
					<img src={cocktailInfo.image} alt={cocktailInfo.strDrink} width="100%" className="cocktail-image"></img>
				</Col>
				<Col md={7}>
					<Row>
						<Col>
							<h2>{cocktailInfo.name}</h2>
							<Badge pill variant="danger">
								{cocktailInfo.alcoholic}
  						</Badge>
							<Badge pill variant="primary">
								<i className="glyphicon glyphicon-glass icon-space"/>{cocktailInfo.glass}
  						</Badge>
							<hr/>
						</Col>
					</Row>
					<Row>
						<Col md={5}>
							<h4>Ingredients</h4>
							<ul>
								{cocktailInfo.ingredients.map(ingredient => 
									<li key={ingredient}>
										{ingredient} 
									</li> 
								)}
							</ul>
						</Col>
						<Col md={7}>
							<h4>Instructions</h4>
							<p>{cocktailInfo.instructions}</p>
						</Col>
					</Row>
				</Col>
			</Row>
  	</Container>
  );
} 

export default CocktailDetails;