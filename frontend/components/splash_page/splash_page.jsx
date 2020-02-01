import React from 'react';
import { Link } from 'react-router-dom';

// would most likely need a component in the future to render album cover, track, artist

class SplashPage extends React.Component {
  render(){
    return (
      <div className="splash">
        <div className="splash-search-bar">
          <div className="search-bar">
            <input type="text" placeholder="Search for artists, bands, tracks, podcasts"/>
            <Link to="/404"><i className="fas fa-search"></i></Link>
          </div>
            &emsp;or&ensp;
            <Link to="upload">Upload your own</Link>
        </div>

        <h1 className="splash-trending">Hear what’s trending for free in the chillabit community</h1>

        <div className="splash-tracks">
          <ul>
            <li><p>(´･ω･`)</p><p>track</p><p>artist</p></li>
            <li><p>(´･ω･`)</p><p>track</p><p>artist</p></li>
            <li><p>(´･ω･`)</p><p>track</p><p>artist</p></li>
            <li><p>(´･ω･`)</p><p>track</p><p>artist</p></li>
            <li><p>(´･ω･`)</p><p>track</p><p>artist</p></li>
            <li><p>(´･ω･`)</p><p>track</p><p>artist</p></li>
            <li><p>(´･ω･`)</p><p>track</p><p>artist</p></li>
            <li><p>(´･ω･`)</p><p>track</p><p>artist</p></li>
            <li><p>(´･ω･`)</p><p>track</p><p>artist</p></li>
            <li><p>(´･ω･`)</p><p>track</p><p>artist</p></li>
            <li><p>(´･ω･`)</p><p>track</p><p>artist</p></li>
            <li><p>(´･ω･`)</p><p>track</p><p>artist</p></li>
          </ul>
        </div>

        <Link className="splash-explore" to="/home">Explore tending playlists</Link>
        <div className="splash-upgrade">
          <div className="splash-u-grad">
            <div className="splash-u-box">
              <div>
                <p className="splash-u-b-title">Never stop listening</p>
                <hr/>
                <p className="splash-u-b-details">
                  Coming soon to Android and iOS.
                  <br/>
                  You'll never miss a chill ❄️ beat.
                </p>
              </div>
            </div>
            <div className="splash-u-b-girl"></div>
          </div>
        </div>

        <div className="splash-creator">
          <div className="creator-transbg">
            <h1>Calling all creators</h1>
            <p>Get on chillabit to connect with fans, share your sounds, and grow your audience. What are you waiting for?</p>
            <Link to="/creator">Find out more</Link>
          </div>
        </div>
        
        <div className="splash-footer-wrap">
          <div className="splash-footer">
            <h1>Thanks for listening. Now join in.</h1>
            <p>Save tracks, follow artists and build playlists. All for free.</p>
            <Link className="splash-f-signup" to="signup">Create account</Link>
            <div className="splash-f-nav">
              <p>Already have an account?</p>
              <Link className="splash-f-login" to="/login">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default SplashPage;