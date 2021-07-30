import { combineReducers } from "redux";

import UserReducer from "../redux/user/user.reducer";
import CartReducer from "../redux/cart/cart.reducer";

export default combineReducers({
  user: UserReducer,
  cart: CartReducer,
});
