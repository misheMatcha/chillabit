import React from 'react';
import Sound from '../sound/sound.jsx';

class TrackShow extends React.Component{
  componentDidMount(){
    this.props.fetchTrack(this.props.match.params.id)
  }

  render(){
    return(
      <div className="track-show-container">
        <p className="track-show-artist">
          {this.props.track.artist}
        </p>
        <p className="track-show-title">
          {this.props.track.name}
        </p>
        <Sound source={this.props.track.trackURL}/>
      </div>
    );
  }
};

export default TrackShow;