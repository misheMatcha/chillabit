import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

// containers
import GreetingContainer from './greeting/greeting_container';
import loginFormContainer from './session_form/login_form_container';
import signinFormContainer from './session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    <header>
      <h1 className="app-title">chillabit</h1>
      <Route path="/" component={GreetingContainer}/>
      <Route path="/index" component={NavBarContainer}/>
    </header>

    <AuthRoute path="/login" component={loginFormContainer}/>
    <AuthRoute path="/signup" component={signinFormContainer}/>
  </div>
);

export default App;