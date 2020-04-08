import React from 'react';

class Sound extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      audio: null,
      audioContext: null,
      toggleAction: 'play'
    }
    this.audio = this.state.audio;
    this.audioCtx = this.state.audioContext;
    this.handleButton = this.handleButton.bind(this);
    // this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
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
    this.setState({toggleAction: 'pause'});
    this.audio.play();
  }

  pauseAudio(){
    if(this.audioCtx.state === 'running'){
      this.audioCtx.suspend().then(() => {
        console.log('context suspended');
      });
    }
    this.setState({toggleAction: 'play'});
    this.audio.pause();
  }

  render(){
    return(
      <div>
        <p onClick={this.handleButton}>{this.state.toggleAction}</p>
      </div>
    );
  }
};

export default Sound;