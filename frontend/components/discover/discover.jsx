import React from 'react';
import { Link } from 'react-router-dom'
import TrackList from '../track_list/track_list';

class Discover extends React.Component {
  // task notes
    // modal
    // redo session forms
    // add responsive scaling
    // set up templates
    
  // stream - list songs with infinite loading
    // could use if/else to statement for discover/stream since they both use the same sidebar
    // side must be static - most likely wont have time to make them maybe
    // look into overflow

  // may need static values

  // library - mainly flexing lists
  // upgrade - n/a
  // upload - bar with nav
  // user/notifs/msgs - all drop downs
    // using logout button for time being


  // 17 possible components
  // setup tempalte first then decide what to display
    // carousel
    // playlist

  render(){
    return (
      <div className="discover">
        <div className="main-content">
          {/* <div className="tracks carousel">New Music Now</div> */}
          <div className="track player-list">
            <p>More of what you like</p>
            <p>Suggestions based on what you've liked or played</p>
            <div className="track player">
              {/* build template here for later use */}
              <div className="alblum-cover-play-button">
                {/* add audio player here */}
              </div>
              <div className="track list">
                <ul>
                  {/* map out list here */}
                  <li>
                    <div className="track details">
                      <TrackList />
                      <p>artist -</p>
                      <p>title</p>
                    </div>
                    <p className="playstats">playstats</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="tracks player-list">SoundCloud Weekly</div>
          <div className="tracks carousel">SoundCloud Charts</div>
          <div className="tracks carousel">Top Playlists</div> */}
        </div>
        <div className="sidebar">
          <div className="sidebar-box ad">
            ad
          </div>
          <div className="sidebar-box follow-sug">
            follow
          </div>
          <div className="sidebar-box likes">
            likes
          </div>
          <div className="sidebar-box history">
            history
          </div>
        </div>
      </div>
    )
  }
}

export default Discover;