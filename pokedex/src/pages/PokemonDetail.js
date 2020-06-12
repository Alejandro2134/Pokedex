import React, { useEffect, useState } from 'react';

export const PokemonDetail = ({ match }) => {

    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = match.params;

    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(data => data.json())
            .then(pokemon => {
                setPokemonData(pokemon);
                setLoading(false);
            })

    }, [id])

    return (
        loading 
            ? <h1>Loading..</h1>
            : <div className='pokemonInfo'>
                <h1>{pokemonData.name}</h1>
                <h3>Height: {pokemonData.height}</h3>
                <h3>Weight: {pokemonData.weight}</h3>
                <h3>Types:</h3>
                <ul>
                    {
                        pokemonData.types.map(
                            type => <li key={type.type.name}>{type.type.name}</li>
                        )
                    }
                </ul>
                <h3>Abilities:</h3>
                <ul>
                    {
                        pokemonData.abilities.map(
                            ability => <li key={ability.ability.name}>{ability.ability.name}</li>
                        )
                    }               
                </ul>
                <h3>Moves:</h3>
                <ul>
                    {
                        pokemonData.moves.map(
                            move => <li key={move.move.name}>{move.move.name}</li>
                        )
                    }
                </ul>
                <h3>Base Stats:</h3>
                <ul>
                    {
                        pokemonData.stats.map(
                            stat => <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
                        )
                    }
                </ul>
            </div>
    )
}