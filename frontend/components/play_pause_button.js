import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { playTrack } from '../actions/audio_controls_actions';

const PlayPauseButton = (props) => {
  const [ctxState, setCtxState] = useState({
    currentTime: null,
    duration: null,
    ended: null,
    loop: null,
    muted: null,
    paused: null,
    seeking: null,
    volume: null
  });
  const [buttonStyle, setButtonStyle] = useState("fas fa-play-circle");
  const [isMatch, setIsMatch] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    checkMatch()
    updateCtx()
    return(() => {
      // clean up actions
    })
  }, [props.currentTrack.playing, ctxState.currentTime]);

  const checkMatch = () => {
    if(props.currentTrack.id === props.track.id) setIsMatch(true);
  };

  const toggleStyle = () => {
    if(buttonStyle === "fas fa-play-circle"){
      setButtonStyle("fas fa-pause-circle")
    }else{
      setButtonStyle("fas fa-play-circle")
    }
  };

  const updateTrackState = () => {
    debugger
    updateCtx()
    if(!isMatch) props.updateCurrTrack(props.track);
    props.updateCurrTrack(ctxState);
  };

  const togglePlayPause = () => {
    toggleStyle();

    if(props.currentTrack.playing){
      audioRef.current.pause();
      props.pause();
    }else{
      audioRef.current.play();
      props.play();
    }
    
    updateTrackState();
  };

  const updateCtx = () => {
    setCtxState({
      currentTime: audioRef.current.currentTime,
      duration: audioRef.current.duration,
      ended: audioRef.current.ended,
      loop: audioRef.current.loop,
      muted: audioRef.current.muted,
      paused: audioRef.current.paused,
      seeking: audioRef.current.seeking,
      volume: audioRef.current.volume
    })
  };

  return(
    <>
      <audio ref={audioRef} src={props.track.src} />
      <button className={buttonStyle} onClick={() => {
        togglePlayPause()
      }} />
    </>
  )
};

export default PlayPauseButton;