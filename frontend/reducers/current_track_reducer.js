import { UPDATE_CURRENT_TRACK } from '../actions/current_track_actions';

const initialState = {
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
      newState.currentTime = action.track.currentTime;
      newState.duration = action.track.duration;
      newState.ended = action.track.ended;
      newState.loop = action.track.loop;
      newState.muted = action.track.muted;
      newState.paused = action.track.paused;
      newState.seeking = action.track.seeking;
      newState.src = action.track.src;
      newState.volume = action.track.volume;
      return newState;
    default:
      return oldState;
  }
};

export default currentTrackReducer;