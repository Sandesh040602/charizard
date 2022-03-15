const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, // when you want to define _id as an type
        ref: 'User'// see in the ROBO 3t the name of the models
    },
    // include the arrays of ids of all comments in the post schema itself
    comments: [{
        type: mongoose.Schema.Types.ObjectId, // when you want to define _id as an type
        ref: 'Comment'
    }]
},{
    timestamps: true
});

const Post = mongoose.model('Post',postSchema);
module.exports = Post;