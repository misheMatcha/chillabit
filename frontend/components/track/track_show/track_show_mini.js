import React from 'react';

class TrackShowMini extends React.Component{
  componentDidMount(){
    this.props.fetchTrack(2);
  }

  render(){
    console.log("mini: ", this.props)
    return(
      <div className="single-track-container">
        <img src="https://chillabit-pro.s3-us-west-1.amazonaws.com/the_day.jpg" className="single-track-cover"/>
        <div className="single-track-hover">
          play
        </div>
        <div className="single-track-details">
          <p className="single-track-name">{this.props.track.name}</p>
          <p className="single-track-artist">{this.props.track.artist}</p>
        </div>
      </div>
    );
  }
};

export default TrackShowMini;