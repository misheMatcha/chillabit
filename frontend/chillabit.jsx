import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout, signup} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore()

  // Add back for testing - remove later
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.logout = logout;
    window.signup = signup;

  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store}/>, root)
});