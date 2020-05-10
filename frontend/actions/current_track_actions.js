export const UPDATE_CURRENT_TRACK = 'UPDATE_CURRENT_TRACK';
export const PLAY_TRACK = 'PLAY_TRACK';
export const PAUSE_TRACK = 'PAUSE_TRACK';

export const updateCurrentTrack = track => ({
  type: UPDATE_CURRENT_TRACK,
  track
});

export const playTrack = () => ({
  type: PLAY_TRACK
});

export const pauseTrack = () => ({
  type: PAUSE_TRACK
});