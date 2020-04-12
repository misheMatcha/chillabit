import { PLAY_TRACK, PAUSE_TRACK, PREV_TRACK, NEXT_TRACK, ADD_TRACK, REMOVE_TRACK } from '../actions/track_player_actions';

const initialState = {
  playing: false,
  prevTracks: [],
  trackQueue: []
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

    case PREV_TRACK:
    case NEXT_TRACK:
    case ADD_TRACK:
      newState.prevTracks.push(action.track);
      return newState;
    case REMOVE_TRACK:
    default:
      return state;
  }
}

export default trackPlayerReducer;