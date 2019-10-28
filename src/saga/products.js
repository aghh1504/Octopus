import { put, takeLatest, call } from "redux-saga/effects";
import { get } from "./api";
import { BASE_URL } from "../config";

import { setProductsRequest, setProductsErrors } from "../actions/products";
import { FETCH_PRODUCTS_REQUEST } from "../actions/types";

export function* fetchProducts() {
  try {
    const response = yield call(get, `${BASE_URL}products`);
    yield put(setProductsRequest(response.data.products));
  } catch (e) {
    console.log(e);
    yield put(setProductsErrors(e.error));
  }
}

export function* watchProducts() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProducts);
}
