import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import workout from './workout';

export default combineReducers({
  alert,
  auth,
  profile,
  workout
});
