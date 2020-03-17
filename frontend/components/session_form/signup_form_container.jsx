import { connect } from 'react-redux';
import React from 'react';
import { signup, login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
  formType: 'signup',
  formTitle: <h3 className="session-form-title">Create your chillabit account</h3>,
  formButton: <button className="session-form-button">Accept & continue</button>,
  errors: errors.session,
  terms: (
    <div className="disclaimer-box">
      <p className="session-form-disclaimer">
        We may use your email and devices for updates and tips on chillabit's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.
      </p>
      <p className="session-form-disclaimer">
        We may use information you provide us in order to show you targeted ads as described in our Privacy Policy.
      </p>
    </div>
  )
});

const mDTP = dispatch => ({
  processForm: user => dispatch(signup(user)),
  processDemo: user => dispatch(login(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mSTP, mDTP)(SessionForm);