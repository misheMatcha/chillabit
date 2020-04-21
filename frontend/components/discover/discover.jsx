import React from 'react';
import TrackList from '../track/track_list/track_list_contianer';

class Discover extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <div className="discover-container">
        <div className="discover-main">
          <p>main</p>
          <div>
            main stuff
          </div>
        </div>

        
        <div className="discover-sidebar">
          <div className="discover-sidebar-advert">
            <div className="discover-sidebar-advert-details">
              <div className="discover-sidebar-advert-gradient">HEY<br/>HEY</div>
              <div className="discover-sidebar-advert-text">
                <div className="discover-sidebar-advert-text-bold">
                  Swap tracks
                  <br/>
                  Keep the stats
                </div>
                <div className="discover-sidebar-advert-text-normal">
                  A pro account lets you replace tracks without losing stats
                </div>
              </div>
            </div>
            <button className="discover-sidebar-advert-button">Get pro</button>
          </div>

          <div className="discover-sidebar-follow">
            <div className="discover-sidebar-follow-nav">
              <div className="discover-sidebar-follow-nav-title">
                <i class="fas fa-user-friends"/>
                <p className="">Who to follow</p>
              </div>
              <div className="">
                <i class="fas fa-redo"/>
                <p className="">Refresh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Discover;