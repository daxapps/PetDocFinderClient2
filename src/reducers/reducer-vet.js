import { SHOW_ADD_SERVICE, GOOGLE_MAPS } from "../actions/vet";

const initialState = {
	showAddService: false,
	googleDataId: "XXX"
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SHOW_ADD_SERVICE:
			// console.log("CHANGING:");
			return {
				...state,
				showAddService: action.payload._id,
				googleDataId: action.payload.googleDataId
			};

		case GOOGLE_MAPS:
			return {
				...state,
				googleMaps: action.payload
			};

		default:
			return state;
	}
};
