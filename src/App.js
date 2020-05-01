import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../src/components/home/Home';
import CocktailDetails from '../src/components/cocktail/CocktailDetails';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/CocktailDetails' component={CocktailDetails} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;