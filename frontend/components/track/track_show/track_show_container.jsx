import { connect } from 'react-redux';
import { requestTrack } from '../../../actions/track_actions';
import { playTrack, pauseTrack } from '../../../actions/track_player_actions';
import TrackShow from './track_show';

const mSTP = state => ({
  track: state.entities.tracks,
  playing: state.ui.trackPlayer.playing
});

const mDTP = dispatch => ({
  fetchTrack: trackId => dispatch(requestTrack(trackId)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack())
});

export default connect(mSTP, mDTP)(TrackShow);