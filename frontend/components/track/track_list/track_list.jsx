import React from 'react';
import TrackListItem from './track_list_item_container';

class TrackList extends React.Component{
  componentDidMount(){
    this.props.fetchAllTracks();
  }

  render(){
    return(
      <div className="">
        <p>Track list</p>
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