import {
  SET_ORDER_SUCCESS,
  SET_ORDER_ERROR,
  POST_ORDER_REQUEST,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY
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

export const incrementQuantity = () => ({ type: INCREMENT_QUANTITY });
export const decrementQuantity = () => ({ type: DECREMENT_QUANTITY });
