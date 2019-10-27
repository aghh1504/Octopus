import order from "../order";

const setOrderAction = {
  type: "SET_ORDER_SUCCESS",
  payload: {
    data: "OK"
  }
};

describe("Order Status Reducer", () => {
  it("should return correctly", () => {
    const result = order(undefined, setOrderAction);
    expect(result).toEqual("OK");
  });
});
