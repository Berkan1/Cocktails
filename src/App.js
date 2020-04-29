import React from 'react';
import './App.css';
import Axios from 'axios';

class App extends React.Component {
  state = {
    cocktails: [],
  };

  componentDidMount() {
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c').then(res => {
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

export default App;
