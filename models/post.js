const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, // when you want to define _id as an type
        ref: 'User'// can be the Users
    }
},{
    timestamps: true
});

const Post = mongoose.model('Post',postSchema);
module.exports = Post;