import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectdRoute } from '../util/route_util';

// Components
import NavBarContainer from './nav_bar/nav_bar_container.jsx';
import Discover from './discover/discover_container';
import SplashPageContainer from './splash_page/splash_page_container';
import Modal from '../components/modal/modal';
import TrackUpload from './track/track_upload_container';

const App = () => (
  <div className="app-container">
    <Modal />
    <Route path="/" component={NavBarContainer}/>
    <Switch>
      <ProtectdRoute exact path="/" component={Discover}/>
      <ProtectdRoute exact path="/discover" component={Discover}/>
      <ProtectdRoute exact path="/upload" component={TrackUpload}/>
    </Switch>
    <AuthRoute path="/" component={SplashPageContainer}/>
  </div>
);

export default App;