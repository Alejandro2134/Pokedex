import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { PokemonDetail } from './pages/PokemonDetail';
import { Header } from './components/Header';

export const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/pokemon/:id' component={PokemonDetail}/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}