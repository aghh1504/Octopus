import { all } from "redux-saga/effects";
import { watchProducts } from "./products";
import { watchOrder } from "./order";

export default function* rootSaga() {
  yield all([watchProducts(), watchOrder()]);
}
