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

export const DELETE_SERVICE = "DELETE_SERVICE";
export const deleteService = (vetId, dispatch) => {
	return fetch(`${API_BASE_URL}/vets/${vetId}/services`, {
		method: "DELETE"
	})
}

