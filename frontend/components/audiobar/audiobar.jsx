import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

function Audiobar(props){
  const [audioSrc, setAudioSrc] = useState("");
  const audio = document.getElementById("audio")
  const audioRef = useRef();

  
  useEffect(() => {
  })
  
  function checkSource(){
    // if(props.currentTrack.src !== null){
    //   setAudioSrc(props.currentTrack.src)
    //   console.log(audio);
    // }
  }


  return(
    <>
      <audio id="audio"
        ref={audioRef}
        src={audioSrc}
      />
      <div className="track-player-bg" />
      <div className="track-player-container">
        <div className="track-player-controls">
          <button className="fas fa-step-backward"  />
          <button className="fas fa-step-forward"  />
          <button className="fas fa-random"  />
          <button className="fas fa-undo"  />
        </div>
        <div className="track-player-progress-wrap">
          <p>{}</p>
          <div className="track-player-progress" />
          <p>{}</p>
        </div>
        <button className="fas fa-volume-up" />
        <div className="track-player-current-details">
          <div className="track-player-track-info">
            {/* <img className="track-album-cover" src={} /> */}
            <div className="track-album-details">
              {/* <p className="track-album-details-artist">{}</p> */}
              {/* <p className="track-album-details-title">{}</p> */}
            </div>
          </div>
          <div className="track-player-misc">
            <button className="fas fa-heart" onClick={() => {
              console.log(audioRef.current)
            }}></button>
            <button className="fas fa-list-ul"></button>
          </div>
        </div>
      </div>
    </>
  )
}

const mSTP = state => ({
  currentTrack: state.ui.currentTrack
});

const mDTP = dispatch => ({});

export default connect(mSTP, mDTP)(Audiobar);