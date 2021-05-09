import { handleActions } from "redux-actions";
import { getList } from "../lib/api";

const initialList = {
  listLoading: {
    GET_LIST: false,
    CHANGE_CATID: false,
    CHANGE_ALIGN: false,
    EMPTY_LIST: false,
  },
  totalArray: [],
  list: null,
  params: { page: 1, ord: "asc", category: ["1", "2", "3"], limit: 10 },
};

const GET_MORE_LIST = "listItem/GET_MORE_LIST";
const GET_MORE_LIST_SUCCESS = "listItem/GET_MORE_LIST_SUCCESS";
const GET_MORE_LIST_FAILURE = "listItem/GET_MORE_LIST_FAILURE";
const CHANGE_CATEGORY = "listItem/CHANGE_CATEGORY";
const CHANGE_CATEGORY_SUCCESS = "listItem/CHANGE_CATEGORY_SUCCESS";
const CHANGE_CATEGORY_FAILURE = "listItem/CHANGE_CATEGORY_FAILURE";
const CHANGE_ORDER = "listItem/CHANGE_ORDER";
const CHANGE_ORDER_SUCCESS = "listItem/CHANGE_ORDER_SUCCESS";
const CHANGE_ORDER_FAILURE = "listItem/CHANGE_ORDER_FAILURE";
const EMPTY_ARRAY = "listItem/EMPTY_ARRAY";
const EMPTY_ARRAY_SUCCESS = "listItem/EMPTY_ARRAY_SUCCESS";
const EMPTY_ARRAY_FAILURE = "listItem/EMPTY_ARRAY_FAILURE";

export const getMoreList = (payload) => async (dispatch) => {
  dispatch({ type: GET_MORE_LIST });
  try {
    const response = await getList(payload);
    dispatch({
      type: GET_MORE_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_MORE_LIST_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

export const changeCategory = (category) => (dispatch) => {
  dispatch({ type: CHANGE_CATEGORY });
  try {
    dispatch({
      type: CHANGE_CATEGORY_SUCCESS,
      category: category,
    });
  } catch (e) {
    dispatch({
      type: CHANGE_CATEGORY_FAILURE,
      category: e,
      error: true,
    });
    throw e;
  }
};

export const changeOrder = (ord) => async (dispatch) => {
  dispatch({ type: CHANGE_ORDER });
  try {
    dispatch({
      type: CHANGE_ORDER_SUCCESS,
      ord: ord,
    });
  } catch (e) {
    dispatch({
      type: CHANGE_CATEGORY_FAILURE,
      ord: e,
      error: true,
    });
    throw e;
  }
};

export const emptyArray = () => async (dispatch) => {
  dispatch({ type: EMPTY_ARRAY });
  try {
    dispatch({
      type: EMPTY_ARRAY_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: EMPTY_ARRAY_FAILURE,
      error: true,
    });
    throw e;
  }
};

const listItem = handleActions(
  {
    [GET_MORE_LIST]: (state) => ({
      ...state,
      listLoading: {
        ...state.listLoading,
        GET_LIST: true,
      },
    }),
    [GET_MORE_LIST_SUCCESS]: (state, action) => ({
      ...state,
      listLoading: {
        ...state.listLoading,
        GET_LIST: false,
      },
      totalArray: [...state.totalArray, ...action.payload.data],
      list: action.payload,
    }),
    [GET_MORE_LIST_FAILURE]: (state) => ({
      ...state,
      listLoading: {
        ...state.listLoading,
        GET_LIST: false,
      },
    }),
    [CHANGE_CATEGORY]: (state) => ({
      ...state,
      listLoading: {
        ...state.listLoading,
        CHANGE_CATID: true,
      },
    }),
    [CHANGE_CATEGORY_SUCCESS]: (state, action) => ({
      ...state,
      listLoading: {
        ...state.listLoading,
        CHANGE_CATID: false,
      },
      params: { ...state.params, category: action.category },
    }),
    [CHANGE_CATEGORY_FAILURE]: (state) => ({
      ...state,
      listLoading: {
        ...state.listLoading,
        CHANGE_CATID: false,
      },
    }),
    [CHANGE_ORDER]: (state) => ({
      ...state,
      listLoading: {
        ...state.listLoading,
        CHANGE_ALIGN: true,
      },
    }),
    [CHANGE_ORDER_SUCCESS]: (state, action) => ({
      ...state,
      listLoading: {
        ...state.listLoading,
        CHANGE_ALIGN: false,
      },
      params: { ...state.params, ord: action.ord },
    }),
    [CHANGE_ORDER_FAILURE]: (state) => ({
      ...state,
      listLoading: {
        ...state.listLoading,
        CHANGE_ALIGN: false,
      },
    }),
    [EMPTY_ARRAY]: (state) => ({
      ...state,
      listLoading: {
        ...state.listLoading,
        EMPTY_LIST: true,
      },
    }),
    [EMPTY_ARRAY_SUCCESS]: (state) => ({
      ...state,
      listLoading: {
        ...state.listLoading,
        EMPTY_LIST: false,
      },
      totalArray: [],
    }),
    [EMPTY_ARRAY_FAILURE]: (state) => ({
      ...state,
      listLoading: {
        ...state.listLoading,
        EMPTY_LIST: false,
      },
    }),
  },
  initialList
);

export default listItem;
