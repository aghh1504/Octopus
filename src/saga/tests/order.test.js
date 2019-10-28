import { put, takeLatest } from "redux-saga/effects";
import { postOrder, watchOrder } from "../order";

describe("postOrder", () => {
  it('should dispatch action "POST_ORDER_REQUEST" ', () => {
    const generator = watchOrder();
    expect(generator.next().value).toEqual(
      takeLatest("POST_ORDER_REQUEST", postOrder)
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "SET_ORDER_SUCCESS" with correct order status', () => {
    const mockResponse = { statusText: "OK", status: 200 };
    const action = {
      type: "POST_ORDER_REQUEST",
      payload: { data: { id: "1", quantity: 1 } }
    };
    const generator = postOrder(action);
    generator.next();
    expect(generator.next(mockResponse).value).toEqual(
      put({
        type: "SET_ORDER_SUCCESS",
        payload: {
          data: "OK"
        }
      })
    );
    expect(generator.next().done).toBeTruthy();
  });
});
