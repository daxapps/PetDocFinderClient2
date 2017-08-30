import { API_BASE_URL } from "../config";

export const SHOW_ADD_SERVICE = "SHOW_ADD_SERVICE";
export const showAddServiceAction = (action, dispatch) => {
	dispatch({
		type: SHOW_ADD_SERVICE,
		payload: action
	});

	var vetHeaders = new Headers();

	return fetch(`${API_BASE_URL}/vets/vetlist/${action}`, {
		method: "GET",
		headers: vetHeaders
	})
		.then(res => {
			// console.log("RES: ", res.json());
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then((obj) => {
			console.log('OBJ: ', obj)
			dispatch(fetchServiceSuccess(obj));
		});
};

export const FETCH_SERVICE_SUCCESS = "FETCH_SERVICE_SUCCESS";
export const fetchServiceSuccess = (obj) => ({
	type: FETCH_SERVICE_SUCCESS,
	payload: obj.servicesRef
});

// const boundShowAddService = index => dispatch(showAddService(index))
