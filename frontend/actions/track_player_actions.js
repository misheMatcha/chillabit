export const PLAY_TRACK = "PLAY_TRACK";
export const PAUSE_TRACK = "PAUSE_TRACK";
export const NEXT_TRACK = "NEXT_TRACK";
export const PREV_TRACK = "PREV_TRACK";
export const ADD_TRACK = "PREV_TRACK";
export const REMOVE_TRACK = "PREV_TRACK";

export const playTrack = () => ({
  type: PLAY_TRACK
});

export const pauseTrack = () => ({
  type: PAUSE_TRACK
});

export const nextTrack = () => ({
  type: NEXT_TRACK
});

export const prevTrack = () => ({
  type: PREV_TRACK
});

export const addTrack = track => ({
  type: ADD_TRACK,
  track
});

export const removeTrack = () => ({
  type: REMOVE_TRACK
});