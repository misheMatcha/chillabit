import { connect } from 'react-redux';
import { playTrack, pauseTrack } from '../../actions/track_player_actions';
import TrackPlayer from './track_player.jsx';

const mSTP = state => ({
  playing: state.ui.trackPlayer.playing
});

const mDTP = dispatch => ({
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack()),
});

export default connect(mSTP, mDTP)(TrackPlayer)