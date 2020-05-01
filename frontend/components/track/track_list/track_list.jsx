import React from 'react';
import TrackListItem from './track_list_item_container';
import { TRACKS } from '../../placeholder_seeds';

class TrackList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      stage: 0,
      carouselIdx: 1
    }
    
    this.toggleLeft = this.toggleLeft.bind(this);
    this.toggleRight = this.toggleRight.bind(this);
    this.showSlides = this.showSlides.bind(this);
  }
  componentDidMount(){
    // this.props.fetchAllTracks();
  }
  
  toggleLeft(){
    this.state.carouselIdx -= 1;
    console.log(this.state.carouselIdx)
  }
  
  toggleRight(){
    this.state.carouselIdx += 1;
    console.log(this.state.carouselIdx)
  }

  showSlides(n){
    let i;
    const slides = document.getElementsByClassName("track-list-li");

    if(n > TRACKS.length){
      this.setState({carouselIdx: 1})
    }
    if(n < 1){
      this.setState({carouselIdx: TRACKS.length});
    }
    
    for(i = 0; i < TRACKS.length; i++){
      TRACKS[i].style.display = "none";
    }

    TRACKS[this.state.carouselIdx-1].style.display = "block";
  }

  render(){
    return(
      <div className="track-list">
        <p className="track-list-title">{this.props.discTitle}</p>
        <p className="track-list-desc">{this.props.discDesc}</p>

        <div className="track-list-carousel">
          <ul className="track-list-ul">
            {
              TRACKS.map((track, idx) => {
                // if(idx >= this.state.startIdx && (idx <= this.state.endIdx)){
                  return(
                    <li className="track-list-li" key={idx}>
                      <TrackListItem track={track} />
                    </li>
                  )
                // }
              })
            }
          </ul>
          <button className="prev" onClick={this.toggleLeft}>&#10094;</button>
          <button className="next" onClick={this.toggleRight}>&#10095;</button>
        </div>

      </div>
    );
  }
}

export default TrackList;