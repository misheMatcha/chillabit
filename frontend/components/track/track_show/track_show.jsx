import React from 'react';
import { IRIDSCNT } from '../../placeholder_seeds';

class TrackShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    // this.props.fetchTrack(this.props.match.params.id)
  }

  render(){
    return(
      <div className="track-show">
        <div className="track-show-wrap">
          <div className="track-show-details-wrap">
            <div className="track-show-details">
              <div className="track-show-details audio-wrap">
                {
                  this.props.playing === false ? <button className="fas fa-play-circle" onClick={() => {
                    this.props.playTrack()
                    this.props.updateTrack(this.props.aud)
                    this.props.testadd(this.props.track)
                  }} /> : <button className="fas fa-pause-circle" onClick={() => {
                    this.props.pauseTrack()
                  }} />
                }
                <div className="audio-wrap track-details">
                  <p className="track-details artist">{IRIDSCNT.artist}</p>
                  <p className="track-details title">{IRIDSCNT.title}</p>
                </div>
              </div>
              <div className="misc-wrap">
                <p className="misc-wrap date">3 months ago</p>
                <p className="misc-wrap genre"># lofi</p>
              </div>
            </div>
            <div className="track-show-visuals">
              wavys
            </div>
          </div>
          <img className="track-show-cover" src={IRIDSCNT.cover}/>
        </div>
      </div>
    );
  }
};

export default TrackShow;