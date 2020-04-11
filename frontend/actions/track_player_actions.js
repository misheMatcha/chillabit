export const PLAY_TRACK = "PLAY_TRACK";
export const PAUSE_TRACK = "PAUSE_TRACK";
export const NEXT_TRACK = "NEXT_TRACK";
export const PREV_TRACK = "PREV_TRACK";

export const playTrack = track => ({
  type: PLAY_TRACK,
  track
});

export const pauseTrack = track => ({
  type: PAUSE_TRACK,
  track
});

export const nextTrack = track => ({
  type: NEXT_TRACK,
  track
});

export const prevTrack = track => ({
  type: PREV_TRACK,
  track
});