import React, { useEffect, useState } from 'react';
import { PokemonList } from '../components/PokemonList';

import './styles/Home.css';
import PokeballImg from '../img/pokeball.webp';
import PokedexLogo from '../img/pokedex-logo.png';

export const Home = () => {

    const [pokemons, setPokemons] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=10');

    useEffect(() => {

        fetch(url)
            .then(data => data.json())
            .then(pokemonData => {
                setPokemons(pokemonData);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            })
            
    }, [url])

    const handleNext = () => {
        setUrl(pokemons.next);
        setLoading(true);
    }

    const handlePrevious = () => {
        setUrl(pokemons.previous);
        setLoading(true);
    }

    const handlePreviousLast = () => {
        setUrl('https://pokeapi.co/api/v2/pokemon/?offset=950&limit=10');
        setLoading(true);
    }

    return (
        <React.Fragment>
            <div className='containerInfo'>
                <img src={PokedexLogo} alt='pokedex-logo' height='60px' width='340px'/>
            </div>
            <div className='pokemonsContainer'>
            {
                error 
                    ? <h1>Hubo un error</h1>
                    : loading
                        ? <img id='animation' src={PokeballImg} alt='pokeball' width='100px' height='100px' />
                        : <React.Fragment>
                            <PokemonList pokemons={pokemons.results} />
                            <div className='pagination'>
                            {
                                pokemons.previous && pokemons.next
                                ? <React.Fragment>
                                    <button onClick={handlePrevious}>&laquo;</button>
                                    <button onClick={handleNext}>&raquo;</button>
                                </React.Fragment>  
                                : pokemons.previous 
                                    ? <button onClick={handlePreviousLast}>&laquo;</button>
                                    : <button onClick={handleNext}>&raquo;</button>             
                            }  
                            </div>      
                        </React.Fragment>                     
            }  
            </div>
        </React.Fragment> 
    )     
}