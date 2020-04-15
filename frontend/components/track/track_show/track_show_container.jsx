import { connect } from 'react-redux';
import { requestTrack } from '../../../actions/track_actions';
import { playTrack, pauseTrack, addTrack, updateCurrentTrack } from '../../../actions/track_player_actions';
import TrackShow from './track_show.jsx';

const mSTP = (state, ownProps) => ({
  track: state.entities.tracks,
  playing: state.ui.trackPlayer.playing,
  audioPlayer: ownProps.audioRef

});

const mDTP = dispatch => ({
  fetchTrack: trackId => dispatch(requestTrack(trackId)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack()),
  addTrack: track => dispatch(addTrack(track)),
  updateTrack: track => dispatch(updateCurrentTrack(track))
});

export default connect(mSTP, mDTP)(TrackShow);