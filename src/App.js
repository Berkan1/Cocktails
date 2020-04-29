import React from 'react';
import './App.css';
import Axios from 'axios';

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
  render() {
  	return (
    	<div>
    	  <Cocktails firstLetter='a'/>
    	</div>
    );
  }	
}

export default App;