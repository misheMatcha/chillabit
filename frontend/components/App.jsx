import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectdRoute } from '../util/route_util';

// containers
import NavBarContainer from './nav_bar/nav_bar_container.jsx';
import loginFormContainer from './session_form/login_form_container';
import signinFormContainer from './session_form/signup_form_container';
import Discover from './discover/discover_container';
// import SplashPage from './splash_page/splash_page';
import SplashPageContainer from './splash_page/splash_page_container';
import Error404Page from './error_404_page';
import Modal from '../components/modal/modal';
import Upload from './upload/upload.jsx'
import TrackUpload from './track/track_upload_container';

const App = () => (
  <div className="app-container">
    <Modal />
    <header>
      <Route path="/" component={NavBarContainer}/>
    </header>
    
    <Switch>
      <ProtectdRoute exact to="/discover" component={TrackUpload}/>
      {/* <ProtectdRoute exact to="/stream" component={Discover}/>
      <ProtectdRoute exact to="/library" component={Discover}/>
      <ProtectdRoute exact to="/upgrade" component={Discover}/>
      <ProtectdRoute exact to="/upload" component={Upload}/> */}
      {/* need userpage link in future */}
      {/* <ProtectdRoute exact to="/messages" component={Discover}/>
      <ProtectdRoute exact to="/notifications" component={Discover}/> */}
    </Switch>
    {/* made an error page, implement later maybe */}
    <AuthRoute path="/" component={SplashPageContainer}/>
  </div>
);

export default App;