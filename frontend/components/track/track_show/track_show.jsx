import React from 'react';

class TrackShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      test1: ''
    }
  }

  componentDidMount(){
    this.props.fetchTrack(this.props.match.params.id)
  }

  render(){
    // console.log("show: ", this.props)
    return(
      <div className="track-show">
        {/* <audio
          ref={this.props.audioPlayer}
          src={this.state.test1}
        /> */}
        <div className="track-show-wrap">
          <div className="track-show-details-wrap">
            <div className="track-show-details">
              <div className="track-show-details audio-wrap">
                {
                  this.props.playing === false ? <button className="fas fa-play-circle" onClick={() => {
                    this.props.playTrack()
                    this.props.updateTrack(this.props.aud)
                    this.props.testadd(this.props.track)
                  }} /> : <button className="fas fa-pause-circle" onClick={() => {
                    this.props.pauseTrack()
                  }} />
                }
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
      </div>
    );
  }
};

export default TrackShow;