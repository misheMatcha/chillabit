import React from 'react';

class TrackListItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      audioSource: ""
    }
    this.handleTrack = this.handleTrack.bind(this)
  }

  handleTrack(){
    let audioDom = document.getElementById("track-list-audio");
    this.checkSource()
    this.togglePlay()

    let trackDetails = {
      autoplay: audioDom.autoplay,
      buffered: audioDom.buffered,
      currentSrc: audioDom.currentSrc,
      currentTime: audioDom.currentTime,
      duration: audioDom.duration,
      ended: audioDom.ended,
      loop: audioDom.loop,
      muted: audioDom.muted,
      paused: audioDom.paused,
      seekable: audioDom.seekable,
      seeking: audioDom.seeking,
      src: audioDom.src,
      volume: audioDom.volume
    }
    
  }

  checkSource(ctx){
    if(this.props.currentTrack.src === null || this.props.currentTrack.src !== this.props.track.trackUrls[0]){
      this.setState({ audioSource: this.props.track.trackUrls[0] });
    }else{
      this.setState({ audioSource: this.props.currentTrack.currentSrc });
      console.log(ctx)
      ctx.currentTime = this.props.currentTrack.currentTime;
    }
  }

  togglePlay(){
    if(this.props.playing === false){
      this.props.playTrack();
    }else{
      this.props.pauseTrack();
    }
  }

  render(){
    // console.log(this.props)
    return(
      <div className="track-list-item">
        <audio id="track-list-audio" ref={this.props.audio} src={this.state.audioSource}/>
        <div className="track-list-item-hover-wrap">
          <img src={this.props.track.cover} className="track-list-item-cover"/>
          <div className="track-list-item-hover">
            <button className="fas fa-play-circle" onClick={this.handleTrack}/>
          </div>
        </div>
        <div className="track-list-item-details">
          <p className="track-list-item-title">{this.props.track.name}</p>
          <p className="track-list-item-artist">{this.props.track.artist}</p>
        </div>
      </div>
    );
  }
};

export default TrackListItem;