import React, { useState, useEffect } from 'react';

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

    const [pizza, setPizza] = useState(5);

    useEffect(() => {
      console.log(pizza)
    })

  }

  // checkSource(ctx){
  //   if(this.props.currentTrack.src === null || this.props.currentTrack.src !== this.props.track.trackUrls[0]){
  //     this.setState({ audioSource: this.props.track.trackUrls[0] });
  //   }else{
  //     this.setState({ audioSource: this.props.currentTrack.currentSrc });
  //     console.log(ctx)
  //     ctx.currentTime = this.props.currentTrack.currentTime;
  //   }
  // }

  // togglePlay(){
  //   if(this.props.playing === false){
  //     this.props.playTrack();
  //   }else{
  //     this.props.pauseTrack();
  //   }
  // }

  render(){
    const track = this.props.track;
    return(
      <div className="track-list-item">
        {/* <audio id="track-list-audio" src={trackDetail.trackUrls[0]} /> */}
        <div className="track-list-item-hover-wrap" >
          <img src={track.cover} className="track-list-item-cover" />
          <div className="track-list-item-hover" onClick={() => setPizza(1)}>
            {/* <button className={playButton} onClick={() => {
              if (playButton === "fas fa-play-circle") {
                setPlayButton("fas fa-pause-circle")
              } else {
                setPlayButton("fas fa-play-circle")
              }
            }} /> */}
          </div>
        </div>
        <div className="track-list-item-details">
          <p className="track-list-item-title">{track.name}</p>
          <p className="track-list-item-artist">{track.artist}</p>
        </div>
      </div>
    );
  }
};


// function TrackListItem(track){
//   const [duration, setDuration] = useState(null);
//   const [playButton, setPlayButton] = useState("fas fa-play-circle");
//   const trackDetail = track.track;

//   useEffect(() => {
//   })

//   return(
//     <div className="track-list-item">
//       {/* <audio id="track-list-audio" src={trackDetail.trackUrls[0]} /> */}
//       <div className="track-list-item-hover-wrap">
//         <img src={trackDetail.cover} className="track-list-item-cover" />
//         <div className="track-list-item-hover">
//           <button className={playButton} onClick={() => {
//             if(playButton === "fas fa-play-circle"){
//               setPlayButton("fas fa-pause-circle")
//             }else{
//               setPlayButton("fas fa-play-circle")
//             }
//           }} />
//         </div>
//       </div>
//       <div className="track-list-item-details">
//         <p className="track-list-item-title">{trackDetail.name}</p>
//         <p className="track-list-item-artist">{trackDetail.artist}</p>
//       </div>
//     </div>
//   )
// }

export default TrackListItem;