import { RECEIVE_ALL_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions';

const tracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type){
    case RECEIVE_ALL_TRACKS:
      return Object.assign({}, oldState, action.tracks)
    case RECEIVE_TRACK:
      return Object.assign({}, oldState, action.track)
    case REMOVE_TRACK:
      const nextState = Object.assign({}, oldState);
      delete nextState[action.trackId]
    default:
      return oldState;
  }
};

export default tracksReducer;