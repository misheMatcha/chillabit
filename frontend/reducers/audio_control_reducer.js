import { PLAY_TRACK, PAUSE_TRACK, PREV_TRACK, NEXT_TRACK, ADD_TRACK, REMOVE_TRACK } from '../actions/audio_control_actions';

const initialControls = {
  playing: false,
  loop: false,
  muted: false,
  volume: 1
};

export default audioControlReducer = (state=initialControls, action) => {
  Object.freeze(state);
  let newControls = Object.assign({}, state);
  switch(action){
    case PLAY_TRACK:
      newControls.playing = true;
    case PAUSE_TRACK:
    case PREV_TRACK:
    case NEXT_TRACK:
    case ADD_TRACK:
    case REMOVE_TRACK:
    default:
      return newControls;
  }
}