import { API_BASE_URL } from "../config";

export const SHOW_ADD_SERVICE = "SHOW_ADD_SERVICE";
export const showAddServiceAction = (googleId, vetName, dispatch) => {
	return fetch(`${API_BASE_URL}/vets/vetlist/`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ googleDataId: googleId, vetName })
	})
		.then(res => {
			// console.log("RES: ", res.json());
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(obj => {
			console.log("OBJ: ", obj);
			dispatch(fetchServiceSuccess(obj));
			dispatch({
				type: SHOW_ADD_SERVICE,
				payload: obj
			});
		});
};

export const FETCH_SERVICE_SUCCESS = "FETCH_SERVICE_SUCCESS";
export const fetchServiceSuccess = obj => ({
	type: FETCH_SERVICE_SUCCESS,
	payload: obj.servicesRef
});

export const GOOGLE_MAPS = "GOOGLE_MAPS";
export const googleMaps = () => {
	console.log("WINDOW: ", window.googleMapInfo);
	return {
		type: GOOGLE_MAPS,
		payload: window.googleMapInfo
	};
};
