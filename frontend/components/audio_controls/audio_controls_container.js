import { connect } from 'react-redux';
import AudioControls from './audio_controls.jsx';
import { playTrack } from '../../actions/audio_controls_actions';

const mSTP = state => ({});

const mDTP = dispatch => ({
  play: () => dispatch(playTrack())
});

export default connect(mSTP, mDTP)(AudioControls);