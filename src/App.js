import React from 'react';
import './App.css';
import Axios from 'axios';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Letter = (props) => (
	<div style={{ display: 'inline-block' }}>
  	<button onClick={props.buttonClick}>{props.searchLetter}</button>
	</div>
);

class Cocktails extends React.Component {
	render() {
  	return (
    	<div>
    	  <ul>
          {this.props.cocktailsList.map(cocktail => <li>{cocktail.strDrink}</li>)}
        </ul>
    	</div>
    );
  }	
}

class App extends React.Component {
  state = {
    cocktails: [],
  };

  fetchCocktails(letter){
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`).then(res => {
      this.setState({ cocktails: res.data.drinks });
    });
  }

  componentDidMount() {
    this.fetchCocktails('a');
  }

  changeFirstLetter = (newLetter) => {
    this.fetchCocktails(newLetter);
  };

  render() {
  	return (
    	<div>
        {alphabet.map(letter => <Letter key={letter} searchLetter={letter} buttonClick={() => this.changeFirstLetter(letter)}/>)}
    	  <Cocktails cocktailsList={this.state.cocktails}/>
    	</div>
    );
  }	
}

export default App;