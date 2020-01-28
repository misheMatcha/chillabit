import { connect } from 'react-redux';
import SessionForm from './session_form';

const mSTP = (state, ownProps) => ({
  currentUser: state.users[],
  formType: 'signup',
  errors: state.errors
});

const mDTP = dispatch => ({});

export default connect(mSTP, mDTP)(SessionForm);