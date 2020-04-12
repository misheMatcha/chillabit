import { PLAY_TRACK, PAUSE_TRACK, PREV_TRACK, NEXT_TRACK, ADD_TRACK, REMOVE_TRACK } from '../actions/track_player_actions';

// created separate arrays for id for quick querying
// possible refactor later
const initialState = {
  playing: false,
  visisted: [],
  queue: [],
  visistedId: [],
  queueId: []
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
      newState.queue.push(action.track);
      newState.queueId.push(action.track.id);
      return newState;
    case REMOVE_TRACK:
      newState.visisted.push(action.track);
      newState.visistedId.push(action.track.id);
      return newState;
    default:
      return state;
  }
}

export default trackPlayerReducer;