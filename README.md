Assessment-Test
==============
RESTful API's

RESTful API built using Nodejs, Express, Mongoose, JWT

Following are the list of routes,

Users:

Method                  Action                          Purpose
=======================================================================
POST	    http://localhost:3000/register               To register a user
POST    	http://localhost:3000/authenticate           To authenticate a user


Blogs:

Method	                Action                          Purpose
=======================================================================
GET	      http://localhost:3000/blogs                   To Get all Blog Post
POST	    http://localhost:3000/blogs                   To Create Blog Post 
GET	      http://localhost:3000/blogs/:blogId           To Get Specific Blog Post using ID 
PUT	      http://localhost:3000/blogs/:blogId           To Update Specific Blog Post using ID   
DELETE	  http://localhost:3000/posts/:blogId           To Delete Blog Post 


Comments:

Method	                Action                             Purpose
=======================================================================
GET	      http://localhost:3000/comments                   To Get all Comment Post
POST	    http://localhost:3000/comments                   To Create Comment Post 
GET	      http://localhost:3000/comments/:commentId        To Get Specific Comment Post using ID 
PUT	      http://localhost:3000/comments/:commentId        To Update Specific Comment Post using ID   
DELETE	  http://localhost:3000/comments/:commentId        To Delete Comment Post
POST      http://localhost:3000/comments/likeComment       To like comments
