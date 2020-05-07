import React from 'react';
import TrackList from '../track/track_list/track_list_contianer';
import { USERS } from '../placeholder_seeds';
import Sidebar from '../sidebar/sidebar.jsx';
import { fetchTrack } from '../../util/track_util';

class Discover extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      likes: 205,
      followers: USERS,
      isFollowing: false
    }
    this.toggleFollow = this.toggleFollow.bind(this)
  }

  componentDidMount(){
    this.props.fetchTracks();
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
      <div className="discover">
        <div className="discover-main">
          <TrackList title={`New Music Now`} tracklist={this.props.tracks} desc={`The latest hits, updated all the time`} />
          {/* <TrackList title={`More of what you like`} tracklist={this.props.tracks} desc={`Suggestions based on what you've liked or played`} />
          <TrackList title={`Stay Home`} tracklist={this.props.tracks} desc={`Tunes of isolation and self-care`} />
          <TrackList title={`Chillabit Charts`} tracklist={this.props.tracks} desc={`The most played tracks on Chillabit this week`} /> */}
          <div className="discover-main-buffer"/>
        </div>
        <div className="sidebar-container">
          <Sidebar />
        </div>
      </div>
    )
  }
}

export default Discover;