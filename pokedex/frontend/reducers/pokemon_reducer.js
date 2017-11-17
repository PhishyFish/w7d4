import {RECEIVE_ALL_POKEMON, RECEIVE_POKEMON} from '../actions/pokemon_actions';
import {fetchAllPokemon} from '../util/api_util';
import merge from 'lodash/merge';

const pokemonReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POKEMON: //SINGLE POKEMON REQUEST
      let newState = merge({}, state, {[action.payload.pokemon.id]: action.payload.pokemon});
      return newState;
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    default:
      return state;
  }
};

export default pokemonReducer;
