import { PLAY_TRACK, PAUSE_TRACK, NEXT_TRACK, PREV_TRACK } from '../actions/track_player_actions';

const trackPlayerReducer = (state = null, action) => {
  switch (action.type) {
    case PLAY_TRACK:
      return action.track;
    case PAUSE_TRACK:
      return action.track;
    default:
      return state;
  }
}

export default trackPlayerReducer;