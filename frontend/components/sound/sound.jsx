import React from 'react';

class Sound extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      audio: null,
      audioContext: null,
      toggleAction: 'play',
      toggleStyle: 'fas fa-play-circle'
    }
    this.audio = this.state.audio;
    this.audioCtx = this.state.audioContext;
    this.handleButton = this.handleButton.bind(this);
    this.audioSetup = this.audioSetup.bind(this);
  }
  
  audioSetup(){
    this.audio = this.audio || new Audio(this.props.trackSource);
    this.audioCtx = this.audioCtx || new AudioContext();
  }

  handleButton(){
    this.audioSetup();
    if(this.state.toggleAction === 'play'){
      this.playAudio();
    }else{
      this.pauseAudio();
    }
  }

  playAudio(){
    if(this.audioCtx.state === 'suspended'){
      this.audioCtx.resume().then(() => {
        console.log('context resumed');
      });
    }
    this.setState({
      toggleAction: 'pause',
      toggleStyle: 'fas fa-pause-circle'
    });
    this.audio.play();
  }

  pauseAudio(){
    if(this.audioCtx.state === 'running'){
      this.audioCtx.suspend().then(() => {
        console.log('context suspended');
      });
    }
    this.setState({
      toggleAction: 'play',
      toggleStyle: 'fas fa-play-circle'
    });
    this.audio.pause();
  }

  render(){
    return(
      <button onClick={this.handleButton} className={this.state.toggleStyle}></button>
    );
  }
};

export default Sound;