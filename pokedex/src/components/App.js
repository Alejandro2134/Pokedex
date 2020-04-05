import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import PokemonInfo from '../pages/PokemonInfo';

function App () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/:pokemonId/info" component={PokemonInfo}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;