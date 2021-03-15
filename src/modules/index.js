import { combineReducers } from 'redux';
import listItem from './listItem';
import listAds from './listAds';
import listDetail from './listDetail';
import categoryItem from './listCategory';

const rootReducer = combineReducers({
  listItem,
  listAds,
  listDetail,
  categoryItem
});

export default rootReducer;