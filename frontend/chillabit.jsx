import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout, signup} from './actions/session_actions';
import { requestAllAlbums, requestAlbum } from './actions/album_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root')
  let store = configureStore()

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser}
      },
      session: {id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  }

  ReactDOM.render(<Root store={store}/>, root)
});