import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
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
        <div className="track-upload-main">

          <div className="track-upload-advert-wrap">
            <div className="track-upload-advert-details">
              <div className="track-upload-advert-percentages">
                <p className="track-upload-advert-percentages-p">0% of free uploads used</p>
                <i class="fas fa-chevron-down"/>
              </div>
              <div className="track-upload-advert-percentages-bar"/>
              <p className="track-upload-advert-percentages-ad"><a href="" target="blank">Try Pro Unlimited</a> for unlimited uploads.</p>
            </div>
            <button className="track-upload-advert-percentages-button">Try Pro Unlimited</button>
          </div>

          <div className="track-upload-form">
            {/* NOTE: review active strorage using a possible DirectUpload class */}
            <form className="track-upload-form-wrap" onSubmit={this.handleUpload}>
              <div className="track-upload-form-instruct">
                Drag and drop your tracks & albums here
                <label className="track-upload-form-label">
                  or choose files to upload
                  <input type="file" onChange={this.handleFile}/>
                </label>
              </div>
              <div className="track-upload-form-details">
                <div className="track-upload-form-details-nav">
                  <NavLink exact to="/" className="track-upload-form-details-nav-link" activeClassName="track-upload-form-details-nav-link-active">Basic info</NavLink>
                  <NavLink exact to="/upload" className="track-upload-form-details-nav-link" activeClassName="track-upload-form-details-nav-link-active">Metadata</NavLink>
                  <NavLink exact to="/upload" className="track-upload-form-details-nav-link" activeClassName="track-upload-form-details-nav-link-active">Permissions</NavLink>
                </div>
                <div className="track-upload-form-details-wrap">
                  <img src="https://chillabit-pro.s3-us-west-1.amazonaws.com/ocha_love-story.jpg" className="track-upload-form-details-cover"/>
                  <div className="track-upload-form-info-main">

                    <div className="track-upload-form-info-wrap">
                      <div className="track-upload-form-details-title">
                        Title <p className="required">*</p>
                      </div>
                      <label className="track-upload-form-details-label">
                        <input placeholder="Name your track"
                          type="text"
                          value={this.state.name}
                          onChange={this.updateInput("name")} className="track-upload-form-details-input"/>
                      </label>
                      <div className="track-upload-form-details-url">
                        chillabit.herokuapp.com/{this.props.currentUser.username}/{this.state.name}
                      </div>
                    </div>

                  </div>
                </div>
                <div className="track-upload-form-sub">
                  <div className="track-upload-form-sub-required">
                    <p className="required-left">*</p> Required fields
                  </div>
                  <div className="track-upload-form-sub-buttons">
                    <div className="track-upload-form-sub-cancel">Cancel</div>
                    <button type="submit" className="track-upload-form-sub-save">Save</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="track-upload-footer">
            By uploading, you confirm that your sounds comply with our Terms of Use and you don't infringe anyone else's rights.
          </div>


        </div>
      </div>
    );
  }
};

export default withRouter(TrackUpload);