import React from 'react';
import PokemonList from '../components/PokemonList';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <PokemonList />
            </React.Fragment>
        )
    }
}

export default Home;