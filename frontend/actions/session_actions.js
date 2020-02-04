import * as SessionApi from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const signup = user => dispatch => SessionApi.signup(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)), errors => dispatch(receiveErrors(errors.responseJSON)));

export const login = user => dispatch => SessionApi.login(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)), errors => dispatch(receiveErrors(errors.responseJSON)));

export const logout = () => dispatch => SessionApi.logout()
  .then(() => dispatch(logoutCurrentUser()), errors => dispatch(receiveErrors(errors.responseJSON)));