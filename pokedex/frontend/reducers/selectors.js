import {values} from 'lodash';

export const selectAllPokemon = (state) => {
  let result = values(state.entities.pokemon);
  return result;
};

export const selectPokemonItem = (state, itemId) => {
  console.log(itemId, state.entities.items);
  return state.entities.items[itemId];
};
