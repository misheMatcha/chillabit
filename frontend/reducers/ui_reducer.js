import { combineReducers } from 'redux';

import modal from './modal_reducer';
import trackPlayer from './track_player_reducer';

export default combineReducers({
  modal,
  trackPlayer
});