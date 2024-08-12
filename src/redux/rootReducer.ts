import {combineReducers} from 'redux';
// slices
import userReducer from './slices/userReducer';

// ----------------------------------------------------------------------

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
