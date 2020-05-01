import React from 'react';
import TrackListItem from './track_list_item_container';
import { TRACKS } from '../../placeholder_seeds';

class TrackList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      stage: 1
    }
    
    this.toggleLeft = this.toggleLeft.bind(this);
    this.toggleRight = this.toggleRight.bind(this);
  }
  componentDidMount(){
    // this.props.fetchAllTracks();
  }
  
  toggleLeft(){
    if(this.state.stage > 1){
      this.state.stage -= 1;
    }
    this.toggleDisplay(this.state.stage)
  }
  
  toggleRight(){
    if(this.state.stage < 3){
      this.state.stage += 1;
    }
    this.toggleDisplay(this.state.stage)
  }
  
  toggleDisplay(n){
    let stage1 = document.getElementsByClassName("track-list-li-1");
    let stage2 = document.getElementsByClassName("track-list-li-2");
    let stage3 = document.getElementsByClassName("track-list-li-3");

    switch (n) {
      case 1:
        stage1.classList.remove('display-none');
        stage2.classList.add('display-none');
        stage3.classList.add('display-none');
      case 2:
        stage1.classList.add('display-none');
        stage2.classList.remove('display-none');
        stage3.classList.add('display-none');
      case 3:
        stage1.classList.add('display-none');
        stage2.classList.add('display-none');
        stage3.classList.remove('display-none');
    }
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
                let stageIdx;
                if(idx >= 0 && idx <= 3){
                  stageIdx = 1;
                } else if (idx >= 4 && idx <= 7){
                  stageIdx = 2;
                } else{
                  stageIdx = 3;
                }
                
                  return(
                    <li className={'track-list-li-' + stageIdx} key={idx}>
                      <TrackListItem track={track} />
                    </li>
                  )
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