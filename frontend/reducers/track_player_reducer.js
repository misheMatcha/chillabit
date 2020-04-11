import { PLAY_TRACK, PAUSE_TRACK, NEXT_TRACK, PREV_TRACK } from '../actions/track_player_actions';

const initialState = {
  playing: false
};

const trackPlayerReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);
  switch (action.type) {
    case PLAY_TRACK:
      newState.playing = true;
      return newState;
    case PAUSE_TRACK:
      newState.playing = false;
      return newState;
    default:
      return state;
  }
}

export default trackPlayerReducer;