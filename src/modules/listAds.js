import { handleActions } from 'redux-actions';
import { getAds } from '../lib/api';

const initialAds = {
  adsLoading: {
    GET_ADS: false,
  },
  totalAds: [],
  ads: null,
};

const GET_MORE_ADS = 'listAds/GET_MORE_ADS';
const GET_MORE_ADS_SUCCESS = 'listAds/GET_MORE_ADS_SUCCESS';
const GET_MORE_ADS_FAILURE = 'listAds/GET_MORE_ADS_FAILURE';

export const getMoreAds = (payload) => async dispatch => {
  dispatch({type: GET_MORE_ADS});
  try {
    const response = await getAds(payload);
    dispatch({
      type: GET_MORE_ADS_SUCCESS,
      payload: response.data
    });
  } catch (e) {
    dispatch({
      type: GET_MORE_ADS_FAILURE,
      payload: e,
      error: true
    })
    throw e;
  }
}

const listAds = handleActions(
  {
    [GET_MORE_ADS]: state => ({
      ...state, 
      adsLoading: {
        ...state.adsLoading,
        GET_ADS: true
      }
    }),
    [GET_MORE_ADS_SUCCESS]: (state, action) => ({
      ...state,
      adsLoading: {
        ...state.adsLoading,
        GET_ADS: false
      },
      totalAds: [...state.totalAds, ...action.payload.data],
      ads: action.payload
    }),
    [GET_MORE_ADS_FAILURE]: (state) => ({
      ...state,
      adsLoading: {
        ...state.adsLoading,
        GET_ADS: false
      }
    })
  },
  initialAds
)

export default listAds;