import React from 'react';
import SidebarAd from './sidebar_ad.jsx'
import SidebarFollow from './sidebar_follow.jsx';
import SidebarLikes from './sidebar_likes.jsx';
import SidebarHistory from './sidebar_history.jsx';

class Sidebar extends React.Component {
  render(){
    return (
      <div className="sidebar">
        <div className="sidebar-box ad">
          <SidebarAd />
        </div>
        <div className="sidebar-box follow-sug">
          <SidebarFollow />
        </div>
        <div className="sidebar-box likes">
          <SidebarLikes />
        </div>
        <div className="sidebar-box history">
          <SidebarHistory />
        </div>
      </div>
    )
  }
}

export default Sidebar;