import { connect } from 'react-redux';
import TrackUpload from './track_upload.jsx';

const mSTP = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mDTP = dispatch => ({});

export default connect(mSTP, mDTP)(TrackUpload);