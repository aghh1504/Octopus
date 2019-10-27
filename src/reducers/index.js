import { combineReducers } from "redux-immutable";
import products from "./products";
import order from "./order";

const rootReducer = combineReducers({
  entities: combineReducers({
    products,
    order
  })
});

export default rootReducer;
