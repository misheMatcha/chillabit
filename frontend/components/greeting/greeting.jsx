import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const loggedGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">What's up home-skillet biscuit {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Login</Link>
    </nav>
  );
  
  return currentUser ? loggedGreeting() : sessionLinks();
};

export default Greeting;