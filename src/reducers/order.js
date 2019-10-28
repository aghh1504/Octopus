import {
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  SET_ORDER_SUCCESS
} from "../actions/types";

const initState = {
  status: undefined,
  quantity: 1
};

export default function OrderReducer(state = initState, action) {
  switch (action.type) {
    case SET_ORDER_SUCCESS: {
      return { ...state, status: action.payload.data };
    }

    case DECREMENT_QUANTITY: {
      const quantity = state.quantity-1
      return {
        ...state,
        quantity
      };
    }

    case INCREMENT_QUANTITY: {
      const quantity = state.quantity+1
      return {
        ...state,
        quantity
      };
    }

    default:
      return state;
  }
}
