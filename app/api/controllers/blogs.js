const blogModel = require('../models/blogs');
const userModel = require('../models/users');										

// To get blog data with specific id
module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		blogModel.findById(req.params.blogId, function(err, blogInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "Blog Post Found!!", data:{blogs: blogInfo}});
			}
		});
	},
	
	// To get all blogs data with specific id
	getAll: function(req, res, next) {
		let blogsList = [];

		blogModel.find({}, function(err, blogs){
			if (err){
				next(err);
			} else{
				for (let blog of blogs) {
					blogsList.push({id: blog._id, title: blog.title, body:blog.title ,createdDate: blog.createdDate, user_id: userModel._id});
				}
				res.json({status:"success", message: "Blogs Post list found!!!", data:{blogs: blogsList}});
							
			}

		});
	},

	// To update blog data with specific id passed as a parameter
	updateById: function(req, res, next) {
		
			blogModel.findByIdAndUpdate(req.params.blogId,{title:req.body.title, body:req.body.body}, function(err, blogInfo){

				if(err)
					next(err);
				else {
					res.json({status:"success", message: "Blog Post updated successfully!!!", data:null});
				}
			});
		
	},

	// To delete Blog specific data passed as a parameter 
	deleteById: function(req, res, next) {
		blogModel.findByIdAndRemove(req.params.blogId, function(err, blogInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "Blog Post deleted successfully!!!", data:null});
			}
		});
	},

	// To create Blog content
	create: function(req, res, next) {		
		const blogdata = { title: req.body.title, body: req.body.body, user_id: req.body.user_id, createdDate: req.body.createdDate };
		
			blogModel.create(blogdata, function (err, result) {
		    	if (err) 
			  		next(err);
			 	else
			  		res.json({status: "success", message: "Blog Post added successfully!!!", data: null});
				});
			
	},
}					