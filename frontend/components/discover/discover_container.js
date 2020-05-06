import { connect } from 'react-redux';
import Discover from './discover';
import { requestAllTracks } from '../../actions/track_actions';

const mSTP = state => ({
  tracks: Object.values(state.entities.tracks)
});

const mDTP = dispatch => ({
  fetchTracks: () => dispatch(requestAllTracks())
});

export default connect(mSTP, mDTP)(Discover)