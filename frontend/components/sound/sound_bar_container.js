import { connect } from 'react-redux';
import { requestTrack } from '../../actions/track_actions';
import SoundBar from './sound_bar';

const mSTP = ({ entities }) => ({
  track: entities.tracks
});

const mDTP = dispatch => ({
  fetchTrack: trackId => dispatch(requestTrack(trackId))
});

export default connect(mSTP, mDTP)(SoundBar);