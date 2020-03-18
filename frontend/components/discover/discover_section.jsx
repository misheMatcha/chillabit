import React from 'react';
import TrackList from '../track_list/track_list.jsx';

class DiscoverSection extends React.Component {
  render(){
    return (
      <div>
        <div className="nav">
          this is the nav
          <ul className="cate">
            {/* below is nav ul li a */}
            <li className="cate-i">category 1</li> 
            <li>category 2
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
              </ul>
            </li>
            <li>category 3</li>
          </ul>
        </div>
      </div>
      // <div className="track track-list">
      //   <hr/>
      //   <div className="track-details">
      //     <p className="track-details title">New Music Now</p>
      //     <p className="track-details description">The latest hits, updated all the time</p>
      //   </div>
      //   <div className="track player">
      //     <div className="alblum-cover-play-button">
      //       {/* add audio player here */}
      //     </div>
      //     <div className="track list">
      //       <ul>
      //         <li>
      //           {/* map out list here */}
      //           {/* <TrackList /> */}
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default DiscoverSection;