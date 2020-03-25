import React from 'react';

class SoundBar extends React.Component{
  componentDidMount(){
    this.props.fetchTrack(this.props.match.params.id)
  }
  
  render(){
    return(
      <div className="sound-bar-container">
        <audio controls>
          <source src={this.props.track.trackURL}/>
        </audio>
      </div>
    );
  }
};

export default SoundBar;