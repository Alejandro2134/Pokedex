import React from 'react';
import { PokemonCard } from '../PokemonCard';

export const PokemonList = ({ pokemons }) => {

    return (

        <ul>
            {pokemons.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
        </ul>

    )

}