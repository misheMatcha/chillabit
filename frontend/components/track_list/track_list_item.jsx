import React from 'react';
import TrackList from './track_list';

// should probably organize images

// inside of the cover div would most likely be some kind of audio player
// could omit album over?
const TrackListItem = ({ track }) => (
    <div className="track-item container">
      <div className="track-item album-cover"></div>
      <div className="track-item detail-container">
        <p className="track-item title">{track.title}</p>
        <p className="track-item artist">{track.artist}</p>
      </div>
    </div>
);

export default TrackListItem;