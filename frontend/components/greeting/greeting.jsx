import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  // Need to refactor like session links
  const loggedGreeting = () => (
    <hgroup className="greeting-group">
      <h2 className="greeting-name">What's up home-skillet biscuit {currentUser.username}!</h2>
      <button className="greeting-button" onClick={logout}>Log Out</button>
    </hgroup>
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