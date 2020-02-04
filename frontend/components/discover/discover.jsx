import React from 'react';
import { Link } from 'react-router-dom'
// import TrackList from '../track_list/track_list';
import DiscoverSection from './discover_section.jsx';
import Sidebar from '../sidebar/sidebar.jsx'

class Discover extends React.Component {
  // could probably map the title, descript and a playlist
  render(){
    return (
      <div className="discover">
        {/* <div className="space"></div> */}
        <div className="main-content">
          <DiscoverSection />
          <DiscoverSection />
          <DiscoverSection />
          <DiscoverSection />
          {/* <DiscoverSection /> */}
        </div>
        <div className="sidebar container">
          <Sidebar />
        </div>
      </div>
    )
  }
}

export default Discover;