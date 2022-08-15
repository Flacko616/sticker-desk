import { combineReducers } from 'redux';
import userInfoReducer from './auth/reducers';
// import usersReducer from './users/reducer';

const rootReducer = combineReducers({
  auth: userInfoReducer,
//   users: usersReducer,
});

export default rootReducer;
