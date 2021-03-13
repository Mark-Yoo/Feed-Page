import { combineReducers } from 'redux';
import listItem from './listItem';
import listAds from './listAds';

const rootReducer = combineReducers({
  listItem,
  listAds
});

export default rootReducer;