import React from 'react';
import { USERS } from '../placeholder_seeds';

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 205,
      followers: USERS,
      isFollowing: false
    }
  }

  render(){
    return (
      <div className="sidebar">
          <div className="discover-sidebar-advert">
            <div className="sidebar-advert-details">
              <div className="sidebar-advert-gradient">HEY<br />HEY</div>
              <div className="sidebar-advert-text">
                <div className="sidebar-advert-text-bold">
                  Swap tracks
                  <br />
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
                <i className="fas fa-user-friends" />
                <p className="sidebar-section-nav-title-text">Who to follow</p>
              </div>
              <div className="sidebar-section-nav-title">
                <i className="fas fa-redo" />
                <p className="sidebar-section-nav-title-text">Refresh</p>
              </div>
            </div>
            <div className="sidebar-section-list">
              <ul className="sidebar-section-list-ul">
                {
                  this.state.followers.map((follower, idx) => {
                    return (
                      <li key={idx} className="sidebar-section-list-li">
                        <div className="sidebar-section-list-follower">
                          <div className="sidebar-section-list-follower-wrap">
                            <img src={follower.profileImg} className="sidebar-section-list-photo" />
                            <div className="sidebar-section-list-follower-details">
                              <p className="sidebar-section-list-follower-details-username">{follower.username}</p>
                              <div className="sidebar-section-list-follower-details-text">
                                <div className="sidebar-section-list-follower-details-info">
                                  <i className="fas fa-user-friends" />
                                  <p className="sidebar-section-list-follower-details-info-p">{follower.followers}</p>
                                </div>
                                <div className="sidebar-section-list-follower-details-info margin">
                                  <i className="fas fa-tag" />
                                  <p className="sidebar-section-list-follower-details-info-p">{follower.numTracks}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button className="sidebar-section-list-follower-button" onClick={this.toggleFollow}><i className="fas fa-user-plus" /> Follow
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
                <i className="fas fa-heart" />
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
                <i className="far fa-calendar" />
                <p className="sidebar-section-nav-title-text">Listening history</p>
              </div>
              <div className="sidebar-section-nav-title">
                <p className="sidebar-section-nav-title-text">View all</p>
              </div>
            </div>
          </div>

        </div>
    )
  }
}

export default Sidebar;