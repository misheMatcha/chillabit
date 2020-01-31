import React from 'react';
import { Link } from 'react-router-dom';

// would most likely need a component in the future to render album cover, track, artist

class SplashPage extends React.Component {
  render(){
    return (
      <div className="splash">
        <div className="search-upload-bar">
          search bar and upload here
        </div>
        <h1 className="splash-trending">Hear what’s trending for free in the chillabit community</h1>
        <div>
          li's of songs - 6 per row / 12 total
        </div>
        <Link className="splash-explore" to="/home">Expore tending playlists</Link>
        <div className="splash-appstore">
          probably some img here
          text
          app store googleplay
        </div>
        <div className="splash-creator">
          use background image
          <h1>Calling all creators</h1>
          <p>Get on chillabit to connect with fans, share your sounds, and grow your audience. What are you waiting for?</p>
          <Link to="/creator">Find out more</Link>
        </div>
        <div className="splash-footer">
          <h1>Thanks for listening. Now join in.</h1>
          <p>Save tracks, follow artists and build playlists. All for free.</p>
          <Link to="signup">Create account</Link>
          <div>
            Already have an account?
            <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
    )
  }
};

export default SplashPage;