// import axios from "axios";
import { API_BASE_URL } from "../config";

// export const ADD_SERVICE = "ADD_SERVICE";
// export const addService = (service, price) => ({
// 	type: ADD_SERVICE,
// 	service,
// 	price
// });

// How to populate :id with ???
export const addService = (service, price) => dispatch => {
	return fetch(`${API_BASE_URL}/vets/598eeecec7367abacc1a3ea1/services`, {
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		data: JSON.stringify(service)
	}).then(res => res.json());
};

// export const FETCH_SERVICE_SUCCESS = 'FETCH_SERVICE_SUCCESS';
// export const fetchServiceSuccess = (service, price) => ({
// 	type: FETCH_SERVICE_SUCCESS,
// 	service,
// 	price
// });

// export const fetchService = () => dispatch => {
// 	fetch(`${API_BASE_URL}/vets/vetlist/:id`)
// 		.then(res => {
// 			if (!res.ok) {
// 				return Promise.reject(res.statusText);
// 			}
// 			return res.json();
// 		})
// 		.then((service, price) => {
// 			dispatch(fetchServiceSuccess(service, price));
// 		});
// };
