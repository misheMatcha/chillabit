import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

// continue later
// dropping another scaling note
const NavBar = ({currentUser, logout, signup, login}) => {
  const protectedNav = () => (
    <div className="protected-nav">
      <div className="icon">
        <Link to="/"><i className="fab fa-soundcloud home"></i></Link>
      </div>
      <div className="nav-content">
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
        <button onClick={logout}>Sign out</button>  
      </div>
    </div>
  );

  const authNav = () => (
    <nav className="login-signup">
      <div className="thebar">
        <div className="id-logo">
          <i className="fab fa-soundcloud"></i>
          <span>chillabit</span>
        </div>
        <div className="auth-nav">
          <ul className="login-signup-links">
            {/* <li><button className="login-button" onClick={() => signup}>Login</button></li> */}
              <li>{login}</li>
              <li>{signup}</li>
            {/* <li><Link className="login-button" to='/login'>Sign in</Link></li>
            <li><Link className="signup-button" to='/signup'>Create account</Link></li> */}
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