import { connect } from 'react-redux';
import TrackListItem from './track_list_item.jsx';
import { requestTrack } from '../../../actions/track_actions'

const mSTP = (state, ownProps) => ({
  // track: ownProps.track
});

const mDTP = dispatch => ({
});

export default connect(mSTP, mDTP)(TrackListItem);