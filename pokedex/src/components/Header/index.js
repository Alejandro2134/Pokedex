import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import PokemonLogo from '../../img/pokemon-logo.png';

export const Header = () => {
    return (
        <header>
            <Link to='/'>
                <img src={PokemonLogo} alt='pokemon-logo' height='50px' width='140px' />
            </Link>
        </header>
    )
}