import { connect } from 'react-redux';
import TrackShowMini from './track_show_mini';
import { requestTrack } from '../../../actions/track_actions'

const mSTP = (state, ownProps) => ({
  track: state.entities.tracks
});

const mDTP = dispatch => ({
  fetchTrack: trackId => dispatch(requestTrack(trackId))
});

export default connect(mSTP, mDTP)(TrackShowMini);