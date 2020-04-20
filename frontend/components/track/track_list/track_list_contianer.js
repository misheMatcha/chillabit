import { connect } from 'react-redux';
import TrackList from './track_list.jsx';
import { requestAllTracks } from '../../../actions/track_actions'

const mSTP = (state, ownProps) => ({
  allTracks: Object.values(state.entities.tracks),
  discTitle: ownProps.title,
  discDesc: ownProps.desc
});

const mDTP = dispatch => ({
  fetchAllTracks: () => dispatch(requestAllTracks())
});

export default connect(mSTP, mDTP)(TrackList);