import {
  SET_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_REQUEST,
  SET_PRODUCTS_ERROR
} from "./types";

export const setProductsRequest = data => ({
  type: SET_PRODUCTS_REQUEST,
  payload: { data }
});

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST
});

export const setProductsErrors = data => ({
  type: SET_PRODUCTS_ERROR,
  payload: { data }
});
