import React from 'react';
import { IRIDSCNT, USERS } from '../../placeholder_seeds';

class TrackShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      likes: 205,
      followers: USERS,
      isFollowing: false
    }
  }

  componentDidMount(){
    // this.props.fetchTrack(this.props.match.params.id)
  }

  render(){
    return(
      <div className="track-show">
        <div className="track-show-wrap">
          <div className="track-show-details-wrap">
            <div className="track-show-details">
              <div className="track-show-details audio-wrap">
                {
                  this.props.playing === false ? <button className="fas fa-play-circle" onClick={() => {
                    this.props.playTrack()
                    this.props.updateTrack(this.props.aud)
                    this.props.testadd(this.props.track)
                  }} /> : <button className="fas fa-pause-circle" onClick={() => {
                    this.props.pauseTrack()
                  }} />
                }
                <div className="audio-wrap track-details">
                  <p className="track-details artist">{IRIDSCNT.artist}</p>
                  <p className="track-details title">{IRIDSCNT.title}</p>
                </div>
              </div>
              <div className="misc-wrap">
                <p className="misc-wrap date">3 months ago</p>
                <p className="misc-wrap genre"># lofi</p>
              </div>
            </div>
            <div className="track-show-visuals">
              {/* for waveforms in the future */}
            </div>
          </div>
          <img className="track-show-cover" src={IRIDSCNT.cover}/>
        </div>
        <div className="track-show-social">
          <div className="track-show-social-main">
            {/* <div className="track-show-social-combar-wrap">comment bar</div> */}
            <div className="track-show-social-details">
              <div className="track-show-social-details-profile">
                <img className="track-show-social-details-profile-img" src={IRIDSCNT.profile} />
                <p className="track-show-social-details-profile-artist">{IRIDSCNT.artist}</p>
                <div className="track-show-social-details-profile-stats">
                  <div className="sidebar-section-list-follower-details-text">
                    <div className="sidebar-section-list-follower-details-info">
                      <i className="fas fa-user-friends"/>
                      <p className="sidebar-section-list-follower-details-info-p">{IRIDSCNT.followers}</p>
                    </div>
                    <div className="sidebar-section-list-follower-details-info margin">
                      <i className="fas fa-tag"/>
                      <p className="sidebar-section-list-follower-details-info-p">{IRIDSCNT.tracks}</p>
                    </div>
                  </div>
                </div>
                <button className="sidebar-section-list-follower-button profile" onClick={this.toggleFollow}>
                  <i className="fas fa-user-plus"/> Follow
                </button>
              </div>
              <div className="track-show-social-details-com">
                <div>
                  19 new songs {`<3`}<br/>
                  I have put every drop of my creativity and time into this project.<br/>
                  Thx for listening I really appreciate you.<br/>
                  <br/>
                  Digital DL:<br/>
                  <a href="ochamusic.bandcamp.com/releases" target="blank">ochamusic.bandcamp.com/releases</a><br/>
                  <br/>
                  Merch: <a href="teespring.com/stores/ochashop" target="blank">teespring.com/stores/ochashop</a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="track-show-social-sidebar">
            side
          </div> */}
          <div className="sidebar-container">
          <div className="discover-sidebar-advert">
            <div className="sidebar-advert-details">
              <div className="sidebar-advert-gradient">HEY<br/>HEY</div>
              <div className="sidebar-advert-text">
                <div className="sidebar-advert-text-bold">
                  Swap tracks
                  <br/>
                  Keep the stats
                </div>
                <div className="sidebar-advert-text-normal">
                  A pro account lets you replace tracks without losing stats
                </div>
              </div>
            </div>
            <button className="sidebar-advert-button">Get pro</button>
          </div>

          {/* dry up code later */}
          <div className="sidebar-section">
            <div className="sidebar-section-nav">
              <div className="sidebar-section-nav-title">
                <i className="fas fa-user-friends"/>
                <p className="sidebar-section-nav-title-text">Who to follow</p>
              </div>
              <div className="sidebar-section-nav-title">
                <i className="fas fa-redo"/>
                <p className="sidebar-section-nav-title-text">Refresh</p>
              </div>
            </div>
            <div className="sidebar-section-list">
              <ul className="sidebar-section-list-ul">
                {
                  this.state.followers.map((follower, idx) => {
                    return(
                      <li key={idx} className="sidebar-section-list-li">
                        <div className="sidebar-section-list-follower">
                          <div className="sidebar-section-list-follower-wrap">
                            <img src={follower.profileImg} className="sidebar-section-list-photo"/>
                            <div className="sidebar-section-list-follower-details">
                              <p className="sidebar-section-list-follower-details-username">{follower.username}</p>
                              <div className="sidebar-section-list-follower-details-text">
                                <div className="sidebar-section-list-follower-details-info">
                                  <i className="fas fa-user-friends"/>
                                  <p className="sidebar-section-list-follower-details-info-p">{follower.followers}</p>
                                </div>
                                <div className="sidebar-section-list-follower-details-info margin">
                                  <i className="fas fa-tag"/>
                                  <p className="sidebar-section-list-follower-details-info-p">{follower.numTracks}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button className="sidebar-section-list-follower-button" onClick={this.toggleFollow}><i className="fas fa-user-plus"/> Follow
                          </button>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-section-nav">
              <div className="sidebar-section-nav-title">
                <i className="fas fa-heart"/>
                <p className="sidebar-section-nav-title-text">{this.state.likes} likes</p>
              </div>
              <div className="sidebar-section-nav-title">
                <p className="sidebar-section-nav-title-text">View all</p>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-section-nav">
              <div className="sidebar-section-nav-title">
                <i className="far fa-calendar"/>
                <p className="sidebar-section-nav-title-text">Listening history</p>
              </div>
              <div className="sidebar-section-nav-title">
                <p className="sidebar-section-nav-title-text">View all</p>
              </div>
            </div>
          </div>

        </div>
        </div>
      </div>
    );
  }
};

export default TrackShow;