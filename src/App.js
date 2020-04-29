import React from 'react';
import './App.css';
import Axios from 'axios';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Letter = (props) => (
	<div>
  	<button>{props.searchLetter}</button>
	</div>
);

class Cocktails extends React.Component {
	state = {
    cocktails: [],
  };

  componentDidMount() {
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${this.props.firstLetter}`).then(res => {
      console.log(res);
      this.setState({ cocktails: res.data.drinks });
    });
  }
  
	render() {
  	return (
    	<div>
    	  <ul>
          {this.state.cocktails.map(cocktail => <li>{cocktail.strDrink}</li>)}
        </ul>
    	</div>
    );
  }	
}

class App extends React.Component {
  state = {
    firstLetter: 'a',
  };

  changeFirstLetter = (newLetter) => {
  	this.setState({ firstLetter: newLetter });
  };

  render() {
  	return (
    	<div>
        {alphabet.map(letter => <Letter searchLetter = {letter}/>)}
    	  <Cocktails firstLetter = {this.state.firstLetter}/>
    	</div>
    );
  }	
}

export default App;