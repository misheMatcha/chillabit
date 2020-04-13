import { 
  PLAY_TRACK,
  PAUSE_TRACK,
  ADD_TRACK,
  REMOVE_TRACK,
  RECEIVE_TRACK
} from '../actions/track_player_actions';

// created separate arrays for id for quick querying
// possible refactor later
const initialState = {
  playing: false,
  visisted: [],
  queue: [],
  visistedId: [],
  queueId: [],
  id: null,
  ended: false
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
      newState.queue.push(action.track);
      newState.queueId.push(action.track.id);
      return newState;
    case REMOVE_TRACK:
      newState.visisted.push(action.track);
      newState.visistedId.push(action.track.id);
      return newState;
    case RECEIVE_TRACK:
      newState.id = action.track.id;
      newState.ended = action.track.ended;
      return newState;
    default:
      return state;
  }
}

export default trackPlayerReducer;