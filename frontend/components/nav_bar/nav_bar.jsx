import React from 'react';
import { Link } from 'react-router-dom';

// Think about changing name for to be more explicit
const NavBar = ({currentUser, logout}) => {
  const protectedNav = () => (
    // <div className="logged-in-nav">
    //   homie page
    // </div>
      <div className="navbar-header">
        <ul className="navbar-links">
          <li><Link to="/index"><i className="fab fa-soundcloud"></i></Link></li>
          <li><Link to="/discover">Home</Link></li>
          <li><Link to="/stream">Stream</Link></li>
          <li><Link to="/library">Library</Link></li>
          <li><Link to="/uwucantfindme">Search Bar Placeholder</Link></li>
          <li><Link to="/upgrade">Upgrade</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to={`/${currentUser.username}`}>{currentUser.username}</Link></li>
          <li><button className="greeting-button" onClick={logout}>Log Out</button></li>
        </ul>
      </div>
  );

  const authNav = () => (
    <nav className="login-signup">
      <div className="thebar">
        <div className="id-logo">
          <i id="ico" className="fab fa-soundcloud"></i>
          <span>chillabit</span>
        </div>
        <div className="auth-nav">
          <ul className="login-signup-links">
            <li><Link className="login-button" to='/login'>Sign in</Link></li>
            <li><Link className="signup-button" to='/signup'>Create account</Link></li>
            <li><Link className="creator-button"to='/creator'>For Creators</Link></li>
          </ul>
        </div>
      </div>
      <div className="lead-box">
        <div className="lead">
          <h2>What's next in lo-fi is first on chillabit</h2>
          <p>Upload your first track and begin your journey. chillabit gives you space to create, find your fans, connect with other artists, and to chill a bit.</p>
          <div className="lead-div"><Link to="/">Start uploading today</Link></div>
        </div>
      </div>
    </nav>
  );
  
  return currentUser ? protectedNav() : authNav();
};

export default NavBar;