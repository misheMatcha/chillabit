import React from 'react';

// var audio,
//   audioContext,
//   analyzer,
//   source;

class Sound extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      audio: null,
      audioContext: null
    }
    this.audio = this.state.audio;
    this.audioCtx = this.state.audioContext;
    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
    this.audioSetup = this.audioSetup.bind(this);
  }
  
  audioSetup(){
    this.audio = this.audio || new Audio(this.props.trackSource);
    this.audioCtx = this.audioCtx || new AudioContext();
  }

  playAudio(){
    this.audioSetup();
    this.audio.play();
  }

  pauseAudio(){
    this.audio.pause();
  }

  render(){
    return(
      <div>
        <p onClick={this.playAudio}>play</p>
        <p onClick={this.pauseAudio}>pause</p>
      </div>
    );
  }
};

export default Sound;