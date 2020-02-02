import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectdRoute } from '../util/route_util';

// containers
import NavBarContainer from './nav_bar/nav_bar_container';
import loginFormContainer from './session_form/login_form_container';
import signinFormContainer from './session_form/signup_form_container';
import Discover from './discover/discover_container';
import SplashPage from './splash_page/splash_page';
import Error404Page from './error_404_page';
import Modal from '../components/modal/modal';

const App = () => (
  <div>
    {/* <Modal /> look into after homepage */}
    <header>
      <Route path="/" component={NavBarContainer}/>
    </header>

    {/* adding routes back until modal is complete */}
    <AuthRoute path="/login" component={loginFormContainer}/>
    <AuthRoute path="/signup" component={signinFormContainer}/>
    
    <Switch>
      <ProtectdRoute exact to="/discover" component={Discover}/>
      <ProtectdRoute exact to="/stream" component={Discover}/>
      <ProtectdRoute exact to="/library" component={Discover}/>
      <ProtectdRoute exact to="/upgrade" component={Discover}/>
      <ProtectdRoute exact to="/upload" component={Discover}/>
      {/* need userpage link in future */}
      <ProtectdRoute exact to="/messages" component={Discover}/>
      <ProtectdRoute exact to="/notifications" component={Discover}/>
    </Switch>
    {/* made an error page, implement later maybe */}
    <AuthRoute path="/" component={SplashPage}/>
  </div>
);

export default App;