import { connect } from 'react-redux';
import Discover from './discover';
import { requestAllAlbums, requestAlbum } from '../../actions/album_actions';

const mSTP = state => ({
  allAlbums: Object.values(state.entities.albums)
});

const mDTP = dispatch => ({
  fetchAlbums: () => dispatch(requestAllAlbums())
});

export default connect(mSTP, mDTP)(Discover)