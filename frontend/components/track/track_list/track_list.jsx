import React from 'react';
import TrackListItem from './track_list_item_container';

class TrackList extends React.Component{
  componentDidMount(){
    this.props.fetchAllTracks();
  }

  render(){
    return(
      <div className="track-list">
        <p className="track-list-title">{this.props.discTitle}</p>
        <p className="track-list-desc">{this.props.discDesc}</p>
        <ul className="track-list-ul">
          {
            this.props.allTracks.map((track, idx) => {
              if(idx <= 11){
                return(
                  <li key={track.id}>
                    <TrackListItem track={track} />
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
    );
  }
}

export default TrackList;