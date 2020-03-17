import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

// continue later
// dropping another scaling note
const NavBar = ({currentUser, logout, signup, login}) => {
  const protectedNav = () => (
    <div className="protected-nav">
      <div className="nav-content">
        <div className="icon">
          <NavLink className="nav-icon-link" activeClassName="nav-active-icon" to="/discover"><i className="fab fa-soundcloud home"></i></NavLink>
        </div>
        <NavLink className="content-link" activeClassName="nav-active" to="/discover">Home</NavLink> 
        <NavLink className="content-link" activeClassName="nav-active" to="/stream">Stream</NavLink> 
        <NavLink className="content-link" activeClassName="nav-active" to="/library">Library</NavLink> 
      </div>
      <div className="nav-search">
        <input type="text" placeholder="Search"/>
        <i className="fas fa-search nav"></i>
      </div>
      <div className="nav-user-actions">
        <NavLink className="actions-link" activeClassName="nav-upgrade" to="/upgrade">Upgrade</NavLink>  
        <NavLink className="actions-link" activeClassName="nav-active" to="/upload">Upload</NavLink>  
        {/* user may need img, could */}
        <NavLink className="actions-link" activeClassName="nav-active" to={`/${currentUser.username}`}>{currentUser.username}</NavLink> 
        <NavLink className="actions-link" activeClassName="nav-active" to="/notifications"><i className="fas fa-bell"></i></NavLink>  
        <NavLink className="actions-link" activeClassName="nav-active" to="/messages"><i className="fas fa-envelope"></i></NavLink>
        {/* fix dropdown later */}
        <ul className="dropdown">
          <li className="dropdown li"><button onClick={logout}><i className="fas fa-ellipsis-h"></i></button></li>
            <ul className="dropdown li ul">
              <li className="dropdown li ul li show">logouts</li>
            </ul>
        </ul>
      </div>
    </div>
  );

  // note: add functionality, if user clicks upload and not logged in display modal

  const authNav = () => (
    <nav className="auth-nav">
      <img className="auth-nav-banner" src="https://chillabit-pro.s3-us-west-1.amazonaws.com/splash_nav_banner.jpg"/>
      <div className="auth-nav-wrap">
        <div className="auth-nav-splash">
          <div className="auth-nav-splash-logo">
            <i className="fab fa-soundcloud splash"></i>
            <p className="auth-nav-splash-title">chillabit</p>
          </div>
          <div className="auth-nav-links">
            <ul className="auth-nav-links-ul">
                <li>{login}</li>
                <li>{signup}</li>
              <li><Link className="creator-button"to='/creator'>For Creators</Link></li>
            </ul>
          </div>
        </div>
        <div className="auth-nav-lead">
          <div className="auth-nav-lead-wrap">
            <h2 className="auth-nav-lead-title">What's next in lo-fi is first on chillabit</h2>
            <p className="auth-nav-lead-desc">Upload your first track and begin your journey. chillabit gives you space to create, find your fans, connect with other artists, and to chill a bit.</p>
            <div className="auth-nav-lead-upload"><Link to="/">Start uploading today</Link></div>
          </div>
        </div>
      </div>
    </nav>
  );
  
  return currentUser ? protectedNav() : authNav();
};

export default NavBar;