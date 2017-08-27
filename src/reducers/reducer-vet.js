import { SHOW_ADD_SERVICE } from "../actions/vet";

const initialState = {
	showAddService: false
};

export default (state = initialState, action) => {
	console.log('ACTION: ', action)
	switch (action.type) {
		case SHOW_ADD_SERVICE:
			return {
				...state,
				payload: action.payload
			};
		default:
			return state;
	}
}