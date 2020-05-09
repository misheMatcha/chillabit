import { UPDATE_CURRENT_TRACK, PLAY_TRACK, PAUSE_TRACK } from '../actions/current_track_actions';

const initialState = {
  id: null,
  title: null,
  artist: null,
  cover: null,
  src: null,
  currentTime: 0,
  duration: NaN,
  ended: null,
  loop: null,
  muted: null,
  paused: null,
  seeking: null,
  volume: null,
  playing: false
};

const currentTrackReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case UPDATE_CURRENT_TRACK:
      return Object.assign(newState, action.track);
    case PLAY_TRACK:
      newState.playing = true;
      return newState;
    case PAUSE_TRACK:
      newState.playing = false;
      return newState;
    default:
      return oldState;
  }
};

export default currentTrackReducer;