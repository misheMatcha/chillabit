import React from 'react';
import { connect } from 'react-redux'
import SplashPage from './splash_page.jsx'
import { openModal } from '../../actions/modal_actions';
import { requestAllTracks } from '../../actions/track_actions';
import { updateCurrentTrack } from '../../actions/current_track_actions';
import { playTrack, pauseTrack } from '../../actions/track_player_actions';

const mSTP = state => ({
  tracks: Object.values(state.entities.tracks),
  playStatus: state.ui.audioControls.playing,
  currentTrack: state.ui.currentTrack
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
  fetchAllTracks: () => dispatch(requestAllTracks()),
  addTrack: track => dispatch(updateCurrentTrack(track)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack())
});

export default connect(mSTP ,mDTP)(SplashPage);