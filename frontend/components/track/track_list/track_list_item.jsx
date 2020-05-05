import React from 'react';

class TrackListItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      playing: false
    }

    this.togglePlay = this.togglePlay.bind(this)
  }

  togglePlay(){
    if(this.state.playing === false){
      this.setState({playing: true});
      console.log('Now playing');
    }else{
      this.setState({playing: false});
      console.log('Now paused');
    }
  }

  render(){
    return(
      <div className="track-list-item">
        <div className="track-list-item-hover-wrap">
          <img src={this.props.track.cover} className="track-list-item-cover"/>
          <div className="track-list-item-hover">
            <button className="fas fa-play-circle" onClick={this.togglePlay}/>
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