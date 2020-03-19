import { connect } from 'react-redux';
import TrackUpload from './track_upload.jsx';
import { createTrack } from '../../actions/track_actions';

const mSTP = ({ session, entities: { users, tracks } }) => ({
  currentUser: users[session.id]
});

const mDTP = dispatch => ({
  upload: track => dispatch(createTrack(track))
});

export default connect(mSTP, mDTP)(TrackUpload);