import React from 'react';
import Sound from '../sound/sound.jsx';

class TrackShow extends React.Component{
  componentDidMount(){
    // this.props.fetchTrack(this.props.match.params.id)
    this.props.fetchTrack(1)
  }

  render(){
    return(
      <div className="track-show">
        <div className="track-show-details-wrap">
          <div className="track-show-details">
            <div className="track-show-details audio-wrap">
              <button className="fas fa-play-circle"></button>
              <div className="audio-wrap track-details">
                <p className="track-details artist">{this.props.track.artist}</p>
                <p className="track-details title">{this.props.track.name}</p>
              </div>
            </div>
            <div className="audio-wrap track-details">
              <p className="track-details date">3 months ago</p>
              <p className="track-details genre">#lofi</p>
            </div>
          </div>
          <div className="track-show-visuals">
            wavys
          </div>
        </div>
        <img className="track-show-cover" src="https://chillabit-pro.s3-us-west-1.amazonaws.com/ocha_love-story.jpg"/>
        <Sound source={this.props.track.trackURL}/>
      </div>
    );
  }
};

export default TrackShow;