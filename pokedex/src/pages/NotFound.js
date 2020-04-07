import React from 'react';

//images
import pokemonLogo from '../images/pokemon-logo.png';
import './styles/NotFound.css'

function NotFound () {
    return (
        <div className="NotFound_container">
            <img 
                src={pokemonLogo} 
                alt="pokemon-logo" 
                height="290" 
                width="800"
            />

            <h1>Page Not Found</h1>
        </div>
    );
}

export default NotFound;