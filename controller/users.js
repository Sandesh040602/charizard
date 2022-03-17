const User = require('../models/user');

module.exports.users = async function(req,res){
    try{let user = await User.findById(req.params.id);
    res.render('user',{
        title: 'usehirs',
        profile_user: user
    });}
    catch(err){
        console.log('ERROR IN USERSCON',err);
    }
};

module.exports.update = async function(req,res){
    if(req.params.id == req.user.id){
        User.findByIdAndUpdate(req.params.id, req.body, function(err,user){
            return res.redirect('/');
        })
    }
    else{
        res.status(401).send('Unauthorizaed');
    }
}

// const User = require('../models/user');
const Posts = require('../models/post');
const { localsName } = require('ejs');

// post is merged in the posts database
module.exports.posts = async function(req,res){
    // req.body.hi = res.locals.user;
    console.log(req.body);
    Posts.create(req.body,function(err,user){
        if(err){console.log('error in creating user while signing up'); return;}
           return res.redirect('/');
       })
}
// creating the new users
module.exports.create = async function(req,res){
    try{if(req.body.password != req.body.cpassword){
        return res.redirect('back');
    }

    let user = await User.findOne({email: req.body.email}); 

        if(!user){
           let user = await User.create(req.body);
           return res.redirect('/login/login');
        }

        else{
            return res.redirect('back');
        }
    }
    catch(err){
        console.log('error',err);
    }
}
// after confirming in signin
module.exports.createSession = async function(req,res){
    //todo
    console.log('redirect');
    return res.redirect('/');
}
//sign in and log in is in signup-login.js in this
// same directory little bit messy

// when somebody posts
