import { connect } from 'react-redux';
import { playTrack, pauseTrack } from '../../actions/track_player_actions';
import { requestTrack } from '../../actions/track_actions'
import TrackPlayer from './track_player.jsx';

const mSTP = (state, ownProps) => ({
  playing: state.ui.trackPlayer.playing,
  track: state.entities.tracks,
  audioPlayer: ownProps.audioRef,
  prevTracks: state.ui.trackPlayer.visisted,
  currTracks: state.ui.trackPlayer.queue,
  prevTrackIds: state.ui.trackPlayer.visistedId,
  currTrackIds: state.ui.trackPlayer.queueId
});

const mDTP = dispatch => ({
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack()),
  fetchTrack: trackId => dispatch(requestTrack(trackId))
});

export default connect(mSTP, mDTP)(TrackPlayer)