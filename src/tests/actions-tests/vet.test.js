import {
	SHOW_ADD_SERVICE, showAddServiceAction, 
	FETCH_SERVICE_SUCCESS, fetchServiceSuccess, 
	GOOGLE_MAPS, googleMaps
} from '../../actions/vet';

describe('fetchServiceSuccess', () => {
	it('Should return the action', () => {
		const obj = {
			servicesRef: []
		};
		const action = fetchServiceSuccess(obj);
		expect(action.type).toEqual(FETCH_SERVICE_SUCCESS);
		expect(action.payload).toEqual(obj.servicesRef);
	});
});

describe('googleMaps', () => {
	it('Should return the action', () => {
		const action = googleMaps();
		// console.log('ACTION', action)
		expect(action.type).toEqual(GOOGLE_MAPS);
	});
});


// describe('showAddServiceAction', () => {
// 	it('Should return the action', () => {
// 		const obj = {
// 			googleId: '145145',
// 			vetname: 'Petsmart'
// 		};
// 		const action = showAddServiceAction(obj);
// 		expect(action.type).toEqual(SHOW_ADD_SERVICE);
// 		expect(action.payload).toEqual(obj);
// 	});
// });


