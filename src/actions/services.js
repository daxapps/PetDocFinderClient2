// import axios from "axios";
import { API_BASE_URL } from "../config";
// import { VET_ID } from ".../public/mapapi";

// export const ADD_SERVICE = "ADD_SERVICE";
// export const addService = (service, price) => ({
// 	type: ADD_SERVICE,
// 	service,
// 	price
// });

export const addService = (service, price, vetId) => dispatch => {
	// var vetId = document.querySelectorAll('.vet .services')[0].getAttribute('data-id')
	var d = {service, price, vetId}
	d = JSON.stringify(d)
	console.log('D: ', d)
	return fetch(`${API_BASE_URL}/vets/${vetId}/services`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: d
	}).then(res => res.json());
};

// export const FETCH_SERVICE_SUCCESS = 'FETCH_SERVICE_SUCCESS';
// export const fetchServiceSuccess = (service, price) => ({
// 	type: FETCH_SERVICE_SUCCESS,
// 	service,
// 	price
// });

// export const fetchService = (service, price) => dispatch => {
// 	var vetId = document.querySelectorAll('.vet .services')[0].getAttribute('vetId')
// 	var d = {service, price}
// 	d = JSON.stringify(d)
// 	return fetch(`${API_BASE_URL}/vets/vetlist/${id}`, {
// 		method: "GET",
// 		headers: {
// 			"Content-Type": "application/json"
// 		},
// 		body: d

// 	})
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
