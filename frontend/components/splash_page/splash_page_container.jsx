import React from 'react';
import { connect } from 'react-redux'
import SplashPage from './splash_page.jsx'
import { closeModal, openModal } from '../../actions/modal_actions';
import { requestAlbum, requestAllAlbums } from '../../actions/album_actions'

const mSTP = state => ({
  album: state.entities.albums
});

const mDTP = dispatch => ({
  login: (
    <button className="splash-searchbar-upload" onClick={() => dispatch(openModal("login"))}>
      Upload your own
    </button>
  ),
  footerLogin: (
    <button className="splash-footer-login" onClick={() => dispatch(openModal("login"))}>
      Sign in
    </button>
  ),
  footerSignup: (
    <button className="splash-footer-signup" onClick={() => dispatch(openModal("signup"))}>
      Create account
    </button>
  ),
});

export default connect(mSTP ,mDTP)(SplashPage);