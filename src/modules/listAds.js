import { getAds } from '../lib/api';

const initialAds = getAds();

function listAds(state = initialAds, action) {
  switch(action.type) {
    case "GET_MORE_ADS":
      return {...state};
    default:
      return state;
  }
}

export default listAds;