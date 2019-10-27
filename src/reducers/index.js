import { combineReducers } from "redux-immutable";
import products from "./products";
import orderStatus from "./order";

const rootReducer = combineReducers({
  entities: combineReducers({
    products,
    order_status: orderStatus
  })
});

export default rootReducer;
