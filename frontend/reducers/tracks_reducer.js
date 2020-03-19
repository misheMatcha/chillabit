import { RECEIEVE_ALL_TRACKS, RECEIEVE_TRACK, REMOVE_TRACK } from '../actions/track_actions';

const tracksReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action){
    case RECEIEVE_ALL_TRACKS:
      return Object.assign({}, oldState, action.tracks)
    case RECEIEVE_TRACK:
      return Object.assign({}, oldState, {[action.track.id]: action.track})
    case REMOVE_TRACK:
      const nextState = Object.assign({}, oldState);
      delete nextState[action.trackId]
    default:
      return oldState;
  }
};

export default tracksReducer;