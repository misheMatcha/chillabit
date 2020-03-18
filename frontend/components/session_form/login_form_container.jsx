import { connect } from 'react-redux';
import React from 'react';
import { login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
  formType: 'login',
  formTitle: (
    <h3 className="session-form-title-login">chillabit</h3>
  ),
  formButton: <button className="session-form-button">Sign in</button>,
  errors: errors.session
});

const mDTP = dispatch => ({
  processForm: user => dispatch(login(user)),
  processDemo: user => dispatch(login(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mSTP, mDTP)(SessionForm);