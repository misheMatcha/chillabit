import React from 'react';
import { Link } from 'react-router-dom';
import TrackList from '../track_list/track_list.jsx'

class SplashPage extends React.Component {
  render(){
    // console.log(this.props)
    return (
      <div className="splash-container">
        <div className="splash-searchbar-container">
          <div className="splash-searchbar-search">
            <input className="splash-searchbar-input" type="text" placeholder="Search for artists, bands, tracks, podcasts"/>
              <Link to="/404"><i className="fas fa-search splash"></i></Link>
          </div>
          <p className="splash-searchbar-or">or</p>
          {this.props.login}
        </div>

        <div className="splash-trending-container">
          <h1 className="splash-trending-title">Hear what’s trending for free in the chillabit community</h1>

          <div className="album-track-display">
            <ul>
              {/* <TrackList /> */}
            </ul>
          </div>

          <Link className="splash-trending-explore" to="/home">Explore tending playlists</Link>
        </div>

        <div className="splash-app-container">
          <img className="splash-app-image-1" src="https://chillabit-pro.s3-us-west-1.amazonaws.com/splash_listen.jpg"/>
          <div className="splash-app">
            <div className="splash-app-details">
              <div>
                <p className="splash-app-title">Never stop listening</p>
                <hr className="splash-app-hr"/>
                <p className="splash-app-text">
                  Coming soon to Android and iOS.
                  <br/>
                  You'll never miss a chill ❄️ beat.
                </p>
              </div>
            </div>
            <img className="splash-app-image-2" src="https://chillabit-pro.s3-us-west-1.amazonaws.com/splash_creators_girl.jpg" />
          </div>
        </div>


        {/* next section */}

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