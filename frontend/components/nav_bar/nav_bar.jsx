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

  const authNav = () => (
    <nav className="login-signup">
      <div className="thebar">
        <div className="id-logo">
          <i className="fab fa-soundcloud splash"></i>
          <span>chillabit</span>
        </div>
        <div className="auth-nav">
          <ul className="login-signup-links">
              <li>{login}</li>
              <li>{signup}</li>
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