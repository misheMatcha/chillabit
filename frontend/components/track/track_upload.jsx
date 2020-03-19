import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackUpload extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: "",
      genre: "None",
      artist_id: this.props.currentUser.id,
      trackFile: null
    }
    this.formData = new FormData();

    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(e){
    e.preventDefault();
    this.formData.append("track[name]", this.state.name)
    this.formData.append("track[artist_id]", this.state.artist_id)
    this.formData.append("track[song]", this.state.trackFile)
    this.props.upload(this.formData)
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
      <div>
        <form id="formy" onSubmit={this.handleUpload}>
          <input type="file" onChange={this.handleFile.bind(this)}/>
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