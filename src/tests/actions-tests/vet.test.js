import mongoose from 'mongoose';
import {
	SHOW_ADD_SERVICE, showAddServiceAction, 
	FETCH_SERVICE_SUCCESS, fetchServiceSuccess, 
	GOOGLE_MAPS, googleMaps
} from '../../actions/vet';
import Vet from '../utilities/models';

mongoose.connect('mongodb://localhost/test');

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

	// console.log('VET3:', Vet)

describe('Vets', () => {
	// console.log('VET:', Vet)
	// var currentVet = null;
	let didSucceed = false;
	const success = function(a){
		didSucceed = true;
	}
	const fail = function(a){console.log(a)}

	it('Should return the vet', (done) => {
	// console.log('VET2:', Vet)

		// const obj = {
		// 	googleId: '12356432643',
		// 	vetname: 'Petsmart'
		// };
		// const action = showAddServiceAction(obj);
		// expect(action.type).toEqual(SHOW_ADD_SERVICE);
		// expect(action.payload).toEqual(obj);
		console.log(typeof(Vet.findByVetId))
		Vet.findByVetId('abc', function(a){ expect(true); }, function(a){ expect(false); })
		done()
	});
});


