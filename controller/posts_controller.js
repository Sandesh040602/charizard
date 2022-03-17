const Posts = require('../models/post');
const Comment = require('../models/comments');

// post is merged in the posts database
module.exports.create = async function(req,res){
    try{
        let post = await Posts.create({
        content: req.body.content,
        user: req.user._id});
    
        return res.redirect('/');
    }
     catch(err){
         console.log('ERROR IN POST CREATE',err);
     }   
    
}

module.exports.destroy = async function(req,res){
    try{
        let post = await Posts.findById(req.params.id);
        console.log(post.user);
        console.log('upper');
        if(post.user == req.user.id){
        post.remove();
        Comment.deleteMany({post: req.params.id},function(err){
            return res.redirect('back');
        });
        }
        else{
        return res.redirect('back');
        }
    }
    catch(err){
        console.log('error in post destroy',err);
    }
}
