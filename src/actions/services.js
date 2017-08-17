// import axios from "axios";
// import {API_BASE_URL} from '../config';

export const ADD_SERVICE = "ADD_SERVICE";
export const addService = (service, price) => ({
	type: ADD_SERVICE,
	service,
	price
});



// export const FETCH_SERVICE_SUCCESS = 'FETCH_SERVICE_SUCCESS';
// export const fetchServiceSuccess = (service, price) => ({
// 	type: FETCH_SERVICE_SUCCESS,
// 	service,
// 	price
// });

// export const fetchService = () => dispatch => {
// 	fetch(`${API_BASE_URL}/vet/vetlist/:id/services`)
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
