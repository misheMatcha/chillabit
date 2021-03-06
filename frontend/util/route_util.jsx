import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mSTP = state => ({
  loggedIn: Boolean(state.session.id)
});

const Auth = ({loggedIn, path, exact, component: Component}) => {
  return <Route
    path={path}
    exact={exact}
    render={props => (
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
};

const Protected = ({loggedIn, path, exact, component: Component}) => {
  return <Route
    path={path}
    exact={exact}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    )}
  />
};

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectdRoute = withRouter(connect(mSTP)(Protected));