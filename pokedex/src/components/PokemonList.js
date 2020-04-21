import React from 'react';

class PokemonList extends React.Component {

    state = {
        offset: 0,
        loading: true,
        pokemons: [],
        error: null,
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {

        try {

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${this.state.offset}&limit=10`);
            const data = (await response.json()).results;
            this.setState({loading: false, pokemons: data});

        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    fetchPokemonData = async url => {

        try {
            const response = await fetch(url);
            const data = (await response.json()).sprites.front_default;
            this.setState({img: data});
        } catch (err){
            console.log(err);
        }

    }

    render() {
        return(
            <div className="container-4">
                <div className="row">
                    {this.state.pokemons.map(pokemon => {
                        return(
                            <div className="col-md-3" key={pokemon.name}>
                                <div className="card text-center">
                                    <img src={this.state.img} className="card-img-top" height="300" width="300" alt="pokemon"/>
                                </div>

                                <div className="card-body">
                                    <h1>{pokemon.name}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default PokemonList;