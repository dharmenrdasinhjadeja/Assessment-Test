const mongoose = require('mongoose');

//Define a Blog Post schema
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
	title: {
		type: String,		
		required: true
	},
	body: {
		type: String,		
		required: true
	},
	user_id : { 
		type: String, 
		required: true
	},
	createdDate: { 
		type: Date, 
		default: Date.now 
	}

});

module.exports = mongoose.model('Blog', BlogSchema);