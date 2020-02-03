import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => ({
  formType: 'login',
  formTitle: (
    <h3 className="sessionForm-title">chillabit</h3>
  ),
  formButton: <button className="sessionForm-button">Sign in</button>,
  errors: errors.session
});

const mDTP = dispatch => ({
  processForm: user => dispatch(login(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal("login"))}>
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SessionForm);