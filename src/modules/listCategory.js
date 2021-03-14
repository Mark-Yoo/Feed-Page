import {handleActions} from 'redux-actions';
import { getCategory } from '../lib/api';

const initialCategory = {
  categoryLoading: {
    GET_CATEGORY: false,
  },
  categoryList: null
}

const GET_NEW_CATEGORY = 'listCategory/GET_NEW_CATEGORY';
const GET_NEW_CATEGORY_SUCCESS = 'listCategory/GET_NEW_CATEGORY_SUCCESS';
const GET_NEW_CATEGORY_FAILURE = 'listCategory/GET_NEW_CATEGORY_FAILURE';

export const getNewCategory = () => async dispatch => {
  dispatch({type: GET_NEW_CATEGORY});
  try {
    const response = await getCategory();
    dispatch({
      type: GET_NEW_CATEGORY_SUCCESS,
      payload: response.data
    })
  } catch (e) {
    dispatch({
      type: GET_NEW_CATEGORY_FAILURE,
      payload: e,
      error: true
    })
    throw e;
  }
}

const categoryItem = handleActions(
  {
    [GET_NEW_CATEGORY]: (state => ({
      ...state,
      categoryLoading: {
        ...state.categoryLoading,
        GET_CATEGORY: true
      },
    })),
    [GET_NEW_CATEGORY_SUCCESS]: (state, action) => ({
      ...state,
      categoryLoading: {
        ...state.category,
        GET_CATEGORY: false
      },
      categoryList: action.payload
    }),
    [GET_NEW_CATEGORY_FAILURE]: (state, action) => ({
      ...state,
      categoryLoading: {
        ...state.categoryLoading,
        GET_CATEGORY: false
      }
    }),
  },
  initialCategory
)

export default categoryItem;