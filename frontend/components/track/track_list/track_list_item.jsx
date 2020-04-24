import React from 'react';

class TrackListItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      playing: false
    }

    this.togglePlay = this.togglePlay.bind(this)
  }
  onHover(e){
    e.target.style.opacity = '100%';
  }
  
  offHover(e){
    e.target.style.opacity = '0';
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
        <div className="track-list-item-hover" onMouseEnter={this.onHover} onMouseLeave={this.offHover}>
        {/* <div className="track-list-item-hover"> */}
          <button className="fas fa-play-circle" onClick={this.togglePlay}/>
        </div>
        <img src={this.props.track.cover} className="track-list-item-cover"/>
        <div className="track-list-item-details">
          <p className="track-list-item-title">{this.props.track.title}</p>
          <p className="track-list-item-artist">{this.props.track.artist}</p>
        </div>
      </div>
    );
  }
};

export default TrackListItem;