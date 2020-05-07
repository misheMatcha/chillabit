import React from 'react';
import PlayPauseButton from '../play_pause_button';

class AudioControls extends React.Component{
  constructor(props){
    super(props)
    this.handlePlay = this.handlePlay.bind(this)
  }

  handlePlay(){
    this.props.play()
  }


  render(){
    return(
      <div onClick={this.handlePlay}>
        <PlayPauseButton style="fas fa-play" />
      </div>
    )
  }
};

export default AudioControls;