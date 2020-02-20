import React from 'react'
import { NavLink } from 'react-router-dom';

const UploadBar = () => (
  <div>
    <div>
      <NavLink to="/">Upload</NavLink>
      <NavLink to="/">Your tracks</NavLink>
      <NavLink to="/">Stats</NavLink>
      <NavLink to="/">Pro Plans</NavLink>
      <NavLink to="/">Pulse</NavLink>
    </div>
    <div>
      <i class="fas fa-external-link-alt"></i>
      Creators on chillabit
    </div>
  </div>
);

export default UploadBar;