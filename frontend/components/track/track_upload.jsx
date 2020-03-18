import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackUpload extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: "",
      artist_id: ""
    }

    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(e){
    e.preventDefault();
    this.setState({artist_id: this.props.currentUser.id})
    this.props.upload(this.state);
  }

  updateInput(field){
    return e => this.setState({[field]: e.target.value});
  }
  

  render(){
    return(
      <div>
        <form onSubmit={this.handleUpload}>
          <label>Track Title
            <input placeholder="title" type="text" value={this.state.name} onChange={this.updateInput("name")}/>
          </label>
          <button type="submit">click me</button>
        </form>
      </div>
    );
  }
};

export default withRouter(TrackUpload);