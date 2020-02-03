import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  login: (
    <button className="login-button" onClick={() => dispatch(openModal("login"))}>
      Sign in
    </button>
  ),
  signup: (
    <button className="signup-button" onClick={() => dispatch(openModal("signup"))}>
      Create account
    </button>
  ),
  closeModal: () => dispatch(closeModal)
});

export default connect(mSTP, mDTP)(NavBar);