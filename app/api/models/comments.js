const mongoose = require('mongoose');

//Define a Comments schema
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	title: {
		type: String,		
		required: true
	},
	content: {
		type: String,		
		required: true
	},
	user_id : { 
		type: String, 
		required: true
  },
	blog_id : { 
		type: String, 
		required: true
	},
	likes: {
			type: Array,
			default: []
	},
	createdDate: { 
		type: Date, 
		default: Date.now 
	}

});

module.exports = mongoose.model('Comment', CommentSchema);