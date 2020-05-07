import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { playTrack } from '../actions/audio_controls_actions';

function PlayPauseButton(props){
  const [buttonStyle, setButtonStyle] = useState(props.style);
  const [audioSrc, setAudioSrc] = useState(props.src);
  const [status, setStatus] = useState("paused");
  
  useEffect(() => {
  })

  return(
    <>
      <button className={buttonStyle} onClick={() => {
        let audioDom = event.target.firstElementChild;
        if(status === "paused"){
          setStatus("playing");
          audioDom.play()
          console.log(audioDom.currentTime)
        }else{
          setStatus("playing");
          audioDom.pause()
          console.log(audioDom.currentTime)
        }
        }}>
        <audio id="audio" src={audioSrc} className={buttonStyle}/>
      </button>
    </>
  )
}

const mSTP = state => ({
  playing: state.ui.audioControls.playing
});

const mDTP = dispatch => ({
  play: () => dispatch(playTrack())
});

export default connect(mSTP, mDTP)(PlayPauseButton);