const commentModel = require('../models/comments');					
const userModel = require('../models/users');
const blogModel = require('../models/blogs');					

module.exports = {
    
    // To get comment with specific id
    getById: function(req, res, next) {
		console.log(req.body);
		commentModel.findById(req.params.commentId, function(err, commentInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "Comments Found!!", data:{comments: commentInfo}});
			}
		});
    },
    
    // To get all comments data
	getAll: function(req, res, next) {
		let commentList = [];

		commentModel.find({}, function(err, comments){
			if (err){
				next(err);
			} else{
				for (let comment of comments) {
					commentList.push({id: comment._id, title: comment.title, content:comment.content, user_id: comment.user_id, blog_id: comment.user_id, createdDate: comment.createdDate});
				}
				res.json({status:"success", message: "Comment list found!!!", data:{comments: commentList}});							
			}
		});
    },
    
    // To get comment with specific id passed as a parameter
	updateById: function(req, res, next) {
				
			commentModel.findByIdAndUpdate(req.params.commentId,{title:req.body.title, content:req.body.content}, function(err, commentInfo){

				if(err)
					next(err);
				else {
					res.json({status:"success", message: "Comment updated successfully!!!", data:null});
				}
			});
		
	},

    // To Delete comment with specific id passed as a parameter
	deleteById: function(req, res, next) {
		commentModel.findByIdAndRemove(req.params.commentId, function(err, commentInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "Comment Deleted successfully!!!", data:null});
			}
		});
	},

    // To Create New comment
	create: function(req, res, next) {
				
		const commentdata = { title: req.body.title, content: req.body.content, user_id: req.body.user_id, blog_id: req.body.blog_id, createdDate: req.body.createdDate };
		commentModel.create(commentdata, function (err, result) {
			if (err) 
			  	next(err);
			 else
			  	res.json({status: "success", message: "Comment added successfully!!!", data: null});
			});
	},
	
	// To Like/Dislike Comment
	likeDislikeComment: function(req, res, next) {
		console.log("sdfsdfsdfsdf");		
		userModel.findOne({
            _id: req.body.user_id
        })
        .then(results => { blogModel.findOne({ _id: req.body.blog_id })
            .then(data => { 
				 let updateData = {
                    user_id: req.body.user_id,
                    blog_id: req.body.blog_id,
                    likes: {
                        user_id: req.body.user_id,
                        blog_id: req.body.blog_id,
                        status: req.body.like
                    }                    
				}
				
                commentModel.findOneAndUpdate({_id: req.body.id}, updateData, {new:true})
                .then(doc => {        
                    res.status(201).json({status: "success", message: "Comment liked successfully."});
                })
                .catch(err => {
                    res.status(500).json(err);
                });
            })
            .catch(err => {
                res.status(500).json(err);
            });           
        })
        .catch(err => {
            res.status(500).json(err);
        });
    }

    
}