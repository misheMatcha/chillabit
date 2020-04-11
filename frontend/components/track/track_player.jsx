import React from 'react';

class TrackPlayer extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    // this.props.fetchTrack(this.props.match.params.id)
    this.props.fetchTrack(1);
  }

  render(){
    return(
      <>
        <audio id=""
          ref={this.props.audioPlayer}
          src={this.props.track.trackURL}
        />
        <div className="sound-bar-container">
          <i className="fas fa-angle-left" />
          {
            this.props.playing === false ? <button className="fas fa-play" onClick={this.props.playTrack}/> : <button className="fas fa-pause" onClick={this.props.pauseTrack}/>
          }
          <i className="fas fa-angle-right" />
          <i className="fas fa-random" />
          <i className="fas fa-undo" />
          <p>status bar</p>
          <i className="fas fa-volume-up" />
          <div className="artists-details">
            <div className="the-details">
              <img className="albumcover" src="https://chillabit-pro.s3-us-west-1.amazonaws.com/ocha_love-story.jpg" />
              <div>
                <p>{this.props.track.artist}</p>
                <p>{this.props.track.name}</p>
              </div>
            </div>
            <div>
              <i className="fas fa-heart"></i>
              <i className="fas fa-list-ul"></i>
            </div>
          </div>
        </div>
      </>
    )
  }
};

export default TrackPlayer;