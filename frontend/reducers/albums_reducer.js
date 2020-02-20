import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM } from '../actions/album_actions';

const albumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
      return Object.assign({}, oldState, action.albums)
    case RECEIVE_ALBUM:
      return Object.assign({}, oldState, {[action.album.id]: action.album})
    case REMOVE_ALBUM:
      const nextState = Object.assign({}, oldState)
      delete nextState[action.albumId]
    default:
      return oldState;
  }
};

export default albumsReducer;