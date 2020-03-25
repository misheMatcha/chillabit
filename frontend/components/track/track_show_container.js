import { connect } from 'react-redux';
import { requestTrack } from '../../actions/track_actions';
import TrackShow from './track_show.jsx';

const mSTP = ({ entities }) => ({
  track: entities.tracks
});

const mDTP = dispatch => ({
  fetchTrack: trackId => dispatch(requestTrack(trackId))
});

export default connect(mSTP, mDTP)(TrackShow)