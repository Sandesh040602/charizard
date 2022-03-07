const Posts = require('../models/post');

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