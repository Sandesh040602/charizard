const { redirect } = require('express/lib/response');
const Comment = require('../models/comments');
const Post = require('../models/post');
const { post } = require('../routes/posts');

//creating a comment
module.exports.create = async function(req,res){
    // checking if post is there or some one
    try{
        let post = await Post.findById(req.body.post);

    let comment = await Comment.create({
        content:req.body.content,
        post: req.body.post,
        user: req.user._id
        });
        req.flash('success','post is created');
        post.comments.push(comment);// given by mongodb builtin methode
        post.save();//everytime we have to update we have to call .save()
        res.redirect('/');
    }
    catch(err){
        req.flash('error','post is not created');
        console.log('ERROR',err);
    }
    
}

module.exports.destroy = async function(req,res){
    try{
    let comment = await Comment.findById(req.params.id);
    if(comment.user==req.user.id){
        // we have to first delete comment in the related post otherwise we can't do it later
        let postId = comment.post;
        comment.remove();
        req.flash('success','post is destroyed');
        let post = await Post.findByIdAndUpdate(postId, {$pull: {comments: req.params.id}});
        return res.redirect('back');
    }
    else{
        req.flash('error','post is not destroyed');
        return res.redirect('back');
    }
    }
    catch(err){
        req.flash('error','error occured  & post is not destroyed');
        console.log('ERROR IN COMMENTS CONTROLLER',err);
    }
    
}

// let comment = await Comment.findById(req.params.id, function(err,comment){

//     if(comment.user==req.user.id){

//         // we have to first delete comment in the related post otherwise we can't do it later
//         let postId = comment.post;
//         comment.remove();
//         Post.findByIdAndUpdate(postId, {$pull: {comments: req.params.id}}, function(err,post){
//             return res.redirect('back');
//         }); 
//     }else{
//         return res.redirect('back');

//     }
// });