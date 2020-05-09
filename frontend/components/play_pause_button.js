import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { playTrack } from '../actions/audio_controls_actions';

const PlayPauseButton = (props) => {
  const buttonStyle = props.currentTrack.id !== props.track.id || !props.currentTrack.playing ? "fas fa-play-circle" : "fas fa-pause-circle";
  const audioSrc = props.currentTrack.src === null ? "" : props.currentTrack.src;
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
  const [isMatch, setIsMatch] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    // checkMatch()
    updateCtx()
    return(() => {
      // clean up actions
    })
  }, [props.currentTrack.playing, ctxState.currentTime, buttonStyle], isMatch);

  const checkMatch = () => {
    if(props.currentTrack.id === props.track.id) setIsMatch(true);
  };

  const updateTrackState = () => {
    updateCtx()
    if(!isMatch && !props.currentTrack.playing){
      props.updateCurrTrack(props.track);
    }else if(isMatch){
      props.updateCurrTrack(ctxState);
    }
  };

  const togglePlayPause = () => {

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

  const startTime = () => {
    audioRef.current.addEventListener('timeupdate', () => {
      // console.log(event.target.currentTime)
    })
  };

  return(
    <>
      <audio id="playpause" ref={audioRef} src={props.track.src} />
      <button className={buttonStyle} onClick={() => {
        togglePlayPause()
        startTime()
      }} />
    </>
  )
};

export default PlayPauseButton;