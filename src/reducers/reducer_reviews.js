import _ from "lodash";
import{ FETCH_REVIEWS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {

  	case FETCH_REVIEWS:
  		return _.mapKeys(action.payload.data, "id");

  	default:
      return state;

  }
}