import React from 'react';
import { Link } from 'react-router-dom';
import TrackList from '../track_list/track_list.jsx'
// import { splashTracks } from './splash_tracks.jsx'

// would most likely need a component in the future to render album cover, track, artist
// could have probably created components for each section.. hmmm....

class SplashPage extends React.Component {
  render(){
    console.log(this.props)
    return (
      <div id="splash">
        <div className="searchbar">
          <div className="sb-container">
            <input type="text" placeholder="Search for artists, bands, tracks, podcasts"/>
              <Link to="/404"><i className="fas fa-search splash"></i></Link>
          </div>
          <p id="or">or</p>
            <Link className="upload" to="upload">Upload your own</Link>
        </div>

        <div className="trending-section">
          <h1 className="trending-title">Hear what’s trending for free in the chillabit community</h1>

          <div className="album-track-display">
            <ul>
              <TrackList />
            </ul>
          </div>

          <Link className="explore" to="/home">Explore tending playlists</Link>
        </div>

        <div className="app-section">
          <div className="app-container">
            <div className="app-details">
              <div>
                <p className="app-title">Never stop listening</p>
                <hr/>
                <p className="app-details-text">
                  Coming soon to Android and iOS.
                  <br/>
                  You'll never miss a chill ❄️ beat.
                </p>
              </div>
            </div>
            <div className="app-image"></div>
          </div>
        </div>

        <div className="creators-section">
          <div className="trans-bg">
            <h1>Calling all creators</h1>
            <p>Get on chillabit to connect with fans, share your sounds, and grow your audience. What are you waiting for?</p>
            <Link to="/creator">Find out more</Link>
          </div>
        </div>
        
        <div className="splash-footer-wrap">
          <div className="splash-footer">
            <h1>Thanks for listening. Now join in.</h1>
            <p>Save tracks, follow artists and build playlists. All for free.</p>
            <Link className="splash-f-signup" to="/">Create account</Link>
            <div className="splash-f-nav">
              <p>Already have an account?</p>
              <Link className="splash-f-login" to="/">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default SplashPage;