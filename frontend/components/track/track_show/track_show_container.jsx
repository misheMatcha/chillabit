import { connect } from 'react-redux';
import { requestTrack } from '../../../actions/track_actions';
import { updateCurrentTrack } from '../../../actions/current_track_actions';
import TrackShow from './track_show.jsx';

const mSTP = (state, ownProps) => ({
  track: Object.values(state.entities.tracks),
  playing: state.ui.currentTrack.playing,
  audioPlayerz: ownProps.audioRef

});

const mDTP = dispatch => ({
  fetchTrack: trackId => dispatch(requestTrack(trackId)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack()),
  addTrack: track => dispatch(addTrack(track)),
  updateTrack: track => dispatch(updateCurrentTrack(track))
});

export default connect(mSTP, mDTP)(TrackShow);