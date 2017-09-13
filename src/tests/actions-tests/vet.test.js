import mongoose from 'mongoose';
import {
	SHOW_ADD_SERVICE, showAddServiceAction, 
	FETCH_SERVICE_SUCCESS, fetchServiceSuccess, 
	GOOGLE_MAPS, googleMaps
} from '../../actions/vet';
import Utilities from '../../utilities/utilities';

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


describe('Vets', () => {
	var currentVet = null;

	beforeEach(function(done){    
    // register?????    
    vet.register("12356432643", "Petsmart", function(doc){      
      currentVet = doc;      
      done();    
    });  
  });  

  afterEach(function(done){    
    vet.model.remove({}, function() {      
      done();    
    });  
  });

	it('Should return the vet', (done) => {
		// const obj = {
		// 	googleId: '12356432643',
		// 	vetname: 'Petsmart'
		// };
		// const action = showAddServiceAction(obj);
		// expect(action.type).toEqual(SHOW_ADD_SERVICE);
		// expect(action.payload).toEqual(obj);
		vet.findById(currentVet.vetId, function(doc) {
			doc.vetId.should.equal("12356432643");
			done();
		});
	});
});


