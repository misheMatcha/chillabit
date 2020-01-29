import { connect } from 'react-redux';
import NavBar from './navbar';

const mSTP = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

export default connect(mSTP)(NavBar);