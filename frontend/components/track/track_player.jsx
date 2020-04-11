import React from 'react';

class TrackPlayer extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props.playing)
    return(
      <>
       <i className="fas fa-angle-left" onClick={this.props.playTrack}/>
       <p>space here</p>
       <i className="fas fa-angle-right" onClick={this.props.pauseTrack}/>
      </>
    )
  }
};

export default TrackPlayer;