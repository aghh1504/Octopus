import { SET_ORDER_SUCCESS } from "../actions/types";

const initState = "";

export default function OrderReducer(state = initState, action) {
  switch (action.type) {
    case SET_ORDER_SUCCESS: {
      return action.payload.data;
    }

    default:
      return state;
  }
}
