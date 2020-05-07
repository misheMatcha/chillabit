import { UPDATE_CURRENT_TRACK } from '../actions/current_track_actions';

const initialState = {
  id: null,
  title: null,
  artist: null,
  cover: null,
  currentTime: null,
  duration: null,
  ended: null,
  loop: null,
  muted: null,
  paused: null,
  seeking: null,
  src: null,
  volume: null
};

const currentTrackReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case UPDATE_CURRENT_TRACK:
      return Object.assign(newState, action.track);
    default:
      return oldState;
  }
};

export default currentTrackReducer;