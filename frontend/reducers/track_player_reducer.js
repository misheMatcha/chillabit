import { 
  PLAY_TRACK,
  PAUSE_TRACK,
  ADD_TRACK,
  REMOVE_TRACK,
  RECEIVE_TRACK
} from '../actions/track_player_actions';

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
    case ADD_TRACK:
    case REMOVE_TRACK:
    case RECEIVE_TRACK:
    default:
      return state;
  }
}

export default trackPlayerReducer;