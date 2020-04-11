export const PLAY_TRACK = "PLAY_TRACK";
export const PAUSE_TRACK = "PAUSE_TRACK";
export const NEXT_TRACK = "NEXT_TRACK";
export const PREV_TRACK = "PREV_TRACK";

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