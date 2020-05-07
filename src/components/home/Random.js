import React from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import '../../../src/App.css';

class Random extends React.Component {
	getRandomCocktail() {
		let drinkId = '';
  	Axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(res => {
			drinkId = res.data.drinks[0].idDrink;
			this.props.history.push(`/${drinkId}`);
		});
	}
	
	render() {
    return (
			<AwesomeButton type="primary" onPress={() => this.getRandomCocktail() }>Surprise me!</AwesomeButton>
    );
  }
}

export default withRouter(Random);