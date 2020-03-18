import React from 'react';
import { Link } from 'react-router-dom'
// import TrackList from '../track_list/track_list';
import DiscoverSection from './discover_section.jsx';
import Sidebar from '../sidebar/sidebar.jsx'
import { withRouter } from 'react-router';
import TrackUpload from '../track/track_upload.jsx';

class Discover extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.fetchAlbums()
  }
  render(){
    return (
      <div className="discover-container">
        <div className="discover-main">
          <TrackUpload/>
        </div>
        <div className="discover-sidebar"></div>
      </div>
    )
  }
}

export default withRouter(Discover);