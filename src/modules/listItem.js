import { handleActions } from 'redux-actions';
import { getList } from "../lib/api";

const initialList = {
  loading: {
    GET_LIST: false
  },
  list: null
}

const GET_MORE_LIST = "listItem/GET_MORE_LIST";
const GET_MORE_LIST_SUCCESS = "listItem/GET_MORE_LIST_SUCCESS";
const GET_MORE_LIST_FAILURE = "listItem/GET_MORE_LIST_FAILURE";


export const getMoreList = (payload) => async dispatch => {
  dispatch({type: GET_MORE_LIST});
  try {
    const response = await getList(payload);
    dispatch({
      type: GET_MORE_LIST_SUCCESS,
      payload: response.data
    });
  } catch (e) {
    dispatch({
      type: GET_MORE_LIST_FAILURE,
      payload: e,
      error: true
    });
    throw e;
  }
}

const listItem = handleActions(
  {
    [GET_MORE_LIST]: state => ({
      ...state,
      loading: {
        ...state.loading,
        GET_LIST: true
      }
    }),
    [GET_MORE_LIST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_LIST: false
      },
      list: action.payload
    }),
    [GET_MORE_LIST_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_LIST: false
      }
    }),
  },
  initialList
)


export default listItem;