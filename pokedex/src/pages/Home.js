import React, { useEffect, useState } from 'react';
import { PokemonList } from '../components/PokemonList';

import './styles/Home.css';
import PokeballImg from '../img/pokeball.webp';

export const Home = () => {

    const [pokemons, setPokemons] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=10');

    useEffect(() => {

        const getPokemons = async () => {

            try {

                const data = await fetch(url);
                const pokemonData = await data.json();
                setPokemons(pokemonData);
                setLoading(false);

            } catch (err) {

                setError(err);
                setLoading(false);

            }

        }

        getPokemons();

    }, [url])

    const handleClick = () => {
        setUrl(pokemons.next);
        setLoading(true);
    }

    return (
        <React.Fragment>
            {
                loading 
                    ? <img id='animation' src={PokeballImg} alt='pokeball' width='100px' height='100px' /> 
                    : (
                        <React.Fragment>
                            <PokemonList pokemons={pokemons.results} />
                            <button onClick={handleClick}>Dame Click!</button>
                        </React.Fragment>
                        
                    )
            }
        </React.Fragment> 
    )
}