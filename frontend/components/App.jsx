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
      <h1 className="app-title">
        <span>chillabit</span>
        </h1>
      <Route exact path="/" component={GreetingContainer}/>
      <ProtectdRoute path="/index" component={NavBarContainer}/>
    </header>

    <AuthRoute path="/login" component={loginFormContainer}/>
    <AuthRoute path="/signup" component={signinFormContainer}/>
    <ProtectdRoute path="/index" component={HomeIndex}/>
  </div>
);

export default App;