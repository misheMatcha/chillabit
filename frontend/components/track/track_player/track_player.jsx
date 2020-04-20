import React from 'react';

class TrackPlayer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      artist: '',
      title: '',
      src: '',
      cover: '',
    }
  }

  componentDidMount() {
    // may not need this if i pass the src as a ui props
    // this.props.fetchTrack(this.props.match.params.id)
    // this.props.fetchTrack(1);
  }

  componentDidUpdate(){
    if(this.props.playing === true){
      this.props.audioPlayer.current.play();
    }else{
      this.props.audioPlayer.current.pause();
    }
  }

  render(){
    return(
      <>
        <audio id=""
          ref={this.props.audioPlayer}
          src={this.state.src}
        />
        <div className="track-player-bg"/>
        <div className="track-player-container">
          <div className="track-player-controls">
            <button className="fas fa-step-backward" />
            {
              this.props.playing === false ? <button className="fas fa-play" onClick={() => this.props.playTrack()}/> : <button className="fas fa-pause" onClick={() => this.props.pauseTrack()}/>
            }
            <button className="fas fa-step-forward" />
            <button className="fas fa-random" />
            <button className="fas fa-undo" />
          </div>
          <div className="track-player-progress-wrap">
            <p>0:00</p>
            <div className="track-player-progress"/>
            <p>5:00</p>
          </div>
          <button className="fas fa-volume-up" />
          <div className="track-player-current-details">
            <div className="track-player-track-info">
              <img className="track-album-cover" src="https://chillabit-pro.s3-us-west-1.amazonaws.com/ocha_love-story.jpg" />
              <div className="">
                <p>{this.state.artist}</p>
                <p>{this.state.title}</p>
              </div>
            </div>
            <div className="track-player-misc">
              <button className="fas fa-heart"></button>
              <button className="fas fa-list-ul"></button>
            </div>
          </div>
        </div>
      </>
    )
  }
};

export default TrackPlayer;