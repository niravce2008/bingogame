var mongoose = require('mongoose');
var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var Database = module.exports = function Database(){};
function validator (v) {
  return v.length > 0;
};

Database.prototype = {
	  _collections: {
	  	user: {
			  email : String 
			, password : String 
			, name : String 
			//, country : String 
			, state: String 
			, city: String 
			, address: String 
			, zip: String 			
			, phone: String 
			, created_date	: String
			, logout_time : String
			, ip_address	: String
			, status	: String
		},
	  	card: {
		},

	}
	, _db: null
	, _schema: {}
	, _model: {}
	
	, connect: function(url){
		mongoose.connect(url);
		
		this._schema.user = new Schema(this._collections.user);
		this._model.user = mongoose.model('user', this._schema.user);
	}
	
	, model: function(mod){	
		switch (mod){
			case 'user':
				return this._model.user;
		}
	}

};

