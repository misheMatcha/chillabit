import React from 'react';

var audio,
  audioContext,
  analyzer,
  source;

class Sound extends React.Component{
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    audio = new Audio(this.props.source);
  }

  startSound(){
    audioContext = audioContext || new AudioContext(audio);
    audio.play();
  }

  stopSound(){
    audio.pause();
  }

  render(){
    return(
      // <div className="soundtest" onClick={this.audioSetup}>
      //   <p className="thisisatest" onClick={this.startSound}>play</p>
      //   <p className="thisisatest" onClick={this.stopSound}>stop</p>
      // </div>
      <div id="audio"></div>
    );
  }
};

export default Sound;