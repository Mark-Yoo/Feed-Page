import { handleActions } from "redux-actions";
import { getView } from "../lib/api";

const initialView = {
  viewLoading: {
    GET_VIEW: false,
  },
  view: null,
};

const GET_DETAIL = "listDetail/GET_DETAIL";
const GET_DETAIL_SUCCESS = "listDetail/GET_DETAIL_SUCCESS";
const GET_DETAIL_FAILURE = "listDetail/GET_DETAIL_FAILURE";

export const getViews = (param) => async (dispatch) => {
  dispatch({ type: GET_DETAIL });
  try {
    const response = await getView(param);
    dispatch({
      type: GET_DETAIL_SUCCESS,
      param: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_DETAIL_FAILURE,
      param: e,
      error: true,
    });
    throw e;
  }
};

const listDetail = handleActions(
  {
    [GET_DETAIL]: (state) => ({
      ...state,
      viewLoading: {
        ...state.viewLoading,
        GET_VIEW: true,
      },
    }),
    [GET_DETAIL_SUCCESS]: (state, action) => ({
      ...state,
      viewLoading: {
        ...state.viewLoading,
        GET_VIEW: false,
      },
      view: action.param,
    }),
    [GET_DETAIL_FAILURE]: (state) => ({
      ...state,
      viewLoading: {
        ...state.viewLoading,
        GET_VIEW: false,
      },
    }),
  },
  initialView
);

export default listDetail;
