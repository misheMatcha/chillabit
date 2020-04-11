import { connect } from 'react-redux';
import { playTrack, pauseTrack } from '../../actions/track_player_actions';
import TrackPlayer from './track_player.jsx';

const mSTP = state => ({});

const mDTP = dispatch => ({});

export default connect(mSTP, mDTP)(TrackPlayer)