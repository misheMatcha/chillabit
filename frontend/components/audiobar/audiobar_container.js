import { connect } from 'react-redux';
import Audiobar from './audiobar.jsx';
import { updateCurrentTrack, playTrack, pauseTrack } from '../../actions/current_track_actions';

const mSTP = state => ({
  currentTrack: state.ui.currentTrack
});

const mDTP = dispatch => ({
  updateTrack: track => dispatch(updateCurrentTrack(track)),
  play: () => dispatch(playTrack()),
  pause: () => dispatch(pauseTrack())
});

export default connect(mSTP, mDTP)(Audiobar);