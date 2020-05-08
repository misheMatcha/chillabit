import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

const Audiobar = (props) => {
  const buttonStyle = !props.currentTrack.playing ? "fas fa-play" : "fas fa-pause";
  const audioSrc = props.currentTrack.src === null ? "" : props.currentTrack.src;
  const coverSrc = props.currentTrack.cover === null ? "" : props.currentTrack.cover;
  const audio = useRef();
  
  useEffect(() => {
    // checkSource()
    console.log(audio)
    return(() => {
      // clean up
    });
  }, [audioSrc, coverSrc])
  
  const checkSource = () => {
    if(props.currentTrack.src){
      setAudioSrc(props.currentTrack.src)
      setCoverSrc(props.currentTrack.cover)
      console.log(audio.current.src)
    }
  }

  const test = () => {

  };


  return(
    <>
      <audio id="audiobar" ref={audio} src={audioSrc} />
      <div className="track-player-bg" />
      <div className="track-player-container">
        <div className="track-player-controls">
          <button className="fas fa-step-backward"  />
          <button className={buttonStyle}  />
          <button className="fas fa-step-forward"  />
          <button className="fas fa-random"  />
          <button className="fas fa-undo"  />
        </div>
        <div className="track-player-progress-wrap">
          {/* <p>{}</p> */}
          <div className="track-player-progress" />
          {/* <p>{}</p> */}
        </div>
        <button className="fas fa-volume-up" />
        <div className="track-player-current-details">
          <div className="track-player-track-info">
            <img className="track-album-cover" src={coverSrc} />
            <div className="track-album-details">
              <p className="track-album-details-artist">{props.currentTrack.artist}</p>
              <p className="track-album-details-title">{props.currentTrack.title}</p>
            </div>
          </div>
          <div className="track-player-misc">
            <button className="fas fa-heart" onClick={() => {
              console.log(audio.current)
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