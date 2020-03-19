import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackUpload extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: "",
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

    $.ajax({
      url: "/api/tracks",
      method: "POST",
      data: this.formData,
      contentType: false,
      processData: false
    });
  }

  updateInput(field){
    return e => this.setState({[field]: e.target.value});
  }

  handleFile(e){
    this.setState({trackFile: e.currentTarget.files[0]})
  }
  

  render(){
    console.log(this.state)
    return(
      <div>
        <form id="formy" onSubmit={this.handleUpload}>
          <label>Track Title
            <input placeholder="title" type="text" value={this.state.name} onChange={this.updateInput("name")}/>
          </label>
          <input type="file" onChange={this.handleFile.bind(this)}/>
          <button type="submit">click me</button>
        </form>
      </div>
    );
  }
};

export default withRouter(TrackUpload);