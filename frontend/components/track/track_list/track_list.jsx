import React from 'react';
import TrackListItem from './track_list_item_container';

class TrackList extends React.Component{
  componentDidMount(){
    this.props.fetchAllTracks();
  }

  render(){
    return(
      <div className="">
        <p>{this.props.discTitle}</p>
        <p>{this.props.discDesc}</p>
        <ul>
          {
            this.props.allTracks.map((track, idx) => {
              if(idx <= 12){
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