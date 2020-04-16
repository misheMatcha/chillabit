import React from 'react';
import TrackListItem from './track_list_item_container';

class TrackList extends React.Component{
  componentDidMount(){
    this.props.fetchAllTracks();
  }

  render(){
    console.log(this.props.allTracks)
    return(
      <div className="">
        <p>Track list</p>
        <ul>
          {
            // this.props.allTracks.map(track => (
            //   <li key={track.id}>
            //     <TrackListItem track={track} />
            //   </li>
            // ))
          }
        </ul>
      </div>
    );
  }
}

export default TrackList;