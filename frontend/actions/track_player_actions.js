import * as TrackUtil from '../util/track_util';
export const PLAY_TRACK = "PLAY_TRACK";
export const PAUSE_TRACK = "PAUSE_TRACK";
export const ADD_TRACK = "ADD_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_TRACK = 'RECEIVE_TRACK';

export const playTrack = () => ({
  type: PLAY_TRACK
});

export const pauseTrack = () => ({
  type: PAUSE_TRACK
});

export const addTrack = track => ({
  type: ADD_TRACK,
  track
});

export const removeTrack = () => ({
  type: REMOVE_TRACK
});

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const requestTrack = trackId => dispatch => TrackUtil.fetchTrack(trackId)
  .then(track => dispatch(receiveTrack(track)));

export const updateCurrentTrack = track => ({
  type: RECEIVE_TRACK,
  track
});