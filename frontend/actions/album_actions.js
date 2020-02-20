import * as AlbumUtil from '../util/album_util';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';

const receiveAllAlbums = albums => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

const removeAlbum = albumId => ({
  type: REMOVE_ALBUM,
  albumId
});

export const requestAllAlbums = () => dispatch => AlbumUtil.fetchAllAlbums()
  .then(albums => dispatch(receiveAllAlbums(albums)))

export const requestAlbum = albumId => dispatch => AlbumUtil.fetchAlbum(albumId)
  .then(album => dispatch(receiveAlbum(album)))

export const createAlbum = album => dispatch => AlbumUtil.createAlbum(album)
  .then(newAlbum => dispatch(receiveAlbum(newAlbum)))

export const updateAlbum = album => dispatch => AlbumUtil.updateAlbum(album)
  .then(modifiedAlbum => dispatch(receiveAlbum(modifiedAlbum)))

export const deleteAlbum = albumId => dispatch => AlbumUtil.removeAlbum(albumId)
  .then(() => dispatch(removeAlbum()))