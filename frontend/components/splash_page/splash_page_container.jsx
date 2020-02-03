import React from 'react';
import { connect } from 'react-redux'
import SplashPage from './splash_page.jsx'
import { closeModal, openModal } from '../../actions/modal_actions';

// fix this later navlinks on top work as is

const mDTP = dispatch => ({
  login: (
    <button className="splash-f-login" onClick={() => dispatch(openModal("login"))}>
      Sign in
    </button>
  ),
  signup: (
    <button className="splash-f-signup" onClick={() => dispatch(openModal("signup"))}>
      Create account
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mDTP)(SplashPage);