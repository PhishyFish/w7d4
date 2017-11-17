import React from 'react';
import { Route } from 'react-router';
import ItemDetailContainer from '../items/item_detail_container';
import Item from '../items/item';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id){
      this.props.requestPokemon(newProps.match.params.id);
    }
  }

  render() {
    if (this.props.pokemon) {
      return (
        <section className="pokemon-detail">
          <figure>
            <img src={this.props.pokemon.image_url} />
          </figure>
          <ul>
            <li><h2>{this.props.pokemon.name}</h2></li>
            <li>Type: {this.props.pokemon.type}</li>
            <li>Attack: {this.props.pokemon.attack}</li>
            <li>Defense: {this.props.pokemon.defense}</li>
            <li>Moves: {this.props.pokemon.moves}</li>
          </ul>
          <section>
            <h3>Items</h3>
            <ul>
              {this.props.items.map(item => <Item key={item.name} item={item} />)}
            </ul>
          </section>
          <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
        </section>
      );
    } else {
      return null;
    }
  }
}

export default PokemonDetail;
