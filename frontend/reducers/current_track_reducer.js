import { ADD_CURRENT_TRACK } from '../actions/current_track_actions';

const initialState = {
  autoplay: null,
  buffered: null,
  currentSrc: null,
  currentTime: null,
  duration: null,
  ended: null,
  loop: null,
  muted: null,
  paused: null,
  seekable: null,
  seeking: null,
  src: null,
  volume: null
};

const currentTrackReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case ADD_CURRENT_TRACK:
      newState.autoplay = action.track.autoplay;
      newState.buffered = action.track.buffered;
      newState.currentSrc = action.track.currentSrc;
      newState.currentTime = action.track.currentTime;
      newState.duration = action.track.duration;
      newState.ended = action.track.ended;
      newState.loop = action.track.loop;
      newState.muted = action.track.muted;
      newState.paused = action.track.paused;
      newState.seekable = action.track.seekable;
      newState.seeking = action.track.seeking;
      newState.src = action.track.src;
      newState.volume = action.track.volume;
      return newState;
    default:
      return oldState;
  }
};

export default currentTrackReducer;