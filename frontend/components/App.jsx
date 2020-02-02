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
    <Modal />
    <header>
      <Route path="/" component={NavBarContainer}/>
    </header>

    {/* adding routes back until modal is complete */}
    <AuthRoute path="/login" component={loginFormContainer}/>
    <AuthRoute path="/signup" component={signinFormContainer}/>
    
    <Switch>
      <Route exact path="/404" component={Error404Page} />
      <AuthRoute path="/" component={SplashPage}/>
      <ProtectdRoute path="/stream" component={Discover}/>
      <ProtectdRoute path="/library" component={Discover}/>
      <ProtectdRoute path="/uwucantfindme" component={Discover}/>
      <ProtectdRoute path="/upgrade" component={Discover}/>
      <ProtectdRoute path="/upload" component={Discover}/>
      <ProtectdRoute path="/discover" component={Discover}/>
      {/* <ProtectdRoute path="" component={Discover}/> */}
      {/* <ProtectdRoute path="/index" component={Discover}/> */}
    </Switch>
  </div>
);

export default App;