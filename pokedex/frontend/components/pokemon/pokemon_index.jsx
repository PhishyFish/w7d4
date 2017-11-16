import React from 'react';

class PokemonIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <div>
        <ul>
          { this.props.pokemon.map(animal => (
            <li key={ animal.id }>
              <img width="300px" src={animal.image_url} />
              <h2>{animal.name}</h2>
            </li>
            )
          )}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
