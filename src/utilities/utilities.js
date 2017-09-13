
export default function Utilities() {
	const Vet = function(){
		const mongoose = require("mongoose");
		const Schema = require('mongoose').Schema;
		const vetSchema = new Schema({
			googleDataId: String,
		  vetName: String,
		  servicesRef: [{ 
		    type: mongoose.Schema.Types.ObjectId, 
		    ref: "Service" 
		  }]
		});
		 //the model uses the schema declaration  
	  var _model = mongoose.model('vets', vetSchema);  
	  var _findById = function(vetId, success, fail){    
	    _model.findOne({vetId: vetId}, function(e, doc){      
	      if(e){        
	        fail(e)      
	      }else{       
	       success(doc);      
	     }    
	   });
    }  
	  return {    
	    schema : vetSchema,    
	    model : _model,    
	    findById : _findById,  
	  }
	}();

} 
