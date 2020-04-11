import React from 'react';
import Sound from './sound';

class SoundBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      toggleAction: 'play',
      iconStyle: 'fas fa-play'
    }
    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  componentDidMount(){
    // this.props.fetchTrack(this.props.match.params.id)
    this.props.fetchTrack(1);
  }

  handlePlayPause(){
    if(this.state.toggleAction === 'play'){
      this.props.audioPlayer.current.play();
      this.setState({
        toggleAction: 'pause',
        iconStyle: 'fas fa-pause'
      })
    }else{
      this.props.audioPlayer.current.pause();
      this.setState({
        toggleAction: 'play',
        iconStyle: 'fas fa-play'
      })
    }
  }
  
  render(){
    const thetrack = this.props.track
    // console.log(this.props.audioPlayer)
    return(
      <>
        <audio id=""
          ref={this.props.audioPlayer}
          src={this.props.track.trackURL}
        />
        <div className="sound-bar-container">
          <i className="fas fa-angle-left"/>
          <i className={this.state.iconStyle} onClick={this.handlePlayPause}/>
          <i className="fas fa-angle-right"/>
          <i className="fas fa-random"/>
          <i className="fas fa-undo"/>
          <p>status bar</p>
          <i className="fas fa-volume-up"/>
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