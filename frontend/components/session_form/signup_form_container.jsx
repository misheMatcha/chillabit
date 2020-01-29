import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
  formType: 'Create account',
  navLink: <Link to="/login">Sign in</Link>,
  errors: errors.session
});

const mDTP = dispatch => ({
  processForm: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SessionForm);