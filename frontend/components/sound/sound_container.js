import { connect } from 'react-redux';
import Sound from './sound.jsx';

const mSTP = state => ({
  src: ownProps.trackSource
});

const mDTP = dispatch => ({});

export default connect(mSTP, mDTP)(Sound);