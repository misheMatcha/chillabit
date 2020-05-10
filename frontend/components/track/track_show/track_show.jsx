import React from 'react';
import { IRIDSCNT, USERS } from '../../placeholder_seeds';
import Sidebar from '../../sidebar/sidebar.jsx';
import PlayPauseButton from '../../play_pause_container';

class TrackShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      likes: 205,
      followers: USERS,
      isFollowing: false,
      comment: '',
    }
    this.submitComment = this.submitComment.bind(this);
  }

  componentDidMount(){
    // this.props.fetchTrack(this.props.match.params.id)
    this.props.fetchTrack(6)
  }

  handleComment(field){
    return e => this.setState({[field]: e.target.value})
  }

  submitComment(e){
    e.preventDefault();
    console.log('Submit comment: `', this.state.comment, '`');
    this.setState({comment: ''});
  }

  render(){
    // console.log(this.props.track[0])
    return(
      <div className="track-show">
        {
          this.props.track.map((trackDetails, idx) => {
            if(idx === this.props.track.length - 1){
              return(
                <div key={trackDetails.id} className="track-show-wrap">
                  <div className="track-show-details-wrap">
                    <div className="track-show-details">
                      <div className="track-show-details audio-wrap">
                        <PlayPauseButton track={trackDetails} />
                        <div key={trackDetails.id} className="audio-wrap track-details">
                          <p className="track-details artist">{trackDetails.artist}</p>
                          <p className="track-details title">{trackDetails.name}</p>
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
                <img className="track-show-cover" src={trackDetails.cover}/>
              </div>
              )
            }
          })
        }
        <div className="track-show-social">
          <div className="track-show-social-main">
            <div className="track-show-social-combar-wrap">
              <div className="track-show-social-combar">
                <img src={IRIDSCNT.profile} className="track-show-social-combar-profile"/>
                <div className="track-show-social-combar-form">
                  <form onSubmit={this.submitComment} className="track-show-social-combar-form-form">
                    <input type="text" className="track-show-social-combar-form-input" placeholder="Write a comment" value={this.state.comment} onChange={this.handleComment('comment')}/>
                  </form>
                </div>
              </div>
              <div className="track-show-social-combar-stats">
                <div className="track-show-social-combar-stats-links">
                  <button className="track-show-social-combar-stats-links-button"><i className="fas fa-heart"/> Like</button>
                  <button className="track-show-social-combar-stats-links-button"><i className="fas fa-retweet"/> Repost</button>
                  <button className="track-show-social-combar-stats-links-button"><i className="fas fa-list-ul"/> Add to Next up</button>
                  <button className="track-show-social-combar-stats-links-button"><i className="fas fa-ellipsis-h"/> More</button>
                </div>
                <div className="track-show-social-combar-stats-stats">
                  <p className="track-show-social-combar-stats-details"><i className="fas fa-play"/> {IRIDSCNT.plays}</p>
                  <p className="track-show-social-combar-stats-details"><i className="fas fa-heart"/> {IRIDSCNT.likes}</p>
                  <p className="track-show-social-combar-stats-details"><i className="fas fa-retweet"/> {IRIDSCNT.reposts}</p>
                </div>
              </div>
            </div>
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
                <div className="track-show-social-details-com-desc">
                  19 new songs {`<3`}<br/>
                  I have put every drop of my creativity and time into this project.<br/>
                  Thx for listening I really appreciate you.<br/>
                  <br/>
                  Digital DL:<br/>
                  <a href="ochamusic.bandcamp.com/releases" target="blank">ochamusic.bandcamp.com/releases</a><br/>
                  <br/>
                  Merch: <a href="teespring.com/stores/ochashop" target="blank">teespring.com/stores/ochashop</a>
                </div>
                <div className="track-show-social-details-com-section">
                  <div className="track-show-social-details-com-section-title">
                    <i className="fas fa-comment-alt" /><p className="track-show-social-details-com-section-title-p">{USERS.length} comments</p>
                  </div>
                  <div className="track-show-social-details-com-section-details">
                    <ul className="track-show-social-details-com-section-ul">
                      {
                        USERS.map((user, idx) => (
                          <li key={idx} className="track-show-social-details-com-section-li">
                            <div className="track-show-social-details-com-section-user-dets">
                              <img src={user.profileImg} className="track-show-social-details-com-section-profile"/>
                              <div className="track-show-social-details-com-section-text">
                                <p>{user.username}</p>
                                <p className="track-show-social-details-com-section-text-p">{user.comment}</p>
                              </div>
                            </div>
                            <div className="track-show-social-details-com-section-date">
                              <p>{user.commentDate}</p>
                            </div>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-container">
            <Sidebar />
        </div>
        </div>
      </div>
    );
  }
};

export default TrackShow;