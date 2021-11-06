import { combineReducers } from "redux";
import listReducer from "./listReducer";
import reviewReducer from "./reviewReducer";

export default combineReducers({
  list: listReducer,
  review: reviewReducer,
});
