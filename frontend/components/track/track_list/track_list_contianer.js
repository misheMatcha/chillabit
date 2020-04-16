import { connect } from 'react-redux';
import TrackList from './track_list.jsx';
import { requestAllTracks } from '../../../actions/track_actions'

const mSTP = state => ({
  allTracks: Object.values(state.entities.tracks)
});

const mDTP = dispatch => ({
  fetchAllTracks: () => dispatch(requestAllTracks())
});

export default connect(mSTP, mDTP)(TrackList);