import React from 'react';
import TrackListItem from './track_list_item';
import { TRACK_DISPLAY } from './display_tracks';

// using index for now, would most likely need a track id for the key itself for real state
class TrackList extends React.Component {
  render() {
    return (
      <div className="track-container">
        <ul>
          <li className="track-item">
            {
              TRACK_DISPLAY.map((track, i) => <TrackListItem key={i} track={track} />)
            }
          </li>
        </ul>
      </div>
    )
  }
}

export default TrackList;