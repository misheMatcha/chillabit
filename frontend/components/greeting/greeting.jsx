import React from 'react';
import { Link } from 'react-router-dom';

// Think about changing name for to be more explicit
const Greeting = ({currentUser, logout}) => {
  const loggedGreeting = () => (
      <div className="navbar-header">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
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

  const sessionLinks = () => (
    <nav className="login-signup">
      <i className="fab fa-soundcloud"></i>
      <span>chillabit</span>
      <div>
        <ul className="login-signup-links">
          <li className="login-button"><Link to='/login'>Sign in</Link></li>
          <li className="signup-button"><Link to='/signup'>Create account</Link></li>
          <li className="creator-button"><Link to='/creator'>For Creators</Link></li>
        </ul>
      </div>
    </nav>
  );
  
  return currentUser ? loggedGreeting() : sessionLinks();
};

export default Greeting;