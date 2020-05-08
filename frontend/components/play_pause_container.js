import { connect } from 'react-redux';
import PlayPauseButton from './play_pause_button';
import { updateCurrentTrack, playTrack, pauseTrack } from '../actions/current_track_actions';

const mSTP = state => ({
  currentTrack: state.ui.currentTrack
});

const mDTP = dispatch => ({
  updateCurrTrack: track => dispatch(updateCurrentTrack(track)),
  play: () => dispatch(playTrack()),
  pause: () => dispatch(pauseTrack())
});

export default connect(mSTP, mDTP)(PlayPauseButton);