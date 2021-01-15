import { combineReducers } from "redux";

import UserReducer from "../redux/user/user.reducer";

export default combineReducers({
  user: UserReducer,
});
