import React from 'react';
import { Link } from 'react-router-dom';

class SplashPage extends React.Component {
  render(){
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

        <div className="splash-creators-container">
          <img className="splash-creators-bg" src="https://chillabit-pro.s3-us-west-1.amazonaws.com/splash_creators.jpg" />
          <div className="splash-creators-bg-trans">
            <h1 className="splash-creators-bg-trans-title">Calling all creators</h1>
            <p className="splash-creators-bg-trans-desc">Get on chillabit to connect with fans, share your sounds, and grow your audience. What are you waiting for?</p>
            <Link className="splash-creators-bg-trans-link" to="/creator">Find out more</Link>
          </div>
        </div>
        
        <div className="splash-footer-container">
          <div className="splash-footer">
            <h1 className="splash-footer-title">Thanks for listening. Now join in.</h1>
            <p className="splash-footer-desc">Save tracks, follow artists and build playlists. All for free.</p>
            {this.props.footerSignup}
            <div className="splash-footer-nav">
              <p className="splash-footer-nav-p">Already have an account?</p>
              {this.props.footerLogin}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default SplashPage;