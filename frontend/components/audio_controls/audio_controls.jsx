import React from 'react';

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
        hi
      </div>
    )
  }
};

export default AudioControls;