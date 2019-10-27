import {
  SET_ORDER_SUCCESS,
  SET_ORDER_ERROR,
  POST_ORDER_REQUEST
} from "./types";

export const setOrder = data => ({
  type: SET_ORDER_SUCCESS,
  payload: { data }
});

export const setOrderErrors = data => ({
  type: SET_ORDER_ERROR,
  payload: { data }
});

export const postOrder = data => ({
  type: POST_ORDER_REQUEST,
  payload: {
    data
  }
});
