import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './PokemonCard.css';
import PokeballImg from '../../img/pokeball.webp';

export const PokemonCard = ({ pokemon }) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        let isSuscribed = true;

        fetch(pokemon.url)
            .then(data => data.json())
            .then(pokemonData => {
                if(isSuscribed) {
                    setData(pokemonData);
                    setLoading(false);
                }   
            })
            .catch(err => {
                if(isSuscribed) {
                    setError(err);
                    setLoading(false);
                } 
            })

        return () => isSuscribed = false;
        
    }, [pokemon])


    return (
        <div className='card'>
            {
                error 
                    ? <h1>Hubo un error</h1>
                    : (
                        <React.Fragment>
                            {
                                loading
                                    ? <img id='animation' src={PokeballImg} alt='pokeball' width='100px' height='100px' />
                                    : (
                                        <React.Fragment>
                                            <Link to={`/pokemon/${data.id}`}>
                                                <img src={data.sprites.front_default} alt={data.name} />
                                            </Link>
                                            <h2>{data.name}</h2>
                                        </React.Fragment>
                                    )
                            }
                        </React.Fragment>
                    )
            } 
        </div>
    )
}