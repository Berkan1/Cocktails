import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../src/components/home/Home';
import CocktailDetails from '../src/components/cocktail/CocktailDetails';

function App() {
  return (
    <div>
      <div className="main-body">
        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/:id' component={CocktailDetails} />
            </Switch>
        </BrowserRouter>
      </div>
      <footer className="footer">
        This site was created for educational purposes using the API provided by <a href="https://www.thecocktaildb.com/api.php">TheCocktailDB</a>. Please support their site!
      </footer>
    </div>
  );
}

export default App;