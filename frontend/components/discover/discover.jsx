import React from 'react';
import TrackList from '../track/track_list/track_list_contianer';

class Discover extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      likes: 205,
      followers: [
        {
          profileImg: 'https://chillabit-pro.s3-us-west-1.amazonaws.com/harold.jpg',
          username: 'harold',
          followers: 76,
          numTracks: 2
        },
        {
          profileImg: 'https://chillabit-pro.s3-us-west-1.amazonaws.com/jen.jpg',
          username: 'jen',
          followers: '54',
          numTracks: '5'
        },
        {
          profileImg: 'https://chillabit-pro.s3-us-west-1.amazonaws.com/moss.jpg',
          username: 'moss',
          followers: '18,367',
          numTracks: '3'
        }
      ],
      isFollowing: false
    }
    this.toggleFollow = this.toggleFollow.bind(this)
  }

  toggleFollow(){
    if(this.state.isFollowing === false){
      this.setState({isFollowing: true});
      console.log('Followed')
    }else{
      this.setState({isFollowing: false});
      console.log('Unfollowed')
    }
  }

  render(){
    return (
      <div className="discover-container">
        {/* <div className="discover-bg"/> */}
        <div className="discover-main">
          <TrackList title={`New Music Now`} desc={`The latest hits, updated all the time`} />
          <TrackList title={`More of what you like`} desc={`Suggestions based on what you've liked or played`} />
          <TrackList title={`Stay Home`} desc={`Tunes of isolation and self-care`} />
          <TrackList title={`Chillabit Charts`} desc={`The most played tracks on Chillabit this week`} />
        </div>


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
    )
  }
}

export default Discover;