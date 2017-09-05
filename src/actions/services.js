import { API_BASE_URL } from "../config";

export const ADD_SERVICE = "ADD_SERVICE";
export const addService = (service, price, vetId, dispatch) => {
	var d = { service, price, vetId };
	d = JSON.stringify(d);
	console.log("D: ", d);
	return fetch(`${API_BASE_URL}/vets/${vetId}/services`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: d
	})
		.then(res => res.json())
		.then(obj => {
			console.log("OBJ2: ", obj.servicesRef);
			dispatch(fetchAddServiceSuccess(obj));
		});
};

export const fetchAddServiceSuccess = obj => ({
	type: ADD_SERVICE,
	payload: obj
});

export const EDIT_SERVICE = "EDIT_SERVICE";
export const editService = (service, price, serviceId, dispatch) => {
	var d = { service, price };
	d = JSON.stringify(d);
	console.log("D2: ", d);
	return fetch(`${API_BASE_URL}/vets/${serviceId}/services`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: d
	})
		.then(res => res.json())
		.then(obj => {
			console.log("OBJ3: ", obj);
			dispatch(fetchEditServiceSuccess(obj));
		});
};

export const fetchEditServiceSuccess = obj =>({
	type: EDIT_SERVICE,
	payload: obj
});

export const DELETE_SERVICE = "DELETE_SERVICE";
export const deleteService = (serviceId, dispatch) => {
	// need headers & body???
	console.log('SERVICEID: ', serviceId)
	return fetch(`${API_BASE_URL}/vets/${serviceId}/services`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json"
		}
	}).then(() => {
		dispatch({
			type: DELETE_SERVICE,
			payload: serviceId
		});
	});
};
