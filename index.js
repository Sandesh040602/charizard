const express = require('express');// requiring express to make the files as scattered as possible
const app = express();
const port = 8000;
 
const cookieParser = require('cookie-parser');
console.log('1');



app.use(express.urlencoded({extended:true}));

// used for session cookie

const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');


// using the cookie parser
app.use(cookieParser());
const db = require('./config/mongoose');

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);// using express layouts

app.set('layout extractStyles',true);//setting up the styles true for different pages
app.set('layout extractScripts',true);
app.use(express.static('assets'));
//setting up the scripts true for different pages
//after doing the above mentioned , now we can use different sttic file in our layouts

// acquiring controllers so that to use them in different cases
app.use(express.urlencoded({
    extended: true
  }));// this will encode string to object value// merging the present directory with our views name 
// // setting up the middle ware so be able to parse the code
app.use(function(req,res,next){
    console.log(req.body);
    next();
});

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
//for acessing static files
// // setting up the view engine
 app.set('view engine','ejs');
app.set('views', './views');

app.use(session({
    name: 'charizard',
    // TODO change the scret before deployment on production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore({
        mongooseConnection : db,
        autoRemove: 'disabled'
    },function(err){
        console.log(err || 'no error is generated');
    })
}));

app.use(passport.initialize());// telling to use passport
app.use(passport.session());// to maintain sessions
app.use(passport.setAuthenticatedUser);


app.use('/',require('./routes/index'));// this is our link to the router which
//ever link is generating will now go to routes/index.js
;
app.listen(port,function(err){
    if(err){console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on the port: ${port}`);
});