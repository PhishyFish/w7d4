import { connect } from 'react-redux';
import {selectAllPokemon} from '../../reducers/selectors';
import {requestPokemon} from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import { withRouter } from 'react-router';
import {values} from 'lodash';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[ownProps.match.params.id],
  items: values(state.entities.items)
});

const mapDispatchToProps = dispatch => ({
  requestPokemon: (id) => dispatch(requestPokemon(id))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));
