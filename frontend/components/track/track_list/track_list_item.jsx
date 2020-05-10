import React, { useState, useEffect } from 'react';
import PlayPauseButton from '../../play_pause_container';


function TrackListItem(track){
  const [duration, setDuration] = useState(null);
  const [playButton, setPlayButton] = useState("fas fa-play-circle");
  const trackDetail = track.track;

  useEffect(() => {
  },[duration])

  // console.log(trackDetail)

  return(
    <div className="track-list-item">
      <div className="track-list-item-hover-wrap">
        <img src={trackDetail.cover} className="track-list-item-cover" />
        <div className="track-list-item-hover">
          {/* <button className={playButton} onClick={() => {
            if(playButton === "fas fa-play-circle"){
              setPlayButton("fas fa-pause-circle")
            }else{
              setPlayButton("fas fa-play-circle")
            }
          }} /> */}
          <PlayPauseButton track={trackDetail} />
        </div>
      </div>
      <div className="track-list-item-details">
        <p className="track-list-item-title">{trackDetail.name}</p>
        <p className="track-list-item-artist">{trackDetail.artist}</p>
      </div>
    </div>
  )
}

export default TrackListItem;