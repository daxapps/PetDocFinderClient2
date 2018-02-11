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
		expect(action.type).toEqual(GOOGLE_MAPS);
	});
});

describe('Vets', () => {
	let didSucceed = false;
	const success = function(a){
		didSucceed = true;
	}
	const fail = function(a){console.log(a)}

	it('Should return the vet', (done) => {
		Vet.findByVetId('abc', function(a){ expect(true); }, function(a){ expect(false); })
		done()
	});
});


