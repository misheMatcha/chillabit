import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectdRoute } from '../util/route_util';

// containers
import GreetingContainer from './greeting/greeting_container';
import loginFormContainer from './session_form/login_form_container';
import signinFormContainer from './session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomeIndex from './home_index/home_index_container';

const App = () => (
  <div>
    <header>
      <Route path="/" component={GreetingContainer}/>
      {/* <ProtectdRoute path="/index" component={NavBarContainer}/> */}
    </header>

    {/* <AuthRoute path="/login" component={loginFormContainer}/>
    <AuthRoute path="/signup" component={signinFormContainer}/> */}
    <Switch>
      <ProtectdRoute path="/discover" component={HomeIndex}/>
      <ProtectdRoute path="/stream" component={HomeIndex}/>
      <ProtectdRoute path="/library" component={HomeIndex}/>
      <ProtectdRoute path="/uwucantfindme" component={HomeIndex}/>
      <ProtectdRoute path="/upgrade" component={HomeIndex}/>
      <ProtectdRoute path="/upload" component={HomeIndex}/>
      {/* <ProtectdRoute path="" component={HomeIndex}/> */}
      <ProtectdRoute path="/index" component={HomeIndex}/>
    </Switch>
  </div>
);

export default App;