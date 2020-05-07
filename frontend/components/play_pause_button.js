import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { playTrack } from '../actions/audio_controls_actions';

const PlayPauseButton = (props) => {
  const [buttonStyle, setButtonStyle] = useState("fas fa-play-circle");
  const audioRef = useRef();

  useEffect(() => {
    return(() => {
      // clean up actions
    })
  }, []);

  const toggleStyle = () => {
    if(buttonStyle === "fas fa-play-circle"){
      setButtonStyle("fas fa-pause-circle")
    }else{
      setButtonStyle("fas fa-play-circle")
    }
  };

  const togglePlayPause = () => {
  };

  return(
    <>
      <audio ref={audioRef} src={props.track.src} />
      <button className={buttonStyle} onClick={() => {
        toggleStyle()
        props.updateCurrTrack(props.track)
      }} />
    </>
  )
};

export default PlayPauseButton;