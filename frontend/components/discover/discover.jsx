import React from 'react';
import TrackList from '../track/track_list/track_list_contianer';

class Discover extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      likes: 205
    }
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
                <i class="far fa-calendar"/>
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