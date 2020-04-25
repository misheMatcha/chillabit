import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectdRoute } from '../../util/route_util.jsx';
import UploadBar from './upload_bar.jsx';

class Upload extends React.Component {
  render() {
    return (
      <div className="upload-container">
        <UploadBar />
        <ProtectdRoute exact path="/upload" component={Upload} />
      </div>
    )
  }
}

export default Upload;