import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({currentUser, logout, signup, login, upload}) => {
  const protectedNav = () => {
    const dropdown = document.getElementsByClassName("nav-dropdown")[0];
    const dropdownContent = document.getElementsByClassName("nav-dropdown-content")[0];
    return(
      <div className="protected-nav">
        <div className="protected-nav-content">
          <div className="protected-nav-content-icon">
            <NavLink className="protected-nav-content-icon-link" activeClassName="protected-nav-content-icon-link-active" to="/discover"><i className="fab fa-soundcloud home"></i></NavLink>
          </div>
          <NavLink className="protected-nav-content-link" activeClassName="protected-nav-content-link-active" to="/discover">Home</NavLink>
          <NavLink className="protected-nav-content-link" activeClassName="protected-nav-content-link-active" to="/stream">Stream</NavLink>
          <NavLink className="protected-nav-content-link" activeClassName="protected-nav-content-link-active" to="/library">Library</NavLink>
        </div>
        <div className="protected-nav-search">
          <input className="protected-nav-search-input" type="text" placeholder="Search"/>
          <i className="fas fa-search nav"></i>
        </div>
        <div className="protected-nav-user-content">
          <NavLink className="protected-nav-user-content-link" activeClassName="protected-nav-user-content-link-upgrade" to="/upgrade">Upgrade</NavLink>
          <NavLink className="protected-nav-user-content-link" activeClassName="protected-nav-content-link-active" to="/upload">Upload</NavLink>
          <NavLink className="protected-nav-user-content-link" activeClassName="protected-nav-content-link-active" to={`/${currentUser.username}`}>{currentUser.username}</NavLink>
          <NavLink className="protected-nav-user-content-link" activeClassName="protected-nav-content-link-active" to="/notifications"><i className="fas fa-bell"></i></NavLink>
          <NavLink className="protected-nav-user-content-link" activeClassName="protected-nav-content-link-active" to="/messages"><i className="fas fa-envelope"></i></NavLink>
          <div className="nav-dropdown" onClick={() => {
            const drpdwn = dropdown.className === "nav-dropdown";
            if(drpdwn){
              dropdown.className = "nav-dropdown-block";
              dropdownContent.className = "nav-dropdown-content-block";
            }else{
              dropdown.className = "nav-dropdown";
              dropdownContent.className = "nav-dropdown-content";
            }
          }}>
            <i className="fas fa-ellipsis-h"></i>
            <ul className="nav-dropdown-content">
              <li className="nav-dropdown-li" onClick={logout}>logout</li>
            </ul>
          </div>
        </div>
      </div>
  )};

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
            {upload}
          </div>
        </div>
      </div>
    </nav>
  );

  return currentUser ? protectedNav() : authNav();
};

export default NavBar;