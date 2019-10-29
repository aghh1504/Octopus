import order from "../order";

const setOrderAction = {
  type: "SET_ORDER_SUCCESS",
  payload: {
    data: "OK"
  }
};

const decrementQuantityAction = {
  type: "DECREMENT_QUANTITY"
};
const incrementQuantityAction = {
  type: "INCREMENT_QUANTITY"
};

describe("Order Reducer", () => {
  it("should return correctly", () => {
    const result = order(undefined, setOrderAction);
    expect(result).toEqual({ quantity: 1, status: "OK" });
  });

  it("should return correct value for quantity when decrementQuantity", () => {
    const result = order(undefined, decrementQuantityAction);
    expect(result).toEqual({ quantity: 0, status: undefined });
  });

  it("should return correct value for quantity when incrementQuantity", () => {
    const result = order(undefined, incrementQuantityAction);
    expect(result).toEqual({ quantity: 2, status: undefined });
  });
});
