// import { ADD_SERVICE } from "../actions/services";
import { ADD_SERVICE } from "../actions/services";
import { FETCH_SERVICE_SUCCESS } from "../actions/vet";

const initialState = {
	services: [
		{
			service: "Boarding",
			price: "$20.00"
		}
	]
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_SERVICE:
			return Object.assign({}, state, {
				services: [
					...state.services,
					{
						service: action.service,
						price: action.price
					}
				]
			});

		case FETCH_SERVICE_SUCCESS:
			return Object.assign({}, state, {
				services: action.payload
			});

		// switch (action.type) {
		// 	case EDIT_SERVICE:
		// }

		// switch (action.type) {
		// 	case DELETE_SERVICE:
		// }

		default:
			return state;
	}
}
