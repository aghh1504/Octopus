import { Map } from "immutable";

import { productFactory } from "../models/products";
import { SET_PRODUCTS_REQUEST } from "../actions/types";

const initState = Map();

export default function products(state = initState, action) {
  switch (action.type) {
    case SET_PRODUCTS_REQUEST: {
      const { products } = action.payload.data;
      const mappedProduct = products.reduce((accumulator, product) => {
        accumulator[product.id] = productFactory(product);
        return accumulator;
      }, {});
      return Map(mappedProduct);
    }

    default:
      return state;
  }
}
