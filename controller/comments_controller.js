const { redirect } = require('express/lib/response');
const Comment = require('../models/comments');
const Post = require('../models/post');
const { post } = require('../routes/posts');

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

module.exports.destroy = function(req,res){
    Comment.findById(req.params.id, function(err,comment){

        if(comment.user==req.user.id){

            // we have to first delete comment in the related post otherwise we can't do it later
            let postId = comment.post;
            comment.remove();
            Post.findByIdAndUpdate(postId, {$pull: {comments: req.params.id}}, function(err,post){
                return res.redirect('back');
            }); 
        }else{
            return res.redirect('back');

        }
    });
}