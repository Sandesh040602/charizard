const Comment = require('../models/comments');
const Post = require('../models/post');

//creating a comment
module.exports.create = function(req,res){
    // checking if post is there or some one
    Post.findById(req.body.post,function(err,post){
        if(post){
            Comment.create({
                content:req.body.content,
                post: req.body.post,
                user: req.user._id
            },function(err,comment){
                // handle error
                if(err){console.log("error in creating a comment in its controller");}
                
                post.comments.push(comment);// given by mongodb builtin methode
                post.save();//everytime we have to update we have to call .save()
                res.redirect('/');
            });
        }
    });
}