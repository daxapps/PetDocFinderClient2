import { SHOW_ADD_SERVICE } from "../actions/vet";

const initialState = {
	showAddService: false
	// data: false
	// addServiceBtn: false
};

export default (state = initialState, action) => {
	// console.log('ACTION: ', action.addServiceBtn)
	switch (action.type) {
		case SHOW_ADD_SERVICE:
		console.log('CHANGING:')
			return { 
				...state, 
				showAddService: !state.showAddService 
			}

		default:
			return state;
	}
}