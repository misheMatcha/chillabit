import React from 'react'
import { NavLink } from 'react-router-dom';

const UploadBar = () => (
  <div className="upload-bar">
    <div className="upload-bar-links-wrap">
      <NavLink to="/" className="upload-bar-links" activeClassName="upload-bar-links-active">Upload</NavLink>
      <NavLink to="/upload" className="upload-bar-links" activeClassName="upload-bar-links-active">Your tracks</NavLink>
      <NavLink to="/upload" className="upload-bar-links" activeClassName="upload-bar-links-active">Stats</NavLink>
      <NavLink to="/upload" className="upload-bar-links" activeClassName="upload-bar-links-active">Pro Plans</NavLink>
      <NavLink to="/upload" className="upload-bar-links" activeClassName="upload-bar-links-active">Pulse</NavLink>
    </div>
    <button className="upload-bar-creators">
      <i className="fas fa-external-link-alt"/>
      <p className="upload-bar-creators-link">Creators on chillabit</p>
    </button>
  </div>
);

export default UploadBar;