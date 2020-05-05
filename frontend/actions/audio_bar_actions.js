export const PLAY_TRACK = "PLAY_TRACK";
export const PAUSE_TRACK = "PAUSE_TRACK";
export const PREV_TRACK = "PREV_TRACK";
export const NEXT_TRACK = "NEXT_TRACK";
export const ADD_TRACK = "ADD_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

import { updateCurrentTrack } from './current_track_actions';

export const playTrack = () => ({
  type: PLAY_TRACK
});

export const pauseTrack = () => ({
  type: PAUSE_TRACK
});

export const prevTrack = () => ({
  type: PREV_TRACK
});

export const nextTrack = () => ({
  type: NEXT_TRACK
});

export const addTrack = () => ({
  type: ADD_TRACK
});

export const removeTrack = () => ({
  type: REMOVE_TRACK
});

export const playingTrack = track => dispatch => updateCurrentTrack(track)
  .then(() => dispatch(playTrack()))

export const pausingTrack = track => dispatch => updateCurrentTrack(track)
  .then(() => dispatch(pauseTrack()))