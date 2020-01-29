import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
  formType: 'Sign in',
  navLink: <Link to="/signup">Create account</Link>,
  errors: errors.session
});

const mDTP = dispatch => ({
  processForm: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);