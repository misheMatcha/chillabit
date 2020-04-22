import React from 'react';
import { TRACKS } from '../../placeholder_seeds';
class TrackPlayer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      artist: TRACKS[8].artist,
      title: TRACKS[8].title,
      cover: TRACKS[8].cover,
      url: TRACKS[8].url,
      currentTime: '00:00',
      duration: '02:37',
      vol: 1
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
      console.log('Playing audio');
    }else{
      this.props.audioPlayer.current.pause();
      console.log('Pause audio');
    }
  }

  prevTrack(){
    console.log('Previous track');
  }
  
  nextTrack(){
    console.log('Next track');
  }

  shuffleTracks(){
    console.log('Tracks now shuffled');
  }

  repeatTrack(){
    console.log('Repeat track');
  }

  render(){
    return(
      <>
        <audio id=""
          ref={this.props.audioPlayer}
          src={this.state.url}
        />
        <div className="track-player-bg"/>
        <div className="track-player-container">
          <div className="track-player-controls">
            <button className="fas fa-step-backward" onClick={this.prevTrack}/>
            {
              this.props.playing === false ? <button className="fas fa-play" onClick={() => this.props.playTrack()}/> : <button className="fas fa-pause" onClick={() => this.props.pauseTrack()}/>
            }
            <button className="fas fa-step-forward" onClick={this.nextTrack}/>
            <button className="fas fa-random" onClick={this.shuffleTracks} />
            <button className="fas fa-undo" onClick={this.repeatTrack}/>
          </div>
          <div className="track-player-progress-wrap">
            <p>{this.state.currentTime}</p>
            <div className="track-player-progress"/>
            <p>{this.state.duration}</p>
          </div>
          <button className="fas fa-volume-up" />
          <div className="track-player-current-details">
            <div className="track-player-track-info">
              <img className="track-album-cover" src={this.state.cover} />
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