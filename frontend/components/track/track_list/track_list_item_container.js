import { connect } from 'react-redux';
import TrackListItem from './track_list_item.jsx';
import { updateCurrentTrack } from '../../../actions/current_track_actions';

const mSTP = (state, ownProps) => ({
});

const mDTP = dispatch => ({
  updateCurrTrack: track => dispatch(updateCurrentTrack(track))
});

export default connect(mSTP, mDTP)(TrackListItem);