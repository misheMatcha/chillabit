import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import loginFormContainer from './session_form/login_form_container';
import signinFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>OwO</h1>
      <GreetingContainer />
    </header>

    <Route path="/login" component={loginFormContainer}/>
    <Route path="/signup" component={signinFormContainer}/>
  </div>
);

export default App;