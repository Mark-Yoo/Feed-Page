import { combineReducers } from 'redux';
import listItem from './listItem';
import listAds from './listAds';
import categoryItem from './listCategory';

const rootReducer = combineReducers({
  listItem,
  listAds,
  categoryItem
});

export default rootReducer;