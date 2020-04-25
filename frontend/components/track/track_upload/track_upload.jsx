import React from 'react';
import { withRouter } from 'react-router-dom';
import UploadBar from '../../upload/upload_bar.jsx';

class TrackUpload extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: "",
      artistId: this.props.currentUser.id,
      trackFile: null
    }
    this.formData = new FormData();

    this.handleUpload = this.handleUpload.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleUpload(e){
    e.preventDefault();
    const trackForm = this;
    this.formData.append("track[name]", this.state.name)
    this.formData.append("track[artist_id]", this.state.artistId)
    this.formData.append("track[song]", this.state.trackFile)
    this.props.upload(this.formData).then(newTrack => {
      trackForm.props.history.push(`/${this.props.currentUser.username}/${newTrack.name}/${newTrack.id}`)
    })
  }

  updateInput(field){
    return e => this.setState({[field]: e.target.value});
  }

  handleFile(e){
    this.setState({trackFile: e.currentTarget.files[0]})
  }

  // Add genre later so that albums can aggregate genres from tracks within
  render(){
    return(
      <div className="track-upload-container">
        <UploadBar />
        <div className="track-upload-advert">
          <div className="">
            <div className="">
              <p>0% of free uploads used</p>
              <i class="fas fa-chevron-down"/>
            </div>
            <div className=""/>
            <div className="">
              <p className=""><a href="" target="blank">Try Pro Unlimited</a> for unlimited uploads.</p>
            </div>
          </div>
          <button className="">Try Pro Unlimited</button>
        </div>
        <form onSubmit={this.handleUpload}>
          <label>Upload
          <input type="file" onChange={this.handleFile}/>
          </label>
          <label>Title
            <input placeholder="title"
              type="text"
              value={this.state.name}
              onChange={this.updateInput("name")}/>
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
};

export default withRouter(TrackUpload);