import { connect } from 'react-redux';
import { playTrack, pauseTrack } from '../../../actions/track_player_actions';
import { requestTrack } from '../../../actions/track_actions'
import TrackPlayer from './track_player';

const mSTP = (state, ownProps) => ({
  playing: state.ui.trackPlayer.playing,
  audioPlayer: ownProps.audioRef,
  currentTrack: state.entities.currentTrack,
});

const mDTP = dispatch => ({
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack()),
  fetchTrack: trackId => dispatch(requestTrack(trackId))
});

export default connect(mSTP, mDTP)(TrackPlayer)