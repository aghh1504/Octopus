import { put, takeLatest } from "redux-saga/effects";
import { fetchProducts, watchProducts } from "../products";

describe("fetchProducts", () => {
  it('should dispatch action "FETCH_PRODUCTS_REQUEST" ', () => {
    const generator = watchProducts();
    expect(generator.next().value).toEqual(
      takeLatest("FETCH_PRODUCTS_REQUEST", fetchProducts)
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "SET_PRODUCTS_REQUEST" with result from fetch products', () => {
    const mockResponse = { data: { products: [{ id: "1", title: "bulb" }] } };
    const generator = fetchProducts();
    generator.next();
    expect(generator.next(mockResponse).value).toEqual(
      put({
        type: "SET_PRODUCTS_REQUEST",
        payload: {
          data: {
            entities: {
              products: {
                "1": {
                  id: "1",
                  title: "bulb"
                }
              }
            },
            result: ["1"]
          }
        }
      })
    );
    expect(generator.next().done).toBeTruthy();
  });
});
