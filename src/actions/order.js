import {
  SET_ORDER_SUCCESS,
  SET_ORDER_ERROR,
  POST_ORDER_REQUEST,
  ADD_ITEM_TO_ORDER,
  REMOVE_ITEM_FROM_ORDER
} from "./types";

export const setOrder = data => ({
  type: SET_ORDER_SUCCESS,
  payload: { data }
});

export const setOrderErrors = data => ({
  type: SET_ORDER_ERROR,
  payload: { data }
});

export const postOrders = data => ({
  type: POST_ORDER_REQUEST,
  payload: { data }
});

export const addItem = id => ({
  type: ADD_ITEM_TO_ORDER,
  payload: { data: id }
});

export const removeItem = id => ({
  type: REMOVE_ITEM_FROM_ORDER,
  payload: { data: id }
});
