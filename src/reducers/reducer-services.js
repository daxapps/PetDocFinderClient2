import { ADD_SERVICE } from "../actions/services";

const initialState = {
	services: [{
			service: "Boarding",
			price: "$20.00"
		},
		{
			service: "Shampoo",
			price: "$20.00"
		},
		{
			service: "Vaccines",
			price: "$40.00"
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

	// switch (action.type) {
	// 	case FETCH_SERVICE:
	// 		return Object.assign({}, state, {
	// 			services: [
	// 				...state.services,
	// 				{
	// 					service: action.service,
	// 					price: action.price
	// 				}
	// 			]
	// 		});

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
