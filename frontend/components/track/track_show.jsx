import React from 'react';
import Sound from '../sound/sound.jsx';

class TrackShow extends React.Component{
  componentDidMount(){
    // this.props.fetchTrack(this.props.match.params.id)
    this.props.fetchTrack(1)
  }

  render(){
    // console.log(this.props.track.trackURL)
    return(
      <div className="track-show">
        <div className="track-show-wrap">
          <div className="track-show-details-wrap">
            <div className="track-show-details">
              <div className="track-show-details audio-wrap">
                {/* <button id="track-show-play" className="fas fa-play-circle"></button> */}
                <Sound trackSource={this.props.track.trackURL}/>
                <div className="audio-wrap track-details">
                  <p className="track-details artist">{this.props.track.artist}</p>
                  <p className="track-details title">{this.props.track.name}</p>
                </div>
              </div>
              <div className="misc-wrap">
                <p className="misc-wrap date">3 months ago</p>
                <p className="misc-wrap genre"># lofi</p>
              </div>
            </div>
            <div className="track-show-visuals">
              wavys
            </div>
          </div>
          <img className="track-show-cover" src="https://chillabit-pro.s3-us-west-1.amazonaws.com/ocha_love-story.jpg"/>
        </div>
        {/* <Sound trackSource={this.props.track.trackURL}/> */}
      </div>
    );
  }
};

export default TrackShow;