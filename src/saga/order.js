import { put, takeLatest, call } from "redux-saga/effects";
import { post } from "./api";
import { POST_ORDER_REQUEST } from "../actions/types";
import { setOrder, setOrderErrors } from "../actions/order";
import { BASE_URL } from "../config";

export function* postOrder(action) {
  try {
    const orders = yield call(
      post,
      `${BASE_URL}products/addProduct`,
      action.payload
    );
    yield put(setOrder(orders));
  } catch (e) {
    yield put(setOrderErrors(e.errors));
  }
}

export function* watchOrder() {
  yield takeLatest(POST_ORDER_REQUEST, postOrder);
}
