import {fetchAllPokemon, fetchPokemon} from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const REQUEST_ALL_POKEMON = 'REQUEST_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemon = (payload) => ({
  type: RECEIVE_POKEMON,
  payload
});


export const requestAllPokemon = () => (dispatch) => (
  fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestPokemon = (id) => (dispatch) => (
  fetchPokemon(id).then(poke => dispatch(receivePokemon(poke)))
);
