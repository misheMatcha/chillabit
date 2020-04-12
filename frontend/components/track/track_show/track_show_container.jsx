import { connect } from 'react-redux';
import { requestTrack } from '../../../actions/track_actions';
import { playTrack, pauseTrack, addTrack } from '../../../actions/track_player_actions';
import TrackShow from './track_show.jsx';

const mSTP = state => ({
  track: state.entities.tracks,
  playing: state.ui.trackPlayer.playing,
  prevTracks: state.ui.trackPlayer.visisted,
  currTracks: state.ui.trackPlayer.queue,
  prevTrackIds: state.ui.trackPlayer.visistedId,
  currTrackIds: state.ui.trackPlayer.queueId
});

const mDTP = dispatch => ({
  fetchTrack: trackId => dispatch(requestTrack(trackId)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack()),
  addTrack: track => dispatch(addTrack(track))
});

export default connect(mSTP, mDTP)(TrackShow);