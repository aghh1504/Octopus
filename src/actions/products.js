import { normalize, schema } from "normalizr";

import productsSchema from "../schema/products";

import {
  SET_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_REQUEST,
  SET_PRODUCTS_ERROR
} from "./types";

export const setProductsRequest = data => ({
  type: SET_PRODUCTS_REQUEST,
  payload: {
    data: normalize(data.data.products, new schema.Array(productsSchema))
  }
});

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST
});

export const setProductsErrors = data => ({
  type: SET_PRODUCTS_ERROR,
  payload: { data }
});
