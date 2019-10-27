import { Map } from "immutable";

import { OrderItemFactory } from "../models/order-item";
import {
  SET_ORDER_SUCCESS,
  ADD_ITEM_TO_ORDER,
  REMOVE_ITEM_FROM_ORDER
} from "../actions/types";

const initState = Map({});

export default function OrderReducer(state = initState, action) {
  switch (action.type) {
    case SET_ORDER_SUCCESS: {
      const {
        entities: { OrderItems = [] }
      } = action.payload.data;
      return Map(OrderItems).map(OrderItemFactory);
    }

    case ADD_ITEM_TO_ORDER: {
      const { id } = action.payload.data;
      return state.updateIn([id, "quantity"], quantity => quantity + 1);
    }

    case REMOVE_ITEM_FROM_ORDER: {
      const { id } = action.payload.data;
      const quantity = state.getIn([id, "quantity"]);

      if (quantity > 1) {
        return state.updateIn([id, "quantity"], qty => qty - 1);
      }

      return state.remove(id);
    }

    default:
      return state;
  }
}
