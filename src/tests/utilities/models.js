var Vet = function() {
	var mongoose = require('mongoose');  
  var Schema = require('mongoose').Schema; 
  var VetSchema = new Schema({    
    googleDataId: String, //google's place id
	  vetName: String,
	  servicesRef: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Service" 
  		}]  
  }); 

   //the model uses the schema declaration  
  var _model = mongoose.model('Vet', VetSchema);  
  var _findByVetId = function(vetId, success, fail){ 
  	_model.create({
  		googleDataId: '2324',
  		vetName: 'Bob Vet'
  	})   
    _model.findOne({googleDataId: vetId}, function(e, doc){      
      if(e){        
        fail(e)      
      }else{       
       success(doc);      
     }    
   });
  }  
  return {    
    schema : VetSchema,    
    model : _model,    
    findByVetId : _findByVetId,  
  }
}();

module.exports = Vet;

