import { ADD_CURRENT_TRACK } from '../actions/current_track_actions';

const initialState = {
  artist: null,
  title: null,
  cover: null,
  src: null,
  currentTime: null,
  duration: null,
  paused: null,
  ended: null
};

const currentTrackReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case ADD_CURRENT_TRACK:
      newState.artist = action.track.artist;
      newState.title = action.track.name;
      newState.src = action.track.trackURL;
      return newState;
    default:
      return oldState;
  }
};

export default currentTrackReducer;