import React, { useState, useEffect, useRef } from 'react';

const Audiobar = (props) => {
  const buttonStyle = !props.currentTrack.playing ? "fas fa-play" : "fas fa-pause";
  const audioSrc = props.currentTrack.src === null ? "" : props.currentTrack.src;
  const coverSrc = props.currentTrack.cover === null ? "" : props.currentTrack.cover;
  const [currentTime, setCurrentTime] = useState(props.currentTrack.currentTime === 0 ? "--:--" : props.currentTrack.currentTime);
  const [duration, setDuration] = useState("--:--");
  const [opacity, setOpacity] = useState(0);
  const [filler, setFiller] = useState(0);
  const audio = useRef();
  const ppAudio = document.getElementById("playpause");

  useEffect(() => {
    console.log(props)
    updateTime()
    if(props.currentTrack.cover) setOpacity(1);
    return(() => {
      // clean up
    });
  }, [props.currentTrack.playing, audioSrc, coverSrc, ppAudio, props.currentTrack.duration])

  const togglePlayPause = () => {
    if(!props.currentTrack.playing){
      props.play();
    }else{
      props.pause();
    }
  };

  const formatTime = seconds => {
    let date = new Date(null);
    date.setSeconds(seconds);
    let time = date.toISOString().substr(14, 5);
    return time;
  };

  const updateTime = () => {
    if(ppAudio){
      if(duration !== props.currentTrack.duration) setDuration(formatTime(ppAudio.duration));
      
      ppAudio.addEventListener("timeupdate", () => {
        setCurrentTime(formatTime(event.target.currentTime));
        setFiller((event.target.currentTime / event.target.duration) * 100)
      })
    }
  };

  return(
    <>
      <audio id="audiobar" ref={audio} src={audioSrc} />
      <div className="track-player-bg" />
      <div className="track-player-container">
        <div className="track-player-controls">
          <button className="fas fa-step-backward"  />
          <button className={buttonStyle} onClick={() => {
            togglePlayPause()
          }} />
          <button className="fas fa-step-forward"  />
          <button className="fas fa-random"  />
          <button className="fas fa-undo"  />
        </div>
        <div className="track-player-progress-wrap">
          <p>{currentTime}</p>
          <div className="track-player-progress">
            <div className="filler" style={{width: filler}} />
          </div>
          <p>{duration}</p>
        </div>
        <button className="fas fa-volume-up" />
        <div className="track-player-current-details">
          <div className="track-player-track-info">
            <img className="track-album-cover" src={coverSrc} style={{opacity: opacity}} />
            <div className="track-album-details">
              <p className="track-album-details-artist">{props.currentTrack.artist}</p>
              <p className="track-album-details-title">{props.currentTrack.name}</p>
            </div>
          </div>
          <div className="track-player-misc">
            <button className="fas fa-heart"/>
            <button className="fas fa-list-ul"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Audiobar;