import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props)
    // this.state = this.props.currentUser
  }



  render(){
    return (
      <div className="navBar-header-group">
        <Link to="/">Home</Link>
        <Link to="/stream">Stream</Link>
        <Link to="/library">Library</Link>
        <Link to="/upgrade">Upgrade</Link>
        <Link to="/upload">Upload</Link>
        <Link to={`/${this.props.currentUser.username}`}>{this.props.currentUser.username}</Link>
      </div>
    )
  }
};

export default NavBar;