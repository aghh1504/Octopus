import { Map } from "immutable";

import { productFactory } from "../models/products";
import { SET_PRODUCTS_REQUEST } from "../actions/types";

const initState = Map();

export default function products(state = initState, action) {
  switch (action.type) {
    case SET_PRODUCTS_REQUEST: {
      const { products } = action.payload.data;
      return products.map(product => productFactory(product));
    }

    default:
      return state;
  }
}
