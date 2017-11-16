import {values} from 'lodash';

export const selectAllPokemon = (state) => {
  let result = values(state.entities.pokemon);
  return result;
};
