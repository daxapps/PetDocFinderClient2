import { combineReducers } from "redux";
// import { reducer as formReducer } from "redux-form";
import ReviewsReducer from "./reducer_reviews";

const rootReducer = combineReducers({
  reviews: ReviewsReducer,
  // form: formReducer
});

export default rootReducer;