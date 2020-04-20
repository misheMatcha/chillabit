import React from 'react';
import TrackList from '../track/track_list/track_list_contianer';

class Discover extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <div className="discover-container">
        <div className="discover-main">
          <TrackList title={'More of what you like'} desc={`Suggestions based on what you've liked or played`} />
        </div>
        <div className="discover-sidebar"></div>
      </div>
    )
  }
}

export default Discover;