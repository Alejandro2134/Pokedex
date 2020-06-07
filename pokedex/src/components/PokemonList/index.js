import React from 'react';
import { PokemonCard } from '../PokemonCard';

import './PokemonList.css';

export const PokemonList = ({ pokemons }) => {

    return (
        <div className='container'>
            {pokemons.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
        </div>
    )

}