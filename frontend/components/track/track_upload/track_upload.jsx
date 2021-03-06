import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import UploadBar from '../../upload/upload_bar.jsx';

class TrackUpload extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      artistId: this.props.currentUser.id,
      tracklist: [],
      genre: '',
      desc: '',
      tagInput: '',
      tags: [],
      cover: null,
      coverUrl: '',
      file: null,
      stage1: 'track-upload-form-instruct display-flex',
      stage2: 'track-upload-form-details display-none'
    }
    this.formData = new FormData();

    this.handleUpload = this.handleUpload.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleCover = this.handleCover.bind(this);
    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }

  handleUpload(e){
    e.preventDefault();
    const trackForm = this;
    this.formData.append("track[name]", this.state.name)
    this.formData.append("track[artist_id]", this.state.artistId)
    this.formData.append("track[cover]", this.state.cover)
    this.formData.append("track[genre]", this.state.genre)
    this.formData.append("track[desc]", this.state.desc)
    
    for(let j = 0; j < this.state.tags.length; j++){
      this.formData.append("track[tags][]", this.state.tags[j]);
    }

    for (let i = 0; i < this.state.tracklist.length; i++){
      this.formData.append("track[trackFiles][]", this.state.tracklist[i]);
    }
    this.props.upload(this.formData).then(newTrack => {
      trackForm.props.history.push(`/${this.props.currentUser.username}/${newTrack.name}/${newTrack.id}`)
    })
  }

  updateInput(field){
    return e => this.setState({[field]: e.target.value});
  }

  handleFile(e){
    this.setState({
      tracklist: [e.currentTarget.files[0]],
      stage1: 'track-upload-form-instruct display-none',
      stage2: 'track-upload-form-details display-flex'
    })
  }

  handleCover(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = () => this.setState({
      coverUrl: reader.result,
      cover: file
    });

    if(file){
      reader.readAsDataURL(file)
    }else{
      this.setState({
        coverUrl: '',
        cover: null
      })
    }

    this.reader.onloadend = () => 
      this.setState({
        cover: e.currentTarget.files[0],
        coverUrl: this.reader.result
      })
  }

  addTag(e){
    e.preventDefault();
    this.state.tags.push(this.state.tagInput);
    this.setState({tagInput: ''});
  }

  removeTag(e){
    let array = [...this.state.tags];
    // console.log(array)
    let index = array.indexOf(e.currentTarget.value)
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
                <i className="fas fa-chevron-down"/>
              </div>
              <div className="track-upload-advert-percentages-bar"/>
              <p className="track-upload-advert-percentages-ad"><a href="" target="blank">Try Pro Unlimited</a> for unlimited uploads.</p>
            </div>
            <button className="track-upload-advert-percentages-button">Try Pro Unlimited</button>
          </div>

          <div className="track-upload-form">
            {/* NOTE: review active strorage using a possible DirectUpload class */}
            <form className="track-upload-form-wrap" onSubmit={this.handleUpload}>
              <div className={this.state.stage1}>
                Drag and drop your tracks & albums here
                <label className="track-upload-form-label">
                  or choose files to upload
                  <input type="file" onChange={this.handleFile} multiple/>
                </label>
                
              </div>
              <div className={this.state.stage2}>
                <div className="track-upload-form-details-nav">
                  <NavLink exact to="/upload" className="track-upload-form-details-nav-link" activeClassName="track-upload-form-details-nav-link-active">Basic info</NavLink>
                  <NavLink exact to="/upload-meta" className="track-upload-form-details-nav-link" activeClassName="track-upload-form-details-nav-link-active">Metadata</NavLink>
                  <NavLink exact to="/upload-permission" className="track-upload-form-details-nav-link" activeClassName="track-upload-form-details-nav-link-active">Permissions</NavLink>
                </div>
                <div className="track-upload-form-details-wrap">

                  
                  <div className="track-upload-form-details-cover-wrap">
                    {
                      this.state.cover !== null ? <img src={this.state.coverUrl} className="track-upload-form-details-cover" /> : <div className="track-upload-form-details-cover-default"/>
                    }
                    
                      <div className="track-upload-form-label-cover">
                        <label className="track-upload-form-label-cover-button">
                          <i className="fas fa-camera" /> {this.state.cover === null ? 'Upload image' : 'Replace image'}
                          <input type="file" onChange={this.handleCover} />
                        </label>
                      </div>
                  </div>

                  
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

                    <div className="track-upload-form-info-wrap">
                      <div className="track-upload-form-details-title">
                        Genre
                      </div>
                      <label className="track-upload-form-details-label">
                        <input placeholder="Name your genre"
                          type="text"
                          value={this.state.genre}
                          onChange={this.updateInput("genre")} className="track-upload-form-details-input" />
                      </label>
                    </div>
                    
                      <div className="track-upload-form-info-wrap">
                        <div className="track-upload-form-details-title">
                          Additional tags
                        </div>
                        <div>

                        </div>
                        <label className="track-upload-form-details-label">
                          <input placeholder="Add tags to describe the genre and mood of your track"
                            type="text"
                            value={this.state.tagInput}
                            onChange={this.updateInput("tagInput")} className="track-upload-form-details-input" />
                        </label>
                        <ul className="tag-list">
                          {
                            this.state.tags.map((tag, idx) => {
                              return(
                                <li key={idx} className="tag-item" onClick={this.removeTag}>
                                  <p className="cancel">x</p> {tag}
                                </li>
                              )
                            })
                          }
                        </ul>
                      <button className="tag-button" onClick={this.addTag}>add tag</button>
                      </div>
                    
                      <div className="track-upload-form-info-wrap">
                        <div className="track-upload-form-details-title">
                          Description
                        </div>
                        <label className="track-upload-form-details-label-text">
                          <textarea placeholder="Describe your track" className="track-upload-form-details-label-textarea" value={this.state.desc} onChange={this.updateInput('desc')}></textarea>
                        </label>
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


