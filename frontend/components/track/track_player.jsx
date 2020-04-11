import React from 'react';

class TrackPlayer extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    // console.log(this.props)
    return(
      <>
       <i className="fas fa-angle-left" onClick={this.props.playTrack}/>
       {
         this.props.playing === false ? <button className="" onClick={this.props.playTrack}>play</button> : <button className="" onClick={this.props.pauseTrack}>pause</button>
       }
       <i className="fas fa-angle-right" onClick={this.props.pauseTrack}/>
      </>
    )
  }
};

export default TrackPlayer;