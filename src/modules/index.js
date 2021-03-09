import { combineReducers } from 'redux';
import characterList from './characterList';

const rootReducer = combineReducers({
  characterList,
});

export default rootReducer;
