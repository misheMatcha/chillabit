import { connect } from 'react-redux';
import Discover from './discover';
import { requestAllAlbums, requestAlbum } from '../../actions/album_actions';
import { requestTrack } from '../../actions/track_actions';

const mSTP = state => ({
  allAlbums: Object.values(state.entities.albums)
});

const mDTP = dispatch => ({
  fetchAlbums: () => dispatch(requestAllAlbums()),
  fetchTrack: trackId => dispatch(requestTrack(trackId))
});

export default connect(mSTP, mDTP)(Discover)