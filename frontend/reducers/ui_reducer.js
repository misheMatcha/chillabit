import { combineReducers } from 'redux';

import modal from './modal_reducer';
import currentTrack from './current_track_reducer';
import audioControls from './audio_controls_reducer';

export default combineReducers({
  modal,
  currentTrack,
  audioControls
});