const Posts = require('../models/post');
const Comment = require('../models/comments');

// post is merged in the posts database
module.exports.create = async function(req,res){
    // console.log("hi");
    try {
        let post = await Post.create({
          content: req.body.content,
          user: req.user._id,
        })
    
        post.user = await User.findById(post.user).select("-password")
        // password should be removed
        if (req.xhr) {
            console.log("ok");
          return res.status('200').json({
            data: {
              post: post,
            },
            message: 'Post Created',
          })
        }
        req.flash('success', 'New Post Added')
        return res.redirect('back')
      }
     catch(err){
        req.flash('error','post not published');
         return res.redirect('back');
     }   
    
}

module.exports.destroy = async function(req,res){
    try{
        let post = await Posts.findById(req.params.id);
        console.log(post.user);
        console.log('upper');
        if(post.user == req.user.id){
            req.flash('success','post and associated deleted');
        post.remove();
        Comment.deleteMany({post: req.params.id},function(err){
            return res.redirect('back');
        });
        }
        else{
            req.flash('error','you cant delete this post');
        return res.redirect('back');
        }
    }
    catch(err){
        console.log('error in post destroy',err);
    }
}
