import { connect } from 'react-redux';
import { playTrack, pauseTrack } from '../../actions/track_player_actions';
import { requestTrack } from '../../actions/track_actions'
import TrackPlayer from './track_player.jsx';

const mSTP = state => ({
  playing: state.ui.trackPlayer.playing,
  track: state.entities.tracks
});

const mDTP = dispatch => ({
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack()),
  fetchTrack: trackId => dispatch(requestTrack(trackId))
});

export default connect(mSTP, mDTP)(TrackPlayer)