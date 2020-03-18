import * as TrackUtil from '../util/track_util';

export const RECEIEVE_ALL_TRACKS = 'RECEIEVE_ALL_TRACKS';
export const RECEIEVE_TRACK = 'RECEIEVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';

const receiveAllTracks = tracks => ({
  type: RECEIEVE_ALL_TRACKS,
  tracks
});

const receiveTrack = track => ({
  type: RECEIEVE_TRACK,
  track
});

const removeTrack = trackId => ({
  type: REMOVE_TRACK,
  trackId
});

export const requestAllTracks = () => dispatch => TrackUtil.fetchAllTracks()
  .then(tracks => dispatch(receiveAllTracks(tracks)));

export const requestTrack = trackId => dispatch => TrackUtil.fetchTrack(trackId)
  .then(track => dispatch(receiveTrack(track)));

export const createTrack = track => dispatch => TrackUtil.createTrack(track)
  .then(newTrack => dispatch(receiveTrack(newTrack)));

export const updateTrack = track => dispatch => TrackUtil.updateTrack(track)
  .then(modifiedTrack => dispatch(receiveTrack(modifiedTrack)));

export const deleteTrack = trackId => dispatch => TrackUtil.removeTrack(trackId)
  .then(() => dispatch(removeTrack()));