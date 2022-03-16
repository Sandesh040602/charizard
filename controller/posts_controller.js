const Posts = require('../models/post');
const Comment = require('../models/comments');

// post is merged in the posts database
module.exports.create = function(req,res){
    console.log('lok');
    // req.body.hi = res.locals.user;
    Posts.create({
        content: req.body.content,
        user: req.user._id},
        function(err,post){
            if(err){
                console.log('error in posts controller');
                return;
            }
            return res.redirect('/');
        });
}

module.exports.destroy = function(req,res){
    Posts.findById(req.params.id,function(err,post){
        //.id means converting the object id into string
        if(post.user == req.user.id){
            post.remove();

            Comment.deleteMany({post: req.params.id},function(err){
                return res.redirect('back');
            });
        }else{
            return res.redirect('back');
        }

    });
}