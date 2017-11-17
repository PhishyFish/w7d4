import React from 'react';
import PokemonIndex from './pokemon_index';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = ({pokemon}) => ( //pokemon: pokemon

  <li className="pokemon-index-item" key={ pokemon.id }>
    <Link to={`/pokemon/${pokemon.id}`}>
      <span>{pokemon.id}</span>
      <img src={pokemon.image_url} />
      <span>{pokemon.name}</span>
    </Link>
  </li>
);
