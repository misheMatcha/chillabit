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
    this.props.fetchTrack(1);
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
    console.log(this.props)
    return (
      <div className="discover">
        <div className="discover-main">
          <TrackList title={`New Music Now`} desc={`The latest hits, updated all the time`} />
          <TrackList title={`More of what you like`} desc={`Suggestions based on what you've liked or played`} />
          <TrackList title={`Stay Home`} desc={`Tunes of isolation and self-care`} />
          <TrackList title={`Chillabit Charts`} desc={`The most played tracks on Chillabit this week`} />
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