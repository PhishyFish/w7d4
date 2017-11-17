import {RECEIVE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POKEMON:
      let result = {};
      action.payload.items.forEach( item => {
        result[item.id] = item;
      });
      return result;
    default:
      return state;
  }
};

export default itemsReducer;
