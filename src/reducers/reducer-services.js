import { ADD_SERVICE, EDIT_SERVICE, DELETE_SERVICE } from "../actions/services";
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
			console.log("ACTION: ", action);
			return Object.assign({}, state, {
				services: [
					...state.services,
					{
						service: action.payload.service,
						price: action.payload.price
					}
				]
			});

		case FETCH_SERVICE_SUCCESS:
			return Object.assign({}, state, {
				services: action.payload
			});

		case EDIT_SERVICE:
			const servicesMap = state.services.map(item => {
				if (item._id === action.payload._id) {
					item.service = action.payload.service;
					item.price = action.payload.price;
				} 
				return item
			});
			return servicesMap;

		case DELETE_SERVICE:
			const servicesFiltered = state.services.filter(itm => {
				return itm !== action.payload;
			});
			return Object.assign({}, state, {
				services: servicesFiltered
			});

		default:
			return state;
	}
}
