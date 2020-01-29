import { connect } from 'react-redux';
import NavBar from './nav_bar';

const mSTP = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

export default connect(mSTP)(NavBar);