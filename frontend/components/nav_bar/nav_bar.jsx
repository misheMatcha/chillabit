import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({currentUser, logout, signup, login, upload}) => {
  const protectedNav = () => {
    const dropdown = document.getElementsByClassName("nav-dropdown")[0];
    const dropdownContent = document.getElementsByClassName("nav-dropdown-content")[0];
    return(
      <>
        <div className="pro-navbar-bg"/>
        <div className="pro-navbar">
          <div className="pro-navbar-main">
            <div className="pro-navbar-main-icon">
              <NavLink className="pro-navbar-main-icon-link" activeClassName="pro-navbar-main-icon-link-active" to="/discover"><i className="fab fa-soundcloud home"></i></NavLink>
            </div>
            <NavLink className="pro-navbar-main-icon-content" activeClassName="pro-navbar-main-icon-content-active" to="/discover">Home</NavLink>
            <NavLink className="pro-navbar-main-icon-content" activeClassName="pro-navbar-main-icon-content-active" to="/stream">Stream</NavLink>
            <NavLink className="pro-navbar-main-icon-content" activeClassName="pro-navbar-main-icon-content-active" to="/library">Library</NavLink>
          </div>

          <div className="pro-navbar-search">
            <input className="pro-navbar-search-input" type="text" placeholder="Search"/>
            <i className="fas fa-search nav"></i>
          </div>
          <div className="pro-navbar-misc">
            <NavLink className="pro-navbar-misc" activeClassName="pro-navbar-misc-upgrade" to="/upgrade">Upgrade</NavLink>
            <NavLink className="pro-navbar-misc" activeClassName="pro-navbar-main-icon-content-active" to="/upload">Upload</NavLink>
            <NavLink className="pro-navbar-misc" activeClassName="pro-navbar-main-icon-content-active" to={`/${currentUser.username}`}>{currentUser.username}</NavLink>
            <NavLink className="pro-navbar-misc" activeClassName="pro-navbar-main-icon-content-active" to="/notifications"><i className="fas fa-bell"></i></NavLink>
            <NavLink className="pro-navbar-misc" activeClassName="pro-navbar-main-icon-content-active" to="/messages"><i className="fas fa-envelope"></i></NavLink>
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
      </>
  )};

  const authNav = () => (
    <nav className="auth-navbar">
      <img className="auth-nav-banner" src="https://chillabit-pro.s3-us-west-1.amazonaws.com/splash_nav_banner.jpg"/>
      <div className="auth-navbar-content">
        <div className="auth-navbar-links">
          <div className="auth-navbar-links-logo">
            <i className="fab fa-soundcloud splash"></i>
            <p className="auth-navbar-links-title">chillabit</p>
          </div>
          <div className="auth-navbar-links-main">
            <ul className="auth-navbar-links-main-ul">
                <li>{login}</li>
                <li>{signup}</li>
              <li><Link className="creator-button"to='/creator'>For Creators</Link></li>
            </ul>
          </div>
        </div>
        <div className="auth-navbar-text">
          <div className="auth-navbar-text-details">
            <h2 className="auth-navbar-text-title">What's next in lo-fi is first on chillabit</h2>
            <p className="auth-navbar-text-desc">Upload your first track and begin your journey. chillabit gives you space to create, find your fans, connect with other artists, and to chill a bit.</p>
            {upload}
          </div>
        </div>
      </div>
    </nav>
  );

  return currentUser ? protectedNav() : authNav();
};

export default NavBar;