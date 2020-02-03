import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => ({
  formType: 'signup',
  formTitle: <h3 className="sessionForm-title">Create your chillabit account</h3>,
  formButton: <button className="sessionForm-button">Accept & continue</button>,
  errors: errors.session,
  terms: (
    <div className="disclaimer-box">
      <p className="sessionForm-disclaimer">
        We may use your email and devices for updates and tips on chillabit's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.
            </p>
      <p className="sessionForm-disclaimer">
        We may use information you provide us in order to show you targeted ads as described in our Privacy Policy.
            </p>
    </div>
  )
});

const mDTP = dispatch => ({
  processForm: user => dispatch(signup(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal("signup"))}>
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SessionForm);