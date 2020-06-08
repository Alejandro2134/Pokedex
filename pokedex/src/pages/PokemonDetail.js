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
            ? <h1>Cargando..</h1>
            : <h1>{pokemonData.name}</h1>
    )
}