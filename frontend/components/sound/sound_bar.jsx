import React from 'react';
import Sound from './sound';

class SoundBar extends React.Component{
  constructor(props){
    super(props)
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount(){
    // this.props.fetchTrack(this.props.match.params.id)
    this.props.fetchTrack(1);
  }

  handlePlay(){
    this.props.audioPlayer.current.play();
  }
  
  render(){
    const thetrack = this.props.track
    console.log(this.props.audioPlayer)
    return(
      <>
        <audio id=""
          ref={this.props.audioPlayer}
          src={this.props.track.trackURL}
        />
        <div className="sound-bar-container">
          <i className="fas fa-angle-left"></i>
          {/* <Sound trackSource={this.props.track.trackURL} buttonStyle="fas fa-play soundbar"/> */}
          <i className="fas fa-angle-right" onClick={this.handlePlay}></i>
          <i className="fas fa-random"></i>
          <i className="fas fa-undo"></i>
          <p>status bar</p>
          <i className="fas fa-volume-up"></i>
          <div className="artists-details">
            <div className="the-details">
              <img className="albumcover" src="https://chillabit-pro.s3-us-west-1.amazonaws.com/ocha_love-story.jpg" />
              <div>
                <p>{thetrack.artist}</p>
                <p>{thetrack.name}</p>
              </div>
            </div>
            <div>
              <i className="fas fa-heart"></i>
              <i className="fas fa-list-ul"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default SoundBar;