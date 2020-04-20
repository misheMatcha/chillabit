import React from 'react';

class TrackListItem extends React.Component{
  onHover(e){
    e.target.style.opacity = '100%';
  }
  
  offHover(e){
    e.target.style.opacity = '0';
  }

  render(){
    return(
      <div className="single-track-container">
        <div className="single-track-hover" onMouseEnter={this.onHover} onMouseLeave={this.offHover}>
          <button className="fas fa-play-circle"/>
        </div>
        <img src="https://chillabit-pro.s3-us-west-1.amazonaws.com/the_day.jpg" className="single-track-cover"/>
        <div className="single-track-details">
          <p className="single-track-name">{this.props.track.name}</p>
          <p className="single-track-artist">{this.props.track.artist}</p>
        </div>
      </div>
    );
  }
};

export default TrackListItem;