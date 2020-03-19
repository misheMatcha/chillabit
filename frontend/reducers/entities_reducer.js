import { combineReducers } from 'redux';
import users from './users_reducer';
import albums from './albums_reducer';
import tracks from './tracks_reducier';

const entitiesReducer = combineReducers({
  users,
  albums,
  tracks
});

export default entitiesReducer;